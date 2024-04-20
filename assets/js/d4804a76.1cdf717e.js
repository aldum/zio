"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[59613],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=i,y=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},23132:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(58168),i=(a(96540),a(15680));const r={id:"dynamodb-connector",title:"DynamoDB Connector"},o=void 0,l={unversionedId:"zio-connect/dynamodb-connector",id:"zio-connect/dynamodb-connector",title:"DynamoDB Connector",description:"Setup",source:"@site/docs/zio-connect/dynamodb-connector.md",sourceDirName:"zio-connect",slug:"/zio-connect/dynamodb-connector",permalink:"/zio-connect/dynamodb-connector",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-connect/dynamodb-connector.md",tags:[],version:"current",frontMatter:{id:"dynamodb-connector",title:"DynamoDB Connector"},sidebar:"ecosystem-sidebar",previous:{title:"Couchbase Connector",permalink:"/zio-connect/couchbase-connector"},next:{title:"File Connector",permalink:"/zio-connect/file-connector"}},s={},u=[{value:"Setup",id:"setup",level:2},{value:"Operators",id:"operators",level:2},{value:"<code>batchGetItem</code>",id:"batchgetitem",level:2},{value:"<code>batchWriteItem</code>",id:"batchwriteitem",level:2},{value:"<code>createTable</code>",id:"createtable",level:2},{value:"<code>deleteItem</code>",id:"deleteitem",level:2},{value:"<code>deleteTable</code>",id:"deletetable",level:2},{value:"<code>describeTable</code>",id:"describetable",level:2},{value:"<code>listTables</code>",id:"listtables",level:2},{value:"<code>getItem</code>",id:"getitem",level:2},{value:"<code>putItem</code>",id:"putitem",level:2},{value:"<code>query</code>",id:"query",level:2},{value:"<code>scan</code>",id:"scan",level:2},{value:"<code>tableExists</code>",id:"tableexists",level:2},{value:"<code>updateItem</code>",id:"updateitem",level:2},{value:"<code>updateTable</code>",id:"updatetable",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...a}=e;return(0,i.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"setup"},"Setup"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-connect-dynamodb" % "0.4.4"\n')),(0,i.yg)("p",null,"How to use it?"),(0,i.yg)("p",null,"All available DynamoDBConnector combinators and operations are available in the package object ",(0,i.yg)("inlineCode",{parentName:"p"},"zio.connect.dynamodb._"),"\nyou will need to import that to get started."),(0,i.yg)("p",null,"Additionally, you must also configure and provide the underlying ",(0,i.yg)("inlineCode",{parentName:"p"},"DynamoDB")," layer provided by ",(0,i.yg)("inlineCode",{parentName:"p"},"zio-aws"),"\nyou can read more about how to configure it ",(0,i.yg)("a",{parentName:"p",href:"https://zio.github.io/zio-aws/docs/overview/overview_config"},"here")),(0,i.yg)("p",null,"If you have default credentials in the system environment typically at ",(0,i.yg)("inlineCode",{parentName:"p"},"~/.aws/credentials")," or as env variables\nthe following configuration will likely work."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.aws.netty.NettyHttpClient\nimport zio.aws.core.config.AwsConfig\nimport zio.aws.core.httpclient.HttpClient\nimport zio.connect.dynamodb._\n\nlazy val httpClient: ZLayer[Any, Throwable, HttpClient] = NettyHttpClient.default\nlazy val awsConfig: ZLayer[Any, Throwable, AwsConfig]   = httpClient >>> AwsConfig.default\n")),(0,i.yg)("p",null,"Almost everything in this api requires the existence of a table, we utilize the models provided by ",(0,i.yg)("inlineCode",{parentName:"p"},"zio-aws"),"\nto create tables, requests, responses, and all other DynamoDB related types. These are typically modeled as\n",(0,i.yg)("inlineCode",{parentName:"p"},"new-types")," from zio-prelude or case classes."),(0,i.yg)("p",null,"Here's a create table request:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.aws.dynamodb.model._\nimport zio.aws.dynamodb.model.primitives._\n\ndef createTableRequest(tableName: TableName): CreateTableRequest =\n  CreateTableRequest(\n    tableName = tableName,\n    attributeDefinitions = List(\n      AttributeDefinition(\n        KeySchemaAttributeName("id"),\n        ScalarAttributeType.S\n      )\n    ),\n    keySchema = List(\n      KeySchemaElement(KeySchemaAttributeName("id"), KeyType.HASH)\n    ),\n    provisionedThroughput = Some(\n      ProvisionedThroughput(\n        readCapacityUnits = PositiveLongObject(16L),\n        writeCapacityUnits = PositiveLongObject(16L)\n      )\n    ),\n    tableClass = TableClass.STANDARD\n  )\n')),(0,i.yg)("p",null,'DynamoDB is "schemaless" in the sense that put data of different shapes in different rows, but you must define\na schema for the keys that the table depends on, these are called "partition keys" and "sort keys" or "hash" and "range" keys.\nOnly a partition/hash key is required, and you should only define attributes for the fields which constitute your\n',(0,i.yg)("inlineCode",{parentName:"p"},"keySchema"),". A valid table definition must also declare a ",(0,i.yg)("inlineCode",{parentName:"p"},"provisionedThroughput"),", but there are ",(0,i.yg)("em",{parentName:"p"},"many")," other\noptions available for creating tables, you can read more about tables ",(0,i.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.Tables"},"here"),"."),(0,i.yg)("p",null,"Once you have a table definition you can create a table using the ",(0,i.yg)("inlineCode",{parentName:"p"},"createTable")," combinator:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val tableName = TableName("my-table")\nval createTableAction: ZIO[DynamoDBConnector, AwsError, CreateTableResponse] = createTable(createTableRequest(tableName)) >>> createTable\n')),(0,i.yg)("p",null,"Dynamo tables can take a moment to be created, so you'll want to have some kind of retry mechanism when performing\nsubsequent operations on the table. To illustrate, let's put an item into the table:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val putItemAction: ZIO[DynamoDBConnector, AwsError, PutItemResponse] = \n  ZStream(PutItemRequest(tableName, Map("id" -> AttributeValue(s = StringAttributeValue("my-id"))))) >>> putItem\n\nval putItemWithRetry: ZIO[DynamoDBConnector, AwsError, PutItemResponse] =\n    putItemAction.retryWhile {\n      case GenericAwsError(_: ResourceNotFoundException) => true\n      case _ => false\n    }\n')),(0,i.yg)("p",null,"Let's say we want to get an item from the table, we can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"getItem")," combinator, note we need to\nprovide the ",(0,i.yg)("em",{parentName:"p"},"full")," key here to use it:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val key = Map("id" -> AttributeValue(s = StringAttributeValue("my-id")))\nval getItemAction: ZIO[DynamoDBConnector, AwsError, GetItemResponse] = \n  getItem(GetItemRequest(tableName, key)) >>> getItem\n')),(0,i.yg)("p",null,"Currently, entries from the table are returned as a ",(0,i.yg)("inlineCode",{parentName:"p"},"Map[AttributeName, AttributeValue]")," this may change in the future."),(0,i.yg)("p",null,"And we can also delete an item from the table:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"val deleteItemAction: ZIO[DynamoDBConnector, AwsError, DeleteItemResponse] =\ndeleteItem(DeleteItemRequest(tableName, key)) >>> deleteItem\n")),(0,i.yg)("p",null,"In order to run a program involving the DynamoDBConnector you need to provide a live ",(0,i.yg)("inlineCode",{parentName:"p"},"DynamoDB")," from ",(0,i.yg)("inlineCode",{parentName:"p"},"zio-aws")," along with config\nand the live connector layer:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"override def run: ZIO[ZIOAppArgs with Scope, Any, Any] =\n     program.provide(awsConfig, DynamoDb.live, dynamoDBConnectorLiveLayer)\n")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"dynamoDBConnectorLiveLayer")," is a ",(0,i.yg)("inlineCode",{parentName:"p"},"ZLayer")," that provides the ",(0,i.yg)("inlineCode",{parentName:"p"},"LiveDynamoDBConnector")),(0,i.yg)("h2",{id:"operators"},"Operators"),(0,i.yg)("p",null,"The following operations are available:"),(0,i.yg)("h2",{id:"batchgetitem"},(0,i.yg)("inlineCode",{parentName:"h2"},"batchGetItem")),(0,i.yg)("p",null,"Accepts a stream of ",(0,i.yg)("inlineCode",{parentName:"p"},"BatchGetItemRequest")," and returns a ",(0,i.yg)("inlineCode",{parentName:"p"},"Chunk")," of ",(0,i.yg)("inlineCode",{parentName:"p"},"BatchGetItemResponse"),", if\none of the tables in the request is not available, the entire request will fail.\nThe response object will contain and ",(0,i.yg)("inlineCode",{parentName:"p"},"unprocessedKeys")," field which can be used to retry the request."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val item1              = Map(AttributeName("id") -> AttributeValue(s = StringAttributeValue("key1")))\nval item2              = Map(AttributeName("id") -> AttributeValue(s = StringAttributeValue("key2")))\nval keysAndAttributes  = KeysAndAttributes(List(item1))\nval keysAndAttributes2 = KeysAndAttributes(List(item2))\n\nval batchGetItemRequest =\n  BatchGetItemRequest(Map(tableName -> keysAndAttributes, tableName2 -> keysAndAttributes2))\n  \nval batchGetItemAction: ZIO[DynamoDBConnector, AwsError, Chunk[BatchGetItemResponse]] =\n  batchGetItem(ZStream(batchGetItemRequest)) >>> batchGetItem\n')),(0,i.yg)("h2",{id:"batchwriteitem"},(0,i.yg)("inlineCode",{parentName:"h2"},"batchWriteItem")),(0,i.yg)("p",null,"Accepts a stream of ",(0,i.yg)("inlineCode",{parentName:"p"},"BatchWriteItemRequest")," and returns a ",(0,i.yg)("inlineCode",{parentName:"p"},"Chunk")," of ",(0,i.yg)("inlineCode",{parentName:"p"},"BatchWriteItemResponse"),", if\none of the tables in the request is not available, the entire request will fail. This is used to\nsimultaneously put and delete items on multiple tables, you cannot write and delete an item\nwith the same key in the same table in a single request. The response object does\nhave an ",(0,i.yg)("inlineCode",{parentName:"p"},"unprocessedKeys")," field which can be used to retry the remaining requests."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val tableName = TableName("batchWriteItem1")\nval item1     = Map(AttributeName("id") -> AttributeValue(s = StringAttributeValue("key1")))\nval item2     = Map(AttributeName("id") -> AttributeValue(s = StringAttributeValue("key2")))\nval writeRequests = List(\n  WriteRequest(putRequest = PutRequest(item1)),\n  WriteRequest(putRequest = PutRequest(item2))\n)\nval batchWriteItemRequest = BatchWriteItemRequest(\n  Map(tableName -> writeRequests)\n)\n\nval batchWriteItemAction: ZIO[DynamoDBConnector, AwsError, Chunk[BatchWriteItemResponse]] =\n  batchWriteItem(ZStream(batchWriteItemRequest)) >>> batchWriteItem\n')),(0,i.yg)("h2",{id:"createtable"},(0,i.yg)("inlineCode",{parentName:"h2"},"createTable")),(0,i.yg)("p",null,"Accepts a stream of ",(0,i.yg)("inlineCode",{parentName:"p"},"CreateTableRequest")," and returns ",(0,i.yg)("inlineCode",{parentName:"p"},"Unit"),". Will fail with a ",(0,i.yg)("inlineCode",{parentName:"p"},"ResourceInUseException")," if the table already exists."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'def createTableRequest(tableName: TableName): CreateTableRequest =\n  CreateTableRequest(\n    tableName = tableName,\n    attributeDefinitions = List(\n      AttributeDefinition(\n        KeySchemaAttributeName("id"),\n        ScalarAttributeType.S\n      )\n    ),\n    keySchema = List(\n      KeySchemaElement(KeySchemaAttributeName("id"), KeyType.HASH)\n    ),\n    provisionedThroughput = Some(\n      ProvisionedThroughput(\n        readCapacityUnits = PositiveLongObject(16L),\n        writeCapacityUnits = PositiveLongObject(16L)\n      )\n    ),\n    tableClass = TableClass.STANDARD\n  )\n    \nval createTableAction: ZIO[DynamoDBConnector, AwsError, Unit] =\n    ZStream(createTableRequest(tableName)) >>> createTable\n')),(0,i.yg)("h2",{id:"deleteitem"},(0,i.yg)("inlineCode",{parentName:"h2"},"deleteItem")),(0,i.yg)("p",null,"Accepts a stream of ",(0,i.yg)("inlineCode",{parentName:"p"},"DeleteItemRequest")," and returns ",(0,i.yg)("inlineCode",{parentName:"p"},"Unit"),". Will fail with a\n",(0,i.yg)("inlineCode",{parentName:"p"},"ResourceNotFoundException")," if the table does not exist, does\nnot fail if the item does not exist."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val item1 = Map(AttributeName("id") -> AttributeValue(s = StringAttributeValue("key1")))\nval deleteItemAction: ZIO[DynamoDBConnector, AwsError, Unit] = ZStream(DeleteItemRequest(tableName, item1)) >>> deleteItem\n')),(0,i.yg)("h2",{id:"deletetable"},(0,i.yg)("inlineCode",{parentName:"h2"},"deleteTable")),(0,i.yg)("p",null,"Accepts a stream of ",(0,i.yg)("inlineCode",{parentName:"p"},"DeleteTableRequest")," and returns ",(0,i.yg)("inlineCode",{parentName:"p"},"Unit"),". Will fail\nwith ",(0,i.yg)("inlineCode",{parentName:"p"},"ResourceNotFoundException")," if the table does not exist."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"val deleteTableAction: ZIO[DynamoDBConnector, AwsError, Unit] = ZStream(DeleteTableRequest(tableName)) >>> deleteTable\n")),(0,i.yg)("h2",{id:"describetable"},(0,i.yg)("inlineCode",{parentName:"h2"},"describeTable")),(0,i.yg)("p",null,"Accepts a stream of ",(0,i.yg)("inlineCode",{parentName:"p"},"DescribeTableRequest")," and returns a ",(0,i.yg)("inlineCode",{parentName:"p"},"Chunk")," of ",(0,i.yg)("inlineCode",{parentName:"p"},"DescribeTableResponse"),". Will fail\nif the table does not exist."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"val describeTableAction: ZIO[DynamoDBConnector, AwsError, Chunk[DescribeTableResponse]] = ZStream(DescribeTableRequest(tableName)) >>> describeTable\n")),(0,i.yg)("h2",{id:"listtables"},(0,i.yg)("inlineCode",{parentName:"h2"},"listTables")),(0,i.yg)("p",null,"Takes a ",(0,i.yg)("inlineCode",{parentName:"p"},"ListTableRequest")," and return a Stream of ",(0,i.yg)("inlineCode",{parentName:"p"},"TableName"),", can also provide a limit to the number of tables returned."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"val listTablesAction: ZIO[DynamoDBConnector, AwsError, TableName] = listTables(ListTablesRequest()).runCollect\n")),(0,i.yg)("h2",{id:"getitem"},(0,i.yg)("inlineCode",{parentName:"h2"},"getItem")),(0,i.yg)("p",null,"Accepts a stream of ",(0,i.yg)("inlineCode",{parentName:"p"},"GetItemRequest")," and returns a ",(0,i.yg)("inlineCode",{parentName:"p"},"Chunk")," of ",(0,i.yg)("inlineCode",{parentName:"p"},"GetItemResponse"),".\nWill fail with a ",(0,i.yg)("inlineCode",{parentName:"p"},"ResourceNotFoundException")," if the table does not exist."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val item1 = Map(AttributeName("id") -> AttributeValue(s = StringAttributeValue("key1")))\nval getItemAction: ZIO[DynamoDBConnector, AwsError, Chunk[GetItemResponse]] = ZStream(GetItemRequest(tableName, item1)) >>> getItem\n')),(0,i.yg)("h2",{id:"putitem"},(0,i.yg)("inlineCode",{parentName:"h2"},"putItem")),(0,i.yg)("p",null,"Accepts a stream of ",(0,i.yg)("inlineCode",{parentName:"p"},"PutItemRequest")," and returns ",(0,i.yg)("inlineCode",{parentName:"p"},"Unit"),". Will fail with a ",(0,i.yg)("inlineCode",{parentName:"p"},"ResourceNotFoundException")," if the table does not exist."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val item1 = Map(AttributeName("id") -> AttributeValue(s = StringAttributeValue("key1")))\nval putItemAction: ZIO[DynamoDBConnector, AwsError, Unit] = ZStream(PutItemRequest(tableName, item1)) >>> putItem\n')),(0,i.yg)("h2",{id:"query"},(0,i.yg)("inlineCode",{parentName:"h2"},"query")),(0,i.yg)("p",null,"Accepts a stream of ",(0,i.yg)("inlineCode",{parentName:"p"},"QueryRequest")," and returns a ",(0,i.yg)("inlineCode",{parentName:"p"},"Chunk")," of ",(0,i.yg)("inlineCode",{parentName:"p"},"Map[AttributeName, AttributeValue]"),".\nWill fail with a ",(0,i.yg)("inlineCode",{parentName:"p"},"ResourceNotFoundException")," if the table does not exist."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val tableName     = TableName("query1")\nval keyExpression = KeyExpression("id = :id")\nval expressionAttributeValues = Map(\n  ExpressionAttributeValueVariable(":id") -> AttributeValue(s = StringAttributeValue("key1"))\n)\nval queryRequest = QueryRequest(\n  tableName,\n  keyConditionExpression = keyExpression,\n  expressionAttributeValues = expressionAttributeValues\n)\n\nval queryAction: ZIO[DynamoDBConnector, AwsError, Chunk[Map[AttributeName, AttributeValue]]] =\n  ZStream(queryRequest) >>> query\n')),(0,i.yg)("h2",{id:"scan"},(0,i.yg)("inlineCode",{parentName:"h2"},"scan")),(0,i.yg)("p",null,"Similar to query, but if you don't know the key, you can use scan to return some items in a table or filter\nby some non-key condition. Accepts a stream of ",(0,i.yg)("inlineCode",{parentName:"p"},"ScanRequest")," returns a ",(0,i.yg)("inlineCode",{parentName:"p"},"Chunk")," of ",(0,i.yg)("inlineCode",{parentName:"p"},"Map[AttributeName, AttributeValue]"),".\nFails if the table does not exist."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val tableName     = TableName("scan1")\nval scanRequest = ScanRequest(tableName)\n\nval scanAction: ZIO[DynamoDBConnector, AwsError, Chunk[Map[AttributeName, AttributeValue]]] =\n  ZStream(scanRequest) >>> scan\n')),(0,i.yg)("h2",{id:"tableexists"},(0,i.yg)("inlineCode",{parentName:"h2"},"tableExists")),(0,i.yg)("p",null,"Given a ",(0,i.yg)("inlineCode",{parentName:"p"},"TableName"),", returns a ",(0,i.yg)("inlineCode",{parentName:"p"},"Boolean")," indicating if the table exists."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"val tableExistsAction: ZIO[DynamoDBConnector, AwsError, Boolean] = ZStream(tableName) >>> tableExists\n")),(0,i.yg)("h2",{id:"updateitem"},(0,i.yg)("inlineCode",{parentName:"h2"},"updateItem")),(0,i.yg)("p",null,"Accepts a stream of ",(0,i.yg)("inlineCode",{parentName:"p"},"UpdateItemRequest")," and returns ",(0,i.yg)("inlineCode",{parentName:"p"},"Unit"),". Will fail with a ",(0,i.yg)("inlineCode",{parentName:"p"},"ResourceNotFoundException")," if the table does not exist."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val tableName = TableName("updateItem1")\nval item1     = Map(AttributeName("id") -> AttributeValue(s = StringAttributeValue("key1")))\nval updateItemRequest = UpdateItemRequest(\n  tableName,\n  item1,\n  Map(\n    AttributeName("authorized") -> AttributeValueUpdate(\n      AttributeValue(bool = BooleanAttributeValue(true)),\n      AttributeAction.PUT\n    )\n  )\n)\n\nval updateItemAction: ZIO[DynamoDBConnector, AwsError, Unit] =\n  ZStream(updateItemRequest) >>> updateItem\n')),(0,i.yg)("h2",{id:"updatetable"},(0,i.yg)("inlineCode",{parentName:"h2"},"updateTable")),(0,i.yg)("p",null,"Accepts a stream of ",(0,i.yg)("inlineCode",{parentName:"p"},"UpdateTableRequest")," and returns ",(0,i.yg)("inlineCode",{parentName:"p"},"Unit"),". Will fail with a ",(0,i.yg)("inlineCode",{parentName:"p"},"ResourceNotFoundException")," if the table does not exist."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val tableName = TableName("updateTable1")\nval updateTableRequest = UpdateTableRequest(\n  tableName,\n  provisionedThroughput = Some(\n    ProvisionedThroughput(\n      readCapacityUnits = PositiveLongObject(16L),\n      writeCapacityUnits = PositiveLongObject(16L)\n    )\n  )\n)\n\nval updateTableAction: ZIO[DynamoDBConnector, AwsError, Unit] =\n  ZStream(updateTableRequest) >>> updateTable\n')))}c.isMDXComponent=!0}}]);