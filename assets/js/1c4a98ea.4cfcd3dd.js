"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[78879],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,u=d["".concat(l,".").concat(m)]||d[m]||f[m]||i;return t?a.createElement(u,o(o({ref:n},s),{},{components:t})):a.createElement(u,o({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const i={id:"diffing-and-patching",title:"Diffing and Patching"},o=void 0,c={unversionedId:"zio-schema/operations/diffing-and-patching",id:"zio-schema/operations/diffing-and-patching",title:"Diffing and Patching",description:"ZIO Schema provides two methods called diff and patch:",source:"@site/docs/zio-schema/operations/diffing-and-patching.md",sourceDirName:"zio-schema/operations",slug:"/zio-schema/operations/diffing-and-patching",permalink:"/zio-schema/operations/diffing-and-patching",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/operations/diffing-and-patching.md",tags:[],version:"current",frontMatter:{id:"diffing-and-patching",title:"Diffing and Patching"},sidebar:"ecosystem-sidebar",previous:{title:"Validation",permalink:"/zio-schema/operations/validation"},next:{title:"Schema Migration",permalink:"/zio-schema/operations/schema-migration"}},l={},p=[],s={toc:p},d="wrapper";function f(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"ZIO Schema provides two methods called ",(0,r.yg)("inlineCode",{parentName:"p"},"diff")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"patch"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"sealed trait Schema[A] {\n  def diff(thisValue: A, thatValue: A): Patch[A]\n\n  def patch(oldValue: A, diff: Patch[A]): scala.util.Either[String, A]\n} \n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"diff")," method takes two values of the same type ",(0,r.yg)("inlineCode",{parentName:"p"},"A")," and returns a ",(0,r.yg)("inlineCode",{parentName:"p"},"Patch[A]")," value that describes the differences between the two values. conversely, the ",(0,r.yg)("inlineCode",{parentName:"p"},"patch")," method takes a value of type ",(0,r.yg)("inlineCode",{parentName:"p"},"A")," and a ",(0,r.yg)("inlineCode",{parentName:"p"},"Patch[A]")," value and returns a new value of type ",(0,r.yg)("inlineCode",{parentName:"p"},"A")," that is the result of applying the patch to the original value."),(0,r.yg)("p",null,"Here is a simple example that demonstrate the how to use ",(0,r.yg)("inlineCode",{parentName:"p"},"diff")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"patch"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.schema._\n\ncase class Person(name: String, age: Int)\n\nobject Person {\n  implicit val schema: Schema[Person] = DeriveSchema.gen[Person]\n}\n\nval oldValue = Person("John", 42)\nval newValue = Person("John", 43)\n\nval patch: Patch[Person] =\n  Person.schema.diff(oldValue, newValue)\n\nassert(\n  Person.schema.patch(oldValue, patch) == Right(newValue)\n)\n')))}f.isMDXComponent=!0}}]);