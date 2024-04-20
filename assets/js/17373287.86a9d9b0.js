"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[16741],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,y=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},51538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={id:"sharing-layers-within-the-same-file",title:"Sharing Layers within the Same File"},s=void 0,o={unversionedId:"reference/test/sharing-layers-within-the-same-file",id:"reference/test/sharing-layers-within-the-same-file",title:"Sharing Layers within the Same File",description:"The Spec data type has a very nice mechanism to share layers within all tests in a suite. So instead of acquiring and releasing dependencies for each test, we can share the layer within all tests. The test framework acquires that layer for once and shares that between all tests. When the execution of all tests is finished, that layer will be released. To share layers between multiple specs we can use one of the provide methods ending with Shared (provideShared/provideCustomShared/provideSomeShared/provideLayerShared/provideCustomLayerShared/provideSomeLayerShared):",source:"@site/docs/reference/test/sharing-layers-within-the-same-file.md",sourceDirName:"reference/test",slug:"/reference/test/sharing-layers-within-the-same-file",permalink:"/reference/test/sharing-layers-within-the-same-file",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/sharing-layers-within-the-same-file.md",tags:[],version:"current",frontMatter:{id:"sharing-layers-within-the-same-file",title:"Sharing Layers within the Same File"},sidebar:"reference-sidebar",previous:{title:"Test Hierarchies and Organization",permalink:"/reference/test/test-hierarchies-and-organization"},next:{title:"Sharing Layers Between Multiple Files",permalink:"/reference/test/sharing-layers-between-multiple-files"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Spec")," data type has a very nice mechanism to share layers within all tests in a suite. So instead of acquiring and releasing dependencies for each test, we can share the layer within all tests. The test framework acquires that layer for once and shares that between all tests. When the execution of all tests is finished, that layer will be released. To share layers between multiple specs we can use one of the provide methods ending with ",(0,a.yg)("inlineCode",{parentName:"p"},"Shared")," (",(0,a.yg)("inlineCode",{parentName:"p"},"provideShared"),"/",(0,a.yg)("inlineCode",{parentName:"p"},"provideCustomShared"),"/",(0,a.yg)("inlineCode",{parentName:"p"},"provideSomeShared"),"/",(0,a.yg)("inlineCode",{parentName:"p"},"provideLayerShared"),"/",(0,a.yg)("inlineCode",{parentName:"p"},"provideCustomLayerShared"),"/",(0,a.yg)("inlineCode",{parentName:"p"},"provideSomeLayerShared"),"):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'{\n  test("test1")(???) +\n    test("test2")(???)\n}.provideShared(sharedLayer)\n\nsuite("suite1")(\n  test("test1")(???),\n  test("test2")(???)\n).provideShared(sharedLayer)\n\nsuite("all suites")(\n  suite("suite1")(\n    test("test1")(???),\n  ),\n  suite("suite2")(\n    test("test1")(???),\n    test("test2")(???),\n    test("test3")(???)\n  )\n).provideShared(sharedLayer)\n')),(0,a.yg)("p",null,"To demonstrate this, let's try an example. In this example, instead of using the built-in features of the ZIO Test, we want to write our own basic solution to count the number of times tests are executed."),(0,a.yg)("p",null,"First, we need a counter service like the below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ncase class Counter(value: Ref[Int]) {\n  def inc: UIO[Unit] = value.update(_ + 1)\n  def get: UIO[Int] = value.get\n}\n\nobject Counter {\n  val layer =\n    ZLayer.scoped(\n      ZIO.acquireRelease(\n        Ref.make(0).map(Counter(_)) <* ZIO.debug("Counter initialized!")\n      )(c => c.get.debug("Number of tests executed"))\n    )\n  def inc = ZIO.service[Counter].flatMap(_.inc)\n}\n')),(0,a.yg)("p",null,"We use this service to count the number of times the tests are executed, by calling the ",(0,a.yg)("inlineCode",{parentName:"p"},"Counter.inc")," operator after each test:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test._\n\nobject MySpecs extends ZIOSpecDefault {\n  def spec = {\n    suite("Spec1")(\n      test("test1") {\n        assertTrue(true)\n      } @@ TestAspect.after(Counter.inc),\n      test("test2") { assertTrue(true)\n      } @@ TestAspect.after(Counter.inc)\n    ) +\n      suite("Spec2") {\n        test("test1") {\n          assertTrue(true)\n        } @@ TestAspect.after(Counter.inc)\n      }\n  }.provideShared(Counter.layer)\n}\n')),(0,a.yg)("p",null,"If we execute all tests, we will see an output like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Counter initialized!\n+ Spec1\n  + test2\n  + test1\n+ Spec2\n  + test1\nNumber of tests executed: 3\n3 tests passed. 0 tests failed. 0 tests ignored.\n")),(0,a.yg)("p",null,"In the above example, the ",(0,a.yg)("inlineCode",{parentName:"p"},"Counter.layer")," is shared between all tests, and only acquired and released once."))}d.isMDXComponent=!0}}]);