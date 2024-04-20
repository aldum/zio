"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[72659],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(p,".").concat(u)]||d[u]||g[u]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const i={id:"getting-started",title:"Getting Started With Property Checking",sidebar_label:"Getting Started"},o=void 0,s={unversionedId:"reference/test/property-testing/getting-started",id:"reference/test/property-testing/getting-started",title:"Getting Started With Property Checking",description:"The fundamental idea behind property checking is to test the properties of the target function using random inputs.",source:"@site/docs/reference/test/property-testing/getting-started.md",sourceDirName:"reference/test/property-testing",slug:"/reference/test/property-testing/getting-started",permalink:"/reference/test/property-testing/getting-started",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/property-testing/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started With Property Checking",sidebar_label:"Getting Started"},sidebar:"reference-sidebar",previous:{title:"Introduction To Property Testing",permalink:"/reference/test/property-testing/"},next:{title:"How Generators Work?",permalink:"/reference/test/property-testing/how-generators-work"}},p={},l=[{value:"Number of Samples",id:"number-of-samples",level:2}],c={toc:l},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The fundamental idea behind property checking is to test the properties of the target function using random inputs."),(0,a.yg)("p",null,"So to test a system using property checking, two things are required:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Properties"),(0,a.yg)("li",{parentName:"ol"},"Generators")),(0,a.yg)("p",null,"A property of a system is a predicate that is always true regardless of the system's input. For example, the addition of two numbers is commutative. So it doesn't matter what numbers we pass to the addition function, for any pair of ",(0,a.yg)("inlineCode",{parentName:"p"},"a")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"b"),", the result of ",(0,a.yg)("inlineCode",{parentName:"p"},"add(a, b)")," is always the same as ",(0,a.yg)("inlineCode",{parentName:"p"},"add(b, a)"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"def add(a: Int, b: Int): Int = ???\n\ndef is_add_commutative(a: Int, b: Int): Boolean =\n  add(a, b) == add(b, a)\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"is_add_commutative")," predicate takes two inputs and checks if the ",(0,a.yg)("inlineCode",{parentName:"p"},"add")," function is commutative or not. To check this property, we need some random integer pairs. This is where generators come in."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Gen[A]")," data type is used to generate random values of type ",(0,a.yg)("inlineCode",{parentName:"p"},"A"),". ZIO Test provides numerous ",(0,a.yg)("inlineCode",{parentName:"p"},"Gen")," instances for common types:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.test._\n\nval intGen: Gen[Any, Int] = Gen.int\nval stringGen: Gen[Sized, String] = Gen.string\n")),(0,a.yg)("p",null,"It is also composable, so we can combine them to generate random values of more complex types:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"val stringIntGen: Gen[Sized, (String, Int)] = stringGen <*> intGen\n\ncase class Person(name: String, age: Int)\nval personGen: Gen[Sized, Person] = stringIntGen.map(Person.tupled)\n")),(0,a.yg)("p",null,"ZIO Test provides the ",(0,a.yg)("inlineCode",{parentName:"p"},"check")," function for this purpose. It takes a list of generators and provides them to another taken function, which is a property checker:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"def property[T1, T2](input1: T1, input2: T2, ...): Boolean = ???\n\nval input1Gen: Gen[_, T1] = ???\nval input2Gen: Gen[_, T2] = ???\n\ncheck(input1Gen, input2Gen, ...) { (input1, input2, ...) =>\n  assertTrue(property(input1, input2, ...))   \n}\n")),(0,a.yg)("p",null,"In our example, the ",(0,a.yg)("inlineCode",{parentName:"p"},"is_add_commutative")," predicate takes two inputs. So we need to pass two generators of type ",(0,a.yg)("inlineCode",{parentName:"p"},"Int")," to the ",(0,a.yg)("inlineCode",{parentName:"p"},"check")," function:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'def add(a: Int, b: Int): Int = ???\n\ntest("add is commutative") {\n  check(Gen.int, Gen.int) { (a, b) =>\n    assertTrue(add(a, b) == add(b, a))\n  }\n}\n')),(0,a.yg)("h2",{id:"number-of-samples"},"Number of Samples"),(0,a.yg)("p",null,"In the previous example, we used ",(0,a.yg)("inlineCode",{parentName:"p"},"check")," to test if the ",(0,a.yg)("inlineCode",{parentName:"p"},"add")," function is commutative. In other words, we try to generate samples of random pairs of integers and try to falsify the ",(0,a.yg)("inlineCode",{parentName:"p"},"is_add_commutative")," predicate. If we find a pair of integers that falsifies the predicate, then we know that the property is violated."),(0,a.yg)("p",null,"By default, the ",(0,a.yg)("inlineCode",{parentName:"p"},"check")," function, try to generate 200 samples. We can change this by using the ",(0,a.yg)("inlineCode",{parentName:"p"},"sample")," test aspect:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\n\nobject AdditionSpec extends ZIOSpecDefault {\n  def spec =\n    test("add is commutative") {\n      check(Gen.int, Gen.int) { (a, b) =>\n        assertTrue(add(a, b) == add(b, a))\n      }\n    } @@ TestAspect.samples(10)\n}\n')),(0,a.yg)("p",null,"To debug the test, we added a ",(0,a.yg)("inlineCode",{parentName:"p"},"println")," statement inside the ",(0,a.yg)("inlineCode",{parentName:"p"},"check")," function to see the generated samples."))}g.isMDXComponent=!0}}]);