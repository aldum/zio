"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[21152],{15680:(e,n,a)=>{a.d(n,{xA:()=>l,yg:()=>d});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=t.createContext({}),m=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},l=function(e){var n=m(e.components);return t.createElement(c.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=m(a),h=i,d=g["".concat(c,".").concat(h)]||g[h]||p[h]||r;return a?t.createElement(d,o(o({ref:n},l),{},{components:a})):t.createElement(d,o({ref:n},l))}));function d(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[g]="string"==typeof e?e:i,o[1]=s;for(var m=2;m<r;m++)o[m]=a[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},55896:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var t=a(58168),i=(a(96540),a(15680));const r={id:"schema-migration",title:"Schema Migration"},o=void 0,s={unversionedId:"zio-schema/operations/schema-migration",id:"zio-schema/operations/schema-migration",title:"Schema Migration",description:"Automatic Migration",source:"@site/docs/zio-schema/operations/schema-migration.md",sourceDirName:"zio-schema/operations",slug:"/zio-schema/operations/schema-migration",permalink:"/zio-schema/operations/schema-migration",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/operations/schema-migration.md",tags:[],version:"current",frontMatter:{id:"schema-migration",title:"Schema Migration"},sidebar:"ecosystem-sidebar",previous:{title:"Diffing and Patching",permalink:"/zio-schema/operations/diffing-and-patching"},next:{title:"Schema Serialization",permalink:"/zio-schema/operations/schema-serialization"}},c={},m=[{value:"Automatic Migration",id:"automatic-migration",level:2},{value:"Manual Migration",id:"manual-migration",level:2},{value:"Deriving Migrations",id:"deriving-migrations",level:2}],l={toc:m},g="wrapper";function p(e){let{components:n,...a}=e;return(0,i.yg)(g,(0,t.A)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"automatic-migration"},"Automatic Migration"),(0,i.yg)("p",null,"With ZIO Schema, we can automatically migrate data from one version of a schema to another. As software evolves, we often need to add, change or remove old fields. ZIO Schema provides two methods called ",(0,i.yg)("inlineCode",{parentName:"p"},"migrate")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"coerce")," which help migrate the old schema to the new one:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"sealed trait Schema[A] {\n  def migrate[B](newSchema: Schema[B]): Either[String, A => scala.util.Either[String, B]]\n\n  def coerce[B](newSchema: Schema[B]): Either[String, Schema[B]]\n}\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"migrate")," method takes a new schema and returns a function that can migrate values of the old schema to values of the new schema as a ",(0,i.yg)("inlineCode",{parentName:"p"},"Right")," value of ",(0,i.yg)("inlineCode",{parentName:"p"},"Either"),". If the schemas have unambiguous transformations or are incompatible, the method returns a ",(0,i.yg)("inlineCode",{parentName:"p"},"Left")," value containing an error message."),(0,i.yg)("h2",{id:"manual-migration"},"Manual Migration"),(0,i.yg)("p",null,"By having ",(0,i.yg)("inlineCode",{parentName:"p"},"DynamicValue")," which its type information embedded in the data itself, we can perform migrations of the data easily by applying a sequence of migration steps to the data."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"trait DynamicValue {\n  def transform(transforms: Chunk[Migration]): Either[String, DynamicValue]\n}\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"Migration")," is a sealed trait with several subtypes:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"sealed trait Migration\nobject Migration {\n  final case class AddNode(override val path: NodePath, node: MetaSchema) extends Migration\n\n  final case class DeleteNode(override val path: NodePath) extends Migration\n\n  final case class AddCase(override val path: NodePath, node: MetaSchema) extends Migration\n\n  // ...\n}\n")),(0,i.yg)("p",null,"Using the ",(0,i.yg)("inlineCode",{parentName:"p"},"Migration")," ADT we can describe the migration steps and then we can apply them to the ",(0,i.yg)("inlineCode",{parentName:"p"},"DynamicValue"),". Let's try a simple example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.Chunk\nimport zio.schema.meta.Migration.DeleteNode\nimport zio.schema.meta.{Migration, NodePath}\nimport zio.schema.{DeriveSchema, Schema}\n\ncase class Person1(name: String, age: Int)\n\nobject Person1 {\n  implicit val schema: Schema[Person1] = DeriveSchema.gen\n}\n\ncase class Person2(name: String)\n\nobject Person2 {\n  implicit val schema: Schema[Person2] = DeriveSchema.gen\n}\n\nval person1: Person1 = Person1("John Doe", 42)\n\nval migrations: Chunk[Migration] = Chunk(DeleteNode(NodePath.root / "age"))\n\nval person2 = DeriveSchema\n  .gen[Person1]\n  .toDynamic(person1)\n  .transform(migrations)\n  .flatMap(_.toTypedValue[Person2])\n  \nassert(person2 == Right(Person2("John Doe")))\n')),(0,i.yg)("h2",{id:"deriving-migrations"},"Deriving Migrations"),(0,i.yg)("p",null,"ZIO Schema provides a way to derive migrations automatically using the ",(0,i.yg)("inlineCode",{parentName:"p"},"Migration.derive")," operation:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"object Migration {\n  def derive(from: MetaSchema, to: MetaSchema): Either[String, Chunk[Migration]]\n}\n")),(0,i.yg)("p",null,"It takes two ",(0,i.yg)("inlineCode",{parentName:"p"},"MetaSchema")," values, the old and the new schema, and returns a ",(0,i.yg)("inlineCode",{parentName:"p"},"Chunk[Migration]")," that describes the migrations steps. Let's try a simple example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.schema._\nimport zio.schema.meta._\n\ncase class Person1(name: String, age: Int, language: String, height: Int)\n\nobject Person1 {\n  implicit val schema: Schema[Person1] = DeriveSchema.gen\n}\n\ncase class Person2(\n    name: String,\n    role: String,\n    language: Set[String],\n    height: Double\n)\n\nobject Person2 {\n  implicit val schema: Schema[Person2] = DeriveSchema.gen\n}\n\nval migrations = Migration.derive(\n  MetaSchema.fromSchema(Person1.schema),\n  MetaSchema.fromSchema(Person2.schema)\n)\n\nprintln(migrations)\n")),(0,i.yg)("p",null,"The output of the above code is:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"Right(\n  Chunk(IncrementDimensions(Chunk(language,item),1),\n  ChangeType(Chunk(height),double),\n  AddNode(Chunk(role),string),\n  DeleteNode(Chunk(age)))\n)\n")),(0,i.yg)("p",null,"This output describes a series of migration steps that should be applied to the old schema to be transformed into the new schema."))}p.isMDXComponent=!0}}]);