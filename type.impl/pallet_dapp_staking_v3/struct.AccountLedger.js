(function() {var type_impls = {
"pallet_dapp_staking_v3":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AccountLedger%3CUnlockingLen%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#383-746\">source</a><a href=\"#impl-AccountLedger%3CUnlockingLen%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;UnlockingLen&gt; <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.AccountLedger.html\" title=\"struct pallet_dapp_staking_v3::AccountLedger\">AccountLedger</a>&lt;UnlockingLen&gt;<div class=\"where\">where\n    UnlockingLen: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#388-393\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Empty if no locked/unlocking/staked info exists.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.active_locked_amount\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#399-401\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.active_locked_amount\" class=\"fn\">active_locked_amount</a>(&amp;self) -&gt; Balance</h4></section></summary><div class=\"docblock\"><p>Returns active locked amount.\nIf <code>zero</code>, means that associated account hasn’t got any active locked funds.</p>\n<p>It is possible that some funds are undergoing the unlocking period, but they aren’t considered active in that case.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlocking_amount\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#405-409\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.unlocking_amount\" class=\"fn\">unlocking_amount</a>(&amp;self) -&gt; Balance</h4></section></summary><div class=\"docblock\"><p>Returns unlocking amount.\nIf <code>zero</code>, means that associated account hasn’t got any unlocking chunks.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.total_locked_amount\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#413-416\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.total_locked_amount\" class=\"fn\">total_locked_amount</a>(&amp;self) -&gt; Balance</h4></section></summary><div class=\"docblock\"><p>Total locked amount by the user.\nIncludes both active locked amount &amp; unlocking amount.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_lock_amount\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#419-421\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.add_lock_amount\" class=\"fn\">add_lock_amount</a>(&amp;mut self, amount: Balance)</h4></section></summary><div class=\"docblock\"><p>Adds the specified amount to the total locked amount.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.subtract_lock_amount\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#424-426\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.subtract_lock_amount\" class=\"fn\">subtract_lock_amount</a>(&amp;mut self, amount: Balance)</h4></section></summary><div class=\"docblock\"><p>Subtracts the specified amount of the total locked amount.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_unlocking_chunk\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#434-463\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.add_unlocking_chunk\" class=\"fn\">add_unlocking_chunk</a>(\n    &amp;mut self,\n    amount: Balance,\n    unlock_block: BlockNumber\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"pallet_dapp_staking_v3/enum.AccountLedgerError.html\" title=\"enum pallet_dapp_staking_v3::AccountLedgerError\">AccountLedgerError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Adds the specified amount to the unlocking chunks.</p>\n<p>If entry for the specified block already exists, it’s updated.</p>\n<p>If entry for the specified block doesn’t exist, it’s created and insertion is attempted.\nIn case vector has no more capacity, error is returned, and whole operation is a noop.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlockable_amount\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#466-469\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.unlockable_amount\" class=\"fn\">unlockable_amount</a>(&amp;self, current_period: PeriodNumber) -&gt; Balance</h4></section></summary><div class=\"docblock\"><p>Amount available for unlocking.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.claim_unlocked\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#472-485\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.claim_unlocked\" class=\"fn\">claim_unlocked</a>(&amp;mut self, current_block_number: BlockNumber) -&gt; Balance</h4></section></summary><div class=\"docblock\"><p>Claims all of the fully unlocked chunks, and returns the total claimable amount.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.consume_unlocking_chunks\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#488-495\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.consume_unlocking_chunks\" class=\"fn\">consume_unlocking_chunks</a>(&amp;mut self) -&gt; Balance</h4></section></summary><div class=\"docblock\"><p>Consumes all of the unlocking chunks, and returns the total amount being unlocked.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.stakeable_amount\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#500-503\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.stakeable_amount\" class=\"fn\">stakeable_amount</a>(&amp;self, active_period: PeriodNumber) -&gt; Balance</h4></section></summary><div class=\"docblock\"><p>Amount that is available for staking.</p>\n<p>This is equal to the total active locked amount, minus the staked amount already active.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.staked_amount\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#506-515\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.staked_amount\" class=\"fn\">staked_amount</a>(&amp;self, active_period: PeriodNumber) -&gt; Balance</h4></section></summary><div class=\"docblock\"><p>Amount that is staked, in respect to the currently active period.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.staked_amount_for_type\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#518-527\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.staked_amount_for_type\" class=\"fn\">staked_amount_for_type</a>(\n    &amp;self,\n    subperiod: <a class=\"enum\" href=\"pallet_dapp_staking_v3/enum.Subperiod.html\" title=\"enum pallet_dapp_staking_v3::Subperiod\">Subperiod</a>,\n    period: PeriodNumber\n) -&gt; Balance</h4></section></summary><div class=\"docblock\"><p>How much is staked for the specified subperiod, in respect to the specified era.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_stake_amount\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#572-609\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.add_stake_amount\" class=\"fn\">add_stake_amount</a>(\n    &amp;mut self,\n    amount: Balance,\n    current_era: EraNumber,\n    current_period_info: <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.PeriodInfo.html\" title=\"struct pallet_dapp_staking_v3::PeriodInfo\">PeriodInfo</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"pallet_dapp_staking_v3/enum.AccountLedgerError.html\" title=\"enum pallet_dapp_staking_v3::AccountLedgerError\">AccountLedgerError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Adds the specified amount to total staked amount, if possible.</p>\n<p>Staking can only be done for the ongoing period, and era.</p>\n<ol>\n<li>The <code>period</code> requirement enforces staking in the ongoing period.</li>\n<li>The <code>era</code> requirement enforces staking in the ongoing era.</li>\n</ol>\n<p>The 2nd condition is needed to prevent stakers from building a significant history of stakes,\nwithout claiming the rewards. So if a historic era exists as an entry, stakers will first need to claim\nthe pending rewards, before they can stake again.</p>\n<p>Additionally, the staked amount must not exceed what’s available for staking.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unstake_amount\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#616-651\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.unstake_amount\" class=\"fn\">unstake_amount</a>(\n    &amp;mut self,\n    amount: Balance,\n    current_era: EraNumber,\n    current_period_info: <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.PeriodInfo.html\" title=\"struct pallet_dapp_staking_v3::PeriodInfo\">PeriodInfo</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"pallet_dapp_staking_v3/enum.AccountLedgerError.html\" title=\"enum pallet_dapp_staking_v3::AccountLedgerError\">AccountLedgerError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Subtracts the specified amount from the total staked amount, if possible.</p>\n<p>Unstake can only be called if the entry for the current era exists.\nIn case historic entry exists, rewards first need to be claimed, before unstaking is possible.\nSimilar as with stake functionality, this is to prevent staker from building a significant history of stakes.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.staked_period\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#654-660\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.staked_period\" class=\"fn\">staked_period</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;PeriodNumber&gt;</h4></section></summary><div class=\"docblock\"><p>Period for which account has staking information or <code>None</code> if no staking information exists.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.earliest_staked_era\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#663-669\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.earliest_staked_era\" class=\"fn\">earliest_staked_era</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;EraNumber&gt;</h4></section></summary><div class=\"docblock\"><p>Earliest era for which the account has staking information or <code>None</code> if no staking information exists.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.maybe_cleanup_expired\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#677-686\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.maybe_cleanup_expired\" class=\"fn\">maybe_cleanup_expired</a>(\n    &amp;mut self,\n    valid_threshold_period: PeriodNumber\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Cleanup staking information if it has expired.</p>\n<h5 id=\"args\"><a class=\"doc-anchor\" href=\"#args\">§</a>Args</h5>\n<p><code>valid_threshold_period</code> - last period for which entries can still be considered valid.</p>\n<p><code>true</code> if any change was made, <code>false</code> otherwise.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.claim_up_to_era\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#693-745\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_dapp_staking_v3/struct.AccountLedger.html#tymethod.claim_up_to_era\" class=\"fn\">claim_up_to_era</a>(\n    &amp;mut self,\n    era: EraNumber,\n    period_end: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;EraNumber&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.EraStakePairIter.html\" title=\"struct pallet_dapp_staking_v3::EraStakePairIter\">EraStakePairIter</a>, <a class=\"enum\" href=\"pallet_dapp_staking_v3/enum.AccountLedgerError.html\" title=\"enum pallet_dapp_staking_v3::AccountLedgerError\">AccountLedgerError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>‘Claim’ rewards up to the specified era.\nReturns an iterator over the <code>(era, amount)</code> pairs, where <code>amount</code>\ndescribes the staked amount eligible for reward in the appropriate era.</p>\n<p>If <code>period_end</code> is provided, it’s used to determine whether all applicable chunks have been claimed.</p>\n</div></details></div></details>",0,"pallet_dapp_staking_v3::types::AccountLedgerFor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-AccountLedger%3CUnlockingLen%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#368-381\">source</a><a href=\"#impl-Default-for-AccountLedger%3CUnlockingLen%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;UnlockingLen&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.AccountLedger.html\" title=\"struct pallet_dapp_staking_v3::AccountLedger\">AccountLedger</a>&lt;UnlockingLen&gt;<div class=\"where\">where\n    UnlockingLen: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#372-380\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","pallet_dapp_staking_v3::types::AccountLedgerFor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-AccountLedger%3CUnlockingLen%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#343\">source</a><a href=\"#impl-PartialEq-for-AccountLedger%3CUnlockingLen%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;UnlockingLen: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.AccountLedger.html\" title=\"struct pallet_dapp_staking_v3::AccountLedger\">AccountLedger</a>&lt;UnlockingLen&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#343\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","pallet_dapp_staking_v3::types::AccountLedgerFor"],["<section id=\"impl-Eq-for-AccountLedger%3CUnlockingLen%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#349\">source</a><a href=\"#impl-Eq-for-AccountLedger%3CUnlockingLen%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;UnlockingLen: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.AccountLedger.html\" title=\"struct pallet_dapp_staking_v3::AccountLedger\">AccountLedger</a>&lt;UnlockingLen&gt;</h3></section>","Eq","pallet_dapp_staking_v3::types::AccountLedgerFor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-AccountLedger%3CUnlockingLen%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#346\">source</a><a href=\"#impl-TypeInfo-for-AccountLedger%3CUnlockingLen%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;UnlockingLen&gt; TypeInfo for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.AccountLedger.html\" title=\"struct pallet_dapp_staking_v3::AccountLedger\">AccountLedger</a>&lt;UnlockingLen&gt;<div class=\"where\">where\n    BoundedVec&lt;<a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.UnlockingChunk.html\" title=\"struct pallet_dapp_staking_v3::UnlockingChunk\">UnlockingChunk</a>, UnlockingLen&gt;: TypeInfo + 'static,\n    UnlockingLen: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.AccountLedger.html\" title=\"struct pallet_dapp_staking_v3::AccountLedger\">AccountLedger</a>&lt;UnlockingLen&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#346\">source</a><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","pallet_dapp_staking_v3::types::AccountLedgerFor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MaxEncodedLen-for-AccountLedger%3CUnlockingLen%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#341\">source</a><a href=\"#impl-MaxEncodedLen-for-AccountLedger%3CUnlockingLen%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;UnlockingLen: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.AccountLedger.html\" title=\"struct pallet_dapp_staking_v3::AccountLedger\">AccountLedger</a>&lt;UnlockingLen&gt;<div class=\"where\">where\n    BoundedVec&lt;<a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.UnlockingChunk.html\" title=\"struct pallet_dapp_staking_v3::UnlockingChunk\">UnlockingChunk</a>, UnlockingLen&gt;: MaxEncodedLen,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_encoded_len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#341\">source</a><a href=\"#method.max_encoded_len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">max_encoded_len</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Upper bound, in bytes, of the maximum encoded size of this item.</div></details></div></details>","MaxEncodedLen","pallet_dapp_staking_v3::types::AccountLedgerFor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-AccountLedger%3CUnlockingLen%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#340\">source</a><a href=\"#impl-Decode-for-AccountLedger%3CUnlockingLen%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;UnlockingLen: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; Decode for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.AccountLedger.html\" title=\"struct pallet_dapp_staking_v3::AccountLedger\">AccountLedger</a>&lt;UnlockingLen&gt;<div class=\"where\">where\n    BoundedVec&lt;<a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.UnlockingChunk.html\" title=\"struct pallet_dapp_staking_v3::UnlockingChunk\">UnlockingChunk</a>, UnlockingLen&gt;: Decode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#340\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy: Input&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Error&gt;</h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.77.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","pallet_dapp_staking_v3::types::AccountLedgerFor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AccountLedger%3CUnlockingLen%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#345\">source</a><a href=\"#impl-Clone-for-AccountLedger%3CUnlockingLen%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;UnlockingLen: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.AccountLedger.html\" title=\"struct pallet_dapp_staking_v3::AccountLedger\">AccountLedger</a>&lt;UnlockingLen&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#345\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","pallet_dapp_staking_v3::types::AccountLedgerFor"],["<section id=\"impl-EncodeLike-for-AccountLedger%3CUnlockingLen%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#339\">source</a><a href=\"#impl-EncodeLike-for-AccountLedger%3CUnlockingLen%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;UnlockingLen: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; EncodeLike for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.AccountLedger.html\" title=\"struct pallet_dapp_staking_v3::AccountLedger\">AccountLedger</a>&lt;UnlockingLen&gt;<div class=\"where\">where\n    BoundedVec&lt;<a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.UnlockingChunk.html\" title=\"struct pallet_dapp_staking_v3::UnlockingChunk\">UnlockingChunk</a>, UnlockingLen&gt;: Encode,</div></h3></section>","EncodeLike","pallet_dapp_staking_v3::types::AccountLedgerFor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-AccountLedger%3CUnlockingLen%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#342\">source</a><a href=\"#impl-Debug-for-AccountLedger%3CUnlockingLen%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;UnlockingLen: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"pallet_dapp_staking_v3/trait.Debug.html\" title=\"trait pallet_dapp_staking_v3::Debug\">Debug</a> for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.AccountLedger.html\" title=\"struct pallet_dapp_staking_v3::AccountLedger\">AccountLedger</a>&lt;UnlockingLen&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#342\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"pallet_dapp_staking_v3/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"pallet_dapp_staking_v3/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","pallet_dapp_staking_v3::types::AccountLedgerFor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-AccountLedger%3CUnlockingLen%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#339\">source</a><a href=\"#impl-Encode-for-AccountLedger%3CUnlockingLen%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;UnlockingLen: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt;&gt; Encode for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.AccountLedger.html\" title=\"struct pallet_dapp_staking_v3::AccountLedger\">AccountLedger</a>&lt;UnlockingLen&gt;<div class=\"where\">where\n    BoundedVec&lt;<a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.UnlockingChunk.html\" title=\"struct pallet_dapp_staking_v3::UnlockingChunk\">UnlockingChunk</a>, UnlockingLen&gt;: Encode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#339\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_dapp_staking_v3/types.rs.html#339\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)</h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.Vec.html\" title=\"struct pallet_dapp_staking_v3::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</div></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","pallet_dapp_staking_v3::types::AccountLedgerFor"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()