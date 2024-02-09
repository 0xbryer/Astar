(function() {var implementors = {
"pallet_chain_extension_assets":[["impl&lt;T&gt; ChainExtension&lt;T&gt; for <a class=\"struct\" href=\"pallet_chain_extension_assets/struct.AssetsExtension.html\" title=\"struct pallet_chain_extension_assets::AssetsExtension\">AssetsExtension</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: Config + Config,\n    &lt;T as Config&gt;::AssetId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,\n    &lt;&lt;T as SysConfig&gt;::Lookup as StaticLookup&gt;::Source: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;T as SysConfig&gt;::AccountId&gt;,</span>"]],
"pallet_chain_extension_unified_accounts":[["impl&lt;T, UA&gt; ChainExtension&lt;T&gt; for <a class=\"struct\" href=\"pallet_chain_extension_unified_accounts/struct.UnifiedAccountsExtension.html\" title=\"struct pallet_chain_extension_unified_accounts::UnifiedAccountsExtension\">UnifiedAccountsExtension</a>&lt;T, UA&gt;<span class=\"where fmt-newline\">where\n    T: Config + Config,\n    UA: UnifiedAddressMapper&lt;T::AccountId&gt;,</span>"]],
"pallet_chain_extension_xvm":[["impl&lt;T, XC, UA&gt; ChainExtension&lt;T&gt; for <a class=\"struct\" href=\"pallet_chain_extension_xvm/struct.XvmExtension.html\" title=\"struct pallet_chain_extension_xvm::XvmExtension\">XvmExtension</a>&lt;T, XC, UA&gt;<span class=\"where fmt-newline\">where\n    T: Config + Config,\n    XC: XvmCall&lt;T::AccountId&gt;,\n    UA: UnifiedAddressMapper&lt;T::AccountId&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()