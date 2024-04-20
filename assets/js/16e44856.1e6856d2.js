"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2348],{15680:(e,t,r)=>{r.d(t,{xA:()=>f,yg:()=>v});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(v,l(l({ref:t},f),{},{components:r})):n.createElement(v,l({ref:t},f))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const a={id:"leftovers",title:"Leftovers"},l=void 0,i={unversionedId:"reference/stream/zsink/leftovers",id:"reference/stream/zsink/leftovers",title:"Leftovers",description:"Collecting Leftovers",source:"@site/docs/reference/stream/zsink/leftovers.md",sourceDirName:"reference/stream/zsink",slug:"/reference/stream/zsink/leftovers",permalink:"/reference/stream/zsink/leftovers",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stream/zsink/leftovers.md",tags:[],version:"current",frontMatter:{id:"leftovers",title:"Leftovers"},sidebar:"reference-sidebar",previous:{title:"Parallel Operators",permalink:"/reference/stream/zsink/parallel-operators"},next:{title:"Introduction To ZChannels",permalink:"/reference/stream/zchannel/"}},s={},c=[{value:"Collecting Leftovers",id:"collecting-leftovers",level:2},{value:"Ignoring Leftovers",id:"ignoring-leftovers",level:2}],f={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"collecting-leftovers"},"Collecting Leftovers"),(0,o.yg)("p",null,"A sink consumes a variable amount of ",(0,o.yg)("inlineCode",{parentName:"p"},"I")," elements (zero or more) from the upstream. If the upstream is finite, we can collect leftover values by calling ",(0,o.yg)("inlineCode",{parentName:"p"},"ZSink#collectLeftover"),". It returns a tuple that contains the result of the previous sink and its leftovers:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"val s1: ZIO[Any, Nothing, (Chunk[Int], Chunk[Int])] =\n  ZStream(1, 2, 3, 4, 5).run(\n    ZSink.take(3).collectLeftover\n  )\n// Output: (Chunk(1, 2, 3), Chunk(4, 5))\n\n\nval s2: ZIO[Any, Nothing, (Option[Int], Chunk[Int])] =\n  ZStream(1, 2, 3, 4, 5).run(\n    ZSink.head[Int].collectLeftover\n  )\n// Output: (Some(1), Chunk(2, 3, 4, 5))\n")),(0,o.yg)("h2",{id:"ignoring-leftovers"},"Ignoring Leftovers"),(0,o.yg)("p",null,"If we don't need leftovers, we can drop them by using ",(0,o.yg)("inlineCode",{parentName:"p"},"ZSink#ignoreLeftover"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"ZSink.take[Int](3).ignoreLeftover\n")))}p.isMDXComponent=!0}}]);