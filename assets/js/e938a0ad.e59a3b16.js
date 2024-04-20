"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[45564],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),y=s,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},73782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(58168),s=(n(96540),n(15680));const i={id:"spec",title:"Spec"},a=void 0,o={unversionedId:"reference/test/spec",id:"reference/test/spec",title:"Spec",description:"Constructors",source:"@site/docs/reference/test/spec.md",sourceDirName:"reference/test",slug:"/reference/test/spec",permalink:"/reference/test/spec",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/spec.md",tags:[],version:"current",frontMatter:{id:"spec",title:"Spec"},sidebar:"reference-sidebar",previous:{title:"Sharing Layers Between Multiple Files",permalink:"/reference/test/sharing-layers-between-multiple-files"},next:{title:"Introduction",permalink:"/reference/test/services/"}},l={},p=[{value:"Constructors",id:"constructors",level:2},{value:"Dependencies on Other Services",id:"dependencies-on-other-services",level:2},{value:"Using Standard Test Services",id:"using-standard-test-services",level:2},{value:"Providing Layers",id:"providing-layers",level:2},{value:"Sharing Layers Between Multiple Specs",id:"sharing-layers-between-multiple-specs",level:2},{value:"Operations",id:"operations",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,s.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"constructors"},"Constructors"),(0,s.yg)("h2",{id:"dependencies-on-other-services"},"Dependencies on Other Services"),(0,s.yg)("p",null,"Just like the ",(0,s.yg)("inlineCode",{parentName:"p"},"ZIO")," data type, the ",(0,s.yg)("inlineCode",{parentName:"p"},"Spec")," requires an environment of type ",(0,s.yg)("inlineCode",{parentName:"p"},"R"),". When we write tests, we might need to access a service through the environment. It can be a combination of the standard services such a ",(0,s.yg)("inlineCode",{parentName:"p"},"Clock"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"Console"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"Random")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"System")," or test services like ",(0,s.yg)("inlineCode",{parentName:"p"},"TestClock"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"TestConsole"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"TestRandom"),", and ",(0,s.yg)("inlineCode",{parentName:"p"},"TestSystem"),", or any user-defined services."),(0,s.yg)("h2",{id:"using-standard-test-services"},"Using Standard Test Services"),(0,s.yg)("p",null,"All standard test services are located at the ",(0,s.yg)("inlineCode",{parentName:"p"},"zio.test")," package. They are test implementation of standard ZIO services. The use of these test services enables us to test functionality that depends on printing to or reading from a console, randomness, timings, and, also the system properties."),(0,s.yg)("p",null,"Let's see how we can test the ",(0,s.yg)("inlineCode",{parentName:"p"},"sayHello")," function, which uses the ",(0,s.yg)("inlineCode",{parentName:"p"},"Console")," service:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.Assertion._\n\nimport java.io.IOException\n\ndef sayHello: ZIO[Any, IOException, Unit] =\n  Console.printLine("Hello, World!")\n\nsuite("HelloWorldSpec")(\n  test("sayHello correctly displays output") {\n    for {\n      _      <- sayHello\n      output <- TestConsole.output\n    } yield assertTrue(output == Vector("Hello, World!\\n"))\n  }\n)\n')),(0,s.yg)("p",null,"There is a separate section in the documentation pages that covers ",(0,s.yg)("a",{parentName:"p",href:"/reference/test/services/"},"all built-in test services"),"."),(0,s.yg)("h2",{id:"providing-layers"},"Providing Layers"),(0,s.yg)("p",null,"By using ",(0,s.yg)("inlineCode",{parentName:"p"},"Spec#provideXYZLayer"),", a test or suite of tests can be provided with any dependencies in a similar way to how a ZIO data type can."),(0,s.yg)("h2",{id:"sharing-layers-between-multiple-specs"},"Sharing Layers Between Multiple Specs"),(0,s.yg)("p",null,"ZIO Test has the ability to share layers between multiple specs. This is useful when we want to have some common services available for all tests. We have two ways to do this:"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},"Using ",(0,s.yg)("inlineCode",{parentName:"li"},"Spec#provideXYZShared")," methods, which is useful to share layers between multiple specs that are residing in the same file."),(0,s.yg)("li",{parentName:"ol"},"Using the ",(0,s.yg)("inlineCode",{parentName:"li"},"bootstrap")," layer, which is useful to share layers between multiple specs that are residing in different files.")),(0,s.yg)("h2",{id:"operations"},"Operations"),(0,s.yg)("p",null,"In ZIO Test, specs are just values like other data types in ZIO. So we can filter, map or manipulate these data types. In this section, we are going to learn some of the most important operations on the ",(0,s.yg)("inlineCode",{parentName:"p"},"Spec")," data type:"))}u.isMDXComponent=!0}}]);