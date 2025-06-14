export const roadmapData = {
  title: "ASP.NET Core Developer in 2025",
  mainBranches: [
    {
      id: "general-skills",
      title: "General Development Skills",
      direction: "right", // Indicates it branches to the right
      children: [
        {
          id: "git",
          title: "GIT - Version Control (VSTS, GitHub, GitLab)",
          type: "must-know",
          description: `
            <div style='font-family:sans-serif;line-height:1.6;background:#f9fafb;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'><h2 style='color:#3b82f6'>🔧 GIT - Version Control (VSTS, GitHub, GitLab)</h2><p><strong>Git</strong> is a must-know version control system. It helps track changes, collaborate with teams, and manage codebases efficiently.</p><h3 style='color:#10b981'>🚀 Core Concepts</h3><ul style='list-style:disc;padding-left:1.2rem'><li><strong>Repository:</strong> Stores all project history.</li><li><strong>Commit:</strong> Snapshot of your changes.</li><li><strong>Branch:</strong> Work independently on features.</li><li><strong>Merge:</strong> Combine branches together.</li><li><strong>Pull/Push:</strong> Sync with remote servers.</li></ul><h3 style='color:#f59e0b'>🧠 Essential Commands</h3><pre style='background:#1f2937;color:#f3f4f6;padding:1rem;border-radius:.5rem;overflow:auto'><code>git init       # Start a new repo
git clone URL  # Clone a remote repo
git status     # Check current changes
git add .      # Stage all changes
git commit -m "Message"  # Commit changes
git push       # Upload to remote
git pull       # Get latest changes
git branch     # List branches
git checkout -b new_branch  # New branch
git merge main # Merge changes</code></pre><h3 style='color:#8b5cf6'>🧰 Platforms</h3><ul style='list-style:circle;padding-left:1.2rem'><li><strong>GitHub:</strong> Ideal for open-source and teams.</li><li><strong>GitLab:</strong> Great for CI/CD integration.</li><li><strong>Azure DevOps:</strong> Microsoft-backed with pipelines.</li></ul><h3 style='color:#ef4444'>⚠️ Best Practices</h3><ul style='list-style:square;padding-left:1.2rem'><li>Always set up <code>.gitignore</code>.</li><li>Don’t commit directly to main.</li><li>Write clear commit messages.</li><li>Understand rebase vs merge.</li><li>Practice conflict resolution.</li></ul><h3 style='color:#0ea5e9'>📚 Learn More</h3><ul style='padding-left:1.2rem'><li><a href='https://git-scm.com/doc' target='_blank' style='color:#3b82f6'>Official Git Docs</a></li><li><a href='https://lab.github.com/' target='_blank' style='color:#3b82f6'>GitHub Learning Lab</a></li><li><a href='https://www.atlassian.com/git/tutorials' target='_blank' style='color:#3b82f6'>Atlassian Tutorials</a></li><li><a href='https://git-scm.com/book/en/v2' target='_blank' style='color:#3b82f6'>Pro Git Book</a></l

          `
        },
        {
          id: "http",
          title: "HTTP/HTTPS protocol + TLS/SSL",
          type: "must-know",
          description: `
           <div style='font-family:sans-serif;line-height:1.6;background:#f9fafb;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'><h2 style='color:#3b82f6'>🌐 HTTP/HTTPS Protocol + TLS/SSL</h2><p><strong>HTTP</strong> (HyperText Transfer Protocol) is the foundation of data communication on the web. <strong>HTTPS</strong> is its secure version, using <strong>TLS/SSL</strong> encryption to protect data in transit.</p><h3 style='color:#10b981'>📘 Core Concepts</h3><ul style='list-style:disc;padding-left:1.2rem'><li><strong>HTTP:</strong> Stateless, text-based protocol for client-server communication.</li><li><strong>HTTPS:</strong> HTTP over TLS. Adds encryption and integrity.</li><li><strong>TLS (Transport Layer Security):</strong> Modern standard for secure communication.</li><li><strong>SSL:</strong> Older protocol replaced by TLS.</li></ul><h3 style='color:#f59e0b'>🔐 Why It Matters</h3><ul style='list-style:circle;padding-left:1.2rem'><li>Prevents eavesdropping and man-in-the-middle attacks.</li><li>Ensures data integrity and authenticity.</li><li>Crucial for login forms, APIs, payments, and private data.</li><li>Modern browsers require HTTPS for many features (e.g., service workers, geolocation).</li></ul><h3 style='color:#8b5cf6'>🧪 Key Terms</h3><ul style='list-style:square;padding-left:1.2rem'><li><strong>SSL Certificate:</strong> Digital document proving site identity (uses TLS).</li><li><strong>Handshake:</strong> Negotiation process between client and server to establish a secure session.</li><li><strong>Symmetric & Asymmetric Encryption:</strong> Encryption models used by TLS for secure communication.</li></ul><h3 style='color:#ef4444'>⚠️ Best Practices</h3><ul><li>Always use HTTPS in production.</li><li>Use certificates from trusted authorities (e.g., Let's Encrypt).</li><li>Redirect all HTTP traffic to HTTPS (301 Redirect).</li><li>Enable HSTS (HTTP Strict Transport Security).</li></ul><h3 style='color:#0ea5e9'>📚 Learn More</h3><ul><li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP' target='_blank' style='color:#3b82f6'>MDN: HTTP Overview</a></li><li><a href='https://letsencrypt.org/' target='_blank' style='color:#3b82f6'>Let's Encrypt - Free SSL/TLS</a></li><li><a href='https://www.cloudflare.com/learning/ssl/' target='_blank' style='color:#3b82f6'>Cloudflare: SSL/TLS Guide</a></li><li><a href='https://tools.ietf.org/html/rfc8446' target='_blank' style='color:#3b82f6'>RFC 8446 - TLS 1.3 Spec</a></li></ul></div>
          `
        },
        {
          id: "search",
          title: "Learn to search for solutions using Google + ChatGPT/Claude/Github Copilot",
          type: "must-know",
          description: `
            <div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'><h2 style='color:#3b82f6'>🧠 Learn to Search for Solutions Using Google, ChatGPT, Claude, GitHub Copilot</h2><p>Mastering modern development means knowing how to find and use solutions quickly. Leveraging AI tools and search engines can dramatically boost your efficiency.</p><h3 style='color:#10b981'>🔍 Search Fundamentals</h3><ul style='list-style:disc;padding-left:1.2rem'><li><strong>Google Dorking:</strong> Use operators like <code>site:</code>, <code>filetype:</code>, <code>intitle:</code>, etc.</li><li><strong>Error-First Search:</strong> Paste the error message as-is. Add context (framework, tool).</li><li><strong>Stack Overflow/Docs:</strong> Prioritize reputable sources, upvoted answers, and official docs.</li></ul><h3 style='color:#f59e0b'>🤖 Using AI Tools Effectively</h3><ul style='list-style:circle;padding-left:1.2rem'><li><strong>ChatGPT:</strong> Ask with context and code snippets. Iterate on answers.</li><li><strong>Claude:</strong> Great for long-form reasoning and refactoring help.</li><li><strong>GitHub Copilot:</strong> Inline AI suggestions within editors (VS Code, JetBrains).</li></ul><h3 style='color:#8b5cf6'>🧰 Pro Tips</h3><ul style='list-style:square;padding-left:1.2rem'><li>Break problems down before asking.</li><li>Don't copy blindly — understand before you apply.</li><li>Compare AI suggestions with official documentation.</li><li>Use version-specific queries (e.g., "Next.js 14 middleware auth").</li></ul><h3 style='color:#ef4444'>⚠️ What to Avoid</h3><ul><li>Overreliance on Copilot/ChatGPT — they guess based on patterns, not truth.</li><li>Trusting outdated Stack Overflow posts without checking versions.</li><li>Ignoring security best practices in copied code.</li></ul><h3 style='color:#0ea5e9'>📚 Learn More</h3><ul><li><a href='https://developers.google.com/search/docs' target='_blank' style='color:#3b82f6'>Google Search Operators</a></li><li><a href='https://docs.github.com/en/copilot' target='_blank' style='color:#3b82f6'>GitHub Copilot Docs</a></li><li><a href='https://openai.com/chatgpt' target='_blank' style='color:#3b82f6'>ChatGPT Official</a></li><li><a href='https://claude.ai/' target='_blank' style='color:#3b82f6'>Claude AI</a></li></ul></div>
          `
        },
        {
          id: "data-structures",
          title: "Data Structures and Algorithms",
          type: "must-know",
          description: `
           <div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'><h2 style='color:#3b82f6'>🧮 Data Structures and Algorithms</h2><p><strong>DSA</strong> is the foundation of computer science and critical for writing efficient, optimized code. It improves problem-solving, memory usage, and performance.</p><h3 style='color:#10b981'>📦 Core Data Structures</h3><ul style='list-style:disc;padding-left:1.2rem'><li><strong>Arrays & Lists:</strong> Store sequential data.</li><li><strong>Stacks & Queues:</strong> LIFO and FIFO access models.</li><li><strong>Hash Tables:</strong> Key-value mapping with fast access.</li><li><strong>Trees & Graphs:</strong> Represent hierarchical and connected data.</li><li><strong>Heaps, Sets:</strong> Specialized storage for priorities and uniqueness.</li></ul><h3 style='color:#f59e0b'>⚙️ Essential Algorithms</h3><ul style='list-style:circle;padding-left:1.2rem'><li><strong>Sorting:</strong> QuickSort, MergeSort, BubbleSort</li><li><strong>Searching:</strong> Binary Search, BFS, DFS</li><li><strong>Recursion & Divide & Conquer</strong></li><li><strong>Greedy & Dynamic Programming</strong></li><li><strong>Graph Algorithms:</strong> Dijkstra, Kruskal, A*</li></ul><h3 style='color:#8b5cf6'>💡 Why It Matters</h3><ul style='list-style:square;padding-left:1.2rem'><li>Write faster, more efficient code.</li><li>Crucial for technical interviews and system design.</li><li>Better use of memory and time complexity.</li></ul><h3 style='color:#ef4444'>⚠️ Best Practices</h3><ul><li>Understand time/space complexity (Big O).</li><li>Learn to choose the right data structure for the problem.</li><li>Write and trace algorithms by hand.</li></ul><h3 style='color:#0ea5e9'>📚 Learn More</h3><ul><li><a href='https://visualgo.net/en' target='_blank' style='color:#3b82f6'>Visual Algo (interactive)</a></li><li><a href='https://leetcode.com/' target='_blank' style='color:#3b82f6'>LeetCode</a></li><li><a href='https://www.geeksforgeeks.org/data-structures/' target='_blank' style='color:#3b82f6'>GeeksforGeeks - DSA</a></li><li><a href='https://cs50.harvard.edu/' target='_blank' style='color:#3b82f6'>CS50 by Harvard</a></li></ul></div>
          `
        }]
    },
    {
      id: "csharp",
      title: "C#",
      direction: "left", // Indicates it branches to the left
      children: [
        { id: "csharp-basics", title: "Learn the basics of C# 13", type: "must-know",
          description: `
         <div style='font-family:sans-serif;line-height:1.6;background:#fefefe;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'><h2 style='color:#3b82f6'>💻 Learn the Basics of C# 13</h2><p><strong>C# 13</strong> is the latest version of Microsoft's powerful object-oriented language, packed with features that improve performance, readability, and developer productivity.</p><h3 style='color:#10b981'>🔤 Language Fundamentals</h3><ul style='list-style:disc;padding-left:1.2rem'><li><strong>Variables & Types:</strong> <code>int</code>, <code>string</code>, <code>bool</code>, <code>float</code>, etc.</li><li><strong>Conditionals:</strong> <code>if</code>, <code>switch</code>, <code>match</code></li><li><strong>Loops:</strong> <code>for</code>, <code>foreach</code>, <code>while</code></li><li><strong>OOP:</strong> Classes, Objects, Inheritance, Interfaces</li></ul><pre style='background:#f3f4f6;padding:1rem;border-radius:0.75rem;overflow-x:auto'><code>// Simple method in C# 13
int Add(int a, int b) => a + b;</code></pre>

<h3 style='color:#f59e0b'>✨ New Features in C# 13</h3><ul style='list-style:circle;padding-left:1.2rem'><li><strong>🔹 Primary Constructors in Classes</strong><br/><pre style='background:#f3f4f6;padding:1rem;border-radius:0.75rem;overflow-x:auto'><code>class Person(string name, int age)
{
    public void PrintInfo() => Console.WriteLine($&quot;{name}, {age} years old&quot;);
}</code></pre></li>

<li><strong>🔹 Default Parameters in Lambdas</strong><br/><pre style='background:#f3f4f6;padding:1rem;border-radius:0.75rem;overflow-x:auto'><code>Func&lt;int, int, int&gt; sum = (a = 5, b = 10) =&gt; a + b;
Console.WriteLine(sum()); // 15</code></pre></li>

<li><strong>🔹 Parametric Attributes</strong><br/><pre style='background:#f3f4f6;padding:1rem;border-radius:0.75rem;overflow-x:auto'><code>[MaxLength(50)]
public string Name { get; set; }</code></pre></li>

<li><strong>🔹 Pattern Matching Enhancements</strong><br/><pre style='background:#f3f4f6;padding:1rem;border-radius:0.75rem;overflow-x:auto'><code>object obj = 42;
if (obj is int number and &gt; 40)
{
    Console.WriteLine(&quot;It's a big number!&quot;);
}</code></pre></li></ul>

<h3 style='color:#8b5cf6'>💡 Why Learn C#?</h3><ul style='list-style:square;padding-left:1.2rem'><li>First-class support in .NET ecosystem</li><li>Great for web (ASP.NET Core), mobile (MAUI), desktop, and game dev (Unity)</li><li>Strong typing + functional features + performance</li></ul>

<h3 style='color:#ef4444'>⚠️ Common Pitfalls</h3><ul><li>Mixing value and reference types</li><li>Using null without checking (nullable reference types!)</li><li>Overusing static/global state</li></ul>

<h3 style='color:#0ea5e9'>📚 Learn More</h3><ul><li><a href='https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-13' target='_blank' style='color:#3b82f6'>What's new in C# 13</a></li><li><a href='https://learn.microsoft.com/en-us/dotnet/csharp/' target='_blank' style='color:#3b82f6'>C# Documentation (Microsoft)</a></li><li><a href='https://dotnet.microsoft.com/en-us/learn/csharp' target='_blank' style='color:#3b82f6'>.NET Learn C# Portal</a></li></ul></div>
`
         },
        { id: "dotnet9", title: "Learn .NET 9", type: "must-know",
          description: `
         <div style="font-family:sans-serif;line-height:1.6;background:#fefefe;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)">
  <h2 style="color:#2563eb">🚀 Learn .NET 9</h2>
  <p><strong>.NET 9</strong> is the latest release of Microsoft's cross-platform, high-performance development framework. It offers enhanced performance, cloud-native capabilities, and improved developer productivity.</p>

  <h3 style="color:#16a34a">✨ Key Features</h3>
  <ul style="list-style:disc;padding-left:1.2rem">
    <li><strong>Ahead-of-Time (AOT) Compilation Improvements:</strong> Faster startup and reduced memory usage.</li>
    <li><strong>Cloud-Native Enhancements:</strong> Better support for Kubernetes and containerized applications.</li>
    <li><strong>ASP.NET Core Updates:</strong> Performance optimizations and new APIs for web development.</li>
    <li><strong>Improved Diagnostics:</strong> Advanced tools to debug and monitor applications.</li>
    <li><strong>C# 13 Support:</strong> Integration with the latest C# language features.</li>
  </ul>

  <h3 style="color:#f59e0b">🛠️ Getting Started</h3>
  <pre style="background:#f3f4f6;padding:1rem;border-radius:0.75rem;overflow-x:auto"><code>dotnet new webapp -o MyApp
cd MyApp
dotnet run
</code></pre>

  <h3 style="color:#8b5cf6">💡 Why Choose .NET 9?</h3>
  <ul style="list-style:square;padding-left:1.2rem">
    <li>Cross-platform support (Windows, Linux, macOS)</li>
    <li>High performance and scalability</li>
    <li>Rich ecosystem with libraries and tools</li>
    <li>Ideal for web, desktop, mobile, cloud, and IoT applications</li>
  </ul>

  <h3 style="color:#ef4444">⚠️ Common Pitfalls</h3>
  <ul>
    <li>Ignoring performance tuning options</li>
    <li>Not leveraging cloud-native features</li>
    <li>Missing out on diagnostics and monitoring tools</li>
  </ul>

  <h3 style="color:#0ea5e9">📚 Learn More</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/aspnet/core/release-notes/aspnetcore-9.0?view=aspnetcore-9.0" target="_blank" style="color:#2563eb">What's new in .NET 9</a></li>
    <li><a href="https://dotnet.microsoft.com/en-us/learn/dotnet/hello-world-tutorial" target="_blank" style="color:#2563eb">Official .NET 9 Tutorials</a></li>
    <li><a href="https://github.com/dotnet" target="_blank" style="color:#2563eb">.NET GitHub Repository</a></li>
  </ul>
</div>
`
         },
        { id: "dotnet-cli", title: "Learn dotnet CLI", type: "must-know",
           description: `<div style="font-family:sans-serif;line-height:1.6;background:#fefefe;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)">
  <h2 style="color:#2563eb">⚙️ Learn .NET CLI</h2>
  <p>The <strong>.NET CLI</strong> (Command Line Interface) is a powerful tool to create, build, run, and publish .NET applications efficiently from the terminal.</p>

  <h3 style="color:#16a34a">🚀 Key Commands</h3>
  <ul style="list-style:disc;padding-left:1.2rem">
    <li><code>dotnet new</code> - Create a new project or file.</li>
    <li><code>dotnet build</code> - Build a project and its dependencies.</li>
    <li><code>dotnet run</code> - Run application from source code.</li>
    <li><code>dotnet test</code> - Execute unit tests.</li>
    <li><code>dotnet publish</code> - Package the application for deployment.</li>
    <li><code>dotnet clean</code> - Remove build outputs.</li>
  </ul>

  <h3 style="color:#f59e0b">💡 Basic Usage Example</h3>
  <pre style="background:#f3f4f6;padding:1rem;border-radius:0.75rem;overflow-x:auto"><code>// Create a new console app
dotnet new console -o MyApp
cd MyApp

// Run the app
dotnet run
</code></pre>

  <h3 style="color:#8b5cf6">🔧 Why Use .NET CLI?</h3>
  <ul style="list-style:square;padding-left:1.2rem">
    <li>Lightweight and fast development workflow</li>
    <li>Automation-friendly for CI/CD pipelines</li>
    <li>Cross-platform compatibility</li>
    <li>Full control over build and deployment process</li>
  </ul>

  <h3 style="color:#ef4444">⚠️ Common Mistakes</h3>
  <ul>
    <li>Forgetting to restore packages (<code>dotnet restore</code>)</li>
    <li>Not specifying project path when working with multiple projects</li>
    <li>Confusing build and run commands</li>
  </ul>

  <h3 style="color:#0ea5e9">📚 Learn More</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/dotnet/core/tools/" target="_blank" style="color:#2563eb">Official .NET CLI Documentation</a></li>
    <li><a href="https://dotnet.microsoft.com/en-us/learn/dotnet/hello-world-tutorial" target="_blank" style="color:#2563eb">Getting Started with .NET CLI</a></li>
    <li><a href="https://github.com/dotnet/sdk" target="_blank" style="color:#2563eb">.NET SDK GitHub Repo</a></li>
  </ul>
</div>
`
         },
        { id: "stylecop", title: "StyleCop rules", type: "must-know",
          description: `<div style="font-family:sans-serif;line-height:1.6;background:#fefefe;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)">
  <h2 style="color:#2563eb">📏 StyleCop Rules</h2>
  <p><strong>StyleCop</strong> is a static code analysis tool that enforces consistent style and coding conventions in C# projects, helping teams maintain readable and maintainable codebases.</p>

  <h3 style="color:#16a34a">✨ Key Rule Categories</h3>
  <ul style="list-style:disc;padding-left:1.2rem">
    <li><strong>Layout Rules:</strong> Enforce spacing, indentation, and blank lines.</li>
    <li><strong>Naming Rules:</strong> Enforce consistent naming conventions for variables, methods, classes, etc.</li>
    <li><strong>Maintainability Rules:</strong> Promote clean and maintainable code structures.</li>
    <li><strong>Documentation Rules:</strong> Ensure XML documentation comments are present and correctly formatted.</li>
    <li><strong>Ordering Rules:</strong> Define order of elements within files and classes.</li>
  </ul>

  <h3 style="color:#f59e0b">🛠️ Common StyleCop Rules Examples</h3>
  <pre style="background:#f3f4f6;padding:1rem;border-radius:0.75rem;overflow-x:auto"><code>// Enforce PascalCase for method names
public void CalculateTotal() { }

// Require XML documentation for public members
/// <summary>
/// Calculates total price.
/// </summary>
public decimal CalculateTotalPrice() { return 0; }

// Enforce braces for all control statements
if (isValid)
{
    Process();
}
</code></pre>

  <h3 style="color:#8b5cf6">💡 Benefits of Using StyleCop</h3>
  <ul style="list-style:square;padding-left:1.2rem">
    <li>Improves code readability and consistency</li>
    <li>Reduces code review time</li>
    <li>Helps catch potential issues early</li>
    <li>Supports team-wide coding standards</li>
  </ul>

  <h3 style="color:#ef4444">⚠️ Common Pitfalls</h3>
  <ul>
    <li>Ignoring warnings instead of fixing issues</li>
    <li>Overly strict rules causing developer frustration</li>
    <li>Not customizing rules to fit project needs</li>
  </ul>

  <h3 style="color:#0ea5e9">📚 Learn More</h3>
  <ul>
    <li><a href="https://github.com/StyleCop/StyleCop" target="_blank" style="color:#2563eb">Official StyleCop GitHub</a></li>
    <li><a href="https://learn.microsoft.com/en-us/visualstudio/code-quality/stylecop-analyzers-overview" target="_blank" style="color:#2563eb">StyleCop Analyzers Overview (Microsoft Docs)</a></li>
    <li><a href="https://marketplace.visualstudio.com/items?itemName=SteveCadwallader.StyleCop" target="_blank" style="color:#2563eb">Visual Studio Marketplace - StyleCop</a></li>
  </ul>
</div>
` },
      ]
    },

    {
      id: "sql-fundamentals",
      title: "SQL Fundamentals",
      direction: "right",
      children: [
        { id: "fundamentals", title: "Fundamentals about database design and SQL Syntax", type: "must-know"
          ,description: `<div style="font-family:sans-serif;line-height:1.6;background:#fefefe;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)">
  <h2 style="color:#2563eb">🗄️ Fundamentals of Database Design & SQL Syntax</h2>
  <p><strong>Database design</strong> is the process of structuring data to ensure efficiency, integrity, and scalability. SQL (Structured Query Language) is the standard language used to communicate with relational databases.</p>

  <h3 style="color:#16a34a">📐 Key Concepts in Database Design</h3>
  <ul style="list-style:disc;padding-left:1.2rem">
    <li><strong>Entities and Tables:</strong> Represent real-world objects and data collections.</li>
    <li><strong>Primary Keys:</strong> Unique identifiers for table records.</li>
    <li><strong>Foreign Keys:</strong> Define relationships between tables.</li>
    <li><strong>Normalization:</strong> Organizing data to reduce redundancy.</li>
    <li><strong>Indexes:</strong> Improve query performance.</li>
  </ul>

  <h3 style="color:#f59e0b">💡 Basic SQL Syntax Examples</h3>
  <pre style="background:#f3f4f6;padding:1rem;border-radius:0.75rem;overflow-x:auto"><code>-- Create a table
CREATE TABLE Customers (
  CustomerID INT PRIMARY KEY,
  Name NVARCHAR(100),
  Email NVARCHAR(100)
);

-- Insert data
INSERT INTO Customers (CustomerID, Name, Email) 
VALUES (1, 'Alice', 'alice@example.com');

-- Query data
SELECT * FROM Customers WHERE CustomerID = 1;

-- Update data
UPDATE Customers SET Email = 'alice@newdomain.com' WHERE CustomerID = 1;

-- Delete data
DELETE FROM Customers WHERE CustomerID = 1;
</code></pre>

  <h3 style="color:#8b5cf6">⚙️ Best Practices</h3>
  <ul style="list-style:square;padding-left:1.2rem">
    <li>Use meaningful table and column names</li>
    <li>Define clear relationships with foreign keys</li>
    <li>Normalize data to avoid duplication</li>
    <li>Use indexes wisely to enhance performance</li>
  </ul>

  <h3 style="color:#ef4444">⚠️ Common Mistakes</h3>
  <ul>
    <li>Ignoring normalization leading to data anomalies</li>
    <li>Over-indexing causing slow writes</li>
    <li>Using vague or inconsistent naming</li>
  </ul>

  <h3 style="color:#0ea5e9">📚 Learn More</h3>
  <ul>
    <li><a href="https://www.w3schools.com/sql/" target="_blank" style="color:#2563eb">SQL Tutorial - W3Schools</a></li>
    <li><a href="https://learn.microsoft.com/en-us/sql/t-sql/language-reference" target="_blank" style="color:#2563eb">T-SQL Language Reference - Microsoft Docs</a></li>
    <li><a href="https://www.databasejournal.com/features/mssql/article.php/3905961/Database-Design-Best-Practices.htm" target="_blank" style="color:#2563eb">Database Design Best Practices</a></li>
  </ul>
</div>
`  },
        { id: "stored-procedure", title: "Stored Procedures", type: "must-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefefe; padding:1.5rem; border-radius:1rem; border:1px solid #e5e7eb; box-shadow:0 4px 12px rgba(0,0,0,0.05)">
  <h2 style="color:#2563eb">🔧 Stored Procedures</h2>
  <p><strong>Stored Procedures</strong> are precompiled SQL code stored in the database that can be executed repeatedly. They encapsulate complex operations, improve performance, and enhance security.</p>

  <h3 style="color:#16a34a">✨ Benefits of Stored Procedures</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>Improved performance due to precompilation and execution plan reuse</li>
    <li>Centralized business logic inside the database</li>
    <li>Enhanced security by controlling direct table access</li>
    <li>Reduced network traffic by executing multiple statements in one call</li>
  </ul>

  <h3 style="color:#f59e0b">🛠️ Basic Syntax Example (SQL Server)</h3>
  <pre style="background:#f3f4f6; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>CREATE PROCEDURE GetCustomerById
  @CustomerID INT
AS
BEGIN
  SELECT CustomerID, Name, Email
  FROM Customers
  WHERE CustomerID = @CustomerID;
END;
</code></pre>

  <h3 style="color:#f59e0b">🚀 Executing a Stored Procedure</h3>
  <pre style="background:#f3f4f6; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>EXEC GetCustomerById @CustomerID = 1;
</code></pre>

  <h3 style="color:#8b5cf6">💡 Advanced Features</h3>
  <ul style="list-style:square; padding-left:1.2rem">
    <li>Input and output parameters to exchange data with procedures</li>
    <li>Error handling with <code>TRY...CATCH</code> blocks</li>
    <li>Transaction control inside procedures for atomic operations</li>
    <li>Dynamic SQL execution for flexible queries</li>
  </ul>

  <h3 style="color:#ef4444">⚠️ Common Pitfalls</h3>
  <ul>
    <li>Overusing stored procedures for simple queries</li>
    <li>Ignoring proper indexing which affects procedure performance</li>
    <li>Complex procedures that are hard to maintain</li>
    <li>Security misconfigurations allowing SQL injection if not careful</li>
  </ul>

  <h3 style="color:#0ea5e9">📚 Best Practices</h3>
  <ul>
    <li>Keep procedures focused on a single responsibility</li>
    <li>Use meaningful and consistent naming conventions</li>
    <li>Use parameters to avoid SQL injection and improve flexibility</li>
    <li>Handle errors gracefully with TRY...CATCH</li>
    <li>Keep logic maintainable and avoid excessive complexity</li>
    <li>Test procedures thoroughly, especially with edge cases</li>
    <li>Document stored procedures clearly for team collaboration</li>
    <li>Regularly review and optimize execution plans</li>
  </ul>
</div>

`  },
        { id: "constraints", title: "Constraints", type: "must-know",description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefefe; padding:1.5rem; border-radius:1rem; border:1px solid #e5e7eb; box-shadow:0 4px 12px rgba(0,0,0,0.05)">
  <h2 style="color:#2563eb">🔐 Database Constraints</h2>
  <p><strong>Constraints</strong> are rules applied to database tables to enforce data integrity and consistency. They ensure that the data adheres to business logic and prevents invalid entries.</p>

  <h3 style="color:#16a34a">📋 Common Types of Constraints</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li><strong>PRIMARY KEY:</strong> Uniquely identifies each record in a table.</li>
    <li><strong>FOREIGN KEY:</strong> Enforces referential integrity between tables.</li>
    <li><strong>UNIQUE:</strong> Ensures all values in a column are distinct.</li>
    <li><strong>NOT NULL:</strong> Ensures a column cannot have NULL values.</li>
    <li><strong>CHECK:</strong> Validates that values meet a specified condition.</li>
    <li><strong>DEFAULT:</strong> Provides a default value if none is specified.</li>
  </ul>

  <h3 style="color:#f59e0b">💡 Syntax Examples</h3>
  <pre style="background:#f3f4f6; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>-- Create table with constraints
CREATE TABLE Employees (
  EmployeeID INT PRIMARY KEY,
  Name NVARCHAR(100) NOT NULL,
  Email NVARCHAR(100) UNIQUE,
  DepartmentID INT,
  Salary DECIMAL(10, 2) CHECK (Salary > 0),
  HireDate DATE DEFAULT GETDATE(),
  CONSTRAINT FK_Department FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);
</code></pre>

  <h3 style="color:#8b5cf6">⚙️ How Constraints Help</h3>
  <ul style="list-style:square; padding-left:1.2rem">
    <li>Maintain data accuracy and reliability</li>
    <li>Enforce business rules automatically</li>
    <li>Prevent orphaned records via foreign keys</li>
    <li>Reduce application-level validation needs</li>
  </ul>

  <h3 style="color:#ef4444">⚠️ Common Mistakes</h3>
  <ul>
    <li>Ignoring constraints leads to data corruption</li>
    <li>Overusing constraints causing performance overhead</li>
    <li>Not defining foreign keys causing referential integrity issues</li>
    <li>Using CHECK constraints with complex logic better handled in application</li>
  </ul>

  <h3 style="color:#0ea5e9">📚 Best Practices</h3>
  <ul>
    <li>Define primary keys on every table for unique identification</li>
    <li>Use foreign keys to maintain referential integrity</li>
    <li>Apply NOT NULL and UNIQUE constraints to critical columns</li>
    <li>Keep CHECK constraints simple and efficient</li>
    <li>Use DEFAULT constraints to avoid null or missing data</li>
    <li>Document constraints clearly for maintainability</li>
  </ul>
</div>
`  },
        {
          id: "triggers", title: "Triggers", type: "good-to-know",
          description: `
         <div style="font-family:sans-serif; line-height:1.6; background:#fefefe; padding:1.5rem; border-radius:1rem; border:1px solid #e5e7eb; box-shadow:0 4px 12px rgba(0,0,0,0.05)">
  <h2 style="color:#2563eb">⚡ Database Triggers</h2>
  <p><strong>Triggers</strong> are special stored procedures that automatically execute in response to certain events on a table or view, such as INSERT, UPDATE, or DELETE operations.</p>

  <h3 style="color:#16a34a">🔍 Types of Triggers</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li><strong>AFTER Triggers:</strong> Execute after the triggering SQL operation completes.</li>
    <li><strong>INSTEAD OF Triggers:</strong> Execute instead of the triggering operation, often used on views.</li>
    <li><strong>BEFORE Triggers:</strong> (Supported in some DBMS) Execute before the triggering operation.</li>
  </ul>

  <h3 style="color:#f59e0b">🛠️ Example: AFTER INSERT Trigger (SQL Server)</h3>
  <pre style="background:#f3f4f6; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>CREATE TRIGGER trgAfterInsertCustomer
ON Customers
AFTER INSERT
AS
BEGIN
  SET NOCOUNT ON;
  INSERT INTO AuditLog (Action, ActionDate)
  SELECT 'Inserted customer with ID: ' + CAST(CustomerID AS NVARCHAR), GETDATE()
  FROM inserted;
END;
</code></pre>

  <h3 style="color:#8b5cf6">💡 Use Cases</h3>
  <ul style="list-style:square; padding-left:1.2rem">
    <li>Auditing data changes</li>
    <li>Enforcing complex business rules</li>
    <li>Synchronizing tables</li>
    <li>Validating or modifying data automatically</li>
  </ul>

  <h3 style="color:#ef4444">⚠️ Common Pitfalls</h3>
  <ul>
    <li>Triggers can impact performance if not optimized</li>
    <li>Overuse may lead to hidden logic and debugging difficulties</li>
    <li>Unexpected side effects if triggers call other triggers recursively</li>
    <li>Complex triggers are hard to maintain</li>
  </ul>

  <h3 style="color:#0ea5e9">📚 Best Practices</h3>
  <ul>
    <li>Keep triggers simple and focused on a single task</li>
    <li>Document trigger logic thoroughly</li>
    <li>Avoid long-running or complex operations inside triggers</li>
    <li>Test triggers extensively to prevent unintended effects</li>
    <li>Use triggers mainly for auditing and enforcement of critical rules</li>
    <li>Monitor trigger performance impact regularly</li>
  </ul>
</div>

            `
        },
      ]
    },
    {
      id: "aspnet-core-basics",
      title: "ASP.NET Core Basics",
      direction: "left",
      children: [
        { id: "mvc-api", title: "MVC & Minimal APIs", type: "must-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefefe; padding:1.5rem; border-radius:1rem; border:1px solid #e5e7eb; box-shadow:0 4px 12px rgba(0,0,0,0.05)">
  <h2 style="color:#2563eb">🕸️ MVC & Minimal APIs in ASP.NET Core</h2>
  <p><strong>MVC (Model-View-Controller)</strong> and <strong>Minimal APIs</strong> are two approaches to building web APIs and web applications with ASP.NET Core.</p>

  <h3 style="color:#16a34a">🔍 MVC Overview</h3>
  <p>MVC separates an application into three main components:</p>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li><strong>Model:</strong> Represents the data and business logic.</li>
    <li><strong>View:</strong> Handles the presentation/UI.</li>
    <li><strong>Controller:</strong> Manages user input and interacts with Model and View.</li>
  </ul>
  <p>MVC is suited for complex applications requiring full control over views and UI.</p>

  <h3 style="color:#f59e0b">🛠️ Basic MVC Controller Example</h3>
  <pre style="background:#f3f4f6; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class ProductsController : Controller
{
    public IActionResult Index()
    {
        var products = ProductService.GetAll();
        return View(products);
    }
}
</code></pre>

  <h3 style="color:#16a34a">🔍 Minimal APIs Overview</h3>
  <p>Minimal APIs provide a lightweight, simplified way to build HTTP APIs with minimal boilerplate. Ideal for small services, microservices, or simple endpoints.</p>

  <h3 style="color:#f59e0b">🛠️ Basic Minimal API Example</h3>
  <pre style="background:#f3f4f6; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/products", () => ProductService.GetAll());

app.Run();
</code></pre>

  <h3 style="color:#8b5cf6">⚖️ When to Use Which?</h3>
  <ul style="list-style:square; padding-left:1.2rem">
    <li><strong>MVC:</strong> For apps with complex UI, multiple views, and full control over rendering.</li>
    <li><strong>Minimal APIs:</strong> For small, fast, simple APIs or microservices.</li>
  </ul>

  <h3 style="color:#ef4444">⚠️ Common Pitfalls</h3>
  <ul>
    <li>MVC can be overkill for very simple APIs</li>
    <li>Minimal APIs lack built-in features like model binding, validation (requires manual setup)</li>
    <li>Mixing approaches without clear boundaries can cause maintenance issues</li>
  </ul>

  <h3 style="color:#0ea5e9">📚 Best Practices</h3>
  <ul>
    <li>Choose the approach based on project size and complexity</li>
    <li>Use dependency injection consistently in both approaches</li>
    <li>For Minimal APIs, implement validation and error handling carefully</li>
    <li>Keep controllers and endpoints focused and concise</li>
    <li>Write unit and integration tests to ensure quality</li>
    <li>Document APIs clearly for team and consumer understanding</li>
  </ul>
</div>
` },
        { id: "options-config", title: "Options & Configurations", type: "must-know",description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefefe; padding:1.5rem; border-radius:1rem; border:1px solid #e5e7eb; box-shadow:0 4px 12px rgba(0,0,0,0.05)">
  <h2 style="color:#2563eb">⚙️ Options & Configurations in ASP.NET Core</h2>
  <p><strong>Options and configuration</strong> are essential for managing application settings in a flexible and maintainable way. ASP.NET Core provides built-in support for hierarchical configuration sources and strongly-typed options.</p>

  <h3 style="color:#16a34a">🔍 Configuration Sources</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>appsettings.json / appsettings.{Environment}.json</li>
    <li>Environment variables</li>
    <li>Command-line arguments</li>
    <li>User secrets (for development)</li>
    <li>Azure Key Vault or other external providers</li>
  </ul>

  <h3 style="color:#f59e0b">🛠️ Binding Configuration to Options Class</h3>
  <pre style="background:#f3f4f6; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>// appsettings.json
{
  "MySettings": {
    "ApiKey": "12345",
    "RetryCount": 3
  }
}

// Options class
public class MySettings
{
  public string ApiKey { get; set; }
  public int RetryCount { get; set; }
}

// Startup or Program.cs
builder.Services.Configure<MySettings>(builder.Configuration.GetSection("MySettings"));

// Usage via IOptions<MySettings>
public class MyService
{
  private readonly MySettings _settings;
  public MyService(IOptions<MySettings> options)
  {
    _settings = options.Value;
  }
}
</code></pre>

  <h3 style="color:#8b5cf6">💡 Benefits of Options Pattern</h3>
  <ul style="list-style:square; padding-left:1.2rem">
    <li>Strongly-typed access to configuration values</li>
    <li>Supports validation with Data Annotations or custom validators</li>
    <li>Decouples configuration from implementation</li>
    <li>Easy to test and maintain</li>
  </ul>

  <h3 style="color:#ef4444">⚠️ Common Mistakes</h3>
  <ul>
    <li>Injecting IConfiguration directly instead of IOptions for configuration classes</li>
    <li>Not using configuration reload on change when needed</li>
    <li>Hardcoding configuration values instead of using configuration system</li>
    <li>Ignoring environment-specific configuration</li>
  </ul>

  <h3 style="color:#0ea5e9">📚 Best Practices</h3>
  <ul>
    <li>Use strongly-typed options classes for configuration</li>
    <li>Leverage multiple configuration sources in a hierarchical way</li>
    <li>Validate configuration on startup</li>
    <li>Use environment-specific configuration files</li>
    <li>Keep secrets out of source control (use User Secrets or Azure Key Vault)</li>
    <li>Subscribe to configuration reload events if dynamic updates are needed</li>
    <li>Document configuration options clearly</li>
  </ul>
</div>
` },
        { id: "middlewares", title: "Middlewares", type: "must-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefefe; padding:1.5rem; border-radius:1rem; border:1px solid #e5e7eb; box-shadow:0 4px 12px rgba(0,0,0,0.05)">
  <h2 style="color:#2563eb">🔌 Middlewares in ASP.NET Core</h2>
  <p><strong>Middleware</strong> are software components that form a pipeline to handle HTTP requests and responses in ASP.NET Core applications. Each middleware can inspect, modify, or short-circuit the request/response process.</p>

  <h3 style="color:#16a34a">🔍 Built-in Middleware Examples</h3>
  <p>ASP.NET Core provides many built-in middleware components to handle common tasks:</p>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li><strong>Authentication:</strong> Validates user identity.</li>
    <li><strong>Authorization:</strong> Controls access to resources.</li>
    <li><strong>Static Files:</strong> Serves files like images, CSS, JS.</li>
    <li><strong>Routing:</strong> Matches requests to endpoints.</li>
    <li><strong>Error Handling:</strong> Handles exceptions gracefully.</li>
    <li><strong>CORS:</strong> Manages cross-origin resource sharing.</li>
  </ul>

  <h3 style="color:#f59e0b">🛠️ Creating Custom Middleware</h3>
  <p>You can create custom middleware to add functionality tailored to your needs.</p>
  <pre style="background:#f3f4f6; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;

    public RequestLoggingMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        Console.WriteLine($"Incoming request: {context.Request.Method} {context.Request.Path}");

        // Call the next middleware in the pipeline
        await _next(context);

        Console.WriteLine($"Outgoing response: {context.Response.StatusCode}");
    }
}

// Register in Program.cs or Startup.cs
app.UseMiddleware&lt;RequestLoggingMiddleware&gt;();
</code></pre>

  <h3 style="color:#8b5cf6">⚠️ Middleware Pipeline Considerations</h3>
  <ul style="list-style:square; padding-left:1.2rem">
    <li>Middleware order matters — it affects request processing.</li>
    <li>Each middleware should call <code>await _next(context)</code> to pass control.</li>
    <li>Avoid long-running or blocking operations inside middleware.</li>
    <li>Use middleware for cross-cutting concerns like logging, authentication, and error handling.</li>
  </ul>

  <h3 style="color:#0ea5e9">📚 Best Practices</h3>
  <ul>
    <li>Keep middleware focused and lightweight.</li>
    <li>Leverage built-in middleware when possible.</li>
    <li>Ensure correct ordering in the pipeline for expected behavior.</li>
    <li>Handle exceptions and errors gracefully inside middleware.</li>
    <li>Test middleware independently and as part of the pipeline.</li>
  </ul>
</div>

` },
        { id: "filter-attributes", title: "Filter & Attributes", type: "must-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#fffdfa; padding:1.5rem; border-radius:1rem; border:1px solid #e0e7ff; box-shadow:0 4px 15px rgba(96, 165, 250, 0.2)">
  <h2 style="color:#4f46e5">🎛️ Filters & Attributes in ASP.NET Core</h2>
  <p><strong>Filters</strong> let you run code at specific points in the MVC request pipeline. They are perfect for handling cross-cutting concerns like authorization, caching, error handling, and logging.</p>

  <h3 style="color:#10b981">🔍 Built-in Filter Types & Examples</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>
      <strong>Authorization Filters</strong><br>
      Runs before controller actions to check user permissions.<br>
      <code style="background:#f3f4f6; padding:0.2rem 0.4rem; border-radius:0.3rem">[Authorize]</code> attribute is the most common example.<br><br>
      <code style="background:#f3f4f6; padding:0.3rem 0.6rem; display:block; border-radius:0.3rem; overflow-x:auto">
[Authorize(Roles = "Admin")]
public IActionResult AdminOnly() { ... }
      </code>
    </li>
    <li>
      <strong>Resource Filters</strong><br>
      Run code before and after rest of the pipeline (good for caching).<br>
      Example: <code>[ResponseCache(Duration = 60)]</code><br><br>
      <code style="background:#f3f4f6; padding:0.3rem 0.6rem; display:block; border-radius:0.3rem; overflow-x:auto">
[ResponseCache(Duration = 60, Location = ResponseCacheLocation.Client)]
public IActionResult CachedAction() { ... }
      </code>
    </li>
    <li>
      <strong>Action Filters</strong><br>
      Run code before and after action methods.<br>
      Example: <code>[ServiceFilter(typeof(MyLoggingFilter))]</code><br><br>
      <code style="background:#f3f4f6; padding:0.3rem 0.6rem; display:block; border-radius:0.3rem; overflow-x:auto">
public class MyLoggingFilter : IActionFilter
{
    public void OnActionExecuting(ActionExecutingContext context) { ... }
    public void OnActionExecuted(ActionExecutedContext context) { ... }
}
      </code>
    </li>
    <li>
      <strong>Exception Filters</strong><br>
      Handle unhandled exceptions thrown by actions.<br>
      Example: <code>[TypeFilter(typeof(CustomExceptionFilter))]</code>
    </li>
    <li>
      <strong>Result Filters</strong><br>
      Run code before and after the action result executes.<br>
      Useful for modifying response data or headers.
    </li>
  </ul>

  <h3 style="color:#f59e0b">🛠️ Creating Custom Action Filter</h3>
  <pre style="background:#f3f4f6; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class MyCustomActionFilter : IActionFilter
{
    public void OnActionExecuting(ActionExecutingContext context)
    {
        // Runs before action executes
        Console.WriteLine("Action is starting.");
    }

    public void OnActionExecuted(ActionExecutedContext context)
    {
        // Runs after action executes
        Console.WriteLine("Action finished.");
    }
}

// Applying the filter
[ServiceFilter(typeof(MyCustomActionFilter))]
public IActionResult Index()
{
    return View();
}
</code></pre>

  <h3 style="color:#ef4444">⚠️ Common Pitfalls</h3>
  <ul>
    <li>Overusing global filters that impact performance.</li>
    <li>Embedding business logic inside filters.</li>
    <li>Improper ordering causing unexpected results.</li>
  </ul>

  <h3 style="color:#3b82f6">📚 Best Practices</h3>
  <ul>
    <li>Use filters for cross-cutting concerns only.</li>
    <li>Prefer built-in filters before creating custom ones.</li>
    <li>Keep custom filters simple and focused.</li>
    <li>Leverage dependency injection for filter services.</li>
    <li>Test filters independently and in integration.</li>
  </ul>
</div>
` },
        { id: "background-tasks", title: "Background Tasks", type: "good-to-know",description: `<div style="font-family:sans-serif; line-height:1.6; background:#f9fafb; padding:1.5rem; border-radius:1rem; border:1px solid #cbd5e1; box-shadow:0 4px 15px rgba(148, 163, 184, 0.3)">
  <h2 style="color:#2563eb">⚙️ Background Tasks in ASP.NET Core</h2>
  <p><strong>Background Tasks</strong> are operations that run asynchronously outside the main HTTP request pipeline, allowing you to perform long-running or periodic work without blocking user requests.</p>

  <h3 style="color:#16a34a">🔍 When to Use Background Tasks</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>Sending emails or notifications asynchronously</li>
    <li>Performing scheduled data cleanup or maintenance</li>
    <li>Processing files or heavy computations</li>
    <li>Calling external APIs without delaying user response</li>
  </ul>

  <h3 style="color:#f59e0b">🛠️ Implementing Background Tasks</h3>
  <p>ASP.NET Core provides <code>IHostedService</code> and <code>BackgroundService</code> base classes to create and run background tasks.</p>

  <h4 style="color:#4b5563">Example: Simple Background Service</h4>
  <pre style="background:#f3f4f6; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class TimedBackgroundService : BackgroundService
{
    private readonly ILogger&lt;TimedBackgroundService&gt; _logger;
    private readonly TimeSpan _interval = TimeSpan.FromMinutes(5);

    public TimedBackgroundService(ILogger&lt;TimedBackgroundService&gt; logger)
    {
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        _logger.LogInformation("Timed Background Service is starting.");

        while (!stoppingToken.IsCancellationRequested)
        {
            _logger.LogInformation("Background task running at: {time}", DateTimeOffset.Now);
            
            // TODO: Add background task logic here
            await Task.Delay(_interval, stoppingToken);
        }

        _logger.LogInformation("Timed Background Service is stopping.");
    }
}
</code></pre>

  <h4 style="color:#4b5563">Registering the Background Service</h4>
  <pre style="background:#f3f4f6; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>builder.Services.AddHostedService&lt;TimedBackgroundService&gt;();
</code></pre>

  <h3 style="color:#8b5cf6">🧩 Other Options for Background Work</h3>
  <ul style="list-style:square; padding-left:1.2rem">
    <li><strong>Queued Background Tasks:</strong> Use <code>IBackgroundTaskQueue</code> patterns to queue tasks safely.</li>
    <li><strong>Third-party libraries:</strong> Such as <code>Hangfire</code> or <code>Quartz.NET</code> for advanced scheduling and persistence.</li>
    <li><strong>Azure Functions or AWS Lambda:</strong> For serverless background processing.</li>
  </ul>

  <h3 style="color:#ef4444">⚠️ Common Pitfalls</h3>
  <ul>
    <li>Running long blocking operations that cause thread starvation</li>
    <li>Not handling cancellation tokens properly</li>
    <li>Assuming background tasks run immediately on app start (can be delayed)</li>
    <li>Not persisting tasks that should survive app restarts</li>
  </ul>

  <h3 style="color:#0ea5e9">📚 Best Practices</h3>
  <ul>
    <li>Keep background tasks lightweight and non-blocking</li>
    <li>Always respect <code>CancellationToken</code> to gracefully stop tasks</li>
    <li>Use queues to manage task load and concurrency</li>
    <li>Monitor and log background task status and errors</li>
    <li>Consider distributed task schedulers for complex workloads</li>
  </ul>
</div>
` },
        { id: "auth", title: "Authentication & Authorization (Identity, IdentityServer, OpenIddict, Auth0/OIDC, OWASP Top 10)", type: "must-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#fef9f9; padding:1.5rem; border-radius:1rem; border:1px solid #f87171; box-shadow:0 4px 15px rgba(248, 113, 113, 0.3)">
  <h2 style="color:#b91c1c">🔐 Authentication & Authorization in ASP.NET Core</h2>
  <p>Securing your app is critical. <strong>Authentication</strong> verifies user identity, while <strong>Authorization</strong> controls access based on permissions and roles.</p>

  <h3 style="color:#dc2626">🛠️ Core Components</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li><strong>ASP.NET Core Identity:</strong> Built-in user management and authentication system.</li>
    <li><strong>IdentityServer / OpenIddict:</strong> OpenID Connect (OIDC) and OAuth2 frameworks to build centralized auth servers.</li>
    <li><strong>Third-party providers:</strong> Auth0, Azure AD, Google, Facebook (via OIDC).</li>
    <li><strong>OWASP Top 10:</strong> Follow security best practices to mitigate common vulnerabilities.</li>
  </ul>

  <h3 style="color:#f87171">🔐 ASP.NET Core Identity Example</h3>
  <pre style="background:#fce7e7; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>// Register Identity services
builder.Services.AddIdentity&lt;ApplicationUser, IdentityRole&gt;()
    .AddEntityFrameworkStores&lt;ApplicationDbContext&gt;()
    .AddDefaultTokenProviders();

// Protect a controller or action
[Authorize]
public class DashboardController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
</code></pre>

  <h3 style="color:#dc2626">🌐 IdentityServer / OpenIddict</h3>
  <p>Use these to implement OAuth2 and OpenID Connect protocols for centralized authentication, especially for APIs and microservices.</p>
  <pre style="background:#fce7e7; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>// Configure IdentityServer
builder.Services.AddIdentityServer()
    .AddInMemoryClients(Config.Clients)
    .AddInMemoryApiScopes(Config.ApiScopes)
    .AddInMemoryIdentityResources(Config.IdentityResources)
    .AddDeveloperSigningCredential();
</code></pre>

  <h3 style="color:#f87171">🔄 Using External Authentication Providers (e.g., Auth0)</h3>
  <pre style="background:#fce7e7; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = "Auth0";
})
.AddCookie()
.AddOpenIdConnect("Auth0", options =>
{
    options.Authority = "https://YOUR_DOMAIN.auth0.com";
    options.ClientId = "YOUR_CLIENT_ID";
    options.ClientSecret = "YOUR_CLIENT_SECRET";
    options.ResponseType = "code";
    options.SaveTokens = true;
});
</code></pre>

  <h3 style="color:#dc2626">🛡️ OWASP Top 10 - Key Security Tips</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>Use HTTPS everywhere to protect data in transit.</li>
    <li>Implement proper input validation to avoid injection attacks.</li>
    <li>Protect against Cross-Site Request Forgery (CSRF) using anti-forgery tokens.</li>
    <li>Limit authentication attempts to prevent brute-force attacks.</li>
    <li>Store passwords securely with strong hashing (e.g., bcrypt).</li>
  </ul>

  <h3 style="color:#b91c1c">📚 Best Practices</h3>
  <ul>
    <li>Prefer OpenID Connect for modern authentication scenarios.</li>
    <li>Use Role-Based or Policy-Based Authorization depending on complexity.</li>
    <li>Keep secrets (keys, tokens) secure using Azure Key Vault or environment variables.</li>
    <li>Regularly update dependencies to patch security vulnerabilities.</li>
    <li>Log authentication and authorization events for audit trails.</li>
  </ul>
