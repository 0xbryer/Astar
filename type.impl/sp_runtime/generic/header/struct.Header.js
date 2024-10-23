(function() {var type_impls = {
"astar_primitives":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Header%3CNumber,+Hash%3E\" class=\"impl\"><a href=\"#impl-Header%3CNumber,+Hash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash&gt; Header&lt;Number, Hash&gt;<div class=\"where\">where\n    Number: Member + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + MaybeDisplay + AtLeast32BitUnsigned + Codec + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt;,\n    Hash: Hash,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">hash</a>(&amp;self) -&gt; &lt;Hash as Hash&gt;::Output</h4></section></summary><div class=\"docblock\"><p>Convenience helper for computing the hash of the header without having\nto import the trait.</p>\n</div></details></div></details>",0,"astar_primitives::testing::Header","astar_primitives::Header"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-Header%3CNumber,+Hash%3E\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-Header%3CNumber,+Hash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, Number, Hash&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for Header&lt;Number, Hash&gt;<div class=\"where\">where\n    Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt;,\n    Hash: Hash,\n    &lt;Hash as Hash&gt;::Output: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Header&lt;Number, Hash&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.210/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","astar_primitives::testing::Header","astar_primitives::Header"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-Header%3CNumber,+Hash%3E\" class=\"impl\"><a href=\"#impl-Decode-for-Header%3CNumber,+Hash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash&gt; Decode for Header&lt;Number, Hash&gt;<div class=\"where\">where\n    Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + HasCompact,\n    Hash: Hash,\n    &lt;Hash as Hash&gt;::Output: Decode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Header&lt;Number, Hash&gt;, Error&gt;<div class=\"where\">where\n    __CodecInputEdqy: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.77.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","astar_primitives::testing::Header","astar_primitives::Header"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-Header%3CNumber,+Hash%3E\" class=\"impl\"><a href=\"#impl-Encode-for-Header%3CNumber,+Hash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash&gt; Encode for Header&lt;Number, Hash&gt;<div class=\"where\">where\n    Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + HasCompact,\n    Hash: Hash,\n    &lt;Hash as Hash&gt;::Output: Encode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)<div class=\"where\">where\n    __CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</div></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","astar_primitives::testing::Header","astar_primitives::Header"],["<section id=\"impl-Eq-for-Header%3CNumber,+Hash%3E\" class=\"impl\"><a href=\"#impl-Eq-for-Header%3CNumber,+Hash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for Header&lt;Number, Hash&gt;<div class=\"where\">where\n    Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt;,\n    Hash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Hash,\n    &lt;Hash as Hash&gt;::Output: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","astar_primitives::testing::Header","astar_primitives::Header"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Header%3CNumber,+Hash%3E\" class=\"impl\"><a href=\"#impl-Serialize-for-Header%3CNumber,+Hash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for Header&lt;Number, Hash&gt;<div class=\"where\">where\n    Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt;,\n    Hash: Hash,\n    &lt;Hash as Hash&gt;::Output: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.210/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","astar_primitives::testing::Header","astar_primitives::Header"],["<section id=\"impl-EncodeLike-for-Header%3CNumber,+Hash%3E\" class=\"impl\"><a href=\"#impl-EncodeLike-for-Header%3CNumber,+Hash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash&gt; EncodeLike for Header&lt;Number, Hash&gt;<div class=\"where\">where\n    Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + HasCompact,\n    Hash: Hash,\n    &lt;Hash as Hash&gt;::Output: Encode,</div></h3></section>","EncodeLike","astar_primitives::testing::Header","astar_primitives::Header"],["<section id=\"impl-StructuralPartialEq-for-Header%3CNumber,+Hash%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-Header%3CNumber,+Hash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for Header&lt;Number, Hash&gt;<div class=\"where\">where\n    Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt;,\n    Hash: Hash,</div></h3></section>","StructuralPartialEq","astar_primitives::testing::Header","astar_primitives::Header"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Header%3CNumber,+Hash%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Header%3CNumber,+Hash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for Header&lt;Number, Hash&gt;<div class=\"where\">where\n    Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    Hash: Hash + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","astar_primitives::testing::Header","astar_primitives::Header"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-Header%3CNumber,+Hash%3E\" class=\"impl\"><a href=\"#impl-TypeInfo-for-Header%3CNumber,+Hash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash&gt; TypeInfo for Header&lt;Number, Hash&gt;<div class=\"where\">where\n    Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + HasCompact + TypeInfo + 'static,\n    Hash: Hash + 'static,\n    &lt;Hash as Hash&gt;::Output: TypeInfo + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = Header&lt;Number, Hash&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","astar_primitives::testing::Header","astar_primitives::Header"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Header-for-Header%3CNumber,+Hash%3E\" class=\"impl\"><a href=\"#impl-Header-for-Header%3CNumber,+Hash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash&gt; Header for Header&lt;Number, Hash&gt;<div class=\"where\">where\n    Number: BlockNumber,\n    Hash: Hash,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Number\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Number\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Number</a> = Number</h4></section></summary><div class='docblock'>Header number.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Hash\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Hash\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Hash</a> = &lt;Hash as Hash&gt;::Output</h4></section></summary><div class='docblock'>Header hash type</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Hashing\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Hashing\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Hashing</a> = Hash</h4></section></summary><div class='docblock'>Hashing algorithm</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method trait-impl\"><a href=\"#method.new\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">new</a>(\n    number: &lt;Header&lt;Number, Hash&gt; as Header&gt;::Number,\n    extrinsics_root: &lt;Header&lt;Number, Hash&gt; as Header&gt;::Hash,\n    state_root: &lt;Header&lt;Number, Hash&gt; as Header&gt;::Hash,\n    parent_hash: &lt;Header&lt;Number, Hash&gt; as Header&gt;::Hash,\n    digest: Digest\n) -&gt; Header&lt;Number, Hash&gt;</h4></section></summary><div class='docblock'>Creates new header.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.number\" class=\"method trait-impl\"><a href=\"#method.number\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">number</a>(&amp;self) -&gt; &amp;&lt;Header&lt;Number, Hash&gt; as Header&gt;::Number</h4></section></summary><div class='docblock'>Returns a reference to the header number.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_number\" class=\"method trait-impl\"><a href=\"#method.set_number\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">set_number</a>(&amp;mut self, num: &lt;Header&lt;Number, Hash&gt; as Header&gt;::Number)</h4></section></summary><div class='docblock'>Sets the header number.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extrinsics_root\" class=\"method trait-impl\"><a href=\"#method.extrinsics_root\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">extrinsics_root</a>(&amp;self) -&gt; &amp;&lt;Header&lt;Number, Hash&gt; as Header&gt;::Hash</h4></section></summary><div class='docblock'>Returns a reference to the extrinsics root.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_extrinsics_root\" class=\"method trait-impl\"><a href=\"#method.set_extrinsics_root\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">set_extrinsics_root</a>(&amp;mut self, root: &lt;Header&lt;Number, Hash&gt; as Header&gt;::Hash)</h4></section></summary><div class='docblock'>Sets the extrinsic root.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.state_root\" class=\"method trait-impl\"><a href=\"#method.state_root\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">state_root</a>(&amp;self) -&gt; &amp;&lt;Header&lt;Number, Hash&gt; as Header&gt;::Hash</h4></section></summary><div class='docblock'>Returns a reference to the state root.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_state_root\" class=\"method trait-impl\"><a href=\"#method.set_state_root\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">set_state_root</a>(&amp;mut self, root: &lt;Header&lt;Number, Hash&gt; as Header&gt;::Hash)</h4></section></summary><div class='docblock'>Sets the state root.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.parent_hash\" class=\"method trait-impl\"><a href=\"#method.parent_hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">parent_hash</a>(&amp;self) -&gt; &amp;&lt;Header&lt;Number, Hash&gt; as Header&gt;::Hash</h4></section></summary><div class='docblock'>Returns a reference to the parent hash.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_parent_hash\" class=\"method trait-impl\"><a href=\"#method.set_parent_hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">set_parent_hash</a>(&amp;mut self, hash: &lt;Header&lt;Number, Hash&gt; as Header&gt;::Hash)</h4></section></summary><div class='docblock'>Sets the parent hash.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.digest\" class=\"method trait-impl\"><a href=\"#method.digest\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">digest</a>(&amp;self) -&gt; &amp;Digest</h4></section></summary><div class='docblock'>Returns a reference to the digest.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.digest_mut\" class=\"method trait-impl\"><a href=\"#method.digest_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">digest_mut</a>(&amp;mut self) -&gt; &amp;mut Digest</h4></section></summary><div class='docblock'>Get a mutable reference to the digest.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">hash</a>(&amp;self) -&gt; Self::Hash</h4></section></summary><div class='docblock'>Returns the hash of the header.</div></details></div></details>","Header","astar_primitives::testing::Header","astar_primitives::Header"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Header%3CNumber,+Hash%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-Header%3CNumber,+Hash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for Header&lt;Number, Hash&gt;<div class=\"where\">where\n    Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt;,\n    Hash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + Hash,\n    &lt;Hash as Hash&gt;::Output: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;Header&lt;Number, Hash&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","astar_primitives::testing::Header","astar_primitives::Header"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Header%3CNumber,+Hash%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Header%3CNumber,+Hash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Number, Hash&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for Header&lt;Number, Hash&gt;<div class=\"where\">where\n    Number: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt;,\n    Hash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Hash,\n    &lt;Hash as Hash&gt;::Output: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Header&lt;Number, Hash&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","astar_primitives::testing::Header","astar_primitives::Header"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()