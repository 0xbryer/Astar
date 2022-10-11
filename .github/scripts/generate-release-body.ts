import { Octokit } from "octokit";
import yargs from "yargs";
import { execSync } from "child_process";
import { readFileSync } from "fs";
import path from "path";

// Typescript 4 will support it natively
type Await<T> = T extends PromiseLike<infer U> ? U : T;
type Commits = Await<ReturnType<Octokit["rest"]["repos"]["compareCommits"]>>["data"]["commits"];

function getCompareLink(packageName: string, previousTag: string, newTag: string) {
  const previousPackage = execSync(
    `git show ${previousTag}:../Cargo.lock | grep ${packageName}? | head -1 | grep -o '".*"'`
  ).toString();
  const previousCommit = /#([0-9a-f]*)/g.exec(previousPackage)[1].slice(0, 8);
  const previousRepo = /(https:\/\/.*)\?/g.exec(previousPackage)[1];

  const newPackage = execSync(
    `git show ${newTag}:../Cargo.lock | grep ${packageName}? | head -1 | grep -o '".*"'`
  ).toString();
  const newCommit = /#([0-9a-f]*)/g.exec(newPackage)[1].slice(0, 8);
  const newRepo = /(https:\/\/.*)\?/g.exec(newPackage)[1];
  const newRepoOrganization = /github.com\/([^\/]*)/g.exec(newRepo)[1];

  const diffLink =
    previousRepo !== newRepo
      ? `${previousRepo}/compare/${previousCommit}...${newRepoOrganization}:${newCommit}`
      : `${previousRepo}/compare/${previousCommit}...${newCommit}`;

  return diffLink;
}

