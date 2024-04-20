"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[75249],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var i=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?i.createElement(g,a(a({ref:t},p),{},{components:n})):i.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(58168),o=(n(96540),n(15680));const r={id:"monitor-a-zio-application-using-zio-built-in-metric-system",title:"Tutorial: How to Monitor a ZIO Application Using ZIO's Built-in Metric System?",sidebar_label:"Monitoring a ZIO Application Using ZIO's Built-in Metric System"},a=void 0,s={unversionedId:"guides/tutorials/monitor-a-zio-application-using-zio-built-in-metric-system",id:"guides/tutorials/monitor-a-zio-application-using-zio-built-in-metric-system",title:"Tutorial: How to Monitor a ZIO Application Using ZIO's Built-in Metric System?",description:"Introduction",source:"@site/docs/guides/tutorials/monitor-a-zio-application-using-zios-built-in-metric-system.md",sourceDirName:"guides/tutorials",slug:"/guides/tutorials/monitor-a-zio-application-using-zio-built-in-metric-system",permalink:"/guides/tutorials/monitor-a-zio-application-using-zio-built-in-metric-system",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/tutorials/monitor-a-zio-application-using-zios-built-in-metric-system.md",tags:[],version:"current",frontMatter:{id:"monitor-a-zio-application-using-zio-built-in-metric-system",title:"Tutorial: How to Monitor a ZIO Application Using ZIO's Built-in Metric System?",sidebar_label:"Monitoring a ZIO Application Using ZIO's Built-in Metric System"},sidebar:"guides-sidebar",previous:{title:"Producing/Consuming Data To/From Kafka Topics",permalink:"/guides/tutorials/producing-consuming-data-from-kafka-topics"},next:{title:"Debugging a ZIO Application",permalink:"/guides/tutorials/debug-a-zio-application"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Running the Example",id:"running-the-example",level:2},{value:"Trying a Simple Example",id:"trying-a-simple-example",level:2},{value:"Adding Metrics to Our Restful Web Service",id:"adding-metrics-to-our-restful-web-service",level:2},{value:"Applying the Metrics to Our Restful Web Service",id:"applying-the-metrics-to-our-restful-web-service",level:2},{value:"Adding Dependencies to the Project",id:"adding-dependencies-to-the-project",level:2},{value:"Providing Metrics as a REST API For Prometheus",id:"providing-metrics-as-a-rest-api-for-prometheus",level:2},{value:"Testing the Metrics",id:"testing-the-metrics",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"ZIO has a built-in metric system that allows us to monitor the performance of our application. This is very useful for debugging and tuning our application. In this tutorial, we are going to learn how to add metrics to our application and then how to connect our application to one of the metric backends, e.g. Prometheus."),(0,o.yg)("h2",{id:"running-the-example"},"Running the Example"),(0,o.yg)("p",null,"To access the code examples, you can clone the ",(0,o.yg)("a",{parentName:"p",href:"http://github.com/zio/zio-quickstarts"},"ZIO Quickstarts")," project:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"$ git clone git@github.com:zio/zio-quickstarts.git \n$ cd zio-quickstarts/zio-quickstart-restful-webservice-metrics\n")),(0,o.yg)("p",null,"And finally, run the application using sbt:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"$ sbt run\n")),(0,o.yg)("h2",{id:"trying-a-simple-example"},"Trying a Simple Example"),(0,o.yg)("p",null,"Before going to apply the metrics in our application, let's try a simple example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.metrics.Metric\n\nobject MainApp extends ZIOAppDefault {\n  private val count = Metric.counterInt("fib_call_total").fromConst(1)\n\n  def fib(n: Int): ZIO[Any, Nothing, Int] =\n    if (n <= 1) ZIO.succeed(1)\n    else for {\n      a <- fib(n - 1) @@ count\n      b <- fib(n - 2) @@ count\n    } yield a + b\n\n  def run =\n    for {\n      i <- Console.readLine("Please enter a number to calculate fibonacci: ").mapAttempt(_.toInt)\n      n <- fib(i) @@ count\n      _ <- Console.printLine(s"fib($i) = $n")\n      c <- count.value\n      _ <- ZIO.debug(s"number of fib calls to calculate fib($i): ${c.count}")\n    } yield ()\n}\n')),(0,o.yg)("p",null,"In this example, we are going to calculate the fibonacci number for a given number. We also count the number of times we call the ",(0,o.yg)("inlineCode",{parentName:"p"},"fib")," function using the ",(0,o.yg)("inlineCode",{parentName:"p"},"count")," metric. Finally, we will print the value of the metric as a debug message."),(0,o.yg)("p",null,"This is a pedagogical example of how to use metrics. But in real life, we will probably want to poll the metrics using a web API and feed them to a monitoring system, e.g. Prometheus. In the following sections, we will learn how to do that by applying the metrics to our RESTful web service."),(0,o.yg)("h2",{id:"adding-metrics-to-our-restful-web-service"},"Adding Metrics to Our Restful Web Service"),(0,o.yg)("p",null,"In this section, we are going to define a new metric called ",(0,o.yg)("inlineCode",{parentName:"p"},"count_all_requests")," that counts the number of requests to our web service:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.metrics._\n\ndef countAllRequests(method: String, handler: String) =\n  Metric.counterInt("count_all_requests").fromConst(1)\n    .tagged(\n      MetricLabel("method", method),\n      MetricLabel("handler", handler)\n    )\n')),(0,o.yg)("p",null,"This metric also has two tags, ",(0,o.yg)("inlineCode",{parentName:"p"},"method")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"handler"),", which are used to tag the metric which enables us to group the metrics by HTTP method and the URL handler."),(0,o.yg)("p",null,"All metrics are defined as a ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIOAspect")," that helps us to add metrics to our application in an aspect-oriented fashion."),(0,o.yg)("h2",{id:"applying-the-metrics-to-our-restful-web-service"},"Applying the Metrics to Our Restful Web Service"),(0,o.yg)("p",null,"After defining the metric, we need to apply it to our web service. We can do this by using the ",(0,o.yg)("inlineCode",{parentName:"p"},"@@")," syntax:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\nimport zio.json._\n\n\nobject UserApp {\n  def apply(): Http[UserRepo, Throwable, Request, Response] =\n    Http.collectZIO[Request] {\n      // GET /users\n      case Method.GET -> !! / "users" =>\n        UserRepo.users\n          .map(response => Response.json(response.toJson)) @@\n          countAllRequests("GET", "/users")\n    }\n}\n')),(0,o.yg)("p",null,"We can do the same for the rest of the HTTP request handlers in our web service. After applying all the metrics, it is time to prove the metrics as a RESTful API. Before that, let's add the required dependencies to our project."),(0,o.yg)("h2",{id:"adding-dependencies-to-the-project"},"Adding Dependencies to the Project"),(0,o.yg)("p",null,"In the following sections, we are going to utilize the ",(0,o.yg)("inlineCode",{parentName:"p"},"zio-metrics-connector")," module from the ZIO ZMX project and also provide metrics as a REST API. So let's add the following dependency to our project:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-metrics-connectors" % "2.2.0"\nlibraryDependencies += "dev.zio" %% "zio-metrics-connectors-prometheus" % "2.2.0"\n')),(0,o.yg)("p",null,"This module provides various connectors for metrics backend, e.g. Prometheus."),(0,o.yg)("h2",{id:"providing-metrics-as-a-rest-api-for-prometheus"},"Providing Metrics as a REST API For Prometheus"),(0,o.yg)("p",null,"The following snippet shows how to provide an HTTP endpoint that exposes the metrics as a REST API for Prometheus:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\nimport zio._\nimport zio.metrics.connectors.prometheus.PrometheusPublisher\n\nobject PrometheusPublisherApp {\n  def apply(): Http[PrometheusPublisher, Nothing, Request, Response] = {\n    Http.collectZIO[Request] { case Method.GET -> !! / "metrics" =>\n      ZIO.serviceWithZIO[PrometheusPublisher](_.get.map(Response.text))\n    }\n  }\n}\n')),(0,o.yg)("p",null,"Next, we need to add the ",(0,o.yg)("inlineCode",{parentName:"p"},"PrometheusPublisherApp")," HTTP App to our application:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zhttp.service.Server\nimport zio.metrics.connectors.{MetricsConfig, prometheus}\n\nobject MainApp extends ZIOAppDefault {\n  private val metricsConfig = ZLayer.succeed(MetricsConfig(1.seconds))\n\n  def run =\n    Server.start(\n      port = 8080,\n      http = GreetingApp() ++ DownloadApp() ++ CounterApp() ++ UserApp() ++ PrometheusPublisherApp()\n    ).provide(\n      // An layer responsible for storing the state of the `counterApp`\n      ZLayer.fromZIO(Ref.make(0)),\n      \n      // To use the persistence layer, provide the `PersistentUserRepo.layer` layer instead\n      InmemoryUserRepo.layer,\n\n      // configs for metric backends\n      metricsConfig,\n\n      // The prometheus reporting layer\n      prometheus.publisherLayer,\n      prometheus.prometheusLayer,\n    )\n}\n")),(0,o.yg)("h2",{id:"testing-the-metrics"},"Testing the Metrics"),(0,o.yg)("p",null,"Now that we have the metrics as a REST API, we can test them. Let's run the application and then send some requests to the application as below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ curl -i http://localhost:8080/users -d \'{"name": "John", "age": 42}\'\n$ curl -i http://localhost:8080/users -d \'{"name": "Jane", "age": 43}\'\n$ curl -i http://localhost:8080/users\n')),(0,o.yg)("p",null,'If we fetch the metrics from the "/metrics" endpoint, we will see the metrics in the Prometheus format, like below:'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ curl -i http://localhost:8080/metrics\nHTTP/1.1 200 OK\ncontent-type: text/plain\ncontent-length: 278\n\n# TYPE count_all_requests counter\n# HELP count_all_requests Some help\ncount_all_requests{method="POST",handler="/users"}  2.0 1655210796102\n# TYPE count_all_requests counter\n# HELP count_all_requests Some help\ncount_all_requests{method="GET",handler="/users"}  1.0 1655210796102\u23ce\n')),(0,o.yg)("p",null,"Now that we have the metrics as a REST API, we can add this endpoint to our Prometheus server to fetch the metrics periodically."),(0,o.yg)("h2",{id:"conclusion"},"Conclusion"),(0,o.yg)("p",null,"In this tutorial, we have learned how to define metrics and apply them to our application. We have also learned how to provide the metrics as a REST API which then can be polled by a Prometheus server."),(0,o.yg)("p",null,"All the source code associated with this article is available on the ",(0,o.yg)("a",{parentName:"p",href:"http://github.com/zio/zio-quickstarts"},"ZIO Quickstart")," on Github."))}m.isMDXComponent=!0}}]);