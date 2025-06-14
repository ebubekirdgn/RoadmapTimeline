export const roadmapData = {
  title: "ASP.NET Core Developer in 2025",
  mainBranches: [
    {
      id: "general-skills",
      title: "General Development Skills",
      direction: "right", // Indicates it branches to the right
      children: [
        { id: "git", title: "GIT - Version Control (VSTS, GitHub, GitLab)", type: "must-know" },
        { id: "http", title: "HTTP/HTTPS protocol + TLS/SSL", type: "must-know" },
        { id: "search", title: "Learn to search for solutions using Google + ChatGPT/Claude/Github Copilot", type: "must-know" },
        { id: "data-structures", title: "Data Structures and Algorithms", type: "must-know" },
      ]
    },
    {
      id: "csharp",
      title: "C#",
      direction: "left", // Indicates it branches to the left
      children: [
        { id: "csharp-basics", title: "Learn the basics of C# 13", type: "must-know" },
        { id: "dotnet9", title: "Learn .NET 9", type: "must-know" },
        { id: "dotnet-cli", title: "Learn dotnet CLI", type: "must-know" },
        { id: "stylecop", title: "StyleCop rules", type: "must-know" },
      ]
    },
   
    {
      id: "sql-fundamentals",
      title: "SQL Fundamentals",
      direction: "right",
      children: [
        { id: "fundamentals", title: "Fundamentals about database design and SQL Syntax", type: "must-know" },
        { id: "stored-procedure", title: "Stored Procedures", type: "must-know" },
        { id: "constraints", title: "Constraints", type: "must-know" },
        { id: "triggers", title: "Triggers", type: "good-to-know" },
      ]
    },
    {
      id: "aspnet-core-basics",
      title: "ASP.NET Core Basics",
      direction: "left",
      children: [
        { id: "mvc-api", title: "MVC & Minimal APIs", type: "must-know" },
        { id: "options-config", title: "Options & Configurations", type: "must-know" },
        { id: "middlewares", title: "Middlewares", type: "must-know" },
        { id: "filter-attributes", title: "Filter & Attributes", type: "must-know" },
        { id: "background-tasks", title: "Background Tasks", type: "good-to-know" },
        { id: "auth", title: "Authentication & Authorization (Identity, IdentityServer, OpenIddict, Auth0/OIDC, OWASP Top 10)", type: "must-know" },
        { id: "caching", title: "Caching (Output, Response, Hybrid)", type: "good-to-know" },
        { id: "razor-pages", title: "Razor Pages", type: "good-to-know" },
        { id: "razor-components", title: "Razor Components", type: "optional" },
      ]
    },
   
    {
      id: "solid",
      title: "SOLID",
      direction: "right",
      children: [
        { id: "single-responsibility", title: "Single Responsibility Principle (SRP)", type: "must-know" },
        { id: "open-closed", title: "Open Closed Principle (OCP)", type: "must-know" },
        { id: "liskov", title: "Liskov Substitution Principle (LSP)", type: "must-know" },
        { id: "interface-segregation", title: "Interface Segregation Principle (ISP)", type: "good-to-know" },
        { id: "dependency-inversion", title: "Dependency Inversion Principle (DIP)", type: "good-to-know" },
      ]
    },
    {
      "id": "orm",
      "title": "ORM",
      "direction": "left",
      "children": [
        {
          "id": "ef-core",
          "title": "Entity Framework Core",
          "children": [
            { "id": "ef-basics", "title": "Learn the basics of Entity Framework Core", "type": "must-know" },
            { "id": "code-first", "title": "Code First + Migrations", "type": "must-know" },
            { "id": "change-tracker", "title": "Change Tracker API", "type": "good-to-know" },
            { "id": "loading-strategies", "title": "Lazy Loading, Eager Loading, Explicit Loading", "type": "good-to-know" },
            { "id": "inheritance-mapping", "title": "TPH, TPC, TPT", "type": "optional" },
            { "id": "bulk-operations", "title": "Bulk Insert/Update APIs", "type": "optional" },
            { "id": "interceptors", "title": "Interceptors", "type": "optional" }
          ]
        },
        {
          "id": "dapper",
          "title": "Dapper",
          "type": "good-to-know"
        }
      ]
    },
    {
      id: "databases",
      title: "Databases",
      direction: "right",
      children: [
        {
          id: "relational",
          title: "Relational",
          children: [
            { id: "sql-server", title: "SQL Server", type: "must-know" },
            { id: "postgresql", title: "PostgreSQL", type: "good-to-know" },
            { id: "mariadb", title: "MariaDB", type: "optional" },
            { id: "mysql", title: "MySQL", type: "optional" },
          ]
        },
        {
          id: "search-engines",
          title: "Search Engines",
          children: [
            { id: "elasticsearch", title: "Elasticsearch", type: "must-know" },
            { id: "meilisearch", title: "Meilisearch", type: "must-know" },
            { id: "manticoresearch", title: "ManticoreSearch", type: "optional" },
            { id: "opensearch", title: "OpenSearch", type: "optional" },
          ]
        },
        {
          id: "nosql",
          title: "NoSQL",
          children: [
            {
              id: "on-premises",
              title: "On-Premises",
              children: [
                { id: "redis-onprem", title: "Redis", type: "must-know" },
                { id: "mongodb", title: "MongoDB", type: "good-to-know" },
                { id: "lite-db", title: "LiteDB", type: "optional" },
                { id: "apache-cassandra", title: "Apache Cassandra", type: "optional" },
                { id: "ravendb", title: "RavenDB", type: "optional" },
                { id: "couchdb", title: "CouchDB", type: "optional" },
              ]
            },
            {
              id: "cloud",
              title: "Cloud",
              children: [
                { id: "azure-cosmosdb", title: "Azure CosmosDB", type: "good-to-know" },
                { id: "amazon-dynamodb", title: "Amazon DynamoDB", type: "optional" },
              ]
            },
          ]
        },
      ]
    },
    {
      id: "caching",
      title: "Caching",
      direction: "right",
      children: [
        {
          id: "memory-cache",
          title: "Memory Cache",
          type: "must-know"
        },
        {
          id: "distributed-cache",
          title: "Distributed Cache",
          children: [
            {
              id: "redis",
              title: "Redis",
              type: "must-know",
              children: [
                {
                  id: "stackexchange-redis",
                  title: "StackExchange.Redis",
                  type: "must-know"
                },
                {
                  id: "easycaching",
                  title: "EasyCaching",
                  type: "good-to-know"
                }
              ]
            },
            {
              id: "memcached",
              title: "Memcached",
              type: "optional"
            }
          ]
        },
        {
          id: "application-level-caching",
          title: "Application-Level",
          children: [
            {
              id: "response-caching",
              title: "Response Caching",
              type: "good-to-know",
              children: [
                {
                  id: "builtin",
                  title: "Build in",
                  type: "must-know"
                },
                {
                  id: "marvin-cache-headers",
                  title: "Marvin.Cache.Headers",
                  type: "optional"
                },
              ]
            },
            {
              id: "output-caching",
              title: "Output Caching",
              type: "good-to-know"
            },
            {
              id: "ef-2nd-level-cache",
              title: "Entity Framework 2nd Level Cache",
              type: "optional"
            }
          ]
        },
      ]
    },
    {
      id: "log-frameworks",
      title: "Log Frameworks",
      direction: "left",
      children: [
        { id: "serilog", title: "Serilog", type: "must-know" },
        { id: "nlog", title: "NLog", type: "good-to-know" },
      ]
    },
    {
      id: "real-time-communication",
      title: "Real Time Communication",
      direction: "left",
      children: [
        { id: "signalr-core", title: "SignalR Core", type: "must-know" },
        { id: "web-sockets", title: "Web Sockets", type: "good-to-know" },
      ]
    },
    {
      id: "api-clients-communications",
      title: "API Clients & Communications",
      direction: "right",
      children: [
        {
          id: "rest",
          title: "REST",
          children: [
            { id: "griffiy", title: "Griffiy", type: "good-to-know" },
            { id: "odata", title: "OData", type: "optional" },
            { 
              id: "repr", 
              title: "REPR Pattern", 
              type: "optional",
              children: [
                { id: "minimal-apis", title: "Minimal APIs", type: "must-know" },
                { id: "ardalis-endpoints", title: "Ardalis.Endpoints", type: "optional" },
                { id: "fastendpoints", title: "FastEndpoints", type: "optional" },
              ]
             },
          ]
        },
        {
          id: "grpc",
          title: "gRPC",
          children: [
            { id: "miniapi", title: "Minimal APIs", type: "must-know" },
          ]
        },
        {
          id: "graphql",
          title: "GraphQL",
          children: [
            { id: "hotchocolate", title: "HotChocolate", type: "good-to-know" },
            { id: "graphql-dotnet", title: "GraphQL.dotnet", type: "good-to-know" },
          ]
        },
      ]
    },
    {
      id: "background-task-scheduler",
      title: "Background Task Scheduler",
      direction: "left",
      children: [
        { id: "native-background-service", title: "Native BackgroundService", type: "must-know" },
        { id: "hangfire", title: "HangFire", type: "good-to-know" },
        { id: "quartz", title: "Quartz", type: "optional" },
        { id: "coravel", title: "Coravel", type: "optional" },
      ]
    },
    {
      id: "object-mapping",
      title: "Object Mapping",
      direction: "right",
      children: [
        { id: "manual-mapping", title: "Manual mapping", type: "must-know" },
        { id: "mappery", title: "Mapperly", type: "good-to-know" },
        { id: "automapper", title: "AutoMapper", type: "good-to-know" },
      ]
    },
    {
      id: "microservices",
      title: "Microservices",
      direction: "left",
      children: [
        {
          id: "message-broker",
          title: "Message broker",
          children: [
            { id: "rabbitmq", title: "RabbitMQ", type: "good-to-know" },
            { id: "apache-kafka", title: "Apache Kafka", type: "good-to-know" },
            { id: "azure-service-bus", title: "Azure Service Bus", type: "optional" },
            { id: "amazon-sqs", title: "Amazon SQS", type: "optional" },
            { id: "netmq", title: "NetMQ", type: "optional" },
          ]
        },
        {
          id: "message-bus",
          title: "Message-Bus",
          children: [
            { id: "masstransit", title: "MassTransit", type: "must-know" },
            { id: "nservicebus", title: "NServiceBus", type: "good-to-know" },
            { id: "realy-netq", title: "EasyNetMQ", type: "optional" },
          ]
        },
        {
          id: "api-gateway",
          title: "API Gateway",
          children: [
            { id: "ocelot", title: "Ocelot", type: "must-know" },
            { id: "yarp", title: "YARP", type: "good-to-know" },
          ]
        },
        {
          id: "containerization",
          title: "Containerization",
          children: [
            { id: "docker", title: "Docker", type: "must-know" },
            { id: "podman", title: "Podman", type: "optional" },
          ]
        },
        {
          id: "orchestration",
          title: "Orchestration",
          children: [
            { 
              id: "kubernetes", 
              title: "Kubernetes", 
              type: "must-know",
              children: [
                { id: "kubect1", title: "Kubect1", type: "good-to-know" },
                { id: "rancher", title: "Rancher", type: "optional" },
                { id: "k8s", title: "K9s", type: "must-know" },
              ]
             },
          ]
        },
        {
          id: "other",
          title: "Other",
          children: [
            { id: "net-aspire", title: ".NET Aspire", type: "good-to-know" },
            { id: "orleans", title: "Orleans", type: "optional" },
            { id: "proto-actor", title: "Proto.Actor", type: "optional" },
            { id: "dapr", title: "Dapr", type: "optional" },
            { id: "akka-net", title: "Akka.NET", type: "optional" },
          ]
        },
      ]
    },
    {
      id: "testing",
      title: "Testing",
      direction: "right",
      children: [
        {
          id: "unit-testing",
          title: "Unit Testing",
          children: [
            {
              id: "frameworks",
              title: "Frameworks",
              children: [
                { id: "xunit", title: "xUnit", type: "must-know" },
                { id: "nunit", title: "NUnit", type: "good-to-know" },
                { id: "mstest", title: "MSTest", type: "optional" },
              ]
            },
            {
              id: "mocking",
              title: "Mocking",
              children: [
                { id: "moq", title: "Moq", type: "must-know" },
                { id: "nsubstitute", title: "NSubstitute", type: "good-to-know" },
                { id: "fakereasy", title: "FakeItEasy", type: "optional" },
              ]
            },
            {
              id: "assertion",
              title: "Assertion",
              children: [
                { id: "fluentassertions", title: "FluentAssertions", type: "must-know" },
              ]
            },
            {
              id: "fake-data-generators",
              title: "Fake Data Generators",
              children: [
                { id: "autofixture", title: "AutoFixture", type: "good-to-know" },
                { id: "bogus", title: "Bogus", type: "optional" },
              ]
            },
          ]
        },
        {
          id: "integration-testing",
          title: "Integration Testing",
          children: [
            { id: "webapplicationfactory", title: "WebApplicationFactory", type: "must-know" },
            { id: "test-containers", title: "Test Containers", type: "must-know" },
            { id: "dotnet-aspire", title: ".NET Aspire", type: "good-to-know" },
            { id: "respawn", title: "Respawn", type: "optional" },
          ]
        },
        {
          id: "snapshot-testing",
          title: "Snapshot Testing",
          children: [
            { id: "verify", title: "Verify", type: "good-to-know" },
          ]
        },
        {
          id: "behavior-testing",
          title: "Behavior Testing",
          children: [
            { id: "specflow", title: "SpecFlow", type: "good-to-know" },
          ]
        },
        {
          id: "e2e-testing",
          title: "E2E Testing",
          children: [
            { id: "playwright", title: "Playwright", type: "good-to-know" },
            { id: "puppeteer-sharp", title: "Puppeteer-Sharp", type: "optional" },
            { id: "selenium", title: "Selenium", type: "optional" },
          ]
        },
        {
          id: "performance-testing",
          title: "Performance Testing",
          children: [
            { id: "k6", title: "K6", type: "good-to-know" },
            { id: "jmeter", title: "JMeter", type: "optional" },
            { id: "crank", title: "Crank", type: "optional" },
            { id: "bombardier", title: "Bombardier", type: "optional" },
          ]
        },
        {
          id: "architecture-testing",
          title: "Architecture Testing",
          children: [
            { id: "archunitnet", title: "ArchUnitNET", type: "good-to-know" },
            { id: "netarchtest", title: "NetArchTest", type: "optional" },
          ]
        },
      ]
    },
    {
      id: "design-patterns",
      title: "Design Patterns",
      direction: "left",
      children: [
        { id: "creational", title: "Creational", type: "must-know" },
        { id: "structural", title: "Structural", type: "must-know" },
        { id: "behavioral", title: "Behavioral", type: "must-know" },
      ]
    },
    {
      id: "continuous-integration-delivery",
      title: "Continuous Integration & Delivery (Automation)",
      direction: "right",
      children: [
        { id: "github-actions", title: "GitHub Actions", type: "must-know" },
        { id: "azure-pipelines", title: "Azure Pipelines", type: "good-to-know" },
        { id: "gitlab-ci-cd", title: "GitLab CI/CD", type: "optional" },
        { id: "teamcity-ci-cd", title: "TeamCity CI/CD", type: "optional" },
      ]
    },
    {
      id: "monitoring-logging-tracing-alerting",
      title: "Monitoring/Logging/Tracing/Alerting",
      direction: "right",
      children: [
        {
          id: "monitoring",
          title: "Monitoring",
          children: [
            {
              id: "on-premises-monitoring",
              title: "On-Premises",
              children: [
                { id: "prometheus-grafana", title: "Prometheus/Grafana", type: "optional" },
              ]
            },
            {
              id: "cloud-monitoring",
              title: "Cloud",
              children: [
                { id: "datadog-mon", title: "Datadog", type: "optional" },
              ]
            },
          ]
        },
        {
          id: "logging",
          title: "Logging",
          children: [
            {
              id: "on-premises-logging",
              title: "On-Premises",
              children: [
                { id: "elk-stack", title: "ELK Stack", type: "good-to-know" },
                { id: "seq", title: "Seq", type: "must-know" },
                { id: "sentry", title: "Sentry.io", type: "optional" },
              ]
            },
            {
              id: "cloud-logging",
              title: "Cloud",
              children: [
                { id: "datadog-log", title: "Datadog", type: "optional" },
                { id: "sentry-io-log", title: "Sentry.io", type: "optional" },
              ]
            },
          ]
        },
        {
          id: "tracing",
          title: "Tracing",
          children: [
            {
              id: "on-premises-tracing",
              title: "On-Premises",
              children: [
                { 
                  id: "opentelemetry",
                  title: "OpenTelemetry (OTel)",
                  type: "good-to-know",
                  children: [
                    { id: "jaeger", title: "Jaeger", type: "optional" },
                    { id: "zipkin", title: "Zipkin", type: "optional" },
                  ]
                },
                { id: "sentry-io-onprem-trace", title: "Sentry.io", type: "optional" },
              ]
            },
          
            {
              id: "cloud-tracing",
              title: "Cloud",
              children: [
                { id: "datadog-trace", title: "Datadog", type: "optional" },
                { id: "sentry-io-trace", title: "Sentry.io", type: "optional" },
              ]
            },
          
          ]
        },
        {
          id: "alerting",
          title: "Alerting",
          children: [
            {
              id: "on-premises-alerting",
              title: "On-Premises",
              children: [
                { id: "zabbix", title: "Zabbix", type: "good-to-know" },
                { id: "alertmanager", title: "Alertmanager", type: "optional" },

              ]
            },
            {
              id: "cloud-alerting",
              title: "Cloud",
              children: [
                { id: "datadog-alert", title: "Datadog", type: "optional" },
              ]
            },
           
          ]
        },
      ]
    },
    {
      id: "client-side-dotnet",
      title: "Client-Side .NET",
      direction: "left",
      children: [
        {
          id: "template-engines",
          title: "Template Engines",
          children: [
            { id: "razor", title: "Razor", type: "must-know" },
            { id: "scriban", title: "Scriban", type: "optional" },
            { id: "fluid", title: "Fluid", type: "optional" },
          ]
        },
        {
          id: "frameworks-client",
          title: "Frameworks",
          children: [
            { 
              id: "blazor",
              title: "Blazor",
               type: "must-know",
               children: [
                { id: "blazor-wasm", title: "Blazor WASM", type: "good-to-know" },
                { id: "blazor-server-side", title: "Blazor Server-Side", type: "must-know" },
                { id: "blazor-hybrid", title: "Blazor Hybrid", type: "optional" },
              ]
              },
           
            { id: "net-maui", title: ".NET MAUI", type: "optional" },
          ]
        },
      ]
    },
    {
      id: "good-to-know-libraries",
      title: "Good to Know Libraries",
      direction: "left",
      children: [
        { id: "scalar", title: "Scalar", type: "must-know" },
        { id: "mediatr", title: "MediatR", type: "must-know" },
        { id: "fluentvalidation", title: "FluentValidation", type: "must-know" },
        { id: "polly", title: "Polly", type: "good-to-know" },
        { id: "benchmark-net", title: "Benchmark.NET", type: "good-to-know" },
        { id: "distributedlock", title: "DistributedLock", type: "good-to-know" },
        { id: "nuke-build", title: "Nuke.Build", type: "optional" },
        { id: "marten", title: "Marten", type: "optional" },
      ]
    },
    {
      id: "ai-llms",
      title: "AI / LLMs",
      direction: "right",
      children: [
        { id: "semantic-kernel", title: "Semantic Kernel", type: "good-to-know" },
        { id: "openai-net", title: "OpenAI .NET", type: "optional" },
      ]
    },
    {
      id: "keep-learning",
      title: "Keep Learning :)",
      direction: "right",
      children: [] // No children for this node
    }
  ]
};
