"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3099],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),y=i,u=m["".concat(s,".").concat(y)]||m[y]||d[y]||r;return t?a.createElement(u,o(o({ref:n},c),{},{components:t})):a.createElement(u,o({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},28004:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(58168),i=(t(96540),t(15680));const r={id:"index",title:"ZIO 2.x Interoperation with Cats 3.x",sidebar_label:"ZIO 2.x Interop Cats 3.x"},o=void 0,l={unversionedId:"zio2-interop-cats3/index",id:"zio2-interop-cats3/index",title:"ZIO 2.x Interoperation with Cats 3.x",description:"Installation",source:"@site/docs/zio2-interop-cats3/index.md",sourceDirName:"zio2-interop-cats3",slug:"/zio2-interop-cats3/",permalink:"/zio2-interop-cats3/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio2-interop-cats3/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"ZIO 2.x Interoperation with Cats 3.x",sidebar_label:"ZIO 2.x Interop Cats 3.x"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO 2.x Interop Cats 2.x",permalink:"/zio2-interop-cats2/"},next:{title:"ZIO AMQP",permalink:"/zio-amqp/"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"<code>ZIO</code> Cats Effect 3 instances",id:"zio-cats-effect-3-instances",level:2},{value:"<code>Concurrent</code>",id:"concurrent",level:2},{value:"<code>Temporal</code>",id:"temporal",level:2},{value:"<code>Async</code>",id:"async",level:2},{value:"Other typeclasses",id:"other-typeclasses",level:2},{value:"Easier imports (at a cost)",id:"easier-imports-at-a-cost",level:2},{value:"cats-core",id:"cats-core",level:3},{value:"Example",id:"example",level:3}],c={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(m,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"installation"},"Installation"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sbt"},'libraryDependencies += "dev.zio" %% "zio-interop-cats" % "23.0.x"\n')),(0,i.yg)("h2",{id:"zio-cats-effect-3-instances"},(0,i.yg)("inlineCode",{parentName:"h2"},"ZIO")," Cats Effect 3 instances"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"ZIO")," integrates with Typelevel libraries by providing an instance of ",(0,i.yg)("inlineCode",{parentName:"p"},"Concurrent"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Temporal")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Async")," for ",(0,i.yg)("inlineCode",{parentName:"p"},"Task"),"\nas required, for instance, by ",(0,i.yg)("inlineCode",{parentName:"p"},"fs2"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"doobie")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"http4s"),"."),(0,i.yg)("p",null,"For convenience, the ZIO library defines an alias as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"type Task[A] = ZIO[Any, Throwable, A]\n")),(0,i.yg)("p",null,"Therefore, we provide Cats Effect instances based on this specific datatype."),(0,i.yg)("h2",{id:"concurrent"},(0,i.yg)("inlineCode",{parentName:"h2"},"Concurrent")),(0,i.yg)("p",null,"In order to get a ",(0,i.yg)("inlineCode",{parentName:"p"},"Concurrent[Task]")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"Concurrent[RIO[R, *]]")," (note ",(0,i.yg)("inlineCode",{parentName:"p"},"*")," is kind-projector notation) we need an\nimplicit ",(0,i.yg)("inlineCode",{parentName:"p"},"Runtime[R]")," in scope. The easiest way to get it is using ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO.runtime"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import cats.effect._\nimport zio._\nimport zio.interop.catz._\n\ndef ceConcurrentForTaskExample = \n  ZIO.runtime.flatMap { implicit r: Runtime[Any] =>\n    // the presence of a runtime allows you to summon Cats Effect Typeclasses\n    val F: cats.effect.Concurrent[Task] = implicitly\n    F.racePair(F.unit, F.unit)\n  }\n")),(0,i.yg)("h2",{id:"temporal"},(0,i.yg)("inlineCode",{parentName:"h2"},"Temporal")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Temporal")," requires a ",(0,i.yg)("inlineCode",{parentName:"p"},"Runtime")," with ",(0,i.yg)("inlineCode",{parentName:"p"},"Clock"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import cats.effect._\nimport zio._\nimport zio.interop.catz._\n\ndef ceTemporal =\n  ZIO.runtime.flatMap { implicit r: Runtime[Clock] =>\n    val F: cats.effect.Temporal[Task] = implicitly\n    F.sleep(1.second) *> F.unit\n  }\n")),(0,i.yg)("h2",{id:"async"},(0,i.yg)("inlineCode",{parentName:"h2"},"Async")),(0,i.yg)("p",null,"Similar to the other examples, we require a ",(0,i.yg)("inlineCode",{parentName:"p"},"Runtime")," with the ",(0,i.yg)("inlineCode",{parentName:"p"},"Clock")," layer."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import cats.effect._\nimport zio._\nimport zio.interop.catz._\n\ndef ceAsync =\n  ZIO.runtime.flatMap { implicit r: Runtime[Clock] =>\n    val F: cats.effect.Async[Task] = implicitly\n    F.racePair(F.unit, F.sleep(1.second) *> F.unit)\n  }\n")),(0,i.yg)("h2",{id:"other-typeclasses"},"Other typeclasses"),(0,i.yg)("p",null,"There are many other typeclasses and useful conversions that this library provides implementations for:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"See ",(0,i.yg)("inlineCode",{parentName:"li"},"zio/interop/cats.scala")," file to see all available typeclass implementations for the Cats Effect 3 typeclasses"),(0,i.yg)("li",{parentName:"ul"},"See ",(0,i.yg)("inlineCode",{parentName:"li"},"zio/stream/interop/cats.scala")," for ZStream typeclass implementations"),(0,i.yg)("li",{parentName:"ul"},"See ",(0,i.yg)("inlineCode",{parentName:"li"},"zio/stream/interop/FS2StreamSyntax.scala")," for FS2 <-> ZStream conversions")),(0,i.yg)("h2",{id:"easier-imports-at-a-cost"},"Easier imports (at a cost)"),(0,i.yg)("p",null,"In the examples above, we had to bring the ",(0,i.yg)("inlineCode",{parentName:"p"},"Runtime[Clock]")," via the ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO.runtime")," combinator. This may\nnot be ideal since everywhere you use these typeclasses, you will now be required to feed in the ",(0,i.yg)("inlineCode",{parentName:"p"},"Runtime"),".\nFor example, with FS2:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'def example(implicit rts: Runtime[Clock]): Task[Unit] =\n  fs2.Stream\n    .awakeDelay[Task](10.seconds) // this type annotation is mandatory\n    .evalTap(in => cats.effect.std.Console.make[Task].println(s"Hello $in"))\n    .compile\n    .drain\n')),(0,i.yg)("p",null,"Rather than requiring the runtime implicit, we can add an import (if we don't mind depending on ",(0,i.yg)("inlineCode",{parentName:"p"},"Runtime.default"),"):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.interop.catz._\nimport zio.interop.catz.implicits._\n\nval example: Task[Unit] =\n  fs2.Stream\n    .awakeDelay[Task](10.seconds)\n    .evalTap(in => cats.effect.std.Console.make[Task].println(s"Hello $in"))\n    .compile\n    .drain\n')),(0,i.yg)("p",null,"The major downside to doing this is you rely on live implementations of ",(0,i.yg)("inlineCode",{parentName:"p"},"Clock")," to summon instances which\nmakes testing much more difficult for any Cats Effect code that you use."),(0,i.yg)("h3",{id:"cats-core"},"cats-core"),(0,i.yg)("p",null,"If you only need instances for ",(0,i.yg)("inlineCode",{parentName:"p"},"cats-core")," typeclasses, not ",(0,i.yg)("inlineCode",{parentName:"p"},"cats-effect")," import ",(0,i.yg)("inlineCode",{parentName:"p"},"zio.interop.catz.core._"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.interop.catz.core._\n")),(0,i.yg)("p",null,"Note that this library only has an ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," dependency on cats-effect \u2013 if you or your libraries don't depend on it, this library will not add it to the classpath."),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("p",null,"The following example shows how to use ZIO with Doobie (a library for JDBC access) and FS2 (a streaming library), which both rely on Cats Effect instances (",(0,i.yg)("inlineCode",{parentName:"p"},"cats.effect.Async")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"cats.effect.Temporal"),"):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.interop.catz._\nimport doobie._\nimport doobie.implicits._\nimport zio.clock.Clock\nimport scala.concurrent.duration._\n\nobject DoobieH2Example extends App {\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    ZIO.runtime.flatMap { implicit r: Runtime[Clock] =>\n      val xa: Transactor[Task] =\n        Transactor.fromDriverManager[Task]("org.h2.Driver", "jdbc:h2:mem:test;DB_CLOSE_DELAY=-1", "user", "")\n\n      sql"SELECT 42"\n        .query[Int]\n        .stream\n        .transact(xa)\n        .delayBy(1.second)\n        .evalTap(i => ZIO.succeedBlocking(println(s"Data $i"))))\n        .compile\n        .drain\n        .exitCode\n    }\n}\n')))}d.isMDXComponent=!0}}]);