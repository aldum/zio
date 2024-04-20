"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[78183],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1757:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(58168),a=(t(96540),t(15680));const i={id:"basics",title:"Basics"},o=void 0,s={unversionedId:"zio-actors/basics",id:"zio-actors/basics",title:"Basics",description:"Actors are higher level concurrency models which receive messages, process them and update their internal state.",source:"@site/docs/zio-actors/basics.md",sourceDirName:"zio-actors",slug:"/zio-actors/basics",permalink:"/zio-actors/basics",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-actors/basics.md",tags:[],version:"current",frontMatter:{id:"basics",title:"Basics"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Actors",permalink:"/zio-actors/"},next:{title:"Supervision",permalink:"/zio-actors/supervision"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:3}],p={toc:l},u="wrapper";function m(e){let{components:n,...i}=e;return(0,a.yg)(u,(0,r.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Actors are higher level concurrency models which receive messages, process them and update their internal state.\nWithin processing actor can spawn finite number of children actors and send finite number of messages to other actors.  "),(0,a.yg)("p",null,"This can be visualized as a simple diagram:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"diagram",src:t(25670).A,width:"730",height:"322"})),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("p",null,"The basic actors usage requires defining a ",(0,a.yg)("inlineCode",{parentName:"p"},"Stateful")," for describing actor's behavior.\nThen actor's creation is done with passing supervision manner, initial state and mentioned ",(0,a.yg)("inlineCode",{parentName:"p"},"Stateful"),"."),(0,a.yg)("p",null,"Imports required for example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import java.io.File\n\nimport zio.actors.Actor.Stateful\nimport zio.actors._\nimport zio.{UIO, ZIO}\n")),(0,a.yg)("p",null,"Our domain that will be used:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"sealed trait Command[+_]\ncase class DoubleCommand(value: Int) extends Command[Int]\n")),(0,a.yg)("p",null,"Our actor's assigment will be to double received values. Here's the ",(0,a.yg)("inlineCode",{parentName:"p"},"Stateful")," implementation:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"val stateful = new Stateful[Any, Unit, Command] {\n  override def receive[A](state: Unit, msg: Command[A], context: Context): UIO[(Unit, A)] =\n    msg match {\n      case DoubleCommand(value) => ZIO.succeed(((), value * 2))\n    }\n}\n")),(0,a.yg)("p",null,"Then we are ready to instantiate the actor and fire off messages:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'for {\n  system  <- ActorSystem("mySystem")\n  actor   <- system.make("actor1", Supervisor.none, (), stateful)\n  doubled <- actor ! DoubleCommand(42)\n} yield doubled\n')),(0,a.yg)("p",null,"This is ",(0,a.yg)("inlineCode",{parentName:"p"},"fire-and-forget")," interaction pattern where caller is blocked until recipients confirms enqueueing message in mailbox queue.\nThere's also ",(0,a.yg)("inlineCode",{parentName:"p"},"ask")," interaction pattern where for caller sending a message is completed after receiving response message from recipient.\nIt's performed via ",(0,a.yg)("inlineCode",{parentName:"p"},"?")," method."),(0,a.yg)("p",null,"From recipient's point of view these two interaction patterns are indistinguishable. "),(0,a.yg)("h3",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"For each ",(0,a.yg)("inlineCode",{parentName:"p"},"ActorSystem")," created there should be a config entry in configuration file.\nBy default configuration file is expected to be at ",(0,a.yg)("inlineCode",{parentName:"p"},"./src/main/resources/application.conf"),".\nExemplary configuration entry for an ",(0,a.yg)("inlineCode",{parentName:"p"},"ActorSystem")," named ",(0,a.yg)("inlineCode",{parentName:"p"},"Test1"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'Test1.zio.actors.remoting {\n  hostname = "127.0.0.1"\n  port = 1234\n}\n')),(0,a.yg)("p",null,"Custom configuration file can be provided when instantiating ",(0,a.yg)("inlineCode",{parentName:"p"},"ActorSystem"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'ActorSystem("mySystem", Some(new File("./my/custom/path/app.conf")))\n')))}m.isMDXComponent=!0},25670:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/actor-52da23d423d7d0455323e46319402f08.svg"}}]);