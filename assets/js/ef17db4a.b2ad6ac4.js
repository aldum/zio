"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[31549],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>d});var n=t(96540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),g=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=g(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=g(t),y=i,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||r;return t?n.createElement(d,l(l({ref:a},p),{},{components:t})):n.createElement(d,l({ref:a},p))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=y;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var g=2;g<r;g++)l[g]=t[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},54101:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var n=t(58168),i=(t(96540),t(15680));const r={id:"changelog",title:"Changelog"},l="Version history",o={unversionedId:"zio-aws/changelog",id:"zio-aws/changelog",title:"Changelog",description:"Note: this is a manually maintained list of important changes. Because of having auto-release from CI, this",source:"@site/docs/zio-aws/changelog.md",sourceDirName:"zio-aws",slug:"/zio-aws/changelog",permalink:"/zio-aws/changelog",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-aws/changelog.md",tags:[],version:"current",frontMatter:{id:"changelog",title:"Changelog"},sidebar:"ecosystem-sidebar",previous:{title:"Examples",permalink:"/zio-aws/examples"},next:{title:"Migration guide",permalink:"/zio-aws/migration-guide"}},s={},g=[{value:"5.x.x.x",id:"5xxx",level:4},{value:"4.17.104.1",id:"4171041",level:4},{value:"3.15.35.5",id:"315355",level:4},{value:"3.15.19.10",id:"3151910",level:4},{value:"3.15.19.8",id:"315198",level:4},{value:"3.15.19.7",id:"315197",level:4},{value:"3.15.16.0",id:"315160",level:4},{value:"2.14.7.0",id:"21470",level:4},{value:"2.14.3.0",id:"21430",level:4},{value:"1.13.69.1",id:"113691",level:4},{value:"1.13.69.0",id:"113690",level:4}],p={toc:g},u="wrapper";function m(e){let{components:a,...t}=e;return(0,i.yg)(u,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"version-history"},"Version history"),(0,i.yg)("p",null,"Note: this is a manually maintained list of important changes. Because of having auto-release from CI, this\nlist may not reflect ",(0,i.yg)("em",{parentName:"p"},"all")," changes immediately. Dependencies are continuously updated and are not documented here."),(0,i.yg)("h4",{id:"5xxx"},"5.x.x.x"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Migrated to ",(0,i.yg)("inlineCode",{parentName:"li"},"ZIO 2.0.0")," "),(0,i.yg)("li",{parentName:"ul"},"Moved to the ZIO organisation"),(0,i.yg)("li",{parentName:"ul"},"Using the new ZIO service pattern"),(0,i.yg)("li",{parentName:"ul"},"Changed getter naming to match ",(0,i.yg)("inlineCode",{parentName:"li"},"zio-k8s")),(0,i.yg)("li",{parentName:"ul"},"Using ",(0,i.yg)("inlineCode",{parentName:"li"},"zio-prelude")," ",(0,i.yg)("em",{parentName:"li"},"newtype wrappers")," for primitives"),(0,i.yg)("li",{parentName:"ul"},"Using ",(0,i.yg)("inlineCode",{parentName:"li"},"ZIO")," aspects as a base of ",(0,i.yg)("inlineCode",{parentName:"li"},"AwsCallAspect")),(0,i.yg)("li",{parentName:"ul"},"Exposed lower level pagination API calls beside the streaming ones"),(0,i.yg)("li",{parentName:"ul"},"Using the ",(0,i.yg)("inlineCode",{parentName:"li"},"Optional")," type instead of ",(0,i.yg)("inlineCode",{parentName:"li"},"Option")," to reduce boilerplate")),(0,i.yg)("p",null,"See the ",(0,i.yg)("a",{parentName:"p",href:"/zio-aws/migration-guide"},"migration guide")," for more information."),(0,i.yg)("h4",{id:"4171041"},"4.17.104.1"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Migrated to ",(0,i.yg)("inlineCode",{parentName:"li"},"zio-config v2.0.0"))),(0,i.yg)("h4",{id:"315355"},"3.15.35.5"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Support for defining dual HTTP/1.1 and HTTP/2 ",(0,i.yg)("inlineCode",{parentName:"li"},"HttpClient")," layers"),(0,i.yg)("li",{parentName:"ul"},"Convert model case classes to ",(0,i.yg)("inlineCode",{parentName:"li"},".ReadOnly")," trait with ",(0,i.yg)("inlineCode",{parentName:"li"},".asReadOnly"))),(0,i.yg)("h4",{id:"3151910"},"3.15.19.10"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Fix for libraries that use the ",(0,i.yg)("inlineCode",{parentName:"li"},"Integer")," alias for ints (such as ",(0,i.yg)("inlineCode",{parentName:"li"},"zio-aws-sqs"),")")),(0,i.yg)("h4",{id:"315198"},"3.15.19.8"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Updated ",(0,i.yg)("a",{parentName:"li",href:"https://fs2.io"},"fs2")," release that fixes the http4s backend")),(0,i.yg)("h4",{id:"315197"},"3.15.19.7"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Fix for event streaming wrappers such as ",(0,i.yg)("inlineCode",{parentName:"li"},"subscribeToShard")," in ",(0,i.yg)("inlineCode",{parentName:"li"},"zio-aws-kinesis"))),(0,i.yg)("h4",{id:"315160"},"3.15.16.0"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Introduced automatic release from CI, each new AWS SDK release triggers a new ",(0,i.yg)("inlineCode",{parentName:"li"},"zio-aws")," build now"),(0,i.yg)("li",{parentName:"ul"},"zio-config support ")),(0,i.yg)("h4",{id:"21470"},"2.14.7.0"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Updated to AWS SDK 2.14.7"),(0,i.yg)("li",{parentName:"ul"},"Fix an ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/vigoo/zio-aws/issues/23"},"issue")," with http4s streaming uploads"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Iterable")," in place of ",(0,i.yg)("inlineCode",{parentName:"li"},"List")," in the request models"),(0,i.yg)("li",{parentName:"ul"},"The akka-http client now gets the ",(0,i.yg)("em",{parentName:"li"},"actor system")," from the environment"),(0,i.yg)("li",{parentName:"ul"},"Code generator rewritten as an sbt plugin")),(0,i.yg)("h4",{id:"21430"},"2.14.3.0"),(0,i.yg)("p",null,"API breaking changes to make the streaming interface more ergonomic:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Input/output byte streams are now flat (",(0,i.yg)("inlineCode",{parentName:"li"},"ZStream[Any, AwsError, Byte]")," instead of ",(0,i.yg)("inlineCode",{parentName:"li"},"ZStream[Any, AwsError, Chunk[Byte]"),")"),(0,i.yg)("li",{parentName:"ul"},"Streaming operations return a ",(0,i.yg)("inlineCode",{parentName:"li"},"ZStream")," that performs the request on first pull instead of a ",(0,i.yg)("inlineCode",{parentName:"li"},"ZIO[..., ZStream[...]]")),(0,i.yg)("li",{parentName:"ul"},"Streaming for paginated operations that does not have a paginator in the Java SDK"),(0,i.yg)("li",{parentName:"ul"},"No ",(0,i.yg)("inlineCode",{parentName:"li"},"xxxStream")," variants, streaming is the default and only interface for paginatable operations"),(0,i.yg)("li",{parentName:"ul"},"Updated to AWS SDK 2.14.3"),(0,i.yg)("li",{parentName:"ul"},"Fixed handling of some error cases"),(0,i.yg)("li",{parentName:"ul"},"Scala 2.12 version is now available")),(0,i.yg)("h4",{id:"113691"},"1.13.69.1"),(0,i.yg)("p",null,"Initial release republished with fixed metadata in POMs"),(0,i.yg)("h4",{id:"113690"},"1.13.69.0"),(0,i.yg)("p",null,"Initial release based on AWS Java SDK 2.13.69"))}m.isMDXComponent=!0}}]);