"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[42341],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var l=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),u=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),p=u(a),g=r,y=p["".concat(s,".").concat(g)]||p[g]||m[g]||i;return a?l.createElement(y,o(o({ref:t},c),{},{components:a})):l.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[p]="string"==typeof e?e:r,o[1]=n;for(var u=2;u<i;u++)o[u]=a[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}g.displayName="MDXCreateElement"},70634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>u});var l=a(58168),r=(a(96540),a(15680));const i={id:"additional-resources",title:"Additional Resources"},o=void 0,n={unversionedId:"zio-quill/additional-resources",id:"zio-quill/additional-resources",title:"Additional Resources",description:"Templates",source:"@site/docs/zio-quill/additional-resources.md",sourceDirName:"zio-quill",slug:"/zio-quill/additional-resources",permalink:"/zio-quill/additional-resources",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-quill/additional-resources.md",tags:[],version:"current",frontMatter:{id:"additional-resources",title:"Additional Resources"},sidebar:"ecosystem-sidebar",previous:{title:"Compiler performance",permalink:"/zio-quill/compiler-performance"},next:{title:"Quill vs. Cassandra",permalink:"/zio-quill/quill-vs-cassandra"}},s={},u=[{value:"Templates",id:"templates",level:2},{value:"Slick comparison",id:"slick-comparison",level:2},{value:"Cassandra libraries comparison",id:"cassandra-libraries-comparison",level:2},{value:"Related Projects",id:"related-projects",level:2},{value:"External content",id:"external-content",level:2},{value:"Talks",id:"talks",level:3},{value:"Blog posts",id:"blog-posts",level:3},{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"License",id:"license",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,l.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"templates"},"Templates"),(0,r.yg)("p",null,"In order to quickly start with Quill, we have setup some template projects:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/getquill/play-quill-jdbc"},"Play Framework with Quill JDBC")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/jeffmath/play-quill-async-postgres-example"},"Play Framework with Quill async-postgres"))),(0,r.yg)("h2",{id:"slick-comparison"},"Slick comparison"),(0,r.yg)("p",null,"Please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/getquill/quill/blob/master/SLICK.md"},"SLICK.md")," for a detailed comparison between Quill and Slick."),(0,r.yg)("h2",{id:"cassandra-libraries-comparison"},"Cassandra libraries comparison"),(0,r.yg)("p",null,"Please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/getquill/quill/blob/master/CASSANDRA.md"},"CASSANDRA.md")," for a detailed comparison between Quill and other main alternatives for interaction with Cassandra in Scala."),(0,r.yg)("h2",{id:"related-projects"},"Related Projects"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/ajozwik/quill-generic"},"quill-generic")," - Generic DAO Support for Quill."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/olafurpg/scala-db-codegen"},"scala-db-codegen")," - Code/boilerplate generator from db schema"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/mslinn/quill-cache/"},"quill-cache")," - Caching layer for Quill"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/mslinn/quill-gen/"},"quill-gen")," - a DAO generator for ",(0,r.yg)("inlineCode",{parentName:"li"},"quill-cache"))),(0,r.yg)("h2",{id:"external-content"},"External content"),(0,r.yg)("h3",{id:"talks"},"Talks"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Dotty/Scala 3]")," Functional Scala 2020 - ",(0,r.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=SmBpGkIsJIU"},"Quill, Dotty, And The Awesome Power of 'Inline'")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Intro]")," ScalaDays Berlin 2016 - ",(0,r.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=nqSYccoSeio"},"Scylla, Charybdis, and the mystery of Quill")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Intro]")," Postgres Philly 2019 - ",(0,r.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=RVs-T5iFdQI"},"Introduction to Quill")),(0,r.yg)("li",{parentName:"ul"},"ScalaUA 2020 - ",(0,r.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=aY8DrjE9lIY"},"Manipulating Abstract Syntax Trees (ASTs) to generate safe SQL Queries with Quill")),(0,r.yg)("li",{parentName:"ul"},"BeeScala 2019 - ",(0,r.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=EXISmUXBXu8"},"Quill + Spark = Better Together")),(0,r.yg)("li",{parentName:"ul"},"Scale By the Bay 2019 - ",(0,r.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=1WVjkP_G2cA"},"Quill + Doobie = Better Together")),(0,r.yg)("li",{parentName:"ul"},"ScQuilL, Porting Quill to Dotty (Ongoing) - ",(0,r.yg)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLqky8QybCVQYNZY_MNJpkjFKT-dAdHQDX"},"Quill, Dotty, and Macros"))),(0,r.yg)("h3",{id:"blog-posts"},"Blog posts"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Intro]")," Haoyi's Programming Blog - ",(0,r.yg)("a",{parentName:"li",href:"https://www.lihaoyi.com/post/WorkingwithDatabasesusingScalaandQuill.html"},"Working with Databases using Scala and Quill")),(0,r.yg)("li",{parentName:"ul"},"Juliano Alves's Blog - ",(0,r.yg)("a",{parentName:"li",href:"https://juliano-alves.com/2020/06/15/streaming-all-the-way-zio-doobie-quill-http4s-fs2/"},"Streaming all the way with ZIO, Doobie, Quill, http4s and fs2")),(0,r.yg)("li",{parentName:"ul"},"Juliano Alves's Blog - ",(0,r.yg)("a",{parentName:"li",href:"https://juliano-alves.com/2020/09/14/quill-translating-boolean-literals/"},"Quill: Translating Boolean Literals")),(0,r.yg)("li",{parentName:"ul"},"Juliano Alves's Blog - ",(0,r.yg)("a",{parentName:"li",href:"https://juliano-alves.com/2019/11/29/quill-ndbc-postgres-a-new-async-module/"},"Quill NDBC Postgres: A New Async Module")),(0,r.yg)("li",{parentName:"ul"},"Juliano Alves's Blog - ",(0,r.yg)("a",{parentName:"li",href:"https://juliano-alves.com/2019/11/18/contributing-to-quill-a-pairing-session/"},"Contributing to Quill, a Pairing Session")),(0,r.yg)("li",{parentName:"ul"},"Medium @ Fwbrasil - ",(0,r.yg)("a",{parentName:"li",href:"https://medium.com/@fwbrasil/quill-spark-a-type-safe-scala-api-for-spark-sql-2672e8582b0d"},"quill-spark: A type-safe Scala API for Spark SQL")),(0,r.yg)("li",{parentName:"ul"},"Scalac.io blog - ",(0,r.yg)("a",{parentName:"li",href:"https://web.archive.org/web/20170512003505/https://blog.scalac.io/2016/07/21/compile-time-queries-with-quill.html"},"Compile-time Queries with Quill"))),(0,r.yg)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,r.yg)("p",null,"Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms. See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/getquill/quill/blob/master/CODE_OF_CONDUCT.md"},"CODE_OF_CONDUCT.md")," for details."),(0,r.yg)("h2",{id:"license"},"License"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/getquill/quill/blob/master/LICENSE.txt"},"LICENSE")," file for details."))}m.isMDXComponent=!0}}]);