async function getCommitAndLabels(
  octokit: Octokit,
  owner: string,
  repo: string,
  previousTag: string,
  newTag: string
): Promise<{ prByLabels: any; commits: any[] }> {
  let commits: Commits = [];
  let more = true;
  let page = 0;
  while (more) {
    const compare = await octokit.rest.repos.compareCommitsWithBasehead({
      owner,
      repo,
      basehead: previousTag + "..." + newTag,
      per_page: 200,
      page,
    });
    commits = commits.concat(compare.data.commits);
    more = compare.data.commits.length == 200;
    page++;
  }

  // Determine commits to exclude
  // - commits reverted in the same range
  const excludedCommits: number[] = [];
  const revertedCommits: number[] = [];
  for (let i = commits.length - 1; i >= 0; i--) {
    const commitMessageFirstLine = commits[i].commit.message.split("\n")[0].trim();

    if (revertedCommits[commitMessageFirstLine] != null) {
      excludedCommits.push(i);
      excludedCommits.push(revertedCommits[commitMessageFirstLine]);
    } else {
      const foundRevertedCommitName = commitMessageFirstLine.match(/Revert \"(.*)\"/);
      if (foundRevertedCommitName?.length > 0) {
        revertedCommits[foundRevertedCommitName[1]] = i;
      }
    }
  }

  const prByLabels = {};
  for (let i = 0; i < commits.length; i++) {
    const commitMessageFirstLine = commits[i].commit.message.split("\n")[0].trim();
    if (!excludedCommits.includes(i)) {
      const foundPrsNumbers = commitMessageFirstLine.match(/\(#([0-9]+)\)$/);
      if (foundPrsNumbers && foundPrsNumbers.length > 1) {
        // This will check current repo and if the PR is not found, will try the official repo
        const repos = [
          { owner, repo },
          { owner: "AstarNetwork", repo: "Astar" },
        ];
        for (const { owner, repo } of repos) {
          try {
            const pr = await octokit.rest.pulls.get({
              owner,
              repo,
              pull_number: parseInt(foundPrsNumbers[1]),
            });

            if (pr.data.labels && pr.data.labels.length > 0) {
              for (const label of pr.data.labels) {
                prByLabels[label.name] = prByLabels[label.name] || [];
                prByLabels[label.name].push(pr.data);
              }
            } else {
              prByLabels[""] = prByLabels[""] || [];
              prByLabels[""].push(pr);
            }
            break;
          } catch (e) {
            // PR not found... let's try the other repo
          }
        }
      }
    }
  }
  return {
    prByLabels,
    commits,
  };
}

function getRuntimeInfo(srtoolReportFolder: string, runtimeName: string) {
  const specVersion = execSync(
    `cat ../../runtime/${runtimeName}/src/lib.rs | grep 'spec_version: [0-9]*' | tail -1`
  ).toString();
  return {
    name: runtimeName,
    version: /:\s?([0-9A-z\-]*)/.exec(specVersion)[1],
    srtool: JSON.parse(
      readFileSync(path.join(srtoolReportFolder, `./${runtimeName}-srtool-digest.json`)).toString()
    ),
  };
}

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

const CLIENT_CHANGES_LABEL = "client";
const RUNTIME_CHANGES_LABEL = "runtime"
const BREAKING_CHANGES_LABEL = "breaksapi";

async function main() {
  const argv = yargs(process.argv.slice(2))
    .usage("Usage: npm run ts-node generate-release-body.ts [args]")
    .version("1.0.0")
    .options({
      from: {
        type: "string",
        describe: "previous tag to retrieve commits from",
        required: true,
      },
      to: {
        type: "string",
        describe: "current tag being drafted",
        required: true,
      },
      owner: {
        type: "string",
        describe: "Repository owner (Ex: AstarNetwork)",
        required: true,
      },
      repo: {
        type: "string",
        describe: "Repository name (Ex: Astar)",
        required: true,
      },
    })
    .demandOption(["from", "to"])
    .help().argv;

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN || undefined,
  });

  const previousTag = argv.from;
  const newTag = argv.to;

  const runtimes = ["shibuya", "shiden", "astar"].map((runtimeName) =>
    getRuntimeInfo(argv["srtool-report-folder"], runtimeName)
  );

  const moduleLinks = ["substrate", "polkadot", "cumulus", "frontier", "astar-frame"].map((repoName) => ({
    name: repoName,
    link: getCompareLink(repoName, previousTag, newTag),
  }));

  const { prByLabels } = await getCommitAndLabels(
    octokit,
    argv.owner,
    argv.repo,
    previousTag,
    newTag
  );

  const filteredClientPRs = prByLabels[CLIENT_CHANGES_LABEL] || [];
  const filteredRuntimePRs = prByLabels[RUNTIME_CHANGES_LABEL] || [];

  const printPr = (pr) => {
    if (pr.labels.includes(BREAKING_CHANGES_LABEL)) {
      return "⚠️ " + pr.title + " (#" + pr.number + ")";
    } else {
      return pr.title + " (#" + pr.number + ")";
    }
  };

  const template = `${
    runtimes.length > 0 ? `## Runtimes
${runtimes
  .map(
    (runtime) => `### ${capitalize(runtime.name)}
\`\`\`
✨ spec_version:                ${runtime.version}
🏋 Runtime Size:                ${runtime.srtool.runtimes.compressed.size}
🗜 Compressed:                  ${runtime.srtool.runtimes.compressed.subwasm.compression.compressed ? "Yes" : "No" }
🎁 Metadata version:            ${ runtime.srtool.runtimes.compressed.subwasm.metadata_version }
🗳️ sha256:                      ${runtime.srtool.runtimes.compressed.sha256}
🗳️ blake2-256:                  ${runtime.srtool.runtimes.compressed.blake2_256}
🗳️ proposal (authorizeUpgrade): ${runtime.srtool.runtimes.compressed.subwasm.parachain_authorize_upgrade_hash}
📦 IPFS:                        ${runtime.srtool.runtimes.compressed.subwasm.ipfs_hash}
\`\`\`
`).join(`\n\n`)}` : ""}
## Build Info
WASM runtime built using \`${runtimes[0]?.srtool.info.rustc}\`
## Changes
${filteredClientPRs.length > 0 ? `### Client
${filteredClientPRs.map((pr) => `* ${printPr(pr)}`).join("\n")}
` : ""}
${filteredRuntimePRs.length > 0 ? `### Runtime
${filteredRuntimePRs.map((pr) => `* ${printPr(pr)}`).join("\n")}
` : ""}
## Dependency Changes
Astar: https://github.com/${argv.owner}/${argv.repo}/compare/${previousTag}...${newTag}
${moduleLinks.map((modules) => `${capitalize(modules.name)}: ${modules.link}`).join("\n")}
`

  console.log(template);
}

main();