</div>
` },
        { id: "caching", title: "Caching (Output, Response, Hybrid)", type: "good-to-know",description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:1.5rem; border-radius:1rem; border:1px solid #93c5fd; box-shadow:0 4px 15px rgba(59, 130, 246, 0.2)">
  <h2 style="color:#2563eb">⚡ Caching in ASP.NET Core</h2>
  <p><strong>Caching</strong> improves performance by storing frequently accessed data temporarily, reducing the need for repeated processing or external calls.</p>

  <h3 style="color:#0ea5e9">🔍 Types of Caching</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li><strong>Output Caching:</strong> Caches the entire response of a controller/action to quickly serve future requests.</li>
    <li><strong>Response Caching:</strong> Controls HTTP response headers to enable client or proxy caching.</li>
    <li><strong>Hybrid Caching:</strong> Combines server-side caching with client or proxy caching for optimal performance.</li>
  </ul>

  <h3 style="color:#3b82f6">🛠️ Output Caching Example</h3>
  <p>Introduced in ASP.NET Core 7+, Output Caching stores the entire response.</p>
  <pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>// Enable output caching middleware in Program.cs
app.UseOutputCache();

// Apply output cache attribute on controller/action
[OutputCache(Duration = 60)]
public IActionResult Index()
{
    return View();
}
</code></pre>

  <h3 style="color:#3b82f6">🛠️ Response Caching Example</h3>
  <p>Response caching sets cache headers to instruct browsers/proxies to cache responses.</p>
  <pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>// Enable response caching middleware
app.UseResponseCaching();

// Controller action with caching headers
[ResponseCache(Duration = 120, Location = ResponseCacheLocation.Client)]
public IActionResult GetData()
{
    return Json(new { Time = DateTime.Now });
}
</code></pre>

  <h3 style="color:#3b82f6">🛠️ Hybrid Caching Approach</h3>
  <p>Combine server-side caching (e.g., IMemoryCache or IDistributedCache) with response caching headers.</p>
  <pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>private readonly IMemoryCache _cache;

public MyController(IMemoryCache cache)
{
    _cache = cache;
}

public IActionResult GetCachedData()
{
    if(!_cache.TryGetValue("cachedTime", out DateTime cachedTime))
    {
        cachedTime = DateTime.Now;
        _cache.Set("cachedTime", cachedTime, TimeSpan.FromMinutes(5));
    }
    return Json(new { CachedTime = cachedTime });
}
</code></pre>

  <h3 style="color:#ef4444">⚠️ Common Pitfalls</h3>
  <ul>
    <li>Caching sensitive or user-specific data publicly.</li>
    <li>Not invalidating cache on data changes, leading to stale data.</li>
    <li>Over-caching causing memory pressure on the server.</li>
  </ul>

  <h3 style="color:#2563eb">📚 Best Practices</h3>
  <ul>
    <li>Use appropriate caching duration balancing freshness and performance.</li>
    <li>Prefer distributed cache (Redis, Memcached) for scalable applications.</li>
    <li>Set cache headers correctly to avoid client-side caching issues.</li>
    <li>Monitor cache hit/miss rates to optimize caching strategy.</li>
    <li>Clear or refresh caches proactively when data updates.</li>
  </ul>
</div>
` },
        { id: "razor-pages", title: "Razor Pages", type: "good-to-know",description: `<div style="font-family:sans-serif; line-height:1.6; background:#fff7ed; padding:1.5rem; border-radius:1rem; border:1px solid #fdba74; box-shadow:0 4px 15px rgba(251, 191, 36, 0.3)">
  <h2 style="color:#c2410c">📄 Razor Pages in ASP.NET Core</h2>
  <p><strong>Razor Pages</strong> is a page-focused framework for building dynamic, server-rendered web apps with clean separation of concerns.</p>

  <h3 style="color:#ea580c">🛠️ Basic Razor Page Structure</h3>
  <p>A Razor Page consists of a <code>.cshtml</code> file and an optional <code>.cshtml.cs</code> code-behind file:</p>

  <pre style="background:#ffedd5; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>@page
@model IndexModel
@{
    ViewData["Title"] = "Home Page";
}

&lt;h1&gt;Welcome to Razor Pages!&lt;/h1&gt;
&lt;p&gt;Current time: @DateTime.Now&lt;/p&gt;
</code></pre>

  <pre style="background:#ffedd5; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class IndexModel : PageModel
{
    public void OnGet()
    {
        // Initialization logic here
    }
}
</code></pre>

  <h3 style="color:#ea580c">🔄 Handling Requests</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li><code>OnGet()</code> – Handles GET requests.</li>
    <li><code>OnPost()</code> – Handles POST requests.</li>
    <li>Supports other verbs: <code>OnPut()</code>, <code>OnDelete()</code>, etc.</li>
  </ul>

  <h3 style="color:#f97316">📋 Model Binding & Validation</h3>
  <p>Bind form data directly to properties and validate using data annotations:</p>

  <pre style="background:#ffedd5; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class ContactModel : PageModel
{
    [BindProperty]
    public ContactForm Form { get; set; }

    public void OnGet()
    {
    }

    public IActionResult OnPost()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }
        // Process form
        return RedirectToPage("Success");
    }
}

public class ContactForm
{
    [Required]
    public string Name { get; set; }
    
    [EmailAddress]
    public string Email { get; set; }
}
</code></pre>

  <h3 style="color:#f97316">⚙️ Routing</h3>
  <p>Razor Pages use convention-based routing based on file location:</p>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>Pages in <code>/Pages/Index.cshtml</code> map to <code>/</code></li>
    <li>Pages in subfolders map to paths accordingly, e.g. <code>/Pages/Blog/Post.cshtml</code> maps to <code>/Blog/Post</code></li>
  </ul>

  <h3 style="color:#ea580c">📚 Best Practices</h3>
  <ul>
    <li>Use Razor Pages for page-centric scenarios requiring simple UI logic.</li>
    <li>Keep PageModels lean by moving business logic to services.</li>
    <li>Use tag helpers and partial views to avoid repetition.</li>
    <li>Leverage built-in model validation and error handling.</li>
    <li>Secure pages with <code>[Authorize]</code> attribute when needed.</li>
  </ul>
</div>
` },
        { id: "razor-components", title: "Razor Components", type: "optional",description: `<div style="font-family:sans-serif; line-height:1.6; background:#ecfdf5; padding:1.5rem; border-radius:1rem; border:1px solid #6ee7b7; box-shadow:0 4px 15px rgba(34,197,94,0.3)">
  <h2 style="color:#059669">⚛️ Razor Components (Blazor Components)</h2>
  <p><strong>Razor Components</strong> are reusable UI building blocks in Blazor for creating interactive web apps with C# instead of JavaScript.</p>

  <h3 style="color:#10b981">🛠️ Basic Component Example</h3>
  <pre style="background:#d1fae5; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>@code {
    private int count = 0;

    void IncrementCount()
    {
        count++;
    }
}
&lt;h3&gt;Counter&lt;/h3&gt;
&lt;p&gt;Current count: @count&lt;/p&gt;
&lt;button @onclick="IncrementCount"&gt;Click me&lt;/button&gt;
</code></pre>

  <h3 style="color:#10b981">📦 Component Parameters</h3>
  <p>Pass data to components using <code>[Parameter]</code> attribute:</p>
  <pre style="background:#d1fae5; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>@code {
    [Parameter]
    public string Title { get; set; }
}
&lt;h2&gt;@Title&lt;/h2&gt;
</code></pre>

  <h3 style="color:#059669">🔄 Lifecycle Methods</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li><code>OnInitialized()</code> – Called when component initializes.</li>
    <li><code>OnParametersSet()</code> – Called when parameters are set or updated.</li>
    <li><code>OnAfterRender()</code> – Called after component rendering.</li>
  </ul>

  <h3 style="color:#10b981">🔗 Event Handling & Binding</h3>
  <pre style="background:#d1fae5; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>&lt;input type="text" @bind="name" /&gt;
&lt;p&gt;Hello, @name!&lt;/p&gt;

@code {
    private string name = "";
}
</code></pre>

  <h3 style="color:#059669">⚙️ Integration</h3>
  <p>Razor Components work both in server-side Blazor and client-side WebAssembly apps. They can be embedded in ASP.NET Core apps as well.</p>

  <h3 style="color:#065f46">📚 Best Practices</h3>
  <ul>
    <li>Keep components small and focused on a single responsibility.</li>
    <li>Use cascading parameters and dependency injection wisely.</li>
    <li>Handle async operations carefully to avoid UI blocking.</li>
    <li>Use <code>@key</code> directive to optimize list rendering.</li>
    <li>Separate UI markup and logic clearly for maintainability.</li>
  </ul>
</div>
` },
      ]
    },

    {
      id: "solid",
      title: "SOLID",
      direction: "right",
      children: [
        { id: "single-responsibility", title: "Single Responsibility Principle (SRP)", type: "must-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:1.5rem; border-radius:1rem; border:1px solid #93c5fd; box-shadow:0 4px 15px rgba(59, 130, 246, 0.2)">
  <h2 style="color:#2563eb">📏 Single Responsibility Principle (SRP)</h2>
  <p>The <strong>Single Responsibility Principle</strong> is one of the five SOLID principles introduced by <em>Robert C. Martin</em> (commonly known as <strong>Uncle Bob</strong>).</p>
  <blockquote style="background:#dbeafe; border-left:4px solid #3b82f6; margin:1rem 0; padding:0.5rem 1rem; font-style:italic; color:#1e40af;">
    "A class should have one, and only one, reason to change."
    <br><br>
    — Robert C. Martin
  </blockquote>

  <h3 style="color:#3b82f6">🔍 Why SRP Matters</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>Improves code maintainability and readability.</li>
    <li>Makes debugging and testing easier.</li>
    <li>Reduces unintended side effects when modifying code.</li>
    <li>Encourages separation of concerns, leading to cleaner architecture.</li>
  </ul>

  <h3 style="color:#2563eb">🛠️ SRP Violation Example</h3>
  <pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class UserService
{
    public void RegisterUser(User user)
    {
        // Validate user data
        // Save user to database
        // Send welcome email
        // Log registration event
    }
}
</code></pre>
  <p>In this example, <code>UserService</code> does many unrelated things, violating SRP.</p>

  <h3 style="color:#3b82f6">✅ Refactored Example Applying SRP</h3>
  <pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class UserValidator { /* validation logic */ }
public class UserRepository { /* database logic */ }
public class EmailSender { /* email logic */ }
public class Logger { /* logging logic */ }

public class UserService
{
    private readonly UserValidator _validator;
    private readonly UserRepository _repository;
    private readonly EmailSender _emailSender;
    private readonly Logger _logger;

    public UserService(UserValidator validator, UserRepository repository, EmailSender emailSender, Logger logger)
    {
        _validator = validator;
        _repository = repository;
        _emailSender = emailSender;
        _logger = logger;
    }

    public void RegisterUser(User user)
    {
        if(!_validator.Validate(user))
            throw new ArgumentException("Invalid user data");

        _repository.Save(user);
        _emailSender.SendWelcomeEmail(user);
        _logger.Log("User registered: " + user.Id);
    }
}
</code></pre>

  <h3 style="color:#2563eb">📚 Best Practices</h3>
  <ul>
    <li>Design classes with a single responsibility to ensure they have only one reason to change.</li>
    <li>Use dependency injection to separate concerns.</li>
    <li>Avoid “God classes” that manage multiple unrelated tasks.</li>
    <li>Write small, focused, and testable components.</li>
    <li>Refactor code regularly to adhere to SRP and improve maintainability.</li>
  </ul>
</div>
` },
        { id: "open-closed", title: "Open Closed Principle (OCP)", type: "must-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#fff7ed; padding:1.5rem; border-radius:1rem; border:1px solid #fdba74; box-shadow:0 4px 15px rgba(251, 146, 60, 0.3)">
  <h2 style="color:#ea580c">📐 Open/Closed Principle (OCP)</h2>
  <p>The <strong>Open/Closed Principle</strong> is another key SOLID principle formulated by <em>Robert C. Martin</em> (aka <strong>Uncle Bob</strong>):</p>
  <blockquote style="background:#fed7aa; border-left:4px solid #f97316; margin:1rem 0; padding:0.5rem 1rem; font-style:italic; color:#b45309;">
    "Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification."
    <br><br>
    — Robert C. Martin
  </blockquote>

  <h3 style="color:#f97316">🔍 Why OCP Matters</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>Allows adding new features without changing existing tested code.</li>
    <li>Reduces risk of bugs by minimizing code modification.</li>
    <li>Encourages flexible and maintainable design.</li>
    <li>Supports scalability in growing software systems.</li>
  </ul>

  <h3 style="color:#ea580c">🛠️ OCP Violation Example</h3>
  <pre style="background:#fed7aa; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class DiscountCalculator
{
    public double CalculateDiscount(Order order)
    {
        if (order.CustomerType == "Regular")
            return order.Total * 0.1;
        else if (order.CustomerType == "VIP")
            return order.Total * 0.2;

        // If new customer types added, this method needs modification
        return 0;
    }
}
</code></pre>
  <p>This code violates OCP because adding new customer types forces changes inside the <code>CalculateDiscount</code> method.</p>

  <h3 style="color:#f97316">✅ OCP Compliant Refactoring</h3>
  <pre style="background:#fed7aa; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public interface IDiscountStrategy
{
    double CalculateDiscount(Order order);
}

public class RegularDiscount : IDiscountStrategy
{
    public double CalculateDiscount(Order order) => order.Total * 0.1;
}

public class VipDiscount : IDiscountStrategy
{
    public double CalculateDiscount(Order order) => order.Total * 0.2;
}

public class DiscountCalculator
{
    private readonly IDiscountStrategy _strategy;

    public DiscountCalculator(IDiscountStrategy strategy)
    {
        _strategy = strategy;
    }

    public double CalculateDiscount(Order order) => _strategy.CalculateDiscount(order);
}
</code></pre>

  <h3 style="color:#ea580c">📚 Best Practices</h3>
  <ul>
    <li>Design systems so you can add new functionality by adding new code, not modifying existing code.</li>
    <li>Use interfaces and abstractions to enable extensibility.</li>
    <li>Apply design patterns like Strategy, Decorator, or Template Method to comply with OCP.</li>
    <li>Write unit tests to ensure that existing functionality is not broken when extending.</li>
  </ul>
</div>
` },
        { id: "liskov", title: "Liskov Substitution Principle (LSP)", type: "must-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fff4; padding:1.5rem; border-radius:1rem; border:1px solid #34d399; box-shadow:0 4px 15px rgba(52, 211, 153, 0.3)">
  <h2 style="color:#059669">🔄 Liskov Substitution Principle (LSP)</h2>
  <p>The <strong>Liskov Substitution Principle</strong> was introduced by Barbara Liskov and later incorporated into the SOLID principles by <em>Robert C. Martin</em> (Uncle Bob).</p>
  <blockquote style="background:#bbf7d0; border-left:4px solid #22c55e; margin:1rem 0; padding:0.5rem 1rem; font-style:italic; color:#065f46;">
    "Objects of a superclass shall be replaceable with objects of its subclasses without breaking the application."
    <br><br>
    — Barbara Liskov
  </blockquote>

  <h3 style="color:#22c55e">🔍 Why LSP Matters</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>Ensures subtype objects behave as expected when used in place of base types.</li>
    <li>Maintains program correctness and robustness.</li>
    <li>Enables polymorphism without surprises.</li>
    <li>Improves code reusability and extensibility.</li>
  </ul>

  <h3 style="color:#059669">🛠️ LSP Violation Example</h3>
  <pre style="background:#bbf7d0; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class Bird
{
    public virtual void Fly()
    {
        Console.WriteLine("Flying");
    }
}

public class Ostrich : Bird
{
    public override void Fly()
    {
        throw new NotSupportedException("Ostriches can't fly");
    }
}
</code></pre>
  <p>Here, substituting <code>Ostrich</code> for <code>Bird</code> breaks expected behavior, violating LSP.</p>

  <h3 style="color:#22c55e">✅ LSP Compliant Refactoring</h3>
  <pre style="background:#bbf7d0; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public abstract class Bird
{
    public abstract void Move();
}

public class FlyingBird : Bird
{
    public override void Move()
    {
        Fly();
    }
    public void Fly()
    {
        Console.WriteLine("Flying");
    }
}

public class Ostrich : Bird
{
    public override void Move()
    {
        Run();
    }
    public void Run()
    {
        Console.WriteLine("Running");
    }
}
</code></pre>

  <h3 style="color:#059669">📚 Best Practices</h3>
  <ul>
    <li>Design base classes and subclasses so derived classes fully conform to base class behavior.</li>
    <li>Avoid overriding methods to throw exceptions or change expected behaviors.</li>
    <li>Use abstract classes or interfaces to clearly define expected behaviors.</li>
    <li>Write tests to ensure subclass objects behave correctly when substituted for base types.</li>
  </ul>
</div>
` },
        { id: "interface-segregation", title: "Interface Segregation Principle (ISP)", type: "good-to-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#fff4f6; padding:1.5rem; border-radius:1rem; border:1px solid #fca5a5; box-shadow:0 4px 15px rgba(251, 113, 133, 0.3)">
  <h2 style="color:#ef4444">📐 Interface Segregation Principle (ISP)</h2>
  <p>The <strong>Interface Segregation Principle</strong> states that clients should not be forced to depend on interfaces they do not use. In other words, larger interfaces should be split into smaller, more specific ones so that clients only need to know about the methods that are relevant to them.</p>

  <h3 style="color:#f87171">🔍 Why ISP Matters</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>Prevents "fat" interfaces that force unnecessary dependencies.</li>
    <li>Makes code easier to maintain and understand.</li>
    <li>Supports better decoupling and modularity.</li>
    <li>Encourages designing focused, role-specific interfaces.</li>
  </ul>

  <h3 style="color:#ef4444">🛠️ ISP Violation Example</h3>
  <pre style="background:#fecaca; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public interface IPrinter
{
    void Print(Document doc);
    void Scan(Document doc);
    void Fax(Document doc);
}

public class OldPrinter : IPrinter
{
    public void Print(Document doc) { /* printing logic */ }
    public void Scan(Document doc) { throw new NotSupportedException(); }
    public void Fax(Document doc) { throw new NotSupportedException(); }
}
</code></pre>
  <p>In this example, <code>OldPrinter</code> must implement methods it does not support, violating ISP.</p>

  <h3 style="color:#f87171">✅ ISP Compliant Refactoring</h3>
  <pre style="background:#fecaca; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public interface IPrinter
{
    void Print(Document doc);
}

public interface IScanner
{
    void Scan(Document doc);
}

public interface IFax
{
    void Fax(Document doc);
}

public class BasicPrinter : IPrinter
{
    public void Print(Document doc) { /* printing logic */ }
}

public class MultiFunctionPrinter : IPrinter, IScanner, IFax
{
    public void Print(Document doc) { /* printing logic */ }
    public void Scan(Document doc) { /* scanning logic */ }
    public void Fax(Document doc) { /* fax logic */ }
}
</code></pre>

  <h3 style="color:#ef4444">📚 Best Practices</h3>
  <ul>
    <li>Split large interfaces into smaller, role-specific ones.</li>
    <li>Implement only the interfaces necessary for the class’s responsibility.</li>
    <li>Favor composition of interfaces over inheritance of large ones.</li>
    <li>Keep client dependencies minimal and focused.</li>
  </ul>
</div>
` },
        { id: "dependency-inversion", title: "Dependency Inversion Principle (DIP)", type: "good-to-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#e0f2fe; padding:1.5rem; border-radius:1rem; border:1px solid #38bdf8; box-shadow:0 4px 15px rgba(56, 189, 248, 0.3)">
  <h2 style="color:#0284c7">🔌 Dependency Inversion Principle (DIP)</h2>
  <p><strong>Dependency Inversion Principle</strong> states that:</p>
  <blockquote style="background:#bae6fd; border-left:4px solid #0ea5e9; margin:1rem 0; padding:0.5rem 1rem; font-style:italic; color:#0369a1;">
    1. High-level modules should not depend on low-level modules. Both should depend on abstractions.<br>
    2. Abstractions should not depend on details. Details should depend on abstractions.<br>
  </blockquote>

  <h3 style="color:#0ea5e9">🔍 Why DIP Matters</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>Decouples high-level and low-level components.</li>
    <li>Improves flexibility and maintainability.</li>
    <li>Makes unit testing easier by allowing mocks/stubs.</li>
    <li>Encourages dependency injection and use of interfaces/abstract classes.</li>
  </ul>

  <h3 style="color:#0284c7">🛠️ DIP Violation Example</h3>
  <pre style="background:#bae6fd; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class FileLogger
{
    public void Log(string message)
    {
        // Log message to file
    }
}

public class UserService
{
    private FileLogger _logger = new FileLogger();

    public void CreateUser(string name)
    {
        // Create user logic
        _logger.Log("User created: " + name);
    }
}
</code></pre>
  <p>In this example, <code>UserService</code> directly depends on the concrete <code>FileLogger</code> class, violating DIP.</p>

  <h3 style="color:#0ea5e9">✅ DIP Compliant Refactoring</h3>
  <pre style="background:#bae6fd; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public interface ILogger
{
    void Log(string message);
}

public class FileLogger : ILogger
{
    public void Log(string message)
    {
        // Log message to file
    }
}

public class UserService
{
    private readonly ILogger _logger;

    public UserService(ILogger logger)
    {
        _logger = logger;
    }

    public void CreateUser(string name)
    {
        // Create user logic
        _logger.Log("User created: " + name);
    }
}
</code></pre>

  <h3 style="color:#0284c7">📚 Best Practices</h3>
  <ul>
    <li>Depend on abstractions (interfaces or abstract classes), not concrete implementations.</li>
    <li>Use dependency injection (constructor, property, or method injection).</li>
    <li>Keep high-level modules unaware of low-level module details.</li>
    <li>Design for easy substitution of dependencies (e.g., for testing or future changes).</li>
  </ul>
</div>
` },
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
          "description": `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:1.5rem; border-radius:1rem; border:1px solid #60a5fa; box-shadow:0 4px 15px rgba(96, 165, 250, 0.3)">
  <h2 style="color:#2563eb">📦 Entity Framework Core (EF Core)</h2>
  <p><strong>EF Core</strong> is a modern, lightweight, extensible, and cross-platform Object-Relational Mapper (ORM) for .NET. It enables developers to work with a database using .NET objects, eliminating most of the data-access code.</p>

  <h3 style="color:#3b82f6">🔍 Key Features</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>Cross-platform support (Windows, Linux, macOS).</li>
    <li>Supports LINQ queries for querying data.</li>
    <li>Change tracking and automatic database updates.</li>
    <li>Supports migrations for database schema evolution.</li>
    <li>Multiple database providers (SQL Server, SQLite, PostgreSQL, MySQL, etc.).</li>
  </ul>

  <h3 style="color:#2563eb">🛠️ Basic Usage Example</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class Blog
{
    public int BlogId { get; set; }
    public string Url { get; set; }
}

public class BloggingContext : DbContext
{
    public DbSet&lt;Blog&gt; Blogs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        =&gt; options.UseSqlServer("Server=.;Database=Blogging;Trusted_Connection=True;");
}
</code></pre>

  <h3 style="color:#3b82f6">📊 Querying Data</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>using (var context = new BloggingContext())
{
    var blogs = context.Blogs
                       .Where(b =&gt; b.Url.Contains("dotnet"))
                       .ToList();
}
</code></pre>

  <h3 style="color:#2563eb">⚙️ Migrations</h3>
  <p>EF Core supports migrations to incrementally evolve the database schema:</p>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>dotnet ef migrations add InitialCreate
dotnet ef database update
</code></pre>

  <h3 style="color:#3b82f6">📚 Best Practices</h3>
  <ul>
    <li>Use asynchronous methods (e.g., <code>ToListAsync()</code>) to avoid blocking.</li>
    <li>Keep DbContext lifetime scoped to a request in web apps.</li>
    <li>Avoid tracking queries when read-only by using <code>AsNoTracking()</code>.</li>
    <li>Define explicit keys and relationships for clarity.</li>
    <li>Handle exceptions properly, especially <code>DbUpdateException</code>.</li>
    <li>Separate domain logic from data access concerns.</li>
  </ul>
</div>
`,
          "children": [
            { "id": "ef-basics", "title": "Learn the basics of Entity Framework Core", "type": "must-know",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:1.5rem; border-radius:1rem; border:1px solid #60a5fa; box-shadow:0 4px 15px rgba(96, 165, 250, 0.3)">
  <h2 style="color:#2563eb">📚 Learn the Basics of Entity Framework Core</h2>
  <p><strong>Entity Framework Core (EF Core)</strong> is a lightweight, extensible, and cross-platform ORM for .NET that allows you to work with databases using .NET objects, minimizing manual SQL queries.</p>

  <h3 style="color:#3b82f6">🚀 Getting Started</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>Install the EF Core NuGet packages (e.g., <code>Microsoft.EntityFrameworkCore.SqlServer</code>).</li>
    <li>Define your model classes representing database tables.</li>
    <li>Create a <code>DbContext</code> class to manage the connection and mapping.</li>
    <li>Use LINQ queries to interact with your data.</li>
  </ul>

  <h3 style="color:#2563eb">🛠️ Example: Simple Model & DbContext</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}

public class AppDbContext : DbContext
{
    public DbSet&lt;Product&gt; Products { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        =&gt; options.UseSqlServer("Server=.;Database=ShopDb;Trusted_Connection=True;");
}
</code></pre>

  <h3 style="color:#3b82f6">📊 Basic CRUD Operations</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>// Adding a product
using var context = new AppDbContext();
var product = new Product { Name = "Laptop", Price = 1200 };
context.Products.Add(product);
context.SaveChanges();

// Querying products
var products = context.Products.Where(p =&gt; p.Price &gt; 1000).ToList();
</code></pre>

  <h3 style="color:#2563eb">💡 Tips</h3>
  <ul>
    <li>Use <code>async</code> versions like <code>SaveChangesAsync()</code> and <code>ToListAsync()</code> for better scalability.</li>
    <li>Manage <code>DbContext</code> lifetime properly to avoid performance issues.</li>
    <li>Leverage EF Core migrations to evolve your database schema safely.</li>
  </ul>
</div>
` },
            { "id": "code-first", "title": "Code First + Migrations", "type": "must-know",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#fef9f0; padding:1.5rem; border-radius:1rem; border:1px solid #facc15; box-shadow:0 4px 15px rgba(250, 204, 21, 0.3)">
  <h2 style="color:#ca8a04">🛠️ Entity Framework Core - Code First & Migrations</h2>
  <p><strong>Code First</strong> allows you to define your database schema using C# classes and then generate the database from these models.</p>

  <h3 style="color:#d97706">🚀 How Code First Works</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>Write POCO classes to represent your domain models.</li>
    <li>Create a <code>DbContext</code> class to configure your database connection and model sets.</li>
    <li>Use EF Core migrations to create and update the database schema based on model changes.</li>
  </ul>

  <h3 style="color:#ca8a04">📚 Example: Define Model & DbContext</h3>
  <pre style="background:#fff7ed; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    public DateTime EnrollmentDate { get; set; }
}

public class SchoolContext : DbContext
{
    public DbSet&lt;Student&gt; Students { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        =&gt; options.UseSqlServer("Server=.;Database=SchoolDB;Trusted_Connection=True;");
}
</code></pre>

  <h3 style="color:#d97706">⚙️ Using Migrations</h3>
  <p>Migrations let you evolve the database schema without losing existing data.</p>
  <pre style="background:#fff7ed; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>// Add initial migration
dotnet ef migrations add InitialCreate

// Update database with migration
dotnet ef database update
</code></pre>

  <h3 style="color:#ca8a04">🔄 Updating Schema</h3>
  <p>When your model changes (e.g., adding a new property), create a new migration:</p>
  <pre style="background:#fff7ed; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>dotnet ef migrations add AddBirthDateToStudent
dotnet ef database update
</code></pre>

  <h3 style="color:#d97706">💡 Best Practices</h3>
  <ul>
    <li>Keep migrations small and focused on a single change.</li>
    <li>Review generated migration code before applying it.</li>
    <li>Use descriptive migration names for clarity.</li>
    <li>Keep your model classes clean and avoid database-specific logic.</li>
    <li>Backup your database before applying migrations in production.</li>
  </ul>
</div>
` },
            { "id": "change-tracker", "title": "Change Tracker API", "type": "good-to-know",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdfa; padding:1.5rem; border-radius:1rem; border:1px solid #22c55e; box-shadow:0 4px 15px rgba(34, 197, 94, 0.3)">
  <h2 style="color:#16a34a">🔄 Entity Framework Core - Change Tracker API</h2>
  <p><strong>Change Tracker</strong> is a powerful feature of EF Core that keeps track of all changes made to entities during the lifetime of a <code>DbContext</code>. It enables EF Core to detect what data has been added, modified, or deleted, and generates the appropriate SQL commands when you call <code>SaveChanges()</code>.</p>

  <h3 style="color:#22c55e">⚙️ How Change Tracker Works</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>When you query entities from the database, they are tracked by default.</li>
    <li>Any modifications to tracked entities are recorded in the Change Tracker.</li>
    <li>The Change Tracker maintains entity states such as <code>Added</code>, <code>Modified</code>, <code>Deleted</code>, <code>Unchanged</code>, and <code>Detached</code>.</li>
    <li>On calling <code>SaveChanges()</code>, EF Core translates these changes into appropriate SQL statements.</li>
  </ul>

  <h3 style="color:#16a34a">🛠️ Entity States</h3>
  <ul style="list-style:circle; padding-left:1.2rem; color:#065f46">
    <li><strong>Added:</strong> Entity is new and will be inserted into the database.</li>
    <li><strong>Modified:</strong> Entity has been changed and will be updated in the database.</li>
    <li><strong>Deleted:</strong> Entity will be removed from the database.</li>
    <li><strong>Unchanged:</strong> Entity is unchanged since it was loaded.</li>
    <li><strong>Detached:</strong> Entity is not being tracked by the context.</li>
  </ul>

  <h3 style="color:#22c55e">🔍 Example: Inspecting Change Tracker</h3>
  <pre style="background:#dcfce7; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>using var context = new AppDbContext();

// Query a product (tracked by default)
var product = context.Products.First();

// Modify a property
product.Price = 199.99m;

// Add a new product (state = Added)
var newProduct = new Product { Name = "Smartphone", Price = 599 };
context.Products.Add(newProduct);

// Check entity states
foreach (var entry in context.ChangeTracker.Entries())
{
    Console.WriteLine($"{entry.Entity.GetType().Name} - State: {entry.State}");
}
</code></pre>

  <h3 style="color:#16a34a">⚡ Change Tracker Methods & Properties</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li><code>ChangeTracker.Entries()</code>: Gets all tracked entity entries.</li>
    <li><code>Entry(entity).State</code>: Gets or sets the state of a specific entity.</li>
    <li><code>DetectChanges()</code>: Manually triggers change detection (usually automatic).</li>
    <li><code>AutoDetectChangesEnabled</code>: Enable or disable automatic change detection for performance tuning.</li>
  </ul>

  <h3 style="color:#22c55e">💡 Best Practices</h3>
  <ul>
    <li>Be mindful when disabling <code>AutoDetectChangesEnabled</code> to improve performance in bulk operations, but remember to call <code>DetectChanges()</code> manually before saving.</li>
    <li>Use <code>AsNoTracking()</code> for read-only queries to improve performance when tracking is unnecessary.</li>
    <li>Explicitly set entity states if you are attaching disconnected entities.</li>
    <li>Keep <code>DbContext</code> scope short-lived to avoid stale tracking data.</li>
  </ul>
</div>
` },
            { "id": "loading-strategies", "title": "Lazy Loading, Eager Loading, Explicit Loading", "type": "good-to-know",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#fff7f3; padding:1.5rem; border-radius:1rem; border:1px solid #fb923c; box-shadow:0 4px 15px rgba(251, 146, 60, 0.3)">
  <h2 style="color:#c2410c">📦 Entity Framework Core - Loading Related Data</h2>
  <p>EF Core provides three main strategies to load related data (navigation properties): <strong>Lazy Loading</strong>, <strong>Eager Loading</strong>, and <strong>Explicit Loading</strong>. Choosing the right approach is essential for performance and correctness.</p>

  <h3 style="color:#fb923c">🔹 Lazy Loading</h3>
  <p>Related data is loaded automatically on-demand when you access the navigation property for the first time.</p>
  <ul>
    <li>Requires virtual navigation properties and enabling proxy creation.</li>
    <li>Can cause <em>multiple queries</em> (N+1 query problem) if not used carefully.</li>
  </ul>
  <pre style="background:#ffedd5; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class Blog
{
    public int Id { get; set; }
    public string Name { get; set; }
    public virtual ICollection&lt;Post&gt; Posts { get; set; }
}

// Usage
var blog = context.Blogs.First();
var posts = blog.Posts; // Posts loaded here on-demand (lazy)</code></pre>

  <h3 style="color:#fb923c">🔹 Eager Loading</h3>
  <p>Related data is loaded as part of the initial query using <code>Include()</code> or <code>ThenInclude()</code>.</p>
  <ul>
    <li>Helps reduce number of queries by loading everything at once.</li>
    <li>Good for scenarios where related data is always needed.</li>
  </ul>
  <pre style="background:#ffedd5; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>var blogs = context.Blogs
    .Include(b =&gt; b.Posts)
    .ToList(); // Blog + Posts loaded in a single query</code></pre>

  <h3 style="color:#fb923c">🔹 Explicit Loading</h3>
  <p>Related data is loaded explicitly via code, but not automatically like lazy loading.</p>
  <ul>
    <li>Useful when you want to load related data conditionally.</li>
    <li>Requires explicit calls like <code>context.Entry(entity).Collection(...).Load()</code>.</li>
  </ul>
  <pre style="background:#ffedd5; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>var blog = context.Blogs.First();

// Load Posts explicitly when needed
context.Entry(blog).Collection(b =&gt; b.Posts).Load();

var posts = blog.Posts;</code></pre>

  <h3 style="color:#c2410c">💡 Best Practices</h3>
  <ul>
    <li>Prefer <strong>eager loading</strong> to avoid performance pitfalls of lazy loading in web applications.</li>
    <li>Use <strong>explicit loading</strong> when related data is needed conditionally.</li>
    <li>Disable lazy loading if not used to avoid accidental performance issues.</li>
    <li>Always monitor generated SQL queries to optimize data fetching.</li>
  </ul>
</div>
` },
            { "id": "inheritance-mapping", "title": "TPH, TPC, TPT", "type": "optional",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:1.5rem; border-radius:1rem; border:1px solid #3b82f6; box-shadow:0 4px 15px rgba(59, 130, 246, 0.3)">
  <h2 style="color:#1e40af">📚 EF Core Inheritance Mapping Strategies</h2>
  <p>When modeling inheritance in EF Core, you can choose how to map your class hierarchy to the database tables. The main strategies are:</p>

  <h3 style="color:#3b82f6">1. TPH - Table Per Hierarchy</h3>
  <p>All classes in the hierarchy are mapped to a single table with a <em>discriminator</em> column.</p>
  <ul>
    <li>Single table for all derived types.</li>
    <li>Discriminator column identifies the entity type.</li>
    <li>Simple and performant but table can become sparse with many NULL columns.</li>
  </ul>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public abstract class Animal
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public class Dog : Animal
{
    public string Breed { get; set; }
}

public class Cat : Animal
{
    public bool LikesCream { get; set; }
    public bool IsIndoor { get; set; }
}

// DbContext config (by default EF Core uses TPH)
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Animal>()
        .HasDiscriminator<string>("AnimalType")
        .HasValue<Dog>("Dog")
        .HasValue<Cat>("Cat");
}
</code></pre>

  <h3 style="color:#3b82f6">2. TPT - Table Per Type</h3>
  <p>Each class has its own table. Derived tables contain columns for their properties and link to the base table via primary key.</p>
  <ul>
    <li>Normalized design.</li>
    <li>Supports polymorphic queries.</li>
    <li>Can have performance overhead due to joins.</li>
  </ul>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>// Enable TPT in EF Core 5+
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Dog>().ToTable("Dogs");
    modelBuilder.Entity<Cat>().ToTable("Cats");
}
</code></pre>

  <h3 style="color:#3b82f6">3. TPC - Table Per Concrete Class</h3>
  <p>Each concrete class has its own table with all properties, including inherited ones.</p>
  <ul>
    <li>No table for base class.</li>
    <li>Data duplicated if multiple derived types share common properties.</li>
    <li>EF Core supports TPC since version 7.</li>
  </ul>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>// Enable TPC in EF Core 7+
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Dog>().ToTable("Dogs").UseTpcMappingStrategy();
    modelBuilder.Entity<Cat>().ToTable("Cats").UseTpcMappingStrategy();
}
</code></pre>

  <h3 style="color:#1e40af">💡 Best Practices</h3>
  <ul>
    <li>Use <strong>TPH</strong> for simplicity and performance in most cases.</li>
    <li>Choose <strong>TPT</strong> when normalized schema is important and joins are acceptable.</li>
    <li>Use <strong>TPC</strong> for legacy compatibility or when tables must be separate with no base table.</li>
    <li>Test query performance for your specific use case.</li>
  </ul>
</div>
` },
            { "id": "bulk-operations", "title": "Bulk Insert/Update APIs", "type": "optional",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#fef6ff; padding:1.5rem; border-radius:1rem; border:1px solid #a78bfa; box-shadow:0 4px 15px rgba(167, 139, 250, 0.3)">
  <h2 style="color:#7c3aed">🚀 Bulk Insert/Update in Entity Framework Core</h2>
  <p>
    EF Core does not provide built-in bulk insert/update APIs out of the box. For high-performance operations involving large data sets, you typically rely on third-party libraries like <strong>EFCore.BulkExtensions</strong>, <strong>Z.EntityFramework.Extensions</strong>, or use raw SQL.
  </p>

  <h3 style="color:#a78bfa">Why Bulk Operations?</h3>
  <ul>
    <li>Reduce database roundtrips by inserting or updating thousands of rows in a single operation.</li>
    <li>Significantly improve performance compared to individual <code>Add</code> or <code>Update</code> calls.</li>
    <li>Minimize memory footprint and transaction duration.</li>
  </ul>

  <h3 style="color:#7c3aed">📦 Example using EFCore.BulkExtensions</h3>
  <pre style="background:#ede9fe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>using EFCore.BulkExtensions;

var products = new List<Product>();
for (int i = 0; i &lt; 10000; i++)
{
    products.Add(new Product { Name = $"Product {i}", Price = i * 10 });
}

using var context = new AppDbContext();

// Bulk Insert
context.BulkInsert(products);

// Bulk Update (after modifying entities)
foreach (var p in products)
{
    p.Price += 5;
}
context.BulkUpdate(products);
</code></pre>

  <h3 style="color:#a78bfa">🔧 Key Features of Bulk Extensions</h3>
  <ul>
    <li>BulkInsert, BulkUpdate, BulkDelete, BulkMerge operations.</li>
    <li>Supports SQL Server, PostgreSQL, MySQL, SQLite, and more.</li>
    <li>Transactional support for batch operations.</li>
    <li>Configurable batch size and timeout.</li>
  </ul>

  <h3 style="color:#7c3aed">⚠️ Important Considerations</h3>
  <ul>
    <li>Bulk operations bypass EF Core change tracking, so context may become stale.</li>
    <li>Be careful with navigation properties; bulk APIs usually work with flat data.</li>
    <li>Use bulk operations mainly for large-scale inserts/updates to improve performance.</li>
  </ul>

  <h3 style="color:#a78bfa">💡 Best Practices</h3>
  <ul>
    <li>Use bulk APIs for importing or syncing large datasets.</li>
    <li>Combine with <code>AsNoTracking()</code> for read operations before bulk updates.</li>
    <li>Always test performance and behavior in your specific environment.</li>
    <li>Keep <code>DbContext</code> scope short to avoid stale data issues.</li>
  </ul>
</div>
` },
            { "id": "interceptors", "title": "Interceptors", "type": "optional",description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:1.5rem; border-radius:1rem; border:1px solid #3b82f6; box-shadow:0 4px 15px rgba(59, 130, 246, 0.3)">
  <h2 style="color:#1e40af">🛡️ EF Core Interceptors</h2>
  <p>
    Interceptors in EF Core allow you to intercept and customize low-level database operations such as command execution, connection opening, and saving changes.
    They are powerful for logging, auditing, modifying commands, or enforcing policies.
  </p>

  <h3 style="color:#3b82f6">What are Interceptors?</h3>
  <ul>
    <li>Classes implementing EF Core interceptor interfaces like <code>IDbCommandInterceptor</code>, <code>ISaveChangesInterceptor</code>, etc.</li>
    <li>Automatically invoked during EF Core operations.</li>
    <li>Allow inspecting and modifying behavior or data.</li>
  </ul>

  <h3 style="color:#3b82f6">Common Interceptor Types</h3>
  <ul>
    <li><strong>IDbCommandInterceptor</strong>: Intercepts database commands before/after execution.</li>
    <li><strong>ISaveChangesInterceptor</strong>: Hooks into <code>SaveChanges</code> lifecycle.</li>
    <li><strong>IDbConnectionInterceptor</strong>: Monitors connection events.</li>
  </ul>

  <h3 style="color:#3b82f6">Example: Logging SQL Commands</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class CommandInterceptor : DbCommandInterceptor
{
    public override InterceptionResult&lt;DbDataReader&gt; ReaderExecuting(
        DbCommand command,
        CommandEventData eventData,
        InterceptionResult&lt;DbDataReader&gt; result)
    {
        Console.WriteLine($"Executing SQL: {command.CommandText}");
        return base.ReaderExecuting(command, eventData, result);
    }
}

// Register in DbContext options:
optionsBuilder.AddInterceptors(new CommandInterceptor());
</code></pre>

  <h3 style="color:#1e40af">💡 Best Practices</h3>
  <ul>
    <li>Use interceptors for cross-cutting concerns like logging, auditing, caching.</li>
    <li>Keep interceptor logic efficient to avoid performance hits.</li>
    <li>Test thoroughly to ensure interceptors do not alter queries unintentionally.</li>
  </ul>
</div>
` }
          ]
        },
        {
          "id": "dapper",
          "title": "Dapper",
          "description": `<div style="font-family:sans-serif; line-height:1.6; background:#fff7ed; padding:1.5rem; border-radius:1rem; border:1px solid #fbbf24; box-shadow:0 4px 15px rgba(251, 191, 36, 0.3)">
  <h2 style="color:#b45309">🐿️ Dapper - Lightweight ORM for .NET</h2>
  <p>
    <strong>Dapper</strong> is a simple, high-performance micro-ORM developed by the team at Stack Overflow. It extends <code>IDbConnection</code> interface and provides fast and easy data access without the overhead of a full ORM.
  </p>

  <h3 style="color:#fbbf24">Why Use Dapper?</h3>
  <ul>
    <li>Minimal abstraction: close to raw ADO.NET but simpler.</li>
    <li>Excellent performance, often faster than EF Core for simple queries.</li>
    <li>Easy to use with existing SQL queries.</li>
    <li>Supports parameterized queries to prevent SQL injection.</li>
  </ul>

  <h3 style="color:#b45309">📦 Basic Usage Example</h3>
  <pre style="background:#fef3c7; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>using (var connection = new SqlConnection(connectionString))
{
    var sql = "SELECT Id, Name, Price FROM Products WHERE Price &gt; @MinPrice";
    var products = connection.Query&lt;Product&gt;(sql, new { MinPrice = 100 }).ToList();
}</code></pre>

  <h3 style="color:#fbbf24">Key Features</h3>
  <ul>
    <li><strong>Query:</strong> Executes SQL and maps results to objects.</li>
    <li><strong>Execute:</strong> For insert, update, delete commands.</li>
    <li><strong>Multi-mapping:</strong> Map multiple joined tables to complex object graphs.</li>
    <li><strong>Transaction support</strong> via <code>IDbTransaction</code>.</li>
  </ul>

  <h3 style="color:#b45309">⚠️ Important Tips</h3>
  <ul>
    <li>Dapper does not track changes or generate SQL.</li>
    <li>You write SQL manually, so SQL knowledge is essential.</li>
    <li>Ideal for performance-critical parts or when you want full control over queries.</li>
  </ul>

  <h3 style="color:#fbbf24">💡 Best Practices</h3>
  <ul>
    <li>Always use parameterized queries to avoid SQL injection.</li>
    <li>Combine with lightweight dependency injection for managing connections.</li>
    <li>Use multi-mapping for complex joins to reduce multiple DB calls.</li>
    <li>Keep business logic separate from SQL code.</li>
  </ul>
</div>
`,

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
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#fef9f0; padding:1.5rem; border-radius:1rem; border:1px solid #f59e0b; box-shadow:0 4px 15px rgba(245, 158, 11, 0.3)">
  <h2 style="color:#b45309">🗄️ Relational Databases (RDBMS)</h2>
  <p>
    Relational Databases organize data into tables (relations) with rows and columns. They use <strong>Structured Query Language (SQL)</strong> to manage and query data efficiently.
  </p>

  <h3 style="color:#f59e0b">Core Concepts</h3>
  <ul>
    <li><strong>Tables:</strong> Store data in rows and columns.</li>
    <li><strong>Primary Key:</strong> Unique identifier for table rows.</li>
    <li><strong>Foreign Key:</strong> Enforces referential integrity between tables.</li>
    <li><strong>Normalization:</strong> Organizes data to reduce redundancy.</li>
    <li><strong>ACID Properties:</strong> Ensure reliable transactions (Atomicity, Consistency, Isolation, Durability).</li>
  </ul>

  <h3 style="color:#b45309">Popular Relational Databases</h3>
  <ul>
    <li>Microsoft SQL Server</li>
    <li>PostgreSQL</li>
    <li>MySQL / MariaDB</li>
    <li>Oracle Database</li>
    <li>SQLite (lightweight, embedded)</li>
  </ul>

  <h3 style="color:#f59e0b">Basic SQL Example</h3>
  <pre style="background:#fef3c7; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>-- Create table
CREATE TABLE Employees (
  EmployeeId INT PRIMARY KEY,
  FirstName NVARCHAR(50),
  LastName NVARCHAR(50),
  DepartmentId INT,
  Salary DECIMAL(10, 2)
);

-- Insert data
INSERT INTO Employees (EmployeeId, FirstName, LastName, DepartmentId, Salary)
VALUES (1, 'Alice', 'Smith', 101, 60000.00);

-- Query data
SELECT FirstName, LastName, Salary
FROM Employees
WHERE DepartmentId = 101;
</code></pre>

  <h3 style="color:#b45309">💡 Best Practices</h3>
  <ul>
    <li>Design normalized schemas to avoid data duplication.</li>
    <li>Use indexes on frequently searched columns for faster queries.</li>
    <li>Use transactions to maintain data integrity.</li>
    <li>Backup data regularly and monitor performance.</li>
    <li>Write efficient and secure SQL queries to prevent injection attacks.</li>
  </ul>
</div>
` ,
          children: [
            { id: "sql-server", title: "SQL Server", type: "must-know" ,
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:1.5rem; border-radius:1rem; border:1px solid #3b82f6; box-shadow:0 4px 15px rgba(59, 130, 246, 0.3)">
  <h2 style="color:#1e40af">🛢️ Microsoft SQL Server</h2>
  <p>
    Microsoft SQL Server is a powerful, enterprise-grade relational database management system (RDBMS) widely used for mission-critical applications.
    It supports advanced features like transactions, stored procedures, triggers, and high availability.
  </p>

  <h3 style="color:#3b82f6">Key Features</h3>
  <ul>
    <li>Support for T-SQL (Transact-SQL) – an extension of SQL with procedural programming capabilities.</li>
    <li>Built-in security with roles, encryption, and auditing.</li>
    <li>Advanced performance tuning with indexing, partitioning, and in-memory OLTP.</li>
    <li>Integration with Azure cloud services.</li>
    <li>High availability with Always On Availability Groups.</li>
  </ul>

  <h3 style="color:#1e40af">Basic Example: Creating a Table and Querying Data</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>-- Create a table
CREATE TABLE Customers (
    CustomerId INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) UNIQUE,
    CreatedDate DATETIME DEFAULT GETDATE()
);

-- Insert data
INSERT INTO Customers (Name, Email)
VALUES ('John Doe', 'john.doe@example.com');

-- Query data
SELECT CustomerId, Name, Email, CreatedDate
FROM Customers
WHERE Name LIKE 'John%';</code></pre>

  <h3 style="color:#3b82f6">⚠️ Important Tips</h3>
  <ul>
    <li>Always use parameterized queries or stored procedures to prevent SQL injection.</li>
    <li>Regularly maintain indexes and update statistics for optimal performance.</li>
    <li>Use transactions to ensure data integrity during multi-step operations.</li>
    <li>Backup databases frequently and test restores.</li>
  </ul>

  <h3 style="color:#1e40af">💡 Best Practices</h3>
  <ul>
    <li>Design normalized schemas but denormalize when read performance is critical.</li>
    <li>Implement proper error handling in T-SQL stored procedures.</li>
    <li>Monitor query performance with SQL Server Profiler and Extended Events.</li>
    <li>Secure your database with least privilege principle and encryption.</li>
  </ul>
</div>
` },
            { id: "postgresql", title: "PostgreSQL", type: "good-to-know",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#f7f9fc; padding:1.5rem; border-radius:1rem; border:1px solid #3b82f6; box-shadow:0 4px 15px rgba(59, 130, 246, 0.2)">
  <h2 style="color:#2563eb">🍃 PostgreSQL - Advanced Open Source RDBMS</h2>
  <p>
    PostgreSQL is a powerful, open-source relational database known for its extensibility, standards compliance, and support for advanced data types and performance features.
  </p>

  <h3 style="color:#3b82f6">Key Features</h3>
  <ul>
    <li>Full ACID compliance and MVCC (Multi-Version Concurrency Control).</li>
    <li>Support for JSON and JSONB data types for semi-structured data.</li>
    <li>Extensible via custom data types, operators, and functions.</li>
    <li>Advanced indexing techniques (GIN, GiST, BRIN).</li>
    <li>Robust replication and high availability options.</li>
  </ul>

  <h3 style="color:#2563eb">Basic Usage Example</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>-- Create a table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert data
INSERT INTO users (username, email)
VALUES ('johndoe', 'john@example.com');

-- Query data
SELECT user_id, username, email, created_at
FROM users
WHERE username LIKE 'john%';</code></pre>

  <h3 style="color:#3b82f6">⚠️ Important Tips</h3>
  <ul>
    <li>Use prepared statements or parameterized queries to prevent SQL injection.</li>
    <li>Take advantage of JSONB for flexible schema needs.</li>
    <li>Analyze and vacuum regularly to maintain performance.</li>
    <li>Use EXPLAIN ANALYZE to optimize queries.</li>
  </ul>

  <h3 style="color:#2563eb">💡 Best Practices</h3>
  <ul>
    <li>Design normalized schemas but optimize for query patterns.</li>
    <li>Implement proper indexing, especially with GIN for JSONB fields.</li>
    <li>Leverage PostgreSQL extensions like PostGIS for geospatial data.</li>
    <li>Backup and test restores frequently using tools like pg_dump and pg_restore.</li>
  </ul>
</div>
`  },
            { id: "mariadb", title: "MariaDB", type: "optional",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#fff8f0; padding:1.5rem; border-radius:1rem; border:1px solid #f97316; box-shadow:0 4px 15px rgba(249, 115, 22, 0.3)">
  <h2 style="color:#c2410c">🔥 MariaDB - Open Source Relational Database</h2>
  <p>
    MariaDB is a popular open-source relational database, forked from MySQL, known for its performance, scalability, and rich feature set.
    It is fully compatible with MySQL and widely used for web applications and enterprise solutions.
  </p>

  <h3 style="color:#f97316">Key Features</h3>
  <ul>
    <li>Compatibility with MySQL clients and tools.</li>
    <li>Storage engines like InnoDB, Aria, and ColumnStore for analytics.</li>
    <li>Advanced features: JSON support, GIS extensions, and dynamic columns.</li>
    <li>Strong community support and active development.</li>
    <li>Replication, clustering, and Galera for high availability.</li>
  </ul>

  <h3 style="color:#c2410c">Basic Usage Example</h3>
  <pre style="background:#ffedd5; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>-- Create a table
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    department VARCHAR(100),
    salary DECIMAL(10,2)
);

-- Insert data
INSERT INTO employees (first_name, last_name, department, salary)
VALUES ('Jane', 'Doe', 'HR', 55000.00);

-- Query data
SELECT first_name, last_name, salary
FROM employees
WHERE department = 'HR';</code></pre>

  <h3 style="color:#f97316">⚠️ Important Tips</h3>
  <ul>
    <li>Use prepared statements or parameterized queries to prevent SQL injection.</li>
    <li>Choose the right storage engine based on your workload.</li>
    <li>Optimize indexes for faster query performance.</li>
    <li>Regularly backup your databases and monitor replication status.</li>
  </ul>

  <h3 style="color:#c2410c">💡 Best Practices</h3>
  <ul>
    <li>Normalize data but denormalize where performance gains are needed.</li>
    <li>Keep your MariaDB server updated for latest security patches.</li>
    <li>Monitor slow queries and optimize them using EXPLAIN.</li>
    <li>Leverage Galera Cluster for fault-tolerant setups.</li>
  </ul>
</div>
`  },
            { id: "mysql", title: "MySQL", type: "optional",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:1.5rem; border-radius:1rem; border:1px solid #2563eb; box-shadow:0 4px 15px rgba(37, 99, 235, 0.3)">
  <h2 style="color:#1e40af">🐬 MySQL - Popular Open Source RDBMS</h2>
  <p>
    MySQL is one of the most widely used open-source relational database management systems, favored for its reliability, ease of use, and strong community support.
  </p>

  <h3 style="color:#2563eb">Key Features</h3>
  <ul>
    <li>Support for SQL and ACID-compliant transactions.</li>
    <li>Multiple storage engines including InnoDB (default), MyISAM.</li>
    <li>Replication, clustering, and sharding support for scalability.</li>
    <li>Wide compatibility with programming languages and frameworks.</li>
    <li>Strong ecosystem with tools like MySQL Workbench.</li>
  </ul>

  <h3 style="color:#1e40af">Basic Usage Example</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>-- Create a table
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2),
    stock INT DEFAULT 0
);

