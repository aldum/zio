"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[28334],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(y,o(o({ref:t},c),{},{components:r})):a.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},94850:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const i={id:"index",title:"Introduction to ZIO Interop Scalaz",sidebar_label:"ZIO Interop Scalaz"},o=void 0,l={unversionedId:"zio-interop-scalaz/index",id:"zio-interop-scalaz/index",title:"Introduction to ZIO Interop Scalaz",description:"This library provides instances for several Scalaz typeclasses.",source:"@site/docs/zio-interop-scalaz/index.md",sourceDirName:"zio-interop-scalaz",slug:"/zio-interop-scalaz/",permalink:"/zio-interop-scalaz/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-interop-scalaz/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Interop Scalaz",sidebar_label:"ZIO Interop Scalaz"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Interop Reactive Streams",permalink:"/zio-interop-reactivestreams/"},next:{title:"ZIO Interop Twitter",permalink:"/zio-interop-twitter/"}},s={},p=[{value:"Example",id:"example",level:3},{value:"<code>ZIO</code> parallel <code>Applicative</code> instance",id:"zio-parallel-applicative-instance",level:2},{value:"Example",id:"example-1",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"This library provides instances for several Scalaz typeclasses."),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"import scalaz._, Scalaz._\nimport zio.interop.scalaz._\n\ntype Database = IList[User]\n\ndef findUser(id: UserId): ZIO[Database, UserError, User] = ...\ndef findUsers(ids: IList[UserId]): ZIO[Database, UserError, IList[User]] = ids.traverse(findUser(_))\n")),(0,n.yg)("h2",{id:"zio-parallel-applicative-instance"},(0,n.yg)("inlineCode",{parentName:"h2"},"ZIO")," parallel ",(0,n.yg)("inlineCode",{parentName:"h2"},"Applicative")," instance"),(0,n.yg)("p",null,"Due to ",(0,n.yg)("inlineCode",{parentName:"p"},"Applicative")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"Monad")," coherence law ",(0,n.yg)("inlineCode",{parentName:"p"},"ZIO"),"'s ",(0,n.yg)("inlineCode",{parentName:"p"},"Applicative")," instance has to be implemented in terms of ",(0,n.yg)("inlineCode",{parentName:"p"},"bind")," hence when composing multiple effects using ",(0,n.yg)("inlineCode",{parentName:"p"},"Applicative")," they will be sequenced. To cope with that limitation ",(0,n.yg)("inlineCode",{parentName:"p"},"ZIO")," tagged with ",(0,n.yg)("inlineCode",{parentName:"p"},"Parallel")," has an ",(0,n.yg)("inlineCode",{parentName:"p"},"Applicative")," instance which is not ",(0,n.yg)("inlineCode",{parentName:"p"},"Monad")," and operates in parallel."),(0,n.yg)("h3",{id:"example-1"},"Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"import scalaz._, Scalaz._\nimport zio.interop.scalaz._\n\ncase class Dashboard(details: UserDetails, history: TransactionHistory)\n\ndef getDetails(id: UserId): ZIO[Database, UserError, UserDetails] = ...\ndef getHistory(id: UserId): ZIO[Database, UserError, TransactionHistory] = ...\n\ndef buildDashboard(id: UserId): ZIO[Database, UserError, Dashboard] =\n  Tag.unwrap(^(par(getDetails(id)), par(getHistory(id)))(Dashboard.apply))\n\ndef par[R, E, A](io: ZIO[R, E, A]): ParIO[R, E, A] = Tag(io)\n")))}m.isMDXComponent=!0}}]);