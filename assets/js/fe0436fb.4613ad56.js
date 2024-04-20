"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[10707],{15680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>f});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),p=a,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return r?t.createElement(f,i(i({ref:n},d),{},{components:r})):t.createElement(f,i({ref:n},d))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},59994:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=r(58168),a=(r(96540),r(15680));const o={id:"random",title:"Random"},i=void 0,s={unversionedId:"reference/services/random",id:"reference/services/random",title:"Random",description:"Random service provides utilities to generate random numbers. It's a functional wrapper of scala.util.Random. This service contains various different pseudo-random generators like nextInt, nextBoolean and nextDouble. Each random number generator functions return a URIO[Random, T] value.",source:"@site/docs/reference/services/random.md",sourceDirName:"reference/services",slug:"/reference/services/random",permalink:"/reference/services/random",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/services/random.md",tags:[],version:"current",frontMatter:{id:"random",title:"Random"},sidebar:"reference-sidebar",previous:{title:"Clock",permalink:"/reference/services/clock"},next:{title:"System",permalink:"/reference/services/system"}},l={},c=[],d={toc:c},u="wrapper";function m(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Random service provides utilities to generate random numbers. It's a functional wrapper of ",(0,a.yg)("inlineCode",{parentName:"p"},"scala.util.Random"),". This service contains various different pseudo-random generators like ",(0,a.yg)("inlineCode",{parentName:"p"},"nextInt"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"nextBoolean")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"nextDouble"),". Each random number generator functions return a ",(0,a.yg)("inlineCode",{parentName:"p"},"URIO[Random, T]")," value."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nfor {\n  randomInt    <- Random.nextInt\n  _            <- Console.printLine(s"A random Int: $randomInt")\n  randomChar   <- Random.nextPrintableChar\n  _            <- Console.printLine(s"A random Char: $randomChar")\n  randomDouble <- Random.nextDoubleBetween(1.0, 5.0)\n  _            <- Console.printLine(s"A random double between 1.0 and 5.0: $randomDouble")\n} yield ()\n')),(0,a.yg)("p",null,"Random service has a ",(0,a.yg)("inlineCode",{parentName:"p"},"setSeed")," which helps us to alter the state of the random generator. It is useful for setting up a test version of Random service when we need to reproduce always the same sequence of numbers."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nfor {\n  _        <- Random.setSeed(0)\n  nextInts <- (Random.nextInt zip Random.nextInt)\n} yield assert(nextInts == (-1155484576,-723955400))\n")),(0,a.yg)("p",null,"Also, it has a utility to shuffle a list and to generate random samples from Gaussian distribution:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"shuffle")," - Takes a list as an input and shuffles it."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"nextGaussian"),' \u2014 Returns the next pseudorandom, Gaussian ("normally") distributed double value with mean 0.0 and standard deviation 1.0.')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Note"),":"),(0,a.yg)("p",{parentName:"blockquote"},"Random numbers that are generated via Random service are not cryptographically strong. Therefore it's not safe to use the ZIO Random service for security domains where a high level of security and randomness is required, such as password generation.")))}m.isMDXComponent=!0}}]);