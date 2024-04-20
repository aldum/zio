"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[25394],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>y});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),g=s(t),d=i,y=g["".concat(o,".").concat(d)]||g[d]||u[d]||r;return t?a.createElement(y,l(l({ref:n},m),{},{components:t})):a.createElement(y,l({ref:n},m))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[g]="string"==typeof e?e:i,l[1]=p;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16761:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=t(58168),i=(t(96540),t(15680));const r={id:"zpipeline",title:"ZPipeline"},l=void 0,p={unversionedId:"reference/stream/zpipeline",id:"reference/stream/zpipeline",title:"ZPipeline",description:"Introduction",source:"@site/docs/reference/stream/zpipeline.md",sourceDirName:"reference/stream",slug:"/reference/stream/zpipeline",permalink:"/reference/stream/zpipeline",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stream/zpipeline.md",tags:[],version:"current",frontMatter:{id:"zpipeline",title:"ZPipeline"},sidebar:"reference-sidebar",previous:{title:"Scheduling",permalink:"/reference/stream/zstream/scheduling"},next:{title:"Introduction to ZSink",permalink:"/reference/stream/zsink/"}},o={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Creation",id:"creation",level:2},{value:"From Function",id:"from-function",level:3},{value:"Built-in Pipelines",id:"built-in-pipelines",level:2},{value:"Identity",id:"identity",level:3},{value:"Splitting",id:"splitting",level:3},{value:"Dropping",id:"dropping",level:3},{value:"Prepending",id:"prepending",level:3},{value:"Compression",id:"compression",level:3},{value:"Decompression",id:"decompression",level:3},{value:"Decoders",id:"decoders",level:3},{value:"Operations",id:"operations",level:2},{value:"Input Transformation (Mapping)",id:"input-transformation-mapping",level:3},{value:"Output Transformation (Contramap)",id:"output-transformation-contramap",level:3},{value:"Composing",id:"composing",level:3}],m={toc:s},g="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(g,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"A ",(0,i.yg)("inlineCode",{parentName:"p"},"ZPipeline[+LowerEnv, -UpperEnv, +LowerErr, -UpperErr, +LowerElem, -UpperElem]")," is a stream transformer. Pipelines accept a stream as input, and return the transformed stream as output."),(0,i.yg)("p",null,"ZPipelines can be thought of as a recipe for calling a bunch of methods on a source stream, to yield a new (transformed) stream. A nice mental model is the following type alias:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"type ZPipeline[Env, Err, In, Out] = ZStream[Env, Err, In] => ZStream[Env, Err, Out]\n")),(0,i.yg)("p",null,"There is no fundamental requirement for pipelines to exist, because everything pipelines do can be done directly on a stream. However, because pipelines separate the stream transformation from the source stream itself, it becomes possible to abstract over stream transformations at the level of values, creating, storing, and passing around reusable transformation pipelines that can be applied to many different streams. "),(0,i.yg)("h2",{id:"creation"},"Creation"),(0,i.yg)("h3",{id:"from-function"},"From Function"),(0,i.yg)("p",null,"By using ",(0,i.yg)("inlineCode",{parentName:"p"},"ZPipeline.map")," we convert a function into a pipeline. Let's create a pipeline which converts a stream of strings into a stream of characters:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"val chars = \n ZPipeline.map[String, Chunk[Char]](s => Chunk.fromArray(s.toArray)) >>>\n   ZPipeline.mapChunks[Chunk[Char], Char](_.flatten)\n")),(0,i.yg)("p",null,"There is also a ",(0,i.yg)("inlineCode",{parentName:"p"},"ZPipeline.mapZIO")," which is an effectful version of this constructor."),(0,i.yg)("h2",{id:"built-in-pipelines"},"Built-in Pipelines"),(0,i.yg)("h3",{id:"identity"},"Identity"),(0,i.yg)("p",null,"The identity pipeline passes elements through without any modification:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(1,2,3).via(ZPipeline.identity[Int])\n// Ouput: 1, 2, 3\n")),(0,i.yg)("h3",{id:"splitting"},"Splitting"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"ZPipeline.splitOn")," \u2014 A pipeline that splits strings on a delimiter:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'ZStream("1-2-3", "4-5", "6", "7-8-9-10")\n  .via(ZPipeline.splitOn("-"))\n  .map(_.toInt)\n// Ouput: 1, 2, 3, 4, 5, 6, 7, 8, 9 10\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"ZPipeline.splitLines")," \u2014 A pipeline that splits strings on newlines. Handles both Windows newlines (",(0,i.yg)("inlineCode",{parentName:"p"},"\\r\\n"),") and UNIX newlines (",(0,i.yg)("inlineCode",{parentName:"p"},"\\n"),"):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'ZStream("This is the first line.\\nSecond line.\\nAnd the last line.")\n  .via(ZPipeline.splitLines)\n// Output: "This is the first line.", "Second line.", "And the last line."\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"ZPipeline.splitOnChunk")," \u2014 A pipeline that splits elements on a delimiter and transforms the splits into desired output:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)\n  .via(ZPipeline.splitOnChunk(Chunk(4, 5, 6)))\n// Output: Chunk(1, 2, 3), Chunk(7, 8, 9, 10)\n")),(0,i.yg)("h3",{id:"dropping"},"Dropping"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"ZPipeline.dropWhile")," \u2014 Creates a pipeline that starts consuming values as soon as one fails the given predicate:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)\n  .via(ZPipeline.dropWhile((x: Int) => x <= 5))\n// Output: 6, 7, 8, 9, 10\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"ZPipeline")," also has ",(0,i.yg)("inlineCode",{parentName:"p"},"dropWhileZIO")," which takes an effectful predicate ",(0,i.yg)("inlineCode",{parentName:"p"},"p: I => ZIO[R, E, Boolean]"),"."),(0,i.yg)("h3",{id:"prepending"},"Prepending"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"ZPipeline.prepend")," creates a pipeline that emits the provided chunks before emitting any other values:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"ZStream(2, 3, 4).via(\n  ZPipeline.prepend(Chunk(0, 1))\n)\n// Output: 0, 1, 2, 3, 4\n")),(0,i.yg)("h3",{id:"compression"},"Compression"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"ZPipeline.deflate")," \u2014 The ",(0,i.yg)("inlineCode",{parentName:"p"},"deflate")," pipeline compresses a stream of bytes as specified by ",(0,i.yg)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc1951"},"RFC 1951"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream.ZStream\nimport zio.stream.ZPipeline.deflate\nimport zio.stream.compression.{CompressionLevel, CompressionStrategy, FlushMode}\n\ndef compressWithDeflate(clearText: ZStream[Any, Nothing, Byte]): ZStream[Any, Nothing, Byte] = {\n  val bufferSize: Int = 64 * 1024 // Internal buffer size. Few times bigger than upstream chunks should work well.\n  val noWrap: Boolean = false // For HTTP Content-Encoding should be false.\n  val level: CompressionLevel = CompressionLevel.DefaultCompression\n  val strategy: CompressionStrategy = CompressionStrategy.DefaultStrategy\n  val flushMode: FlushMode = FlushMode.NoFlush\n  clearText.via(deflate(bufferSize, noWrap, level, strategy, flushMode))\n}\n\ndef deflateWithDefaultParameters(clearText: ZStream[Any, Nothing, Byte]): ZStream[Any, Nothing, Byte] =\n  clearText.via(deflate())\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"ZPipeline.gzip")," \u2014 The ",(0,i.yg)("inlineCode",{parentName:"p"},"gzip")," pipeline compresses a stream of bytes as using ",(0,i.yg)("em",{parentName:"p"},"gzip")," method:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.stream.compression._\n\nZStream\n  .fromFileName("file.txt")\n  .via(\n    ZPipeline.gzip(\n      bufferSize = 64 * 1024,\n      level = CompressionLevel.DefaultCompression,\n      strategy = CompressionStrategy.DefaultStrategy,\n      flushMode = FlushMode.NoFlush\n    )\n  )\n  .run(\n    ZSink.fromFileName("file.gz")\n  )\n')),(0,i.yg)("h3",{id:"decompression"},"Decompression"),(0,i.yg)("p",null,"If we are reading ",(0,i.yg)("inlineCode",{parentName:"p"},"Content-Encoding: deflate"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Content-Encoding: gzip")," streams, or other such streams of compressed data, the following pipelines can be helpful. Both decompression methods will fail with ",(0,i.yg)("inlineCode",{parentName:"p"},"CompressionException")," when input wasn't properly compressed:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"ZPipeline.inflate")," \u2014 This pipeline allows decompressing stream of ",(0,i.yg)("em",{parentName:"p"},"deflated")," inputs, according to ",(0,i.yg)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc1951"},"RFC 1951"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream.ZStream\nimport zio.stream.ZPipeline.{ gunzip, inflate }\nimport zio.stream.compression.CompressionException\n\ndef decompressDeflated(deflated: ZStream[Any, Nothing, Byte]): ZStream[Any, CompressionException, Byte] = {\n  val bufferSize: Int = 64 * 1024 // Internal buffer size. Few times bigger than upstream chunks should work well.\n  val noWrap: Boolean = false     // For HTTP Content-Encoding should be false.\n  deflated.via(inflate(bufferSize, noWrap))\n}\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"ZPipeline.gunzip")," \u2014 This pipeline can be used to decompress stream of ",(0,i.yg)("em",{parentName:"p"},"gzipped")," inputs, according to ",(0,i.yg)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc1952"},"RFC 1952"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream.ZStream\nimport zio.stream.ZPipeline.{ gunzip, inflate }\nimport zio.stream.compression.CompressionException\n\ndef decompressGzipped(gzipped: ZStream[Any, Nothing, Byte]): ZStream[Any, CompressionException, Byte] = {\n  val bufferSize: Int = 64 * 1024 // Internal buffer size. Few times bigger than upstream chunks should work well.\n  gzipped.via(gunzip(bufferSize))\n}\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"ZPipeline.gunzipAuto")," \u2014 This pipeline can be used to decompress stream of ",(0,i.yg)("em",{parentName:"p"},"possibly")," ",(0,i.yg)("em",{parentName:"p"},"gzipped")," inputs, according to ",(0,i.yg)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc1952"},"RFC 1952"),". If the input is gzipped, it will be decompressed; if not, it will be passed downstream as-is:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream.ZStream\nimport zio.stream.ZPipeline.gunzipAuto\nimport zio.stream.compression.CompressionException\n\ndef decompressMaybeGzipped(maybeGzipped: ZStream[Any, Nothing, Byte]): ZStream[Any, CompressionException, Byte] = {\n  val bufferSize: Int = 64 * 1024 // Internal buffer size. Few times bigger than upstream chunks should work well.\n  maybeGzipped.via(gunzipAuto(bufferSize))\n}\n")),(0,i.yg)("h3",{id:"decoders"},"Decoders"),(0,i.yg)("p",null,"ZIO stream has a wide variety of pipelines to decode chunks of bytes into strings:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Decoder"),(0,i.yg)("th",{parentName:"tr",align:null},"Input"),(0,i.yg)("th",{parentName:"tr",align:null},"Output"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"ZPipeline.utfDecode")),(0,i.yg)("td",{parentName:"tr",align:null},"Unicode bytes"),(0,i.yg)("td",{parentName:"tr",align:null},"String")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"ZPipeline.utf8Decode")),(0,i.yg)("td",{parentName:"tr",align:null},"UTF-8 bytes"),(0,i.yg)("td",{parentName:"tr",align:null},"String")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"ZPipeline.utf16Decode")),(0,i.yg)("td",{parentName:"tr",align:null},"UTF-16"),(0,i.yg)("td",{parentName:"tr",align:null},"String")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"ZPipeline.utf16BEDecode")),(0,i.yg)("td",{parentName:"tr",align:null},"UTF-16BE bytes"),(0,i.yg)("td",{parentName:"tr",align:null},"String")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"ZPipeline.utf16LEDecode")),(0,i.yg)("td",{parentName:"tr",align:null},"UTF-16LE bytes"),(0,i.yg)("td",{parentName:"tr",align:null},"String")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"ZPipeline.utf32Decode")),(0,i.yg)("td",{parentName:"tr",align:null},"UTF-32 bytes"),(0,i.yg)("td",{parentName:"tr",align:null},"String")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"ZPipeline.utf32BEDecode")),(0,i.yg)("td",{parentName:"tr",align:null},"UTF-32BE bytes"),(0,i.yg)("td",{parentName:"tr",align:null},"String")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"ZPipeline.utf32LEDecode")),(0,i.yg)("td",{parentName:"tr",align:null},"UTF-32LE bytes"),(0,i.yg)("td",{parentName:"tr",align:null},"String")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"ZPipeline.usASCIIDecode")),(0,i.yg)("td",{parentName:"tr",align:null},"US-ASCII bytes"),(0,i.yg)("td",{parentName:"tr",align:null},"String")))),(0,i.yg)("h2",{id:"operations"},"Operations"),(0,i.yg)("h3",{id:"input-transformation-mapping"},"Input Transformation (Mapping)"),(0,i.yg)("p",null,"To transform the ",(0,i.yg)("em",{parentName:"p"},"outputs")," of the pipeline, we can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"ZPipeline#map")," combinator for the success channel, and the ",(0,i.yg)("inlineCode",{parentName:"p"},"ZPipeline#mapError")," combinator for the failure channel. Also, the ",(0,i.yg)("inlineCode",{parentName:"p"},"ZPipeline.mapChunks")," takes a function of type ",(0,i.yg)("inlineCode",{parentName:"p"},"Chunk[O] => Chunk[O2]")," and transforms chunks emitted by the pipeline."),(0,i.yg)("h3",{id:"output-transformation-contramap"},"Output Transformation (Contramap)"),(0,i.yg)("p",null,"To transform the ",(0,i.yg)("em",{parentName:"p"},"inputs")," of the pipeline, we can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"ZPipeline#contramap")," combinator. It takes a map function of type ",(0,i.yg)("inlineCode",{parentName:"p"},"J => I")," and convert a ",(0,i.yg)("inlineCode",{parentName:"p"},"ZPipeline[R, E, I, O]")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"ZPipeline[R, E, J, O]"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"class ZPipeline[-R, +E, -I, +O] {\n  final def contramap[J](f: J => I): ZPipeline[R, E, J, O] = ???\n}\n")),(0,i.yg)("p",null,"Let's create an integer parser pipeline using ",(0,i.yg)("inlineCode",{parentName:"p"},"ZPipeline.contramap"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val numbers: ZStream[Any, Nothing, Int] =\n ZStream("1-2-3-4-5")\n   .mapConcat(_.split("-"))\n   .via(\n     ZPipeline.map[String, Int](_.toInt)\n   )\n')),(0,i.yg)("h3",{id:"composing"},"Composing"),(0,i.yg)("p",null,"We can compose pipelines in two ways:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Composing Two Pipelines")," \u2014 One pipeline can be composed with another pipeline, resulting in a composite pipeline:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val lines: ZStream[Any, Throwable, String] =\n  ZStream\n    .fromFileName("file.txt")\n    .via(\n      ZPipeline.utf8Decode >>> ZPipeline.splitLines\n    )\n')),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Composing ZPipeline with ZSink")," \u2014 One pipeline can be composed with a sink, resulting in a sink that processes elements by piping them through the pipeline and piping the results into the sink:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import java.nio.charset.CharacterCodingException\n\nval refine: ZIO[Any, Throwable, Long] = {\n  val stream: ZStream[Any, Throwable, Byte] = ZStream.fromFileName("file.txt")\n  val pipeline: ZPipeline[Any, CharacterCodingException, Byte, String] =\n    ZPipeline.utf8Decode >>> ZPipeline.splitLines >>> ZPipeline.filter[String](_.contains(\'\u20bf\'))\n  val fileSink: ZSink[Any, Throwable, String, Byte, Long] = ZSink\n    .fromFileName("file.refined.txt")\n    .contramapChunks[String](\n      _.flatMap(line => (line + System.lineSeparator()).getBytes())\n    )\n  val pipeSink: ZSink[Any, Throwable, Byte, Byte, Long] = pipeline >>> fileSink\n  stream >>> pipeSink\n}\n')))}u.isMDXComponent=!0}}]);