-- Insert data
INSERT INTO products (name, price, stock)
VALUES ('Laptop', 1200.00, 10);

-- Query data
SELECT product_id, name, price, stock
FROM products
WHERE stock > 0;</code></pre>

  <h3 style="color:#2563eb">⚠️ Important Tips</h3>
  <ul>
    <li>Use prepared statements or parameterized queries to avoid SQL injection.</li>
    <li>Index columns that are frequently used in WHERE clauses for performance.</li>
    <li>Regularly monitor slow queries and optimize them.</li>
    <li>Back up your databases regularly and test restore procedures.</li>
  </ul>

  <h3 style="color:#1e40af">💡 Best Practices</h3>
  <ul>
    <li>Design normalized schemas for data integrity.</li>
    <li>Use transactions for multi-step operations to maintain consistency.</li>
    <li>Optimize queries and schema based on usage patterns.</li>
    <li>Keep your MySQL server updated with security patches.</li>
  </ul>
</div>
`  },
          ]
        },
        {
          id: "search-engines",
          title: "Search Engines",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#e8f0fe; padding:1.5rem; border-radius:1rem; border:1px solid #4285f4; box-shadow:0 4px 15px rgba(66, 133, 244, 0.3)">
  <h2 style="color:#1967d2">🔍 Search Engines - How They Work & Best Practices</h2>
  <p>
    Search engines are software systems designed to search, index, and retrieve information from the web or databases based on user queries. They use complex algorithms to deliver relevant results quickly.
  </p>

  <h3 style="color:#4285f4">Key Concepts</h3>
  <ul>
    <li><strong>Crawling:</strong> Discovering new and updated web pages using bots (spiders).</li>
    <li><strong>Indexing:</strong> Organizing and storing web page data in a searchable database.</li>
    <li><strong>Ranking:</strong> Ordering results by relevance using algorithms like PageRank, TF-IDF, and machine learning.</li>
    <li><strong>Query Processing:</strong> Understanding user intent and matching with indexed data.</li>
  </ul>

  <h3 style="color:#1967d2">Search Engine Optimization (SEO) Basics</h3>
  <ul>
    <li>Use relevant keywords naturally within titles, headings, and content.</li>
    <li>Ensure fast page load times and mobile-friendly design.</li>
    <li>Use descriptive meta tags and alt attributes for images.</li>
    <li>Build quality backlinks and maintain site authority.</li>
  </ul>

  <h3 style="color:#4285f4">Example: Simple Search Algorithm (Conceptual)</h3>
  <pre style="background:#d2e3fc; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>// Pseudo-code for basic keyword matching
function search(query, documents) {
  const results = [];
  for (const doc of documents) {
    if (doc.text.includes(query)) {
      results.push(doc);
    }
  }
  return results;
}</code></pre>

  <h3 style="color:#1967d2">💡 Best Practices</h3>
  <ul>
    <li>Keep content relevant and updated frequently.</li>
    <li>Use structured data (schema.org) to enhance search results.</li>
    <li>Monitor analytics to understand user behavior and improve.</li>
    <li>Optimize for voice and semantic search as they gain popularity.</li>
  </ul>
</div>
` ,
          children: [
            { id: "elasticsearch", title: "Elasticsearch", type: "must-know",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#f5f7fa; padding:1.5rem; border-radius:1rem; border:1px solid #0077b6; box-shadow:0 4px 15px rgba(0, 119, 182, 0.3)">
  <h2 style="color:#023e8a">⚡ Elasticsearch - Distributed Search & Analytics Engine</h2>
  <p>
    Elasticsearch is a powerful, distributed, RESTful search and analytics engine built on top of Apache Lucene. It's designed for fast full-text search, structured search, and analytics at scale.
  </p>

  <h3 style="color:#0077b6">Key Features</h3>
  <ul>
    <li>Near real-time search and indexing.</li>
    <li>Full-text search with powerful query DSL.</li>
    <li>Scalable distributed architecture with clustering and sharding.</li>
    <li>Support for structured and unstructured data.</li>
    <li>Integration with Kibana for visualization.</li>
  </ul>

  <h3 style="color:#023e8a">Basic Usage Example</h3>
  <pre style="background:#d0e7ff; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>POST /products/_doc/1
{
  "name": "Smartphone",
  "description": "Latest model with advanced features",
  "price": 699,
  "available": true
}

GET /products/_search
{
  "query": {
    "match": {
      "description": "advanced features"
    }
  }
}</code></pre>

  <h3 style="color:#0077b6">⚠️ Important Tips</h3>
  <ul>
    <li>Design your index mappings carefully for optimized search.</li>
    <li>Use analyzers to customize text processing.</li>
    <li>Monitor cluster health and shard allocation regularly.</li>
    <li>Secure Elasticsearch with authentication and firewall rules.</li>
  </ul>

  <h3 style="color:#023e8a">💡 Best Practices</h3>
  <ul>
    <li>Use bulk API for batch indexing to improve performance.</li>
    <li>Keep mappings immutable; use aliases for versioning indices.</li>
    <li>Regularly back up snapshots and test restore processes.</li>
    <li>Leverage Kibana dashboards for insightful data visualization.</li>
  </ul>
</div>
`  },
            { id: "meilisearch", title: "Meilisearch", type: "must-know",description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdfa; padding:1.5rem; border-radius:1rem; border:1px solid #10b981; box-shadow:0 4px 15px rgba(16, 185, 129, 0.3)">
  <h2 style="color:#047857">⚡ Meilisearch - Fast & Relevant Open-Source Search Engine</h2>
  <p>
    Meilisearch is a blazing-fast, easy-to-use, open-source search engine optimized for instant, typo-tolerant, and highly relevant full-text search experiences.
  </p>

  <h3 style="color:#10b981">Key Features</h3>
  <ul>
    <li>Instant search with millisecond response times.</li>
    <li>Typo tolerance and typo correction out of the box.</li>
    <li>Simple RESTful API and easy integration.</li>
    <li>Faceting, filtering, and custom ranking rules.</li>
    <li>Lightweight and easy to deploy.</li>
  </ul>

  <h3 style="color:#047857">Basic Usage Example</h3>
  <pre style="background:#d1fae5; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>// Add documents to an index
POST /indexes/products/documents
[
  { "id": 1, "name": "Laptop", "description": "High-performance laptop" },
  { "id": 2, "name": "Smartphone", "description": "Latest model smartphone" }
]

// Search query with typo tolerance
GET /indexes/products/search?q=lptop</code></pre>

  <h3 style="color:#10b981">⚠️ Important Tips</h3>
  <ul>
    <li>Define clear searchable attributes to improve relevance.</li>
    <li>Use custom ranking rules for tailored search results.</li>
    <li>Regularly update your indexes for fresh data.</li>
    <li>Leverage filters and facets to refine search experiences.</li>
  </ul>

  <h3 style="color:#047857">💡 Best Practices</h3>
  <ul>
    <li>Keep your document schema consistent across updates.</li>
    <li>Use pagination to optimize large result sets.</li>
    <li>Monitor performance metrics to ensure low latency.</li>
    <li>Secure your API keys and endpoints to prevent unauthorized access.</li>
  </ul>
</div>
`  },
            { id: "manticoresearch", title: "ManticoreSearch", type: "optional",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#fff7ed; padding:1.5rem; border-radius:1rem; border:1px solid #f97316; box-shadow:0 4px 15px rgba(249, 115, 22, 0.3)">
  <h2 style="color:#c2410c">🔥 Manticore Search - High-Performance Open Source Search Engine</h2>
  <p>
    Manticore Search is a fast, scalable, and feature-rich open source full-text search engine designed for handling large volumes of data with powerful query capabilities.
  </p>

  <h3 style="color:#f97316">Key Features</h3>
  <ul>
    <li>Real-time full-text search with relevance ranking.</li>
    <li>Supports SQL-like query language for flexibility.</li>
    <li>Faceted search, filtering, and geospatial search.</li>
    <li>Distributed search with replication and sharding.</li>
    <li>Integrates well with MySQL and PostgreSQL.</li>
  </ul>

  <h3 style="color:#c2410c">Basic Usage Example</h3>
  <pre style="background:#ffe7cc; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code># Create an index
CREATE TABLE products (
  id INT,
  name TEXT,
  description TEXT
) TYPE=RT;

# Insert data
INSERT INTO products (id, name, description) VALUES (1, 'Laptop', 'High-performance laptop with SSD');

# Search query
SELECT * FROM products WHERE MATCH('laptop SSD') LIMIT 10;</code></pre>

  <h3 style="color:#f97316">⚠️ Important Tips</h3>
  <ul>
    <li>Design your schema carefully to optimize search relevance.</li>
    <li>Use real-time (RT) indexes for instant data availability.</li>
    <li>Monitor query performance and tune ranking parameters.</li>
    <li>Secure access to Manticore Search instances to prevent unauthorized use.</li>
  </ul>

  <h3 style="color:#c2410c">💡 Best Practices</h3>
  <ul>
    <li>Use incremental indexing to keep data up-to-date.</li>
    <li>Leverage distributed features for scaling large datasets.</li>
    <li>Test and fine-tune ranking expressions based on your use case.</li>
    <li>Regularly backup your indexes and configuration.</li>
  </ul>
</div>
`  },
            
              { id: "opensearch", title: "OpenSearch", type: "optional",description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f4ff; padding:1.5rem; border-radius:1rem; border:1px solid #3b82f6; box-shadow:0 4px 15px rgba(59, 130, 246, 0.3)">
  <h2 style="color:#2563eb">🔎 OpenSearch - Open-Source Search & Analytics Suite</h2>
  <p>
    OpenSearch is a community-driven, open-source search and analytics suite derived from Elasticsearch 7.10.2 and Kibana 7.10.2. It offers powerful search, log analytics, and data visualization capabilities.
  </p>

  <h3 style="color:#3b82f6">Key Features</h3>
  <ul>
    <li>Full-text search with scalable distributed architecture.</li>
    <li>Real-time data ingestion and near-instant search results.</li>
    <li>Advanced analytics and dashboard visualizations with OpenSearch Dashboards.</li>
    <li>Security features including role-based access control (RBAC) and encryption.</li>
    <li>Extensible with plugins and supports SQL queries.</li>
  </ul>

  <h3 style="color:#2563eb">Basic Usage Example</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>PUT /library/_doc/1
{
  "title": "Modern Web Development",
  "author": "Jane Doe",
  "published_year": 2023
}

GET /library/_search
{
  "query": {
    "match": {
      "title": "web development"
    }
  }
}</code></pre>

  <h3 style="color:#3b82f6">⚠️ Important Tips</h3>
  <ul>
    <li>Plan your index mappings carefully for optimal search and aggregation.</li>
    <li>Leverage OpenSearch Dashboards for monitoring and data visualization.</li>
    <li>Use snapshot and restore features for reliable backups.</li>
    <li>Implement security best practices to protect your cluster.</li>
  </ul>

  <h3 style="color:#2563eb">💡 Best Practices</h3>
  <ul>
    <li>Use bulk indexing APIs to improve data ingestion performance.</li>
    <li>Keep your cluster healthy by monitoring shard allocation and resource usage.</li>
    <li>Use aliases for zero-downtime index updates and versioning.</li>
    <li>Regularly update and test your backups and restore procedures.</li>
  </ul>
</div>
`  },
          ]
        },
        {
          id: "nosql",
          title: "NoSQL",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#fff9f0; padding:1.5rem; border-radius:1rem; border:1px solid #d97706; box-shadow:0 4px 15px rgba(217, 119, 6, 0.3)">
  <h2 style="color:#b45309">🚀 NoSQL Databases - Flexible & Scalable Data Storage</h2>
  <p>
    NoSQL databases provide schema-less, highly scalable, and flexible data storage solutions designed to handle large volumes of structured, semi-structured, and unstructured data.
  </p>

  <h3 style="color:#d97706">Types of NoSQL Databases</h3>
  <ul>
    <li><strong>Document Stores:</strong> Store data as JSON-like documents. (e.g., MongoDB, CouchDB)</li>
    <li><strong>Key-Value Stores:</strong> Simple key-value pairs for fast retrieval. (e.g., Redis, DynamoDB)</li>
    <li><strong>Column-Family Stores:</strong> Store data in columns grouped into families. (e.g., Cassandra, HBase)</li>
    <li><strong>Graph Databases:</strong> Model data as nodes and edges for relationships. (e.g., Neo4j, Amazon Neptune)</li>
  </ul>

  <h3 style="color:#b45309">Key Features</h3>
  <ul>
    <li>Schema flexibility — no fixed schema required.</li>
    <li>Horizontal scalability — easy to scale out on commodity hardware.</li>
    <li>High availability with replication and partitioning.</li>
    <li>Optimized for specific use cases like real-time analytics, caching, and content management.</li>
  </ul>

  <h3 style="color:#d97706">Basic Usage Example (MongoDB)</h3>
  <pre style="background:#ffedd5; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>// Insert a document into a collection
db.users.insertOne({
  name: "Alice",
  email: "alice@example.com",
  age: 30,
  interests: ["reading", "travel"]
});

// Query documents
db.users.find({ age: { $gte: 25 } })</code></pre>

  <h3 style="color:#b45309">⚠️ Important Tips</h3>
  <ul>
    <li>Choose the NoSQL type that best fits your data model and use case.</li>
    <li>Design your data with denormalization and embedding for performance.</li>
    <li>Be mindful of consistency models (eventual vs strong consistency).</li>
    <li>Implement proper indexing to optimize query performance.</li>
  </ul>

  <h3 style="color:#d97706">💡 Best Practices</h3>
  <ul>
    <li>Use NoSQL for flexible, evolving schemas and large-scale distributed systems.</li>
    <li>Monitor and tune performance with proper capacity planning.</li>
    <li>Regularly backup data and test disaster recovery processes.</li>
    <li>Understand trade-offs between consistency, availability, and partition tolerance (CAP theorem).</li>
  </ul>
</div>
`,
          children: [
            {
              id: "on-premises",
              title: "On-Premises",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#f9fafb; padding:1.5rem; border-radius:1rem; border:1px solid #6b7280; box-shadow:0 4px 15px rgba(107, 114, 128, 0.3)">
  <h2 style="color:#374151">🏢 On-Premises Infrastructure - Control & Security in Your Hands</h2>
  <p>
    On-premises refers to hosting and managing your software, hardware, and data within your own physical data centers or office locations rather than relying on cloud services.
  </p>

  <h3 style="color:#6b7280">Key Characteristics</h3>
  <ul>
    <li>Full control over hardware and software environments.</li>
    <li>Data resides within your own infrastructure, improving security and compliance.</li>
    <li>Customization and integration flexibility with existing systems.</li>
    <li>Requires investment in physical resources and ongoing maintenance.</li>
  </ul>

  <h3 style="color:#374151">Advantages</h3>
  <ul>
    <li>Better control over data privacy and regulatory compliance.</li>
    <li>Reduced dependency on internet connectivity for internal applications.</li>
    <li>Tailored configurations and performance optimizations possible.</li>
  </ul>

  <h3 style="color:#6b7280">Challenges</h3>
  <ul>
    <li>High upfront costs for hardware and infrastructure setup.</li>
    <li>Need for skilled personnel for maintenance and updates.</li>
    <li>Scalability can be slower and more costly compared to cloud solutions.</li>
  </ul>

  <h3 style="color:#374151">Best Practices</h3>
  <ul>
    <li>Ensure robust security measures including firewalls, intrusion detection, and physical security.</li>
    <li>Plan capacity with scalability in mind to avoid over- or under-provisioning.</li>
    <li>Implement regular backups and disaster recovery plans.</li>
    <li>Keep software and hardware up to date with patches and upgrades.</li>
  </ul>
</div>
`,
              children: [
                { id: "redis-onprem", title: "Redis", type: "must-know",
                  description: `<div style="font-family:sans-serif; line-height:1.6; background:#e0f2fe; padding:2rem; border-radius:1rem; border:2px solid #0284c7; box-shadow:0 6px 20px rgba(2, 132, 199, 0.3)">
  <h2 style="color:#0369a1; margin-bottom:1rem;">⚡ Redis - Advanced In-Memory Data Structure Store</h2>
  <p>
    Redis (REmote DIctionary Server) is an open-source, in-memory data store that supports various complex data structures such as strings, hashes, lists, sets, sorted sets, bitmaps, hyperloglogs, streams, and geospatial indexes.
    It excels in scenarios requiring extremely fast data access, caching, real-time analytics, messaging, and pub/sub systems.
  </p>

  <h3 style="color:#0284c7; margin-top:1.5rem;">🌟 Core Features</h3>
  <ul>
    <li><strong>In-memory storage:</strong> Ultra-low latency for reads/writes by storing all data in RAM.</li>
    <li><strong>Rich data types:</strong> Beyond simple key-value pairs, supports hashes, lists, sets, sorted sets, streams, bitmaps, and more.</li>
    <li><strong>Persistence:</strong> Supports RDB snapshots and Append-Only Files (AOF) for data durability.</li>
    <li><strong>Replication & High Availability:</strong> Master-slave replication, Redis Sentinel for failover, and Redis Cluster for sharding.</li>
    <li><strong>Atomic operations:</strong> Supports transactions and Lua scripting for complex logic.</li>
    <li><strong>Pub/Sub Messaging:</strong> Real-time event broadcasting between applications.</li>
  </ul>

  <h3 style="color:#0369a1; margin-top:1.5rem;">📋 Common Use Cases</h3>
  <ul>
    <li><strong>Cache Layer:</strong> Reduce database load by caching frequent queries or session data.</li>
    <li><strong>Session Store:</strong> Store user session state for web apps with quick retrieval.</li>
    <li><strong>Real-time Analytics:</strong> Increment counters, leaderboards, or time-series data.</li>
    <li><strong>Message Queues:</strong> Implement queues or task management with lists and streams.</li>
    <li><strong>Geospatial Applications:</strong> Location-based queries using geospatial indexes.</li>
  </ul>

  <h3 style="color:#0284c7; margin-top:1.5rem;">💻 Basic Commands & Examples</h3>
  <pre style="background:#bae6fd; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family: monospace;">
# Set and get simple key-value
SET user:1000 "Alice"
GET user:1000

# Hash to store user profile
HSET user:1000 name "Alice" age 30 email "alice@example.com"
HGETALL user:1000

# List for task queue
LPUSH tasks "task1"
LPUSH tasks "task2"
RPOP tasks

# Sorted set for leaderboard
ZADD leaderboard 100 "player1"
ZADD leaderboard 200 "player2"
ZRANGE leaderboard 0 -1 WITHSCORES

# Publish/Subscribe
PUBLISH notifications "New user registered"
SUBSCRIBE notifications
  </pre>

  <h3 style="color:#0369a1; margin-top:1.5rem;">⚠️ Important Considerations</h3>
  <ul>
    <li><strong>Memory Management:</strong> Since Redis stores data in RAM, monitor usage carefully to avoid running out of memory.</li>
    <li><strong>Eviction Policies:</strong> Configure policies like LRU (Least Recently Used) to evict keys when memory limits are reached.</li>
    <li><strong>Persistence:</strong> Understand trade-offs between performance and durability when choosing between RDB snapshots and AOF logs.</li>
    <li><strong>Scaling:</strong> Use Redis Cluster to shard data across multiple nodes for horizontal scaling.</li>
    <li><strong>Security:</strong> Enable AUTH, use firewalls, and avoid exposing Redis directly to the internet.</li>
  </ul>

  <h3 style="color:#0284c7; margin-top:1.5rem;">💡 Best Practices</h3>
  <ul>
    <li>Use meaningful and consistent key naming conventions (e.g., <code>user:1000:profile</code>).</li>
    <li>Keep data structures small and focused to maximize performance.</li>
    <li>Use Lua scripts to perform atomic, multi-step operations efficiently.</li>
    <li>Regularly monitor latency, throughput, and memory usage with tools like Redis INFO and Redis Monitor.</li>
    <li>Use Redis Sentinel for automated failover and high availability setups.</li>
    <li>Backup data frequently and test recovery plans to prevent data loss.</li>
  </ul>

  <h3 style="color:#0369a1; margin-top:1.5rem;">🔗 Additional Resources</h3>
  <ul>
    <li><a href="https://redis.io/docs/" target="_blank" style="color:#0284c7; text-decoration:none;">Official Redis Documentation</a></li>
    <li><a href="https://redis.io/topics/cluster-tutorial" target="_blank" style="color:#0284c7; text-decoration:none;">Redis Cluster Tutorial</a></li>
    <li><a href="https://redis.io/topics/transactions" target="_blank" style="color:#0284c7; text-decoration:none;">Redis Transactions & Lua Scripting</a></li>
  </ul>
</div>
` },
                { id: "mongodb", title: "MongoDB", type: "good-to-know",description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:2rem; border-radius:1rem; border:2px solid #22c55e; box-shadow:0 6px 20px rgba(34, 197, 94, 0.3)">
  <h2 style="color:#15803d; margin-bottom:1rem;">🍃 MongoDB - NoSQL Document Database</h2>
  <p>
    MongoDB is a leading NoSQL, document-oriented database designed for high performance, scalability, and flexibility. It stores data in JSON-like BSON documents which allow complex nested structures.
  </p>

  <h3 style="color:#22c55e; margin-top:1.5rem;">🌟 Key Features</h3>
  <ul>
    <li><strong>Document-based storage:</strong> Uses BSON format for flexible schema design.</li>
    <li><strong>Horizontal Scalability:</strong> Supports sharding to distribute data across multiple servers.</li>
    <li><strong>Replication & High Availability:</strong> Replica sets enable automatic failover and data redundancy.</li>
    <li><strong>Powerful Query Language:</strong> Rich query capabilities including filtering, aggregation, geospatial queries, and text search.</li>
    <li><strong>Indexing:</strong> Supports various index types to optimize query performance.</li>
    <li><strong>Transactions:</strong> Multi-document ACID transactions support.</li>
  </ul>

  <h3 style="color:#15803d; margin-top:1.5rem;">📋 Common Use Cases</h3>
  <ul>
    <li>Applications with evolving or flexible schemas.</li>
    <li>Real-time analytics and big data applications.</li>
    <li>Content management systems and catalogs.</li>
    <li>Mobile apps requiring fast and flexible data access.</li>
  </ul>

  <h3 style="color:#22c55e; margin-top:1.5rem;">💻 Basic Usage Examples</h3>
  <pre style="background:#bbf7d0; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family: monospace;">
// Insert a document
db.users.insertOne({
  name: "Alice",
  age: 30,
  email: "alice@example.com",
  interests: ["reading", "hiking"]
})

// Query documents
db.users.find({ age: { $gte: 18 } })

// Update a document
db.users.updateOne(
  { name: "Alice" },
  { $set: { email: "alice_new@example.com" } }
)

// Create an index
db.users.createIndex({ email: 1 }, { unique: true })

// Aggregation example: count users by interest
db.users.aggregate([
  { $unwind: "$interests" },
  { $group: { _id: "$interests", count: { $sum: 1 } } }
])
  </pre>

  <h3 style="color:#15803d; margin-top:1.5rem;">⚠️ Important Considerations</h3>
  <ul>
    <li>Schema design is flexible but requires thoughtful planning to optimize queries.</li>
    <li>Understand consistency models and use replica sets for durability.</li>
    <li>Use indexes wisely to improve performance but monitor index overhead.</li>
    <li>Plan shard keys carefully for effective horizontal scaling.</li>
  </ul>

  <h3 style="color:#22c55e; margin-top:1.5rem;">💡 Best Practices</h3>
  <ul>
    <li>Design your schema to match query patterns (denormalization may help).</li>
    <li>Leverage aggregation framework for complex data processing.</li>
    <li>Keep documents reasonably sized to avoid performance issues.</li>
    <li>Use transactions when you need ACID guarantees across multiple documents.</li>
    <li>Secure your MongoDB instances with authentication, encryption, and network controls.</li>
  </ul>

  <h3 style="color:#15803d; margin-top:1.5rem;">🔗 Additional Resources</h3>
  <ul>
    <li><a href="https://www.mongodb.com/docs/manual/" target="_blank" style="color:#22c55e; text-decoration:none;">Official MongoDB Documentation</a></li>
    <li><a href="https://www.mongodb.com/docs/manual/tutorial/" target="_blank" style="color:#22c55e; text-decoration:none;">MongoDB Tutorials</a></li>
    <li><a href="https://university.mongodb.com/" target="_blank" style="color:#22c55e; text-decoration:none;">MongoDB University (Free Courses)</a></li>
  </ul>
</div>
` },
                { id: "lite-db", title: "LiteDB", type: "optional",description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefce8; padding:2rem; border-radius:1rem; border:2px solid #ca8a04; box-shadow:0 6px 20px rgba(202, 138, 4, 0.3)">
  <h2 style="color:#854d0e; margin-bottom:1rem;">📦 LiteDB – Lightweight Embedded NoSQL Database for .NET</h2>
  <p>
    <strong>LiteDB</strong> is a lightweight, fast, serverless NoSQL database designed for .NET applications. It stores data in a single .db file and requires no installation or setup, making it ideal for local or embedded storage.
  </p>

  <h3 style="color:#ca8a04; margin-top:1.5rem;">⚙️ Key Features</h3>
  <ul>
    <li>Single .db file for data storage</li>
    <li>BSON-based flexible schema</li>
    <li>ACID transactions</li>
    <li>LINQ-style queries</li>
    <li>Indexing support</li>
    <li>Zero external dependencies</li>
  </ul>

  <h3 style="color:#854d0e; margin-top:1.5rem;">📋 Typical Use Cases</h3>
  <ul>
    <li>Desktop applications (WPF, WinForms)</li>
    <li>Blazor and mobile apps</li>
    <li>Prototypes or quick data storage solutions</li>
    <li>Offline-capable systems</li>
  </ul>

  <h3 style="color:#ca8a04; margin-top:1.5rem;">💻 Basic Example</h3>
  <pre style="background:#fef9c3; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using var db = new LiteDatabase("MyData.db");

var customers = db.GetCollection<Customer>("customers");

customers.Insert(new Customer { Name = "Alice", Age = 30 });

var results = customers.Find(x => x.Age > 25);

var customer = customers.FindOne(x => x.Name == "Alice");
customer.Age = 31;
customers.Update(customer);

customers.Delete(customer.Id);
  </pre>

  <h3 style="color:#854d0e; margin-top:1.5rem;">📌 Things to Consider</h3>
  <ul>
    <li>Not suitable for high-concurrency systems</li>
    <li>Best used under a few GBs of data</li>
    <li>Store file locally, avoid sharing over network</li>
  </ul>

  <h3 style="color:#ca8a04; margin-top:1.5rem;">✅ Best Practices</h3>
  <ul>
    <li>Use indexes for performance on frequently queried fields</li>
    <li>Call db.Rebuild() periodically to reduce file size</li>
    <li>Enable encryption if storing sensitive data</li>
    <li>Backup the .db file regularly</li>
    <li>Avoid accessing the same file from multiple processes</li>
  </ul>

  <h3 style="color:#854d0e; margin-top:1.5rem;">🔗 Resources</h3>
  <ul>
    <li><a href="https://www.litedb.org/docs/" target="_blank" style="color:#ca8a04; text-decoration:none;">LiteDB Documentation</a></li>
    <li><a href="https://github.com/mbdavid/LiteDB" target="_blank" style="color:#ca8a04; text-decoration:none;">LiteDB GitHub</a></li>
    <li><a href="https://www.nuget.org/packages/LiteDB/" target="_blank" style="color:#ca8a04; text-decoration:none;">LiteDB on NuGet</a></li>
  </ul>
</div>
` },
                { id: "apache-cassandra", title: "Apache Cassandra", type: "optional",
                  description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #0284c7; box-shadow:0 6px 20px rgba(2, 132, 199, 0.2)">
  <h2 style="color:#075985; margin-bottom:1rem;">🌐 Apache Cassandra – Distributed NoSQL Database for Massive Scalability</h2>
  <p>
    <strong>Apache Cassandra</strong> is a highly scalable, distributed NoSQL database designed for handling large amounts of structured data across many servers with no single point of failure. It's optimized for high availability and horizontal scalability, making it ideal for real-time big data applications.
  </p>

  <h3 style="color:#0284c7; margin-top:1.5rem;">⚙️ Key Features</h3>
  <ul>
    <li><strong>Decentralized architecture:</strong> No master node; all nodes are equal.</li>
    <li><strong>Linear scalability:</strong> Easily add nodes without downtime.</li>
    <li><strong>High availability:</strong> Built-in replication and fault-tolerance.</li>
    <li><strong>Tunable consistency:</strong> You control the consistency vs performance tradeoff.</li>
    <li><strong>CQL (Cassandra Query Language):</strong> SQL-like syntax for ease of use.</li>
  </ul>

  <h3 style="color:#075985; margin-top:1.5rem;">📦 Use Cases</h3>
  <ul>
    <li>IoT and time-series data platforms</li>
    <li>Real-time analytics</li>
    <li>High-volume write-heavy applications</li>
    <li>Globally distributed services</li>
  </ul>

  <h3 style="color:#0284c7; margin-top:1.5rem;">💻 Basic CQL Example</h3>
  <pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
-- Create a keyspace
CREATE KEYSPACE blog WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

-- Create a table
CREATE TABLE blog.posts (
    id UUID PRIMARY KEY,
    title TEXT,
    content TEXT,
    author TEXT,
    created_at TIMESTAMP
);

-- Insert data
INSERT INTO blog.posts (id, title, content, author, created_at)
VALUES (uuid(), 'Hello Cassandra', 'Cassandra is fast and scalable!', 'Alice', toTimestamp(now()));

-- Query data
SELECT * FROM blog.posts;
  </pre>

  <h3 style="color:#075985; margin-top:1.5rem;">🧠 Integration in .NET</h3>
  <ul>
    <li>Use the official <code>CassandraCSharpDriver</code> from DataStax.</li>
    <li>Install via NuGet:
      <pre style="background:#e0f2fe; padding:0.5rem; border-radius:0.5rem; font-family:monospace;">dotnet add package CassandraCSharpDriver</pre>
    </li>
    <li>Connect using a session:
      <pre style="background:#e0f2fe; padding:0.5rem; border-radius:0.5rem; font-family:monospace;">
var cluster = Cluster.Builder().AddContactPoint("127.0.0.1").Build();
var session = cluster.Connect("blog");
var rows = session.Execute("SELECT * FROM posts");
      </pre>
    </li>
  </ul>

  <h3 style="color:#0284c7; margin-top:1.5rem;">✅ Best Practices</h3>
  <ul>
    <li>Model your data around query patterns (denormalize when needed).</li>
    <li>Avoid large partitions; keep them under 100MB.</li>
    <li>Use prepared statements for performance and safety.</li>
    <li>Distribute writes evenly using good partition keys.</li>
    <li>Monitor with tools like Prometheus + Grafana.</li>
  </ul>

  <h3 style="color:#075985; margin-top:1.5rem;">🔗 Resources</h3>
  <ul>
    <li><a href="https://cassandra.apache.org/_/index.html" target="_blank" style="color:#0284c7; text-decoration:none;">Official Website</a></li>
    <li><a href="https://docs.datastax.com/en/developer/csharp-driver/latest/" target="_blank" style="color:#0284c7; text-decoration:none;">.NET Driver Docs (DataStax)</a></li>
  </ul>
</div>
` },
                { id: "ravendb", title: "RavenDB", type: "optional" ,description: `<div style="font-family:sans-serif; line-height:1.6; background:#ecfdf5; padding:2rem; border-radius:1rem; border:2px solid #059669; box-shadow:0 6px 20px rgba(5, 150, 105, 0.2)">
  <h2 style="color:#065f46; margin-bottom:1rem;">🕊️ RavenDB – Fully Transactional NoSQL Document Database for .NET</h2>
  <p>
    <strong>RavenDB</strong> is a high-performance, open-source <em>document database</em> built with .NET developers in mind. It supports ACID transactions, full-text search, and automatic indexing out-of-the-box. RavenDB is production-ready, scalable, and ideal for .NET applications.
  </p>

  <h3 style="color:#059669; margin-top:1.5rem;">⚙️ Key Features</h3>
  <ul>
    <li>Built-in full-text search (Lucene)</li>
    <li>ACID-compliant even in distributed setups</li>
    <li>Strong .NET integration (LINQ, async/await, etc.)</li>
    <li>Automatic indexes & query optimization</li>
    <li>Multi-document transactions</li>
    <li>Embedded mode or server-based deployments</li>
    <li>Cross-platform: Windows, Linux, Docker</li>
  </ul>

  <h3 style="color:#065f46; margin-top:1.5rem;">💻 Getting Started with C#</h3>
  <pre style="background:#d1fae5; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
public class User
{
    public string Id { get; set; }
    public string Name { get; set; }
}

using var store = new DocumentStore
{
    Urls = new[] { "http://localhost:8080" },
    Database = "MyApp"
}.Initialize();

using (var session = store.OpenSession())
{
    session.Store(new User { Name = "Alice" });
    session.SaveChanges();

    var user = session.Query<User>()
                      .Where(u => u.Name == "Alice")
                      .FirstOrDefault();
}
  </pre>

  <h3 style="color:#059669; margin-top:1.5rem;">🧠 Use Cases</h3>
  <ul>
    <li>Event sourcing and CQRS architectures</li>
    <li>Document-heavy business applications</li>
    <li>Multi-tenant SaaS platforms</li>
    <li>Audit logging, e-invoice systems, and more</li>
  </ul>

  <h3 style="color:#065f46; margin-top:1.5rem;">✅ Best Practices</h3>
  <ul>
    <li>Use <code>IDocumentStore</code> as a singleton</li>
    <li>Define indexes explicitly when complex queries are needed</li>
    <li>Take advantage of RavenDB’s patching API to update documents in bulk</li>
    <li>Enable revision tracking for audit trails</li>
    <li>Monitor system health using RavenDB Studio</li>
  </ul>

  <h3 style="color:#059669; margin-top:1.5rem;">📚 Resources</h3>
  <ul>
    <li><a href="https://ravendb.net/" target="_blank" style="color:#059669; text-decoration:none;">Official Website</a></li>
    <li><a href="https://ravendb.net/docs/article-page/latest/csharp/start/what-is-ravendb" target="_blank" style="color:#059669; text-decoration:none;">C# Quick Start</a></li>
    <li><a href="https://www.youtube.com/@ravendb" target="_blank" style="color:#059669; text-decoration:none;">YouTube Tutorials</a></li>
    <li><a href="https://github.com/ravendb/ravendb" target="_blank" style="color:#059669; text-decoration:none;">GitHub Repo</a></li>
  </ul>
</div>
`},
                { id: "couchdb", title: "CouchDB", type: "optional",description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefce8; padding:2rem; border-radius:1rem; border:2px solid #facc15; box-shadow:0 6px 20px rgba(234, 179, 8, 0.2)">
  <h2 style="color:#92400e; margin-bottom:1rem;">🍵 CouchDB – RESTful NoSQL Database with Seamless Sync</h2>
  <p>
    <strong>Apache CouchDB</strong> is a document-oriented NoSQL database designed to be easy to use, with a focus on reliability and offline synchronization. It uses <code>JSON</code> to store data, <code>HTTP</code> for its API, and <code>MapReduce</code> for querying and indexing.
  </p>

  <h3 style="color:#b45309; margin-top:1.5rem;">🚀 Key Features</h3>
  <ul>
    <li>RESTful HTTP API for all operations</li>
    <li>Multi-master replication and conflict resolution</li>
    <li>Offline-first approach – great for mobile/web apps</li>
    <li>Built-in web administration console: <strong>Fauxton</strong></li>
    <li>Optimized for availability, partition tolerance</li>
    <li>Document revisions with MVCC (Multi-Version Concurrency Control)</li>
  </ul>

  <h3 style="color:#92400e; margin-top:1.5rem;">📦 Sample Document</h3>
  <pre style="background:#fef3c7; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
{
  "_id": "user_123",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "role": "admin",
  "type": "user"
}
  </pre>

  <h3 style="color:#b45309; margin-top:1.5rem;">💻 Interacting with CouchDB in .NET</h3>
  <ul>
    <li>Use the <code>MyCouch</code> or <code>CouchDB.Driver</code> NuGet packages</li>
    <li>Example using <strong>MyCouch</strong>:
      <pre style="background:#fef3c7; padding:0.75rem; border-radius:0.5rem; font-family:monospace;">
using (var client = new MyCouchClient("http://localhost:5984", "users"))
{
    var response = await client.Entities.PostAsync(new {
        name = "Alice",
        email = "alice@site.com"
    });

    var doc = await client.Entities.GetAsync(response.Id);
}
      </pre>
    </li>
  </ul>

  <h3 style="color:#92400e; margin-top:1.5rem;">🧠 Use Cases</h3>
  <ul>
    <li>Progressive web apps (PWAs) with offline sync</li>
    <li>IoT applications with edge-to-cloud data flow</li>
    <li>Mobile apps needing replication and local storage</li>
    <li>Event logging and audit trails</li>
  </ul>

  <h3 style="color:#b45309; margin-top:1.5rem;">✅ Best Practices</h3>
  <ul>
    <li>Use UUIDs or meaningful _id values for documents</li>
    <li>Design views carefully using MapReduce functions</li>
    <li>Monitor document revisions to avoid bloating</li>
    <li>Leverage replication for fault-tolerant systems</li>
    <li>Secure your instance: CouchDB is open by default</li>
  </ul>

  <h3 style="color:#92400e; margin-top:1.5rem;">🔗 Resources</h3>
  <ul>
    <li><a href="https://couchdb.apache.org/" target="_blank" style="color:#b45309; text-decoration:none;">Official Site</a></li>
    <li><a href="https://docs.couchdb.org/en/stable/" target="_blank" style="color:#b45309; text-decoration:none;">Documentation</a></li>
    <li><a href="https://www.npmjs.com/package/pouchdb" target="_blank" style="color:#b45309; text-decoration:none;">PouchDB (client-side sync)</a></li>
    <li><a href="https://github.com/danielwertheim/mycouch" target="_blank" style="color:#b45309; text-decoration:none;">MyCouch (.NET Driver)</a></li>
  </ul>
</div>
` },
              ]
            },
            {
              id: "cloud",
              title: "Cloud",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#eef2ff; padding:2rem; border-radius:1rem; border:2px solid #6366f1; box-shadow:0 6px 20px rgba(99, 102, 241, 0.2)">
  <h2 style="color:#3730a3; margin-bottom:1rem;">☁️ Cloud Computing for .NET Developers</h2>
  <p>
    <strong>Cloud</strong> platforms enable developers to build scalable, resilient, and cost-effective applications without worrying about infrastructure. For .NET developers, integrating with cloud services is critical for building modern, distributed systems.
  </p>

  <h3 style="color:#4f46e5; margin-top:1.5rem;">🚀 Must-Know Cloud Providers</h3>
  <ul>
    <li><strong>Microsoft Azure</strong> – Seamless .NET & Visual Studio integration</li>
    <li><strong>Amazon Web Services (AWS)</strong> – Robust services, global reach</li>
    <li><strong>Google Cloud Platform (GCP)</strong> – Developer-friendly with modern tools</li>
    <li><strong>DigitalOcean, Heroku, Vercel</strong> – Great for small/medium .NET apps</li>
  </ul>

  <h3 style="color:#3730a3; margin-top:1.5rem;">🔧 Core Cloud Services for .NET Apps</h3>
  <ul>
    <li><strong>App Services / App Engine / Elastic Beanstalk</strong> – Web app hosting</li>
    <li><strong>Azure Functions / AWS Lambda</strong> – Serverless APIs</li>
    <li><strong>Blob Storage / S3 / Cloud Storage</strong> – File & media storage</li>
    <li><strong>SQL/NoSQL Databases</strong> – Azure SQL, CosmosDB, DynamoDB, Firestore</li>
    <li><strong>Monitoring</strong> – Azure Monitor, CloudWatch, Stackdriver</li>
    <li><strong>Messaging</strong> – Azure Service Bus, AWS SQS/SNS, Pub/Sub</li>
  </ul>

  <h3 style="color:#4f46e5; margin-top:1.5rem;">📦 Sample Deployment with Azure CLI</h3>
  <pre style="background:#e0e7ff; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
az webapp up --name my-dotnet-app \
             --resource-group my-resource-group \
             --runtime "DOTNET|8.0" \
             --location westeurope
  </pre>

  <h3 style="color:#3730a3; margin-top:1.5rem;">🔐 Best Practices</h3>
  <ul>
    <li>Use <strong>Managed Identities</strong> instead of secrets</li>
    <li>Set up <strong>CI/CD pipelines</strong> with GitHub Actions or Azure DevOps</li>
    <li>Deploy to <strong>multiple regions</strong> for high availability</li>
    <li>Monitor health using <strong>Application Insights</strong></li>
    <li>Store configs in <strong>Key Vault / Secrets Manager</strong></li>
  </ul>

  <h3 style="color:#4f46e5; margin-top:1.5rem;">📚 Learn More</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/azure/dotnet/" target="_blank" style="color:#6366f1; text-decoration:none;">Azure for .NET Developers</a></li>
    <li><a href="https://aws.amazon.com/net/" target="_blank" style="color:#6366f1; text-decoration:none;">AWS for .NET Developers</a></li>
    <li><a href="https://cloud.google.com/dotnet" target="_blank" style="color:#6366f1; text-decoration:none;">GCP for .NET Developers</a></li>
  </ul>
</div>
`,
              children: [
                { id: "azure-cosmosdb", title: "Azure CosmosDB", type: "good-to-know",
                  description: `<div style="font-family:sans-serif; line-height:1.6; background:#ecfdf5; padding:2rem; border-radius:1rem; border:2px solid #10b981; box-shadow:0 6px 20px rgba(16, 185, 129, 0.15)">
  <h2 style="color:#065f46; margin-bottom:1rem;">🪐 Azure Cosmos DB – Global, Scalable NoSQL for .NET</h2>
  <p>
    <strong>Azure Cosmos DB</strong> is Microsoft’s globally distributed, multi-model NoSQL database designed for low-latency, high-availability applications. It's ideal for building planet-scale apps with native support for JSON and seamless .NET integration.
  </p>

  <h3 style="color:#047857; margin-top:1.5rem;">🌍 Key Features</h3>
  <ul>
    <li>Global distribution with <strong>multi-region replication</strong></li>
    <li>Support for multiple APIs: <strong>Core (SQL), MongoDB, Cassandra, Gremlin, Table</strong></li>
    <li><strong>99.999% availability</strong> with automatic failover</li>
    <li><strong>Elastic scaling</strong> of throughput and storage (RU/s model)</li>
    <li><strong>Low-latency reads/writes</strong> (under 10ms)</li>
    <li>Built-in support for <strong>automatic indexing</strong></li>
  </ul>

  <h3 style="color:#065f46; margin-top:1.5rem;">💻 Example – Using Azure Cosmos DB SDK in ASP.NET Core</h3>
  <pre style="background:#d1fae5; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
var cosmosClient = new CosmosClient("<your-connection-string>");
var database = await cosmosClient.CreateDatabaseIfNotExistsAsync("MyDatabase");
var container = await database.Database.CreateContainerIfNotExistsAsync("Users", "/id");

var user = new { id = "u1", name = "Jane", role = "Admin" };
await container.Container.CreateItemAsync(user, new PartitionKey("u1"));
  </pre>

  <h3 style="color:#047857; margin-top:1.5rem;">🔧 Integration Tips</h3>
  <ul>
    <li>Install <code>Microsoft.Azure.Cosmos</code> NuGet package</li>
    <li>Use <strong>PartitionKey</strong> to optimize performance</li>
    <li>Monitor usage with <strong>Azure Monitor</strong> and <strong>Metrics</strong></li>
    <li>Set <strong>Throughput Mode</strong>: Manual or Autoscale</li>
  </ul>

  <h3 style="color:#065f46; margin-top:1.5rem;">✅ Best Practices</h3>
  <ul>
    <li>Choose <strong>Partition Keys</strong> wisely – aim for even data distribution</li>
    <li>Use <strong>lazy initialization</strong> of the client</li>
    <li>Catch and handle <strong>429 (Rate Limited)</strong> responses with retries</li>
    <li>Use <code>Bulk</code> operations for batch inserts/updates</li>
    <li>Minimize cross-partition queries where possible</li>
  </ul>

  <h3 style="color:#047857; margin-top:1.5rem;">🔗 Resources</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/azure/cosmos-db/" target="_blank" style="color:#10b981; text-decoration:none;">Official Documentation</a></li>
    <li><a href="https://github.com/Azure/azure-cosmos-dotnet-v3" target="_blank" style="color:#10b981; text-decoration:none;">.NET SDK GitHub Repo</a></li>
    <li><a href="https://learn.microsoft.com/en-us/azure/cosmos-db/sql/sql-query-overview" target="_blank" style="color:#10b981; text-decoration:none;">SQL Query Language for Cosmos DB</a></li>
  </ul>
</div>
` },
                { id: "amazon-dynamodb", title: "Amazon DynamoDB", type: "optional",description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:2rem; border-radius:1rem; border:2px solid #22c55e; box-shadow:0 6px 20px rgba(34,197,94,0.2)">
  <h2 style="color:#15803d; margin-bottom:1rem;">🟩 Amazon DynamoDB – Fast & Flexible NoSQL on AWS</h2>
  <p>
    <strong>Amazon DynamoDB</strong> is a fully managed NoSQL database service by AWS designed for single-digit millisecond performance at any scale. It's ideal for high-throughput apps and integrates well with ASP.NET Core via the AWS SDK.
  </p>

  <h3 style="color:#16a34a; margin-top:1.5rem;">⚙️ Key Features</h3>
  <ul>
    <li>⚡ Millisecond response times even at massive scale</li>
    <li>📈 On-demand or provisioned throughput modes (auto-scaling)</li>
    <li>🧩 Built-in support for <strong>Streams</strong>, <strong>TTL</strong>, and <strong>Global Tables</strong></li>
    <li>🔒 Encryption at rest, IAM integration for fine-grained access</li>
    <li>🛠️ Integration with AWS Lambda, Step Functions, and EventBridge</li>
  </ul>

  <h3 style="color:#15803d; margin-top:1.5rem;">💻 Sample .NET Core Code</h3>
  <pre style="background:#dcfce7; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;

var config = new AmazonDynamoDBConfig { RegionEndpoint = RegionEndpoint.EUWest1 };
var client = new AmazonDynamoDBClient(config);
var context = new DynamoDBContext(client);

var user = new User { Id = "u1", Name = "Jane", Role = "Admin" };
await context.SaveAsync(user);
  </pre>

  <h3 style="color:#16a34a; margin-top:1.5rem;">📁 Table Design Tips</h3>
  <ul>
    <li>Design for <strong>access patterns</strong>, not relational modeling</li>
    <li>Use <strong>composite keys</strong> (partition key + sort key)</li>
    <li>Normalize read performance with <strong>Global Secondary Indexes (GSI)</strong></li>
  </ul>

  <h3 style="color:#15803d; margin-top:1.5rem;">✅ Best Practices</h3>
  <ul>
    <li>Enable <strong>DAX</strong> (DynamoDB Accelerator) for microsecond latency</li>
    <li>Use <strong>batch operations</strong> for efficiency</li>
    <li>Leverage <strong>Streams + Lambda</strong> for real-time processing</li>
    <li>Limit item size to <strong>400KB</strong></li>
    <li>Avoid hot partitions by distributing partition key values</li>
  </ul>

  <h3 style="color:#16a34a; margin-top:1.5rem;">🔗 Resources</h3>
  <ul>
    <li><a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html" target="_blank" style="color:#22c55e; text-decoration:none;">Official Documentation</a></li>
    <li><a href="https://github.com/aws/aws-sdk-net" target="_blank" style="color:#22c55e; text-decoration:none;">AWS SDK for .NET</a></li>
    <li><a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Operations_Amazon_DynamoDB.html" target="_blank" style="color:#22c55e; text-decoration:none;">API Reference</a></li>
  </ul>
</div>
` },
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
          description: ``,
          type: "must-know"
        },
        {
          id: "distributed-cache",
          title: "Distributed Cache",
          description: ``,
          children: [
            {
              id: "redis",
              title: "Redis",
              description: ``,
              type: "must-know",
              children: [
                {
                  id: "stackexchange-redis",
                  title: "StackExchange.Redis",
                  description: ``,
                  type: "must-know"
                },
                {
                  id: "easycaching",
                  title: "EasyCaching",
                  description: ``,
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
