export const roadmapData = {
  title: "ASP.NET Core Developer in 2025",
  mainBranches: [
    {
      id: "general-skills",
      title: "General Development Skills",
      direction: "right",
      type: "must-know",
      description: `<div style="font-family: 'Segoe UI', sans-serif; background: #f8fafc; color: #1e293b; border-radius: 1rem; padding: 2rem; box-shadow: 0 6px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; max-width: 960px; margin: auto;">

  <div style="background: linear-gradient(to right, #0f172a, #334155); padding: 1.2rem 1.5rem; border-radius: 0.75rem; color: #f8fafc; margin-bottom: 2rem;">
    <h2 style="margin: 0; font-size: 1.8rem;">🧠 General Development Skills</h2>
  </div>

  <section style="margin-bottom: 1.75rem;">
    <h3 style="color: #3b82f6;">📁 GIT - Version Control</h3>
    <p>Master <strong>Git</strong> for tracking code changes, branching, merging, and collaborating on shared codebases. Platforms like <strong>GitHub</strong>, <strong>GitLab</strong>, and <strong>Azure DevOps (VSTS)</strong> support issue tracking, CI/CD, and team collaboration.</p>
    <ul style="padding-left: 1.25rem; list-style: disc;">
      <li><code>git clone / commit / push / pull</code></li>
      <li>Branching strategies (feature, main, release)</li>
      <li>PRs, merge conflicts, and code reviews</li>
    </ul>
  </section>

  <section style="margin-bottom: 1.75rem;">
    <h3 style="color: #0ea5e9;">🌐 HTTP/HTTPS + TLS/SSL</h3>
    <p>Understand how data travels over the web. Learn <strong>HTTP methods</strong> (GET, POST, etc.), status codes, headers, and cookies. Grasp the importance of <strong>HTTPS</strong> and how <strong>TLS/SSL</strong> secures web communication via encryption and certificates.</p>
    <ul>
      <li>Difference between HTTP and HTTPS</li>
      <li>Status codes like 200, 404, 500</li>
      <li>SSL handshake & digital certificates</li>
    </ul>
  </section>

  <section style="margin-bottom: 1.75rem;">
    <h3 style="color: #10b981;">🔍 Effective Search Skills</h3>
    <p>Being able to research solutions efficiently is a superpower. Learn to use Google with precision operators, and master AI coding assistants like <strong>ChatGPT</strong>, <strong>Claude</strong>, and <strong>GitHub Copilot</strong> to enhance productivity.</p>
    <ul>
      <li>Use search modifiers: <code>site:</code>, <code>filetype:</code>, <code>intitle:</code></li>
      <li>Prompt AI tools with context-rich queries</li>
      <li>Cross-verify answers with official docs or GitHub issues</li>
    </ul>
  </section>

  <section>
    <h3 style="color: #f59e0b;">📦 Data Structures and Algorithms</h3>
    <p>Learn the building blocks of efficient code. Master core structures like arrays, hash maps, trees, and graphs. Practice solving algorithmic problems to boost problem-solving, logic, and coding interview readiness.</p>
    <ul>
      <li>Sorting, searching, recursion, and dynamic programming</li>
      <li>Time & space complexity (Big O Notation)</li>
      <li>Use platforms like LeetCode, HackerRank, VisualAlgo</li>
    </ul>
  </section>

</div>
`,
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
      type: "must-know",
      direction: "left",
      description: `<div style="font-family: 'Segoe UI', sans-serif; background: #f9fafb; color: #1f2937; border-radius: 1rem; padding: 2rem; box-shadow: 0 8px 30px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; max-width: 960px; margin: auto;">

  <!-- Header -->
  <div style="background: linear-gradient(to right, #4f46e5, #6366f1); padding: 1.2rem 1.5rem; border-radius: 0.75rem; color: white; margin-bottom: 2rem;">
    <h2 style="margin: 0; font-size: 1.8rem;">💻 C# Programming Language</h2>
  </div>

  <!-- Section: Why Learn C# -->
  <section style="margin-bottom: 1.75rem;">
    <h3 style="color: #3b82f6;">🚀 Why Learn C#?</h3>
    <ul style="padding-left: 1.25rem; list-style: disc;">
      <li>Primary language for .NET (cross-platform framework by Microsoft)</li>
      <li>Used for web, desktop, mobile, cloud, game, and IoT development</li>
      <li>Strong typing, garbage collection, async support, rich tooling</li>
      <li>Popular in enterprise-grade software development</li>
    </ul>
  </section>

  <!-- Section: Core Concepts -->
  <section style="margin-bottom: 1.75rem;">
    <h3 style="color: #10b981;">📦 Core Language Concepts</h3>
    <ul>
      <li><strong>Syntax:</strong> Variables, types, expressions, control structures</li>
      <li><strong>OOP:</strong> Classes, inheritance, polymorphism, interfaces</li>
      <li><strong>Collections:</strong> Lists, dictionaries, sets, queues</li>
      <li><strong>Exception Handling:</strong> try/catch/finally, custom exceptions</li>
    </ul>
  </section>

  <!-- Section: Modern Features -->
  <section style="margin-bottom: 1.75rem;">
    <h3 style="color: #f59e0b;">✨ Modern Language Features</h3>
    <ul>
      <li><code>async/await</code> for asynchronous operations</li>
      <li>LINQ for querying data collections</li>
      <li>Pattern matching & switch expressions</li>
      <li>Record types, top-level programs, null safety</li>
    </ul>
  </section>

  <!-- Section: Code Example -->
  <section style="margin-bottom: 1.75rem;">
    <h3 style="color: #8b5cf6;">🔧 Example Code</h3>
    <pre style="background: #1f2937; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;">
public class Person {
  public string Name { get; set; }
  public int Age { get; set; }

  public void Greet() {
    Console.WriteLine($"Hi, I'm {Name} and I'm {Age} years old.");
  }
}

var person = new Person { Name = "Alice", Age = 30 };
person.Greet();
    </pre>
  </section>

  <!-- Section: Use Cases -->
  <section style="margin-bottom: 1.75rem;">
    <h3 style="color: #ec4899;">🧠 Common Use Cases</h3>
    <ul style="list-style: circle; padding-left: 1.25rem;">
      <li>Web development with ASP.NET Core</li>
      <li>Cross-platform apps with .NET MAUI / Xamarin</li>
      <li>Game development with Unity Engine</li>
      <li>Desktop apps with WinForms / WPF</li>
      <li>Cloud services on Azure</li>
    </ul>
  </section>

  <!-- Section: Best Practices -->
  <section style="margin-bottom: 1.75rem;">
    <h3 style="color: #ef4444;">⚠️ Best Practices</h3>
    <ul>
      <li>Follow SOLID and DRY principles</li>
      <li>Use dependency injection and interface abstraction</li>
      <li>Write unit tests and leverage mocking frameworks</li>
      <li>Organize code with clear namespaces and layering</li>
    </ul>
  </section>

  <!-- Section: Resources -->
  <section>
    <h3 style="color: #0ea5e9;">📚 Learn More</h3>
    <ul>
      <li><a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" style="color:#6366f1;">C# Official Documentation</a></li>
      <li><a href="https://dotnet.microsoft.com/en-us/learn" target="_blank" style="color:#6366f1;">.NET Learning Hub</a></li>
      <li><a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" style="color:#6366f1;">C# Fundamentals</a></li>
      <li><a href="https://www.udemy.com/course/csharp-tutorial-for-beginners/" target="_blank" style="color:#6366f1;">C# Beginner Courses (Udemy)</a></li>
    </ul>
  </section>

</div>
`,// Indicates it branches to the left
      children: [
        {
          id: "csharp-basics", title: "Learn the basics of C# 13", type: "must-know", description: `
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
        {
          id: "dotnet9", title: "Learn .NET 9", type: "must-know",
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
        {
          id: "dotnet-cli", title: "Learn dotnet CLI", type: "must-know",
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
        {
          id: "stylecop", title: "StyleCop rules", type: "must-know",
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
      type: "must-know",
      description: `<div style="font-family: 'Segoe UI', sans-serif; background: #fdfdfd; color: #1f2937; border-radius: 1rem; padding: 2rem; box-shadow: 0 8px 30px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; max-width: 960px; margin: auto;">

  <!-- Header -->
  <div style="background: linear-gradient(to right, #4f46e5, #6366f1); padding: 1.5rem; border-radius: 0.75rem; color: white; margin-bottom: 2rem;">
    <h2 style="margin: 0; font-size: 1.9rem;">🗄️ SQL Fundamentals</h2>
  </div>

  <!-- Section: Overview -->
  <section style="margin-bottom: 1.8rem;">
    <h3 style="color: #4f46e5;">📌 What is SQL?</h3>
    <p><strong>SQL (Structured Query Language)</strong> is a declarative language used to manage and manipulate data in relational databases. It’s the standard for communicating with databases such as PostgreSQL, MySQL, SQL Server, SQLite, and Oracle.</p>
  </section>

  <!-- Section: Core SQL Skills -->
  <section style="margin-bottom: 1.8rem;">
    <h3 style="color: #10b981;">🧠 Core Skills to Learn</h3>
    <ul style="padding-left: 1.25rem; list-style: disc;">
      <li><strong>SELECT queries:</strong> Retrieve specific columns and rows from tables.</li>
      <li><strong>WHERE conditions:</strong> Filter data using logical comparisons.</li>
      <li><strong>JOINs:</strong> Combine rows from multiple tables based on related columns.</li>
      <li><strong>GROUP BY & Aggregations:</strong> Summarize data using functions like <code>SUM()</code>, <code>COUNT()</code>, <code>AVG()</code>.</li>
      <li><strong>INSERT, UPDATE, DELETE:</strong> Modify data within tables safely and efficiently.</li>
      <li><strong>Constraints & Keys:</strong> Use <code>PRIMARY KEY</code>, <code>FOREIGN KEY</code>, <code>UNIQUE</code>, and <code>CHECK</code> for data integrity.</li>
    </ul>
  </section>

  <!-- Section: Data Types -->
  <section style="margin-bottom: 1.8rem;">
    <h3 style="color: #f59e0b;">🧬 Common Data Types</h3>
    <ul style="padding-left: 1.25rem; list-style: square;">
      <li><code>INT</code>, <code>FLOAT</code>, <code>DECIMAL</code> – numeric types</li>
      <li><code>VARCHAR</code>, <code>TEXT</code> – string types</li>
      <li><code>DATE</code>, <code>TIME</code>, <code>TIMESTAMP</code> – date/time types</li>
      <li><code>BOOLEAN</code> – true/false logic</li>
    </ul>
  </section>

  <!-- Section: Sample Query -->
  <section style="margin-bottom: 1.8rem;">
    <h3 style="color: #8b5cf6;">🧾 Example Query</h3>
    <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;">
-- Top 5 customers by number of completed orders
SELECT c.name, COUNT(o.id) AS order_count
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE o.status = 'completed'
GROUP BY c.name
ORDER BY order_count DESC
LIMIT 5;
    </pre>
  </section>

  <!-- Section: Practice Tools -->
  <section style="margin-bottom: 1.8rem;">
    <h3 style="color: #ec4899;">🔧 Practice Tools</h3>
    <ul>
      <li><a href="https://sqlzoo.net/" target="_blank" style="color:#6366f1;">SQLZOO</a> – Beginner-friendly SQL exercises</li>
      <li><a href="https://mode.com/sql-tutorial/" target="_blank" style="color:#6366f1;">Mode SQL Tutorial</a> – Interactive real-world queries</li>
      <li><a href="https://www.sql-practice.com/" target="_blank" style="color:#6366f1;">SQL Practice</a> – Challenges with answers</li>
    </ul>
  </section>

  <!-- Section: Best Practices -->
  <section style="margin-bottom: 1.8rem;">
    <h3 style="color: #ef4444;">⚠️ Best Practices</h3>
    <ul>
      <li>Use <code>LIMIT</code> in development to avoid returning too many rows.</li>
      <li>Comment complex queries for clarity and collaboration.</li>
      <li>Use parameterized queries to prevent SQL injection.</li>
      <li>Test JOINs and filters incrementally to avoid logic bugs.</li>
    </ul>
  </section>

  <!-- Section: Continue Learning -->
  <section>
    <h3 style="color: #0ea5e9;">📚 Learn More</h3>
    <ul>
      <li><a href="https://www.w3schools.com/sql/" target="_blank" style="color:#6366f1;">W3Schools SQL</a></li>
      <li><a href="https://sqlbolt.com/" target="_blank" style="color:#6366f1;">SQLBolt (Interactive Lessons)</a></li>
      <li><a href="https://learn.microsoft.com/en-us/sql/" target="_blank" style="color:#6366f1;">Microsoft SQL Server Docs</a></li>
      <li><a href="https://use-the-index-luke.com/" target="_blank" style="color:#6366f1;">Use the Index, Luke!</a></li>
    </ul>
  </section>

</div>
`,
      direction: "right",
      children: [
        {
          id: "fundamentals", title: "Fundamentals about database design and SQL Syntax", type: "must-know", description: `<div style="font-family:sans-serif;line-height:1.6;background:#fefefe;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)">
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
        {
          id: "stored-procedure", title: "Stored Procedures", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefefe; padding:1.5rem; border-radius:1rem; border:1px solid #e5e7eb; box-shadow:0 4px 12px rgba(0,0,0,0.05)">
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
        {
          id: "constraints", title: "Constraints", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefefe; padding:1.5rem; border-radius:1rem; border:1px solid #e5e7eb; box-shadow:0 4px 12px rgba(0,0,0,0.05)">
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
      type: "must-know",
      description: `<div style="font-family: 'Segoe UI', sans-serif; background: #fdfdfd; color: #1f2937; border-radius: 1rem; padding: 2rem; box-shadow: 0 8px 30px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; max-width: 960px; margin: auto;">

  <!-- Header -->
  <div style="background: linear-gradient(to right, #2563eb, #3b82f6); padding: 1.2rem 1.5rem; border-radius: 0.75rem; color: white; margin-bottom: 2rem;">
    <h2 style="margin: 0; font-size: 1.8rem;">🌐 ASP.NET Core Basics</h2>
  </div>

  <!-- Section: Overview -->
  <section style="margin-bottom: 1.75rem;">
    <h3 style="color: #3b82f6;">🧩 What is ASP.NET Core?</h3>
    <p><strong>ASP.NET Core</strong> is a cross-platform, high-performance framework for building modern web applications, RESTful APIs, and microservices. It runs on .NET and supports dependency injection, middleware architecture, and Razor Pages.</p>
  </section>

  <!-- Section: Key Features -->
  <section style="margin-bottom: 1.75rem;">
    <h3 style="color: #10b981;">⚙️ Key Features</h3>
    <ul style="padding-left: 1.25rem; list-style: disc;">
      <li>Cross-platform (Windows, Linux, macOS)</li>
      <li>Modular middleware pipeline (Startup.cs)</li>
      <li>Built-in dependency injection</li>
      <li>Support for RESTful APIs, Razor Pages, and MVC</li>
      <li>Integrated configuration, logging, and authentication</li>
    </ul>
  </section>

  <!-- Section: File Structure -->
  <section style="margin-bottom: 1.75rem;">
    <h3 style="color: #f59e0b;">🗂 Project Structure</h3>
    <ul>
      <li><code>Program.cs</code>: Entry point using top-level statements</li>
      <li><code>Startup.cs</code>: Configure services and middleware pipeline</li>
      <li><code>Controllers/</code>: Handle HTTP requests</li>
      <li><code>appsettings.json</code>: App configuration (environment-based)</li>
    </ul>
  </section>

  <!-- Section: Example Code -->
  <section style="margin-bottom: 1.75rem;">
    <h3 style="color: #8b5cf6;">🔧 Example: Minimal API</h3>
    <pre style="background: #1f2937; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;">
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/hello", () => "Hello World!");
app.Run();
    </pre>
  </section>

  <!-- Section: Use Cases -->
  <section style="margin-bottom: 1.75rem;">
    <h3 style="color: #ec4899;">💼 Use Cases</h3>
    <ul>
      <li>Public RESTful APIs for web/mobile clients</li>
      <li>Enterprise intranet portals with MVC or Razor Pages</li>
      <li>Authentication/Authorization systems (JWT, Identity)</li>
      <li>Real-time apps via SignalR (chat, notifications)</li>
    </ul>
  </section>

  <!-- Section: Best Practices -->
  <section style="margin-bottom: 1.75rem;">
    <h3 style="color: #ef4444;">✅ Best Practices</h3>
    <ul>
      <li>Use dependency injection for services and repositories</li>
      <li>Keep configuration environment-specific (e.g., appsettings.Production.json)</li>
      <li>Separate concerns using layered architecture (Controllers, Services, Repos)</li>
      <li>Use FluentValidation or DataAnnotations for model validation</li>
    </ul>
  </section>

  <!-- Section: Learning Resources -->
  <section>
    <h3 style="color: #0ea5e9;">📚 Learn More</h3>
    <ul>
      <li><a href="https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-9.0" target="_blank" style="color:#3b82f6;">ASP.NET Core Official Docs</a></li>
      <li><a href="https://github.com/dotnet/aspnetcore" target="_blank" style="color:#3b82f6;">ASP.NET Core GitHub Repo</a></li>
      <li><a href="https://www.udemy.com/course/aspnet-core-web-api/" target="_blank" style="color:#3b82f6;">Udemy ASP.NET Core Courses</a></li>
    </ul>
  </section>

</div>
`,
      direction: "left",
      children: [
        {
          id: "mvc-api", title: "MVC & Minimal APIs", type: "must-know",
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
        {
          id: "options-config", title: "Options & Configurations", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefefe; padding:1.5rem; border-radius:1rem; border:1px solid #e5e7eb; box-shadow:0 4px 12px rgba(0,0,0,0.05)">
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
        {
          id: "middlewares", title: "Middlewares", type: "must-know",
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
        {
          id: "filter-attributes", title: "Filter & Attributes", type: "must-know",
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
        {
          id: "background-tasks", title: "Background Tasks", type: "good-to-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f9fafb; padding:1.5rem; border-radius:1rem; border:1px solid #cbd5e1; box-shadow:0 4px 15px rgba(148, 163, 184, 0.3)">
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
        {
          id: "auth", title: "Authentication & Authorization (Identity, IdentityServer, OpenIddict, Auth0/OIDC)", type: "must-know",
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

        {
          id: "razor-pages", title: "Razor Pages", type: "good-to-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#fff7ed; padding:1.5rem; border-radius:1rem; border:1px solid #fdba74; box-shadow:0 4px 15px rgba(251, 191, 36, 0.3)">
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
        {
          id: "razor-components", title: "Razor Components", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#ecfdf5; padding:1.5rem; border-radius:1rem; border:1px solid #6ee7b7; box-shadow:0 4px 15px rgba(34,197,94,0.3)">
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
      type: "must-know",
      description: `<div style="font-family:'Segoe UI',sans-serif;background:#fdfdfd;color:#1f2937;border-radius:1rem;padding:2rem;box-shadow:0 8px 30px rgba(0,0,0,0.08);border:1px solid #e5e7eb;max-width:960px;margin:auto;">

  <!-- Header -->
  <div style="background:linear-gradient(to right,#0f172a,#334155);padding:1.5rem;border-radius:0.75rem;color:#f8fafc;margin-bottom:2rem;">
    <h2 style="margin:0;font-size:1.8rem;">🧱 SOLID Principles</h2>
  </div>

  <!-- S: Single Responsibility -->
  <section style="margin-bottom:1.75rem;">
    <h3 style="color:#3b82f6;">🔹 S - Single Responsibility Principle (SRP)</h3>
    <p>A class should have one and only one reason to change — it should only do one thing.</p>
    <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.5rem;overflow-x:auto;">
// ❌ Violates SRP
class Report {
  public void Generate() { ... }
  public void SaveToFile() { ... }
}

// ✅ SRP applied
class ReportGenerator { public void Generate() { ... } }
class ReportSaver { public void SaveToFile() { ... } }
    </pre>
  </section>

  <!-- O: Open/Closed -->
  <section style="margin-bottom:1.75rem;">
    <h3 style="color:#10b981;">🔹 O - Open/Closed Principle (OCP)</h3>
    <p>Software entities should be open for extension but closed for modification.</p>
    <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.5rem;overflow-x:auto;">
interface IDiscount {
  decimal Apply(decimal price);
}

class PercentageDiscount : IDiscount {
  public decimal Apply(decimal price) => price * 0.9m;
}

class Checkout {
  public decimal FinalPrice(IDiscount discount, decimal price) => discount.Apply(price);
}
    </pre>
  </section>

  <!-- L: Liskov Substitution -->
  <section style="margin-bottom:1.75rem;">
    <h3 style="color:#f59e0b;">🔹 L - Liskov Substitution Principle (LSP)</h3>
    <p>Derived classes must be substitutable for their base classes without altering behavior.</p>
    <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.5rem;overflow-x:auto;">
class Bird { public virtual void Fly() { } }
class Duck : Bird { public override void Fly() { ... } }
class Ostrich : Bird { public override void Fly() { throw new Exception(); } } // ❌ violates LSP
    </pre>
  </section>

  <!-- I: Interface Segregation -->
  <section style="margin-bottom:1.75rem;">
    <h3 style="color:#8b5cf6;">🔹 I - Interface Segregation Principle (ISP)</h3>
    <p>Clients should not be forced to depend on interfaces they do not use.</p>
    <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.5rem;overflow-x:auto;">
// ❌ Bad
interface IMachine { void Print(); void Fax(); void Scan(); }

// ✅ Good
interface IPrinter { void Print(); }
interface IScanner { void Scan(); }
    </pre>
  </section>

  <!-- D: Dependency Inversion -->
  <section style="margin-bottom:1.75rem;">
    <h3 style="color:#ef4444;">🔹 D - Dependency Inversion Principle (DIP)</h3>
    <p>Depend on abstractions, not on concrete implementations.</p>
    <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.5rem;overflow-x:auto;">
// High-level module
class OrderProcessor {
  private readonly IPaymentService _payment;
  public OrderProcessor(IPaymentService payment) => _payment = payment;
  public void Process() => _payment.Pay();
}

// Abstraction
interface IPaymentService { void Pay(); }

// Low-level module
class StripePayment : IPaymentService {
  public void Pay() { ... }
}
    </pre>
  </section>

  <!-- Learn More -->
  <section>
    <h3 style="color:#0ea5e9;">📚 Learn More</h3>
    <ul>
      <li><a href="https://solidprinciples.com/" target="_blank" style="color:#3b82f6;">solidprinciples.com</a></li>
      <li><a href="https://refactoring.guru/design-patterns" target="_blank" style="color:#3b82f6;">Refactoring Guru (Design Patterns)</a></li>
      <li><a href="https://learn.microsoft.com/en-us/dotnet/standard/modern-web-apps-azure-architecture/architectural-principles" target="_blank" style="color:#3b82f6;">Microsoft - Architecture Guidelines</a></li>
    </ul>
  </section>
</div> `,
      children: [
        {
          id: "single-responsibility", title: "Single Responsibility Principle (SRP)", type: "must-know",
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
        {
          id: "open-closed", title: "Open Closed Principle (OCP)", type: "must-know",
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
        {
          id: "liskov", title: "Liskov Substitution Principle (LSP)", type: "must-know",
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
        {
          id: "interface-segregation", title: "Interface Segregation Principle (ISP)", type: "must-know",
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
        {
          id: "dependency-inversion", title: "Dependency Inversion Principle (DIP)", type: "must-know",
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
      "description": `<div style="font-family:sans-serif; line-height:1.6; background:#fefce8; padding:1.5rem; border-radius:1rem; border:1px solid #eab308; box-shadow:0 4px 15px rgba(234, 179, 8, 0.2)">
  <h2 style="color:#ca8a04">🔄 What is ORM (Object-Relational Mapping)?</h2>
  <p><strong>Object-Relational Mapping (ORM)</strong> is a programming technique that allows developers to interact with a relational database using the programming language’s native objects, rather than writing raw SQL queries manually.</p>

  <h3 style="color:#eab308">🎯 Purpose of ORM</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>Bridge the gap between object-oriented code and relational data.</li>
    <li>Encapsulate SQL behind familiar object-based syntax.</li>
    <li>Reduce boilerplate code required for CRUD operations.</li>
    <li>Enable automatic mapping between classes and database tables.</li>
  </ul>

  <h3 style="color:#ca8a04">🔍 How It Works</h3>
  <ul style="list-style:circle; padding-left:1.2rem; color:#78350f">
    <li>Classes in code represent tables in the database.</li>
    <li>Object properties map to table columns.</li>
    <li>ORM tracks object changes and generates SQL accordingly.</li>
    <li>Developers call methods like <code>Save()</code>, <code>Update()</code>, or <code>Find()</code> instead of writing SQL manually.</li>
  </ul>

  <h3 style="color:#eab308">💼 Benefits of Using ORM</h3>
  <ul>
    <li>Faster development – reduces repetitive database code</li>
    <li>Improves readability and maintainability</li>
    <li>Database abstraction – easier to switch backends</li>
    <li>Automatic handling of relationships and constraints</li>
    <li>Helps prevent SQL injection when properly used</li>
  </ul>

  <h3 style="color:#ca8a04">⚠️ Considerations</h3>
  <ul>
    <li>ORMs may introduce performance overhead in complex queries</li>
    <li>Understanding underlying SQL is still important</li>
    <li>Not always suitable for extremely high-performance or analytical systems</li>
  </ul>

  <h3 style="color:#eab308">📚 Learn More</h3>
  <ul>
    <li><a href="https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping" target="_blank" style="color:#ca8a04">Wikipedia - ORM</a></li>
    <li><a href="https://www.geeksforgeeks.org/object-relational-mapping-orm-frameworks/" target="_blank" style="color:#ca8a04">GFG – ORM Frameworks Overview</a></li>
    <li><a href="https://martinfowler.com/eaaCatalog/dataMapper.html" target="_blank" style="color:#ca8a04">Martin Fowler - Data Mapper Pattern</a></li>
  </ul>
</div>
`,
      "children": [
        {
          "id": "ef-core",
          "title": "Entity Framework Core",
          "type": "must-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:1.5rem; border-radius:1rem; border:1px solid #60a5fa; box-shadow:0 4px 15px rgba(96, 165, 250, 0.3)">
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
            {
              "id": "ef-basics", "title": "Learn the basics of Entity Framework Core", "type": "must-know",
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
            {
              "id": "code-first", "title": "Code First + Migrations", "type": "must-know",
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
            {
              "id": "change-tracker", "title": "Change Tracker API", "type": "must-know",
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
            {
              "id": "loading-strategies", "title": "Lazy Loading, Eager Loading, Explicit Loading", "type": "must-know",
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
            {
              "id": "inheritance-mapping", "title": "TPH, TPC, TPT", "type": "must-know",
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
            {
              "id": "bulk-operations", "title": "Bulk Insert/Update APIs", "type": "must-know",
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
            {
              "id": "interceptors", "title": "Interceptors", "type": "good-to-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:1.5rem; border-radius:1rem; border:1px solid #3b82f6; box-shadow:0 4px 15px rgba(59, 130, 246, 0.3)">
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
      description: `<div style="font-family:sans-serif; line-height:1.6; background:#fdf4ff; padding:1.5rem; border-radius:1rem; border:1px solid #d946ef; box-shadow:0 4px 15px rgba(217, 70, 239, 0.2)">
  <h2 style="color:#a21caf">🗄️ What is a Database?</h2>
  <p><strong>A database</strong> is an organized collection of data that can be stored, accessed, and managed electronically. Databases are essential for building scalable, data-driven applications — from small apps to enterprise systems.</p>

  <h3 style="color:#d946ef">🧠 Why Databases Matter</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>Store and organize structured or unstructured data</li>
    <li>Enable fast and efficient querying</li>
    <li>Support concurrent access by multiple users</li>
    <li>Ensure data integrity, security, and recovery</li>
  </ul>

  <h3 style="color:#a21caf">🧱 Common Database Types</h3>
  <ul style="list-style:circle; padding-left:1.2rem; color:#701a75">
    <li><strong>Relational (SQL):</strong> Use tables with rows/columns and fixed schema (e.g., PostgreSQL, MySQL, SQL Server)</li>
    <li><strong>Non-relational (NoSQL):</strong> Flexible schemas for specific use cases (e.g., MongoDB, Redis, Cassandra)</li>
    <li><strong>NewSQL:</strong> Combine SQL consistency with NoSQL scalability</li>
    <li><strong>In-memory:</strong> Ultra-fast data access using RAM (e.g., Redis, Memcached)</li>
  </ul>

  <h3 style="color:#d946ef">⚙️ Core Concepts to Learn</h3>
  <ul>
    <li>SQL vs NoSQL fundamentals</li>
    <li>Indexing and Query Optimization</li>
    <li>Transactions, ACID & CAP Theorem</li>
    <li>Joins, Aggregations, Views</li>
    <li>Replication, Sharding, Scaling</li>
    <li>Backup, Restore & Security</li>
  </ul>

  <h3 style="color:#a21caf">📚 Learn More</h3>
  <ul>
    <li><a href="https://www.w3schools.com/sql/" target="_blank" style="color:#a21caf">W3Schools – SQL Tutorial</a></li>
    <li><a href="https://www.mongodb.com/nosql-explained" target="_blank" style="color:#a21caf">MongoDB – What is NoSQL?</a></li>
    <li><a href="https://www.postgresql.org/docs/" target="_blank" style="color:#a21caf">PostgreSQL Docs</a></li>
    <li><a href="https://youtu.be/ztHopE5Wnpc" target="_blank" style="color:#a21caf">Fireship: SQL vs NoSQL (YouTube)</a></li>
  </ul>
</div>
`,
      children: [
        {
          id: "relational",
          title: "Relational",
          type: "must-know",
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
            {
              id: "sql-server", title: "SQL Server", type: "must-know",
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
            {
              id: "postgresql", title: "PostgreSQL", type: "good-to-know",
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
            {
              id: "mariadb", title: "MariaDB", type: "optional",
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
            {
              id: "mysql", title: "MySQL", type: "optional",
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
            {
              id: "elasticsearch", title: "Elasticsearch", type: "must-know",
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
            {
              id: "meilisearch", title: "Meilisearch", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdfa; padding:1.5rem; border-radius:1rem; border:1px solid #10b981; box-shadow:0 4px 15px rgba(16, 185, 129, 0.3)">
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
            {
              id: "manticoresearch", title: "ManticoreSearch", type: "good-to-know",
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

            {
              id: "opensearch", title: "OpenSearch", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f4ff; padding:1.5rem; border-radius:1rem; border:1px solid #3b82f6; box-shadow:0 4px 15px rgba(59, 130, 246, 0.3)">
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
          type: "good-to-know",
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
                {
                  id: "redis-onprem", title: "Redis", type: "must-know",
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
                {
                  id: "mongodb", title: "MongoDB", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:2rem; border-radius:1rem; border:2px solid #22c55e; box-shadow:0 6px 20px rgba(34, 197, 94, 0.3)">
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
                {
                  id: "lite-db", title: "LiteDB", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefce8; padding:2rem; border-radius:1rem; border:2px solid #ca8a04; box-shadow:0 6px 20px rgba(202, 138, 4, 0.3)">
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
                {
                  id: "apache-cassandra", title: "Apache Cassandra", type: "optional",
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
                {
                  id: "ravendb", title: "RavenDB", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#ecfdf5; padding:2rem; border-radius:1rem; border:2px solid #059669; box-shadow:0 6px 20px rgba(5, 150, 105, 0.2)">
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
                {
                  id: "couchdb", title: "CouchDB", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefce8; padding:2rem; border-radius:1rem; border:2px solid #facc15; box-shadow:0 6px 20px rgba(234, 179, 8, 0.2)">
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
                {
                  id: "azure-cosmosdb", title: "Azure CosmosDB", type: "must-know",
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
                {
                  id: "amazon-dynamodb", title: "Amazon DynamoDB", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:2rem; border-radius:1rem; border:2px solid #22c55e; box-shadow:0 6px 20px rgba(34,197,94,0.2)">
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
      description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:1.5rem; border-radius:1rem; border:1px solid #38bdf8; box-shadow:0 4px 15px rgba(56, 189, 248, 0.3)">
  <h2 style="color:#0ea5e9">🚀 What is Caching?</h2>
  <p><strong>Caching</strong> is the process of storing a copy of frequently accessed data in a fast-access layer (like memory), so future requests can be served faster without hitting the original source (like a database or external API).</p>

  <h3 style="color:#38bdf8">⚡ Why Caching is Important</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>Reduces load on databases and services</li>
    <li>Speeds up response time for users</li>
    <li>Minimizes network or computation overhead</li>
    <li>Improves scalability and performance under high traffic</li>
  </ul>

  <h3 style="color:#0ea5e9">🧠 Common Cache Types</h3>
  <ul style="list-style:circle; padding-left:1.2rem; color:#0369a1">
    <li><strong>In-Memory Cache:</strong> Fast, temporary storage in RAM (e.g., <code>MemoryCache</code> in .NET)</li>
    <li><strong>Distributed Cache:</strong> Shared cache across servers (e.g., Redis, Memcached)</li>
    <li><strong>HTTP Cache:</strong> Caching responses in browsers, CDNs, proxies</li>
    <li><strong>Data Caching:</strong> Frequently queried database rows/tables</li>
    <li><strong>Output Caching:</strong> Storing full responses or rendered HTML</li>
  </ul>

  <h3 style="color:#38bdf8">🧩 Cache Strategies</h3>
  <ul>
    <li><strong>Cache Aside (Lazy Loading):</strong> Data loaded into cache on first request</li>
    <li><strong>Write Through:</strong> Cache is updated at the same time as the DB</li>
    <li><strong>Write Behind:</strong> Data is first written to cache, then to DB later</li>
    <li><strong>Time-To-Live (TTL):</strong> Cache entries expire after a duration</li>
    <li><strong>Eviction Policies:</strong> LRU, LFU, FIFO when cache is full</li>
  </ul>

  <h3 style="color:#0ea5e9">📚 Learn More</h3>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" target="_blank" style="color:#0ea5e9">MDN – HTTP Caching</a></li>
    <li><a href="https://redis.io/docs/latest/" target="_blank" style="color:#0ea5e9">Redis Documentation</a></li>
  </ul>
</div>
`,
      children: [
        {
          id: "memory-cache",
          title: "Memory Cache",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefce8; padding:2rem; border-radius:1rem; border:2px solid #facc15; box-shadow:0 6px 20px rgba(234, 179, 8, 0.15)">
  <h2 style="color:#92400e;">🧠 In-Memory Caching with IMemoryCache</h2>
  <p>
    <strong>IMemoryCache</strong> is a built-in service in ASP.NET Core that enables you to temporarily store data in memory to avoid repeated processing or expensive data fetching (e.g. database queries, API calls). It's ideal for small-to-medium-sized data with fast lookup needs.
  </p>

  <h3 style="color:#b45309;">⚡ Why Use Memory Cache?</h3>
  <ul>
    <li>Ultra-fast in-memory storage</li>
    <li>Reduces expensive I/O operations</li>
    <li>Improves response times for frequently accessed data</li>
    <li>Thread-safe and simple to use</li>
  </ul>

  <h3 style="color:#a16207;">💻 Basic Usage</h3>
  <pre style="background:#fef9c3; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
public class ProductService
{
    private readonly IMemoryCache _cache;
    private readonly ILogger<ProductService> _logger;

    public ProductService(IMemoryCache cache, ILogger<ProductService> logger)
    {
        _cache = cache;
        _logger = logger;
    }

    public Product GetProduct(int id)
    {
        return _cache.GetOrCreate($"product_{id}", entry =>
        {
            entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5);
            entry.SlidingExpiration = TimeSpan.FromMinutes(2);
            _logger.LogInformation("⏳ Fetching from database...");
            return FetchProductFromDatabase(id);
        });
    }
}
  </pre>

  <h3 style="color:#92400e;">🔑 Expiration Options</h3>
  <ul>
    <li><strong>Absolute Expiration:</strong> Fixed time to live</li>
    <li><strong>Sliding Expiration:</strong> Resets timeout on access</li>
    <li><strong>Size Limit:</strong> Total cache size constraint (with <code>Size</code>)</li>
    <li><strong>Priority:</strong> Can evict less important items first (<code>CacheItemPriority</code>)</li>
  </ul>

  <h3 style="color:#a16207;">🧪 Tip: Check If Key Exists</h3>
  <pre style="background:#fef9c3; padding:0.75rem; border-radius:0.75rem; font-family:monospace;">
if (_cache.TryGetValue("user_1", out User cachedUser))
{
    return cachedUser;
}
  </pre>

  <h3 style="color:#b45309;">✅ Best Practices</h3>
  <ul>
    <li>💡 Cache only <strong>frequently accessed</strong> or <strong>expensive</strong> resources</li>
    <li>🧹 Use <strong>appropriate expiration policies</strong> (absolute + sliding)</li>
`,
          type: "must-know"
        },
        {
          id: "distributed-cache",
          title: "Distributed Cache",
          type: "must-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#eff6ff; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)">
  <h2 style="color:#1d4ed8;">🌍 Distributed Caching in ASP.NET Core</h2>
  <p>
    <strong>Distributed Cache</strong> is a central, out-of-process cache mechanism that can be shared across multiple app instances or servers. It’s ideal for scalable, cloud-based, or load-balanced applications.
  </p>

  <h3 style="color:#2563eb;">💡 Why Use Distributed Cache?</h3>
  <ul>
    <li>🔄 Shared across multiple servers (stateless applications)</li>
    <li>🚀 Scales horizontally (good for microservices or cloud apps)</li>
    <li>✅ Keeps cached data available after app restarts</li>
    <li>🔐 Better persistence and support for advanced features (e.g., eviction, TTL)</li>
  </ul>

  <h3 style="color:#1e40af;">🔧 Common Implementations</h3>
  <ul>
    <li><strong>Redis</strong> – most widely used, fast and feature-rich</li>
    <li><strong>SQL Server Distributed Cache</strong> – persistent, but slower</li>
    <li><strong>NCache, Memcached, Couchbase</strong> – alternative enterprise solutions</li>
  </ul>

  <h3 style="color:#1d4ed8;">💻 Example with Redis</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// Program.cs
builder.Services.AddStackExchangeRedisCache(options =>
{
    options.Configuration = "localhost:6379";
    options.InstanceName = "MyApp_";
});

// Usage in service or controller
public class ProductService
{
    private readonly IDistributedCache _cache;

    public ProductService(IDistributedCache cache)
    {
        _cache = cache;
    }

    public async Task<string> GetProductAsync(int id)
    {
        var key = $"product_{id}";
        var cached = await _cache.GetStringAsync(key);
        if (cached != null) return cached;

        var product = await FetchFromDatabase(id);
        await _cache.SetStringAsync(key, product, new DistributedCacheEntryOptions
        {
            AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(10)
        });
        return product;
    }
}
  </pre>

  <h3 style="color:#1e3a8a;">⚠️ Serialization Tip</h3>
  <p>
    When caching complex objects, use <code>System.Text.Json</code> or <code>Newtonsoft.Json</code> to serialize/deserialize to/from string or byte arrays.
  </p>

  <h3 style="color:#1e40af;">✅ Best Practices</h3>
  <ul>
    <li>🔐 Use <strong>unique keys</strong> and clear naming conventions</li>
    <li>📦 Prefer <strong>Redis</strong> for high-performance scenarios</li>
    <li>🧼 Set appropriate <strong>expiration policies</strong> (absolute/sliding)</li>
    <li>🧪 Validate data before cache set (avoid caching nulls or errors)</li>
    <li>🔁 Invalidate/refresh cache when data changes (e.g., after DB write)</li>
    <li>🏷️ Use namespaces/prefixes to group related cache keys</li>
  </ul>

  <h3 style="color:#2563eb;">📚 Learn More</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/aspnet/core/performance/caching/distributed" target="_blank" style="color:#3b82f6;">MS Docs: Distributed Cache in ASP.NET Core</a></li>
    <li><a href="https://stackexchange.github.io/StackExchange.Redis/" target="_blank" style="color:#3b82f6;">StackExchange.Redis GitHub</a></li>
  </ul>
</div>
`,
          children: [
            {
              id: "redis",
              title: "Redis",
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
`,
              type: "must-know",
              children: [
                {
                  id: "stackexchange-redis",
                  title: "StackExchange.Redis",
                  description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #0284c7; box-shadow:0 6px 20px rgba(2,132,199,0.2)">
  <h2 style="color:#0369a1;">🔴 StackExchange.Redis in ASP.NET Core</h2>
  <p>
    <strong>StackExchange.Redis</strong> is a high-performance, full-featured Redis client library for .NET applications. It's widely used to connect ASP.NET Core apps to Redis for caching, messaging, session storage, and more.
  </p>

  <h3 style="color:#0284c7;">⚡ Key Features</h3>
  <ul>
    <li>✅ Robust and scalable Redis client</li>
    <li>🔄 Supports synchronous and asynchronous operations</li>
    <li>🔐 Connection pooling and multiplexing</li>
    <li>📦 Supports all Redis data types (Strings, Hashes, Lists, Sets, Sorted Sets)</li>
    <li>⚙️ Easy integration with ASP.NET Core DI and configuration</li>
  </ul>

  <h3 style="color:#0369a1;">🚀 Quick Setup</h3>
  <pre style="background:#bae6fd; padding:1rem; border-radius:0.75rem; font-family:monospace; overflow-x:auto;">
// 1. Install NuGet package:
// dotnet add package StackExchange.Redis

// 2. Configure in Program.cs
var redis = ConnectionMultiplexer.Connect("localhost:6379");
builder.Services.AddSingleton<IConnectionMultiplexer>(redis);

// 3. Use in a service
public class CacheService
{
    private readonly IDatabase _db;

    public CacheService(IConnectionMultiplexer redis)
    {
        _db = redis.GetDatabase();
    }

    public async Task SetValueAsync(string key, string value)
    {
        await _db.StringSetAsync(key, value);
    }

    public async Task<string?> GetValueAsync(string key)
    {
        return await _db.StringGetAsync(key);
    }
}
  </pre>

  <h3 style="color:#0284c7;">📚 Common Usage Patterns</h3>
  <ul>
    <li><strong>String caching:</strong> Simple key-value pairs</li>
    <li><strong>Hash sets:</strong> Store objects as hashes for partial updates</li>
    <li><strong>Pub/Sub:</strong> Messaging between services</li>
    <li><strong>Transactions and Lua scripting:</strong> Atomic multi-operations</li>
  </ul>

  <h3 style="color:#0369a1;">⚠️ Tips & Best Practices</h3>
  <ul>
    <li>🧩 Reuse <code>ConnectionMultiplexer</code> instances instead of creating per request</li>
    <li>🔄 Prefer async methods to avoid thread blocking</li>
    <li>🔑 Use meaningful, unique cache keys with namespaces/prefixes</li>
    <li>🧪 Handle connection failures gracefully with retry policies</li>
    <li>🔐 Secure Redis with authentication and TLS especially in production</li>
  </ul>

  <h3 style="color:#0284c7;">🔗 Learn More</h3>
  <ul>
    <li><a href="https://stackexchange.github.io/StackExchange.Redis/" target="_blank" style="color:#0284c7;">Official StackExchange.Redis Documentation</a></li>
    <li><a href="https://learn.microsoft.com/en-us/aspnet/core/performance/caching/distributed#redis-distributed-cache" target="_blank" style="color:#0284c7;">MS Docs: Redis Distributed Cache</a></li>
  </ul>
</div>
`,
                  type: "must-know"
                },
                {
                  id: "easycaching",
                  title: "EasyCaching",
                  description: `<div style="font-family:sans-serif; line-height:1.6; background:#fef6e4; padding:2rem; border-radius:1rem; border:2px solid #f59e0b; box-shadow:0 6px 20px rgba(245,158,11,0.2)">
  <h2 style="color:#b45309;">⚡ EasyCaching for .NET</h2>
  <p>
    <strong>EasyCaching</strong> is a lightweight, extensible caching library for .NET that supports multiple caching providers with a unified API. It simplifies working with in-memory, distributed caches like Redis, Memcached, and more.
  </p>

  <h3 style="color:#d97706;">🔑 Key Features</h3>
  <ul>
    <li>✅ Supports multiple cache providers (Memory, Redis, Memcached, SQLite, In-Memory)</li>
    <li>🔄 Unified, easy-to-use API for all caching operations</li>
    <li>⚙️ Supports cache expiration, sliding expiration, and cache eviction policies</li>
    <li>🧩 Supports caching serialization/deserialization automatically</li>
    <li>💡 Supports caching layer abstraction for flexible app design</li>
  </ul>

  <h3 style="color:#b45309;">🚀 Quick Setup in ASP.NET Core</h3>
  <pre style="background:#fef3c7; padding:1rem; border-radius:0.75rem; font-family:monospace; overflow-x:auto;">
// 1. Install NuGet package:
// dotnet add package EasyCaching.Core
// dotnet add package EasyCaching.InMemory
// (Or EasyCaching.Redis, etc.)

// 2. Configure in Program.cs
builder.Services.AddEasyCaching(options =>
{
    // Use In-Memory cache
    options.UseInMemory("default");
});

// 3. Inject and use in your service/controller
public class ProductService
{
    private readonly IEasyCachingProvider _cache;

    public ProductService(IEasyCachingProviderFactory factory)
    {
        _cache = factory.GetCachingProvider("default");
    }

    public async Task<string> GetProductAsync(int id)
    {
        var cacheKey = $"product_{id}";
        var cached = await _cache.GetAsync<string>(cacheKey);

        if (cached.HasValue)
            return cached.Value;

        var product = await FetchFromDatabase(id);

        await _cache.SetAsync(cacheKey, product, TimeSpan.FromMinutes(10));
        return product;
    }
}
  </pre>

  <h3 style="color:#d97706;">🎯 Why Choose EasyCaching?</h3>
  <ul>
    <li>🔄 Switch cache providers without changing your code</li>
    <li>🛠️ Simplifies cache management with consistent API</li>
    <li>💾 Automatic serialization of complex types</li>
    <li>📦 Supports distributed and in-memory caching transparently</li>
  </ul>

  <h3 style="color:#b45309;">✅ Best Practices</h3>
  <ul>
    <li>🔑 Use clear, unique cache keys and consistent naming</li>
    <li>🧹 Set appropriate expiration policies to avoid stale data</li>
    <li>🔄 Handle cache misses gracefully by fallback to source</li>
    <li>🧪 Test caching behavior to ensure expected performance</li>
  </ul>

  <h3 style="color:#d97706;">📚 Learn More</h3>
  <ul>
    <li><a href="https://github.com/dotnetcore/EasyCaching" target="_blank" style="color:#b45309;">EasyCaching GitHub Repository</a></li>
    <li><a href="https://docs.microsoft.com/en-us/aspnet/core/performance/caching/" target="_blank" style="color:#b45309;">MS Docs: Caching in ASP.NET Core</a></li>
  </ul>
</div>
`,
                  type: "good-to-know"
                }
              ]
            },
            {
              id: "memcached",
              title: "Memcached",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#fef2f2; padding:2rem; border-radius:1rem; border:2px solid #dc2626; box-shadow:0 6px 20px rgba(220,38,38,0.2)">
  <h2 style="color:#b91c1c;">🔥 Memcached in ASP.NET Core</h2>
  <p>
    <strong>Memcached</strong> is a high-performance, distributed memory caching system designed to speed up dynamic web applications by alleviating database load.
  </p>

  <h3 style="color:#ef4444;">⚡ Key Features</h3>
  <ul>
    <li>✅ Simple key-value in-memory cache</li>
    <li>🔄 Distributed caching for scalability</li>
    <li>⚡ Extremely fast reads and writes</li>
    <li>🧩 Supports large cache sizes with efficient memory usage</li>
    <li>🔒 No built-in persistence (cache is volatile)</li>
  </ul>

  <h3 style="color:#b91c1c;">🚀 Setup & Integration</h3>
  <pre style="background:#fee2e2; padding:1rem; border-radius:0.75rem; font-family:monospace; overflow-x:auto;">
// 1. Install NuGet package:
// dotnet add package EnyimMemcachedCore

// 2. Configure in Program.cs
builder.Services.AddEnyimMemcached(options =>
{
    options.AddServer("localhost", 11211);
});

// 3. Inject and use IMemcachedClient
public class CacheService
{
    private readonly IMemcachedClient _memcachedClient;

    public CacheService(IMemcachedClient memcachedClient)
    {
        _memcachedClient = memcachedClient;
    }

    public async Task SetCacheAsync(string key, string value)
    {
        await _memcachedClient.SetAsync(key, value, TimeSpan.FromMinutes(10));
    }

    public async Task<string?> GetCacheAsync(string key)
    {
        return await _memcachedClient.GetValueAsync<string>(key);
    }
}
  </pre>

  <h3 style="color:#ef4444;">📚 Common Usage Patterns</h3>
  <ul>
    <li><strong>Session storage</strong> to reduce DB hits</li>
    <li><strong>API response caching</strong> to improve performance</li>
    <li><strong>Expensive computation caching</strong></li>
  </ul>

  <h3 style="color:#b91c1c;">⚠️ Best Practices</h3>
  <ul>
    <li>🔑 Use meaningful and unique cache keys</li>
    <li>🕒 Set appropriate expiration to avoid stale data</li>
    <li>⚠️ Be aware that data is volatile and lost on restart</li>
    <li>💡 Use fallback strategies for cache misses</li>
    <li>🔒 Secure access to Memcached servers especially in production</li>
  </ul>

  <h3 style="color:#ef4444;">🔗 Learn More</h3>
  <ul>
    <li><a href="https://memcached.org/" target="_blank" style="color:#b91c1c;">Official Memcached Site</a></li>
    <li><a href="https://github.com/enyim/EnyimMemcached" target="_blank" style="color:#b91c1c;">EnyimMemcached GitHub</a></li>
    <li><a href="https://docs.microsoft.com/en-us/aspnet/core/performance/caching/distributed#distributed-memory-cache-using-memcached" target="_blank" style="color:#b91c1c;">MS Docs: Distributed Cache with Memcached</a></li>
  </ul>
</div>
`,
              type: "optional"
            }
          ]
        },
        {
          id: "application-level-caching",
          title: "Application-Level",
          type: "good-to-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#e0f2fe; padding:2rem; border-radius:1rem; border:2px solid #0284c7; box-shadow:0 6px 20px rgba(2,132,199,0.2)">
  <h2 style="color:#0369a1;">⚡ Application-Level Caching in ASP.NET Core</h2>
  <p>
    <strong>Application-Level Caching</strong> stores data within the application process, typically using in-memory cache. It is the fastest caching layer, ideal for caching data that can be shared across requests and users on the same server instance.
  </p>

  <h3 style="color:#0284c7;">🔑 Key Characteristics</h3>
  <ul>
    <li>🧠 Stored in server’s memory (e.g., <code>IMemoryCache</code>)</li>
    <li>⚡ Very fast access time</li>
    <li>📉 Not shared between multiple servers (no distributed support)</li>
    <li>❗ Data lost if application restarts or recycles</li>
  </ul>

  <h3 style="color:#0369a1;">🚀 How to Use in ASP.NET Core</h3>
  <pre style="background:#bae6fd; padding:1rem; border-radius:0.75rem; font-family:monospace; overflow-x:auto;">
// 1. Register MemoryCache in Program.cs (usually done by default)
builder.Services.AddMemoryCache();

// 2. Inject IMemoryCache
public class WeatherService
{
    private readonly IMemoryCache _cache;

    public WeatherService(IMemoryCache cache)
    {
        _cache = cache;
    }

    public WeatherForecast GetForecast(int day)
    {
        string cacheKey = $"weather_forecast_{day}";

        if (!_cache.TryGetValue(cacheKey, out WeatherForecast forecast))
        {
            // Simulate data fetching
            forecast = FetchForecastFromApi(day);

            // Cache for 30 minutes with sliding expiration
            var cacheOptions = new MemoryCacheEntryOptions()
                .SetSlidingExpiration(TimeSpan.FromMinutes(30));

            _cache.Set(cacheKey, forecast, cacheOptions);
        }

        return forecast;
    }

    private WeatherForecast FetchForecastFromApi(int day)
    {
        // Simulate API call
        return new WeatherForecast
        {
            Day = day,
            TemperatureC = 25 + day,
            Summary = "Sunny"
        };
    }
}
  </pre>

  <h3 style="color:#0284c7;">🎯 Best Practices</h3>
  <ul>
    <li>🔑 Use meaningful and unique cache keys</li>
    <li>🕒 Set appropriate expiration to avoid stale or memory-heavy caches</li>
    <li>💾 Cache only data safe to keep in-memory and share across requests</li>
    <li>🔄 Handle cache misses gracefully by fallback to the source</li>
    <li>⚠️ Remember cache is per server instance; not suitable for load-balanced scenarios without distributed cache</li>
  </ul>

  <h3 style="color:#0369a1;">📚 When to Use Application-Level Caching?</h3>
  <ul>
    <li>⚡ Fast, repeated access to non-sensitive data</li>
    <li>🖥️ Single server applications or development/testing</li>
    <li>🧪 Caching data that changes infrequently within app lifecycle</li>
  </ul>

  <h3 style="color:#0284c7;">📖 Learn More</h3>
  <ul>
    <li><a href="https://docs.microsoft.com/en-us/aspnet/core/performance/caching/memory" target="_blank" style="color:#0369a1;">Microsoft Docs: In-Memory Caching</a></li>
    <li><a href="https://docs.microsoft.com/en-us/aspnet/core/performance/caching/" target="_blank" style="color:#0369a1;">ASP.NET Core Caching Overview</a></li>
  </ul>
</div>
`,
          children: [
            {
              id: "response-caching",
              title: "Response Caching",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)">
  <h2 style="color:#2563eb;">🚀 Response Caching in ASP.NET Core</h2>
  <p>
    <strong>Response Caching</strong> improves performance by caching HTTP responses and serving them for subsequent identical requests, reducing server processing and latency.
  </p>

  <h3 style="color:#3b82f6;">🔑 Key Concepts</h3>
  <ul>
    <li>📦 Caches full HTTP responses (headers + body)</li>
    <li>⏳ Responses cached based on <code>Cache-Control</code> headers and other criteria</li>
    <li>⚡ Works best for GET requests with idempotent responses</li>
    <li>🚫 Does not cache POST, PUT, DELETE by default</li>
    <li>🌐 Can cache on server or client (proxy/CDN)</li>
  </ul>

  <h3 style="color:#2563eb;">⚙️ How to Enable Response Caching</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; font-family:monospace; overflow-x:auto;">
// 1. Register middleware in Program.cs
builder.Services.AddResponseCaching();

app.UseResponseCaching();

// 2. Apply ResponseCache attribute on controller/action
[ResponseCache(Duration = 60, Location = ResponseCacheLocation.Any, NoStore = false)]
public IActionResult GetProducts()
{
    // Expensive operation here
    return Ok(new { Product = "Laptop", Price = 1200 });
}
  </pre>

  <h3 style="color:#3b82f6;">📋 ResponseCache Attribute Options</h3>
  <ul>
    <li><code>Duration</code>: Cache duration in seconds</li>
    <li><code>Location</code>: <code>Any</code> (client or proxy), <code>Client</code>, or <code>None</code></li>
    <li><code>NoStore</code>: If true, response is not stored</li>
    <li><code>VaryByHeader</code>: Cache variation based on specified HTTP headers</li>
    <li><code>VaryByQueryKeys</code>: Cache variation by query string keys (ASP.NET Core 7+)</li>
  </ul>

  <h3 style="color:#2563eb;">🔧 Example Usage</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; font-family:monospace; overflow-x:auto;">
[ResponseCache(Duration = 120, Location = ResponseCacheLocation.Client)]
public IActionResult GetWeather()
{
    var weatherData = FetchWeatherData();
    return Ok(weatherData);
}
  </pre>

  <h3 style="color:#3b82f6;">⚠️ Best Practices</h3>
  <ul>
    <li>✔️ Cache only safe, idempotent GET responses</li>
    <li>✔️ Use appropriate <code>Duration</code> to balance freshness and performance</li>
    <li>✔️ Leverage <code>VaryByHeader</code> or <code>VaryByQueryKeys</code> for user-specific content</li>
    <li>✔️ Be careful with sensitive data — avoid caching private or secure info</li>
    <li>✔️ Use middleware ordering correctly: <code>UseResponseCaching()</code> must be before <code>UseEndpoints()</code></li>
  </ul>

  <h3 style="color:#2563eb;">📚 Learn More</h3>
  <ul>
    <li><a href="https://docs.microsoft.com/en-us/aspnet/core/performance/caching/response" target="_blank" style="color:#2563eb;">Microsoft Docs: Response Caching Middleware</a></li>
    <li><a href="https://andrewlock.net/using-response-caching-in-asp-net-core-to-improve-performance/" target="_blank" style="color:#2563eb;">Andrew Lock: Using Response Caching in ASP.NET Core</a></li>
  </ul>
</div>
`,
              type: "good-to-know",
              children: [
                {
                  id: "builtin",
                  title: "Build in",
                  description: `<div style="font-family:sans-serif; line-height:1.6; background:#fef3c7; padding:2rem; border-radius:1rem; border:2px solid #fbbf24; box-shadow:0 6px 20px rgba(251,191,36,0.2)">
  <h2 style="color:#b45309;">⚙️ Built-in Response Caching in ASP.NET Core</h2>
  <p>
    ASP.NET Core provides a <strong>built-in Response Caching Middleware</strong> that caches HTTP responses to improve app performance by reducing server load and latency.
  </p>

  <h3 style="color:#d97706;">🔍 How It Works</h3>
  <ul>
    <li>✔️ Caches full HTTP responses (headers + body) in memory</li>
    <li>✔️ Uses standard HTTP <code>Cache-Control</code> headers to determine cacheability</li>
    <li>✔️ Works only for GET and HEAD requests</li>
    <li>✔️ Honors directives like <code>no-cache</code>, <code>private</code>, <code>no-store</code></li>
    <li>✔️ Cache duration set via <code>ResponseCache</code> attribute or headers</li>
  </ul>

  <h3 style="color:#b45309;">🚀 How to Enable Built-in Response Caching</h3>
  <pre style="background:#fef3c7; padding:1rem; border-radius:0.75rem; font-family:monospace; overflow-x:auto;">
// 1. Register ResponseCaching middleware in Program.cs
builder.Services.AddResponseCaching();

app.UseResponseCaching();

// 2. Use [ResponseCache] attribute on controller/actions
[ResponseCache(Duration = 60, Location = ResponseCacheLocation.Any)]
public IActionResult GetProducts()
{
    // Simulate data fetching
    return Ok(new { Product = "Smartphone", Price = 799 });
}
  </pre>

  <h3 style="color:#d97706;">⚙️ ResponseCache Attribute Parameters</h3>
  <ul>
    <li><code>Duration</code>: Cache duration in seconds</li>
    <li><code>Location</code>: Where to cache (<code>Any</code>, <code>Client</code>, or <code>None</code>)</li>
    <li><code>NoStore</code>: Prevent storing cache if <code>true</code></li>
    <li><code>VaryByHeader</code>: Vary cache by specific headers</li>
    <li><code>VaryByQueryKeys</code>: Vary cache by query string keys (ASP.NET Core 7+)</li>
  </ul>

  <h3 style="color:#b45309;">⚠️ Best Practices</h3>
  <ul>
    <li>✅ Cache only safe and idempotent GET/HEAD requests</li>
    <li>✅ Avoid caching sensitive or user-specific data unless varied by header/query</li>
    <li>✅ Use appropriate duration to balance freshness and performance</li>
    <li>✅ Ensure middleware order: <code>UseResponseCaching()</code> must be before <code>UseRouting()</code> and <code>UseEndpoints()</code></li>
  </ul>

  <h3 style="color:#d97706;">📚 Learn More</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/aspnet/core/performance/caching/response" target="_blank" style="color:#b45309;">Microsoft Docs: Response Caching Middleware</a></li>
    <li><a href="https://andrewlock.net/using-response-caching-in-asp-net-core-to-improve-performance/" target="_blank" style="color:#b45309;">Andrew Lock: Using Response Caching in ASP.NET Core</a></li>
  </ul>
</div>`,
                  type: "must-know"
                },
                {
                  id: "marvin-cache-headers",
                  title: "Marvin.Cache.Headers",
                  description: `<div style="font-family:sans-serif; line-height:1.6; background:#eef6f9; padding:2rem; border-radius:1rem; border:2px solid #0288d1; box-shadow:0 6px 20px rgba(2,136,209,0.2)">
  <h2 style="color:#01579b;">⚡ Marvin.Cache.Headers in ASP.NET Core</h2>
  <p>
    <strong>Marvin.Cache.Headers</strong> is a powerful open-source NuGet package that extends ASP.NET Core's built-in response caching capabilities by providing advanced HTTP cache header management.
  </p>

  <h3 style="color:#0288d1;">🔑 Key Features</h3>
  <ul>
    <li>🛠 Fine-grained control over <code>Cache-Control</code>, <code>Expires</code>, and <code>Vary</code> headers</li>
    <li>🔄 Supports validation and expiration caching</li>
    <li>⚡ Easily configure caching policies per route, controller, or globally</li>
    <li>🎯 Helps implement HTTP caching best practices without manual header coding</li>
    <li>🧩 Supports cache revalidation using ETags and Last-Modified headers</li>
  </ul>

  <h3 style="color:#01579b;">🚀 Getting Started</h3>
  <pre style="background:#e1f5fe; padding:1rem; border-radius:0.75rem; font-family:monospace; overflow-x:auto;">
// 1. Install package via NuGet
Install-Package Marvin.Cache.Headers

// 2. Register in Program.cs
builder.Services.AddHttpCacheHeaders(
    expirationModelOptions =>
    {
        expirationModelOptions.MaxAge = 60; // seconds
        expirationModelOptions.CacheLocation = Marvin.Cache.Headers.CacheLocation.Public;
    },
    validationModelOptions =>
    {
        validationModelOptions.MustRevalidate = true;
    });

// 3. Add middleware
app.UseHttpCacheHeaders();
  </pre>

  <h3 style="color:#0288d1;">🔧 Example Usage</h3>
  <pre style="background:#e1f5fe; padding:1rem; border-radius:0.75rem; font-family:monospace; overflow-x:auto;">
[HttpGet]
public IActionResult GetData()
{
    // Data retrieval logic here
    return Ok(new { Message = "Hello from Marvin.Cache.Headers!" });
}
  </pre>

  <h3 style="color:#01579b;">⚠️ Best Practices</h3>
  <ul>
    <li>✔️ Use <code>MaxAge</code> and <code>CacheLocation</code> wisely to optimize cacheability</li>
    <li>✔️ Implement validation caching (ETag, Last-Modified) for efficient revalidation</li>
    <li>✔️ Avoid caching sensitive data publicly; use <code>CacheLocation.Private</code> if needed</li>
    <li>✔️ Combine with built-in response caching for robust caching strategy</li>
    <li>✔️ Keep middleware order correct: <code>UseHttpCacheHeaders()</code> before <code>UseEndpoints()</code></li>
  </ul>

  <h3 style="color:#0288d1;">📚 Further Reading</h3>
  <ul>
    <li><a href="https://github.com/marvinpinto/aspnetcore-cache-headers" target="_blank" style="color:#01579b;">GitHub - Marvin.Cache.Headers</a></li>
    <li><a href="https://andrewlock.net/using-marvin-cache-headers-in-asp-net-core-to-control-http-caching-headers/" target="_blank" style="color:#01579b;">Andrew Lock: Using Marvin.Cache.Headers</a></li>
  </ul>
</div>`,
                  type: "good-to-know"
                },
              ]
            },
            {
              id: "output-caching",
              title: "Output Caching",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#e0f7fa; padding:2rem; border-radius:1rem; border:2px solid #00838f; box-shadow:0 6px 20px rgba(0,131,143,0.2)">
  <h2 style="color:#006064;">⚡ ASP.NET Core Output Caching</h2>
  <p>
    <strong>Output Caching</strong> improves performance by caching the full response of HTTP requests, allowing faster subsequent responses without executing the controller logic again.
  </p>

  <h3 style="color:#00838f;">🔍 How Output Caching Works</h3>
  <ul>
    <li>✔ Caches the complete HTTP response (body + headers)</li>
    <li>✔ Supports caching for GET and HEAD requests</li>
    <li>✔ Honors cache duration, vary-by-header, vary-by-query parameters</li>
    <li>✔ Reduces server load and latency by serving cached responses</li>
  </ul>

  <h3 style="color:#006064;">🚀 How to Enable Output Caching</h3>
  <pre style="background:#b2ebf2; padding:1rem; border-radius:0.75rem; font-family:monospace; overflow-x:auto;">
// 1. Register the output caching services in Program.cs
builder.Services.AddOutputCache();

// 2. Add Output Caching middleware
app.UseOutputCache();

// 3. Use the [OutputCache] attribute on controller/actions
[OutputCache(Duration = 60, VaryByQueryKeys = new[] { "id" })]
public IActionResult GetProduct(int id)
{
    // Simulate data fetching
    return Ok(new { Id = id, Name = "Laptop", Price = 1200 });
}
  </pre>

  <h3 style="color:#00838f;">⚙️ Key OutputCache Attribute Parameters</h3>
  <ul>
    <li><code>Duration</code>: Cache duration in seconds</li>
    <li><code>VaryByQueryKeys</code>: Cache variation by query parameters</li>
    <li><code>VaryByHeader</code>: Cache variation by HTTP headers</li>
    <li><code>CacheKeyPrefix</code>: Custom prefix to cache keys</li>
  </ul>

  <h3 style="color:#006064;">⚠️ Best Practices</h3>
  <ul>
    <li>✅ Cache safe, idempotent requests (GET, HEAD) only</li>
    <li>✅ Use <code>VaryByQueryKeys</code> and <code>VaryByHeader</code> to avoid serving wrong cached content</li>
    <li>✅ Be cautious when caching personalized or sensitive content</li>
    <li>✅ Ensure middleware order: <code>UseOutputCache()</code> before routing and endpoints</li>
  </ul>

  <h3 style="color:#00838f;">📚 Learn More</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/aspnet/core/performance/caching/output" target="_blank" style="color:#006064;">Microsoft Docs: Output Caching Middleware</a></li>
    <li><a href="https://andrewlock.net/introduction-to-output-caching-in-asp-net-core-7/" target="_blank" style="color:#006064;">Andrew Lock: Introduction to Output Caching</a></li>
  </ul>
</div>
`,
              type: "good-to-know"
            },
            {
              id: "ef-2nd-level-cache",
              title: "Entity Framework 2nd Level Cache",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#fff8e1; padding:2rem; border-radius:1rem; border:2px solid #fbc02d; box-shadow:0 6px 20px rgba(251,192,45,0.2)">
  <h2 style="color:#f57f17;">⚡ EF Core 2nd Level Cache</h2>
  <p>
    <strong>EF Core 2nd Level Cache</strong> is an extension that caches query results beyond the scope of a single <code>DbContext</code> instance, reducing database hits and improving app performance.
  </p>

  <h3 style="color:#fbc02d;">🔍 What is 2nd Level Cache?</h3>
  <ul>
    <li>1st Level Cache: Scoped to <code>DbContext</code> lifetime, automatically tracks entities</li>
    <li>2nd Level Cache: Shared cache across multiple <code>DbContext</code> instances or requests</li>
    <li>Helps prevent redundant queries for identical data in different contexts</li>
  </ul>

  <h3 style="color:#f57f17;">🚀 How to Use EF Core 2nd Level Cache</h3>
  <pre style="background:#fffde7; padding:1rem; border-radius:0.75rem; font-family:monospace; overflow-x:auto;">
// 1. Install NuGet package
Install-Package EFCoreSecondLevelCacheInterceptor

// 2. Register services in Program.cs
builder.Services.AddEFCoreSecondLevelCache(options =>
    options.UseMemoryCacheProvider()
           .DisableLogging(true)
           .CacheAllQueries(TimeSpan.FromMinutes(10))
);

// 3. Add interceptor to DbContext
builder.Services.AddDbContext&lt;AppDbContext&gt;(options =>
    options.UseSqlServer(connectionString)
           .AddInterceptors(builder.Services.BuildServiceProvider().GetRequiredService&lt;SecondLevelCacheInterceptor&gt;())
);
  </pre>

  <h3 style="color:#fbc02d;">🧩 Usage Example</h3>
  <pre style="background:#fffde7; padding:1rem; border-radius:0.75rem; font-family:monospace; overflow-x:auto;">
// Query with 2nd level cache enabled
var products = await dbContext.Products
                              .Cacheable()
                              .ToListAsync();
  </pre>

  <h3 style="color:#f57f17;">⚠️ Best Practices</h3>
  <ul>
    <li>✔️ Use <code>Cacheable()</code> extension method only on read-heavy queries</li>
    <li>✔️ Avoid caching queries with frequently changing data unless necessary</li>
    <li>✔️ Use cache expiration or invalidation strategies to keep data fresh</li>
    <li>✔️ Combine with distributed caching for scalable apps</li>
    <li>✔️ Monitor cache hit/miss rates and tune accordingly</li>
  </ul>

  <h3 style="color:#fbc02d;">📚 Further Reading</h3>
  <ul>
    <li><a href="https://github.com/VahidN/EFCoreSecondLevelCacheInterceptor" target="_blank" style="color:#f57f17;">GitHub - EFCoreSecondLevelCacheInterceptor</a></li>
    <li><a href="https://andrewlock.net/introducing-ef-core-second-level-cache-interceptor/" target="_blank" style="color:#f57f17;">Andrew Lock Blog: EF Core 2nd Level Cache</a></li>
  </ul>
</div>
`,
              type: "good-to-know"
            }
          ]
        },
      ]
    },
    {
      id: "log-frameworks",
      title: "Log Frameworks",
      direction: "left",
      description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>📝 Log Frameworks</h2>
  <p><strong>Log frameworks</strong> are essential for recording and managing application runtime behavior. They help developers track events, diagnose issues, and monitor system health through structured, leveled logs.</p>

  <h3 style='color:#10b981'>🧱 Core Features</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Log levels:</strong> Trace, Debug, Info, Warning, Error, Fatal.</li>
    <li><strong>Output targets:</strong> Console, files, databases, cloud services.</li>
    <li><strong>Asynchronous logging:</strong> Improve performance and responsiveness.</li>
    <li><strong>Structured logging:</strong> Use key-value pairs (e.g., JSON) for easier parsing.</li>
    <li><strong>Filtering and enrichment:</strong> Customize logs with context (e.g., request ID).</li>
  </ul>

  <h3 style='color:#f59e0b'>🚀 Popular Logging Frameworks</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Serilog (.NET):</strong> Rich structured logging with sinks and enrichers.</li>
    <li><strong>Log4j (Java):</strong> Widely used, configurable with XML/YAML.</li>
    <li><strong>SLF4J (Java):</strong> Logging façade that works with Logback, Log4j.</li>
    <li><strong>Winston (Node.js):</strong> Powerful with transports, formats, and metadata.</li>
    <li><strong>Python logging:</strong> Built-in standard library support for flexible configs.</li>
    <li><strong>loguru (Python):</strong> Simpler and friendlier than built-in logging.</li>
    <li><strong>Go log / zap:</strong> Lightweight and performant for Go apps.</li>
  </ul>

  <h3 style='color:#8b5cf6'>📦 Use Cases</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Debugging and error tracking in dev/staging environments.</li>
    <li>Audit logs for security and compliance.</li>
    <li>Performance monitoring via request/response times.</li>
    <li>Cloud-native observability and integration with ELK, Datadog, etc.</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li><strong>Don’t log sensitive data:</strong> Mask or omit credentials and PII.</li>
    <li><strong>Use correlation IDs:</strong> Link related logs across services.</li>
    <li><strong>Set appropriate log levels:</strong> Avoid flooding production logs with debug output.</li>
    <li><strong>Centralize logs:</strong> Use a log aggregator (e.g., Fluentd, Logstash).</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://serilog.net/' target='_blank' style='color:#3b82f6'>Serilog Documentation</a></li>
    <li><a href='https://logging.apache.org/log4j/2.x/' target='_blank' style='color:#3b82f6'>Log4j 2 Docs</a></li>
    <li><a href='https://www.slf4j.org/manual.html' target='_blank' style='color:#3b82f6'>SLF4J Guide</a></li>
    <li><a href='https://github.com/winstonjs/winston' target='_blank' style='color:#3b82f6'>Winston GitHub</a></li>
    <li><a href='https://docs.python.org/3/library/logging.html' target='_blank' style='color:#3b82f6'>Python Logging Module</a></li>
  </ul>
</div>
`,
      children: [
        {
          id: "serilog", title: "Serilog", type: "must-know",
          description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width:700px; margin:auto; padding:1.8rem; background:#f0f8ff; border-radius:12px; border:1.5px solid #3a86ff; box-shadow: 0 4px 15px rgba(58, 134, 255, 0.2); color:#0d1b2a;">
  <h2 style="color:#3a86ff; margin-bottom:0.6rem;">📝 Serilog - Structured Logging for .NET</h2>
  <p style="font-size:1rem; line-height:1.5; margin-bottom:1.2rem;">
    Serilog is a modern, flexible logging framework that supports structured logging, enabling rich and queryable log data beyond simple text.
  </p>

  <h3 style="color:#1e3a8a; margin-bottom:0.4rem;">Key Features</h3>
  <ul style="list-style-type: none; padding-left:0; margin-bottom:1.2rem; color:#264653;">
    <li>• Structured logs with key-value pairs</li>
    <li>• Multiple sinks (Console, File, Seq, Elasticsearch, etc.)</li>
    <li>• High performance with async logging support</li>
    <li>• Seamless ASP.NET Core integration</li>
    <li>• Rich filtering and enrichment</li>
  </ul>

  <h3 style="color:#1e3a8a; margin-bottom:0.4rem;">Setup Example</h3>
  <pre style="background:#e0ecff; padding:1rem; border-radius:8px; font-family: 'Courier New', Courier, monospace; font-size:0.9rem; overflow-x:auto; margin-bottom:1.2rem;">
// Install packages
Install-Package Serilog.AspNetCore
Install-Package Serilog.Sinks.Console

// Program.cs
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();

var builder = WebApplication.CreateBuilder(args);
builder.Host.UseSerilog();

var app = builder.Build();
app.MapGet("/", () => "Hello Serilog!");
app.Run();
  </pre>

  <h3 style="color:#1e3a8a; margin-bottom:0.4rem;">Usage in Controller</h3>
  <pre style="background:#e0ecff; padding:1rem; border-radius:8px; font-family: 'Courier New', Courier, monospace; font-size:0.9rem; overflow-x:auto; margin-bottom:1.2rem;">
public class HomeController : Controller
{
    private readonly ILogger&lt;HomeController&gt; _logger;

    public HomeController(ILogger&lt;HomeController&gt; logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        _logger.LogInformation("User accessed home at {Time}", DateTime.UtcNow);
        return View();
    }
}
  </pre>

  <h3 style="color:#1e3a8a; margin-bottom:0.4rem;">Best Practices</h3>
  <ul style="list-style-type: disc; padding-left: 20px; margin-bottom:0;">
    <li>Avoid logging sensitive info</li>
    <li>Use structured logging for better queryability</li>
    <li>Choose sinks appropriate to environment</li>
    <li>Use enrichers for context (e.g. <code>Enrich.FromLogContext()</code>)</li>
    <li>Prefer async sinks to minimize performance impact</li>
  </ul>
</div>
` },
        {
          id: "nlog", title: "NLog", type: "optional",
          description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width:700px; margin:auto; padding:2rem; background:#fff8e1; border-radius:12px; border:1.5px solid #fbc02d; box-shadow: 0 4px 15px rgba(251, 192, 45, 0.3); color:#5d4037;">
  <h2 style="color:#f9a825; margin-bottom:0.6rem;">📝 NLog - Flexible Logging for .NET</h2>
  <p style="font-size:1rem; line-height:1.5; margin-bottom:1.2rem;">
    <strong>NLog</strong> is a powerful and flexible logging framework for .NET applications. It supports various log targets (called “targets”) and advanced routing of log messages via rules.
  </p>

  <h3 style="color:#fbc02d; margin-bottom:0.4rem;">Key Features</h3>
  <ul style="list-style-type: none; padding-left:0; margin-bottom:1.2rem; color:#6d4c41;">
    <li>• Multiple output targets (File, Console, Database, Email, Event Log, etc.)</li>
    <li>• Highly configurable via XML or fluent API</li>
    <li>• Log filtering and routing with flexible rules</li>
    <li>• Async and buffered logging for performance</li>
    <li>• Supports structured logging with message templates</li>
  </ul>

  <h3 style="color:#fbc02d; margin-bottom:0.4rem;">Setup Example</h3>
  <pre style="background:#fff3e0; padding:1rem; border-radius:8px; font-family: 'Courier New', Courier, monospace; font-size:0.9rem; overflow-x:auto; margin-bottom:1.2rem;">
// Install NuGet package
Install-Package NLog.Web.AspNetCore

// nlog.config (XML configuration)
&lt;nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"&gt;
  &lt;targets&gt;
    &lt;target xsi:type="File" name="file" fileName="logs/logfile.txt" layout="{longdate} | {level:uppercase=true} | {message} {exception}" /&gt;
    &lt;target xsi:type="Console" name="console" layout="{longdate} | {level} | {message}" /&gt;
  &lt;/targets&gt;

  &lt;rules&gt;
    &lt;logger name="*" minlevel="Info" writeTo="file,console" /&gt;
  &lt;/rules&gt;
&lt;/nlog&gt;

// Program.cs
var logger = NLog.LogManager.Setup()
  .LoadConfigurationFromFile("nlog.config")
  .GetCurrentClassLogger();

logger.Info("Application started");
  </pre>

  <h3 style="color:#fbc02d; margin-bottom:0.4rem;">Example Usage in Code</h3>
  <pre style="background:#fff3e0; padding:1rem; border-radius:8px; font-family: 'Courier New', Courier, monospace; font-size:0.9rem; overflow-x:auto; margin-bottom:1.2rem;">
public class HomeController : Controller
{
    private static readonly NLog.Logger Logger = NLog.LogManager.GetCurrentClassLogger();

    public IActionResult Index()
    {
        Logger.Info("User visited the Index page at {0}", DateTime.UtcNow);
        return View();
    }
}
  </pre>

  <h3 style="color:#fbc02d; margin-bottom:0.4rem;">Best Practices</h3>
  <ul style="list-style-type: disc; padding-left: 20px; margin-bottom:0;">
    <li>✔️ Use async and buffered targets to reduce IO blocking</li>
    <li>✔️ Separate log configuration from code using <code>nlog.config</code> or fluent config</li>
    <li>✔️ Avoid logging sensitive information like passwords or personal data</li>
    <li>✔️ Use meaningful log levels: Trace, Debug, Info, Warn, Error, Fatal</li>
    <li>✔️ Use structured logging (message templates) for better query and analysis</li>
    <li>✔️ Regularly archive or clean old log files to manage disk space</li>
  </ul>

  <h3 style="color:#fbc02d;">📚 Further Resources</h3>
  <ul>
    <li><a href="https://nlog-project.org/" target="_blank" style="color:#5d4037;">Official NLog Website</a></li>
    <li><a href="https://github.com/NLog/NLog.Web" target="_blank" style="color:#5d4037;">NLog.Web GitHub Repo</a></li>
    <li><a href="https://docs.nlog-project.org/en/latest/index.html" target="_blank" style="color:#5d4037;">NLog Documentation</a></li>
  </ul>
</div>
`  },
      ]
    },
    {
      id: "real-time-communication",
      title: "Real Time Communication",
      "type": "good-to-know",
      direction: "left",
      description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:1.5rem; border-radius:1rem; border:1px solid #34d399; box-shadow:0 4px 15px rgba(52, 211, 153, 0.3)">
  <h2 style="color:#10b981">📡 What is Real-Time Communication?</h2>
  <p><strong>Real-Time Communication (RTC)</strong> refers to technologies and systems that enable data exchange between clients and servers instantly — without waiting for the user to refresh the page or send a request explicitly.</p>

  <h3 style="color:#34d399">⚡ Why It Matters</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>Enables dynamic, interactive user experiences (e.g., chats, dashboards)</li>
    <li>Reduces latency by pushing data from server to client</li>
    <li>Improves responsiveness in collaborative and event-driven apps</li>
    <li>Used in messaging, gaming, finance, telemetry, monitoring, and more</li>
  </ul>

  <h3 style="color:#10b981">🔌 How Real-Time Works</h3>
  <ul style="list-style:circle; padding-left:1.2rem; color:#064e3b">
    <li>Client and server maintain a persistent connection</li>
    <li>Updates can be pushed from the server without polling</li>
    <li>Technologies like <code>WebSocket</code>, <code>SignalR</code>, <code>WebRTC</code> enable real-time flows</li>
    <li>Messages often sent in small payloads, sometimes using Pub/Sub architecture</li>
  </ul>

  <h3 style="color:#34d399">🧩 Real-Time Technologies</h3>
  <ul>
    <li><strong>WebSockets:</strong> Low-level bi-directional communication over a single TCP connection</li>
    <li><strong>SignalR:</strong> Abstraction over WebSockets (used in ASP.NET Core apps)</li>
    <li><strong>WebRTC:</strong> Peer-to-peer audio, video, and data (used in Zoom, Meet, etc.)</li>
    <li><strong>gRPC Streaming:</strong> Efficient server-client streaming over HTTP/2</li>
    <li><strong>Firebase Realtime DB / PubNub:</strong> Serverless real-time messaging</li>
  </ul>

  <h3 style="color:#10b981">📚 Learn More</h3>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" target="_blank" style="color:#10b981">MDN – WebSockets API</a></li>
    <li><a href="https://learn.microsoft.com/en-us/aspnet/core/signalr/introduction" target="_blank" style="color:#10b981">Microsoft – SignalR Intro</a></li>
    <li><a href="https://webrtc.org/" target="_blank" style="color:#10b981">WebRTC.org – Real-Time Peer Communication</a></li>
  </ul>
</div>
`,
      children: [
        {
          id: "signalr-core", title: "SignalR Core", type: "must-know",
          description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width:720px; margin:auto; padding:2rem; background:#e3f2fd; border-radius:14px; border:2px solid #2196f3; box-shadow: 0 5px 20px rgba(33, 150, 243, 0.3); color:#0d47a1; line-height:1.6;">
  <h2 style="color:#1565c0; margin-bottom:1rem;">⚡ SignalR Core - Real-Time Communication Framework in ASP.NET Core</h2>

  <p>
    <strong>SignalR Core</strong> is a powerful library built into ASP.NET Core that enables <em>real-time bi-directional communication</em> between server and clients. 
    Unlike traditional HTTP requests which are one-way and request/response-based, SignalR allows servers to push updates to clients instantly, enabling interactive and dynamic web applications such as chat apps, live dashboards, gaming, notifications, and collaboration tools.
  </p>

  <h3 style="color:#1e88e5; margin-top:1.5rem;">🚀 Why Use SignalR Core?</h3>
  <ul style="list-style-type: disc; padding-left: 1.2rem; margin-bottom:1rem; color:#0d47a1;">
    <li>✔️ Abstracts away complex WebSocket and fallback transports (Long Polling, Server-Sent Events), working seamlessly across browsers and environments.</li>
    <li>✔️ Supports multiple simultaneous connections from clients.</li>
    <li>✔️ Supports grouping clients logically for targeted message broadcasting.</li>
    <li>✔️ Includes automatic connection management and reconnection features.</li>
    <li>✔️ Scales easily with backplanes like Redis or Azure SignalR Service to support multiple server instances.</li>
  </ul>

  <h3 style="color:#1e88e5; margin-top:1.5rem;">🔧 Core Concepts</h3>
  <ul style="list-style-type: none; padding-left: 0; color:#0d47a1;">
    <li><strong>Hub:</strong> A central class where you define methods the server can call on clients and vice versa.</li>
    <li><strong>Clients:</strong> Connected users or applications (web browsers, mobile apps) that communicate with the Hub.</li>
    <li><strong>Connection:</strong> The active link between a client and the Hub over WebSocket or fallback transports.</li>
    <li><strong>Groups:</strong> Logical collections of connections for sending messages to subsets of clients.</li>
  </ul>

  <h3 style="color:#1e88e5; margin-top:1.5rem;">📦 Basic Implementation Example</h3>
  <p>Here is a simple example of creating a chat system with SignalR Core:</p>

  <pre style="background:#bbdefb; padding:1rem; border-radius:8px; font-family: 'Courier New', Courier, monospace; font-size:0.9rem; overflow-x:auto;">
// 1. Define a Hub class with a method clients can call
public class ChatHub : Hub
{
    // Method that clients call to send messages
    public async Task SendMessage(string user, string message)
    {
        // Broadcast the message to all connected clients
        await Clients.All.SendAsync("ReceiveMessage", user, message);
    }
}

// 2. Configure SignalR services and map hub endpoint in Program.cs
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSignalR();

var app = builder.Build();
app.MapHub&lt;ChatHub&gt;("/chatHub");
app.Run();
  </pre>

  <h3 style="color:#1e88e5; margin-top:1.5rem;">🖥️ Client Side Example (JavaScript)</h3>
  <p>Connect to the hub and receive/send messages from a browser:</p>

  <pre style="background:#bbdefb; padding:1rem; border-radius:8px; font-family: 'Courier New', Courier, monospace; font-size:0.9rem; overflow-x:auto;">
const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();

// Listen for messages from server
connection.on("ReceiveMessage", function(user, message) {
    console.log(user + ": " + message);
    // Update your UI here, e.g., add messages to chat window
});

// Start connection
connection.start()
    .then(function() { console.log("Connected to SignalR Hub"); })
    .catch(function(err) { console.error("Connection failed: ", err); });

// Send a message to server
function sendMessage(user, message) {
    connection.invoke("SendMessage", user, message)
        .catch(function(err) { console.error(err); });
}
  </pre>

  <h3 style="color:#1e88e5; margin-top:1.5rem;">⚙️ Advanced Features & Best Practices</h3>
  <ul style="list-style-type: disc; padding-left: 1.2rem; color:#0d47a1;">
    <li>🔐 <strong>Secure your Hub:</strong> Protect your SignalR endpoints with authentication and authorization to restrict access.</li>
    <li>👥 <strong>Use Groups:</strong> Manage groups to broadcast messages to specific subsets of clients, e.g., chat rooms or game lobbies.</li>
    <li>🔄 <strong>Handle Connection Lifecycle:</strong> Implement handlers for connection events (<code>OnConnectedAsync</code>, <code>OnDisconnectedAsync</code>) to manage resources or notify others.</li>
    <li>🌐 <strong>Scale with Backplanes:</strong> Use Redis or Azure SignalR Service to scale SignalR across multiple server instances seamlessly.</li>
    <li>🚫 <strong>Optimize Payload Size:</strong> Avoid sending large or frequent messages to reduce bandwidth and latency.</li>
    <li>📱 <strong>Support Multiple Clients:</strong> SignalR works with browsers, mobile apps, desktop clients, and even IoT devices.</li>
  </ul>

  <h3 style="color:#1e88e5; margin-top:1.5rem;">📚 Useful Links</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/aspnet/core/signalr/introduction" target="_blank" style="color:#0d47a1;">Official Microsoft SignalR Documentation</a></li>
    <li><a href="https://github.com/dotnet/aspnetcore/tree/main/src/SignalR" target="_blank" style="color:#0d47a1;">SignalR Source Code on GitHub</a></li>
    <li><a href="https://dotnet.microsoft.com/apps/aspnet/signalr" target="_blank" style="color:#0d47a1;">Overview and Sample Apps</a></li>
  </ul>
</div>
`  },
        {
          id: "web-sockets", title: "Web Sockets", type: "optional",
          description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width:720px; margin:auto; padding:2rem; background:#f0f4c3; border-radius:14px; border:2px solid #afb42b; box-shadow: 0 5px 20px rgba(171, 180, 0, 0.3); color:#827717; line-height:1.6;">
  <h2 style="color:#c0ca33; margin-bottom:1rem;">🔌 WebSockets - Full-Duplex Communication Protocol</h2>

  <p>
    <strong>WebSockets</strong> provide a standardized way for web clients (like browsers) and servers to establish a persistent, full-duplex communication channel over a single TCP connection. 
    Unlike traditional HTTP, which is request-response oriented, WebSockets enable both client and server to send messages independently at any time, enabling true real-time web applications.
  </p>

  <h3 style="color:#dce775; margin-top:1.5rem;">⚡ Why WebSockets?</h3>
  <ul style="list-style-type: disc; padding-left: 1.2rem; margin-bottom:1rem; color:#827717;">
    <li>✔️ Bi-directional communication: Server can push data instantly without waiting for client requests.</li>
    <li>✔️ Low latency: Minimal overhead after initial handshake, ideal for live updates.</li>
    <li>✔️ Efficient bandwidth usage: Persistent connection avoids HTTP headers overhead on each message.</li>
    <li>✔️ Supports real-time applications: chat, gaming, live feeds, financial tickers, collaborative tools, etc.</li>
  </ul>

  <h3 style="color:#dce775; margin-top:1.5rem;">📡 How WebSocket Works</h3>
  <ol style="color:#827717;">
    <li><strong>Handshake:</strong> Client sends HTTP upgrade request to switch protocol from HTTP to WebSocket.</li>
    <li><strong>Connection Established:</strong> Server accepts and upgrades the connection.</li>
    <li><strong>Data Transfer:</strong> Both client and server exchange messages freely over the open socket.</li>
    <li><strong>Connection Close:</strong> Either side can close the connection gracefully.</li>
  </ol>

  <h3 style="color:#dce775; margin-top:1.5rem;">🛠️ Basic WebSocket Example (JavaScript)</h3>
  <p>Client side example opening a connection and sending/receiving messages:</p>

  <pre style="background:#f9fbe7; padding:1rem; border-radius:8px; font-family: 'Courier New', Courier, monospace; font-size:0.9rem; overflow-x:auto;">
const socket = new WebSocket("wss://example.com/socket");

// Connection opened
socket.onopen = function(event) {
  console.log("WebSocket is open now.");
  socket.send("Hello Server!");
};

// Listen for messages
socket.onmessage = function(event) {
  console.log("Message from server ", event.data);
};

// Connection closed
socket.onclose = function(event) {
  console.log("WebSocket is closed now.");
};

// Handle errors
socket.onerror = function(error) {
  console.error("WebSocket error: ", error);
};
  </pre>

  <h3 style="color:#dce775; margin-top:1.5rem;">🔗 Server-Side WebSocket in ASP.NET Core</h3>
  <p>Example of setting up a simple WebSocket middleware in ASP.NET Core:</p>

  <pre style="background:#f9fbe7; padding:1rem; border-radius:8px; font-family: 'Courier New', Courier, monospace; font-size:0.9rem; overflow-x:auto;">
app.Use(async (context, next) =>
{
    if (context.WebSockets.IsWebSocketRequest)
    {
        var webSocket = await context.WebSockets.AcceptWebSocketAsync();
        // Handle websocket connection here (read/write messages)
    }
    else
    {
        await next();
    }
});
  </pre>

  <h3 style="color:#dce775; margin-top:1.5rem;">⚙️ Best Practices</h3>
  <ul style="list-style-type: disc; padding-left: 1.2rem; color:#827717;">
    <li>🔐 Secure WebSockets with TLS (wss://) to encrypt communication.</li>
    <li>👥 Manage client connections carefully; track open sockets to prevent leaks.</li>
    <li>🔄 Implement proper reconnect logic on client side for resilience.</li>
    <li>🧹 Clean up resources and close connections gracefully on disconnect.</li>
    <li>📊 Monitor performance and scale using load balancers or specialized services.</li>
  </ul>

  <h3 style="color:#dce775; margin-top:1.5rem;">📚 Learn More</h3>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" target="_blank" style="color:#827717;">MDN WebSocket API Documentation</a></li>
    <li><a href="https://tools.ietf.org/html/rfc6455" target="_blank" style="color:#827717;">RFC 6455 - The WebSocket Protocol</a></li>
    <li><a href="https://learn.microsoft.com/en-us/aspnet/core/fundamentals/websockets" target="_blank" style="color:#827717;">ASP.NET Core WebSockets Middleware</a></li>
  </ul>
</div>
`  },
      ]
    },
    {
      id: "api-clients-communications",
      title: "API Clients & Communications",
      direction: "right",
      description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🔌 API Clients & Communications</h2>
  <p><strong>API Clients</strong> enable applications to interact with other systems, services, or components over a network using standard protocols such as HTTP or gRPC. They play a crucial role in microservices, frontend-backend interaction, and 3rd-party integrations.</p>

  <h3 style='color:#10b981'>🔧 Communication Methods</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>REST:</strong> Resource-based API architecture using HTTP methods (GET, POST, etc.).</li>
    <li><strong>GraphQL:</strong> Query-based API for flexible and efficient data fetching.</li>
    <li><strong>gRPC:</strong> High-performance, binary protocol over HTTP/2, often used in microservices.</li>
    <li><strong>WebSockets:</strong> Persistent, real-time, bi-directional communication.</li>
    <li><strong>SOAP:</strong> XML-based protocol used in enterprise integrations.</li>
  </ul>

  <h3 style='color:#f59e0b'>⚙️ Popular API Clients</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Axios (JS):</strong> Promise-based HTTP client for the browser and Node.js.</li>
    <li><strong>Fetch API (JS):</strong> Modern browser-native HTTP interface.</li>
    <li><strong>HttpClient (.NET):</strong> Built-in and extensible HTTP client.</li>
    <li><strong>Retrofit (Java):</strong> Type-safe REST client for Android and Java apps.</li>
    <li><strong>Apollo Client:</strong> Advanced GraphQL client for JS/React apps.</li>
    <li><strong>gRPC Stubs:</strong> Generated client code from proto files for efficient service calls.</li>
  </ul>

  <h3 style='color:#8b5cf6'>📦 Use Cases</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Connecting frontend apps to backend APIs</li>
    <li>Microservices-to-microservices communication</li>
    <li>Calling external APIs (e.g., payment, AI, analytics)</li>
    <li>Streaming real-time data using sockets or events</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li><strong>Retry policies:</strong> Handle transient failures gracefully.</li>
    <li><strong>Timeouts and circuit breakers:</strong> Avoid cascading service failures.</li>
    <li><strong>Authentication:</strong> Secure APIs with OAuth, API keys, or JWT.</li>
    <li><strong>Logging & tracing:</strong> Monitor request/response flows for debugging and performance.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://axios-http.com/' target='_blank' style='color:#3b82f6'>Axios Documentation</a></li>
    <li><a href='https://learn.microsoft.com/en-us/dotnet/fundamentals/networking/http/httpclient' target='_blank' style='color:#3b82f6'>.NET HttpClient Guide</a></li>
    <li><a href='https://grpc.io/docs/' target='_blank' style='color:#3b82f6'>gRPC Docs</a></li>
    <li><a href='https://www.apollographql.com/docs/react/' target='_blank' style='color:#3b82f6'>Apollo GraphQL Client</a></li>
    <li><a href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' target='_blank' style='color:#3b82f6'>Fetch API - MDN</a></li>
  </ul>
</div>
`,
      children: [
        {
          id: "rest",
          title: "REST",
          type: "must-know",
          description: `<div style="font-family:'Segoe UI', Tahoma, sans-serif; max-width:720px; background:#e3f2fd; border:2px solid #64b5f6; border-radius:12px; padding:1.5rem; box-shadow:0 5px 15px rgba(33,150,243,0.2); color:#0d47a1; line-height:1.7;">
  <h2 style="color:#1976d2;">🌐 REST Fundamentals - Must Know for API Communication</h2>

  <p>
    <strong>REST (Representational State Transfer)</strong> is a standardized architecture for building scalable web services. It’s the foundation of most modern APIs. Understanding REST is <em>essential</em> for any backend or full-stack developer.
  </p>

  <h3 style="color:#2196f3;">🧱 Core REST Principles</h3>
  <ul>
    <li><strong>Stateless:</strong> Each request from client to server must contain all information to understand the request.</li>
    <li><strong>Uniform Interface:</strong> Resource-based, using URIs like <code>/products/123</code>.</li>
    <li><strong>Resource-Oriented:</strong> Everything is treated as a resource (e.g., <code>/users</code>, <code>/orders</code>).</li>
    <li><strong>HTTP Verbs:</strong> Use standard methods:
      <ul>
        <li><code>GET</code> – Read data</li>
        <li><code>POST</code> – Create data</li>
        <li><code>PUT</code> – Update full resource</li>
        <li><code>PATCH</code> – Partial update</li>
        <li><code>DELETE</code> – Remove resource</li>
      </ul>
    </li>
  </ul>

  <h3 style="color:#2196f3;">🚀 HTTP Status Codes You MUST Know</h3>
  <ul>
    <li><code>200 OK</code> – Successful request</li>
    <li><code>201 Created</code> – New resource created</li>
    <li><code>204 No Content</code> – Success, no body</li>
    <li><code>400 Bad Request</code> – Client error (validation, etc.)</li>
    <li><code>401 Unauthorized</code> – Auth required</li>
    <li><code>403 Forbidden</code> – No permission</li>
    <li><code>404 Not Found</code> – Resource not found</li>
    <li><code>500 Internal Server Error</code> – Unexpected server error</li>
  </ul>

  <h3 style="color:#2196f3;">🧪 Sample RESTful URL Design</h3>
  <pre style="background:#e1f5fe; padding:1rem; border-radius:8px; font-family:monospace;">
GET     /api/products
GET     /api/products/42
POST    /api/products
PUT     /api/products/42
DELETE  /api/products/42
  </pre>

  <h3 style="color:#2196f3;">🔐 Authentication in REST</h3>
  <ul>
    <li><strong>Bearer Tokens:</strong> Pass JWT or OAuth2 tokens in the <code>Authorization</code> header.</li>
    <li><strong>API Keys:</strong> For simpler use-cases (but less secure).</li>
  </ul>

  <h3 style="color:#2196f3;">📦 Content Types</h3>
  <p>Always use headers:</p>
  <ul>
    <li><code>Content-Type: application/json</code> – when sending data</li>
    <li><code>Accept: application/json</code> – when expecting JSON response</li>
  </ul>

  <h3 style="color:#2196f3;">🛠️ Best Practices</h3>
  <ul>
    <li>✅ Use nouns in URIs, not verbs (e.g., <code>/users</code> not <code>/getUsers</code>).</li>
    <li>✅ Version your APIs (<code>/api/v1/products</code>).</li>
    <li>✅ Use pagination, filtering, and sorting via query params.</li>
    <li>✅ Always return proper HTTP status codes and error messages.</li>
    <li>✅ Document your APIs with Swagger / OpenAPI.</li>
    <li>✅ Validate and sanitize all inputs.</li>
  </ul>

  <h3 style="color:#2196f3;">📚 Learn More</h3>
  <ul>
    <li><a href="https://restfulapi.net/" target="_blank" style="color:#1565c0;">https://restfulapi.net/</a></li>
    <li><a href="https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-8.0" target="_blank" style="color:#1565c0;">.NET REST API Docs</a></li>
  </ul>
</div>
`,
          children: [
            {
              id: "gridify", title: "Gridify", type: "good-to-know",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:1.5rem; border-radius:1rem; border:1px solid #38bdf8; box-shadow:0 4px 15px rgba(56, 189, 248, 0.25)">
  <h2 style="color:#0ea5e9">🔍 REST + Gridify (Smart Filtering, Paging, Sorting)</h2>
  <p><strong>Gridify</strong> is a lightweight and elegant .NET library for filtering, sorting, and pagination over REST APIs. It parses query parameters automatically and eliminates repetitive LINQ logic.</p>

  <h3 style="color:#38bdf8">📌 Why Gridify?</h3>
  <ul style="padding-left:1.2rem; list-style:disc">
    <li>✅ Clean, DRY filtering logic</li>
    <li>✅ Parses filter, sort, paging from querystring</li>
    <li>✅ Built-in support for EF Core / IQueryable</li>
    <li>✅ Works seamlessly with .NET 6/7/8+</li>
  </ul>

  <h3 style="color:#0ea5e9">⚙️ How to Use Gridify</h3>

  <h4 style="margin-top:1rem">1️⃣ Install NuGet Package</h4>
  <pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem"><code>dotnet add package Gridify</code></pre>

  <h4 style="margin-top:1rem">2️⃣ Sample Controller</h4>
  <pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>public class ProductsController : ControllerBase
{
    private readonly AppDbContext _db;

    public ProductsController(AppDbContext db)
    {
        _db = db;
    }

    [HttpGet("api/products")]
    public IActionResult Get([FromQuery] GridifyQuery query)
    {
        var result = _db.Products.Gridify(query);
        return Ok(result);
    }
}</code></pre>

  <h4 style="margin-top:1rem">3️⃣ Sample Request</h4>
  <pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem"><code>GET /api/products?filter=price&gt;100;name@mouse&amp;orderBy=price&amp;page=1&amp;pageSize=10</code></pre>

  <h4 style="margin-top:1rem">4️⃣ GridifyQuery Capabilities</h4>
  <ul style="padding-left:1.2rem; list-style:circle; color:#0369a1">
    <li><strong>Filtering:</strong> <code>filter=name@keyboard;price&gt;50</code></li>
    <li><strong>Sorting:</strong> <code>orderBy=price,-name</code></li>
    <li><strong>Paging:</strong> <code>page=2&amp;pageSize=20</code></li>
  </ul>

  <h3 style="color:#38bdf8">📈 Output Format (Auto-Paged)</h3>
  <pre style="background:#f0f9ff; border:1px solid #bae6fd; padding:1rem; border-radius:0.75rem"><code>{
  "data": [
    { "id": 1, "name": "Mouse", "price": 45.0 }
  ],
  "totalItems": 1,
  "currentPage": 1,
  "totalPages": 1
}</code></pre>

  <h3 style="color:#0ea5e9">🛡️ Best Practices</h3>
  <ul style="padding-left:1.2rem">
    <li>✔️ Use <code>GridifyQuery</code> with validation attributes</li>
    <li>✔️ Combine with <strong>Mapster</strong> or <strong>AutoMapper</strong> for DTO mapping</li>
    <li>✔️ Apply <code>.AsNoTracking()</code> for read-only queries</li>
    <li>✔️ Only expose filterable fields to protect data structure</li>
  </ul>

  <h3 style="color:#38bdf8">📚 Documentation</h3>
  <p>More: <a href="https://github.com/alirezanet/Gridify" target="_blank" style="color:#0ea5e9">GitHub – Gridify</a></p>
</div>

` },
            {
              id: "odata", title: "OData", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefce8; padding:1.5rem; border-radius:1rem; border:1px solid #facc15; box-shadow:0 4px 15px rgba(234, 179, 8, 0.25)">
  <h2 style="color:#ca8a04">🌐 OData (Open Data Protocol) – Advanced Querying for REST APIs</h2>
  <p><strong>OData</strong> is a standardized protocol for building RESTful APIs with rich query capabilities like filtering, sorting, pagination, and shaping — all via URL parameters. Supported extensively in the .NET ecosystem, OData is ideal for creating flexible, queryable APIs.</p>

  <h3 style="color:#facc15">🔑 Key Features</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li><strong>$filter:</strong> Return only matching records using logical/comparison expressions</li>
    <li><strong>$orderby:</strong> Sort by one or more fields</li>
    <li><strong>$top & $skip:</strong> Implement pagination</li>
    <li><strong>$select:</strong> Select specific fields only</li>
    <li><strong>$expand:</strong> Include navigation/related entities</li>
    <li><strong>$count:</strong> Get total entity count without full fetch</li>
  </ul>

  <h3 style="color:#ca8a04">⚙️ Enabling OData in ASP.NET Core</h3>
  <pre style="background:#fef9c3; padding:1rem; border-radius:0.75rem"><code>public void ConfigureServices(IServiceCollection services)
{
    services.AddControllers()
        .AddOData(opt => opt
            .Select()
            .Filter()
            .OrderBy()
            .Expand()
            .Count()
            .SetMaxTop(100));
}</code></pre>

  <h3 style="color:#facc15">🚀 Sample Controller</h3>
  <pre style="background:#fef9c3; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProductsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    [EnableQuery(MaxExpansionDepth = 3, MaxNodeCount = 1000, AllowedQueryOptions = AllowedQueryOptions.All)]
    public IQueryable&lt;Product&gt; Get() =&gt; _context.Products;
}</code></pre>

  <h3 style="color:#ca8a04">🔎 Example OData Queries</h3>
  <ul style="list-style:circle; padding-left:1.2rem; color:#78350f">
    <li><code>GET /api/products?$filter=price gt 100 and contains(name, 'Pro')</code></li>
    <li><code>GET /api/products?$orderby=price desc,name asc</code></li>
    <li><code>GET /api/products?$top=10&$skip=20</code></li>
    <li><code>GET /api/products?$select=name,price</code></li>
    <li><code>GET /api/products?$expand=category</code></li>
    <li><code>GET /api/products?$count=true</code></li>
  </ul>

  <h3 style="color:#facc15">🛡️ Best Practices</h3>
  <ul style="padding-left:1.2rem">
    <li>✅ Use <code>MaxExpansionDepth</code> and <code>MaxNodeCount</code> to control complexity</li>
    <li>✅ Restrict <code>AllowedQueryOptions</code> to limit attack surface</li>
    <li>✅ Always enforce server-side pagination via <code>$top</code> & <code>$skip</code></li>
    <li>✅ Sanitize and validate query input</li>
    <li>✅ Use caching (ETag, response cache) for performance</li>
    <li>✅ Clearly document supported OData features</li>
    <li>✅ Secure endpoints with auth & access control</li>
  </ul>

  <h3 style="color:#ca8a04">📚 Learn More</h3>
  <ul>
    <li><a href="https://docs.microsoft.com/en-us/odata/" target="_blank" style="color:#ca8a04">Official OData Docs</a></li>
    <li><a href="https://github.com/OData/AspNetCoreOData" target="_blank" style="color:#ca8a04">AspNetCoreOData GitHub</a></li>
    <li><a href="https://docs.microsoft.com/en-us/aspnet/core/web-api/advanced/odata" target="_blank" style="color:#ca8a04">ASP.NET Core + OData Guide</a></li>
  </ul>
</div>

` },
            {
              id: "repr",
              title: "REPR Pattern",
              description: `<h2 style="color:#0d47a1;">🌐 REST & Representation (Repr) Pattern</h2>

<p style="font-size:14px; color:#333;">
REST (Representational State Transfer) is an architectural style for designing networked applications. It uses stateless communication and standard HTTP methods (GET, POST, PUT, DELETE) to manage resources.
</p>

<p style="font-size:14px; color:#333;">
The <strong>Representation (Repr) Pattern</strong> means clients work with representations (JSON, XML, etc.) of resources instead of the resources themselves.
</p>

<h3 style="color:#1565c0;">🔑 Key Concepts</h3>
<ul style="background:#e3f2fd; padding:10px 15px; border-radius:5px; color:#0d47a1;">
  <li><strong>Resource:</strong> Abstract entities (user, order, product) identified by a URI.</li>
  <li><strong>Representation:</strong> Concrete data format (JSON, XML) carrying resource state.</li>
  <li><strong>Statelessness:</strong> Each request includes all info needed for processing.</li>
  <li><strong>HATEOAS:</strong> Hypermedia links in representations for navigation and discoverability.</li>
</ul>

<h3 style="color:#1565c0;">⚙️ How REST & Representation Work</h3>
<ul style="color:#333;">
  <li><strong>GET /users/123</strong> — Returns JSON representation of user 123.</li>
  <li><strong>PUT /users/123</strong> — Updates user 123 with modified representation.</li>
  <li><strong>POST /users</strong> — Creates a new user from representation.</li>
  <li><strong>DELETE /users/123</strong> — Deletes the user resource.</li>
</ul>

<h3 style="color:#1565c0;">📋 Example JSON Representation</h3>
<pre style="background:#263238; color:#cfd8dc; padding:15px; border-radius:6px; overflow-x:auto;">
{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com",
  "links": {
    "self": "/users/123",
    "orders": "/users/123/orders"
  }
}
</pre>

<h3 style="color:#1565c0;">🛡️ Best Practices</h3>
<ul style="color:#333;">
  <li>Use consistent and meaningful URIs for resources.</li>
  <li>Make representations self-descriptive with metadata and links.</li>
  <li>Support content negotiation (JSON, XML) via HTTP headers.</li>
  <li>Keep APIs stateless by including all info in requests.</li>
  <li>Use correct HTTP status codes to signal outcomes.</li>
  <li>Document your API and its representations clearly.</li>
</ul>

<h3 style="color:#1565c0;">🔗 More Info</h3>
<ul>
  <li><a href="https://restfulapi.net/" target="_blank" style="color:#1e88e5;">RESTful API Tutorial</a></li>
  <li><a href="https://martinfowler.com/articles/richardsonMaturityModel.html" target="_blank" style="color:#1e88e5;">Richardson Maturity Model</a></li>
  <li><a href="https://restfulapi.net/hateoas/" target="_blank" style="color:#1e88e5;">HATEOAS and REST</a></li>
</ul>
`,
              type: "optional",
              children: [
                {
                  id: "minimal-apis", title: "Minimal APIs", type: "must-know",
                  description: `<style>
  .section {
    background: #fff8e1;
    border-left: 6px solid #fbc02d;
    padding: 20px 25px;
    margin-bottom: 25px;
    border-radius: 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #4e342e;
  }
  .section h2 {
    color: #f57f17;
    margin-bottom: 12px;
  }
  .section h3 {
    color: #ef6c00;
    margin-top: 18px;
  }
  .key-concepts {
    background: #fff3e0;
    border-radius: 6px;
    padding: 12px 18px;
    color: #bf360c;
    font-weight: 600;
  }
  .key-concepts li {
    margin-bottom: 8px;
  }
  pre {
    background: #3e2723;
    color: #ffcc80;
    padding: 18px;
    border-radius: 8px;
    overflow-x: auto;
  }
  code {
    font-family: 'Courier New', Courier, monospace;
  }
  a {
    color: #f9a825;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  ul {
    margin-top: 8px;
    margin-left: 20px;
  }
  li {
    margin-bottom: 10px;
  }
</style>

<div class="section">
  <h2>🚀 Minimal APIs & Representation (Repr) Pattern</h2>

  <p>
    Minimal APIs in ASP.NET Core enable building lightweight, high-performance HTTP APIs with minimal ceremony and code.
    They perfectly align with the <strong>Representation Pattern</strong> in REST, where clients interact with resource <em>representations</em>
    (like JSON) rather than resource internals.
  </p>

  <h3>🔑 Key Concepts</h3>
  <ul class="key-concepts">
    <li><strong>Minimal APIs:</strong> Concise, functional style APIs using top-level statements and simple route handlers.</li>
    <li><strong>Representation (Repr):</strong> Data format (usually JSON) describing resource state exchanged between client and server.</li>
    <li><strong>Statelessness:</strong> Each request includes all info to process it; no server session needed.</li>
    <li><strong>Http Methods:</strong> Use standard verbs (GET, POST, PUT, DELETE) to act on resource representations.</li>
    <li><strong>Content Negotiation:</strong> Supports multiple formats (JSON, XML) as response representations.</li>
  </ul>

  <h3>⚙️ Minimal API Example with Representation</h3>

  <pre><code>var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Sample in-memory user store
var users = new List&lt;User&gt; {
  new User { Id = 1, Name = "Alice" },
  new User { Id = 2, Name = "Bob" }
};

// GET user by id - returns JSON representation
app.MapGet("/users/{id}", (int id) =&gt; {
  var user = users.FirstOrDefault(u =&gt; u.Id == id);
  return user is not null ? Results.Ok(user) : Results.NotFound();
});

// POST to create new user - accepts JSON representation
app.MapPost("/users", (User newUser) =&gt; {
  users.Add(newUser);
  return Results.Created($"/users/{newUser.Id}", newUser);
});

app.Run();

record User(int Id, string Name);
</code></pre>

  <h3>🛡️ Best Practices</h3>
  <ul>
    <li>Use minimal, focused route handlers to keep APIs simple and readable.</li>
    <li>Always return <code>Results</code> with appropriate HTTP status codes (200, 201, 404, etc.).</li>
    <li>Design your representations to be clear and self-descriptive with necessary fields only.</li>
    <li>Leverage dependency injection to keep business logic separate from route handlers.</li>
    <li>Use content negotiation and support multiple media types for client flexibility.</li>
    <li>Validate incoming representations and handle errors gracefully.</li>
  </ul>

  <h3>🔗 Learn More</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis" target="_blank">Official ASP.NET Core Minimal APIs Docs</a></li>
    <li><a href="https://restfulapi.net/" target="_blank">RESTful API Design Tutorial</a></li>
    <li><a href="https://restfulapi.net/representation/" target="_blank">Representation Pattern Explained</a></li>
  </ul>
</div>
` },
                {
                  id: "ardalis-endpoints", title: "Ardalis.Endpoints", type: "optional",
                  description: `<div style="background:#e3f2fd; border-left:6px solid #1976d2; padding:20px 25px; margin-bottom:25px; border-radius:8px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#0d47a1;">
  <h2 style="color:#1565c0; margin-bottom:12px;">📦 Ardalis Endpoints</h2>
  <p>
    <strong>Ardalis Endpoints</strong> is a lightweight, opinionated library to help organize ASP.NET Core APIs around distinct endpoints.
    It promotes clarity, maintainability, and separation of concerns by encapsulating each API action into a single class.
  </p>

  <h3 style="color:#0d47a1; margin-top:18px;">🔑 Key Concepts</h3>
  <ul style="background:#bbdefb; border-radius:6px; padding:12px 18px; color:#0d47a1; font-weight:600;">
    <li style="margin-bottom:8px;"><strong>Single Responsibility:</strong> Each endpoint class handles one request and response.</li>
    <li style="margin-bottom:8px;"><strong>Request-Response Models:</strong> Encapsulates input and output data separately.</li>
    <li style="margin-bottom:8px;"><strong>Minimal Boilerplate:</strong> Simplifies wiring endpoints to the ASP.NET Core pipeline.</li>
    <li style="margin-bottom:8px;"><strong>Supports CQRS:</strong> Easily integrates Command and Query responsibilities.</li>
    <li style="margin-bottom:8px;"><strong>Testable:</strong> Encourages writing unit tests focused on single endpoint behavior.</li>
  </ul>

  <h3 style="color:#0d47a1; margin-top:18px;">⚙️ Basic Example</h3>
  <pre style="background:#0d47a1; color:#e3f2fd; padding:18px; border-radius:8px; overflow-x:auto;">
<code>public class GetProduct : Endpoint&lt;int, ProductDto&gt;
{
  private readonly IProductRepository _repository;

  public GetProduct(IProductRepository repository)
  {
    _repository = repository;
  }

  public override async Task&lt;ActionResult&lt;ProductDto&gt;&gt; HandleAsync(int id, CancellationToken ct)
  {
    var product = await _repository.GetByIdAsync(id);
    if (product == null) return NotFound();
    return Ok(new ProductDto(product));
  }
}</code>
  </pre>

  <h3 style="color:#0d47a1; margin-top:18px;">🛡️ Best Practices</h3>
  <ul>
    <li style="margin-bottom:10px;">Keep endpoints focused and small, encapsulating one use case.</li>
    <li style="margin-bottom:10px;">Use clear naming conventions to reflect actions (e.g., GetProduct, CreateOrder).</li>
    <li style="margin-bottom:10px;">Separate domain logic into services or handlers called from endpoints.</li>
    <li style="margin-bottom:10px;">Inject dependencies via constructor for testability.</li>
    <li style="margin-bottom:10px;">Write unit tests for each endpoint to verify behavior and edge cases.</li>
    <li style="margin-bottom:10px;">Use request and response DTOs to decouple API contracts from domain models.</li>
  </ul>

  <h3 style="color:#0d47a1; margin-top:18px;">🔗 More Info</h3>
  <ul>
    <li><a href="https://github.com/ardalis/Endpoints" target="_blank" style="color:#1976d2; text-decoration:none;">Ardalis Endpoints GitHub Repo</a></li>
    <li><a href="https://ardalis.com/asp-net-core-endpoints-pattern" target="_blank" style="color:#1976d2; text-decoration:none;">Blog: Organizing ASP.NET Core APIs with Endpoints</a></li>
  </ul>
</div>
` },
                {
                  id: "fastendpoints", title: "FastEndpoints", type: "optional", description: `<div style="background:#e8f5e9; border-left:6px solid #388e3c; padding:20px 25px; margin-bottom:25px; border-radius:8px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#2e7d32;">
  <h2 style="color:#2e7d32; margin-bottom:12px;">⚡ FastEndpoints</h2>
  <p>
    <strong>FastEndpoints</strong> is a modern, high-performance, and minimalistic framework built on top of ASP.NET Core.
    It simplifies building APIs by eliminating boilerplate and providing a clean, intuitive endpoint-centric approach.
  </p>

  <h3 style="color:#1b5e20; margin-top:18px;">🔑 Key Features</h3>
  <ul style="background:#c8e6c9; border-radius:6px; padding:12px 18px; color:#2e7d32; font-weight:600;">
    <li style="margin-bottom:8px;"><strong>Endpoint-Centric:</strong> Define each API endpoint in its own class with clear request and response models.</li>
    <li style="margin-bottom:8px;"><strong>Minimal Boilerplate:</strong> No need for controllers or actions, simplifying the project structure.</li>
    <li style="margin-bottom:8px;"><strong>Built-in Validation:</strong> Supports FluentValidation integration out-of-the-box.</li>
    <li style="margin-bottom:8px;"><strong>Performance Optimized:</strong> Lightweight and fast, ideal for high-throughput scenarios.</li>
    <li style="margin-bottom:8px;"><strong>OpenAPI Support:</strong> Automatic generation of Swagger/OpenAPI documentation.</li>
    <li style="margin-bottom:8px;"><strong>Dependency Injection:</strong> Seamless DI support for services and repositories.</li>
  </ul>

  <h3 style="color:#1b5e20; margin-top:18px;">⚙️ Basic Example</h3>
  <pre style="background:#2e7d32; color:#e8f5e9; padding:18px; border-radius:8px; overflow-x:auto;">
<code>public class CreateProductRequest : IRequest
{
  public string Name { get; set; }
  public decimal Price { get; set; }
}

public class CreateProductEndpoint : Endpoint&lt;CreateProductRequest&gt;
{
  private readonly IProductService _service;

  public CreateProductEndpoint(IProductService service)
  {
    _service = service;
  }

  public override async Task HandleAsync(CreateProductRequest req, CancellationToken ct)
  {
    var product = await _service.CreateAsync(req.Name, req.Price);
    await SendOkAsync(product, ct);
  }
}</code>
  </pre>

  <h3 style="color:#1b5e20; margin-top:18px;">🛡️ Best Practices</h3>
  <ul>
    <li style="margin-bottom:10px;">Keep each endpoint focused on a single responsibility and use clear naming conventions.</li>
    <li style="margin-bottom:10px;">Use FluentValidation for request validation to ensure data integrity.</li>
    <li style="margin-bottom:10px;">Inject dependencies via constructor for clean separation of concerns.</li>
    <li style="margin-bottom:10px;">Write unit and integration tests specifically for endpoints.</li>
    <li style="margin-bottom:10px;">Use request and response DTOs to avoid leaking domain entities.</li>
    <li style="margin-bottom:10px;">Leverage FastEndpoints built-in support for OpenAPI to keep API docs up-to-date.</li>
  </ul>

  <h3 style="color:#1b5e20; margin-top:18px;">🔗 More Info</h3>
  <ul>
    <li><a href="https://fast-endpoints.com/" target="_blank" style="color:#388e3c; text-decoration:none;">Official FastEndpoints Website</a></li>
    <li><a href="https://github.com/FastEndpoints/FastEndpoints" target="_blank" style="color:#388e3c; text-decoration:none;">GitHub Repo</a></li>
    <li><a href="https://fast-endpoints.com/docs/" target="_blank" style="color:#388e3c; text-decoration:none;">Documentation</a></li>
  </ul>
</div>
` },
              ]
            },
          ]
        },
        {
          id: "grpc",
          title: "gRPC",
          description: `<div style="background:#e0f7fa; border-left:6px solid #00796b; padding:20px 25px; margin-bottom:25px; border-radius:8px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#004d40;">
  <h2 style="color:#00695c; margin-bottom:12px;">🚀 gRPC - Modern Remote Procedure Calls</h2>
  <p>
    <strong>gRPC</strong> is a high-performance, open-source RPC (Remote Procedure Call) framework developed by Google.  
    It uses HTTP/2 as its transport protocol and Protocol Buffers (protobuf) as its interface definition language (IDL), enabling efficient, scalable communication between distributed systems.
  </p>

  <h3 style="color:#004d40; margin-top:18px;">🔑 Key Concepts</h3>
  <ul style="background:#b2dfdb; border-radius:6px; padding:12px 18px; color:#004d40; font-weight:600;">
    <li style="margin-bottom:8px;"><strong>Protocol Buffers:</strong> Compact binary serialization format defining service contracts and messages.</li>
    <li style="margin-bottom:8px;"><strong>HTTP/2 Transport:</strong> Supports multiplexed streams, bidirectional streaming, header compression, and improved performance.</li>
    <li style="margin-bottom:8px;"><strong>Service Definition:</strong> Defined in .proto files specifying RPC methods and message types.</li>
    <li style="margin-bottom:8px;"><strong>Code Generation:</strong> Generates strongly-typed client and server stubs for multiple languages.</li>
    <li style="margin-bottom:8px;"><strong>Streaming:</strong> Supports unary, server streaming, client streaming, and bidirectional streaming RPCs.</li>
  </ul>

  <h3 style="color:#004d40; margin-top:18px;">⚙️ Basic Example (.proto)</h3>
  <pre style="background:#004d40; color:#b2dfdb; padding:18px; border-radius:8px; overflow-x:auto;">
<code>syntax = "proto3";

package product;

service ProductService {
  rpc GetProduct (ProductRequest) returns (ProductReply);
  rpc ListProducts (Empty) returns (stream ProductReply);
}

message ProductRequest {
  int32 id = 1;
}

message ProductReply {
  int32 id = 1;
  string name = 2;
  float price = 3;
}

message Empty {}
</code>
  </pre>

  <h3 style="color:#004d40; margin-top:18px;">🔧 ASP.NET Core gRPC Server Example</h3>
  <pre style="background:#004d40; color:#b2dfdb; padding:18px; border-radius:8px; overflow-x:auto;">
<code>public class ProductServiceImpl : ProductService.ProductServiceBase
{
    public override Task<ProductReply> GetProduct(ProductRequest request, ServerCallContext context)
    {
        var product = new ProductReply
        {
            Id = request.Id,
            Name = "Sample Product",
            Price = 12.99f
        };
        return Task.FromResult(product);
    }

    public override async Task ListProducts(Empty request, IServerStreamWriter<ProductReply> responseStream, ServerCallContext context)
    {
        var products = GetAllProducts();
        foreach(var p in products)
        {
            await responseStream.WriteAsync(p);
        }
    }
}
</code>
  </pre>

  <h3 style="color:#004d40; margin-top:18px;">🛡️ Best Practices</h3>
  <ul>
    <li style="margin-bottom:10px;">Use <strong>proto3</strong> syntax for better compatibility and features.</li>
    <li style="margin-bottom:10px;">Define clear and concise message and service contracts to keep APIs maintainable.</li>
    <li style="margin-bottom:10px;">Leverage streaming RPCs where appropriate for efficient data transfer.</li>
    <li style="margin-bottom:10px;">Enable <strong>deadline and cancellation tokens</strong> on server methods to prevent resource leaks.</li>
    <li style="margin-bottom:10px;">Use TLS encryption for secure communication over the network.</li>
    <li style="margin-bottom:10px;">Keep backward compatibility by careful versioning of your .proto files.</li>
    <li style="margin-bottom:10px;">Integrate monitoring and logging especially on streaming endpoints for troubleshooting.</li>
    <li style="margin-bottom:10px;">Test clients and servers extensively including edge cases of network failures.</li>
  </ul>

  <h3 style="color:#004d40; margin-top:18px;">🔗 More Resources</h3>
  <ul>
    <li><a href="https://grpc.io/docs/" target="_blank" style="color:#00796b; text-decoration:none;">Official gRPC Documentation</a></li>
    <li><a href="https://learn.microsoft.com/en-us/aspnet/core/grpc/" target="_blank" style="color:#00796b; text-decoration:none;">Microsoft ASP.NET Core gRPC Guide</a></li>
    <li><a href="https://github.com/grpc/grpc" target="_blank" style="color:#00796b; text-decoration:none;">gRPC GitHub Repo</a></li>
  </ul>
</div>
`,
        },
        {
          id: "graphql",
          title: "GraphQL",
          description: `<div style="background:#e3f2fd; border-left:6px solid #1e88e5; padding:20px 25px; margin-bottom:25px; border-radius:8px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#0d47a1;">
  <h2 style="color:#1565c0; margin-bottom:12px;">🚀 GraphQL - Flexible API Query Language</h2>
  <p>
    <strong>GraphQL</strong> is a powerful query language and runtime for APIs developed by Facebook. Unlike REST, it allows clients to request exactly the data they need, enabling more efficient and flexible interactions between client and server.
  </p>

  <h3 style="color:#1565c0; margin-top:18px;">🔑 Key Features</h3>
  <ul style="background:#bbdefb; border-radius:6px; padding:12px 18px; color:#0d47a1; font-weight:600;">
    <li style="margin-bottom:8px;"><strong>Declarative Queries:</strong> Clients specify what data they want in a single request.</li>
    <li style="margin-bottom:8px;"><strong>Strongly Typed Schema:</strong> Defines types, queries, mutations, and subscriptions.</li>
    <li style="margin-bottom:8px;"><strong>Single Endpoint:</strong> All queries and mutations sent to one endpoint.</li>
    <li style="margin-bottom:8px;"><strong>Real-time Data:</strong> Supports subscriptions for live updates.</li>
    <li style="margin-bottom:8px;"><strong>Introspection:</strong> Clients can query the schema itself.</li>
  </ul>

  <h3 style="color:#1565c0; margin-top:18px;">⚙️ Basic Example</h3>
  <pre style="background:#0d47a1; color:#bbdefb; padding:18px; border-radius:8px; overflow-x:auto;">
<code>query {
  product(id: 1) {
    id
    name
    price
  }
}

mutation {
  addProduct(name: "New Product", price: 19.99) {
    id
    name
  }
}</code>
  </pre>

  <h3 style="color:#1565c0; margin-top:18px;">🛠️ Implementing GraphQL Server in .NET</h3>
  <p>
    Use libraries like <strong>HotChocolate</strong> or <strong>GraphQL.NET</strong> to build GraphQL APIs in .NET. Define your schema using C# classes or schema definition language (SDL), and configure query and mutation resolvers.
  </p>

  <h3 style="color:#1565c0; margin-top:18px;">🛡️ Best Practices</h3>
  <ul>
    <li style="margin-bottom:10px;">Design your schema carefully to keep it intuitive and maintainable.</li>
    <li style="margin-bottom:10px;">Use input validation and authorization at resolver level to secure your API.</li>
    <li style="margin-bottom:10px;">Avoid over-fetching by carefully selecting fields and using query complexity limits.</li>
    <li style="margin-bottom:10px;">Implement caching and batching (e.g., DataLoader) to optimize performance.</li>
    <li style="margin-bottom:10px;">Enable query depth and cost analysis to protect against malicious queries.</li>
    <li style="margin-bottom:10px;">Provide good error handling and meaningful error messages.</li>
  </ul>

  <h3 style="color:#1565c0; margin-top:18px;">🔗 More Resources</h3>
  <ul>
    <li><a href="https://graphql.org/" target="_blank" style="color:#1e88e5; text-decoration:none;">Official GraphQL Website</a></li>
    <li><a href="https://chillicream.com/docs/hotchocolate" target="_blank" style="color:#1e88e5; text-decoration:none;">HotChocolate - GraphQL for .NET</a></li>
    <li><a href="https://github.com/graphql-dotnet/graphql-dotnet" target="_blank" style="color:#1e88e5; text-decoration:none;">GraphQL.NET GitHub</a></li>
  </ul>
</div>
`,
          children: [
            {
              id: "hotchocolate", title: "HotChocolate", type: "good-to-know",
              description: `<div style="background:#e8f5e9; border-left:6px solid #43a047; padding:20px 25px; margin-bottom:25px; border-radius:8px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#2e7d32;">
  <h2 style="color:#388e3c; margin-bottom:12px;">🍫 HotChocolate - Modern GraphQL Server for .NET</h2>
  <p>
    <strong>HotChocolate</strong> is a powerful and modern GraphQL server implementation for .NET, designed for performance, extensibility, and developer productivity.
    It allows building GraphQL APIs using schema-first or code-first approaches, with rich support for advanced features like subscriptions, filtering, sorting, and more.
  </p>

  <h3 style="color:#388e3c; margin-top:18px;">🔑 Key Features</h3>
  <ul style="background:#c8e6c9; border-radius:6px; padding:12px 18px; color:#2e7d32; font-weight:600;">
    <li style="margin-bottom:8px;"><strong>Schema-first & Code-first:</strong> Define your schema with SDL or C# classes.</li>
    <li style="margin-bottom:8px;"><strong>Advanced Query Capabilities:</strong> Built-in support for filtering, sorting, paging.</li>
    <li style="margin-bottom:8px;"><strong>Real-time Subscriptions:</strong> Enable push updates to clients easily.</li>
    <li style="margin-bottom:8px;"><strong>Integration:</strong> Works seamlessly with ASP.NET Core DI, middleware, and authentication.</li>
    <li style="margin-bottom:8px;"><strong>Performance:</strong> Optimized for high throughput and low latency.</li>
  </ul>

  <h3 style="color:#388e3c; margin-top:18px;">⚙️ Basic Example (Program.cs)</h3>
  <pre style="background:#2e7d32; color:#e8f5e9; padding:18px; border-radius:8px; overflow-x:auto;">
<code>var builder = WebApplication.CreateBuilder(args);
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>();

var app = builder.Build();
app.MapGraphQL();
app.Run();

public class Query
{
    public string Hello() => "Hello from HotChocolate!";
}</code>
  </pre>

  <h3 style="color:#388e3c; margin-top:18px;">🛡️ Best Practices</h3>
  <ul>
    <li style="margin-bottom:10px;">Use DataLoader to batch and cache database calls to improve performance.</li>
    <li style="margin-bottom:10px;">Implement proper authorization using HotChocolate's built-in authorization attributes.</li>
    <li style="margin-bottom:10px;">Define clear and maintainable schemas, favoring code-first for better type safety.</li>
    <li style="margin-bottom:10px;">Leverage middleware to handle logging, error handling, and request validation.</li>
    <li style="margin-bottom:10px;">Use query complexity analysis to protect your API from expensive queries.</li>
  </ul>

  <h3 style="color:#388e3c; margin-top:18px;">🔗 Useful Resources</h3>
  <ul>
    <li><a href="https://chillicream.com/docs/hotchocolate" target="_blank" style="color:#43a047; text-decoration:none;">HotChocolate Official Docs</a></li>
    <li><a href="https://github.com/chillicream/hotchocolate" target="_blank" style="color:#43a047; text-decoration:none;">GitHub Repository</a></li>
    <li><a href="https://graphql.org/code/#csharp" target="_blank" style="color:#43a047; text-decoration:none;">GraphQL Official - C# Resources</a></li>
  </ul>
</div>
` },
            {
              id: "graphql-dotnet", title: "GraphQL.dotnet", type: "good-to-know",
              description: `<div style="background:#f3e5f5; border-left:6px solid #7b1fa2; padding:20px 25px; margin-bottom:25px; border-radius:8px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#4a148c;">
  <h2 style="color:#6a1b9a; margin-bottom:12px;">📦 GraphQL.NET - .NET implementation of GraphQL</h2>
  <p>
    <strong>GraphQL.NET</strong> is a mature and widely-used .NET library that enables building GraphQL APIs. It provides flexible schema definitions and supports queries, mutations, subscriptions, and more.
    It’s ideal for developers wanting full control over schema and resolver logic using a code-first approach.
  </p>

  <h3 style="color:#6a1b9a; margin-top:18px;">🔑 Key Features</h3>
  <ul style="background:#e1bee7; border-radius:6px; padding:12px 18px; color:#4a148c; font-weight:600;">
    <li style="margin-bottom:8px;"><strong>Code-first Schema:</strong> Define types, queries, and mutations with C# classes.</li>
    <li style="margin-bottom:8px;"><strong>Subscriptions:</strong> Support real-time data updates.</li>
    <li style="margin-bottom:8px;"><strong>Flexible Resolver Logic:</strong> Customize field resolution as needed.</li>
    <li style="margin-bottom:8px;"><strong>Middleware Pipeline:</strong> Intercept requests and add cross-cutting concerns.</li>
    <li style="margin-bottom:8px;"><strong>Integration:</strong> Works with ASP.NET Core, dependency injection, and authentication.</li>
  </ul>

  <h3 style="color:#6a1b9a; margin-top:18px;">⚙️ Basic Example</h3>
  <pre style="background:#4a148c; color:#e1bee7; padding:18px; border-radius:8px; overflow-x:auto;">
<code>public class Query : ObjectGraphType
{
    public Query()
    {
        Field<StringGraphType>(
            "hello",
            resolve: context => "Hello from GraphQL.NET!"
        );
    }
}

// In Startup.cs or Program.cs
services.AddGraphQL(options => {
    options.EnableMetrics = false;
})
.AddSystemTextJson()
.AddGraphTypes(ServiceLifetime.Scoped);
</code>
  </pre>

  <h3 style="color:#6a1b9a; margin-top:18px;">🛡️ Best Practices</h3>
  <ul>
    <li style="margin-bottom:10px;">Modularize schema definitions to improve maintainability.</li>
    <li style="margin-bottom:10px;">Implement DataLoader pattern to avoid N+1 query problems.</li>
    <li style="margin-bottom:10px;">Use authorization checks in resolvers to secure sensitive data.</li>
    <li style="margin-bottom:10px;">Apply query complexity and depth limits to protect your API.</li>
    <li style="margin-bottom:10px;">Write comprehensive unit tests for schema and resolver logic.</li>
  </ul>

  <h3 style="color:#6a1b9a; margin-top:18px;">🔗 Useful Links</h3>
  <ul>
    <li><a href="https://graphql-dotnet.github.io/" target="_blank" style="color:#7b1fa2; text-decoration:none;">Official Documentation</a></li>
    <li><a href="https://github.com/graphql-dotnet/graphql-dotnet" target="_blank" style="color:#7b1fa2; text-decoration:none;">GitHub Repository</a></li>
    <li><a href="https://graphql.org/code/#csharp" target="_blank" style="color:#7b1fa2; text-decoration:none;">GraphQL Official - C# Resources</a></li>
  </ul>
</div>
` },
          ]
        },
      ]
    },
    {
      id: "background-task-scheduler",
      title: "Background Task Scheduler",
      "type": "good-to-know",
      direction: "left",
      description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>⏳ Background Task Scheduler</h2>
  <p><strong>Background task schedulers</strong> are used to run operations asynchronously or on a scheduled basis. They are essential for running maintenance jobs, background workers, or delayed processing tasks in both web and backend systems.</p>

  <h3 style='color:#10b981'>🛠️ Common Use Cases</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li>Sending emails or notifications after user actions.</li>
    <li>Generating and sending periodic reports.</li>
    <li>Cleaning up stale data in databases.</li>
    <li>Calling external APIs or syncing data in intervals.</li>
    <li>Processing jobs in queues (e.g., image resizing).</li>
  </ul>

  <h3 style='color:#f59e0b'>🚀 Popular Frameworks & Tools</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Hangfire (.NET):</strong> Background jobs with retries, UI dashboard, and persistence.</li>
    <li><strong>Quartz.NET:</strong> Advanced cron-like scheduling with complex job configurations.</li>
    <li><strong>Celery (Python):</strong> Asynchronous task queue with broker (RabbitMQ, Redis).</li>
    <li><strong>Sidekiq (Ruby):</strong> Fast background job processor using Redis.</li>
    <li><strong>BullMQ / Agenda (Node.js):</strong> Task queues and schedulers based on Redis.</li>
    <li><strong>Cloud-native:</strong> AWS EventBridge, Azure Functions TimerTrigger, Google Cloud Scheduler.</li>
  </ul>

  <h3 style='color:#8b5cf6'>🧾 Example: Hangfire Job</h3>
  <pre style="background:#f3f4f6;padding:1rem;border-radius:0.5rem">
RecurringJob.AddOrUpdate(
  "daily-report",
  () => reportService.GenerateDailyReport(),
  Cron.Daily);
  </pre>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li><strong>Use retry mechanisms:</strong> Handle transient errors gracefully.</li>
    <li><strong>Ensure idempotency:</strong> Tasks should be safe to run multiple times.</li>
    <li><strong>Monitor background jobs:</strong> Use dashboards or alerting on failures.</li>
    <li><strong>Queue isolation:</strong> Separate critical vs non-critical job queues.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://www.hangfire.io/' target='_blank' style='color:#3b82f6'>Hangfire Documentation</a></li>
    <li><a href='https://www.quartz-scheduler.net/' target='_blank' style='color:#3b82f6'>Quartz.NET Guide</a></li>
    <li><a href='https://docs.celeryq.dev/en/stable/' target='_blank' style='color:#3b82f6'>Celery Docs</a></li>
    <li><a href='https://docs.bullmq.io/' target='_blank' style='color:#3b82f6'>BullMQ Docs</a></li>
    <li><a href='https://cloud.google.com/scheduler' target='_blank' style='color:#3b82f6'>Google Cloud Scheduler</a></li>
  </ul>
</div>
`,
      children: [
        {
          id: "native-background-service", title: "Native BackgroundService", type: "must-know",
          description: `<div style="background:#e3f2fd; border-left:6px solid #1976d2; padding:20px 25px; margin-bottom:25px; border-radius:8px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#0d47a1;">
  <h2 style="color:#1565c0; margin-bottom:12px;">⏳ Native Background Service in .NET Core</h2>
  <p>
    A <strong>Native Background Service</strong> is a long-running process or task that operates independently of user interaction,
    typically used for running background jobs such as sending emails, processing queues, cleanup tasks, or scheduled jobs.
  </p>

  <h3 style="color:#1565c0; margin-top:18px;">🔑 Key Points</h3>
  <ul style="background:#bbdefb; border-radius:6px; padding:12px 18px; color:#0d47a1; font-weight:600;">
    <li style="margin-bottom:8px;"><strong>HostedService Interface:</strong> Implemented by <code>IHostedService</code> in ASP.NET Core to create background tasks.</li>
    <li style="margin-bottom:8px;"><strong>BackgroundService Base Class:</strong> Abstract class simplifying the implementation of long-running background tasks.</li>
    <li style="margin-bottom:8px;"><strong>Integration:</strong> Runs alongside your ASP.NET Core app, sharing the same host lifecycle.</li>
    <li style="margin-bottom:8px;"><strong>Cancellation Token:</strong> Supports graceful shutdown with cancellation tokens.</li>
    <li style="margin-bottom:8px;"><strong>Use Cases:</strong> Queue processing, scheduled jobs, event-driven workflows, cleanup.</li>
  </ul>

  <h3 style="color:#1565c0; margin-top:18px;">⚙️ Basic Example</h3>
  <pre style="background:#0d47a1; color:#bbdefb; padding:18px; border-radius:8px; overflow-x:auto;">
<code>public class MyBackgroundService : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            // Your background task logic here
            Console.WriteLine("Background task running at: " + DateTimeOffset.Now);
            await Task.Delay(TimeSpan.FromMinutes(1), stoppingToken);
        }
    }
}

// In Program.cs or Startup.cs
builder.Services.AddHostedService<MyBackgroundService>();
</code>
  </pre>

  <h3 style="color:#1565c0; margin-top:18px;">🛡️ Best Practices</h3>
  <ul>
    <li style="margin-bottom:10px;">Always respect <code>CancellationToken</code> to allow graceful shutdown of the service.</li>
    <li style="margin-bottom:10px;">Keep background task logic isolated and simple.</li>
    <li style="margin-bottom:10px;">Avoid blocking calls; use async/await for scalability.</li>
    <li style="margin-bottom:10px;">Use dependency injection to access scoped services safely.</li>
    <li style="margin-bottom:10px;">Log important events and errors within the background service.</li>
    <li style="margin-bottom:10px;">For scheduled jobs, consider using libraries like <em>Quartz.NET</em> or hosted timers.</li>
  </ul>

  <h3 style="color:#1565c0; margin-top:18px;">🔗 Resources</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/aspnet/core/fundamentals/host/hosted-services" target="_blank" style="color:#1976d2; text-decoration:none;">Microsoft Docs: Background tasks with hosted services</a></li>
    <li><a href="https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.hosting.backgroundservice" target="_blank" style="color:#1976d2; text-decoration:none;">BackgroundService Class API</a></li>
    <li><a href="https://www.quartz-scheduler.net/" target="_blank" style="color:#1976d2; text-decoration:none;">Quartz.NET Scheduler Library</a></li>
  </ul>
</div>
` },
        {
          id: "hangfire", title: "HangFire", type: "must-know",
          description: `<div style="background:#fff3e0; border-left:6px solid #fb8c00; padding:20px 25px; margin-bottom:25px; border-radius:8px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#e65100;">
  <h2 style="color:#ef6c00; margin-bottom:12px;">⏰ Hangfire - Background Job Processing</h2>
  <p>
    <strong>Hangfire</strong> is a popular, open-source library to perform background job processing in .NET applications.
    It allows running fire-and-forget, delayed, recurring, and continuations jobs reliably, without needing a separate Windows Service or Scheduler.
  </p>

  <h3 style="color:#ef6c00; margin-top:18px;">🔑 Key Features</h3>
  <ul style="background:#ffe0b2; border-radius:6px; padding:12px 18px; color:#bf360c; font-weight:600;">
    <li style="margin-bottom:8px;"><strong>Persistent storage:</strong> Supports SQL Server, Redis, PostgreSQL, and others for reliable job storage.</li>
    <li style="margin-bottom:8px;"><strong>Automatic retries:</strong> Failed jobs are automatically retried based on configurable policies.</li>
    <li style="margin-bottom:8px;"><strong>Dashboard UI:</strong> Provides a real-time, web-based dashboard to monitor job status, history, and performance.</li>
    <li style="margin-bottom:8px;"><strong>Scalable:</strong> Can run on a single server or scaled out across multiple servers.</li>
    <li style="margin-bottom:8px;"><strong>Supports various job types:</strong> Fire-and-forget, delayed, recurring, and continuations.</li>
  </ul>

  <h3 style="color:#ef6c00; margin-top:18px;">⚙️ Basic Usage Example</h3>
  <pre style="background:#bf360c; color:#ffe0b2; padding:18px; border-radius:8px; overflow-x:auto;">
<code>using Hangfire;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add Hangfire services
        builder.Services.AddHangfire(config =>
            config.UseSqlServerStorage("YourConnectionStringHere"));
        builder.Services.AddHangfireServer();

        var app = builder.Build();

        // Use Hangfire Dashboard (optional)
        app.UseHangfireDashboard();

        // Enqueue a fire-and-forget job
        BackgroundJob.Enqueue(() => Console.WriteLine("Hello from Hangfire!"));

        app.Run();
    }
}
</code>
  </pre>

  <h3 style="color:#ef6c00; margin-top:18px;">🛡️ Best Practices</h3>
  <ul>
    <li style="margin-bottom:10px;">Keep background job logic isolated and idempotent to prevent inconsistent results on retries.</li>
    <li style="margin-bottom:10px;">Avoid long-running jobs; consider chunking large workloads.</li>
    <li style="margin-bottom:10px;">Secure the Hangfire Dashboard with authentication and authorization to prevent unauthorized access.</li>
    <li style="margin-bottom:10px;">Monitor job failures and configure alerting on critical job errors.</li>
    <li style="margin-bottom:10px;">Use <code>RecurringJob</code> for scheduled tasks instead of external schedulers.</li>
    <li style="margin-bottom:10px;">Clean up old jobs periodically using built-in retention settings.</li>
  </ul>

  <h3 style="color:#ef6c00; margin-top:18px;">🔗 Resources</h3>
  <ul>
    <li><a href="https://www.hangfire.io/" target="_blank" style="color:#fb8c00; text-decoration:none;">Official Hangfire Website</a></li>
    <li><a href="https://docs.hangfire.io/en/latest/" target="_blank" style="color:#fb8c00; text-decoration:none;">Hangfire Documentation</a></li>
    <li><a href="https://github.com/HangfireIO/Hangfire" target="_blank" style="color:#fb8c00; text-decoration:none;">GitHub Repository</a></li>
  </ul>
</div>
` },
        {
          id: "quartz", title: "Quartz", type: "optional",
          description: `<div style="background:#e8f5e9; border-left:6px solid #43a047; padding:20px 25px; margin-bottom:25px; border-radius:8px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#2e7d32;">
  <h2 style="color:#388e3c; margin-bottom:12px;">⏳ Quartz.NET - Advanced Job Scheduling</h2>
  <p>
    <strong>Quartz.NET</strong> is a powerful, open-source job scheduling library for .NET applications. It supports complex scheduling requirements including cron expressions, calendars, and job persistence.
  </p>

  <h3 style="color:#388e3c; margin-top:18px;">🔑 Key Features</h3>
  <ul style="background:#c8e6c9; border-radius:6px; padding:12px 18px; color:#2e7d32; font-weight:600;">
    <li style="margin-bottom:8px;"><strong>Cron Scheduling:</strong> Support for flexible and complex schedules using cron expressions.</li>
    <li style="margin-bottom:8px;"><strong>Persistent Jobs:</strong> Stores job data and triggers in a durable store like SQL Server, ensuring jobs survive restarts.</li>
    <li style="margin-bottom:8px;"><strong>Clustering:</strong> Supports distributed job execution across multiple servers.</li>
    <li style="margin-bottom:8px;"><strong>Job Chaining & Listeners:</strong> Supports complex workflows with job listeners and chaining.</li>
    <li style="margin-bottom:8px;"><strong>Job Types:</strong> Supports both simple and stateful jobs.</li>
  </ul>

  <h3 style="color:#388e3c; margin-top:18px;">⚙️ Basic Usage Example</h3>
  <pre style="background:#2e7d32; color:#c8e6c9; padding:18px; border-radius:8px; overflow-x:auto;">
<code>public class HelloJob : IJob
{
    public Task Execute(IJobExecutionContext context)
    {
        Console.WriteLine("Hello from Quartz.NET Job! - " + DateTime.Now);
        return Task.CompletedTask;
    }
}

// In Program.cs or Startup.cs
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddQuartz(q =>
{
    q.UseMicrosoftDependencyInjectionScopedJobFactory();

    var jobKey = new JobKey("HelloJob");
    q.AddJob<HelloJob>(opts => opts.WithIdentity(jobKey));

    q.AddTrigger(opts => opts
        .ForJob(jobKey)
        .WithIdentity("HelloJob-trigger")
        .WithCronSchedule("0/30 * * * * ?")); // Every 30 seconds
});

builder.Services.AddQuartzHostedService(q => q.WaitForJobsToComplete = true);

var app = builder.Build();
app.Run();
</code>
  </pre>

  <h3 style="color:#388e3c; margin-top:18px;">🛡️ Best Practices</h3>
  <ul>
    <li style="margin-bottom:10px;">Use persistent job stores (e.g. SQL Server) to avoid losing jobs after app restarts.</li>
    <li style="margin-bottom:10px;">Design jobs to be idempotent to handle retries safely.</li>
    <li style="margin-bottom:10px;">Use dependency injection inside jobs to keep code clean and testable.</li>
    <li style="margin-bottom:10px;">Monitor job execution and failures via listeners and logging.</li>
    <li style="margin-bottom:10px;">Carefully manage long-running jobs to avoid blocking the scheduler thread pool.</li>
  </ul>

  <h3 style="color:#388e3c; margin-top:18px;">🔗 Resources</h3>
  <ul>
    <li><a href="https://www.quartz-scheduler.net/" target="_blank" style="color:#43a047; text-decoration:none;">Official Quartz.NET Website</a></li>
    <li><a href="https://www.quartz-scheduler.net/documentation/" target="_blank" style="color:#43a047; text-decoration:none;">Quartz.NET Documentation</a></li>
    <li><a href="https://github.com/quartznet/quartznet" target="_blank" style="color:#43a047; text-decoration:none;">GitHub Repository</a></li>
  </ul>
</div>
` },
        {
          id: "coravel", title: "Coravel", type: "optional",
          description: `<div style="background:#e3f2fd; border-left:6px solid #1976d2; padding:20px 25px; margin-bottom:25px; border-radius:8px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#0d47a1;">
  <h2 style="color:#1565c0; margin-bottom:12px;">⚡ Coravel - Simplified Background Tasks & Scheduling</h2>
  <p>
    <strong>Coravel</strong> is a lightweight, elegant library for .NET that simplifies common background tasks like scheduling, caching, queuing, and event broadcasting without the need for external dependencies.
  </p>

  <h3 style="color:#1565c0; margin-top:18px;">🔑 Key Features</h3>
  <ul style="background:#bbdefb; border-radius:6px; padding:12px 18px; color:#0d47a1; font-weight:600;">
    <li style="margin-bottom:8px;"><strong>Task Scheduling:</strong> Simple cron-like syntax to schedule recurring jobs.</li>
    <li style="margin-bottom:8px;"><strong>Queue Processing:</strong> Built-in queue system for fire-and-forget and delayed tasks.</li>
    <li style="margin-bottom:8px;"><strong>Cache Management:</strong> Easy caching with support for memory and distributed caches.</li>
    <li style="margin-bottom:8px;"><strong>Event Broadcasting:</strong> Supports event-driven architecture with listeners and dispatchers.</li>
    <li style="margin-bottom:8px;"><strong>No external dependencies:</strong> Runs entirely in-process, simplifying setup and deployment.</li>
  </ul>

  <h3 style="color:#1565c0; margin-top:18px;">⚙️ Basic Usage Example</h3>
  <pre style="background:#0d47a1; color:#bbdefb; padding:18px; border-radius:8px; overflow-x:auto;">
<code>public class SendReminderEmailTask : IInvocable
{
    public Task Invoke()
    {
        Console.WriteLine("Sending reminder email...");
        // Your email sending logic here
        return Task.CompletedTask;
    }
}

// In Program.cs or Startup.cs
var builder = WebApplication.CreateBuilder(args);

// Register Coravel services
builder.Services.AddCoravel();

// Schedule the task every day at 9 AM
builder.Services.UseScheduler(scheduler =>
{
    scheduler.Schedule<SendReminderEmailTask>().DailyAtHour(9);
});

var app = builder.Build();
app.Run();
</code>
  </pre>

  <h3 style="color:#1565c0; margin-top:18px;">🛡️ Best Practices</h3>
  <ul>
    <li style="margin-bottom:10px;">Keep scheduled tasks short and idempotent to avoid overlapping or repeated execution issues.</li>
    <li style="margin-bottom:10px;">Use dependency injection to keep task classes clean and testable.</li>
    <li style="margin-bottom:10px;">Monitor your scheduled jobs using logging and error handling.</li>
    <li style="margin-bottom:10px;">For long-running or heavy tasks, consider queuing them instead of running synchronously.</li>
    <li style="margin-bottom:10px;">Avoid using Coravel for extremely high-scale or distributed scenarios; prefer tools like Quartz.NET in those cases.</li>
  </ul>

  <h3 style="color:#1565c0; margin-top:18px;">🔗 Resources</h3>
  <ul>
    <li><a href="https://github.com/jamesmh/coravel" target="_blank" style="color:#1976d2; text-decoration:none;">Official Coravel GitHub</a></li>
    <li><a href="https://docs.coravel.net/" target="_blank" style="color:#1976d2; text-decoration:none;">Coravel Documentation</a></li>
    <li><a href="https://www.nuget.org/packages/Coravel" target="_blank" style="color:#1976d2; text-decoration:none;">NuGet Package</a></li>
  </ul>
</div>
` },
      ]
    },
    {
      id: "object-mapping",
      title: "Object Mapping",
      direction: "right",
      description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:1.5rem; border-radius:1rem; border:1px solid #34d399; box-shadow:0 4px 15px rgba(52, 211, 153, 0.25)">
  <h2 style="color:#10b981">🔁 Object Mapping – Transforming Models with Ease</h2>
  <p><strong>Object Mapping</strong> is the process of converting one type of object to another. It’s especially common when working with layers like DTOs (Data Transfer Objects), ViewModels, and domain entities in modern applications.</p>

  <h3 style="color:#34d399">📌 Why Object Mapping?</h3>
  <ul style="padding-left:1.2rem; list-style:disc">
    <li>✅ Keeps application layers clean and separated (e.g., API vs Business logic)</li>
    <li>✅ Helps avoid over-posting and leaking internal structure</li>
    <li>✅ Simplifies transformation logic for nested or complex objects</li>
    <li>✅ Makes code more maintainable and testable</li>
  </ul>

  <h3 style="color:#10b981">🎯 Common Use Cases</h3>
  <ul style="list-style:circle; padding-left:1.2rem; color:#065f46">
    <li>Mapping domain models to DTOs (and vice versa)</li>
    <li>Adapting external API models to internal application models</li>
    <li>Converting between database entities and presentation models</li>
  </ul>

  <h3 style="color:#34d399">🧰 Popular Mapping Tools in .NET</h3>
  <ul>
    <li><strong>AutoMapper:</strong> Convention-based, powerful object mapper</li>
    <li><strong>Mapster:</strong> High-performance, attribute-based or fluent mapping</li>
    <li><strong>Manual Mapping:</strong> Explicit and readable, but verbose</li>
  </ul>

  <h3 style="color:#10b981">🛠️ Sample Manual Mapping</h3>
  <pre style="background:#dcfce7; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>// Domain model
public class Product {
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}

// DTO
public class ProductDto {
    public string Name { get; set; }
    public decimal Price { get; set; }
}

// Mapping
var dto = new ProductDto {
    Name = product.Name,
    Price = product.Price
};</code></pre>

  <h3 style="color:#34d399">🧩 When to Use What?</h3>
  <ul>
    <li>🔹 Use <strong>AutoMapper</strong> for convention-based quick mappings</li>
    <li>🔹 Use <strong>Mapster</strong> for performance-sensitive and customizable mappings</li>
    <li>🔹 Use <strong>manual mapping</strong> when you need full control and explicitness</li>
  </ul>

  <h3 style="color:#10b981">📚 Learn More</h3>
  <ul>
    <li><a href="https://automapper.org/" target="_blank" style="color:#10b981">AutoMapper – Official Docs</a></li>
    <li><a href="https://github.com/MapsterMapper/Mapster" target="_blank" style="color:#10b981">Mapster on GitHub</a></li>
    <li><a href="https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#entity-models-vs-viewmodels" target="_blank" style="color:#10b981">MS Docs: Models vs DTOs</a></li>
  </ul>
</div>
`,
      children: [
        {
          id: "manual-mapping", title: "Manual mapping", type: "must-know",
          description: `<div style="background:#fff8e1; border-left:6px solid #ffb300; padding:25px 30px; margin-bottom:30px; border-radius:10px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#5d4037;">
  <h2 style="color:#ff8f00; margin-bottom:15px;">🛠️ Manual Object Mapping in .NET - The Art of Explicit Transformation</h2>
  
  <p>
    <strong>Manual mapping</strong> refers to the process of explicitly transferring data from one object to another by writing the mapping code yourself, without relying on third-party libraries. This technique is fundamental when you need <em>fine-grained control</em> over how data flows between layers, especially when transformations or business-specific conversions are involved.
  </p>

  <h3 style="color:#ff8f00; margin-top:25px;">🔍 Why choose manual mapping?</h3>
  <ul style="background:#fff3e0; border-radius:8px; padding:15px 20px; color:#6d4c41; font-weight:600;">
    <li style="margin-bottom:10px;">✔️ No external dependencies - keep your codebase lightweight.</li>
    <li style="margin-bottom:10px;">✔️ Full control over every property and transformation applied.</li>
    <li style="margin-bottom:10px;">✔️ Optimal performance for simple or highly customized mappings.</li>
    <li style="margin-bottom:10px;">✔️ Easier debugging, as every step is explicit and transparent.</li>
    <li style="margin-bottom:10px;">✔️ Flexibility to handle complex mapping scenarios that auto-mappers struggle with.</li>
  </ul>

  <h3 style="color:#ff8f00; margin-top:25px;">⚙️ Example: Mapping between Entity and DTO</h3>
  <pre style="background:#5d4037; color:#fff3e0; padding:20px; border-radius:10px; overflow-x:auto;">
<code>public class UserEntity
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime BirthDate { get; set; }
}

public class UserDto
{
    public string FullName { get; set; }
    public int Age { get; set; }
}

// Manual mapping method
public UserDto MapUserEntityToDto(UserEntity user)
{
    return new UserDto
    {
        FullName = $"{user.FirstName} {user.LastName}",
        Age = CalculateAge(user.BirthDate)
    };
}

private int CalculateAge(DateTime birthDate)
{
    var today = DateTime.Today;
    var age = today.Year - birthDate.Year;
    if (birthDate.Date > today.AddYears(-age)) age--;
    return age;
}</code>
  </pre>

  <h3 style="color:#ff8f00; margin-top:25px;">💡 Best Practices for Manual Mapping</h3>
  <ul style="color:#6d4c41;">
    <li style="margin-bottom:12px;">
      <strong>Separate mapping logic:</strong> Organize your mapping code in dedicated classes or extension methods to keep your business logic clean.
    </li>
    <li style="margin-bottom:12px;">
      <strong>Keep mappings simple and pure:</strong> Avoid embedding business rules or side-effects inside mapping functions.
    </li>
    <li style="margin-bottom:12px;">
      <strong>Reuse common mappings:</strong> Use helper methods for repeated logic like date calculations or formatting.
    </li>
    <li style="margin-bottom:12px;">
      <strong>Test your mappings:</strong> Write unit tests to verify your mappings especially when they include transformations.
    </li>
    <li style="margin-bottom:12px;">
      <strong>Consider maintainability:</strong> When mappings become numerous and complex, consider introducing mapping libraries (e.g., AutoMapper) but always understand the manual approach first.
    </li>
  </ul>

  <h3 style="color:#ff8f00; margin-top:25px;">🔗 Further Reading</h3>
  <ul style="color:#6d4c41;">
    <li><a href="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/structs" target="_blank" style="color:#ff8f00; text-decoration:none;">C# Structs and Classes</a></li>
    <li><a href="https://docs.microsoft.com/en-us/aspnet/core/mvc/models/model-binding" target="_blank" style="color:#ff8f00; text-decoration:none;">ASP.NET Core Model Binding</a></li>
    <li><a href="https://ardalis.com/clarify-automapper-with-examples/" target="_blank" style="color:#ff8f00; text-decoration:none;">Understanding AutoMapper and When to Avoid It</a></li>
  </ul>
</div>
` },
        {
          id: "mappery", title: "Mapster", type: "good-to-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#ecfdf5; padding:1.5rem; border-radius:1rem; border:1px solid #34d399; box-shadow:0 4px 15px rgba(52, 211, 153, 0.25)">
  <h2 style="color:#10b981">⚡ Mapster – High-Performance Object Mapping for .NET</h2>
  <p><strong>Mapster</strong> is a lightweight and extremely fast object mapping library for .NET. It supports both convention-based and attribute-based mappings and is designed for performance-critical applications.</p>

  <h3 style="color:#34d399">🚀 Key Features</h3>
  <ul style="padding-left:1.2rem; list-style:disc">
    <li>⚡ Blazing fast performance (compiles mapping to expressions)</li>
    <li>🔧 Flexible configuration (fluent or attribute-based)</li>
    <li>🎯 Supports projection directly from IQueryable (EF Core optimized)</li>
    <li>🧩 Easily handles nested and complex object mapping</li>
  </ul>

  <h3 style="color:#10b981">📦 Installation</h3>
  <pre style="background:#d1fae5; padding:1rem; border-radius:0.75rem"><code>dotnet add package Mapster
dotnet add package Mapster.DependencyInjection</code></pre>

  <h3 style="color:#34d399">💡 Basic Usage</h3>
  <pre style="background:#d1fae5; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>// Source object
var product = new Product { Name = "Laptop", Price = 1200 };

// Simple mapping
var dto = product.Adapt&lt;ProductDto&gt;();</code></pre>

  <h3 style="color:#10b981">🛠️ Advanced Configuration</h3>
  <pre style="background:#d1fae5; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>TypeAdapterConfig&lt;Product, ProductDto&gt;.NewConfig()
    .Map(dest =&gt; dest.Price, src =&gt; Math.Round(src.Price, 2))
    .Ignore(dest =&gt; dest.InternalCode);</code></pre>

  <h3 style="color:#34d399">📈 EF Core Projection</h3>
  <p>Mapster can project directly from your database queries to DTOs:</p>
  <pre style="background:#d1fae5; padding:1rem; border-radius:0.75rem; overflow-x:auto"><code>var products = await dbContext.Products
    .ProjectToType&lt;ProductDto&gt;()
    .ToListAsync();</code></pre>

  <h3 style="color:#10b981">🧪 Best Practices</h3>
  <ul>
    <li>✅ Use <code>TypeAdapterConfig</code> for reusable mappings</li>
    <li>✅ Use <code>ProjectToType</code> for IQueryable EF performance</li>
    <li>✅ Consider attribute-based mapping for quick setups</li>
    <li>✅ Avoid overusing Mapster inside tight loops — precompile if needed</li>
  </ul>

  <h3 style="color:#34d399">📚 Resources</h3>
  <ul>
    <li><a href="https://github.com/MapsterMapper/Mapster" target="_blank" style="color:#10b981">GitHub – Mapster</a></li>
    <li><a href="https://mapster.io/" target="_blank" style="color:#10b981">Official Docs – mapster.io</a></li>
    <li><a href="https://www.youtube.com/watch?v=DNGeZ8fJjH4" target="_blank" style="color:#10b981">Mapster vs AutoMapper (YouTube)</a></li>
  </ul>
</div>
` },
        {
          id: "automapper", title: "AutoMapper", type: "good-to-know",
          description: `<div style="background:#fff3e0; border-left:6px solid #fb8c00; padding:25px 30px; margin-bottom:30px; border-radius:10px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#bf360c;">
  <h2 style="color:#ef6c00; margin-bottom:15px;">🛠️ AutoMapper: Convention-Based Object-Object Mapper for .NET</h2>

  <p>
    <strong>AutoMapper</strong> is a widely-used object-to-object mapping library in .NET that helps reduce the manual coding required to map between objects, especially useful in layered architectures (DTOs, Entities, ViewModels).
    It follows convention-based mapping but also supports explicit configuration.
  </p>

  <h3 style="color:#ef6c00; margin-top:25px;">🔍 Why Use AutoMapper?</h3>
  <ul style="background:#ffe0b2; border-radius:8px; padding:15px 20px; color:#bf360c; font-weight:600;">
    <li style="margin-bottom:10px;">🚀 Simplifies mapping logic, reducing boilerplate code.</li>
    <li style="margin-bottom:10px;">🔄 Supports complex mappings, flattening, and nested objects.</li>
    <li style="margin-bottom:10px;">⚙️ Customizable with profiles, converters, and resolvers.</li>
    <li style="margin-bottom:10px;">🔧 Integrates well with dependency injection in ASP.NET Core.</li>
    <li style="margin-bottom:10px;">🌐 Large community and mature ecosystem.</li>
  </ul>

  <h3 style="color:#ef6c00; margin-top:25px;">⚙️ Basic Example</h3>
  <pre style="background:#bf360c; color:#fff3e0; padding:20px; border-radius:10px; overflow-x:auto;">
<code>public class UserEntity
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
}

public class UserDto
{
    public string FullName { get; set; }
}

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<UserEntity, UserDto>()
            .ForMember(dest => dest.FullName, opt => opt.MapFrom(src => $"{src.FirstName} {src.LastName}"));
    }
}

// In Startup.cs or Program.cs
services.AddAutoMapper(typeof(UserProfile));</code>
  </pre>

  <p>
    After configuration, you can inject <code>IMapper</code> and use <code>mapper.Map&lt;UserDto&gt;(userEntity)</code> to map objects.
  </p>

  <h3 style="color:#ef6c00; margin-top:25px;">💡 Best Practices</h3>
  <ul style="color:#bf360c;">
    <li style="margin-bottom:12px;">Organize your mappings in Profiles by feature or domain for maintainability.</li>
    <li style="margin-bottom:12px;">Avoid complex logic in mapping expressions—prefer pre-processing data.</li>
    <li style="margin-bottom:12px;">Unit test critical mapping configurations to prevent silent failures.</li>
    <li style="margin-bottom:12px;">Use <code>ProjectTo</code> for efficient LINQ-to-Entities queries that translate to SQL.</li>
    <li style="margin-bottom:12px;">Keep AutoMapper updated to benefit from performance improvements and fixes.</li>
  </ul>

  <h3 style="color:#ef6c00; margin-top:25px;">🔗 Learn More</h3>
  <ul style="color:#bf360c;">
    <li><a href="https://automapper.org/" target="_blank" style="color:#ef6c00; text-decoration:none;">Official AutoMapper Documentation</a></li>
    <li><a href="https://github.com/AutoMapper/AutoMapper" target="_blank" style="color:#ef6c00; text-decoration:none;">GitHub Repository</a></li>
  </ul>
</div>
` },
      ]
    },
    {
      id: "microservices",
      title: "Microservices",
      direction: "left",
      description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:1.5rem; border-radius:1rem; border:1px solid #38bdf8; box-shadow:0 4px 15px rgba(56, 189, 248, 0.25)">
  <h2 style="color:#0ea5e9">🧱 Microservices – Scalable & Modular Software Architecture</h2>

  <p><strong>Microservices</strong> is an architectural style that structures an application as a collection of loosely coupled, independently deployable services. Each service is responsible for a single piece of business functionality and communicates with others through APIs or messaging systems.</p>

  <h3 style="color:#38bdf8">🌟 Core Principles</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>🔹 <strong>Single Responsibility:</strong> Each service solves one specific business problem</li>
    <li>🔹 <strong>Autonomous Deployment:</strong> Services can be developed and deployed independently</li>
    <li>🔹 <strong>Decentralized Data:</strong> Each service manages its own database or storage</li>
    <li>🔹 <strong>Inter-Service Communication:</strong> Via REST APIs, gRPC, or message queues</li>
    <li>🔹 <strong>Fault Isolation:</strong> Failures are contained and don’t bring down the entire system</li>
  </ul>

  <h3 style="color:#0ea5e9">🧩 Key Benefits</h3>
  <ul style="list-style:circle; padding-left:1.2rem; color:#0369a1">
    <li>⚙️ Enables continuous delivery and independent scaling</li>
    <li>🚀 Increases development speed across teams</li>
    <li>🔐 Improves fault tolerance and resiliency</li>
    <li>🌍 Allows polyglot programming (each service can use its own tech stack)</li>
  </ul>

  <h3 style="color:#38bdf8">🏗️ Typical Microservice Components</h3>
  <ul>
    <li>🔗 <strong>API Gateway:</strong> Entry point for all client requests</li>
    <li>📦 <strong>Service Registry & Discovery:</strong> Keeps track of service locations</li>
    <li>📨 <strong>Message Broker:</strong> Enables async communication (RabbitMQ, Kafka, etc.)</li>
    <li>🛡️ <strong>Resilience Tools:</strong> Circuit Breakers, Retries, Timeouts (e.g., Polly)</li>
    <li>🔍 <strong>Observability Stack:</strong> Logging, Tracing, Metrics (e.g., ELK, Jaeger, Prometheus)</li>
    <li>🔒 <strong>Security:</strong> Authentication & Authorization (JWT, OAuth, API Keys)</li>
  </ul>

  <h3 style="color:#0ea5e9">🔄 Communication Patterns</h3>
  <ul>
    <li>🧾 <strong>HTTP/REST</strong>: Simple and widely supported</li>
    <li>⚡ <strong>gRPC</strong>: Efficient binary protocol with strong typing</li>
    <li>📨 <strong>Asynchronous Messaging</strong>: Decouples producers and consumers</li>
  </ul>

  <h3 style="color:#38bdf8">🛡️ Best Practices</h3>
  <ul>
    <li>✅ Keep services small, focused, and testable</li>
    <li>✅ Handle inter-service failure gracefully</li>
    <li>✅ Use versioning for service contracts</li>
    <li>✅ Embrace eventual consistency</li>
    <li>✅ Automate deployments and monitoring</li>
  </ul>

  <h3 style="color:#0ea5e9">📚 Learn More</h3>
  <ul>
    <li><a href="https://martinfowler.com/microservices/" target="_blank" style="color:#0ea5e9">Martin Fowler – Microservices Guide</a></li>
    <li><a href="https://docs.microsoft.com/en-us/dotnet/architecture/microservices/" target="_blank" style="color:#0ea5e9">Microsoft eBook on Microservices</a></li>
    <li><a href="https://microservices.io/" target="_blank" style="color:#0ea5e9">Microservices.io – Pattern Catalog</a></li>
  </ul>
</div>
`,
      children: [
        {
          id: "message-broker",
          title: "Message broker",
          type: "must-know",
          description: `<div style="background:#f0f4c3; border-left:6px solid #c0ca33; padding:25px 30px; margin-bottom:30px; border-radius:10px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#33691e;">
  <h2 style="color:#9ccc65; margin-bottom:15px;">🧩 Microservices & Message Brokers</h2>

  <p>
    <strong>Microservices</strong> architecture breaks down an application into smaller, independently deployable services, each focusing on a single business capability. Communication between microservices is often asynchronous to improve scalability and resilience.
  </p>

  <h3 style="color:#9ccc65; margin-top:25px;">📡 What is a Message Broker?</h3>
  <p>
    A <strong>Message Broker</strong> is an intermediary software that enables microservices to communicate asynchronously by sending and receiving messages through queues or topics.
  </p>

  <ul style="background:#dcedc8; border-radius:8px; padding:15px 20px; color:#33691e; font-weight:600;">
    <li style="margin-bottom:10px;">🛠️ Decouples services by buffering and routing messages.</li>
    <li style="margin-bottom:10px;">⚡ Enables reliable, scalable, and resilient event-driven communication.</li>
    <li style="margin-bottom:10px;">🔄 Supports patterns like Publish/Subscribe, Request/Reply, and Event Sourcing.</li>
  </ul>

  <h3 style="color:#9ccc65; margin-top:25px;">⚙️ Popular Message Brokers</h3>
  <ul style="color:#33691e;">
    <li><strong>RabbitMQ:</strong> Open-source broker supporting AMQP protocol, reliable and widely adopted.</li>
    <li><strong>Apache Kafka:</strong> Distributed streaming platform for high-throughput event processing.</li>
    <li><strong>Azure Service Bus:</strong> Fully managed enterprise messaging service on Azure cloud.</li>
    <li><strong>Amazon SQS:</strong> Scalable queue service in AWS ecosystem.</li>
  </ul>

  <h3 style="color:#9ccc65; margin-top:25px;">🚀 Example: Using RabbitMQ in ASP.NET Core</h3>
  <pre style="background:#33691e; color:#f0f4c3; padding:20px; border-radius:10px; overflow-x:auto;">
<code>public class MessagePublisher
{
    private readonly IModel _channel;

    public MessagePublisher(IConnection connection)
    {
        _channel = connection.CreateModel();
        _channel.QueueDeclare(queue: "orderQueue", durable: false, exclusive: false, autoDelete: false, arguments: null);
    }

    public void Publish(string message)
    {
        var body = Encoding.UTF8.GetBytes(message);
        _channel.BasicPublish(exchange: "", routingKey: "orderQueue", basicProperties: null, body: body);
    }
}</code>
  </pre>

  <h3 style="color:#9ccc65; margin-top:25px;">💡 Best Practices</h3>
  <ul style="color:#33691e;">
    <li style="margin-bottom:12px;">Design microservices to be autonomous and loosely coupled.</li>
    <li style="margin-bottom:12px;">Prefer asynchronous communication to improve scalability.</li>
    <li style="margin-bottom:12px;">Implement retry and dead-letter queues for message failure handling.</li>
    <li style="margin-bottom:12px;">Secure message brokers using TLS and proper authentication mechanisms.</li>
    <li style="margin-bottom:12px;">Monitor broker metrics and set alerts for system health.</li>
  </ul>

  <h3 style="color:#9ccc65; margin-top:25px;">🔗 Learn More</h3>
  <ul style="color:#33691e;">
    <li><a href="https://www.rabbitmq.com/tutorials/tutorial-one-dotnet.html" target="_blank" style="color:#9ccc65; text-decoration:none;">RabbitMQ .NET Tutorials</a></li>
    <li><a href="https://kafka.apache.org/documentation/" target="_blank" style="color:#9ccc65; text-decoration:none;">Apache Kafka Documentation</a></li>
    <li><a href="https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview" target="_blank" style="color:#9ccc65; text-decoration:none;">Azure Service Bus Overview</a></li>
  </ul>
</div>
`,
          children: [
            {
              id: "rabbitmq", title: "RabbitMQ", type: "must-know",
              description: `<div style="background:#e3f2fd; border-left:6px solid #2196f3; padding:25px 30px; margin-bottom:30px; border-radius:10px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#0d47a1;">
  <h2 style="color:#1976d2; margin-bottom:15px;">🐇 RabbitMQ: Robust Message Broker for Distributed Systems</h2>

  <p>
    <strong>RabbitMQ</strong> is a popular open-source message broker that implements the Advanced Message Queuing Protocol (AMQP). It enables asynchronous communication between distributed systems or microservices by managing message queues, exchanges, and routing.
  </p>

  <h3 style="color:#1976d2; margin-top:25px;">🔑 Key Concepts</h3>
  <ul style="background:#bbdefb; border-radius:8px; padding:15px 20px; color:#0d47a1; font-weight:600;">
    <li style="margin-bottom:10px;"><strong>Producer:</strong> Sends messages to RabbitMQ exchanges.</li>
    <li style="margin-bottom:10px;"><strong>Exchange:</strong> Routes messages to queues based on binding rules.</li>
    <li style="margin-bottom:10px;"><strong>Queue:</strong> Buffers messages until consumers process them.</li>
    <li style="margin-bottom:10px;"><strong>Consumer:</strong> Receives and processes messages from queues.</li>
    <li style="margin-bottom:10px;"><strong>Binding:</strong> Relationship between exchange and queue.</li>
  </ul>

  <h3 style="color:#1976d2; margin-top:25px;">⚙️ Common Exchange Types</h3>
  <ul style="color:#0d47a1;">
    <li><strong>Direct:</strong> Routes messages to queues where routing key matches exactly.</li>
    <li><strong>Fanout:</strong> Broadcasts messages to all bound queues regardless of routing key.</li>
    <li><strong>Topic:</strong> Routes messages based on pattern matching of routing keys (supports wildcards).</li>
    <li><strong>Headers:</strong> Routes messages based on message header attributes.</li>
  </ul>

  <h3 style="color:#1976d2; margin-top:25px;">🚀 Basic Example: Publishing & Consuming Messages</h3>
  <pre style="background:#0d47a1; color:#bbdefb; padding:20px; border-radius:10px; overflow-x:auto;">
<code>var factory = new ConnectionFactory() { HostName = "localhost" };
using var connection = factory.CreateConnection();
using var channel = connection.CreateModel();

channel.QueueDeclare(queue: "task_queue", durable: true, exclusive: false, autoDelete: false, arguments: null);

string message = "Hello RabbitMQ!";
var body = Encoding.UTF8.GetBytes(message);

var properties = channel.CreateBasicProperties();
properties.Persistent = true; // Message persistence

channel.BasicPublish(exchange: "", routingKey: "task_queue", basicProperties: properties, body: body);
Console.WriteLine(" [x] Sent {0}", message);</code>
  </pre>

  <p>
    Consumers can subscribe to <code>task_queue</code> and process messages reliably.
  </p>

  <h3 style="color:#1976d2; margin-top:25px;">💡 Best Practices</h3>
  <ul style="color:#0d47a1;">
    <li style="margin-bottom:12px;">Use <strong>durable queues</strong> and <strong>persistent messages</strong> to ensure messages survive broker restarts.</li>
    <li style="margin-bottom:12px;">Implement <strong>acknowledgements</strong> to guarantee message processing.</li>
    <li style="margin-bottom:12px;">Design for <strong>idempotency</strong> in consumers to handle potential duplicate deliveries.</li>
    <li style="margin-bottom:12px;">Use <strong>dead-letter exchanges</strong> for handling failed messages.</li>
    <li style="margin-bottom:12px;">Monitor RabbitMQ server health and set up alerts on queue lengths and consumer status.</li>
    <li style="margin-bottom:12px;">Secure your broker with TLS and proper user permissions.</li>
  </ul>

  <h3 style="color:#1976d2; margin-top:25px;">🔗 Learn More</h3>
  <ul style="color:#0d47a1;">
    <li><a href="https://www.rabbitmq.com/tutorials/tutorial-one-dotnet.html" target="_blank" style="color:#1976d2; text-decoration:none;">Official RabbitMQ .NET Tutorial</a></li>
    <li><a href="https://www.rabbitmq.com/documentation.html" target="_blank" style="color:#1976d2; text-decoration:none;">RabbitMQ Documentation</a></li>
  </ul>
</div>
` },
            {
              id: "apache-kafka", title: "Apache Kafka", type: "good-to-know",
              description: `<div style="background:#f3e5f5; border-left:6px solid #7b1fa2; padding:25px 30px; margin-bottom:30px; border-radius:10px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#4a148c;">
  <h2 style="color:#9c27b0; margin-bottom:15px;">🚀 Apache Kafka: Distributed Streaming Platform</h2>

  <p>
    <strong>Apache Kafka</strong> is a high-throughput, fault-tolerant distributed event streaming platform widely used for building real-time data pipelines and streaming applications. Kafka acts as a durable message broker designed for large-scale message processing with low latency.
  </p>

  <h3 style="color:#9c27b0; margin-top:25px;">🔑 Core Concepts</h3>
  <ul style="background:#e1bee7; border-radius:8px; padding:15px 20px; color:#4a148c; font-weight:600;">
    <li style="margin-bottom:10px;"><strong>Producer:</strong> Sends messages (events) to Kafka topics.</li>
    <li style="margin-bottom:10px;"><strong>Consumer:</strong> Reads messages from topics, usually in consumer groups.</li>
    <li style="margin-bottom:10px;"><strong>Topic:</strong> Logical channel to which messages are published.</li>
    <li style="margin-bottom:10px;"><strong>Partition:</strong> Subdivision of topics for parallelism and scalability.</li>
    <li style="margin-bottom:10px;"><strong>Broker:</strong> Kafka server node that stores and serves data.</li>
    <li style="margin-bottom:10px;"><strong>Offset:</strong> Position of a consumer within a partition to track processed messages.</li>
  </ul>

  <h3 style="color:#9c27b0; margin-top:25px;">⚙️ Kafka Usage Patterns</h3>
  <ul style="color:#4a148c;">
    <li><strong>Event Sourcing:</strong> Persist state changes as a sequence of events.</li>
    <li><strong>Stream Processing:</strong> Real-time analytics and data transformations.</li>
    <li><strong>Decoupled Microservices Communication:</strong> Async messaging and event-driven architecture.</li>
  </ul>

  <h3 style="color:#9c27b0; margin-top:25px;">🚀 Basic Example: Producing Messages with .NET</h3>
  <pre style="background:#4a148c; color:#e1bee7; padding:20px; border-radius:10px; overflow-x:auto;">
<code>var config = new ProducerConfig { BootstrapServers = "localhost:9092" };

using var producer = new ProducerBuilder&lt;Null, string&gt;(config).Build();

try
{
    var deliveryResult = await producer.ProduceAsync("my-topic", new Message&lt;Null, string&gt; { Value = "Hello Kafka!" });
    Console.WriteLine($"Delivered message to {deliveryResult.TopicPartitionOffset}");
}
catch (ProduceException&lt;Null, string&gt; e)
{
    Console.WriteLine($"Delivery failed: {e.Error.Reason}");
}</code>
  </pre>

  <h3 style="color:#9c27b0; margin-top:25px;">💡 Best Practices</h3>
  <ul style="color:#4a148c;">
    <li style="margin-bottom:12px;">Partition topics thoughtfully to balance load and enable parallel processing.</li>
    <li style="margin-bottom:12px;">Use consumer groups to scale message processing horizontally.</li>
    <li style="margin-bottom:12px;">Enable message compression to optimize bandwidth usage.</li>
    <li style="margin-bottom:12px;">Monitor offsets and lag to ensure consumers keep up with producers.</li>
    <li style="margin-bottom:12px;">Implement idempotent producers and consumers to handle retries safely.</li>
    <li style="margin-bottom:12px;">Secure Kafka with SSL, SASL, and ACLs to protect data and access.</li>
  </ul>

  <h3 style="color:#9c27b0; margin-top:25px;">🔗 Learn More</h3>
  <ul style="color:#4a148c;">
    <li><a href="https://kafka.apache.org/documentation/" target="_blank" style="color:#9c27b0; text-decoration:none;">Apache Kafka Official Docs</a></li>
    <li><a href="https://github.com/confluentinc/confluent-kafka-dotnet" target="_blank" style="color:#9c27b0; text-decoration:none;">Confluent .NET Client for Kafka</a></li>
  </ul>
</div>
` },
            {
              id: "azure-service-bus", title: "Azure Service Bus", type: "optional",
              description: `<div style="background:#e0f7fa; border-left:6px solid #26a69a; padding:25px 30px; margin-bottom:30px; border-radius:10px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#004d40;">
  <h2 style="color:#00796b; margin-bottom:15px;">☁️ Azure Service Bus: Enterprise Message Broker for Cloud Apps</h2>

  <p>
    <strong>Azure Service Bus</strong> is a fully managed, reliable cloud messaging service designed for decoupling applications and services. It supports asynchronous communication via queues and topics, enabling scalable and resilient microservices architectures.
  </p>

  <h3 style="color:#00796b; margin-top:25px;">🔑 Core Components</h3>
  <ul style="background:#b2dfdb; border-radius:8px; padding:15px 20px; color:#004d40; font-weight:600;">
    <li style="margin-bottom:10px;"><strong>Queue:</strong> Simple first-in-first-out (FIFO) message storage, one-to-one communication.</li>
    <li style="margin-bottom:10px;"><strong>Topic & Subscription:</strong> Publish-subscribe pattern allowing one-to-many communication.</li>
    <li style="margin-bottom:10px;"><strong>Message:</strong> The data unit sent and received, can include metadata and custom properties.</li>
    <li style="margin-bottom:10px;"><strong>Session:</strong> Enables ordered handling of related message groups.</li>
    <li style="margin-bottom:10px;"><strong>Dead-letter Queue (DLQ):</strong> For storing messages that cannot be delivered or processed.</li>
  </ul>

  <h3 style="color:#00796b; margin-top:25px;">🚀 Basic Example: Sending and Receiving Messages</h3>
  <pre style="background:#4db6ac; color:#004d40; padding:20px; border-radius:10px; overflow-x:auto;">
<code>var connectionString = "&lt;Your Service Bus Connection String&gt;";
var queueName = "myqueue";

// Sender
var client = new ServiceBusClient(connectionString);
var sender = client.CreateSender(queueName);

var message = new ServiceBusMessage("Hello Azure Service Bus!");
await sender.SendMessageAsync(message);

// Receiver
var processor = client.CreateProcessor(queueName, new ServiceBusProcessorOptions());

processor.ProcessMessageAsync += async args =&gt;
{
    string body = args.Message.Body.ToString();
    Console.WriteLine($"Received: {body}");
    await args.CompleteMessageAsync(args.Message);
};

processor.ProcessErrorAsync += async args =&gt;
{
    Console.WriteLine(args.Exception.ToString());
    await Task.CompletedTask;
};

await processor.StartProcessingAsync();
</code>
  </pre>

  <h3 style="color:#00796b; margin-top:25px;">💡 Best Practices</h3>
  <ul style="color:#004d40;">
    <li style="margin-bottom:12px;">Use <strong>sessions</strong> to guarantee ordered processing for message groups.</li>
    <li style="margin-bottom:12px;">Implement <strong>dead-letter queue</strong> handling to process poison messages and prevent data loss.</li>
    <li style="margin-bottom:12px;">Set <strong>message time-to-live (TTL)</strong> to avoid queue bloat from stale messages.</li>
    <li style="margin-bottom:12px;">Leverage <strong>message batching</strong> to improve throughput and reduce costs.</li>
    <li style="margin-bottom:12px;">Use <strong>auto-complete=false</strong> and explicitly complete or abandon messages to handle failures gracefully.</li>
    <li style="margin-bottom:12px;">Monitor queue length and dead-letter queue metrics for system health and alerting.</li>
    <li style="margin-bottom:12px;">Secure Service Bus access using <strong>Azure Active Directory (AAD)</strong> or Shared Access Signatures (SAS).</li>
  </ul>

  <h3 style="color:#00796b; margin-top:25px;">🔗 Learn More</h3>
  <ul style="color:#004d40;">
    <li><a href="https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview" target="_blank" style="color:#00796b; text-decoration:none;">Azure Service Bus Documentation</a></li>
    <li><a href="https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dotnet-get-started" target="_blank" style="color:#00796b; text-decoration:none;">Quickstart: Send and receive messages using .NET</a></li>
  </ul>
</div>
` },
            {
              id: "amazon-sqs", title: "Amazon SQS", type: "optional", description: `<div style="background:#f0f8ff; border-left:6px solid #ff9900; padding:25px 30px; margin-bottom:30px; border-radius:10px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#333;"> <h2 style="color:#e67300; margin-bottom:15px;">🧰 Amazon SQS: Scalable and Fully Managed Message Queue Service</h2> <p> <strong>Amazon Simple Queue Service (SQS)</strong> is a fully managed, distributed message queuing service from AWS that enables decoupling of microservices, distributed systems, and serverless applications. It supports reliable, scalable, and secure asynchronous message queuing. </p> <h3 style="color:#e67300; margin-top:25px;">🔑 Key Features</h3> <ul style="background:#fff3e0; border-radius:8px; padding:15px 20px; color:#663300; font-weight:600;"> <li style="margin-bottom:10px;"><strong>Standard Queues:</strong> Unlimited throughput, at-least-once delivery, and best-effort ordering.</li> <li style="margin-bottom:10px;"><strong>FIFO Queues:</strong> Exactly-once processing and first-in-first-out delivery.</li> <li style="margin-bottom:10px;"><strong>Message Visibility Timeout:</strong> Controls how long a message is hidden after being received.</li> <li style="margin-bottom:10px;"><strong>Dead-Letter Queues (DLQ):</strong> Automatically isolate messages that can't be processed successfully.</li> <li style="margin-bottom:10px;"><strong>Long Polling:</strong> Reduce empty responses and cost by waiting for messages to arrive.</li> </ul> <h3 style="color:#e67300; margin-top:25px;">🚀 Basic Example: Sending and Receiving Messages (AWS SDK for .NET)</h3> <pre style="background:#ffe0b2; color:#663300; padding:20px; border-radius:10px; overflow-x:auto;"> <code>var sqsClient = new AmazonSQSClient(); var queueUrl = "https://sqs.us-east-1.amazonaws.com/123456789012/MyQueue";
// Send message
var sendRequest = new SendMessageRequest
{
QueueUrl = queueUrl,
MessageBody = "Hello Amazon SQS!"
};
await sqsClient.SendMessageAsync(sendRequest);

// Receive message
var receiveRequest = new ReceiveMessageRequest
{
QueueUrl = queueUrl,
MaxNumberOfMessages = 1,
WaitTimeSeconds = 10
};
var receiveResponse = await sqsClient.ReceiveMessageAsync(receiveRequest);
foreach (var message in receiveResponse.Messages)
{
Console.WriteLine($"Received message: {message.Body}");
// Delete message after processing
await sqsClient.DeleteMessageAsync(queueUrl, message.ReceiptHandle);
}
</code>
</pre>

<h3 style="color:#e67300; margin-top:25px;">💡 Best Practices</h3> <ul style="color:#663300;"> <li style="margin-bottom:12px;">Use <strong>FIFO queues</strong> when order and exactly-once processing is required.</li> <li style="margin-bottom:12px;">Configure appropriate <strong>Visibility Timeout</strong> to avoid message duplication.</li> <li style="margin-bottom:12px;">Leverage <strong>Dead-Letter Queues</strong> to isolate problematic messages and analyze failures.</li> <li style="margin-bottom:12px;">Implement <strong>Long Polling</strong> to minimize API calls and reduce cost.</li> <li style="margin-bottom:12px;">Monitor queue length and message age metrics to detect backlogs and bottlenecks.</li> <li style="margin-bottom:12px;">Secure access with IAM policies and use encryption for sensitive data.</li> </ul> <h3 style="color:#e67300; margin-top:25px;">🔗 Learn More</h3> <ul style="color:#663300;"> <li><a href="https://aws.amazon.com/sqs/" target="_blank" style="color:#e67300; text-decoration:none;">Amazon SQS Official Site</a></li> <li><a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html" target="_blank" style="color:#e67300; text-decoration:none;">SQS Developer Guide</a></li> </ul> </div>` },
            {
              id: "netmq", title: "NetMQ", type: "optional",
              description: `<div style="background:#f3f4f6; border-left:6px solid #4a90e2; padding:25px 30px; margin-bottom:30px; border-radius:10px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#222;"> <h2 style="color:#2c6cdf; margin-bottom:15px;">⚡ NetMQ: High-Performance Messaging Library for .NET</h2> <p> <strong>NetMQ</strong> is a native .NET implementation of ZeroMQ, providing asynchronous, high-throughput, low-latency messaging patterns like pub/sub, request/reply, and push/pull. It enables building scalable and distributed applications with flexible socket communication. </p> <h3 style="color:#2c6cdf; margin-top:25px;">🔑 Key Features</h3> <ul style="background:#d6e4ff; border-radius:8px; padding:15px 20px; color:#1a3a8a; font-weight:600;"> <li style="margin-bottom:10px;"><strong>Multiple Messaging Patterns:</strong> Publish/Subscribe, Request/Reply, Push/Pull, and more.</li> <li style="margin-bottom:10px;"><strong>Cross-platform:</strong> Runs on Windows, Linux, macOS with .NET Core support.</li> <li style="margin-bottom:10px;"><strong>High Performance:</strong> Low-latency, asynchronous messaging suitable for real-time apps.</li> <li style="margin-bottom:10px;"><strong>Thread Safe:</strong> Supports concurrent use from multiple threads.</li> <li style="margin-bottom:10px;"><strong>No Broker Required:</strong> Peer-to-peer messaging without central server.</li> </ul> <h3 style="color:#2c6cdf; margin-top:25px;">🚀 Basic Example: Publisher and Subscriber</h3> <pre style="background:#bbd0ff; color:#1a3a8a; padding:20px; border-radius:10px; overflow-x:auto;"> <code>using NetMQ; using NetMQ.Sockets;
// Publisher
using (var pubSocket = new PublisherSocket())
{
pubSocket.Bind("tcp://*:12345");
while (true)
{
pubSocket.SendFrame("TopicA Hello from NetMQ!");
Thread.Sleep(1000);
}
}

// Subscriber
using (var subSocket = new SubscriberSocket())
{
subSocket.Connect("tcp://localhost:12345");
subSocket.Subscribe("TopicA");
while (true)
{
string message = subSocket.ReceiveFrameString();
Console.WriteLine($"Received: {message}");
}
}
</code>
</pre>

<h3 style="color:#2c6cdf; margin-top:25px;">💡 Best Practices</h3> <ul style="color:#1a3a8a;"> <li style="margin-bottom:12px;">Use appropriate messaging patterns to suit your application's communication needs.</li> <li style="margin-bottom:12px;">Manage socket lifecycle carefully to avoid resource leaks.</li> <li style="margin-bottom:12px;">Use <strong>polling</strong> or <strong>NetMQPoller</strong> for scalable event-driven messaging.</li> <li style="margin-bottom:12px;">Handle network interruptions and implement retries gracefully.</li> <li style="margin-bottom:12px;">Avoid blocking calls on the main thread to keep UI responsive in client apps.</li> </ul> <h3 style="color:#2c6cdf; margin-top:25px;">🔗 Learn More</h3> <ul style="color:#1a3a8a;"> <li><a href="https://github.com/zeromq/netmq" target="_blank" style="color:#2c6cdf; text-decoration:none;">NetMQ GitHub Repository</a></li> <li><a href="https://netmq.readthedocs.io/en/latest/" target="_blank" style="color:#2c6cdf; text-decoration:none;">NetMQ Documentation</a></li> </ul> </div>` },
          ]
        },
        {
          id: "message-bus",
          title: "Message-Bus",
          type: "must-know",
          description: `<div style="background:#eef6f9; border-left:6px solid #007acc; padding:25px 30px; margin-bottom:30px; border-radius:10px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#1a1a1a;">
  <h2 style="color:#005a9e; margin-bottom:15px;">📬 Message Bus: Decoupled Communication Backbone</h2>

  <p>
    A <strong>Message Bus</strong> is an architectural pattern used to enable asynchronous communication between different components or microservices in a system by passing messages through a central bus. It helps decouple producers and consumers, improving scalability, maintainability, and fault tolerance.
  </p>

  <h3 style="color:#005a9e; margin-top:25px;">🔑 Core Concepts</h3>
  <ul style="background:#d6e9f8; border-radius:8px; padding:15px 20px; color:#004a8d; font-weight:600;">
    <li style="margin-bottom:10px;"><strong>Publish/Subscribe:</strong> Components publish events to the bus, and interested subscribers receive them.</li>
    <li style="margin-bottom:10px;"><strong>Commands:</strong> Messages that instruct a service to perform a specific action.</li>
    <li style="margin-bottom:10px;"><strong>Events:</strong> Notifications that something happened, without expecting a direct response.</li>
    <li style="margin-bottom:10px;"><strong>Message Brokers:</strong> Tools like RabbitMQ, Azure Service Bus, or Kafka implement message bus functionality.</li>
  </ul>

  <h3 style="color:#005a9e; margin-top:25px;">🚀 Basic Example (Using MediatR for In-Process Message Bus)</h3>
  <pre style="background:#cbe6fb; color:#004a8d; padding:20px; border-radius:10px; overflow-x:auto;">
<code>public class Ping : IRequest&lt;string&gt; { }

public class PingHandler : IRequestHandler\<Ping, string>
{
public Task\<string> Handle(Ping request, CancellationToken cancellationToken)
{
return Task.FromResult("Pong");
}
}

// Usage
var mediator = serviceProvider.GetRequiredService\<IMediator>();
string response = await mediator.Send(new Ping());
Console.WriteLine(response); // Outputs: Pong </code> </pre>

  <h3 style="color:#005a9e; margin-top:25px;">💡 Best Practices</h3>
  <ul style="color:#004a8d;">
    <li style="margin-bottom:12px;">Choose the right message bus type based on system scale: in-process (e.g., MediatR) for simple apps, distributed brokers for microservices.</li>
    <li style="margin-bottom:12px;">Ensure idempotency to handle message retries safely.</li>
    <li style="margin-bottom:12px;">Use message schemas (e.g., JSON Schema, Avro) to enforce contract consistency.</li>
    <li style="margin-bottom:12px;">Implement dead-letter queues or error handling for failed messages.</li>
    <li style="margin-bottom:12px;">Monitor message flow and latency for operational insights.</li>
  </ul>

  <h3 style="color:#005a9e; margin-top:25px;">🔗 Learn More</h3>
  <ul style="color:#004a8d;">
    <li><a href="https://docs.microsoft.com/en-us/dotnet/architecture/microservices/multi-container-microservice-net-applications/implement-message-bus" target="_blank" style="color:#005a9e; text-decoration:none;">Microsoft Docs - Implement Message Bus</a></li>
    <li><a href="https://github.com/jbogard/MediatR" target="_blank" style="color:#005a9e; text-decoration:none;">MediatR GitHub Repository</a></li>
    <li><a href="https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageBus.html" target="_blank" style="color:#005a9e; text-decoration:none;">Enterprise Integration Patterns - Message Bus</a></li>
  </ul>
</div>
`,
          children: [
            {
              id: "masstransit", title: "MassTransit", type: "must-know",
              description: `<div style="background:#f0f8ff; border-left:6px solid #0078d4; padding:25px 30px; margin-bottom:30px; border-radius:10px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#222;">
  <h2 style="color:#005a9e; margin-bottom:15px;">🚀 MassTransit: .NET Distributed Application Framework</h2>

  <p>
    <strong>MassTransit</strong> is a powerful, open-source message bus framework for building reliable, scalable, and distributed .NET applications. It abstracts the complexities of messaging infrastructures like RabbitMQ, Azure Service Bus, Amazon SQS, and others, enabling developers to focus on business logic rather than transport details.
  </p>

  <h3 style="color:#005a9e; margin-top:25px;">🔑 Core Concepts</h3>
  <ul style="background:#d6e9f8; border-radius:8px; padding:15px 20px; color:#004a8d; font-weight:600;">
    <li style="margin-bottom:10px;"><strong>Message:</strong> Immutable data contract representing an event or command.</li>
    <li style="margin-bottom:10px;"><strong>Consumer:</strong> A class that handles incoming messages.</li>
    <li style="margin-bottom:10px;"><strong>Endpoint:</strong> Logical receiver or sender of messages (queue, topic).</li>
    <li style="margin-bottom:10px;"><strong>Middleware Pipeline:</strong> Enables extension points for logging, validation, retry policies.</li>
    <li style="margin-bottom:10px;"><strong>Saga:</strong> Stateful process manager to coordinate long-running workflows.</li>
  </ul>

  <h3 style="color:#005a9e; margin-top:25px;">📦 Supported Brokers</h3>
  <p>
    MassTransit supports many message brokers:
  </p>
  <ul style="color:#004a8d;">
    <li>RabbitMQ</li>
    <li>Azure Service Bus</li>
    <li>Amazon SQS</li>
    <li>ActiveMQ</li>
    <li>In-Memory (for testing and development)</li>
  </ul>

  <h3 style="color:#005a9e; margin-top:25px;">🚀 Basic Example: Defining a Message and Consumer</h3>
  <pre style="background:#cbe6fb; color:#004a8d; padding:20px; border-radius:10px; overflow-x:auto;">
<code>public class SubmitOrder
{
    public Guid OrderId { get; set; }
    public DateTime Timestamp { get; set; }
}

public class SubmitOrderConsumer : IConsumer&lt;SubmitOrder&gt;
{
    public async Task Consume(ConsumeContext&lt;SubmitOrder&gt; context)
    {
        Console.WriteLine($"Order received: {context.Message.OrderId} at {context.Message.Timestamp}");
        // Business logic here...
        await Task.CompletedTask;
    }
}
</code>
  </pre>

  <h3 style="color:#005a9e; margin-top:25px;">⚙️ Configuration Example with RabbitMQ</h3>
  <pre style="background:#cbe6fb; color:#004a8d; padding:20px; border-radius:10px; overflow-x:auto;">
<code>services.AddMassTransit(x =&gt;
{
    x.AddConsumer&lt;SubmitOrderConsumer&gt;();

    x.UsingRabbitMq((context, cfg) =&gt;
    {
        cfg.Host("rabbitmq://localhost");

        cfg.ReceiveEndpoint("order-submit-queue", e =&gt;
        {
            e.ConfigureConsumer&lt;SubmitOrderConsumer&gt;(context);
        });
    });
});
</code>
  </pre>

  <h3 style="color:#005a9e; margin-top:25px;">💡 Best Practices</h3>
  <ul style="color:#004a8d;">
    <li style="margin-bottom:12px;">Design messages as immutable data transfer objects (DTOs) to prevent side effects and improve reliability.</li>
    <li style="margin-bottom:12px;">Implement retry policies and use error queues to handle transient failures and avoid message loss.</li>
    <li style="margin-bottom:12px;">Use sagas for complex, stateful, long-running workflows to manage process consistency.</li>
    <li style="margin-bottom:12px;">Keep consumers single-purpose and focused on processing one message type to simplify testing and maintenance.</li>
    <li style="margin-bottom:12px;">Monitor message throughput and failures with logging and metrics for observability.</li>
    <li style="margin-bottom:12px;">Use message versioning and contracts carefully to maintain backward compatibility.</li>
  </ul>

  <h3 style="color:#005a9e; margin-top:25px;">🔗 Useful Resources</h3>
  <ul style="color:#004a8d;">
    <li><a href="https://masstransit-project.com/" target="_blank" style="color:#005a9e; text-decoration:none;">Official MassTransit Documentation</a></li>
    <li><a href="https://github.com/MassTransit/MassTransit" target="_blank" style="color:#005a9e; text-decoration:none;">GitHub Repository</a></li>
    <li><a href="https://masstransit-project.com/usage/sagas" target="_blank" style="color:#005a9e; text-decoration:none;">Sagas - Stateful Workflow</a></li>
  </ul>
</div>
` },
            {
              id: "nservicebus", title: "NServiceBus", type: "good-to-know",
              description: `<div style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#222; border-radius:10px; padding:25px 30px; margin-bottom:30px;">

  <h2 style="color:#1e90ff; border-left:6px solid #1e90ff; padding-left:10px; margin-bottom:20px;">
    🚀 NServiceBus: .NET Enterprise Messaging Framework
  </h2>

  <p style="color:#333; font-size:16px;">
    <strong>NServiceBus</strong> is a robust, enterprise-grade messaging and workflow framework for building distributed systems on the .NET platform. It simplifies asynchronous communication between services by providing advanced features such as retries, sagas, message routing, and error handling out of the box.
  </p>

  <h3 style="color:#ff6347; margin-top:30px; margin-bottom:15px; border-bottom:2px solid #ff6347; padding-bottom:5px;">
    🔑 Key Features
  </h3>
  <ul style="background:#ffe4e1; border-radius:8px; padding:15px 25px; color:#b22222; font-weight:600; list-style-type:circle;">
    <li style="margin-bottom:10px;">Reliable Messaging: Guaranteed delivery with built-in retries, deduplication, and durable storage.</li>
    <li style="margin-bottom:10px;">Sagas: Support for long-running, stateful business processes.</li>
    <li style="margin-bottom:10px;">Pluggable Transport: Works with various transport technologies like MSMQ, RabbitMQ, Azure Service Bus, Amazon SQS, and more.</li>
    <li style="margin-bottom:10px;">Message Routing: Flexible routing capabilities with endpoint discovery.</li>
    <li>Extensive Monitoring & Management: Tools like ServicePulse and ServiceInsight for health checks and message tracing.</li>
  </ul>

  <h3 style="color:#228b22; margin-top:30px; margin-bottom:15px; border-bottom:2px solid #228b22; padding-bottom:5px;">
    🚀 Basic Example: Define a Message and Handler
  </h3>
  <pre style="background:#e6ffe6; color:#2f4f2f; padding:20px; border-radius:10px; overflow-x:auto; font-size:14px;">
<code>public class PlaceOrder : ICommand
{
    public Guid OrderId { get; set; }
    public DateTime OrderDate { get; set; }
}

public class PlaceOrderHandler : IHandleMessages&lt;PlaceOrder&gt;
{
    public Task Handle(PlaceOrder message, IMessageHandlerContext context)
    {
        Console.WriteLine($"Processing order {message.OrderId} placed on {message.OrderDate}");
        // Business logic here...
        return Task.CompletedTask;
    }
}
</code>
  </pre>

  <h3 style="color:#8a2be2; margin-top:30px; margin-bottom:15px; border-bottom:2px solid #8a2be2; padding-bottom:5px;">
    ⚙️ Configuration Example
  </h3>
  <pre style="background:#f3e6ff; color:#4b0082; padding:20px; border-radius:10px; overflow-x:auto; font-size:14px;">
<code>var endpointConfiguration = new EndpointConfiguration("OrderEndpoint");

endpointConfiguration.UseTransport&lt;RabbitMQTransport&gt;()
    .ConnectionString("host=localhost")
    .UseConventionalRoutingTopology();

endpointConfiguration.UsePersistence&lt;InMemoryPersistence&gt;();

var endpointInstance = await Endpoint.Start(endpointConfiguration)
    .ConfigureAwait(false);

// Send a command
await endpointInstance.Send(new PlaceOrder { OrderId = Guid.NewGuid(), OrderDate = DateTime.UtcNow });
</code>
  </pre>

  <h3 style="color:#d2691e; margin-top:30px; margin-bottom:15px; border-bottom:2px solid #d2691e; padding-bottom:5px;">
    💡 Best Practices
  </h3>
  <ul style="color:#8b4513;">
    <li style="margin-bottom:12px;">Design messages as immutable and serializable objects.</li>
    <li style="margin-bottom:12px;">Keep message handlers focused on a single responsibility.</li>
    <li style="margin-bottom:12px;">Use sagas to manage complex, long-running workflows.</li>
    <li style="margin-bottom:12px;">Implement proper error handling with retries and error queues.</li>
    <li style="margin-bottom:12px;">Monitor endpoints and message flows using ServicePulse and ServiceInsight tools.</li>
    <li>Secure communication by using transport-level encryption and access controls.</li>
  </ul>

  <h3 style="color:#2f4f4f; margin-top:30px; margin-bottom:15px; border-bottom:2px solid #2f4f4f; padding-bottom:5px;">
    🔗 Useful Resources
  </h3>
  <ul style="color:#2f4f4f;">
    <li><a href="https://docs.particular.net/nservicebus/" target="_blank" style="color:#1e90ff; text-decoration:none;">Official NServiceBus Documentation</a></li>
    <li><a href="https://github.com/Particular/NServiceBus" target="_blank" style="color:#1e90ff; text-decoration:none;">NServiceBus GitHub Repository</a></li>
    <li><a href="https://particular.net/" target="_blank" style="color:#1e90ff; text-decoration:none;">Particular Software Homepage</a></li>
  </ul>

</div>
` },
            {
              id: "realy-netq", title: "EasyNetMQ", type: "optional",
              description: `<div style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#222; border-radius:10px; padding:25px 30px; margin-bottom:30px;">

  <h2 style="color:#005a9e; border-left:6px solid #005a9e; padding-left:10px; margin-bottom:20px;">
    🐇 EasyNetQ: Simple .NET API for RabbitMQ
  </h2>

  <p style="font-size:16px; color:#333;">
    <strong>EasyNetQ</strong> is a lightweight, easy-to-use abstraction library over RabbitMQ for .NET applications. It simplifies messaging by providing a straightforward API, handling common messaging patterns and RabbitMQ complexities under the hood.
  </p>

  <h3 style="color:#007acc; margin-top:30px; margin-bottom:15px; border-bottom:2px solid #007acc; padding-bottom:5px;">
    🔑 Key Features
  </h3>
  <ul style="background:#dbeeff; border-radius:8px; padding:15px 25px; color:#004080; font-weight:600;">
    <li style="margin-bottom:10px;">Simplifies publish/subscribe and request/response messaging patterns.</li>
    <li style="margin-bottom:10px;">Automatic connection and channel management.</li>
    <li style="margin-bottom:10px;">Strongly-typed messages with serialization built-in.</li>
    <li style="margin-bottom:10px;">Support for advanced RabbitMQ features like routing, headers, and delayed messages.</li>
    <li>Extensible with plugins for logging, error handling, and more.</li>
  </ul>

  <h3 style="color:#007acc; margin-top:30px; margin-bottom:15px; border-bottom:2px solid #007acc; padding-bottom:5px;">
    🚀 Basic Usage Example
  </h3>
  <pre style="background:#e6f0ff; color:#003366; padding:20px; border-radius:10px; overflow-x:auto; font-size:14px;">
<code>var bus = RabbitHutch.CreateBus("host=localhost");

bus.PubSub.Subscribe&lt;OrderPlaced&gt;("subscriptionId", order =>
{
    Console.WriteLine($"Received order {order.OrderId} placed at {order.OrderDate}");
});

// Publish a message
bus.PubSub.Publish(new OrderPlaced
{
    OrderId = Guid.NewGuid(),
    OrderDate = DateTime.UtcNow
});
</code>
  </pre>

  <h3 style="color:#007acc; margin-top:30px; margin-bottom:15px; border-bottom:2px solid #007acc; padding-bottom:5px;">
    💡 Best Practices
  </h3>
  <ul style="color:#004080;">
    <li style="margin-bottom:12px;">Reuse the bus instance throughout your application to avoid connection overhead.</li>
    <li style="margin-bottom:12px;">Design messages as immutable and version-tolerant DTOs.</li>
    <li style="margin-bottom:12px;">Use meaningful subscription IDs to manage subscriptions effectively.</li>
    <li style="margin-bottom:12px;">Handle exceptions within subscribers to avoid message loss.</li>
    <li>Consider setting up retry policies and error queues for robust error handling.</li>
  </ul>

  <h3 style="color:#007acc; margin-top:30px; margin-bottom:15px; border-bottom:2px solid #007acc; padding-bottom:5px;">
    🔗 Useful Links
  </h3>
  <ul style="color:#004080;">
    <li><a href="https://github.com/EasyNetQ/EasyNetQ" target="_blank" style="color:#007acc; text-decoration:none;">EasyNetQ GitHub Repository</a></li>
    <li><a href="https://easynetq.com/" target="_blank" style="color:#007acc; text-decoration:none;">Official EasyNetQ Documentation</a></li>
    <li><a href="https://www.rabbitmq.com/" target="_blank" style="color:#007acc; text-decoration:none;">RabbitMQ Official Site</a></li>
  </ul>

</div>
` },
          ]
        },
        {
          id: "api-gateway",
          title: "API Gateway",
          type: "good-to-know",
          description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #222; border-radius: 10px; padding: 25px 30px; margin-bottom: 30px;">

  <h2 style="color: #007acc; border-left: 6px solid #007acc; padding-left: 10px; margin-bottom: 20px;">
    🌐 API Gateway: Centralized Request Management for Microservices
  </h2>

  <p style="font-size: 16px; color: #333;">
    An <strong>API Gateway</strong> is a server that acts as an entry point for clients to access multiple backend microservices. It abstracts the complexity of microservices architecture by routing requests, handling cross-cutting concerns such as authentication, rate limiting, caching, logging, and more.
  </p>

  <h3 style="color: #005a9e; margin-top: 30px; margin-bottom: 15px; border-bottom: 2px solid #005a9e; padding-bottom: 5px;">
    🔑 Core Responsibilities
  </h3>
  <ul style="background: #dbeeff; border-radius: 8px; padding: 15px 25px; color: #004080; font-weight: 600;">
    <li style="margin-bottom: 10px;">Request Routing: Direct client requests to appropriate microservices.</li>
    <li style="margin-bottom: 10px;">Authentication & Authorization: Enforce security policies and validate tokens.</li>
    <li style="margin-bottom: 10px;">Load Balancing: Distribute traffic evenly across service instances.</li>
    <li style="margin-bottom: 10px;">Request & Response Transformation: Modify payloads or headers as needed.</li>
    <li style="margin-bottom: 10px;">Rate Limiting & Throttling: Prevent abuse by limiting request rates.</li>
    <li style="margin-bottom: 10px;">Caching: Cache frequent responses to improve performance.</li>
    <li>Logging & Monitoring: Track requests for auditing and performance insights.</li>
  </ul>

  <h3 style="color: #007acc; margin-top: 30px; margin-bottom: 15px; border-bottom: 2px solid #007acc; padding-bottom: 5px;">
    🚀 Basic Example
  </h3>
  <pre style="background: #e6f0ff; color: #003366; padding: 20px; border-radius: 10px; overflow-x: auto; font-size: 14px;">
<code>var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Simple proxy example routing requests to order microservice
app.Map("/orders/{*path}", async (HttpContext context) =&gt; {
    var client = new HttpClient();
    var targetUri = "https://orders-service/api/orders/" + context.Request.Path.Value?.Split('/')[2];
    var response = await client.GetAsync(targetUri);
    var content = await response.Content.ReadAsStringAsync();
    context.Response.ContentType = "application/json";
    await context.Response.WriteAsync(content);
});

app.Run();
</code>
  </pre>

  <h3 style="color: #005a9e; margin-top: 30px; margin-bottom: 15px; border-bottom: 2px solid #005a9e; padding-bottom: 5px;">
    💡 Best Practices
  </h3>
  <ul style="color: #004080;">
    <li style="margin-bottom: 12px;">Centralize authentication & authorization in the gateway to reduce duplicated logic.</li>
    <li style="margin-bottom: 12px;">Implement rate limiting to protect backend services from overload.</li>
    <li style="margin-bottom: 12px;">Use caching strategically to improve performance without sacrificing data freshness.</li>
    <li style="margin-bottom: 12px;">Handle errors gracefully and return meaningful responses to clients.</li>
    <li style="margin-bottom: 12px;">Ensure your API gateway is highly available and scalable to avoid single points of failure.</li>
    <li>Integrate comprehensive logging and monitoring for observability and debugging.</li>
  </ul>

  <h3 style="color: #007acc; margin-top: 30px; margin-bottom: 15px; border-bottom: 2px solid #007acc; padding-bottom: 5px;">
    🔗 Further Reading
  </h3>
  <ul style="color: #004080;">
    <li><a href="https://microservices.io/patterns/apigateway.html" target="_blank" style="color: #007acc; text-decoration: none;">Microservices API Gateway Pattern</a></li>
    <li><a href="https://docs.microsoft.com/en-us/azure/api-management/api-management-key-concepts" target="_blank" style="color: #007acc; text-decoration: none;">Azure API Management Concepts</a></li>
    <li><a href="https://konghq.com/" target="_blank" style="color: #007acc; text-decoration: none;">Kong API Gateway</a></li>
    <li><a href="https://www.nginx.com/blog/what-is-an-api-gateway/" target="_blank" style="color: #007acc; text-decoration: none;">NGINX API Gateway Introduction</a></li>
  </ul>

</div>
`,
          children: [
            {
              id: "ocelot", title: "Ocelot", type: "must-know",
              description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #222; background: #f0f8ff; border-radius: 12px; padding: 25px 30px; box-shadow: 0 4px 12px rgba(0,123,255,0.15);">

  <h2 style="color: #007bff; border-left: 6px solid #007bff; padding-left: 12px; margin-bottom: 20px;">
    🛡️ Ocelot: API Gateway for .NET Core Microservices
  </h2>

  <p style="font-size: 16px; line-height: 1.5; color: #333;">
    <strong>Ocelot</strong> is a lightweight, open-source API Gateway designed specifically for <em>.NET Core</em> microservices architectures. It centralizes routing, authentication, load balancing, rate limiting, caching, and more, providing a unified interface between clients and backend services.
  </p>

  <h3 style="color: #0056b3; margin-top: 30px; margin-bottom: 15px; border-bottom: 2px solid #0056b3; padding-bottom: 6px;">
    🔑 Key Features
  </h3>
  <ul style="background: #d9eaff; border-radius: 8px; padding: 18px 25px; color: #004080; font-weight: 600;">
    <li style="margin-bottom: 12px;">Flexible Request Routing & URL Rewriting</li>
    <li style="margin-bottom: 12px;">Support for Authentication & Authorization (JWT, OAuth2, OpenID Connect)</li>
    <li style="margin-bottom: 12px;">Load Balancing and Service Discovery Integration</li>
    <li style="margin-bottom: 12px;">Rate Limiting & Throttling to protect backend services</li>
    <li style="margin-bottom: 12px;">Response Caching for improved performance</li>
    <li style="margin-bottom: 12px;">Custom Middleware support for extensibility</li>
  </ul>

  <h3 style="color: #007bff; margin-top: 30px; margin-bottom: 15px; border-bottom: 2px solid #007bff; padding-bottom: 6px;">
    🚀 Basic Usage Example
  </h3>
  <pre style="background: #e6f3ff; color: #003366; padding: 18px 20px; border-radius: 10px; overflow-x: auto; font-size: 14px;">
<code>var builder = WebApplication.CreateBuilder(args);
builder.Services.AddOcelot();

var app = builder.Build();
app.UseOcelot().Wait();

app.Run();
</code>
  </pre>

  <h3 style="color: #0056b3; margin-top: 30px; margin-bottom: 15px; border-bottom: 2px solid #0056b3; padding-bottom: 6px;">
    🛠 Configuration (ocelot.json)
  </h3>
  <pre style="background: #e6f3ff; color: #003366; padding: 18px 20px; border-radius: 10px; overflow-x: auto; font-size: 14px;">
<code>{
  "Routes": [
    {
      "DownstreamPathTemplate": "/api/orders/{everything}",
      "DownstreamScheme": "https",
      "DownstreamHostAndPorts": [
        {
          "Host": "orderservice.local",
          "Port": 443
        }
      ],
      "UpstreamPathTemplate": "/orders/{everything}",
      "UpstreamHttpMethod": [ "Get", "Post", "Put" ],
      "AuthenticationOptions": {
        "AuthenticationProviderKey": "Bearer",
        "AllowedScopes": []
      },
      "RateLimitOptions": {
        "ClientWhitelist": [],
        "EnableRateLimiting": true,
        "Period": "1m",
        "Limit": 100
      }
    }
  ],
  "GlobalConfiguration": {
    "BaseUrl": "https://gateway.local"
  }
}
</code>
  </pre>

  <h3 style="color: #007bff; margin-top: 30px; margin-bottom: 15px; border-bottom: 2px solid #007bff; padding-bottom: 6px;">
    💡 Best Practices
  </h3>
  <ul style="color: #004080;">
    <li style="margin-bottom: 12px;">Centralize authentication & authorization logic in the API Gateway to reduce redundancy.</li>
    <li style="margin-bottom: 12px;">Use rate limiting to protect backend services from abuse and DoS attacks.</li>
    <li style="margin-bottom: 12px;">Enable caching on frequently requested endpoints to improve latency.</li>
    <li style="margin-bottom: 12px;">Monitor gateway logs and metrics actively for early detection of issues.</li>
    <li style="margin-bottom: 12px;">Implement fallback and circuit breaker patterns to enhance system resilience.</li>
  </ul>

  <h3 style="color: #0056b3; margin-top: 30px; margin-bottom: 10px;">
    🔗 Learn More
  </h3>
  <ul style="color: #004080; margin-top: 0; padding-left: 20px;">
    <li><a href="https://ocelot.readthedocs.io/en/latest/" target="_blank" style="color:#007bff; text-decoration:none;">Official Ocelot Documentation</a></li>
    <li><a href="https://github.com/ThreeMammals/Ocelot" target="_blank" style="color:#007bff; text-decoration:none;">Ocelot GitHub Repository</a></li>
  </ul>

</div>
` },
            {
              id: "yarp", title: "YARP", type: "must-know",
              description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1e1e1e; background: #e6f7fa; border-radius: 12px; padding: 28px 32px; box-shadow: 0 5px 15px rgba(0, 150, 136, 0.15);">

  <h2 style="color: #009688; border-left: 6px solid #00796b; padding-left: 14px; margin-bottom: 20px; font-weight: 700;">
    🔄 YARP: Yet Another Reverse Proxy for .NET
  </h2>

  <p style="font-size: 16px; line-height: 1.6; color: #004d40;">
    <strong>YARP</strong> is a highly customizable, fast, and feature-rich reverse proxy built on top of <em>ASP.NET Core</em>. Designed by Microsoft, it enables developers to easily route, transform, and manage HTTP requests to backend services in microservices and distributed system architectures.
  </p>

  <h3 style="color: #00796b; margin-top: 30px; margin-bottom: 16px; border-bottom: 3px solid #004d40; padding-bottom: 6px;">
    🚀 Key Features
  </h3>
  <ul style="background: #b2dfdb; border-radius: 10px; padding: 18px 28px; color: #004d40; font-weight: 600;">
    <li style="margin-bottom: 12px;">Dynamic and flexible routing to multiple backend services</li>
    <li style="margin-bottom: 12px;">Load balancing with multiple algorithms (round-robin, power of two choices, etc.)</li>
    <li style="margin-bottom: 12px;">Request and response transformation (header modification, path rewrites)</li>
    <li style="margin-bottom: 12px;">Integration with ASP.NET Core middleware pipeline for extensibility</li>
    <li style="margin-bottom: 12px;">Health checks and automatic backend service discovery</li>
    <li style="margin-bottom: 12px;">Support for rate limiting, retries, and circuit breakers (via policies)</li>
  </ul>

  <h3 style="color: #004d40; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #00796b; padding-bottom: 6px;">
    ⚙️ Basic Setup Example
  </h3>
  <pre style="background: #b2dfdb; color: #004d40; padding: 20px 25px; border-radius: 10px; overflow-x: auto; font-size: 14px;">
<code>var builder = WebApplication.CreateBuilder(args);

builder.Services.AddReverseProxy()
    .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

var app = builder.Build();

app.MapReverseProxy();

app.Run();
</code>
  </pre>

  <h3 style="color: #00796b; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #004d40; padding-bottom: 6px;">
    🗂 Configuration Example (appsettings.json)
  </h3>
  <pre style="background: #b2dfdb; color: #004d40; padding: 20px 25px; border-radius: 10px; overflow-x: auto; font-size: 14px;">
<code>{
  "ReverseProxy": {
    "Routes": [
      {
        "RouteId": "route1",
        "ClusterId": "cluster1",
        "Match": {
          "Path": "/api/orders/{**catch-all}"
        }
      }
    ],
    "Clusters": [
      {
        "ClusterId": "cluster1",
        "Destinations": {
          "orderService": {
            "Address": "https://orderservice.example.com/"
          }
        }
      }
    ]
  }
}
</code>
  </pre>

  <h3 style="color: #004d40; margin-top: 32px; margin-bottom: 10px;">
    💡 Best Practices
  </h3>
  <ul style="color: #004d40;">
    <li style="margin-bottom: 12px;">Use health checks to monitor backend service availability and improve reliability.</li>
    <li style="margin-bottom: 12px;">Leverage request/response transforms to implement cross-cutting concerns like headers and authentication.</li>
    <li style="margin-bottom: 12px;">Implement load balancing strategies suited to your traffic patterns.</li>
    <li style="margin-bottom: 12px;">Secure your proxy endpoints using authentication and authorization middleware.</li>
    <li style="margin-bottom: 12px;">Use policy-based retry and circuit breakers for resilient communication with backend services.</li>
  </ul>

  <h3 style="color: #00796b; margin-top: 30px; margin-bottom: 10px;">
    🔗 Learn More
  </h3>
  <ul style="color: #004d40; margin-top: 0; padding-left: 20px;">
    <li><a href="https://microsoft.github.io/reverse-proxy/" target="_blank" style="color:#00796b; text-decoration:none;">Official YARP Documentation</a></li>
    <li><a href="https://github.com/microsoft/reverse-proxy" target="_blank" style="color:#00796b; text-decoration:none;">YARP GitHub Repository</a></li>
  </ul>

</div>
` },
          ]
        },
        {
          id: "containerization",
          title: "Containerization",
          description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f0f7f9; border-radius: 12px; padding: 28px 32px; box-shadow: 0 6px 18px rgba(0, 123, 167, 0.15); color: #05445E;">

  <h2 style="color: #189AB4; border-left: 6px solid #05445E; padding-left: 16px; margin-bottom: 24px; font-weight: 700;">
    🐳 Containerization: Modern App Deployment Made Easy
  </h2>

  <p style="font-size: 16px; line-height: 1.7; color: #05445E;">
    Containerization allows packaging applications and their dependencies into isolated, lightweight units called <strong>containers</strong>. This approach ensures consistent behavior across different environments — from development to production — and improves scalability, portability, and resource efficiency.
  </p>

  <h3 style="color: #05445E; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #189AB4; padding-bottom: 8px;">
    🚀 Key Concepts
  </h3>
  <ul style="background: #ADE8F4; border-radius: 10px; padding: 18px 26px; color: #05445E; font-weight: 600;">
    <li style="margin-bottom: 12px;">Containers encapsulate application code, runtime, libraries, and system tools.</li>
    <li style="margin-bottom: 12px;">Unlike virtual machines, containers share the host OS kernel, making them lightweight and fast.</li>
    <li style="margin-bottom: 12px;">Docker is the most popular container platform, offering tools to build, run, and manage containers.</li>
    <li style="margin-bottom: 12px;">Container images are immutable snapshots used to instantiate containers.</li>
    <li style="margin-bottom: 12px;">Container orchestration platforms (e.g., Kubernetes) automate deployment, scaling, and management.</li>
  </ul>

  <h3 style="color: #05445E; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #189AB4; padding-bottom: 8px;">
    ⚙️ Basic Dockerfile Example
  </h3>
  <pre style="background: #ADE8F4; color: #05445E; padding: 20px 25px; border-radius: 10px; overflow-x: auto; font-size: 14px;">
<code>FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["MyApp/MyApp.csproj", "MyApp/"]
RUN dotnet restore "MyApp/MyApp.csproj"
COPY . .
WORKDIR "/src/MyApp"
RUN dotnet build "MyApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MyApp.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MyApp.dll"]
</code>
  </pre>

  <h3 style="color: #189AB4; margin-top: 32px; margin-bottom: 10px;">
    💡 Best Practices
  </h3>
  <ul style="color: #05445E;">
    <li style="margin-bottom: 12px;">Keep Docker images as small as possible by using multi-stage builds and slim base images.</li>
    <li style="margin-bottom: 12px;">Avoid storing secrets or sensitive data inside container images.</li>
    <li style="margin-bottom: 12px;">Use official and verified base images to ensure security and stability.</li>
    <li style="margin-bottom: 12px;">Leverage container orchestration platforms (Kubernetes, Docker Swarm) for production deployments.</li>
    <li style="margin-bottom: 12px;">Regularly update container images and dependencies to patch vulnerabilities.</li>
  </ul>

  <h3 style="color: #189AB4; margin-top: 30px; margin-bottom: 12px;">
    🔗 Learn More
  </h3>
  <ul style="color: #05445E; margin-top: 0; padding-left: 20px;">
    <li><a href="https://docs.docker.com/get-started/" target="_blank" style="color:#189AB4; text-decoration:none;">Docker Official Documentation</a></li>
    <li><a href="https://kubernetes.io/docs/home/" target="_blank" style="color:#189AB4; text-decoration:none;">Kubernetes Official Docs</a></li>
    <li><a href="https://www.redhat.com/en/topics/containers/what-is-containerization" target="_blank" style="color:#189AB4; text-decoration:none;">RedHat: What is Containerization?</a></li>
  </ul>

</div>
`,
          children: [
            {
              id: "docker", title: "Docker", type: "must-know",
              description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #fff8f0; border-radius: 14px; padding: 30px 36px; box-shadow: 0 5px 20px rgba(255, 152, 0, 0.15); color: #bf5700;">

  <h2 style="color: #e65100; border-left: 8px solid #bf360c; padding-left: 18px; margin-bottom: 28px; font-weight: 700;">
    🐳 Docker: Containerization Simplified
  </h2>

  <p style="font-size: 16.5px; line-height: 1.75; color: #6d3b00;">
    Docker is an open-source platform that automates the deployment, scaling, and management of applications using container technology. It packages your application with all its dependencies into a standardized unit called a <strong>container</strong>, ensuring that it runs seamlessly in any environment.
  </p>

  <h3 style="color: #bf360c; margin-top: 36px; margin-bottom: 18px; border-bottom: 4px solid #e65100; padding-bottom: 10px;">
    🔑 Core Concepts
  </h3>
  <ul style="background: #ffe0b2; border-radius: 12px; padding: 20px 30px; color: #6d3b00; font-weight: 600;">
    <li style="margin-bottom: 14px;"><strong>Docker Engine:</strong> The runtime that builds and runs containers.</li>
    <li style="margin-bottom: 14px;"><strong>Docker Images:</strong> Immutable snapshots containing your application and environment.</li>
    <li style="margin-bottom: 14px;"><strong>Containers:</strong> Runtime instances of images, isolated and lightweight.</li>
    <li style="margin-bottom: 14px;"><strong>Dockerfile:</strong> Script to define how to build Docker images.</li>
    <li style="margin-bottom: 14px;"><strong>Docker Hub:</strong> Public registry to share and pull Docker images.</li>
  </ul>

  <h3 style="color: #bf360c; margin-top: 36px; margin-bottom: 18px; border-bottom: 4px solid #e65100; padding-bottom: 10px;">
    🛠️ Sample Dockerfile for ASP.NET Core App
  </h3>
  <pre style="background: #ffe0b2; color: #6d3b00; padding: 25px 30px; border-radius: 12px; overflow-x: auto; font-size: 15px;">
<code>FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["MyApp/MyApp.csproj", "MyApp/"]
RUN dotnet restore "MyApp/MyApp.csproj"
COPY . .
WORKDIR "/src/MyApp"
RUN dotnet build "MyApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MyApp.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MyApp.dll"]
</code>
  </pre>

  <h3 style="color: #e65100; margin-top: 36px; margin-bottom: 14px;">🚀 Best Practices</h3>
  <ul style="color: #6d3b00;">
    <li style="margin-bottom: 14px;">Use <strong>multi-stage builds</strong> to keep image size minimal.</li>
    <li style="margin-bottom: 14px;">Prefer official, slim base images for security and efficiency.</li>
    <li style="margin-bottom: 14px;">Avoid including secrets or credentials inside images.</li>
    <li style="margin-bottom: 14px;">Use <strong>.dockerignore</strong> file to exclude unnecessary files from builds.</li>
    <li style="margin-bottom: 14px;">Regularly update images to patch vulnerabilities.</li>
    <li style="margin-bottom: 14px;">Leverage <strong>Docker Compose</strong> for multi-container applications.</li>
    <li style="margin-bottom: 14px;">Use container orchestration platforms (like Kubernetes) for production environments.</li>
  </ul>

  <h3 style="color: #bf360c; margin-top: 36px; margin-bottom: 14px;">🔗 Learn More</h3>
  <ul style="color: #6d3b00; padding-left: 20px;">
    <li><a href="https://docs.docker.com/get-started/" target="_blank" style="color:#e65100; text-decoration:none;">Official Docker Documentation</a></li>
    <li><a href="https://docs.microsoft.com/en-us/dotnet/core/docker/" target="_blank" style="color:#e65100; text-decoration:none;">Microsoft's Docker Guide for .NET</a></li>
    <li><a href="https://docker-curriculum.com/" target="_blank" style="color:#e65100; text-decoration:none;">Docker Curriculum - Interactive Learning</a></li>
  </ul>

</div>
` },
            {
              id: "podman", title: "Podman", type: "optional",
              description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f3f9f9; border-radius: 14px; padding: 28px 32px; box-shadow: 0 6px 20px rgba(26, 115, 105, 0.15); color: #1a7369;">

  <h2 style="color: #13856f; border-left: 6px solid #0e5248; padding-left: 16px; margin-bottom: 24px; font-weight: 700;">
    🐙 Podman: Docker-Compatible Container Engine Without Daemon
  </h2>

  <p style="font-size: 16px; line-height: 1.7;">
    Podman is an open-source container engine compatible with Docker that runs daemonless and allows container management without root privileges. It is a secure and flexible alternative designed especially for modern Linux environments.
  </p>

  <h3 style="color: #0e5248; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #13856f; padding-bottom: 8px;">
    ⚙️ Key Features
  </h3>
  <ul style="background: #c4f0e7; border-radius: 10px; padding: 18px 26px; color: #0e5248; font-weight: 600;">
    <li style="margin-bottom: 12px;">Compatible with Docker CLI; most commands work the same way.</li>
    <li style="margin-bottom: 12px;">Runs containers directly as user processes without a background daemon.</li>
    <li style="margin-bottom: 12px;">Supports running containers without root privileges, enhancing security.</li>
    <li style="margin-bottom: 12px;">Supports pods: grouping multiple containers sharing network and storage resources.</li>
    <li style="margin-bottom: 12px;">Integrates with system services and supports Kubernetes YAML manifests.</li>
  </ul>

  <h3 style="color: #0e5248; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #13856f; padding-bottom: 8px;">
    🛠️ Sample Podman Commands
  </h3>
  <pre style="background: #c4f0e7; color: #0e5248; padding: 20px 25px; border-radius: 10px; overflow-x: auto; font-size: 14px;">
<code># Run a container
podman run -d -p 8080:80 nginx

# List running containers
podman ps

# Stop a container
podman stop &lt;container_id&gt;

# Create a pod (group multiple containers)
podman pod create --name mypod

# List containers with pods
podman ps --pod
</code>
  </pre>

  <h3 style="color: #13856f; margin-top: 32px; margin-bottom: 12px;">
    💡 Best Practices
  </h3>
  <ul style="color: #0e5248;">
    <li style="margin-bottom: 12px;">Run Podman as a non-root user to improve security.</li>
    <li style="margin-bottom: 12px;">Use meaningful names for containers and pods for easier management.</li>
    <li style="margin-bottom: 12px;">Leverage systemd integration to automate container lifecycle management.</li>
    <li style="margin-bottom: 12px;">Utilize Podman’s Kubernetes-compatible YAML output for seamless orchestration.</li>
    <li style="margin-bottom: 12px;">Reuse your existing Dockerfiles and tooling with Podman’s Docker compatibility.</li>
  </ul>

  <h3 style="color: #13856f; margin-top: 30px; margin-bottom: 12px;">
    🔗 Learn More
  </h3>
  <ul style="color: #0e5248; margin-top: 0; padding-left: 20px;">
    <li><a href="https://podman.io/" target="_blank" style="color:#13856f; text-decoration:none;">Official Podman Website</a></li>
    <li><a href="https://docs.podman.io/en/latest/" target="_blank" style="color:#13856f; text-decoration:none;">Podman Official Documentation</a></li>
    <li><a href="https://developers.redhat.com/blog/2019/11/26/introduction-to-podman" target="_blank" style="color:#13856f; text-decoration:none;">Introduction to Podman (RedHat)</a></li>
  </ul>

</div>
` },
          ]
        },
        {
          id: "orchestration",
          title: "Orchestration",
          description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f9fafb; border-radius: 14px; padding: 28px 32px; box-shadow: 0 6px 20px rgba(20, 20, 20, 0.1); color: #2c3e50;">

  <h2 style="color: #2980b9; border-left: 6px solid #2471a3; padding-left: 16px; margin-bottom: 24px; font-weight: 700;">
    ⚙️ Orchestration: Automating Containerized Application Management
  </h2>

  <p style="font-size: 16px; line-height: 1.7;">
    Orchestration refers to the automated management, coordination, and scaling of containerized applications and services. It enables efficient deployment, scaling, networking, and lifecycle management across clusters of machines.
  </p>

  <h3 style="color: #2471a3; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #2980b9; padding-bottom: 8px;">
    🚀 Why Orchestration is Essential
  </h3>
  <ul style="background: #d6eaf8; border-radius: 10px; padding: 18px 26px; color: #1b4f72; font-weight: 600;">
    <li style="margin-bottom: 12px;">Automates deployment and scaling of containers across multiple hosts.</li>
    <li style="margin-bottom: 12px;">Provides self-healing capabilities like automatic restarts and rescheduling.</li>
    <li style="margin-bottom: 12px;">Manages networking, load balancing, and service discovery.</li>
    <li style="margin-bottom: 12px;">Enables declarative configuration and desired state management.</li>
    <li style="margin-bottom: 12px;">Facilitates rolling updates and rollback to minimize downtime.</li>
  </ul>

  <h3 style="color: #2471a3; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #2980b9; padding-bottom: 8px;">
    🔧 Popular Orchestration Tools
  </h3>
  <ul style="background: #d6eaf8; border-radius: 10px; padding: 18px 26px; color: #1b4f72; font-weight: 600;">
    <li style="margin-bottom: 12px;"><strong>Kubernetes:</strong> The leading open-source container orchestration platform with extensive features for scaling, networking, and rolling updates.</li>
    <li style="margin-bottom: 12px;"><strong>Docker Swarm:</strong> Docker’s native clustering and orchestration tool, easier to start with but less feature-rich than Kubernetes.</li>
    <li style="margin-bottom: 12px;"><strong>Nomad:</strong> A simple and flexible orchestrator from HashiCorp, designed for workload scheduling beyond containers.</li>
  </ul>

  <h3 style="color: #2471a3; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #2980b9; padding-bottom: 8px;">
    🛠️ Basic Kubernetes Example: Deploying an NGINX Pod
  </h3>
  <pre style="background: #d6eaf8; color: #1b4f72; padding: 20px 25px; border-radius: 10px; overflow-x: auto; font-size: 14px;">
<code>apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
</code>
  </pre>

  <h3 style="color: #2980b9; margin-top: 32px; margin-bottom: 12px;">
    💡 Best Practices
  </h3>
  <ul style="color: #1b4f72;">
    <li style="margin-bottom: 12px;">Use declarative manifests (YAML/JSON) to define your desired state for reproducibility.</li>
    <li style="margin-bottom: 12px;">Implement health checks and readiness probes to ensure application availability.</li>
    <li style="margin-bottom: 12px;">Leverage namespaces and labels to organize resources effectively.</li>
    <li style="margin-bottom: 12px;">Automate deployment pipelines with CI/CD integrating orchestration tools.</li>
    <li style="margin-bottom: 12px;">Secure orchestration platforms by following the principle of least privilege and using role-based access control (RBAC).</li>
  </ul>

  <h3 style="color: #2980b9; margin-top: 30px; margin-bottom: 12px;">
    🔗 Learn More
  </h3>
  <ul style="color: #1b4f72; margin-top: 0; padding-left: 20px;">
    <li><a href="https://kubernetes.io/" target="_blank" style="color:#2980b9; text-decoration:none;">Kubernetes Official Website</a></li>
    <li><a href="https://docs.docker.com/engine/swarm/" target="_blank" style="color:#2980b9; text-decoration:none;">Docker Swarm Documentation</a></li>
    <li><a href="https://www.nomadproject.io/docs" target="_blank" style="color:#2980b9; text-decoration:none;">Nomad Documentation</a></li>
  </ul>

</div>
`,
          children: [
            {
              id: "kubernetes",
              title: "Kubernetes",
              description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f0f8ff; border-radius: 14px; padding: 28px 32px; box-shadow: 0 8px 24px rgba(0, 123, 255, 0.15); color: #003366;">

  <h2 style="color: #0056b3; border-left: 6px solid #004080; padding-left: 16px; margin-bottom: 24px; font-weight: 700;">
    ☸️ Kubernetes: Container Orchestration Platform
  </h2>

  <p style="font-size: 16px; line-height: 1.75;">
    Kubernetes (k8s) is an open-source, scalable, and portable container orchestration platform. Originally developed by Google and now maintained by the Cloud Native Computing Foundation (CNCF), Kubernetes automates deployment, scaling, and management of containerized applications.
  </p>

  <h3 style="color: #004080; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #0056b3; padding-bottom: 8px;">
    🚀 Core Components of Kubernetes
  </h3>
  <ul style="background: #dbeeff; border-radius: 10px; padding: 18px 26px; color: #00264d; font-weight: 600;">
    <li style="margin-bottom: 12px;"><strong>Master Node:</strong> Controls the cluster and runs key components like API Server, Scheduler, Controller Manager, and Etcd.</li>
    <li style="margin-bottom: 12px;"><strong>Worker Nodes:</strong> Physical or virtual machines where application containers run, managed by kubelet and kube-proxy.</li>
    <li style="margin-bottom: 12px;"><strong>Pod:</strong> The smallest deployable unit in Kubernetes, typically hosting one or more containers.</li>
    <li style="margin-bottom: 12px;"><strong>Service:</strong> Provides stable networking and load balancing for pods.</li>
    <li style="margin-bottom: 12px;"><strong>Namespace:</strong> Logical partitions to isolate resources within a cluster.</li>
    <li style="margin-bottom: 12px;"><strong>Deployment:</strong> Manages the lifecycle of pods, enabling automated updates and scaling.</li>
  </ul>

  <h3 style="color: #004080; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #0056b3; padding-bottom: 8px;">
    🔧 Basic Kubernetes Commands
  </h3>
  <pre style="background: #dbeeff; color: #00264d; padding: 20px 25px; border-radius: 10px; overflow-x: auto; font-size: 14px;">
<code># Check cluster info
kubectl cluster-info

# List all nodes
kubectl get nodes

# List all pods
kubectl get pods

# Create a new deployment
kubectl create deployment nginx-deploy --image=nginx

# Scale deployment replicas
kubectl scale deployment nginx-deploy --replicas=3

# Update deployment image
kubectl set image deployment/nginx-deploy nginx=nginx:latest

# Delete deployment
kubectl delete deployment nginx-deploy
</code>
  </pre>

  <h3 style="color: #004080; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #0056b3; padding-bottom: 8px;">
    📝 Sample Deployment YAML
  </h3>
  <pre style="background: #dbeeff; color: #00264d; padding: 20px 25px; border-radius: 10px; overflow-x: auto; font-size: 14px;">
<code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.21
        ports:
        - containerPort: 80
</code>
  </pre>

  <h3 style="color: #0056b3; margin-top: 32px; margin-bottom: 12px;">
    💡 Best Practices
  </h3>
  <ul style="color: #00264d;">
    <li style="margin-bottom: 12px;"><strong>Declarative management:</strong> Define Kubernetes resources using YAML or JSON files and store them in version control.</li>
    <li style="margin-bottom: 12px;"><strong>Namespaces:</strong> Use namespaces to isolate environments or teams within the cluster.</li>
    <li style="margin-bottom: 12px;"><strong>Health checks:</strong> Implement readiness and liveness probes to monitor app health and enable self-healing.</li>
    <li style="margin-bottom: 12px;"><strong>Resource limits:</strong> Set CPU and memory limits to control resource usage.</li>
    <li style="margin-bottom: 12px;"><strong>Security:</strong> Use Role-Based Access Control (RBAC) to enforce the principle of least privilege.</li>
    <li style="margin-bottom: 12px;"><strong>Rolling updates:</strong> Deploy updates without downtime by leveraging rolling update strategies.</li>
  </ul>

  <h3 style="color: #0056b3; margin-top: 30px; margin-bottom: 12px;">
    🔗 Learn More
  </h3>
  <ul style="color: #00264d; margin-top: 0; padding-left: 20px;">
    <li><a href="https://kubernetes.io/" target="_blank" style="color:#0056b3; text-decoration:none;">Kubernetes Official Documentation</a></li>
    <li><a href="https://kubernetes.io/docs/concepts/" target="_blank" style="color:#0056b3; text-decoration:none;">Kubernetes Concepts</a></li>
    <li><a href="https://kubernetes.io/docs/tasks/" target="_blank" style="color:#0056b3; text-decoration:none;">Kubernetes Tutorials</a></li>
  </ul>

</div>
` ,
              type: "must-know",
              children: [
                {
                  id: "kubectl", title: "Kubectl", type: "must-know",
                  description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #fff8e1; border-radius: 12px; padding: 24px 28px; box-shadow: 0 6px 18px rgba(255, 193, 7, 0.3); color: #665800;">

  <h2 style="color: #ffb300; border-left: 6px solid #ff8f00; padding-left: 14px; margin-bottom: 20px; font-weight: 700;">
    🛠️ Kubectl: Kubernetes CLI Tool
  </h2>

  <p style="font-size: 16px; line-height: 1.7;">
    <strong>kubectl</strong> is the command-line interface tool used to interact with Kubernetes clusters. It allows you to deploy applications, inspect and manage cluster resources, and view logs.
  </p>

  <h3 style="color: #ff8f00; margin-top: 28px; margin-bottom: 14px; border-bottom: 3px solid #ffb300; padding-bottom: 8px;">
    🔑 Core Concepts
  </h3>
  <ul style="background: #fff3cd; border-radius: 10px; padding: 16px 22px; color: #856404; font-weight: 600;">
    <li style="margin-bottom: 10px;"><strong>kubectl</strong> communicates with the Kubernetes API server to manage cluster resources.</li>
    <li style="margin-bottom: 10px;">Supports declarative resource management using YAML or JSON manifests.</li>
    <li style="margin-bottom: 10px;">Enables troubleshooting with commands to fetch logs and describe resources.</li>
  </ul>

  <h3 style="color: #ff8f00; margin-top: 28px; margin-bottom: 14px; border-bottom: 3px solid #ffb300; padding-bottom: 8px;">
    ⚡ Common Commands & Usage
  </h3>
  <pre style="background: #fff3cd; color: #856404; padding: 18px 22px; border-radius: 10px; overflow-x: auto; font-size: 14px;">
<code># Show cluster info
kubectl cluster-info

# List all nodes in the cluster
kubectl get nodes

# List pods in default namespace
kubectl get pods

# Describe a pod in detail
kubectl describe pod &lt;pod-name&gt;

# View logs of a pod
kubectl logs &lt;pod-name&gt;

# Apply configuration from a YAML file (create or update resources)
kubectl apply -f deployment.yaml

# Delete a resource defined in a YAML file
kubectl delete -f deployment.yaml

# Scale a deployment to 5 replicas
kubectl scale deployment &lt;deployment-name&gt; --replicas=5
</code>
  </pre>

  <h3 style="color: #ff8f00; margin-top: 28px; margin-bottom: 14px; border-bottom: 3px solid #ffb300; padding-bottom: 8px;">
    💡 Best Practices
  </h3>
  <ul style="color: #856404;">
    <li style="margin-bottom: 10px;"><strong>Use namespaces:</strong> Manage resources cleanly and avoid conflicts by organizing with namespaces.</li>
    <li style="margin-bottom: 10px;"><strong>Prefer declarative management:</strong> Use <code>kubectl apply</code> with manifests stored in version control instead of imperative commands.</li>
    <li style="margin-bottom: 10px;"><strong>Use context switching:</strong> Manage multiple clusters and users by switching contexts using <code>kubectl config use-context</code>.</li>
    <li style="margin-bottom: 10px;"><strong>Leverage labels and selectors:</strong> Organize and select resources efficiently using labels.</li>
    <li style="margin-bottom: 10px;"><strong>Enable auto-completion:</strong> Use shell completion scripts to speed up command typing and reduce errors.</li>
  </ul>

  <h3 style="color: #ffb300; margin-top: 28px;">
    🔗 Learn More
  </h3>
  <ul style="color: #856404; margin-top: 0; padding-left: 20px;">
    <li><a href="https://kubernetes.io/docs/reference/kubectl/overview/" target="_blank" style="color:#ff8f00; text-decoration:none;">Official kubectl Documentation</a></li>
    <li><a href="https://kubernetes.io/docs/tasks/tools/" target="_blank" style="color:#ff8f00; text-decoration:none;">Install & Configure kubectl</a></li>
    <li><a href="https://kubernetes.io/docs/concepts/overview/kubernetes-api/" target="_blank" style="color:#ff8f00; text-decoration:none;">Kubernetes API Concepts</a></li>
  </ul>

</div>
` },
                {
                  id: "rancher", title: "Rancher", type: "must-know", description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #e8f5e9; border-radius: 14px; padding: 28px 32px; box-shadow: 0 8px 24px rgba(46, 125, 50, 0.15); color: #2e7d32;">

  <h2 style="color: #1b5e20; border-left: 6px solid #388e3c; padding-left: 16px; margin-bottom: 24px; font-weight: 700;">
    🐄 Rancher: Kubernetes Management Platform
  </h2>

  <p style="font-size: 16px; line-height: 1.75;">
    <strong>Rancher</strong> is an open-source container management platform designed to simplify deploying, managing, and securing Kubernetes clusters anywhere — on-premises, in the cloud, or at the edge. It provides a user-friendly UI and tools to manage multiple Kubernetes clusters from a single pane of glass.
  </p>

  <h3 style="color: #388e3c; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #1b5e20; padding-bottom: 8px;">
    🚀 Key Features
  </h3>
  <ul style="background: #c8e6c9; border-radius: 10px; padding: 18px 26px; color: #1b5e20; font-weight: 600;">
    <li style="margin-bottom: 12px;"><strong>Multi-Cluster Management:</strong> Manage multiple Kubernetes clusters regardless of cloud provider or infrastructure.</li>
    <li style="margin-bottom: 12px;"><strong>Centralized Authentication & RBAC:</strong> Integrate with LDAP, Active Directory, and other identity providers with fine-grained access controls.</li>
    <li style="margin-bottom: 12px;"><strong>App Catalog:</strong> Deploy and manage Helm charts and applications easily.</li>
    <li style="margin-bottom: 12px;"><strong>Built-in Monitoring & Alerting:</strong> Integrated tools to monitor cluster health and send alerts.</li>
    <li style="margin-bottom: 12px;"><strong>Cluster Provisioning:</strong> Create Kubernetes clusters on various cloud providers or custom infrastructure.</li>
  </ul>

  <h3 style="color: #388e3c; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #1b5e20; padding-bottom: 8px;">
    🔧 How Rancher Works
  </h3>
  <p>
    Rancher runs as a control plane that interacts with Kubernetes clusters through agents deployed on each cluster. It abstracts cluster management complexity, enabling users to:
  </p>
  <ul style="background: #dcedc8; border-radius: 10px; padding: 18px 26px; color: #33691e; font-weight: 600;">
    <li style="margin-bottom: 12px;">Provision new clusters on cloud or on-prem infrastructure.</li>
    <li style="margin-bottom: 12px;">Manage user permissions and access centrally.</li>
    <li style="margin-bottom: 12px;">Deploy applications with ease using Helm charts.</li>
    <li style="margin-bottom: 12px;">Monitor cluster and application health in real time.</li>
  </ul>

  <h3 style="color: #388e3c; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #1b5e20; padding-bottom: 8px;">
    💡 Best Practices
  </h3>
  <ul style="color: #33691e;">
    <li style="margin-bottom: 12px;"><strong>Use centralized authentication:</strong> Integrate with your organization's identity provider for consistent access control.</li>
    <li style="margin-bottom: 12px;"><strong>Isolate workloads:</strong> Use namespaces and projects within Rancher to segment environments and teams.</li>
    <li style="margin-bottom: 12px;"><strong>Automate cluster backups:</strong> Regularly back up cluster state and Rancher configurations.</li>
    <li style="margin-bottom: 12px;"><strong>Monitor proactively:</strong> Use Rancher's built-in monitoring and alerting to catch issues early.</li>
    <li style="margin-bottom: 12px;"><strong>Keep Rancher updated:</strong> Regularly upgrade Rancher to benefit from security patches and new features.</li>
  </ul>

  <h3 style="color: #1b5e20; margin-top: 30px; margin-bottom: 12px;">
    🔗 Learn More
  </h3>
  <ul style="color: #33691e; margin-top: 0; padding-left: 20px;">
    <li><a href="https://rancher.com/" target="_blank" style="color:#388e3c; text-decoration:none;">Official Rancher Website</a></li>
    <li><a href="https://rancher.com/docs/" target="_blank" style="color:#388e3c; text-decoration:none;">Rancher Documentation</a></li>
    <li><a href="https://github.com/rancher/rancher" target="_blank" style="color:#388e3c; text-decoration:none;">Rancher GitHub Repository</a></li>
  </ul>

</div>
` },
                {
                  id: "k9s", title: "K9s", type: "optional", description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #e3f2fd; border-radius: 14px; padding: 28px 32px; box-shadow: 0 8px 24px rgba(25, 118, 210, 0.15); color: #1565c0;">

  <h2 style="color: #0d47a1; border-left: 6px solid #1976d2; padding-left: 16px; margin-bottom: 24px; font-weight: 700;">
    🐾 K9s: Kubernetes CLI Dashboard
  </h2>

  <p style="font-size: 16px; line-height: 1.75;">
    <strong>K9s</strong> is a powerful open-source terminal-based UI tool that helps developers and operators manage and navigate Kubernetes clusters efficiently. It provides a fast and interactive way to observe cluster resources, pods, logs, and perform common tasks without leaving the command line.
  </p>

  <h3 style="color: #1976d2; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #0d47a1; padding-bottom: 8px;">
    🚀 Key Features
  </h3>
  <ul style="background: #bbdefb; border-radius: 10px; padding: 18px 26px; color: #0d47a1; font-weight: 600;">
    <li style="margin-bottom: 12px;"><strong>Real-time cluster monitoring:</strong> View pods, deployments, services, and other Kubernetes resources live.</li>
    <li style="margin-bottom: 12px;"><strong>Interactive navigation:</strong> Quickly switch between namespaces, resource views, and drill down into details.</li>
    <li style="margin-bottom: 12px;"><strong>Pod logs & terminal access:</strong> Stream logs or open shell sessions into pods directly from the UI.</li>
    <li style="margin-bottom: 12px;"><strong>Resource filtering & sorting:</strong> Easily filter and sort resources to find what you need fast.</li>
    <li style="margin-bottom: 12px;"><strong>Customizable key bindings:</strong> Tailor keyboard shortcuts for your workflow efficiency.</li>
  </ul>

  <h3 style="color: #1976d2; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #0d47a1; padding-bottom: 8px;">
    🔧 How K9s Works
  </h3>
  <p>
    K9s connects to your Kubernetes cluster via your current kubeconfig and dynamically fetches cluster resources. It renders these resources in a terminal-friendly dashboard and allows live interaction, making it easier to manage pods, deployments, services, and more without manually running kubectl commands.
  </p>

  <h3 style="color: #1976d2; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #0d47a1; padding-bottom: 8px;">
    💡 Best Practices
  </h3>
  <ul style="color: #0d47a1;">
    <li style="margin-bottom: 12px;"><strong>Keep kubeconfig updated:</strong> Ensure your kubeconfig file is current and points to the correct clusters.</li>
    <li style="margin-bottom: 12px;"><strong>Learn key bindings:</strong> Master K9s shortcuts for quick navigation and operations.</li>
    <li style="margin-bottom: 12px;"><strong>Use resource filters:</strong> Filter namespaces and resource types to focus on relevant workloads.</li>
    <li style="margin-bottom: 12px;"><strong>Streamline troubleshooting:</strong> Use the logs and pod shell features to debug issues efficiently.</li>
    <li style="margin-bottom: 12px;"><strong>Regularly update K9s:</strong> Keep your K9s client updated to leverage new features and bug fixes.</li>
  </ul>

  <h3 style="color: #0d47a1; margin-top: 30px; margin-bottom: 12px;">
    🔗 Learn More
  </h3>
  <ul style="color: #0d47a1; margin-top: 0; padding-left: 20px;">
    <li><a href="https://k9scli.io/" target="_blank" style="color:#1976d2; text-decoration:none;">Official K9s Website</a></li>
    <li><a href="https://github.com/derailed/k9s" target="_blank" style="color:#1976d2; text-decoration:none;">K9s GitHub Repository</a></li>
  </ul>

</div>
` },
              ]
            },
          ]
        },
        {
          id: "other",
          title: "Other",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefce8; padding:1.5rem; border-radius:1rem; border:1px solid #facc15; box-shadow:0 4px 12px rgba(250, 204, 21, 0.25)">
  <h2 style="color:#ca8a04">🧠 Advanced Distributed Application Frameworks</h2>
  <p>This group includes powerful frameworks and runtimes tailored for building distributed, event-driven, and actor-based systems in .NET. These tools offer advanced primitives for scalability, fault tolerance, state management, and messaging patterns in modern cloud-native or on-premise environments.</p>

  <h3 style="color:#f59e0b">🚀 Why These Tools?</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>📦 Encapsulate distributed system complexities like state, messaging, and concurrency</li>
    <li>⚙️ Enable advanced orchestration, event sourcing, actor-based design, and pub-sub models</li>
    <li>🌍 Ideal for microservices, cloud-native apps, and real-time processing</li>
    <li>🔧 Compatible with ASP.NET Core, Kubernetes, and cloud providers</li>
  </ul>

  <h3 style="color:#ca8a04">📌 Frameworks Included</h3>
  <ul>
    <li><strong>.NET Aspire:</strong> Opinionated stack for cloud-native development with built-in observability, configuration, and service discovery</li>
    <li><strong>Orleans:</strong> Virtual Actor Model for building distributed, scalable applications with ease</li>
    <li><strong>Proto.Actor:</strong> Fast, lightweight actor model library for building distributed apps</li>
    <li><strong>Dapr:</strong> Platform-agnostic runtime that provides building blocks for microservices (state, pub-sub, secret store)</li>
    <li><strong>Akka.NET:</strong> Port of the JVM Akka library for event-driven, actor-based applications in .NET</li>
  </ul>

  <h3 style="color:#f59e0b">📚 When Should You Learn This?</h3>
  <ul>
    <li>✔️ After mastering ASP.NET Core, messaging, and microservices basics</li>
    <li>✔️ When building highly scalable or real-time distributed systems</li>
    <li>✔️ If you need abstractions for stateful actors or resilient communication</li>
  </ul>
</div>
`,
          children: [
            {
              id: "net-aspire", title: ".NET Aspire", type: "good-to-know",
              description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f3e5f5; border-radius: 14px; padding: 28px 32px; box-shadow: 0 8px 24px rgba(123, 31, 162, 0.15); color: #6a1b9a;">

  <h2 style="color: #4a148c; border-left: 6px solid #8e24aa; padding-left: 16px; margin-bottom: 24px; font-weight: 700;">
    🌐 .NET Aspire: Cloud-Native .NET Applications
  </h2>

  <p style="font-size: 16px; line-height: 1.75;">
    <strong>.NET Aspire</strong> is a new opinionated stack introduced with .NET 8 that streamlines building, running, and deploying cloud-native distributed applications. It offers a developer-friendly experience by combining <strong>project templates, diagnostics, environment configuration, and orchestration</strong> tools.
  </p>

  <h3 style="color: #8e24aa; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #6a1b9a; padding-bottom: 8px;">
    🚀 Key Features
  </h3>
  <ul style="background: #e1bee7; border-radius: 10px; padding: 18px 26px; color: #4a148c; font-weight: 600;">
    <li style="margin-bottom: 12px;"><strong>Orchestration:</strong> Easily spin up multiple .NET services (APIs, workers, UI) with dependencies (DB, cache, message brokers).</li>
    <li style="margin-bottom: 12px;"><strong>Component Model:</strong> Define reusable service components (like PostgreSQL, Redis) using clear configuration.</li>
    <li style="margin-bottom: 12px;"><strong>Service Discovery:</strong> Aspire handles dynamic ports, naming, and inter-service communication out-of-the-box.</li>
    <li style="margin-bottom: 12px;"><strong>Dashboard:</strong> A built-in web UI helps visualize service status, logs, health, and dependencies.</li>
    <li style="margin-bottom: 12px;"><strong>Environment Integration:</strong> Aspire is environment-aware (local/dev/prod), supporting containerized and cloud deployments.</li>
  </ul>

  <h3 style="color: #8e24aa; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #6a1b9a; padding-bottom: 8px;">
    🔧 Common Use Case Example
  </h3>
  <p style="margin-bottom: 12px;">
    Imagine you are building a system with a Web API, a background worker, a PostgreSQL DB, and Redis cache. With .NET Aspire:
  </p>
  <ul style="color: #4a148c;">
    <li>You create a <code>*.aspire</code> orchestration project.</li>
    <li>Add services and reference them as components (e.g. <b>postgres, redis</b>).</li>
    <li>Run them all together with <b> dotnet run </b> and observe the state via the dashboard.</li>
  </ul>

  <h3 style="color: #8e24aa; margin-top: 30px; margin-bottom: 16px;">
    💡 Best Practices
  </h3>
  <ul style="color: #4a148c;">
    <li style="margin-bottom: 12px;"><strong>Use Aspire early in microservices:</strong> It simplifies orchestration and communication without Docker overhead.</li>
    <li style="margin-bottom: 12px;"><strong>Combine with Dapr or Steeltoe:</strong> Aspire is composable, and works well with distributed runtime tools.</li>
    <li style="margin-bottom: 12px;"><strong>Use environment variables:</strong> Externalize secrets and config per environment for better portability.</li>
    <li style="margin-bottom: 12px;"><strong>Use Aspire Dashboard:</strong> It is extremely helpful in debugging startup or connectivity issues across services.</li>
  </ul>

  <h3 style="color: #6a1b9a; margin-top: 30px; margin-bottom: 12px;">
    📚 Resources
  </h3>
  <ul style="color: #4a148c; padding-left: 20px;">
    <li><a href="https://learn.microsoft.com/en-us/dotnet/aspire/" target="_blank" style="color:#8e24aa; text-decoration:none;">.NET Aspire Docs</a></li>
    <li><a href="https://github.com/dotnet/aspire" target="_blank" style="color:#8e24aa; text-decoration:none;">GitHub Repository</a></li>
    <li><a href="https://devblogs.microsoft.com/dotnet/introducing-dotnet-aspire/" target="_blank" style="color:#8e24aa; text-decoration:none;">Intro Blog Post</a></li>
  </ul>

</div>
` },
            {
              id: "orleans", title: "Orleans", type: "good-to-know",
              description: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #e8f5e9; border-radius: 14px; padding: 28px 32px; box-shadow: 0 8px 24px rgba(56, 142, 60, 0.15); color: #2e7d32;">

  <h2 style="color: #1b5e20; border-left: 6px solid #43a047; padding-left: 16px; margin-bottom: 24px; font-weight: 700;">
    🌾 Orleans: Virtual Actor Model for .NET
  </h2>

  <p style="font-size: 16px; line-height: 1.75;">
    <strong>Microsoft Orleans</strong> is a cross-platform framework that brings the **Virtual Actor Model** to .NET, making it easier to build scalable, distributed, and fault-tolerant applications such as real-time systems, IoT backends, gaming servers, and cloud-native services.
  </p>

  <h3 style="color: #43a047; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #2e7d32; padding-bottom: 8px;">
    🚀 Core Concepts
  </h3>
  <ul style="background: #c8e6c9; border-radius: 10px; padding: 18px 26px; color: #1b5e20; font-weight: 600;">
    <li style="margin-bottom: 12px;"><strong>Grains:</strong> Logical units of state and behavior. Each grain is like a lightweight actor that can be called remotely and exists virtually.</li>
    <li style="margin-bottom: 12px;"><strong>Virtual Actors:</strong> Orleans actors are automatically activated on demand and deactivated when idle. No need for manual lifecycle management.</li>
    <li style="margin-bottom: 12px;"><strong>Persistence:</strong> Grains can persist their state to a backend like Redis, Azure Table Storage, or SQL Server.</li>
    <li style="margin-bottom: 12px;"><strong>Remoting:</strong> Orleans handles all remote communication transparently via grain interfaces.</li>
    <li style="margin-bottom: 12px;"><strong>Fault-tolerance:</strong> Built-in retries, state recovery, and cluster failover support.</li>
  </ul>

  <h3 style="color: #43a047; margin-top: 32px; margin-bottom: 16px; border-bottom: 3px solid #2e7d32; padding-bottom: 8px;">
    🛠 Example Use Cases
  </h3>
  <ul style="color: #1b5e20;">
    <li style="margin-bottom: 12px;">Massively multiplayer online games (MMOs)</li>
    <li style="margin-bottom: 12px;">IoT device coordination systems</li>
    <li style="margin-bottom: 12px;">Real-time collaborative apps (chat, whiteboard)</li>
    <li style="margin-bottom: 12px;">Stream processing and event-driven systems</li>
  </ul>

  <h3 style="color: #43a047; margin-top: 30px; margin-bottom: 16px;">
    💡 Best Practices
  </h3>
  <ul style="color: #1b5e20;">
    <li style="margin-bottom: 12px;"><strong>Design grains around domain logic:</strong> Avoid leaking infrastructure logic into your grains.</li>
    <li style="margin-bottom: 12px;"><strong>Keep grains small & stateless when possible:</strong> This improves scaling and performance.</li>
    <li style="margin-bottom: 12px;"><strong>Use reminders & timers wisely:</strong> For periodic grain operations and long-running processes.</li>
    <li style="margin-bottom: 12px;"><strong>Partition data with consistent hashing:</strong> Ensures even distribution across silo nodes.</li>
    <li style="margin-bottom: 12px;"><strong>Persist grain state asynchronously:</strong> Avoid blocking operations that can reduce throughput.</li>
  </ul>

  <h3 style="color: #2e7d32; margin-top: 30px; margin-bottom: 12px;">
    📦 Orleans in Microservices
  </h3>
  <p>
    Orleans can be used as a standalone distributed runtime, or integrated into microservices. It handles state management, scalability, and messaging — making it a great fit for domain-driven systems where each entity (user, device, tenant) has its own actor.
  </p>

  <h3 style="color: #1b5e20; margin-top: 30px; margin-bottom: 12px;">
    🔗 Resources
  </h3>
  <ul style="color: #1b5e20; padding-left: 20px;">
    <li><a href="https://dotnet.github.io/orleans/" target="_blank" style="color:#388e3c; text-decoration:none;">Official Orleans Website</a></li>
    <li><a href="https://github.com/dotnet/orleans" target="_blank" style="color:#388e3c; text-decoration:none;">GitHub Repository</a></li>
    <li><a href="https://learn.microsoft.com/en-us/dotnet/orleans/" target="_blank" style="color:#388e3c; text-decoration:none;">Microsoft Docs</a></li>
  </ul>

</div>
` },
            {
              id: "proto-actor", title: "Proto.Actor", type: "optional",
              description: `<div style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background:#e3f2fd; border-radius:14px; padding:28px 32px; box-shadow:0 8px 24px rgba(33, 150, 243, 0.2); color:#0d47a1;">

  <h2 style="color:#1565c0; border-left:6px solid #42a5f5; padding-left:16px; margin-bottom:24px; font-weight:700;">
    🎭 Proto.Actor: Fast & Portable Actor Framework
  </h2>

  <p style="font-size:16px; line-height:1.75;">
    <strong>Proto.Actor</strong> is a cross-platform, high-performance <em>Actor Model</em> framework for building concurrent and distributed systems. Inspired by Erlang and Akka, it enables building applications based on lightweight, isolated, and message-driven actors.
  </p>

  <h3 style="color:#1976d2; margin-top:32px; margin-bottom:16px; border-bottom:3px solid #0d47a1; padding-bottom:8px;">
    🧩 Key Features
  </h3>
  <ul style="background:#bbdefb; border-radius:10px; padding:18px 26px; color:#0d47a1; font-weight:600;">
    <li style="margin-bottom:12px;"><strong>High Concurrency:</strong> Handles millions of actors efficiently using .NET’s async features and a custom scheduler.</li>
    <li style="margin-bottom:12px;"><strong>Message Passing:</strong> Actors interact through messages, reducing shared state and race conditions.</li>
    <li style="margin-bottom:12px;"><strong>Cross-Platform:</strong> Runs on .NET, Go, JavaScript, and more.</li>
    <li style="margin-bottom:12px;"><strong>Clustering & Remote Actors:</strong> Enables distribution across nodes with built-in remote communication.</li>
    <li style="margin-bottom:12px;"><strong>Persistence Support:</strong> Integrate persistence for stateful actors (e.g., event sourcing or snapshots).</li>
  </ul>

  <h3 style="color:#1976d2; margin-top:32px; margin-bottom:16px;">
    ✏️ Basic Actor Example
  </h3>

  <pre style="background:#e1f5fe; border-radius:10px; padding:18px; overflow-x:auto; color:#01579b;"><code>// Define a message
public class Greet { public string Name { get; set; } }

// Create an actor
public class GreetingActor : IActor {
    public Task ReceiveAsync(IContext context) {
        if (context.Message is Greet greet)
            Console.WriteLine($"Hello, {greet.Name}!");
        return Task.CompletedTask;
    }
}

// Spawning the actor
var props = Props.FromProducer(() => new GreetingActor());
var pid = Actor.Spawn(props);

// Sending a message
pid.Tell(new Greet { Name = "Proto.Actor" });</code></pre>

  <h3 style="color:#1976d2; margin-top:30px; margin-bottom:12px;">
    🧠 Best Practices
  </h3>
  <ul style="color:#0d47a1;">
    <li style="margin-bottom:10px;"><strong>Keep actors small and focused:</strong> Each actor should have a single responsibility.</li>
    <li style="margin-bottom:10px;"><strong>Avoid blocking operations:</strong> Use asynchronous methods to prevent performance bottlenecks.</li>
    <li style="margin-bottom:10px;"><strong>Use supervision:</strong> Actors can monitor and restart child actors on failure.</li>
    <li style="margin-bottom:10px;"><strong>Isolate side effects:</strong> Ensure external I/O or logic is encapsulated safely within actors.</li>
  </ul>

  <h3 style="color:#1976d2; margin-top:30px; margin-bottom:12px;">
    🔗 Resources
  </h3>
  <ul style="color:#0d47a1;">
    <li><a href="https://proto.actor/docs/" target="_blank" style="color:#1565c0; text-decoration:none;">Official Documentation</a></li>
    <li><a href="https://github.com/asynkronit/protoactor-dotnet" target="_blank" style="color:#1565c0; text-decoration:none;">GitHub Repository</a></li>
    <li><a href="https://proto.actor" target="_blank" style="color:#1565c0; text-decoration:none;">Proto.Actor Homepage</a></li>
  </ul>

</div>
` },
            {
              id: "dapr", title: "Dapr", type: "optional",
              description: `<div style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background:#f3e5f5; border-radius:14px; padding:28px 32px; box-shadow:0 8px 24px rgba(123, 31, 162, 0.2); color:#4a148c;">

  <h2 style="color:#6a1b9a; border-left:6px solid #ab47bc; padding-left:16px; margin-bottom:24px; font-weight:700;">
    🔄 Dapr: Distributed Application Runtime
  </h2>

  <p style="font-size:16px; line-height:1.75;">
    <strong>Dapr (Distributed Application Runtime)</strong> is a portable, event-driven runtime that simplifies building microservices. It provides a set of building blocks for cloud-native apps, making distributed systems easier to develop, secure, and operate—regardless of language, framework, or hosting environment.
  </p>

  <h3 style="color:#8e24aa; margin-top:32px; margin-bottom:16px; border-bottom:3px solid #4a148c; padding-bottom:8px;">
    ⚙️ Core Building Blocks
  </h3>
  <ul style="background:#e1bee7; border-radius:10px; padding:18px 26px; color:#4a148c; font-weight:600;">
    <li style="margin-bottom:12px;"><strong>Service Invocation:</strong> Built-in HTTP/gRPC calls between services with automatic service discovery.</li>
    <li style="margin-bottom:12px;"><strong>State Management:</strong> Simplified persistence across Redis, CosmosDB, DynamoDB, etc.</li>
    <li style="margin-bottom:12px;"><strong>Pub/Sub Messaging:</strong> Event-driven communication with Kafka, NATS, Redis Streams, and more.</li>
    <li style="margin-bottom:12px;"><strong>Bindings:</strong> Trigger input/output from external systems (e.g., queues, file systems).</li>
    <li style="margin-bottom:12px;"><strong>Actors:</strong> Virtual actor model for concurrency and state encapsulation.</li>
    <li style="margin-bottom:12px;"><strong>Secrets Management:</strong> Unified API to access secrets from providers like Azure Key Vault, HashiCorp Vault.</li>
  </ul>

  <h3 style="color:#8e24aa; margin-top:30px; margin-bottom:16px;">
    ✨ Example: State Management with HTTP
  </h3>

  <pre style="background:#f3e5f5; border-radius:10px; padding:16px; overflow-x:auto; color:#4a148c;"><code>POST http://localhost:3500/v1.0/state/statestore
Content-Type: application/json

[
  {
    "key": "order-123",
    "value": {
      "product": "Keyboard",
      "quantity": 2
    }
  }
]</code></pre>

  <h3 style="color:#8e24aa; margin-top:30px; margin-bottom:12px;">
    🧠 Best Practices
  </h3>
  <ul style="color:#4a148c;">
    <li style="margin-bottom:10px;"><strong>Use Dapr sidecar mode:</strong> It works as a separate process per service, improving separation of concerns.</li>
    <li style="margin-bottom:10px;"><strong>Leverage building blocks individually:</strong> Use only what you need; no tight coupling to all features.</li>
    <li style="margin-bottom:10px;"><strong>Secure communication:</strong> Run with mTLS enabled for service-to-service encryption.</li>
    <li style="margin-bottom:10px;"><strong>Combine with service mesh:</strong> Can work with Istio, Linkerd for observability and traffic control.</li>
  </ul>

  <h3 style="color:#6a1b9a; margin-top:30px; margin-bottom:12px;">
    📦 Use Cases
  </h3>
  <ul style="color:#4a148c;">
    <li style="margin-bottom:10px;">Resilient microservice-to-microservice communication</li>
    <li style="margin-bottom:10px;">Event-driven architectures</li>
    <li style="margin-bottom:10px;">Distributed stateful services with actor model</li>
    <li style="margin-bottom:10px;">Polyglot cloud-native applications</li>
  </ul>

  <h3 style="color:#6a1b9a; margin-top:30px; margin-bottom:12px;">
    🔗 Resources
  </h3>
  <ul style="color:#4a148c;">
    <li><a href="https://dapr.io" target="_blank" style="color:#6a1b9a; text-decoration:none;">Dapr Official Website</a></li>
    <li><a href="https://github.com/dapr/dapr" target="_blank" style="color:#6a1b9a; text-decoration:none;">GitHub Repository</a></li>
    <li><a href="https://docs.dapr.io" target="_blank" style="color:#6a1b9a; text-decoration:none;">Documentation</a></li>
  </ul>

</div>
` },
            {
              id: "akka-net", title: "Akka.NET", type: "optional",
              description: `<div style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background:#ede7f6; border-radius:14px; padding:28px 32px; box-shadow:0 8px 24px rgba(103, 58, 183, 0.2); color:#311b92;">

  <h2 style="color:#4527a0; border-left:6px solid #7e57c2; padding-left:16px; margin-bottom:24px; font-weight:700;">
    🎬 Akka.NET – Actor Model for Distributed .NET Apps
  </h2>

  <p style="font-size:16px; line-height:1.75;">
    <strong>Akka.NET</strong> is a powerful toolkit and runtime for building concurrent, fault-tolerant, distributed, and event-driven applications using the <em>Actor Model</em>. Inspired by the original Akka framework in Scala/Java, it brings reactive programming principles into the .NET ecosystem.
  </p>

  <h3 style="color:#5e35b1; margin-top:32px; margin-bottom:16px; border-bottom:3px solid #311b92; padding-bottom:8px;">
    🚀 Key Capabilities
  </h3>
  <ul style="background:#d1c4e9; border-radius:10px; padding:18px 26px; color:#311b92; font-weight:600;">
    <li style="margin-bottom:12px;"><strong>Actor-based Concurrency:</strong> Each actor is an isolated, self-contained unit of computation.</li>
    <li style="margin-bottom:12px;"><strong>Message-driven Architecture:</strong> Communication happens asynchronously through immutable messages.</li>
    <li style="margin-bottom:12px;"><strong>Supervision Trees:</strong> Parent actors supervise their children and can handle faults gracefully.</li>
    <li style="margin-bottom:12px;"><strong>Akka.Cluster:</strong> Enables distributed computing with node discovery and remote actors.</li>
    <li style="margin-bottom:12px;"><strong>Persistence:</strong> Event-sourced actors for durable state and replayability.</li>
    <li style="margin-bottom:12px;"><strong>Streams & Routers:</strong> Built-in routing strategies and reactive stream support.</li>
  </ul>

  <h3 style="color:#5e35b1; margin-top:32px; margin-bottom:16px;">
    ✏️ Basic Actor Example
  </h3>

  <pre style="background:#ede7f6; border-radius:10px; padding:16px; overflow-x:auto; color:#311b92;"><code>public class GreetingActor : ReceiveActor
{
    public GreetingActor()
    {
        Receive<string>(name => Console.WriteLine($"Hello, {name}!"));
    }
}

// Create actor system
var system = ActorSystem.Create("hello-system");

// Create actor
var greeter = system.ActorOf(Props.Create(() => new GreetingActor()), "greeter");

// Send message
greeter.Tell("Akka.NET");</code></pre>

  <h3 style="color:#5e35b1; margin-top:30px; margin-bottom:12px;">
    🧠 Best Practices
  </h3>
  <ul style="color:#311b92;">
    <li style="margin-bottom:10px;"><strong>Prefer immutability:</strong> Always send immutable messages to avoid side effects.</li>
    <li style="margin-bottom:10px;"><strong>Supervision:</strong> Use supervision strategies to manage actor failures.</li>
    <li style="margin-bottom:10px;"><strong>Actor hierarchy:</strong> Design clear actor hierarchies for responsibility and isolation.</li>
    <li style="margin-bottom:10px;"><strong>Monitoring:</strong> Use logging, health checks, and Akka.Monitoring for observability.</li>
    <li style="margin-bottom:10px;"><strong>Cluster sharding:</strong> For distributed data & actor routing across multiple nodes.</li>
  </ul>

  <h3 style="color:#4527a0; margin-top:30px; margin-bottom:12px;">
    📌 Use Cases
  </h3>
  <ul style="color:#311b92;">
    <li>High-load web servers</li>
    <li>IoT and telemetry data processing</li>
    <li>Gaming backends with real-time state</li>
    <li>Financial systems with strong fault tolerance</li>
  </ul>

  <h3 style="color:#4527a0; margin-top:30px; margin-bottom:12px;">
    🔗 Resources
  </h3>
  <ul style="color:#311b92;">
    <li><a href="https://getakka.net/" target="_blank" style="color:#5e35b1; text-decoration:none;">Official Website</a></li>
    <li><a href="https://github.com/akkadotnet/akka.net" target="_blank" style="color:#5e35b1; text-decoration:none;">GitHub Repository</a></li>
    <li><a href="https://getakka.net/articles/" target="_blank" style="color:#5e35b1; text-decoration:none;">Docs & Articles</a></li>
  </ul>

</div>
` },
          ]
        },
      ]
    },
    {
      id: "testing",
      title: "Testing",
      direction: "right",
      description: `<div style="font-family:sans-serif; line-height:1.6; background:#f9fafb; padding:1.5rem; border-radius:1rem; border:1px solid #d1d5db; box-shadow:0 4px 15px rgba(0,0,0,0.05)">
  <h2 style="color:#2563eb">🧪 Software Testing – Ensure Quality, Confidence & Maintainability</h2>

  <p><strong>Testing</strong> is the foundation of building reliable and maintainable applications. It enables developers to verify correctness, prevent regressions, and evolve systems safely. A well-structured testing strategy includes different layers, each targeting specific risks and scopes.</p>

  <h3 style="color:#1d4ed8">📚 Testing Types (What You Should Know)</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li><strong>✅ Unit Testing:</strong> Test isolated functions/methods. Fast, deterministic, and forms the base of the testing pyramid.</li>
    <li><strong>✅ Integration Testing:</strong> Test interactions between components (e.g., API + DB, Service + Cache).</li>
    <li><strong>🧠 Snapshot Testing:</strong> Automatically compare output with a saved snapshot (used in UI or serialization scenarios).</li>
    <li><strong>🧾 Behavior Testing (BDD):</strong> Focus on business behavior. Describe expected outcomes using tools like SpecFlow.</li>
    <li><strong>🚦 End-to-End (E2E) Testing:</strong> Simulate user flows across the whole system, often using browsers (Playwright, Selenium).</li>
    <li><strong>📈 Performance Testing:</strong> Validate speed, scalability, and load-handling (e.g., BenchmarkDotNet, JMeter).</li>
    <li><strong>🏗️ Architecture Testing:</strong> Ensure architectural rules (e.g., no dependency cycles, domain boundaries) using tools like NetArchTest.</li>
  </ul>

  <h3 style="color:#2563eb">🛠️ .NET Testing Toolset</h3>
  <ul>
    <li><strong>xUnit / NUnit / MSTest:</strong> Core unit testing frameworks</li>
    <li><strong>Moq / NSubstitute / FakeItEasy:</strong> For mocking dependencies</li>
    <li><strong>FluentAssertions:</strong> Expressive, human-readable assertions</li>
    <li><strong>WebApplicationFactory:</strong> Easy integration testing for ASP.NET Core</li>
    <li><strong>Playwright / Selenium:</strong> E2E browser automation</li>
    <li><strong>BenchmarkDotNet:</strong> Performance benchmarking for .NET code</li>
    <li><strong>NetArchTest:</strong> Architecture rule enforcement</li>
  </ul>

  <h3 style="color:#1d4ed8">🧭 Testing Strategy Tips</h3>
  <ul style="list-style:square; padding-left:1.2rem">
    <li>🔺 Follow the Testing Pyramid: More unit tests, fewer E2E</li>
    <li>♻️ Automate all test types in CI/CD pipelines</li>
    <li>💬 Write tests as documentation (clear, intention-revealing)</li>
    <li>⚡ Keep tests fast and isolated whenever possible</li>
    <li>🔐 Include security and performance in your testing strategy</li>
  </ul>

  <h3 style="color:#2563eb">📚 Resources</h3>
  <ul>
    <li><a href="https://xunit.net/" target="_blank" style="color:#2563eb">xUnit Documentation</a></li>
    <li><a href="https://fluentassertions.com/" target="_blank" style="color:#2563eb">Fluent Assertions</a></li>
    <li><a href="https://benchmarkdotnet.org/" target="_blank" style="color:#2563eb">BenchmarkDotNet</a></li>
    <li><a href="https://specflow.org/" target="_blank" style="color:#2563eb">SpecFlow - BDD for .NET</a></li>
    <li><a href="https://playwright.dev/dotnet/" target="_blank" style="color:#2563eb">Playwright for .NET</a></li>
    <li><a href="https://github.com/BenMorris/NetArchTest" target="_blank" style="color:#2563eb">NetArchTest on GitHub</a></li>
  </ul>
</div>
`,
      children: [
        {
          id: "unit-testing",
          title: "Unit Testing",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#ecfdf5; padding:2rem; border-radius:1rem; border:2px solid #10b981; box-shadow:0 6px 20px rgba(16,185,129,0.2)">
  <h2 style="color:#059669;">🧪 Introduction to Unit Testing</h2>
  <p>
    <strong>Unit Testing</strong> is the practice of testing individual units of code (usually functions or methods) in isolation to ensure they behave as expected.
    It helps catch bugs early, improves code quality, and makes refactoring safer.
  </p>

  <h3 style="color:#047857;">💡 Why Unit Testing Matters</h3>
  <ul>
    <li>🔍 Ensures each piece of code works correctly in isolation</li>
    <li>🛡️ Acts as a safety net when refactoring or adding features</li>
    <li>🚀 Helps detect bugs early in the development process</li>
    <li>📦 Promotes modular, loosely coupled code</li>
    <li>🧠 Encourages better design and documentation</li>
  </ul>

  <h3 style="color:#047857;">🔧 Core Concepts</h3>
  <ul>
    <li>🧩 <strong>Unit</strong>: Smallest testable part of code, typically a function or method</li>
    <li>🧪 <strong>Test Case</strong>: A single scenario that validates a unit’s behavior</li>
    <li>🔗 <strong>Mocking</strong>: Simulating dependencies to isolate the unit</li>
    <li>🚦 <strong>Assertions</strong>: Statements that check if actual output matches expected result</li>
  </ul>

  <h3 style="color:#059669;">💻 Example: Unit Test in JavaScript (Jest)</h3>
  <pre style="background:#d1fae5; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// math.js
export function add(a, b) {
  return a + b;
}

// math.test.js
import { add } from './math';

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});
  </pre>

  <h3 style="color:#047857;">✅ Best Practices</h3>
  <ul>
    <li>📦 Test small, independent units — keep them isolated from external systems</li>
    <li>🔄 Run tests automatically (e.g., during pre-commit or CI)</li>
    <li>🧪 Use meaningful test names that describe the behavior being tested</li>
    <li>🧱 Follow AAA pattern: Arrange, Act, Assert</li>
    <li>🧼 Keep test code clean and readable — it's just as important as production code</li>
    <li>🔍 Use mocks/stubs for external dependencies (e.g., APIs, databases)</li>
    <li>📉 Don't over-test trivial code — focus on logic-heavy components</li>
  </ul>

  <h3 style="color:#059669;">📚 Learn More</h3>
  <ul>
    <li><a href="https://jestjs.io/docs/getting-started" target="_blank" style="color:#10b981;">Jest Documentation</a></li>
    <li><a href="https://martinfowler.com/bliki/UnitTest.html" target="_blank" style="color:#10b981;">Martin Fowler on Unit Testing</a></li>
    <li><a href="https://xunit.net/docs/getting-started/netfx/visual-studio" target="_blank" style="color:#10b981;">xUnit for .NET</a></li>
  </ul>
</div>`
          ,
          type: "must-know",
          children: [
            {
              id: "frameworks",
              title: "Frameworks",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:2rem; border-radius:1rem; border:2px solid #22c55e; box-shadow:0 6px 20px rgba(34,197,94,0.2)">
  <h2 style="color:#16a34a;">🧰 Testing Frameworks Overview</h2>
  <p>
    <strong>Testing Frameworks</strong> are tools that provide the structure and utilities needed to write, run, and manage tests efficiently.
    They help automate assertions, handle test lifecycles, provide reporting, and integrate with CI/CD pipelines.
  </p>

  <h3 style="color:#15803d;">💡 Why Use a Testing Framework?</h3>
  <ul>
    <li>✅ Standardized structure for writing tests</li>
    <li>🛠️ Built-in assertions, setup/teardown hooks, and mocking utilities</li>
    <li>📈 Detailed test reporting and coverage analysis</li>
    <li>🚀 Seamless integration with CI/CD and dev tools</li>
    <li>🔁 Support for running thousands of tests automatically</li>
  </ul>

  <h3 style="color:#15803d;">📦 Popular Testing Frameworks</h3>
  <ul>
    <li><strong>🔵 JavaScript:</strong> <code>Jest</code>, <code>Mocha</code>, <code>Vitest</code>, <code>Playwright</code></li>
    <li><strong>🟣 .NET:</strong> <code>xUnit</code>, <code>nUnit</code>, <code>MSTest</code></li>
    <li><strong>🐍 Python:</strong> <code>pytest</code>, <code>unittest</code></li>
    <li><strong>☕ Java:</strong> <code>JUnit</code>, <code>TestNG</code></li>
    <li><strong>🐘 PHP:</strong> <code>Pest</code>, <code>PHPUnit</code></li>
  </ul>

  <h3 style="color:#16a34a;">💻 Example: Jest (JavaScript)</h3>
  <pre style="background:#dcfce7; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// greet.js
export function greet(name) {
  return \`Hello, \${name}!\`;
}

// greet.test.js
import { greet } from './greet';

test('greets user correctly', () => {
  expect(greet('Alice')).toBe('Hello, Alice!');
});
  </pre>

  <h3 style="color:#15803d;">✅ Best Practices</h3>
  <ul>
    <li>📂 Organize test files with the same structure as your codebase</li>
    <li>🧪 Choose the right framework based on language and project size</li>
    <li>🔍 Use descriptive names for test cases (what & when)</li>
    <li>⚙️ Use setup/teardown methods to manage test environments</li>
    <li>📊 Integrate code coverage tools (e.g., Istanbul, Coverlet)</li>
    <li>🧵 Keep tests isolated and deterministic (same result every run)</li>
  </ul>

  <h3 style="color:#16a34a;">📚 Learn More</h3>
  <ul>
    <li><a href="https://jestjs.io/" target="_blank" style="color:#22c55e;">Jest Documentation</a></li>
    <li><a href="https://xunit.net/" target="_blank" style="color:#22c55e;">xUnit for .NET</a></li>
    <li><a href="https://docs.pytest.org/en/stable/" target="_blank" style="color:#22c55e;">pytest for Python</a></li>
    <li><a href="https://junit.org/junit5/docs/current/user-guide/" target="_blank" style="color:#22c55e;">JUnit 5 Guide</a></li>
  </ul>
</div>`
              ,
              children: [
                {
                  id: "xunit", title: "xUnit", type: "must-know",
                  description: `<div style="font-family:sans-serif; line-height:1.6; background:#fef2f2; padding:2rem; border-radius:1rem; border:2px solid #ef4444; box-shadow:0 6px 20px rgba(239,68,68,0.2)">
  <h2 style="color:#dc2626;">🧪 Unit Testing with xUnit in .NET</h2>
  <p>
    <strong>xUnit</strong> is a popular and extensible testing framework for .NET applications. It’s part of the "xUnit family" of testing tools and is the recommended framework for .NET Core and .NET 6/7/8 projects.
  </p>

  <h3 style="color:#b91c1c;">💡 Why Use xUnit?</h3>
  <ul>
    <li>📦 Built-in support in .NET SDK and Visual Studio</li>
    <li>⚡ Fast and lightweight test execution</li>
    <li>🧩 Supports dependency injection out-of-the-box</li>
    <li>🔁 Clean test lifecycle with constructor/dispose support</li>
    <li>🔍 Clear syntax and conventions — no unnecessary attributes</li>
  </ul>

  <h3 style="color:#b91c1c;">🧱 Structure of an xUnit Test</h3>
  <ul>
    <li><code>[Fact]</code> - Defines a single, no-parameter test</li>
    <li><code>[Theory]</code> - Allows parameterized tests</li>
    <li><code>Assert.Equal</code>, <code>Assert.True</code> - Assertions to check results</li>
    <li><code>IClassFixture</code> - Shared setup for integration tests</li>
  </ul>

  <h3 style="color:#dc2626;">💻 Example: Simple Test with [Fact]</h3>
  <pre style="background:#fee2e2; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// MathService.cs
public class MathService
{
    public int Add(int a, int b) => a + b;
}

// MathServiceTests.cs
public class MathServiceTests
{
    [Fact]
    public void Add_ReturnsCorrectSum()
    {
        var service = new MathService();
        var result = service.Add(2, 3);
        Assert.Equal(5, result);
    }
}
  </pre>

  <h3 style="color:#b91c1c;">💻 Example: Data-Driven Test with [Theory]</h3>
  <pre style="background:#fee2e2; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
[Theory]
[InlineData(2, 3, 5)]
[InlineData(-1, 1, 0)]
[InlineData(0, 0, 0)]
public void Add_WorksForMultipleInputs(int a, int b, int expected)
{
    var service = new MathService();
    var result = service.Add(a, b);
    Assert.Equal(expected, result);
}
  </pre>

  <h3 style="color:#b91c1c;">✅ Best Practices</h3>
  <ul>
    <li>🧪 Use <code>[Fact]</code> for fixed test cases, <code>[Theory]</code> for variable inputs</li>
    <li>📂 Organize tests in folders mirroring the project structure</li>
    <li>♻️ Keep tests isolated — no shared state unless intentional via fixtures</li>
    <li>🔍 Test one behavior per test — avoid multiple asserts if possible</li>
    <li>🧼 Keep test names descriptive and consistent: <code>MethodName_State_ExpectedBehavior</code></li>
    <li>⚙️ Integrate with CI/CD using <code>dotnet test</code></li>
  </ul>

  <h3 style="color:#dc2626;">📚 Learn More</h3>
  <ul>
    <li><a href="https://xunit.net/" target="_blank" style="color:#ef4444;">Official xUnit Website</a></li>
    <li><a href="https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-dotnet-test" target="_blank" style="color:#ef4444;">Microsoft Guide: Unit Testing with dotnet test</a></li>
  </ul>
</div>`
                },
                {
                  id: "nunit", title: "NUnit", type: "good-to-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #0ea5e9; box-shadow:0 6px 20px rgba(14,165,233,0.2)">
  <h2 style="color:#0284c7;">🧪 Unit Testing with NUnit in .NET</h2>
  <p>
    <strong>NUnit</strong> is one of the oldest and most widely-used unit testing frameworks in the .NET ecosystem.
    It offers a rich set of features, flexible test case definitions, and deep IDE integrations for Visual Studio, Rider, and others.
  </p>

  <h3 style="color:#0369a1;">💡 Why Use NUnit?</h3>
  <ul>
    <li>🧱 Mature and stable — widely adopted in enterprise environments</li>
    <li>⚙️ Highly flexible test attributes and setup options</li>
    <li>🧪 Supports parameterized, sequential, and combinatorial tests</li>
    <li>🧹 Clean separation of setup and teardown logic</li>
    <li>🔌 Integrates well with CI/CD and test runners</li>
  </ul>

  <h3 style="color:#0369a1;">🧱 Key Attributes</h3>
  <ul>
    <li><code>[Test]</code> – Marks a test method</li>
    <li><code>[TestCase]</code> – Parameterized test input</li>
    <li><code>[SetUp]</code> / <code>[TearDown]</code> – Runs before/after each test</li>
    <li><code>[OneTimeSetUp]</code> / <code>[OneTimeTearDown]</code> – Class-level setup/cleanup</li>
    <li><code>[TestFixture]</code> – Optional, defines a test class</li>
  </ul>

  <h3 style="color:#0284c7;">💻 Example: Simple Test</h3>
  <pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// Calculator.cs
public class Calculator
{
    public int Multiply(int a, int b) => a * b;
}

// CalculatorTests.cs
using NUnit.Framework;

[TestFixture]
public class CalculatorTests
{
    private Calculator calc;

    [SetUp]
    public void Init()
    {
        calc = new Calculator();
    }

    [Test]
    public void Multiply_ReturnsCorrectProduct()
    {
        var result = calc.Multiply(3, 4);
        Assert.AreEqual(12, result);
    }
}
  </pre>

  <h3 style="color:#0369a1;">💻 Example: Parameterized Tests</h3>
  <pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
[TestCase(2, 3, 6)]
[TestCase(0, 5, 0)]
[TestCase(-1, 3, -3)]
public void Multiply_WorksCorrectly(int a, int b, int expected)
{
    var result = calc.Multiply(a, b);
    Assert.AreEqual(expected, result);
}
  </pre>

  <h3 style="color:#0369a1;">✅ Best Practices</h3>
  <ul>
    <li>🧪 Use <code>[TestCase]</code> for clean and reusable test logic</li>
    <li>📂 Organize test files to mirror your production code structure</li>
    <li>🧼 Avoid shared state between tests unless controlled with fixtures</li>
    <li>🧪 Use <code>SetUp</code>/<code>TearDown</code> for repeated setup logic</li>
    <li>🧵 Keep tests small, descriptive, and isolated</li>
    <li>⚙️ Integrate with CI using <code>dotnet test</code> or NUnit Console Runner</li>
  </ul>

  <h3 style="color:#0284c7;">📚 Learn More</h3>
  <ul>
    <li><a href="https://nunit.org/" target="_blank" style="color:#0ea5e9;">Official NUnit Website</a></li>
    <li><a href="https://docs.nunit.org/articles/nunit/writing-tests/attributes.html" target="_blank" style="color:#0ea5e9;">NUnit Attribute Reference</a></li>
    <li><a href="https://learn.microsoft.com/en-us/dotnet/core/testing/" target="_blank" style="color:#0ea5e9;">.NET Testing Documentation</a></li>
  </ul>
</div>`
                },
                {
                  id: "mstest", title: "MSTest", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefce8; padding:2rem; border-radius:1rem; border:2px solid #eab308; box-shadow:0 6px 20px rgba(234,179,8,0.2)">
  <h2 style="color:#ca8a04;">🧪 Unit Testing with MSTest</h2>
  <p>
    <strong>MSTest</strong> is the official test framework developed by Microsoft. It comes built-in with Visual Studio and offers deep integration with the .NET testing ecosystem, especially for enterprise-grade projects using Azure DevOps.
  </p>

  <h3 style="color:#a16207;">💡 Why Use MSTest?</h3>
  <ul>
    <li>🏢 Native support in Visual Studio — no need for extra setup</li>
    <li>🔄 Seamless integration with Azure DevOps pipelines</li>
    <li>⚙️ Attributes are similar to other frameworks like NUnit and xUnit</li>
    <li>📈 Built-in test explorer, code coverage, and diagnostics</li>
    <li>🧪 Suitable for integration, load, and UI tests as well</li>
  </ul>

  <h3 style="color:#a16207;">🧱 Key Attributes</h3>
  <ul>
    <li><code>[TestClass]</code> – Marks a class that contains tests</li>
    <li><code>[TestMethod]</code> – Denotes an individual test</li>
    <li><code>[TestInitialize]</code> / <code>[TestCleanup]</code> – Run before/after each test</li>
    <li><code>[ClassInitialize]</code> / <code>[ClassCleanup]</code> – Run once per class</li>
    <li><code>[DataTestMethod]</code> & <code>[DataRow]</code> – For parameterized testing</li>
  </ul>

  <h3 style="color:#ca8a04;">💻 Example: Basic Test</h3>
  <pre style="background:#fef9c3; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// Calculator.cs
public class Calculator
{
    public int Add(int a, int b) => a + b;
}

// CalculatorTests.cs
using Microsoft.VisualStudio.TestTools.UnitTesting;

[TestClass]
public class CalculatorTests
{
    private Calculator calc;

    [TestInitialize]
    public void SetUp()
    {
        calc = new Calculator();
    }

    [TestMethod]
    public void Add_ReturnsCorrectSum()
    {
        var result = calc.Add(5, 7);
        Assert.AreEqual(12, result);
    }
}
  </pre>

  <h3 style="color:#a16207;">💻 Example: Data-Driven Test</h3>
  <pre style="background:#fef9c3; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
[DataTestMethod]
[DataRow(1, 2, 3)]
[DataRow(-1, 1, 0)]
[DataRow(0, 0, 0)]
public void Add_WorksForMultipleInputs(int a, int b, int expected)
{
    var result = calc.Add(a, b);
    Assert.AreEqual(expected, result);
}
  </pre>

  <h3 style="color:#a16207;">✅ Best Practices</h3>
  <ul>
    <li>🧪 Keep <code>[TestMethod]</code>s focused and descriptive</li>
    <li>⚙️ Use <code>[TestInitialize]</code> to eliminate repetitive setup logic</li>
    <li>📂 Organize test projects separately using <code>.Tests</code> suffix</li>
    <li>🔐 Avoid relying on external systems; mock them when necessary</li>
    <li>🚀 Use <code>[DataTestMethod]</code> with <code>[DataRow]</code> to test multiple inputs efficiently</li>
    <li>📊 Use Visual Studio's "Code Coverage" and "Test Explorer" tools</li>
  </ul>

  <h3 style="color:#ca8a04;">📚 Learn More</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest" target="_blank" style="color:#eab308;">MSTest Docs (Microsoft)</a></li>
    <li><a href="https://github.com/microsoft/testfx" target="_blank" style="color:#eab308;">MSTest GitHub (TestFramework)</a></li>
  </ul>
</div>`
                },
              ]
            },
            {
              id: "mocking",
              title: "Mocking",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefce8; padding:2rem; border-radius:1rem; border:2px solid #eab308; box-shadow:0 6px 20px rgba(234,179,8,0.2)">
  <h2 style="color:#ca8a04;">🧪 Mocking in Unit Tests</h2>
  <p>
    <strong>Mocking</strong> is the practice of replacing real objects or services with controlled substitutes (mocks) during testing. It allows you to isolate the unit under test and simulate different behaviors (like success, failure, delays, etc.) from dependencies.
  </p>

  <h3 style="color:#a16207;">💡 Why Use Mocks?</h3>
  <ul>
    <li>🔄 Isolate tests from external systems (e.g., databases, APIs)</li>
    <li>🎯 Focus tests on the logic of your own code</li>
    <li>🛠 Simulate edge cases and errors without changing real systems</li>
    <li>🚀 Speed up test execution by avoiding slow resources</li>
    <li>🔍 Verify interactions like method calls, arguments, and frequency</li>
  </ul>

  <h3 style="color:#a16207;">🔧 Popular Mocking Libraries</h3>
  <ul>
    <li><strong>Moq</strong> – Most popular and user-friendly mocking framework in .NET</li>
    <li><strong>NSubstitute</strong> – More natural, readable syntax for some developers</li>
    <li><strong>FakeItEasy</strong> – Friendly syntax and great integration with test frameworks</li>
  </ul>

  <h3 style="color:#ca8a04;">💻 Example with Moq</h3>
  <pre style="background:#fef9c3; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// IEmailService.cs
public interface IEmailService
{
    void Send(string to, string message);
}

// NotificationService.cs
public class NotificationService
{
    private readonly IEmailService _email;

    public NotificationService(IEmailService email)
    {
        _email = email;
    }

    public void Notify(string user, string msg)
    {
        if (!string.IsNullOrWhiteSpace(user))
            _email.Send(user, msg);
    }
}

// NotificationServiceTests.cs
using Moq;
using Xunit;

public class NotificationServiceTests
{
    [Fact]
    public void Notify_SendsEmail_WhenUserIsValid()
    {
        var mockEmail = new Mock<IEmailService>();
        var service = new NotificationService(mockEmail.Object);

        service.Notify("user@example.com", "Hello!");

        mockEmail.Verify(e => e.Send("user@example.com", "Hello!"), Times.Once);
    }
}
  </pre>

  <h3 style="color:#a16207;">✅ Best Practices</h3>
  <ul>
    <li>🎯 Mock only external dependencies (like DBs, services, APIs)</li>
    <li>✅ Use <code>Verify()</code> to confirm expected method calls</li>
    <li>🔁 Return fake data using <code>Setup(...).Returns(...)</code></li>
    <li>🧹 Reset mocks between tests to avoid side effects</li>
    <li>🚫 Avoid mocking your own logic — test that directly</li>
    <li>🧪 Use interfaces or abstract classes to enable mocking easily</li>
  </ul>

  <h3 style="color:#ca8a04;">📚 Learn More</h3>
  <ul>
    <li><a href="https://github.com/moq/moq4" target="_blank" style="color:#eab308;">Moq GitHub Repo</a></li>
    <li><a href="https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-moq" target="_blank" style="color:#eab308;">Microsoft Docs: Mocking with Moq</a></li>
  </ul>
</div>`
              ,
              children: [
                {
                  id: "moq", title: "Moq", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#ecfdf5; padding:2rem; border-radius:1rem; border:2px solid #10b981; box-shadow:0 6px 20px rgba(16,185,129,0.2)">
  <h2 style="color:#059669;">🧰 Moq – Mocking Framework for .NET</h2>
  <p>
    <strong>Moq</strong> is a popular and lightweight .NET mocking library that allows you to create mock objects and define their behavior during unit tests. It helps isolate the code under test by replacing dependencies with fake implementations.
  </p>

  <h3 style="color:#047857;">💡 Why Use Moq?</h3>
  <ul>
    <li>✅ Clean, readable syntax using lambda expressions</li>
    <li>⚡ Supports verifying method calls, arguments, and call count</li>
    <li>🔄 Useful for TDD and testing services with external dependencies</li>
    <li>🧪 Works with any test framework: xUnit, NUnit, MSTest</li>
    <li>📦 Available via NuGet: <code>Install-Package Moq</code></li>
  </ul>

  <h3 style="color:#047857;">💻 Basic Example</h3>
  <pre style="background:#d1fae5; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// Service interface to mock
public interface IEmailSender
{
    void Send(string to, string message);
}

// System under test
public class Notifier
{
    private readonly IEmailSender _email;

    public Notifier(IEmailSender email)
    {
        _email = email;
    }

    public void Alert(string user, string msg)
    {
        if (!string.IsNullOrWhiteSpace(user))
            _email.Send(user, msg);
    }
}
  </pre>

  <h4 style="color:#047857;">🧪 Test with Moq</h4>
  <pre style="background:#d1fae5; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using Moq;
using Xunit;

public class NotifierTests
{
    [Fact]
    public void Alert_CallsSend_WhenUserIsValid()
    {
        var mockEmail = new Mock<IEmailSender>();
        var notifier = new Notifier(mockEmail.Object);

        notifier.Alert("admin@domain.com", "System down");

        mockEmail.Verify(x => x.Send("admin@domain.com", "System down"), Times.Once);
    }
}
  </pre>

  <h3 style="color:#047857;">🛠 Common Usage</h3>
  <ul>
    <li><code>mock.Setup(x => x.Method()).Returns(...)</code> – Define behavior</li>
    <li><code>mock.Verify(...)</code> – Check if method was called</li>
    <li><code>mock.SetupSequence(...)</code> – Chain responses</li>
    <li><code>mock.Object</code> – Pass the fake to your system under test</li>
    <li>🎯 Works best with interfaces or virtual methods</li>
  </ul>

  <h3 style="color:#047857;">✅ Best Practices</h3>
  <ul>
    <li>🧽 Reset mocks between tests to avoid state leakage</li>
    <li>🧩 Use Moq for external services, APIs, or databases — not internal logic</li>
    <li>🔍 Keep verification focused and specific</li>
    <li>🧪 Favor behavior verification (what should happen), not state (what changed)</li>
    <li>📂 Organize mocks with builders or factories for large test suites</li>
  </ul>

  <h3 style="color:#059669;">📚 Learn More</h3>
  <ul>
    <li><a href="https://github.com/moq/moq4" target="_blank" style="color:#10b981;">Moq GitHub</a></li>
    <li><a href="https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-moq" target="_blank" style="color:#10b981;">Moq in Microsoft Docs</a></li>
    <li><a href="https://www.nuget.org/packages/Moq/" target="_blank" style="color:#10b981;">Moq NuGet Package</a></li>
  </ul>
</div>`
                },
                {
                  id: "nsubstitute", title: "NSubstitute", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:2rem; border-radius:1rem; border:2px solid #22c55e; box-shadow:0 6px 20px rgba(34,197,94,0.2)">
  <h2 style="color:#16a34a;">🔧 NSubstitute – Friendly Mocking for .NET</h2>
  <p>
    <strong>NSubstitute</strong> is a modern .NET mocking framework designed to be intuitive and developer-friendly. It uses a clean, natural syntax to create test doubles for interfaces and virtual methods, making unit tests easy to read and maintain.
  </p>

  <h3 style="color:#15803d;">💡 Why Choose NSubstitute?</h3>
  <ul>
    <li>✨ Very readable, expressive syntax</li>
    <li>🔁 Automatic substitution of interfaces and abstract classes</li>
    <li>🔍 Easily verify method calls and arguments</li>
    <li>🧪 Works with xUnit, NUnit, MSTest, and more</li>
    <li>📦 NuGet package: <code>Install-Package NSubstitute</code></li>
  </ul>

  <h3 style="color:#15803d;">💻 Example: Basic Usage</h3>
  <pre style="background:#dcfce7; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// Service interface
public interface ILogger
{
void Log(string message);
}

// System under test
public class AuditService
{
private readonly ILogger _logger;

public AuditService(ILogger logger)
{
_logger = logger;
}

public void Record(string action)
{
if (!string.IsNullOrEmpty(action))
_logger.Log($"Action: {action}");
}
}
  </pre>

  <h4 style="color:#15803d;">🧪 Test with NSubstitute</h4>
  <pre style="background:#dcfce7; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using NSubstitute;
using Xunit;

public class AuditServiceTests
{
[Fact]
public void Record_LogsAction()
{
var logger = Substitute.For<ILogger>();
var audit = new AuditService(logger);

audit.Record("Login");

logger.Received(1).Log("Action: Login");
}
}
  </pre>

  <h3 style="color:#15803d;">🛠 Core Features</h3>
  <ul>
    <li><code>Substitute.For&lt;T&gt;()</code> – Create a mock instance</li>
    <li><code>Received()</code> – Verify method calls</li>
    <li><code>Returns(...)</code> – Define return values for methods</li>
    <li><code>Throws(...)</code> – Simulate exceptions</li>
    <li><code>DidNotReceive()</code> – Confirm a method was not called</li>
  </ul>

  <h3 style="color:#15803d;">✅ Best Practices</h3>
  <ul>
    <li>🧩 Mock only external dependencies, not business logic</li>
    <li>🔎 Use <code>Received()</code> to verify important interactions</li>
    <li>🧪 Prefer behavior-based testing over state-based</li>
    <li>🔒 Use interfaces or virtual methods to enable substituting</li>
    <li>🧽 Clean up or reset state if running multiple tests</li>
  </ul>

  <h3 style="color:#16a34a;">📚 Learn More</h3>
  <ul>
    <li><a href="https://nsubstitute.github.io/" target="_blank" style="color:#22c55e;">NSubstitute Official Docs</a></li>
    <li><a href="https://github.com/nsubstitute/NSubstitute" target="_blank" style="color:#22c55e;">GitHub: NSubstitute</a></li>
  </ul>
</div>`
                },
                {
                  id: "fakereasy", title: "FakeItEasy", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#fef6ff; padding:2rem; border-radius:1rem; border:2px solid #a78bfa; box-shadow:0 6px 20px rgba(167,139,250,0.2)">
  <h2 style="color:#7c3aed;">🎭 FakeItEasy – Simple and Intuitive Mocking for .NET</h2>
  <p>
    <strong>FakeItEasy</strong> is a friendly mocking framework for .NET that emphasizes simplicity and ease of use. It allows developers to create mocks, stubs, and fakes with minimal setup, helping to write readable and maintainable unit tests.
  </p>

  <h3 style="color:#6d28d9;">💡 Why Use FakeItEasy?</h3>
  <ul>
    <li>🧩 Simple, clean syntax that's easy to understand</li>
    <li>🔄 Supports mocking interfaces, classes, and delegates</li>
    <li>🔍 Verifies calls and argument matching flexibly</li>
    <li>🧪 Compatible with popular test frameworks like xUnit, NUnit, MSTest</li>
    <li>📦 Install via NuGet: <code>Install-Package FakeItEasy</code></li>
  </ul>

  <h3 style="color:#6d28d9;">💻 Example: Basic Mocking</h3>
  <pre style="background:#ede9fe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
  // Service interface
  public interface ILogger
  {
  void Log(string message);
  }

  // System under test
  public class AuditService
  {
  private readonly ILogger _logger;

  public AuditService(ILogger logger)
  {
  _logger = logger;
  }

  public void Record(string action)
  {
  if (!string.IsNullOrEmpty(action))
  _logger.Log($"Action: {action}");
  }
  }
  </pre>

  <h4 style="color:#6d28d9;">🧪 Test with FakeItEasy</h4>
  <pre style="background:#ede9fe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
  using FakeItEasy;
  using Xunit;

  public class AuditServiceTests
  {
  [Fact]
  public void Record_LogsAction()
  {
  var logger = A.Fake<ILogger>();
  var audit = new AuditService(logger);

  audit.Record("Login");

  A.CallTo(() => logger.Log("Action: Login")).MustHaveHappenedOnceExactly();
  }
  }
  </pre>

  <h3 style="color:#6d28d9;">🔧 Core Features</h3>
  <ul>
    <li><code>A.Fake&lt;T&gt;()</code> – Create fake objects</li>
    <li><code>A.CallTo(...)</code> – Setup and verify calls</li>
    <li><code>MustHaveHappenedOnceExactly()</code> – Precise call count verification</li>
    <li><code>Returns(...)</code> – Setup return values</li>
    <li><code>Throws(...)</code> – Simulate exceptions</li>
  </ul>

  <h3 style="color:#6d28d9;">✅ Best Practices</h3>
  <ul>
    <li>🧩 Mock external dependencies, not the system under test</li>
    <li>🔍 Use clear and descriptive call verifications</li>
    <li>🧪 Keep tests focused on behavior, not implementation</li>
    <li>🔒 Use interfaces or virtual members for mocking</li>
    <li>🧹 Reset fakes if sharing state across tests</li>
  </ul>

  <h3 style="color:#7c3aed;">📚 Learn More</h3>
  <ul>
    <li><a href="https://fakeiteasy.github.io/" target="_blank" style="color:#a78bfa;">FakeItEasy Official Documentation</a></li>
    <li><a href="https://github.com/FakeItEasy/FakeItEasy" target="_blank" style="color:#a78bfa;">GitHub: FakeItEasy</a></li>
  </ul>
  </div>`
                },
              ]
            },
            {
              id: "assertion",
              title: "Assertion",
              type: "must-know",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)">
	<h2 style="color:#2563eb;">✅ Assertion in Testing</h2>
	<p>
		<strong>Assertion</strong> is the process of verifying that a condition holds true during testing. It confirms that the code behaves as expected by comparing actual results with expected values.
	</p>

	<h3 style="color:#1e40af;">💡 Why Are Assertions Important?</h3>
	<ul>
		<li>✔️ Ensure code correctness and expected behavior</li>
		<li>🔍 Help detect bugs and regressions early</li>
		<li>🧪 Make tests reliable and meaningful</li>
		<li>🛠️ Provide clear feedback when tests fail</li>
	</ul>

	<h3 style="color:#1e40af;">💻 Example: Simple Assertion with xUnit</h3>
	<pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
[Fact]
public void Sum_TwoNumbers_ReturnsCorrectResult()
{
	var result = Calculator.Add(2, 3);
	Assert.Equal(5, result);
}
	</pre>

	<h3 style="color:#1e40af;">🔧 Key Features of Assertions</h3>
	<ul>
		<li>✔️ Support for various data types and conditions</li>
		<li>✔️ Provide clear error messages on failure</li>
		<li>✔️ Can be simple (equality) or complex (exceptions, timing)</li>
		<li>✔️ Integral part of unit, integration, and end-to-end tests</li>
	</ul>

	<h3 style="color:#2563eb;">✅ Best Practices</h3>
	<ul>
		<li>📝 Use meaningful assertion messages to clarify intent</li>
		<li>⚡ Keep assertions focused and relevant to the test case</li>
		<li>🧹 Avoid side effects inside assertions</li>
		<li>🔍 Test one thing at a time per assertion</li>
	</ul>

	<h3 style="color:#2563eb;">📚 Learn More</h3>
	<ul>
		<li><a href="https://xunit.net/docs/assertions" target="_blank" style="color:#3b82f6;">xUnit Assertions Documentation</a></li>
		<li><a href="https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices" target="_blank" style="color:#3b82f6;">Microsoft Unit Testing Best Practices</a></li>
	</ul>
</div>`
              ,
              children: [
                {
                  id: "fluentassertions", title: "FluentAssertions", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#eef6ff; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)">
    <h2 style="color:#2563eb;">🎯 FluentAssertions – Okunaklı ve Anlaşılır Doğrulamalar</h2>
    <p>
      <strong>FluentAssertions</strong>, .NET için geliştirilmiş bir doğrulama (assertion) kütüphanesidir. Testlerinizi daha okunabilir, anlaması kolay ve doğal dil benzeri bir şekilde yazmanızı sağlar.
    </p>
  
    <h3 style="color:#1e40af;">💡 Neden FluentAssertions Kullanılır?</h3>
    <ul>
      <li>📖 Testlerin okunabilirliğini artırır</li>
      <li>🔗 Zincirlenebilir, akıcı ve doğal dil benzeri sözdizimi sunar</li>
      <li>🧩 Karmaşık doğrulamaları basitleştirir</li>
      <li>🛠 xUnit, NUnit, MSTest gibi test frameworkleri ile uyumludur</li>
    </ul>
  
    <h3 style="color:#1e40af;">💻 Örnek: FluentAssertions ile Basit Doğrulama</h3>
    <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
  using FluentAssertions;
  using Xunit;
  
  public class CalculatorTests
  {
  [Fact]
  public void Add_ShouldReturnSum()
  {
  var calculator = new Calculator();
  
  int result = calculator.Add(2, 3);
  
  result.Should().Be(5);
  }
  }
    </pre>
  
    <h3 style="color:#1e40af;">🛠 Yaygın FluentAssertions Kullanımları</h3>
    <ul>
      <li><code>result.Should().Be(expected)</code> – Değerin beklenenle eşit olduğunu doğrular</li>
      <li><code>obj.Should().NotBeNull()</code> – Nesnenin null olmadığını kontrol eder</li>
      <li><code>collection.Should().Contain(item)</code> – Koleksiyonun belirli öğeyi içerdiğini doğrular</li>
      <li><code>action.Should().Throw&lt;ExceptionType&gt;()</code> – İlgili istisnanın fırlatıldığını kontrol eder</li>
      <li><code>stringValue.Should().StartWith("prefix")</code> – Stringin belirli bir önek ile başladığını doğrular</li>
    </ul>
  
    <h3 style="color:#1e40af;">✅ En İyi Uygulamalar</h3>
    <ul>
      <li>📝 Anlamlı ve açık doğrulamalar yazın</li>
      <li>⚡ FluentAssertions’un zincirleme yapısından faydalanarak kodunuzu sadeleştirin</li>
      <li>🔍 Karmaşık doğrulamaları parçalara bölerek testlerinizi anlaşılır kılın</li>
      <li>🧪 Test senaryolarında her zaman gerekli doğrulamaları yapın</li>
    </ul>
  
    <h3 style="color:#2563eb;">📚 Daha Fazla Öğrenmek İçin</h3>
    <ul>
      <li><a href="https://fluentassertions.com/" target="_blank" style="color:#3b82f6;">FluentAssertions Resmi Sitesi</a></li>
      <li><a href="https://github.com/fluentassertions/fluentassertions" target="_blank" style="color:#3b82f6;">GitHub: FluentAssertions</a></li>
    </ul>
  </div>`
                },
              ]
            },
            {
              id: "fake-data-generators",
              title: "Fake Data Generators",
              type: "must-know",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#fff7ed; padding:2rem; border-radius:1rem; border:2px solid #f97316; box-shadow:0 6px 20px rgba(249,115,22,0.2)">
  <h2 style="color:#c2410c;">🎲 Fake Data Generators – Test ve Geliştirme İçin Sahte Veri Üretimi</h2>
  <p>
    <strong>Fake Data Generators</strong>, uygulama geliştirme ve test süreçlerinde gerçekçi ancak rastgele sahte veriler oluşturmak için kullanılan araçlardır. Gerçek veriye benzer ama anonim verilerle çalışmanızı sağlar.
  </p>

  <h3 style="color:#9a3412;">💡 Neden Sahte Veri Kullanılır?</h3>
  <ul>
    <li>🧪 Test ortamında gerçek veriye zarar vermeden denemeler yapmak</li>
    <li>🔒 Gizlilik ve güvenlik nedeniyle gerçek veriyi kullanamama durumları</li>
    <li>🚀 Performans testleri ve uygulama yüklemelerinde çeşitli senaryolar oluşturmak</li>
    <li>⚙️ Otomasyon ve entegrasyon testlerinde dinamik ve rastgele veri sağlamak</li>
  </ul>

  <h3 style="color:#9a3412;">💻 Örnek: C# için Bogus Kütüphanesi ile Sahte Veri Üretimi</h3>
  <pre style="background:#fed7aa; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using Bogus;

public class User
{
public string FirstName { get; set; }
public string LastName { get; set; }
public string Email { get; set; }
}

var faker = new Faker<User>()
.RuleFor(u => u.FirstName, f => f.Name.FirstName())
.RuleFor(u => u.LastName, f => f.Name.LastName())
.RuleFor(u => u.Email, f => f.Internet.Email());

var fakeUser = faker.Generate();

Console.WriteLine($"Name: {fakeUser.FirstName} {fakeUser.LastName}, Email: {fakeUser.Email}");
  </pre>

  <h3 style="color:#9a3412;">🔧 Popüler Sahte Veri Üretici Kütüphaneler</h3>
  <ul>
    <li><strong>Bogus</strong> (.NET için) – Gerçekçi ve detaylı sahte veri oluşturur</li>
    <li><strong>Faker.js</strong> (JavaScript/TypeScript için) – Çok çeşitli veri tipleri destekler</li>
    <li><strong>FakeItEasy</strong> (Mocking ve veri üretiminde kullanılır)</li>
    <li><strong>Python Faker</strong> – Python projelerinde yaygın olarak kullanılır</li>
  </ul>

  <h3 style="color:#9a3412;">✅ En İyi Uygulamalar</h3>
  <ul>
    <li>🧹 Test verilerini düzenli olarak temizleyin ve kontrol edin</li>
    <li>🔄 Üretilen sahte verilerin anlamlı ve tutarlı olmasına dikkat edin</li>
    <li>🛡️ Gizlilik gerektiren veriler için gerçek veriyi kullanmayın</li>
    <li>📦 Sahte verileri otomatik testlerinizde kullanarak test kapsamını artırın</li>
  </ul>

  <h3 style="color:#c2410c;">📚 Daha Fazla Öğrenmek İçin</h3>
  <ul>
    <li><a href="https://github.com/bchavez/Bogus" target="_blank" style="color:#f97316;">Bogus GitHub Repository</a></li>
    <li><a href="https://fakerjs.dev/" target="_blank" style="color:#f97316;">Faker.js Resmi Sitesi</a></li>
    <li><a href="https://faker.readthedocs.io/en/master/" target="_blank" style="color:#f97316;">Python Faker Documentation</a></li>
  </ul>
</div>`,
              children: [
                {
                  id: "autofixture", title: "AutoFixture", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#eff6ff; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)">
  <h2 style="color:#2563eb;">⚙️ AutoFixture – Otomatik Test Veri Üretimi için .NET Kütüphanesi</h2>
  <p>
    <strong>AutoFixture</strong>, .NET dünyasında test yazarken karmaşık nesneleri otomatik olarak oluşturmayı kolaylaştıran güçlü bir araçtır.
    Test kodunda manuel veri yaratma ihtiyacını azaltarak daha temiz ve bakımı kolay testler yazmanıza yardımcı olur.
  </p>

  <h3 style="color:#1e40af;">💡 AutoFixture Neden Kullanılır?</h3>
  <ul>
    <li>🧩 Karmaşık nesne grafikleri için otomatik veri üretimi</li>
    <li>⌛ Test hazırlık süresini kısaltır, boilerplate kodu azaltır</li>
    <li>🔄 Farklı test senaryoları için çeşitli rastgele veriler sağlar</li>
    <li>🔌 Diğer test framework’leri ve mocking kütüphaneleri ile kolay entegrasyon</li>
  </ul>

  <h3 style="color:#1e40af;">💻 Örnek: AutoFixture ile Kullanıcı Nesnesi Oluşturma</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using AutoFixture;

public class User
{
  public string FirstName { get; set; }
  public string LastName { get; set; }
  public int Age { get; set; }
}

var fixture = new Fixture();
var user = fixture.Create<User>();

Console.WriteLine($"Name: {user.FirstName} {user.LastName}, Age: {user.Age}");
  </pre>

  <h3 style="color:#1e40af;">🔧 Öne Çıkan Özellikler</h3>
  <ul>
    <li>📦 Kompleks tiplerin otomatik oluşturulması</li>
    <li>🔄 Özelleştirilebilir nesne üretimi ve yapılandırma</li>
    <li>⚙️ Testlerde tekrar eden veri oluşturma işlemlerini azaltır</li>
    <li>🧩 xUnit, NUnit, MSTest gibi framework’lerle uyumlu</li>
  </ul>

  <h3 style="color:#1e40af;">✅ En İyi Uygulamalar</h3>
  <ul>
    <li>📝 Test senaryolarını sade tutmak için AutoFixture’dan faydalanın</li>
    <li>🔧 Özelleştirilmiş veri üretimi için <code>Customize</code> metodlarını kullanın</li>
    <li>📚 Resmi dokümantasyonu takip ederek gelişmiş kullanımları öğrenin</li>
    <li>🧹 Test sonrasında oluşturulan verileri izole ve temiz tutun</li>
  </ul>

  <h3 style="color:#2563eb;">📚 Daha Fazla Kaynak</h3>
  <ul>
    <li><a href="https://github.com/AutoFixture/AutoFixture" target="_blank" style="color:#3b82f6;">AutoFixture GitHub Repository</a></li>
    <li><a href="https://github.com/AutoFixture/AutoFixture/wiki" target="_blank" style="color:#3b82f6;">AutoFixture Wiki & Documentation</a></li>
  </ul>
</div>`
                },
                {
                  id: "bogus", title: "Bogus", type: "good-to-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:2rem; border-radius:1rem; border:2px solid #22c55e; box-shadow:0 6px 20px rgba(34,197,94,0.2)">
  <h2 style="color:#15803d;">🎲 Bogus – .NET için Güçlü Sahte Veri Üreticisi</h2>
  <p>
    <strong>Bogus</strong>, .NET ortamında test ve geliştirme süreçlerinde gerçekçi sahte veriler oluşturmak için kullanılan popüler bir kütüphanedir.
    Karmaşık nesneler ve çeşitli veri tipleri için esnek sahte veri senaryoları sağlar.
  </p>

  <h3 style="color:#166534;">💡 Neden Bogus Kullanılır?</h3>
  <ul>
    <li>🧪 Gerçekçi ve çeşitli sahte veriler üretmek için kolay API</li>
    <li>⚙️ Karmaşık nesne grafikleri oluşturmayı destekler</li>
    <li>🚀 Test otomasyonu ve veri doldurma işlemlerinde zaman kazandırır</li>
    <li>🔄 Kültüre özgü (locale) veri üretimi yapabilir</li>
  </ul>

  <h3 style="color:#166534;">💻 Örnek: Kullanıcı Nesnesi için Sahte Veri Oluşturma</h3>
  <pre style="background:#dcfce7; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using Bogus;

public class User
{
  public string FirstName { get; set; }
  public string LastName { get; set; }
  public string Email { get; set; }
}

var faker = new Faker<User>()
    .RuleFor(u => u.FirstName, f => f.Name.FirstName())
    .RuleFor(u => u.LastName, f => f.Name.LastName())
    .RuleFor(u => u.Email, f => f.Internet.Email());

var fakeUser = faker.Generate();

Console.WriteLine($"Name: {fakeUser.FirstName} {fakeUser.LastName}, Email: {fakeUser.Email}");
  </pre>

  <h3 style="color:#166534;">🔧 Öne Çıkan Özellikler</h3>
  <ul>
    <li>📦 Çok çeşitli sahte veri tipleri (isim, adres, telefon, finans, tarih vb.)</li>
    <li>🌍 Kültüre özgü sahte veri oluşturma (locale destekleri)</li>
    <li>🔗 Zincirlenebilir kurallar ile esnek veri senaryoları</li>
    <li>🚀 Performanslı ve kolay kullanımlı API</li>
  </ul>

  <h3 style="color:#166534;">✅ En İyi Uygulamalar</h3>
  <ul>
    <li>📝 Sahte verilerin test senaryolarında tutarlı ve anlamlı olmasına dikkat edin</li>
    <li>🔄 Karmaşık nesneler için birden çok <code>RuleFor</code> kuralı tanımlayın</li>
    <li>🧹 Test sonrası sahte verileri temizleyin veya izole edin</li>
    <li>📚 Resmi dökümantasyonu takip ederek yeni özellikleri keşfedin</li>
  </ul>

  <h3 style="color:#15803d;">📚 Daha Fazla Kaynak</h3>
  <ul>
    <li><a href="https://github.com/bchavez/Bogus" target="_blank" style="color:#22c55e;">Bogus GitHub Repository</a></li>
    <li><a href="https://github.com/bchavez/Bogus/wiki" target="_blank" style="color:#22c55e;">Bogus Wiki & Documentation</a></li>
  </ul>
</div>`
                },
              ]
            },
          ]
        },
        {
          id: "integration-testing",
          title: "Integration Testing",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#eef2ff; padding:2rem; border-radius:1rem; border:2px solid #6366f1; box-shadow:0 6px 20px rgba(99,102,241,0.2)">
  <h2 style="color:#4f46e5;">🔗 Integration Testing – Sistem Bileşenlerinin Birlikte Çalışmasını Doğrulama</h2>
  <p>
    <strong>Entegrasyon testi</strong>, farklı modüllerin, servislerin veya sistem bileşenlerinin birlikte doğru çalışıp çalışmadığını kontrol eden bir test türüdür.
    Birim testlerinin aksine, entegrasyon testleri birden fazla bileşenin etkileşimini test eder.
  </p>

  <h3 style="color:#4338ca;">💡 Neden Entegrasyon Testi Yapılır?</h3>
  <ul>
    <li>🔍 Farklı modüller arasındaki iletişimin doğru ve sorunsuz olduğunu doğrulamak</li>
    <li>⚙️ Gerçek ortam benzeri durumlarda sistemin beklenen şekilde çalıştığını görmek</li>
    <li>🛡️ Olası entegrasyon sorunlarını erken aşamada yakalamak</li>
    <li>🔄 Veri akışı ve servis çağrılarının doğruluğunu test etmek</li>
  </ul>

  <h3 style="color:#4338ca;">💻 Örnek: .NET Core Web API için Basit Entegrasyon Testi</h3>
  <pre style="background:#e0e7ff; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using Microsoft.AspNetCore.Mvc.Testing;
using System.Net.Http;
using System.Threading.Tasks;
using Xunit;

public class MyApiIntegrationTests : IClassFixture<WebApplicationFactory&lt;Program&gt;>
{
  readonly HttpClient _client;

  public MyApiIntegrationTests(WebApplicationFactory&lt;Program&gt; factory)
  {
    _client = factory.CreateClient();
  }

  [Fact]
  public async Task Get_Endpoint_ReturnsSuccess()
  {
    var response = await _client.GetAsync("/api/values");
    response.EnsureSuccessStatusCode();

    var content = await response.Content.ReadAsStringAsync();
    Assert.Contains("expectedValue", content);
  }
}
  </pre>

  <h3 style="color:#4338ca;">🔧 Öne Çıkan Özellikler</h3>
  <ul>
    <li>✅ Gerçek sistem bileşenleri ve altyapı ile test</li>
    <li>🔄 API, veri tabanı, servisler arası etkileşim kontrolü</li>
    <li>🧪 Genellikle daha yavaş ve kapsamlıdır</li>
    <li>🧹 Test ortamlarının izole ve temiz olması önemlidir</li>
  </ul>

  <h3 style="color:#4f46e5;">✅ En İyi Uygulamalar</h3>
  <ul>
    <li>📝 Testlerinizin bağımsız ve tekrar çalışabilir olmasına dikkat edin</li>
    <li>⚙️ Test ortamlarını gerçek sistemlere olabildiğince yakın kurun</li>
    <li>🧹 Testten sonra veritabanı ve servisleri temizleyin veya resetleyin</li>
    <li>📊 Entegrasyon testlerini birim testlerle dengeli kullanın</li>
    <li>🔐 Gizli bilgileri ve API anahtarlarını güvenli şekilde yönetin</li>
  </ul>

  <h3 style="color:#4f46e5;">📚 Daha Fazla Kaynak</h3>
  <ul>
    <li><a href="https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests" target="_blank" style="color:#6366f1;">Microsoft Docs – ASP.NET Core Integration Testing</a></li>
    <li><a href="https://xunit.net/docs/shared-context" target="_blank" style="color:#6366f1;">xUnit.net Shared Context & Integration Tests</a></li>
  </ul>
</div>`
          ,
          type: "must-know",
          children: [
            {
              id: "webapplicationfactory", title: "WebApplicationFactory", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #0ea5e9; box-shadow:0 6px 20px rgba(14,165,233,0.2)">
  <h2 style="color:#0284c7;">🏭 WebApplicationFactory – ASP.NET Core Entegrasyon Testleri İçin Test Sunucusu</h2>
  <p>
    <strong>WebApplicationFactory&lt;TEntryPoint&gt;</strong>, ASP.NET Core uygulamalarını entegrasyon testlerinde gerçek bir test sunucusu gibi başlatmanızı sağlayan bir yardımcı sınıftır.
    Bu sayede HTTP isteklerini gerçek uygulama üzerinde test edebilirsiniz.
  </p>

  <h3 style="color:#0369a1;">💡 Neden WebApplicationFactory Kullanılır?</h3>
  <ul>
    <li>🧪 Gerçek uygulama ortamını taklit ederek HTTP tabanlı entegrasyon testleri yapmak</li>
    <li>🔄 Servisleri, middleware’leri ve pipeline’ı tam olarak test etmek</li>
    <li>⚙️ Test ortamında uygulamayı kolayca konfigüre etmek</li>
    <li>📦 Test sırasında gerçek bağımlılıkları veya test çiftlerini (mock, stub) kullanmak</li>
  </ul>

  <h3 style="color:#0369a1;">💻 Örnek: WebApplicationFactory ile Basit API Testi</h3>
  <pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using Microsoft.AspNetCore.Mvc.Testing;
using System.Net.Http;
using System.Threading.Tasks;
using Xunit;

public class ApiTests : IClassFixture&lt;WebApplicationFactory&lt;Program&gt;&gt;
{
readonly HttpClient _client;

public ApiTests(WebApplicationFactory&lt;Program&gt; factory)
{
  _client = factory.CreateClient();
}

[Fact]
public async Task Get_HomePage_ReturnsSuccess()
{
  var response = await _client.GetAsync("/");
  response.EnsureSuccessStatusCode();
  }
}
  </pre>

  <h3 style="color:#0369a1;">🔧 Öne Çıkan Özellikler</h3>
  <ul>
    <li>✅ ASP.NET Core uygulamasının tam pipeline’ını başlatır</li>
    <li>🔄 HTTP isteklerini gerçek uygulama üzerinde test eder</li>
    <li>⚙️ Testler sırasında servislerin konfigürasyonunu özelleştirebilir</li>
    <li>🧹 Test izolasyonu ve temizlik için uygun yapı sağlar</li>
  </ul>

  <h3 style="color:#0284c7;">✅ En İyi Uygulamalar</h3>
  <ul>
    <li>📝 Testlerin bağımsız ve tekrar çalışabilir olmasına özen gösterin</li>
    <li>🔧 Gerektiğinde <code>ConfigureWebHost</code> metodu ile test ortamını özelleştirin</li>
    <li>🔒 Test verilerini ve gizli bilgileri güvenli şekilde yönetin</li>
    <li>🧹 Testlerden sonra gerekli temizlik işlemlerini yapmayı unutmayın</li>
  </ul>

  <h3 style="color:#0284c7;">📚 Daha Fazla Kaynak</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests" target="_blank" style="color:#0ea5e9;">Microsoft Docs – Integration Testing in ASP.NET Core</a></li>
    <li><a href="https://xunit.net/docs/shared-context" target="_blank" style="color:#0ea5e9;">xUnit.net Shared Context & Test Fixtures</a></li>
  </ul>
</div>`
            },
            {
              id: "test-containers", title: "Test Containers", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:2rem; border-radius:1rem; border:2px solid #22c55e; box-shadow:0 6px 20px rgba(34,197,94,0.2)">
  <h2 style="color:#15803d;">🐳 Testcontainers – Entegrasyon Testleri İçin Dinamik Container Yönetimi</h2>
  <p>
    <strong>Testcontainers</strong>, testler sırasında Docker container'ları dinamik olarak oluşturup yöneten, 
    altyapı bağımlılıklarını (örneğin veri tabanı, mesajlaşma sistemi) gerçek ortamda test etmeye yarayan bir kütüphanedir.
  </p>

  <h3 style="color:#166534;">💡 Neden Testcontainers Kullanılır?</h3>
  <ul>
    <li>🧪 Gerçek bağımlılıkları container içinde izole ederek test etmek</li>
    <li>⚙️ Test ortamını kodla yönetmek, setup/teardown otomatikleştirmek</li>
    <li>🌍 Taşınabilir ve tutarlı test ortamları oluşturmak</li>
    <li>🔄 Testlerin birbirinden bağımsız ve tekrarlanabilir olmasını sağlamak</li>
  </ul>

  <h3 style="color:#166534;">💻 Örnek: PostgreSQL Container ile Testcontainers Kullanımı</h3>
  <pre style="background:#dcfce7; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using System;
using System.Threading.Tasks;
using DotNet.Testcontainers.Builders;
using DotNet.Testcontainers.Containers;
using Xunit;

public class PostgreSqlTests
{
  private readonly PostgreSqlTestcontainer _postgresqlContainer;

  public PostgreSqlTests()
  {
    _postgresqlContainer = new TestcontainersBuilder&lt;PostgreSqlTestcontainer&gt;()
      .WithDatabase(new PostgreSqlTestcontainerConfiguration
      {
        Database = "testdb",
        Username = "postgres",
        Password = "password"
      })
      .Build();
  }

  [Fact]
  public async Task RunDatabaseTest()
  {
    await _postgresqlContainer.StartAsync();

    // Test kodlarınız burada çalışır...

    await _postgresqlContainer.StopAsync();
  }
}
  </pre>

  <h3 style="color:#166534;">🔧 Öne Çıkan Özellikler</h3>
  <ul>
    <li>✅ Docker container’ları kod ile kolayca yönetme</li>
    <li>🔄 Bağımlılıkları izole edip gerçekçi test ortamları sağlama</li>
    <li>🧹 Test sonrası otomatik cleanup</li>
    <li>🌐 Çoklu container ve network desteği</li>
  </ul>

  <h3 style="color:#15803d;">✅ En İyi Uygulamalar</h3>
  <ul>
    <li>📝 Testlerin bağımsız ve izole olmasına dikkat edin</li>
    <li>⚙️ Container konfigürasyonlarını merkezi ve okunabilir tutun</li>
    <li>🧹 Test sonrası containerları mutlaka durdurup temizleyin</li>
    <li>🔐 Gizli bilgileri ve şifreleri güvenli şekilde yönetin</li>
  </ul>

  <h3 style="color:#15803d;">📚 Daha Fazla Kaynak</h3>
  <ul>
    <li><a href="https://dotnet.testcontainers.org/" target="_blank" style="color:#22c55e;">Testcontainers .NET Resmi Dokümantasyonu</a></li>
    <li><a href="https://www.testcontainers.org/" target="_blank" style="color:#22c55e;">Testcontainers Genel Dokümantasyonu</a></li>
  </ul>
</div>`
            },
            {
              id: "dotnet-aspire", title: ".NET Aspire", type: "good-to-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#e0f2fe; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)">
<h2 style="color:#2563eb;">🌐 Introduction to .NET ASP.NET Core</h2>
<p>
  <strong>ASP.NET Core</strong> is a modern, open-source, and cross-platform framework developed by Microsoft for building high-performance web applications, APIs, and microservices. It is designed to be lightweight, modular, and flexible — enabling developers to build scalable and maintainable web solutions that can run on Windows, Linux, and macOS.
</p>

<h3 style="color:#1e40af;">💡 Why Use ASP.NET Core?</h3>
<ul>
  <li>🚀 High performance with a minimal footprint</li>
  <li>⚙️ Cross-platform support for diverse environments</li>
  <li>🔧 Built-in dependency injection for cleaner, testable code</li>
  <li>🔒 Advanced security features including authentication & authorization</li>
  <li>📦 Modular middleware pipeline for flexible request handling</li>
  <li>🌍 Strong ecosystem with integration for modern frontends, databases, and cloud</li>
</ul>

<h3 style="color:#1e40af;">🔍 Real-World Scenario: Building a RESTful API for a Bookstore</h3>
<p>Imagine you want to create a backend service for an online bookstore. You need endpoints to manage books, including listing, adding, updating, and deleting them.</p>

<h4 style="color:#2563eb;">Example: Simple BooksController</h4>
<pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace BookStore.Api.Controllers
{
public record Book(int Id, string Title, string Author);

[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
  private static readonly List&lt;Book&gt; Books = new()
  {
    new Book(1, "Clean Code", "Robert C. Martin"),
    new Book(2, "The Pragmatic Programmer", "Andrew Hunt")
  };

  [HttpGet]
  public IEnumerable&lt;Book&gt; GetBooks() => Books;

  [HttpGet("{id}")]
  public ActionResult&lt;Book&gt; GetBook(int id)
  {
    var book = Books.Find(b => b.Id == id);
    if (book == null) return NotFound();
    return book;
  }

  [HttpPost]
  public IActionResult AddBook(Book newBook)
  {
    Books.Add(newBook);
    return CreatedAtAction(nameof(GetBook), new { id = newBook.Id }, newBook);
  }
}
}
</pre>

<h3 style="color:#1e40af;">🔧 Core Features Explained</h3>
<ul>
  <li>📦 <strong>Middleware Pipeline:</strong> Requests pass through customizable middleware components (logging, authentication, routing, etc.) allowing fine-grained control.</li>
  <li>🔄 <strong>Dependency Injection:</strong> Built-in DI container helps manage service lifetimes and promotes loose coupling.</li>
  <li>🔒 <strong>Security:</strong> Supports authentication schemes like JWT, OAuth, and integrates with Identity providers.</li>
  <li>📊 <strong>Configuration & Logging:</strong> Flexible configuration sources (JSON, environment variables, secrets) and structured logging support.</li>
  <li>🧪 <strong>Testing:</strong> Designed for easy unit and integration testing with tools like xUnit, Moq, and TestServer.</li>
</ul>

<h3 style="color:#2563eb;">✅ Best Practices for ASP.NET Core Development</h3>
<ul>
  <li>📝 Keep controllers slim; move business logic to services</li>
  <li>⚙️ Use dependency injection to manage dependencies</li>
  <li>🔒 Secure APIs using proper authentication and authorization</li>
  <li>🚀 Optimize startup performance by minimizing middleware and enabling response caching</li>
  <li>🧪 Write automated tests for critical business paths</li>
  <li>📦 Use configuration providers and secrets management to separate config from code</li>
  <li>📈 Monitor applications in production with logging and telemetry</li>
</ul>

<h3 style="color:#2563eb;">📚 Learn More</h3>
<ul>
  <li><a href="https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-7.0" target="_blank" style="color:#3b82f6;">Official ASP.NET Core Documentation</a></li>
  <li><a href="https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api" target="_blank" style="color:#3b82f6;">Build Your First ASP.NET Core Web API</a></li>
  <li><a href="https://dotnet.microsoft.com/en-us/learn/aspnet" target="_blank" style="color:#3b82f6;">.NET Learn Platform for ASP.NET Core</a></li>
</ul>
</div>`
            },
            {
              id: "respawn", title: "Respawn", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #0ea5e9; box-shadow:0 6px 20px rgba(14,165,233,0.2)">
<h2 style="color:#0284c7;">🧹 Database Reset & Test Data Cleanup with Respawn</h2>
<p>
  <strong>Respawn</strong> is a simple and efficient library designed to reset your database to a clean state between integration or end-to-end tests. It helps maintain consistent test environments by removing data from tables while respecting foreign key constraints.
</p>

<h3 style="color:#0369a1;">💡 Why Use Respawn?</h3>
<ul>
  <li>⚡ Quickly reset database state without dropping and recreating schemas</li>
  <li>🔄 Supports complex relational databases by handling foreign key constraints gracefully</li>
  <li>🧪 Ensures reliable and repeatable integration and functional tests</li>
  <li>🛠️ Works with multiple database providers such as SQL Server, PostgreSQL, MySQL, and SQLite</li>
</ul>

<h3 style="color:#0369a1;">🔍 Real-World Scenario: Integration Testing an ASP.NET Core API</h3>
<p>
  Imagine you have an ASP.NET Core Web API that interacts heavily with a SQL Server database. For your integration tests, you want to ensure that every test starts with a clean database state to avoid flaky tests caused by leftover data.
</p>
<p>
  Instead of dropping and recreating the entire database (which is slow), you use <code>Respawn</code> to efficiently delete data from all tables between tests.
</p>

<h4 style="color:#0284c7;">Example: Using Respawn in xUnit Integration Tests</h4>
<pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using Respawn;
using System.Threading.Tasks;
using Xunit;

public class DatabaseFixture
{
  private static Checkpoint _checkpoint = new Checkpoint
  {
    // You can exclude tables if needed, e.g. migration history tables
    TablesToIgnore = new[] { "__EFMigrationsHistory" }
  };

  public async Task ResetDatabaseAsync(string connectionString)
  {
    await _checkpoint.Reset(connectionString);
  }
}

public class MyIntegrationTests : IClassFixture&lt;DatabaseFixture&gt;
{
  private readonly DatabaseFixture _fixture;
  private readonly string _connectionString = "Server=localhost;Database=TestDb;Trusted_Connection=True;";

  public MyIntegrationTests(DatabaseFixture fixture)
  {
    _fixture = fixture;
  }

  [Fact]
  public async Task Test_SomeDatabaseOperation()
  {
    // Arrange
    await _fixture.ResetDatabaseAsync(_connectionString);
    
    // Act
    // Call API or service that modifies DB here
    
    // Assert
    // Verify the expected state
  }
}
</pre>

<h3 style="color:#0369a1;">✅ Best Practices</h3>
<ul>
  <li>🧹 Use Respawn to reset database state between tests instead of recreating the whole database for faster test runs</li>
  <li>⚠️ Be sure to exclude tables you want to preserve (like migration history) in the checkpoint configuration</li>
  <li>🔄 Run Respawn reset in a setup/teardown step in your test framework (e.g., xUnit's IAsyncLifetime or NUnit's setup methods)</li>
  <li>🔐 Keep your test database isolated from development and production to avoid accidental data loss</li>
  <li>🧪 Combine Respawn with transactional test patterns when possible for even faster cleanup</li>
</ul>

<h3 style="color:#0284c7;">📚 Learn More</h3>
<ul>
  <li><a href="https://github.com/jbogard/Respawn" target="_blank" style="color:#0ea5e9;">Respawn GitHub Repository</a></li>
  <li><a href="https://andrewlock.net/integration-testing-asp-net-core-with-a-real-database/" target="_blank" style="color:#0ea5e9;">Integration Testing ASP.NET Core with a Real Database (Blog)</a></li>
</ul>
</div>`
            },
          ]
        },
        {
          id: "snapshot-testing",
          title: "Snapshot Testing",
          type: "good-to-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefce8; padding:2rem; border-radius:1rem; border:2px solid #eab308; box-shadow:0 6px 20px rgba(234,179,8,0.2)">
	<h2 style="color:#ca8a04;">📸 Snapshot Testing</h2>
	<p>
		<strong>Snapshot testing</strong> is a technique used to capture and store the output of a component, function, or UI at a specific point in time and then compare future outputs against this saved snapshot to detect unintended changes.
	</p>

	<h3 style="color:#a16207;">💡 Why Use Snapshot Testing?</h3>
	<ul>
		<li>⚡ Quickly detect unexpected changes in UI or serialized output</li>
		<li>🧪 Simplifies testing of complex components or objects</li>
		<li>🛠️ Reduces the need to write detailed manual assertions for output structure</li>
		<li>🚀 Speeds up regression testing by automating output verification</li>
	</ul>

	<h3 style="color:#a16207;">🔍 Real-World Scenario: Testing a React Component</h3>
	<p>
		Say you have a React button component. You want to ensure that its rendered output doesn't change unexpectedly when you modify related code.
	</p>

	<h4 style="color:#ca8a04;">Example: Snapshot Testing with Jest and React Testing Library</h4>
	<pre style="background:#fef9c3; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('Button renders correctly', () => {
  const { asFragment } = render(&lt;Button label="Click me" /&gt;);
  expect(asFragment()).toMatchSnapshot();
});
	</pre>

	<h3 style="color:#a16207;">✅ Best Practices</h3>
	<ul>
		<li>📝 Review snapshots carefully before committing to avoid capturing incorrect states</li>
		<li>🚀 Use snapshots for stable UI or outputs, avoid using for rapidly changing or highly dynamic content</li>
		<li>🔄 Update snapshots intentionally after verifying changes using <code>jest --updateSnapshot</code></li>
		<li>🛠️ Combine snapshot tests with traditional assertions to check specific behavior</li>
		<li>📂 Organize snapshots clearly in your project structure (usually alongside test files)</li>
	</ul>

	<h3 style="color:#ca8a04;">📚 Learn More</h3>
	<ul>
		<li><a href="https://jestjs.io/docs/snapshot-testing" target="_blank" style="color:#eab308;">Jest Snapshot Testing Documentation</a></li>
		<li><a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank" style="color:#eab308;">React Testing Library</a></li>
	</ul>
</div>`
          ,
          children: [
            {
              id: "verify", title: "Verify", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #0ea5e9; box-shadow:0 6px 20px rgba(14,165,233,0.2)">
<h2 style="color:#0284c7;">✅ Verification in Unit Testing</h2>
<p>
  <strong>Verification</strong> is the process of checking that certain interactions or method calls happened during the execution of the code under test. It is commonly used in conjunction with mocks or substitutes to ensure that the system behaves as expected.
</p>

<h3 style="color:#0369a1;">💡 Why Use Verification?</h3>
<ul>
  <li>🔍 Ensure that specific methods or services were called with expected arguments</li>
  <li>🛠️ Validate side effects and interactions in isolation</li>
  <li>⚡ Increase confidence that your unit tests cover expected behaviors</li>
</ul>

<h3 style="color:#0369a1;">🔍 Real-World Scenario: Verifying Logger Calls with NSubstitute</h3>
<p>
  Imagine you have a service that logs important actions. You want to verify that when a method runs, the logger's <code>Log</code> method is called with the correct message.
</p>

<h4 style="color:#0284c7;">Example: Verification Using NSubstitute</h4>
<pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// Service interface
public interface ILogger
{
  void Log(string message);
}

// System under test
public class AuditService
{
  private readonly ILogger _logger;

  public AuditService(ILogger logger)
  {
    _logger = logger;
  }

  public void Record(string action)
  {
    if (!string.IsNullOrEmpty(action))
      _logger.Log($"Action: {action}");
  }
}

// Test method
[Fact]
public void Record_ShouldCallLog_WhenActionIsNotEmpty()
{
  // Arrange
  var logger = Substitute.For<ILogger>();
  var service = new AuditService(logger);
  string action = "UserLogin";

  // Act
  service.Record(action);

  // Assert (Verification)
  logger.Received(1).Log($"Action: {action}");
}
</pre>

<h3 style="color:#0369a1;">✅ Best Practices</h3>
<ul>
  <li>🛡️ Only verify interactions that are essential to the behavior being tested</li>
  <li>🔄 Avoid over-verifying — focus on the “what” rather than the “how” when possible</li>
  <li>⚙️ Use clear, descriptive names for mocked dependencies to improve test readability</li>
  <li>📝 Combine verification with assertion on outcomes for robust tests</li>
</ul>

<h3 style="color:#0284c7;">📚 Learn More</h3>
<ul>
  <li><a href="https://nsubstitute.github.io/help/received_calls/" target="_blank" style="color:#0ea5e9;">NSubstitute Verification Documentation</a></li>
  <li><a href="https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices" target="_blank" style="color:#0ea5e9;">Unit Testing Best Practices (.NET)</a></li>
</ul>
</div>`
            },
          ]
        },
        {
          id: "behavior-testing",
          title: "Behavior Testing",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefce8; padding:2rem; border-radius:1rem; border:2px solid #eab308; box-shadow:0 6px 20px rgba(234,179,8,0.2)">
  <h2 style="color:#ca8a04;">🎭 Behavior Testing (BDD)</h2>
  <p>
    <strong>Behavior Testing</strong>, often called <em>Behavior-Driven Development (BDD)</em>, is a testing approach focused on verifying the behavior of an application from the end-user’s perspective.
    Instead of testing implementation details, it tests the expected outcomes and interactions based on business requirements.
  </p>

  <h3 style="color:#a16207;">💡 Why Use Behavior Testing?</h3>
  <ul>
    <li>📝 Encourages collaboration between developers, testers, and business stakeholders</li>
    <li>🔍 Improves clarity of requirements by expressing them as examples</li>
    <li>🚀 Helps create living documentation that reflects actual system behavior</li>
    <li>🛠️ Tests focus on “what” the system should do, not “how” it does it</li>
  </ul>

  <h3 style="color:#a16207;">🔍 Real-World Scenario: User Login Feature</h3>
  <p>
    You want to test that a user can successfully log in with valid credentials and see an error message when credentials are invalid.
  </p>

  <h4 style="color:#ca8a04;">Example: BDD with SpecFlow (C#)</h4>
  <pre style="background:#fef9c3; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
Feature: User Login

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters valid credentials
    Then the user should be redirected to the dashboard

  Scenario: Failed login with invalid credentials
    Given the user is on the login page
    When the user enters invalid credentials
    Then an error message should be displayed
  </pre>

  <h4 style="color:#a16207;">Example: Step Definitions in C#</h4>
  <pre style="background:#fef9c3; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
[Binding]
public class LoginSteps
{
  [Given("the user is on the login page")]
  public void GivenUserOnLoginPage()
  {
      // Navigate to login page
  }

  [When("the user enters valid credentials")]
  public void WhenUserEntersValidCredentials()
  {
      // Input valid username and password
  }

  [When("the user enters invalid credentials")]
  public void WhenUserEntersInvalidCredentials()
  {
      // Input invalid username and password
  }

  [Then("the user should be redirected to the dashboard")]
  public void ThenRedirectToDashboard()
  {
      // Assert navigation to dashboard
  }

  [Then("an error message should be displayed")]
  public void ThenErrorMessageDisplayed()
  {
      // Assert error message is visible
  }
}
  </pre>

  <h3 style="color:#a16207;">✅ Best Practices</h3>
  <ul>
    <li>🤝 Collaborate early between business, QA, and dev teams to define clear scenarios</li>
    <li>📝 Write scenarios in a simple, business-readable language (e.g., Gherkin)</li>
    <li>⚡ Keep scenarios focused and concise, testing one behavior at a time</li>
    <li>🔄 Automate scenarios as part of CI/CD pipelines</li>
    <li>📚 Use BDD tools like SpecFlow (.NET), Cucumber (Java, JS), or Behave (Python)</li>
  </ul>

  <h3 style="color:#ca8a04;">📚 Learn More</h3>
  <ul>
    <li><a href="https://specflow.org/" target="_blank" style="color:#eab308;">SpecFlow Official Site</a></li>
    <li><a href="https://cucumber.io/docs/bdd/" target="_blank" style="color:#eab308;">Introduction to BDD with Cucumber</a></li>
    <li><a href="https://docs.microsoft.com/en-us/dotnet/core/testing/specflow" target="_blank" style="color:#eab308;">SpecFlow Documentation (Microsoft)</a></li>
  </ul>
</div>
`
          ,
          type: "optional",
          children: [
            {
              id: "specflow", title: "SpecFlow", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefce8; padding:2rem; border-radius:1rem; border:2px solid #eab308; box-shadow:0 6px 20px rgba(234,179,8,0.2)">
<h2 style="color:#ca8a04;">🔹 SpecFlow: Behavior-Driven Development (BDD) Framework for .NET</h2>
<p>
  <strong>SpecFlow</strong> is a popular BDD framework for .NET that enables writing human-readable tests using the Gherkin language.
  It helps bridge the gap between technical and non-technical team members by describing system behavior through examples.
</p>

<h3 style="color:#a16207;">💡 Why Use SpecFlow?</h3>
<ul>
  <li>📝 Write executable specifications in plain English (Gherkin)</li>
  <li>🤝 Facilitates collaboration between developers, testers, and business analysts</li>
  <li>🚀 Integrates seamlessly with popular test runners like NUnit, MSTest, and xUnit</li>
  <li>🔄 Supports automation of acceptance criteria as part of your CI/CD pipeline</li>
</ul>

<h3 style="color:#a16207;">🔍 Core Concepts</h3>
<ul>
  <li><strong>Feature Files:</strong> Written in Gherkin language describing features and scenarios</li>
  <li><strong>Step Definitions:</strong> Bind Gherkin steps to code implementations</li>
  <li><strong>Hooks:</strong> Setup and teardown actions around scenarios</li>
</ul>

<h3 style="color:#ca8a04;">💻 Example: Login Feature (Gherkin)</h3>
<pre style="background:#fef9c3; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
Feature: User Login

Scenario: Successful login with valid credentials
  Given the user is on the login page
  When the user enters valid username and password
  Then the user should be redirected to the dashboard

Scenario: Failed login with invalid credentials
  Given the user is on the login page
  When the user enters invalid username or password
  Then an error message should be displayed
</pre>

<h3 style="color:#a16207;">💻 Example: Step Definitions in C#</h3>
<pre style="background:#fef9c3; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
[Binding]
public class LoginSteps
{
[Given("the user is on the login page")]
public void GivenUserOnLoginPage()
{
  // Navigate to login page logic
}

[When("the user enters valid username and password")]
public void WhenUserEntersValidCredentials()
{
  // Input valid credentials logic
}

[When("the user enters invalid username or password")]
public void WhenUserEntersInvalidCredentials()
{
  // Input invalid credentials logic
}

[Then("the user should be redirected to the dashboard")]
public void ThenUserIsRedirected()
{
  // Assert navigation to dashboard
}

[Then("an error message should be displayed")]
public void ThenErrorMessageIsDisplayed()
{
  // Assert error message visibility
}
}
</pre>

<h3 style="color:#a16207;">✅ Best Practices</h3>
<ul>
  <li>📄 Keep feature files concise and focused on behavior, not implementation</li>
  <li>🧩 Reuse step definitions to avoid duplication</li>
  <li>🔄 Integrate SpecFlow tests into CI/CD pipelines for automated validation</li>
  <li>🛠️ Use hooks for setup/teardown to keep tests clean and maintainable</li>
  <li>👥 Collaborate with stakeholders to ensure scenarios cover real user behaviors</li>
</ul>

<h3 style="color:#ca8a04;">📚 Learn More</h3>
<ul>
  <li><a href="https://specflow.org/" target="_blank" style="color:#eab308;">SpecFlow Official Website</a></li>
  <li><a href="https://docs.specflow.org/en/latest/" target="_blank" style="color:#eab308;">SpecFlow Documentation</a></li>
  <li><a href="https://docs.microsoft.com/en-us/dotnet/core/testing/specflow" target="_blank" style="color:#eab308;">Using SpecFlow with .NET</a></li>
</ul>
</div>
`
            },
          ]
        },
        {
          id: "e2e-testing",
          title: "E2E Testing",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefce8; padding:2rem; border-radius:1rem; border:2px solid #eab308; box-shadow:0 6px 20px rgba(234,179,8,0.2)">
  <h2 style="color:#ca8a04;">🚀 End-to-End (E2E) Testing</h2>
  <p>
    <strong>End-to-End testing</strong> is a type of software testing that validates the entire application flow from start to finish,
    ensuring all integrated components work together as expected in a real user environment.
  </p>

  <h3 style="color:#a16207;">💡 Why E2E Testing?</h3>
  <ul>
    <li>🔍 Verifies the full user journey across UI, backend, and external services</li>
    <li>🛡️ Detects integration issues and regressions early</li>
    <li>🤖 Simulates real user behavior for confidence in releases</li>
    <li>📈 Improves software quality and reduces production bugs</li>
  </ul>

  <h3 style="color:#a16207;">🔧 Popular Tools for E2E Testing</h3>
  <ul>
    <li>✅ <strong>Cypress</strong>: Modern, fast, and developer-friendly testing framework for web applications</li>
    <li>✅ <strong>Playwright</strong>: Supports multiple browsers and powerful automation capabilities</li>
    <li>✅ <strong>Selenium</strong>: Classic browser automation tool with wide language and platform support</li>
  </ul>

  <h3 style="color:#ca8a04;">💻 Example: Cypress Test for a Login Flow</h3>
  <pre style="background:#fef9c3; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
describe('Login Page', () =&gt; {
  beforeEach(() =&gt; {
    cy.visit('/login');
  });

  it('should allow user to login with valid credentials', () =&gt; {
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="password"]').type('Password123!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Welcome, testuser');
  });

  it('should show error message with invalid credentials', () =&gt; {
    cy.get('input[name="username"]').type('wronguser');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();

    cy.contains('Invalid username or password').should('be.visible');
  });
});
  </pre>

  <h3 style="color:#a16207;">✅ Best Practices</h3>
  <ul>
    <li>🧩 Keep E2E tests focused on critical user flows, avoid excessive detail</li>
    <li>⚡ Run E2E tests in CI/CD pipelines to catch issues before production</li>
    <li>🔄 Use test data setup and teardown to keep tests isolated and repeatable</li>
    <li>🛠️ Combine with unit and integration tests for comprehensive coverage</li>
    <li>🚀 Use headless browser mode for faster test execution in CI environments</li>
    <li>📝 Write clear, maintainable test scripts with meaningful assertions</li>
  </ul>

  <h3 style="color:#ca8a04;">📚 Learn More</h3>
  <ul>
    <li><a href="https://www.cypress.io/" target="_blank" style="color:#eab308;">Cypress Official Website</a></li>
    <li><a href="https://playwright.dev/" target="_blank" style="color:#eab308;">Playwright Official Website</a></li>
    <li><a href="https://www.selenium.dev/" target="_blank" style="color:#eab308;">Selenium Official Website</a></li>
  </ul>
</div>
`,
          type: "optional",
          children: [
            {
              id: "playwright", title: "Playwright", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #0ea5e9; box-shadow:0 6px 20px rgba(14,165,233,0.2)">
<h2 style="color:#0284c7;">🎭 Playwright: Modern Cross-Browser Automation & Testing</h2>
<p>
  <strong>Playwright</strong> is a powerful, open-source automation framework developed by Microsoft that enables end-to-end testing across multiple browsers including Chromium, Firefox, and WebKit.
  It allows developers and testers to write reliable, fast, and scalable tests simulating real user interactions in web applications.
</p>

<h3 style="color:#0369a1;">💡 Why Choose Playwright?</h3>
<ul>
  <li>🌐 Cross-browser testing support out of the box (Chrome, Firefox, Safari)</li>
  <li>⚡ Auto-waiting and smart selectors improve test stability</li>
  <li>🤖 Powerful API for interacting with page elements, network, dialogs, and more</li>
  <li>🛠️ Supports headless and headed browser testing</li>
  <li>📦 Easy integration with CI/CD pipelines and other testing frameworks</li>
</ul>

<h3 style="color:#0369a1;">🔧 Core Features</h3>
<ul>
  <li>✅ Browser contexts for isolated testing sessions</li>
  <li>✅ Network interception and mocking</li>
  <li>✅ Screenshot and video recording for debugging</li>
  <li>✅ Multi-language support: JavaScript, TypeScript, Python, C#, Java</li>
  <li>✅ Parallel test execution</li>
</ul>

<h3 style="color:#0284c7;">💻 Example: Basic Playwright Test (JavaScript)</h3>
<pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
const { chromium } = require('playwright');

(async () =&gt; {
const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto('https://example.com');
await page.click('text=More information');
await page.waitForSelector('h1');

const title = await page.title();
console.log('Page title:', title);

await browser.close();
})();
</pre>

<h3 style="color:#0369a1;">✅ Best Practices</h3>
<ul>
  <li>🧹 Use browser contexts to isolate tests and avoid state leakage</li>
  <li>🕵️‍♂️ Utilize network mocking to simulate backend responses and speed tests</li>
  <li>📸 Capture screenshots or videos on test failure for easier debugging</li>
  <li>⚡ Run tests in parallel to reduce total test suite runtime</li>
  <li>🔄 Integrate Playwright tests in CI pipelines to automate quality checks</li>
  <li>📝 Write clear, maintainable selectors and avoid brittle element locators</li>
</ul>

<h3 style="color:#0284c7;">📚 Learn More</h3>
<ul>
  <li><a href="https://playwright.dev/" target="_blank" style="color:#0ea5e9;">Playwright Official Documentation</a></li>
  <li><a href="https://playwright.dev/docs/intro" target="_blank" style="color:#0ea5e9;">Getting Started Guide</a></li>
  <li><a href="https://github.com/microsoft/playwright" target="_blank" style="color:#0ea5e9;">Playwright GitHub Repository</a></li>
</ul>
</div>`
            },
            {
              id: "puppeteer-sharp", title: "Puppeteer-Sharp", type: "good-to-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#fff7ed; padding:2rem; border-radius:1rem; border:2px solid #f97316; box-shadow:0 6px 20px rgba(249,115,22,0.2)">
<h2 style="color:#c2410c;">🚀 Puppeteer-Sharp: Headless Chrome Automation for .NET</h2>
<p>
  <strong>Puppeteer-Sharp</strong> is a .NET port of the popular Node.js Puppeteer library that provides a high-level API to control Chromium-based browsers (Chrome, Edge) programmatically. 
  It allows developers to automate browser tasks such as UI testing, web scraping, PDF generation, and more.
</p>

<h3 style="color:#ea580c;">💡 Why Use Puppeteer-Sharp?</h3>
<ul>
  <li>⚡ Headless browser automation with full control over Chromium</li>
  <li>🖥️ Supports both headless and headed modes for flexibility</li>
  <li>🔄 Automate complex user interactions, navigation, and page manipulation</li>
  <li>📸 Capture screenshots, generate PDFs, and inspect DOM elements</li>
  <li>🛠️ Integrates well with .NET applications and test frameworks</li>
</ul>

<h3 style="color:#ea580c;">🔧 Core Features</h3>
<ul>
  <li>✅ Launch and control Chromium browsers</li>
  <li>✅ Navigate pages, fill forms, click elements, and take screenshots</li>
  <li>✅ Support for intercepting network requests and mocking responses</li>
  <li>✅ Generate PDFs from web pages</li>
  <li>✅ Evaluate JavaScript within the page context</li>
</ul>

<h3 style="color:#c2410c;">💻 Example: Basic Puppeteer-Sharp Usage (.NET C#)</h3>
<pre style="background:#ffedd5; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using PuppeteerSharp;

public async Task RunAsync()
{
  // Download Chromium if needed
  await new BrowserFetcher().DownloadAsync(BrowserFetcher.DefaultRevision);

  using var browser = await Puppeteer.LaunchAsync(new LaunchOptions
  {
      Headless = true
  });

  using var page = await browser.NewPageAsync();
  await page.GoToAsync("https://example.com");

  // Take a screenshot
  await page.ScreenshotAsync("example.png");

  // Get the page title
  var title = await page.GetTitleAsync();
  Console.WriteLine($"Page title: {title}");
}
</pre>

<h3 style="color:#ea580c;">✅ Best Practices</h3>
<ul>
  <li>🧹 Always dispose of browser and page instances properly to free resources</li>
  <li>⚡ Use headless mode for faster automated tests unless UI debugging is needed</li>
  <li>🔍 Use explicit waits or Playwright-like auto-waits to ensure elements are ready before interacting</li>
  <li>📸 Capture screenshots or PDFs on test failures for easier diagnosis</li>
  <li>🛠️ Integrate with test runners like xUnit or NUnit for end-to-end UI testing</li>
  <li>🔒 Handle authentication, cookies, and sessions carefully for realistic tests</li>
</ul>

<h3 style="color:#c2410c;">📚 Learn More</h3>
<ul>
  <li><a href="https://github.com/hardkoded/puppeteer-sharp" target="_blank" style="color:#f97316;">Puppeteer-Sharp GitHub Repository</a></li>
  <li><a href="https://www.puppeteersharp.com/" target="_blank" style="color:#f97316;">API Reference</a></li>
</ul>
</div>`
            },
            {
              id: "selenium", title: "Selenium", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#e0f2fe; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)">
<h2 style="color:#2563eb;">🌐 Selenium: Web Browser Automation for Testing</h2>
<p>
  <strong>Selenium</strong> is one of the most popular open-source frameworks for automating web browsers. It enables developers and testers to simulate user interactions and automate testing workflows across multiple browsers and platforms.
</p>

<h3 style="color:#1e40af;">💡 Why Use Selenium?</h3>
<ul>
  <li>⚙️ Supports cross-browser testing: Chrome, Firefox, Edge, Safari, and more</li>
  <li>🧩 Compatible with many programming languages including C#, Java, Python, and JavaScript</li>
  <li>📦 Integrates well with testing frameworks like NUnit, xUnit, and MSTest</li>
  <li>🔄 Supports parallel test execution and distributed testing with Selenium Grid</li>
  <li>🌍 Large community and extensive documentation</li>
</ul>

<h3 style="color:#1e40af;">🔧 Core Features</h3>
<ul>
  <li>✅ Browser control and navigation</li>
  <li>✅ Element location using CSS selectors, XPath, IDs, and more</li>
  <li>✅ User action simulation: clicks, typing, drag-and-drop</li>
  <li>✅ Handling alerts, pop-ups, frames, and windows</li>
  <li>✅ Support for waits to synchronize tests with dynamic page content</li>
</ul>

<h3 style="color:#2563eb;">💻 Example: Selenium with C# (.NET) Basic Test</h3>
<pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

public class SeleniumTest
{
  public void Run()
  {
      // Initialize the Chrome driver
      using IWebDriver driver = new ChromeDriver();

      // Navigate to website
      driver.Navigate().GoToUrl("https://example.com");

      // Find element and get its text
      var heading = driver.FindElement(By.TagName("h1")).Text;
      Console.WriteLine($"Page heading: {heading}");

      // Click on a button (example)
      // driver.FindElement(By.Id("submit")).Click();

      // Close the browser
      driver.Quit();
  }
}
</pre>

<h3 style="color:#1e40af;">✅ Best Practices</h3>
<ul>
  <li>⚡ Use explicit waits (<code>WebDriverWait</code>) instead of implicit waits for reliable test synchronization</li>
  <li>🧹 Clean up browser instances after tests to avoid memory leaks</li>
  <li>📦 Use Page Object Model (POM) design pattern for maintainable test code</li>
  <li>🔄 Leverage Selenium Grid for parallel and cross-browser testing</li>
  <li>🔒 Handle authentication, cookies, and sessions thoughtfully</li>
  <li>📸 Capture screenshots on test failures for debugging</li>
</ul>

<h3 style="color:#2563eb;">📚 Learn More</h3>
<ul>
  <li><a href="https://www.selenium.dev/" target="_blank" style="color:#3b82f6;">Official Selenium Website</a></li>
  <li><a href="https://selenium.dev/documentation/" target="_blank" style="color:#3b82f6;">Selenium Documentation</a></li>
  <li><a href="https://github.com/SeleniumHQ/selenium" target="_blank" style="color:#3b82f6;">GitHub Repository</a></li>
</ul>
</div>`
            },
          ]
        },
        {
          id: "performance-testing",
          title: "Performance Testing",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#e8f0fe; padding:2rem; border-radius:1rem; border:2px solid #2563eb; box-shadow:0 6px 20px rgba(37,99,235,0.2)">
  <h2 style="color:#1e40af;">🚀 Performance Testing: Ensuring Application Speed, Stability & Scalability</h2>
  <p>
    <strong>Performance Testing</strong> is a crucial phase in software quality assurance focused on verifying that applications meet speed, responsiveness, and stability requirements under expected and peak workloads.
    It ensures your system can handle real-world user demands without slowing down or crashing.
  </p>

  <h3 style="color:#1e3a8a;">💡 Why is Performance Testing Important?</h3>
  <ul>
    <li>🕒 Ensures fast response times, improving user satisfaction and retention</li>
    <li>📊 Validates system scalability as the user base grows</li>
    <li>⚠️ Detects bottlenecks before deployment to avoid downtime</li>
    <li>🛡️ Confirms system stability under normal and extreme load</li>
    <li>💵 Prevents revenue loss due to slow or unavailable services</li>
  </ul>

  <h3 style="color:#1e3a8a;">🔍 Types of Performance Testing</h3>
  <ul>
    <li><strong>Load Testing:</strong> Simulates expected user loads to verify the system’s behavior under typical conditions.</li>
    <li><strong>Stress Testing:</strong> Pushes the system beyond limits to identify breaking points and recovery ability.</li>
    <li><strong>Spike Testing:</strong> Tests system response to sudden, sharp increases in load.</li>
    <li><strong>Endurance (Soak) Testing:</strong> Evaluates performance over extended periods to detect memory leaks or degradation.</li>
    <li><strong>Scalability Testing:</strong> Assesses the system’s ability to scale up (e.g., adding users, data volume) smoothly.</li>
  </ul>

  <h3 style="color:#2563eb;">💻 Real-World Scenario: E-Commerce Website During Sale Events</h3>
  <p>
    Imagine an e-commerce platform preparing for Black Friday sales. Performance testing ensures the website handles a sudden surge of thousands of users adding items to carts, browsing categories, and checking out without slowdowns or failures.
    This requires simulating realistic user journeys with tools like <code>Apache JMeter</code> or <code>Locust</code>, measuring response times, error rates, and server health.
  </p>

  <h3 style="color:#2563eb;">💻 Example: Basic Apache JMeter Load Test Plan (XML Snippet)</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
<TestPlan>
	<ThreadGroup>
		<num_threads>200</num_threads> <!-- Simulate 200 users -->
		<ramp_time>120</ramp_time>      <!-- Ramp up users over 2 minutes -->
		<loop_count>20</loop_count>    <!-- Each user repeats 20 times -->
	</ThreadGroup>
	<HTTPSamplerProxy>
		<domain>myecommerce.com</domain>
		<path>/products</path>
		<method>GET</method>
	</HTTPSamplerProxy>
</TestPlan>
  </pre>

  <h3 style="color:#1e3a8a;">✅ Best Practices for Performance Testing</h3>
  <ul>
    <li>📋 <strong>Define Clear Objectives:</strong> Establish performance goals such as max response time, throughput, and error rates based on business requirements.</li>
    <li>🧪 <strong>Test Environment:</strong> Use an environment as close as possible to production to get realistic results.</li>
    <li>⚙️ <strong>Use Realistic User Scenarios:</strong> Model user behavior accurately—consider login, browsing, searching, and checkout flows.</li>
    <li>📈 <strong>Gradual Load Increase:</strong> Start with low loads and increase gradually to identify performance degradation points.</li>
    <li>🛠️ <strong>Monitor System Metrics:</strong> Collect CPU, memory, disk I/O, and network usage data during tests to pinpoint bottlenecks.</li>
    <li>🔄 <strong>Automate and Integrate:</strong> Incorporate performance tests into CI/CD pipelines to catch regressions early.</li>
    <li>🔧 <strong>Tune and Optimize:</strong> Use test results to optimize code, database queries, caching, and infrastructure.</li>
    <li>📝 <strong>Report Clearly:</strong> Present findings with clear metrics, graphs, and recommendations to stakeholders.</li>
  </ul>

  <h3 style="color:#2563eb;">📚 Learn More & Tools</h3>
  <ul>
    <li><a href="https://jmeter.apache.org/" target="_blank" style="color:#2563eb;">Apache JMeter - Popular Open-Source Load Testing Tool</a></li>
    <li><a href="https://locust.io/" target="_blank" style="color:#2563eb;">Locust - Easy-to-Use Python Load Testing Framework</a></li>
    <li><a href="https://www.gatling.io/" target="_blank" style="color:#2563eb;">Gatling - High-Performance Load Testing Tool</a></li>
    <li><a href="https://docs.microsoft.com/en-us/azure/architecture/best-practices/performance-testing" target="_blank" style="color:#2563eb;">Microsoft Azure Performance Testing Best Practices</a></li>
  </ul>
</div>
`,
          type: "good-to-know",
          children: [
            {
              id: "k6", title: "K6", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#e0f2fe; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)">
  <h2 style="color:#2563eb;">🚀 K6 Performance Testing</h2>
  <p>
    <strong>K6</strong> is a modern, open-source load testing tool designed to help developers and QA engineers measure the performance and reliability of APIs, microservices, and websites. 
    It uses JavaScript for scripting test scenarios, making it easy to create complex, reusable, and maintainable load tests.
  </p>

  <h3 style="color:#1d4ed8;">💡 Why Use K6?</h3>
  <ul>
    <li>⚡ Lightweight and efficient, capable of simulating thousands of virtual users with minimal resource consumption</li>
    <li>📜 Uses JavaScript ES6 syntax for scripting, allowing familiar language and modular design</li>
    <li>🌐 Supports HTTP/1.1, HTTP/2, and WebSocket protocols</li>
    <li>📈 Real-time performance metrics and detailed reporting</li>
    <li>🔄 Integrates seamlessly with CI/CD pipelines and popular monitoring tools like Grafana and InfluxDB</li>
  </ul>

  <h3 style="color:#1d4ed8;">🔧 Core Features</h3>
  <ul>
    <li>🧪 Virtual Users (VUs) simulate concurrent users performing defined actions</li>
    <li>⏳ Configurable ramp-up and ramp-down stages to model realistic traffic patterns</li>
    <li>📊 Thresholds enable defining pass/fail criteria for automated test validation</li>
    <li>📤 Multiple output formats including JSON, CSV, and integrations with observability platforms</li>
    <li>💻 Cross-platform CLI tool and cloud execution options</li>
  </ul>

  <h3 style="color:#2563eb;">💻 Example: Simple Load Test Script</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    vus: 50,  // Virtual users
    duration: '30s',  // Test duration
};

export default function () {
    let res = http.get('https://test-api.example.com/products');
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time < 500ms': (r) => r.timings.duration < 500,
    });
    sleep(1);
}
  </pre>

  <h3 style="color:#1d4ed8;">✅ Best Practices</h3>
  <ul>
    <li>📝 Write modular and reusable test scripts using ES6 modules</li>
    <li>⚡ Start with small load tests and gradually increase load to avoid overwhelming your system</li>
    <li>📊 Use thresholds to automate pass/fail criteria and integrate results with monitoring dashboards</li>
    <li>🔄 Integrate load testing into your CI/CD pipeline for continuous performance validation</li>
    <li>📈 Monitor resource utilization on your system alongside load tests to identify bottlenecks</li>
    <li>🌐 Test with realistic data and user scenarios to get actionable performance insights</li>
  </ul>

  <h3 style="color:#2563eb;">📚 Learn More</h3>
  <ul>
    <li><a href="https://k6.io/docs/" target="_blank" style="color:#3b82f6;">Official K6 Documentation</a></li>
    <li><a href="https://k6.io/docs/examples/" target="_blank" style="color:#3b82f6;">K6 Example Scripts</a></li>
    <li><a href="https://k6.io/blog/" target="_blank" style="color:#3b82f6;">K6 Blog & Community</a></li>
  </ul>
</div>` },
            {
              id: "jmeter", title: "JMeter", type: "good-to-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #2563eb; box-shadow:0 6px 20px rgba(37,99,235,0.2)">
    <h2 style="color:#1e40af;">⚙️ Apache JMeter Performance Testing</h2>
    <p>
      <strong>Apache JMeter</strong> is a widely-used open-source load testing tool designed to measure the performance and scalability of web applications, APIs, databases, and more.
      Originally developed for testing web servers, JMeter has evolved to support a wide variety of protocols and use cases, making it a versatile tool for performance engineers.
    </p>

    <h3 style="color:#1e40af;">💡 Why Choose JMeter?</h3>
    <ul>
      <li>🌍 Supports many protocols: HTTP/HTTPS, FTP, JDBC, JMS, SOAP, REST, TCP, and more</li>
      <li>📈 Allows creation of complex load test plans with customizable thread groups and timers</li>
      <li>🛠️ Provides rich GUI for test design and debugging</li>
      <li>📊 Offers detailed reports and graphical results for performance analysis</li>
      <li>🔄 Integrates well with CI/CD tools like Jenkins and other automation pipelines</li>
      <li>⚙️ Highly extensible via plugins and scripting (Groovy, BeanShell)</li>
    </ul>

    <h3 style="color:#1e40af;">🔧 Core Concepts</h3>
    <ul>
      <li><strong>Thread Groups:</strong> Simulate concurrent users with configurable user count, ramp-up time, and loop count</li>
      <li><strong>Samplers:</strong> Define requests to be sent, such as HTTP requests or JDBC queries</li>
      <li><strong>Listeners:</strong> Collect and display test results and metrics in various formats</li>
      <li><strong>Timers:</strong> Control the pacing of requests</li>
      <li><strong>Assertions:</strong> Verify server responses meet expected criteria</li>
    </ul>

    <h3 style="color:#1e40af;">💻 Example: Basic HTTP Load Test</h3>
    <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
&lt;TestPlan&gt;
  &lt;ThreadGroup&gt;
    &lt;num_threads&gt;100&lt;/num_threads&gt;        &lt;!-- Simulate 100 users --&gt;
    &lt;ramp_time&gt;60&lt;/ramp_time&gt;            &lt;!-- Ramp-up over 60 seconds --&gt;
    &lt;loop_count&gt;10&lt;/loop_count&gt;          &lt;!-- Each user sends 10 requests --&gt;
  &lt;/ThreadGroup&gt;
  &lt;HTTPSamplerProxy&gt;
    &lt;domain&gt;example.com&lt;/domain&gt;
    &lt;path&gt;/api/products&lt;/path&gt;
    &lt;method&gt;GET&lt;/method&gt;
  &lt;/HTTPSamplerProxy&gt;
&lt;/TestPlan&gt;
    </pre>

    <h3 style="color:#1e40af;">✅ Best Practices</h3>
    <ul>
      <li>📝 Design test plans that mimic real user behavior for realistic load simulation</li>
      <li>⚡ Start with lower loads and gradually increase to identify breaking points</li>
      <li>📊 Use assertions to validate correctness of responses under load</li>
      <li>📁 Modularize tests by using Test Fragments and Include Controllers for maintainability</li>
      <li>🔄 Automate test execution in CI/CD pipelines for continuous performance monitoring</li>
      <li>📈 Analyze results with listeners and external tools like Grafana for deeper insights</li>
    </ul>

    <h3 style="color:#1e40af;">📚 Learn More</h3>
    <ul>
      <li><a href="https://jmeter.apache.org/" target="_blank" style="color:#2563eb;">Official Apache JMeter Website</a></li>
      <li><a href="https://jmeter.apache.org/usermanual/get-started.html" target="_blank" style="color:#2563eb;">Getting Started Guide</a></li>
      <li><a href="https://jmeter.apache.org/usermanual/listeners.html" target="_blank" style="color:#2563eb;">Listeners and Reporting</a></li>
    </ul>
  </div>` },
            {
              id: "crank", title: "Crank", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#fff7ed; padding:2rem; border-radius:1rem; border:2px solid #f97316; box-shadow:0 6px 20px rgba(249,115,22,0.2)">
<h2 style="color:#c2410c;">🚀 Crank Load Testing</h2>
<p>
  <strong>Crank</strong> is an open-source, distributed load testing tool designed to generate high-scale HTTP traffic from multiple machines with minimal resource consumption.
  It’s ideal for testing performance and reliability of web services and APIs at scale, supporting cloud-native environments.
</p>

<h3 style="color:#ea580c;">💡 Why Use Crank?</h3>
<ul>
  <li>⚡ Lightweight and efficient with low CPU and memory footprint</li>
  <li>🌐 Distributed architecture enables load generation from multiple nodes</li>
  <li>🧰 Supports HTTP/1.1 and HTTP/2 protocols with TLS</li>
  <li>📊 Provides detailed metrics and real-time monitoring</li>
  <li>🔧 Simple configuration using YAML or command-line options</li>
</ul>

<h3 style="color:#ea580c;">🔧 Core Features</h3>
<ul>
  <li>✅ High concurrency with low overhead</li>
  <li>🔄 Support for ramp-up and steady-state load profiles</li>
  <li>📈 Real-time performance dashboards</li>
  <li>🔐 Support for authentication, custom headers, and request bodies</li>
  <li>🌍 Easy integration with CI/CD pipelines and cloud environments</li>
</ul>

<h3 style="color:#c2410c;">💻 Example: Simple HTTP Load Test</h3>
<pre style="background:#ffedd5; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
crank --url https://api.example.com/products --duration 60s --concurrency 100 --ramp-up 30s
</pre>

<h3 style="color:#ea580c;">✅ Best Practices</h3>
<ul>
  <li>📝 Define realistic load patterns to simulate actual user behavior</li>
  <li>🔍 Monitor system resources on both load generators and target servers</li>
  <li>🚀 Gradually increase load to find bottlenecks and capacity limits</li>
  <li>📊 Use Crank’s real-time metrics to analyze latency, throughput, and errors</li>
  <li>🔄 Integrate Crank tests into automated pipelines for continuous performance validation</li>
</ul>

<h3 style="color:#c2410c;">📚 Learn More</h3>
<ul>
  <li><a href="https://github.com/microsoft/crank" target="_blank" style="color:#f97316;">Crank GitHub Repository</a></li>
  <li><a href="https://github.com/microsoft/crank/blob/main/docs/README.md" target="_blank" style="color:#f97316;">Official Documentation</a></li>
</ul>
</div>` },
            {
              id: "bombardier", title: "Bombardier", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#eff6ff; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)">
  <h2 style="color:#2563eb;">🚀 Bombardier Load Testing</h2>
  <p>
    <strong>Bombardier</strong> is a fast and simple HTTP benchmarking tool designed to test the performance and resilience of web servers and APIs by generating high concurrent traffic.
    Written in Go, Bombardier is cross-platform and lightweight, perfect for quick load testing scenarios.
  </p>

  <h3 style="color:#1d4ed8;">💡 Why Use Bombardier?</h3>
  <ul>
    <li>⚡ Extremely fast with low resource consumption</li>
    <li>📊 Provides detailed statistics like latency percentiles, requests per second, and transfer rates</li>
    <li>🛠️ Simple command-line interface for quick setup</li>
    <li>🌍 Supports HTTP/1.1, HTTP/2, and HTTPS protocols</li>
    <li>🔧 Allows customization of headers, request methods, and body payloads</li>
  </ul>

  <h3 style="color:#1d4ed8;">🔧 Core Features</h3>
  <ul>
    <li>✅ High concurrency and request rate options</li>
    <li>⏱️ Customizable duration and timeout settings</li>
    <li>📈 Real-time progress and summary statistics</li>
    <li>🔐 Support for TLS, HTTP/2, and custom certificates</li>
    <li>🌐 Easy integration in CI/CD pipelines and automation scripts</li>
  </ul>

  <h3 style="color:#2563eb;">💻 Example: Basic Load Test</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
bombardier -c 100 -d 30s https://api.example.com/products
  </pre>

  <h3 style="color:#1d4ed8;">✅ Best Practices</h3>
  <ul>
    <li>📝 Use realistic concurrency and duration values to simulate real user load</li>
    <li>🔍 Monitor target system metrics during tests to correlate results</li>
    <li>🚀 Gradually increase load to identify thresholds and bottlenecks</li>
    <li>📊 Analyze latency distributions and error rates carefully</li>
    <li>🔄 Automate Bombardier runs in your CI/CD pipeline for performance regression checks</li>
  </ul>

  <h3 style="color:#2563eb;">📚 Learn More</h3>
  <ul>
    <li><a href="https://github.com/codesenberg/bombardier" target="_blank" style="color:#3b82f6;">Bombardier GitHub Repository</a></li>
    <li><a href="https://github.com/codesenberg/bombardier#usage" target="_blank" style="color:#3b82f6;">Usage Documentation</a></li>
  </ul>
</div>` },
          ]
        },
        {
          id: "architecture-testing",
          title: "Architecture Testing",
          description:
            `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #0ea5e9; box-shadow:0 6px 20px rgba(14,165,233,0.2)">
  <h2 style="color:#0284c7;">🏛️ Architecture Testing</h2>
  <p>
    <strong>Architecture Testing</strong> is a specialized testing practice focused on verifying that a software system's architecture complies with the intended design principles, constraints, and quality attributes.
    It ensures that the system's components interact correctly, adhere to defined architectural rules, and maintain system integrity over time.
  </p>

  <h3 style="color:#0369a1;">💡 Why Architecture Testing?</h3>
  <ul>
    <li>🔍 Detect architectural violations early, preventing costly refactoring</li>
    <li>🛡️ Enforce separation of concerns and modularity</li>
    <li>📐 Maintain system scalability, maintainability, and performance</li>
    <li>⚙️ Ensure consistency between codebase and architectural documentation</li>
    <li>🚀 Facilitate smooth onboarding and evolution of the system</li>
  </ul>

  <h3 style="color:#0369a1;">🔧 Core Techniques</h3>
  <ul>
    <li>✅ Static code analysis to verify layering and dependencies</li>
    <li>🧩 Dependency rules enforcement (e.g., allowed/forbidden references)</li>
    <li>📏 Architectural constraint checking with tools like ArchUnit, NDepend</li>
    <li>🛠️ Automated tests verifying component interactions and contracts</li>
    <li>📝 Continuous validation integrated into CI pipelines</li>
  </ul>

  <h3 style="color:#0284c7;">💻 Example: Using ArchUnit in .NET</h3>
  <pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using ArchUnitNET.Domain;
using ArchUnitNET.Fluent;
using ArchUnitNET.Loader;
using Xunit;

public class ArchitectureTests
{
  private static readonly Architecture architecture = new ArchLoader().LoadAssemblies(typeof(Program).Assembly).Build();

  [Fact]
  public void ServicesShouldNotDependOnControllers()
  {
      var services = Classes().That().ResideInNamespace("MyApp.Services");
      var controllers = Classes().That().ResideInNamespace("MyApp.Controllers");

      var rule = services.Should().NotDependOnAny(controllers);
      rule.Check(architecture);
  }
}
  </pre>

  <h3 style="color:#0369a1;">✅ Best Practices</h3>
  <ul>
    <li>📝 Keep architectural rules clear, documented, and updated</li>
    <li>🔄 Integrate architecture tests in automated CI workflows</li>
    <li>🛑 Fail builds on architecture violations to enforce discipline</li>
    <li>📊 Regularly review and refine architectural constraints</li>
    <li>🤝 Collaborate closely with architects and developers</li>
  </ul>

  <h3 style="color:#0284c7;">📚 Learn More</h3>
  <ul>
    <li><a href="https://www.archunit.org/" target="_blank" style="color:#0ea5e9;">ArchUnit Official Website</a></li>
    <li><a href="https://www.ndepend.com/" target="_blank" style="color:#0ea5e9;">NDepend - Architecture and Code Quality Tool</a></li>
    <li><a href="https://martinfowler.com/articles/architecture-tests.html" target="_blank" style="color:#0ea5e9;">Martin Fowler on Architecture Tests</a></li>
  </ul>
</div>`,
          type: "good-to-know",
          children: [
            {
              id: "archunitnet", title: "ArchUnitNET", type: "good-to-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)">
<h2 style="color:#2563eb;">🏗️ ArchUnitNET</h2>
<p>
  <strong>ArchUnitNET</strong> is a powerful architecture testing library for .NET projects that enables you to define and enforce architectural rules programmatically.
  It helps maintain codebase consistency by detecting architectural violations early in the development cycle.
</p>

<h3 style="color:#1e40af;">💡 Why Use ArchUnitNET?</h3>
<ul>
  <li>🔍 Detect architectural violations automatically</li>
  <li>🛡️ Enforce layered architecture and dependency rules</li>
  <li>⚙️ Integrate architecture tests into CI/CD pipelines</li>
  <li>📐 Keep your codebase maintainable and modular</li>
</ul>

<h3 style="color:#1e40af;">🔧 Core Features</h3>
<ul>
  <li>✅ Fluent API for defining architectural constraints</li>
  <li>📦 Analyze assemblies, namespaces, classes, and methods</li>
  <li>🧩 Support for layered architecture and dependency rules</li>
  <li>🛠️ Integration with popular test frameworks like xUnit, NUnit, MSTest</li>
  <li>📊 Reports and feedback on architectural rule violations</li>
</ul>

<h3 style="color:#2563eb;">💻 Example: Basic Architecture Rule</h3>
<pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using ArchUnitNET.Domain;
using ArchUnitNET.Fluent;
using ArchUnitNET.Loader;
using Xunit;

public class ArchitectureTests
{
private static readonly Architecture architecture = new ArchLoader().LoadAssemblies(typeof(Program).Assembly).Build();

[Fact]
public void ServicesShouldNotDependOnControllers()
{
    var services = Classes().That().ResideInNamespace("MyApp.Services");
    var controllers = Classes().That().ResideInNamespace("MyApp.Controllers");

    var rule = services.Should().NotDependOnAny(controllers);
    rule.Check(architecture);
}
}
</pre>

<h3 style="color:#1e40af;">✅ Best Practices</h3>
<ul>
  <li>📝 Define clear, maintainable architectural rules</li>
  <li>🔄 Integrate architecture tests in your CI/CD workflow</li>
  <li>🛑 Fail builds when architectural violations are detected</li>
  <li>🤝 Collaborate with your team to update rules as architecture evolves</li>
  <li>📚 Continuously monitor and improve architectural compliance</li>
</ul>

<h3 style="color:#2563eb;">📚 Learn More</h3>
<ul>
  <li><a href="https://github.com/ArchUnitNET/ArchUnitNET" target="_blank" style="color:#3b82f6;">ArchUnitNET GitHub Repository</a></li>
  <li><a href="https://www.archunit.org/" target="_blank" style="color:#3b82f6;">ArchUnit (Java) Official Website</a></li>
</ul>
</div>` },
            {
              id: "netarchtest", title: "NetArchTest", type: "optional",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#f9fafb; padding:2rem; border-radius:1rem; border:2px solid #4b5563; box-shadow:0 6px 20px rgba(75,85,99,0.2)">
<h2 style="color:#374151;">🏗️ NetArchTest</h2>
<p>
  <strong>NetArchTest</strong> is a lightweight and flexible architecture testing library for .NET that helps developers enforce architectural rules by analyzing assemblies through fluent API queries.
  It is designed to catch architectural violations early by integrating with your unit test suite.
</p>

<h3 style="color:#1f2937;">💡 Why Use NetArchTest?</h3>
<ul>
  <li>🔎 Easily define and check architectural constraints</li>
  <li>⚙️ Seamlessly integrates with existing test frameworks (xUnit, NUnit, MSTest)</li>
  <li>📐 Enforces clean layering and dependency rules</li>
  <li>🚦 Helps maintain modular and maintainable codebases</li>
</ul>

<h3 style="color:#1f2937;">🔧 Core Features</h3>
<ul>
  <li>✅ Fluent API for assembly and type queries</li>
  <li>📦 Checks namespaces, class names, dependencies, and attributes</li>
  <li>🛠️ Supports custom rules and predicate definitions</li>
  <li>🔍 Provides clear failure messages for rule violations</li>
  <li>📈 Integrates into CI/CD pipelines for continuous enforcement</li>
</ul>

<h3 style="color:#374151;">💻 Example: Prevent Service Layer From Accessing Controllers</h3>
<pre style="background:#f3f4f6; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using NetArchTest.Rules;
using Xunit;

public class ArchitectureTests
{
[Fact]
public void ServicesShouldNotDependOnControllers()
{
    var result = Types.InAssembly(typeof(Program).Assembly)
        .That()
        .ResideInNamespace("MyApp.Services")
        .ShouldNot()
        .HaveDependencyOn("MyApp.Controllers")
        .GetResult();

    Assert.True(result.IsSuccessful, "Services should not depend on Controllers.");
}
}
</pre>

<h3 style="color:#1f2937;">✅ Best Practices</h3>
<ul>
  <li>📝 Keep architecture rules explicit and easy to understand</li>
  <li>🔄 Run tests regularly to catch regressions early</li>
  <li>⚠️ Use meaningful failure messages to facilitate debugging</li>
  <li>📊 Integrate with CI/CD to enforce architecture continuously</li>
  <li>🤝 Collaborate with team members to evolve rules as the project grows</li>
</ul>

<h3 style="color:#374151;">📚 Learn More</h3>
<ul>
  <li><a href="https://github.com/BenMorris/NetArchTest" target="_blank" style="color:#4b5563;">NetArchTest GitHub Repository</a></li>
  <li><a href="https://github.com/BenMorris/NetArchTest/wiki" target="_blank" style="color:#4b5563;">NetArchTest Wiki & Documentation</a></li>
</ul>
</div>`
            },
          ]
        },
      ]
    },
    {
      id: "design-patterns",
      title: "Design Patterns",
      direction: "left",
      description: `<div style="font-family:sans-serif; line-height:1.6; background:#fdf4ff; padding:1.5rem; border-radius:1rem; border:1px solid #e879f9; box-shadow:0 4px 12px rgba(232, 121, 249, 0.15)">
  <h2 style="color:#c026d3">🎨 Design Patterns – Proven Solutions to Common Problems</h2>

  <p><strong>Design Patterns</strong> are time-tested, reusable solutions to common problems that arise in software design. They improve code readability, flexibility, and maintainability by offering best practices for structuring relationships between classes and objects.</p>

  <h3 style="color:#d946ef">🔧 Pattern Categories</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li><strong>Creational Patterns:</strong> Handle object creation mechanisms to increase flexibility and reuse (e.g., Singleton, Factory Method, Builder).</li>
    <li><strong>Structural Patterns:</strong> Deal with object composition and structure to simplify complex relationships (e.g., Adapter, Composite, Facade).</li>
    <li><strong>Behavioral Patterns:</strong> Focus on communication between objects and responsibilities (e.g., Strategy, Observer, Command).</li>
  </ul>

  <h3 style="color:#c026d3">📦 Why Learn Design Patterns?</h3>
  <ul>
    <li>📚 Improve architectural thinking and design flexibility</li>
    <li>🤝 Communicate more effectively with other developers (shared vocabulary)</li>
    <li>🧱 Encourage code reuse and prevent reinventing the wheel</li>
    <li>💡 Discover better solutions through well-established patterns</li>
  </ul>

  <h3 style="color:#d946ef">📚 Resources</h3>
  <ul>
    <li><a href="https://refactoring.guru/design-patterns" target="_blank" style="color:#c026d3">Refactoring.Guru – Design Patterns</a></li>
    <li><a href="https://dotnet.microsoft.com/en-us/learn/dotnet/architecture-guides" target="_blank" style="color:#c026d3">Microsoft .NET Architecture Guides</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Design_Patterns" target="_blank" style="color:#c026d3">GoF Patterns (Gang of Four)</a></li>
  </ul>
</div>
`,
      children: [
        {
          id: "creational", title: "Creational", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:2rem; border-radius:1rem; border:2px solid #22c55e; box-shadow:0 6px 20px rgba(34,197,94,0.2)">
  <h2 style="color:#16a34a;">🏗️ Creational Design Patterns</h2>
  <p>
    <strong>Creational Design Patterns</strong> control object creation mechanisms, increasing flexibility and reuse of existing code. They abstract the instantiation logic and help decouple client code from the concrete implementation.
  </p>

  <h3 style="color:#15803d;">💡 Why Use Creational Patterns?</h3>
  <ul>
    <li>🎛️ Decouples code from specific classes</li>
    <li>🚀 Simplifies object creation and management</li>
    <li>✅ Enables scalable and maintainable designs</li>
    <li>🔄 Supports object pooling, lazy loading, and resource management</li>
  </ul>

  <h3 style="color:#166534;">🔧 Creational Design Patterns List</h3>
  <ul>
    <li><strong>Singleton</strong> – ensures a class has only one instance and provides a global access point to it.</li>
    <li><strong>Factory Method</strong> – defines an interface for creating an object but lets subclasses decide which class to instantiate.</li>
    <li><strong>Abstract Factory</strong> – provides an interface for creating families of related or dependent objects without specifying their concrete classes.</li>
    <li><strong>Builder</strong> – separates the construction of a complex object from its representation, allowing the same construction process to create different representations.</li>
    <li><strong>Prototype</strong> – creates new objects by copying an existing object, known as the prototype.</li>
  </ul>

  <h3 style="color:#15803d;">💻 Quick Examples (C#)</h3>
  <pre style="background:#dcfce7; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// Singleton
public sealed class Logger
{
    private static readonly Logger _instance = new Logger();
    private Logger() {}
    public static Logger Instance => _instance;
}

// Factory Method
public abstract class Dialog
{
    public abstract Button CreateButton();
}

// Abstract Factory
public interface IGUIFactory
{
    Button CreateButton();
    Checkbox CreateCheckbox();
}

// Builder
public class CarBuilder
{
    public void BuildEngine() { /* ... */ }
    public void BuildWheels() { /* ... */ }
}

// Prototype
public abstract class Shape
{
    public abstract Shape Clone();
}
  </pre>

  <h3 style="color:#14532d;">✅ Best Practices</h3>
  <ul>
    <li>🔒 Ensure Singleton implementations are thread-safe (use <code>Lazy&lt;T&gt;</code> in .NET)</li>
    <li>🏷️ Use Factory Method when class instantiation logic is complex or needs to vary dynamically</li>
    <li>📦 Choose Abstract Factory to manage groups of related objects consistently</li>
    <li>🧱 Apply Builder when constructing large or complex objects step-by-step</li>
    <li>📄 Use Prototype when object creation is costly, and cloning is more efficient</li>
    <li>⚙️ Combine patterns for advanced scenarios (e.g., Factory + Singleton)</li>
    <li>🚫 Avoid overusing Singleton to prevent tight coupling and hidden dependencies</li>
  </ul>

  <h3 style="color:#15803d;">📚 Learn More</h3>
  <ul>
    <li><a href="https://refactoring.guru/design-patterns/creational-patterns" target="_blank" style="color:#22c55e;">Refactoring Guru: Creational Patterns</a></li>
    <li><a href="https://www.dofactory.com/net/creational-design-patterns" target="_blank" style="color:#22c55e;">DoFactory: Creational Patterns in .NET</a></li>
  </ul>
</div>
` },
        {
          id: "structural", title: "Structural", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#ecfeff; padding:2rem; border-radius:1rem; border:2px solid #06b6d4; box-shadow:0 6px 20px rgba(6,182,212,0.2)">
  <h2 style="color:#0891b2;">🏛️ Structural Design Patterns</h2>
  <p>
    <strong>Structural Design Patterns</strong> focus on how classes and objects are composed to form larger structures while keeping these structures flexible and efficient. They help ensure that system components work together in a maintainable and scalable way.
  </p>

  <h3 style="color:#0e7490;">💡 Why Use Structural Patterns?</h3>
  <ul>
    <li>🧩 Organizes code for better readability and maintainability</li>
    <li>🔗 Simplifies relationships between entities</li>
    <li>🔄 Provides flexible and reusable object structures</li>
    <li>✅ Promotes separation of concerns and abstraction</li>
  </ul>

  <h3 style="color:#0e7490;">🔧 Structural Design Patterns List</h3>
  <ul>
    <li><strong>Adapter</strong> – allows incompatible interfaces to work together</li>
    <li><strong>Bridge</strong> – separates an object’s abstraction from its implementation</li>
    <li><strong>Composite</strong> – composes objects into tree-like structures</li>
    <li><strong>Decorator</strong> – adds responsibilities to objects dynamically</li>
    <li><strong>Facade</strong> – provides a simplified interface to a complex system</li>
    <li><strong>Flyweight</strong> – reduces memory usage by sharing common data</li>
    <li><strong>Proxy</strong> – provides a surrogate or placeholder for another object</li>
  </ul>

  <h3 style="color:#0891b2;">💻 Quick Examples (C#)</h3>
  <pre style="background:#cffafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// Adapter
public interface ITarget { void Request(); }
public class Adaptee { public void SpecificRequest() {} }
public class Adapter : ITarget
{
    private readonly Adaptee _adaptee = new Adaptee();
    public void Request() => _adaptee.SpecificRequest();
}

// Decorator
public interface INotifier { void Send(string message); }
public class EmailNotifier : INotifier
{
    public void Send(string message) { /* send email */ }
}
public class SmsDecorator : INotifier
{
    private readonly INotifier _notifier;
    public SmsDecorator(INotifier notifier) { _notifier = notifier; }
    public void Send(string message)
    {
        _notifier.Send(message);
        // also send SMS
    }
}
  </pre>

  <h3 style="color:#0f766e;">✅ Best Practices</h3>
  <ul>
    <li>🔄 Use <strong>Adapter</strong> to integrate with legacy or third-party code</li>
    <li>🧩 Prefer <strong>Composite</strong> for hierarchical structures (e.g., UI components, file systems)</li>
    <li>🎨 Apply <strong>Decorator</strong> for dynamic behavior extension without altering original code</li>
    <li>🗝️ Use <strong>Facade</strong> to simplify complex APIs for client code</li>
    <li>♻️ Choose <strong>Flyweight</strong> for large numbers of similar objects (e.g., game sprites, icons)</li>
    <li>🛡️ Apply <strong>Proxy</strong> for access control, lazy loading, or logging purposes</li>
    <li>🌉 Use <strong>Bridge</strong> when you need to decouple abstractions from implementations</li>
  </ul>

  <h3 style="color:#0e7490;">📚 Learn More</h3>
  <ul>
    <li><a href="https://refactoring.guru/design-patterns/structural-patterns" target="_blank" style="color:#06b6d4;">Refactoring Guru: Structural Patterns</a></li>
    <li><a href="https://www.dofactory.com/net/structural-design-patterns" target="_blank" style="color:#06b6d4;">DoFactory: Structural Patterns in .NET</a></li>
  </ul>
</div>
`},
        {
          id: "behavioral", title: "Behavioral", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#fef9c3; padding:2rem; border-radius:1rem; border:2px solid #eab308; box-shadow:0 6px 20px rgba(234,179,8,0.2)">
  <h2 style="color:#ca8a04;">🧠 Behavioral Design Patterns</h2>
  <p>
    <strong>Behavioral Design Patterns</strong> are concerned with how objects interact and communicate with each other. They define the responsibilities between objects and help control the flow of a program.
  </p>

  <h3 style="color:#a16207;">💡 Why Use Behavioral Patterns?</h3>
  <ul>
    <li>🤝 Improves object communication without tight coupling</li>
    <li>🔄 Manages complex control flows and responsibilities</li>
    <li>🔍 Simplifies complex decision logic</li>
    <li>📏 Promotes clean, testable, and maintainable code</li>
  </ul>

  <h3 style="color:#a16207;">🔧 Behavioral Design Patterns List</h3>
  <ul>
    <li><strong>Chain of Responsibility</strong> – passes requests along a chain of handlers</li>
    <li><strong>Command</strong> – encapsulates requests as objects</li>
    <li><strong>Interpreter</strong> – implements a language grammar</li>
    <li><strong>Iterator</strong> – sequentially access elements of a collection</li>
    <li><strong>Mediator</strong> – centralizes complex communications</li>
    <li><strong>Memento</strong> – captures and restores an object’s state</li>
    <li><strong>Observer</strong> – notifies multiple objects about state changes</li>
    <li><strong>State</strong> – allows an object to alter its behavior when its state changes</li>
    <li><strong>Strategy</strong> – enables selecting an algorithm at runtime</li>
    <li><strong>Template Method</strong> – defines the skeleton of an operation and lets subclasses fill in the details</li>
    <li><strong>Visitor</strong> – separates algorithms from the objects on which they operate</li>
  </ul>

  <h3 style="color:#ca8a04;">💻 Quick Examples (C#)</h3>
  <pre style="background:#fef08a; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// Observer
public interface IObserver { void Update(string message); }
public class User : IObserver
{
    public string Name { get; }
    public User(string name) { Name = name; }
    public void Update(string message) => Console.WriteLine($"{Name} received: {message}");
}

public class NotificationService
{
    private readonly List<IObserver> _observers = new();
    public void Subscribe(IObserver observer) => _observers.Add(observer);
    public void Notify(string message)
    {
        foreach (var observer in _observers) observer.Update(message);
    }
}

// Strategy
public interface IPaymentStrategy { void Pay(decimal amount); }
public class CreditCardPayment : IPaymentStrategy
{
    public void Pay(decimal amount) => Console.WriteLine($"Paid {amount} via Credit Card.");
}
public class PayPalPayment : IPaymentStrategy
{
    public void Pay(decimal amount) => Console.WriteLine($"Paid {amount} via PayPal.");
}
  </pre>

  <h3 style="color:#854d0e;">✅ Best Practices</h3>
  <ul>
    <li>🔄 Use <strong>Chain of Responsibility</strong> to decouple senders and receivers</li>
    <li>📦 Apply <strong>Command</strong> for task queues, undo/redo, and transactional operations</li>
    <li>🗺️ Prefer <strong>Mediator</strong> for centralizing and simplifying complex object communication</li>
    <li>📝 Use <strong>Observer</strong> for event-driven systems like UI or notifications</li>
    <li>🔧 Select <strong>Strategy</strong> for algorithms that need runtime flexibility</li>
    <li>🗂️ Use <strong>Template Method</strong> to enforce a process flow while letting subclasses customize steps</li>
    <li>💾 Implement <strong>Memento</strong> for undo history and state snapshots</li>
  </ul>

  <h3 style="color:#a16207;">📚 Learn More</h3>
  <ul>
    <li><a href="https://refactoring.guru/design-patterns/behavioral-patterns" target="_blank" style="color:#eab308;">Refactoring Guru: Behavioral Patterns</a></li>
  </ul>
</div>
` },
      ]
    },
    {
      id: "continuous-integration-delivery",
      title: "Continuous Integration & Delivery (Automation)",
      direction: "right",
      description:`<div style="font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:1.5rem; border-radius:1rem; border:1px solid #34d399; box-shadow:0 4px 12px rgba(52, 211, 153, 0.15)">
  <h2 style="color:#10b981">🚀 Continuous Integration & Delivery (Automation)</h2>

  <p><strong>CI/CD</strong> stands for <em>Continuous Integration</em> and <em>Continuous Delivery/Deployment</em>. It is a set of practices and tools that allow teams to deliver code changes more frequently and reliably through automation pipelines. CI/CD is fundamental to DevOps and modern software engineering.</p>

  <h3 style="color:#34d399">⚙️ Key Concepts</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li><strong>Continuous Integration (CI):</strong> Developers frequently merge code into a shared repository, triggering automated builds and tests.</li>
    <li><strong>Continuous Delivery (CD):</strong> Automatically prepares and verifies new code for release to staging or production environments.</li>
    <li><strong>Continuous Deployment:</strong> An extension of CD where code changes are automatically pushed to production once verified.</li>
  </ul>

  <h3 style="color:#10b981">🔧 Benefits of CI/CD</h3>
  <ul>
    <li>✅ Fast feedback loop for developers</li>
    <li>✅ Early bug detection through automated testing</li>
    <li>✅ Reduced manual effort in build, test, and deployment</li>
    <li>✅ Enables smaller, safer, and more frequent releases</li>
  </ul>

  <h3 style="color:#34d399">🛠️ Popular CI/CD Tools</h3>
  <ul>
    <li><strong>GitHub Actions:</strong> Native CI/CD for GitHub repositories. Easy to set up workflows with YAML.</li>
    <li><strong>Azure Pipelines:</strong> Part of Azure DevOps. Supports complex, multi-stage pipelines and hybrid deployments.</li>
    <li><strong>GitLab CI/CD:</strong> Fully integrated with GitLab. Offers built-in runners and advanced pipeline configuration.</li>
    <li><strong>TeamCity:</strong> Powerful CI server by JetBrains. Offers parallel builds, custom runners, and great IDE integration.</li>
  </ul>

  <h3 style="color:#10b981">📚 Best Practices</h3>
  <ul>
    <li>🧪 Always run tests and static analysis in your CI pipeline</li>
    <li>🚧 Use feature flags for safe rollouts</li>
    <li>🔒 Secure your pipeline credentials (secrets management)</li>
    <li>📦 Use artifact versioning and deployment approvals</li>
    <li>📈 Monitor build durations and failure rates continuously</li>
  </ul>

  <h3 style="color:#34d399">📚 Learn More</h3>
  <ul>
    <li><a href="https://docs.github.com/en/actions" target="_blank" style="color:#10b981">GitHub Actions Docs</a></li>
    <li><a href="https://learn.microsoft.com/en-us/azure/devops/pipelines/" target="_blank" style="color:#10b981">Azure Pipelines Docs</a></li>
    <li><a href="https://docs.gitlab.com/ee/ci/" target="_blank" style="color:#10b981">GitLab CI/CD Docs</a></li>
    <li><a href="https://www.jetbrains.com/teamcity/documentation/" target="_blank" style="color:#10b981">TeamCity Documentation</a></li>
  </ul>
</div>
`,
      children: [
        {
          id: "github-actions", title: "GitHub Actions", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:2rem; border-radius:1rem; border:2px solid #22c55e; box-shadow:0 6px 20px rgba(34,197,94,0.2)">
  <h2 style="color:#16a34a;">🚀 Continuous Integration & Delivery with GitHub Actions</h2>
  <p>
    <strong>Continuous Integration (CI)</strong> is the practice of regularly merging code changes into a shared repository, followed by automated builds and tests.  
    <strong>Continuous Delivery (CD)</strong> extends this by automatically deploying the validated code to production or staging environments.
  </p>

  <h3 style="color:#15803d;">💡 Why Use CI/CD?</h3>
  <ul>
    <li>⚡ Automates build, test, and deployment pipelines</li>
    <li>✅ Detects integration issues early</li>
    <li>🚀 Enables faster, reliable, and repeatable releases</li>
    <li>📦 Reduces manual errors in deployment processes</li>
    <li>📈 Improves developer productivity and code quality</li>
  </ul>

  <h3 style="color:#15803d;">🔧 What is GitHub Actions?</h3>
  <p>
    <strong>GitHub Actions</strong> is an automation tool natively integrated with GitHub, allowing you to create workflows for building, testing, and deploying your code directly from your repository.
  </p>

  <h3 style="color:#16a34a;">💻 Example: CI Workflow for .NET App</h3>
  <pre style="background:#dcfce7; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
name: .NET CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Setup .NET
      uses: actions/setup-dotnet@v4
      with:
        dotnet-version: '8.0.x'

    - name: Restore dependencies
      run: dotnet restore

    - name: Build project
      run: dotnet build --no-restore --configuration Release

    - name: Run tests
      run: dotnet test --no-build --verbosity normal
  </pre>

  <h3 style="color:#15803d;">✅ Best Practices</h3>
  <ul>
    <li>📝 Keep workflows version-controlled and readable (use YAML cleanly)</li>
    <li>⚡ Use caching (e.g. NuGet packages) to speed up builds</li>
    <li>🔒 Store sensitive data like API keys in <strong>GitHub Secrets</strong></li>
    <li>🔍 Run unit and integration tests on every pull request</li>
    <li>🛑 Fail fast: stop workflows on critical failures early</li>
    <li>🚀 Use multi-environment deployments (staging ➝ production)</li>
    <li>📊 Monitor workflow run history and performance via GitHub Actions UI</li>
  </ul>

  <h3 style="color:#16a34a;">📚 Learn More</h3>
  <ul>
    <li><a href="https://docs.github.com/en/actions" target="_blank" style="color:#22c55e;">GitHub Actions Official Documentation</a></li>
    <li><a href="https://learn.microsoft.com/en-us/dotnet/devops/dotnet-actions" target="_blank" style="color:#22c55e;">.NET + GitHub Actions Guide</a></li>
  </ul>
</div>
` },
        {
          id: "azure-pipelines", title: "Azure Pipelines", type: "good-to-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#ecfdf5; padding:2rem; border-radius:1rem; border:2px solid #10b981; box-shadow:0 6px 20px rgba(16,185,129,0.2)">
  <h2 style="color:#059669;">⚙️ Continuous Integration & Delivery with Azure Pipelines</h2>
  <p>
    <strong>Azure Pipelines</strong> is a cloud-based CI/CD service provided by Azure DevOps that supports building, testing, and deploying code to any platform or cloud.
    It integrates with GitHub, Azure Repos, Bitbucket, and more.
  </p>

  <h3 style="color:#047857;">💡 Why Use Azure Pipelines?</h3>
  <ul>
    <li>🚀 Automates build, test, and deployment workflows</li>
    <li>🌐 Supports Windows, Linux, macOS, and container environments</li>
    <li>🤝 Integrates easily with Azure services and external tools</li>
    <li>📈 Enables scalable, consistent, and repeatable deployments</li>
    <li>🛡️ Offers enterprise-grade security, approvals, and gated releases</li>
  </ul>

  <h3 style="color:#047857;">🔧 Core Features</h3>
  <ul>
    <li>✅ YAML and Classic UI pipelines</li>
    <li>📦 Container and multi-stage pipelines</li>
    <li>🗄️ Azure Key Vault integration for secure secrets management</li>
    <li>📑 Deployment approvals, gates, and rollback support</li>
  </ul>

  <h3 style="color:#059669;">💻 Example: .NET Build Pipeline (YAML)</h3>
  <pre style="background:#d1fae5; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
trigger:
- main

pool:
  vmImage: 'windows-latest'

variables:
  buildConfiguration: 'Release'

steps:
- task: UseDotNet@2
  inputs:
    packageType: 'sdk'
    version: '8.0.x'

- script: dotnet restore
  displayName: 'Restore dependencies'

- script: dotnet build --configuration $(buildConfiguration)
  displayName: 'Build project'

- script: dotnet test --configuration $(buildConfiguration) --no-build --verbosity normal
  displayName: 'Run tests'
  </pre>

  <h3 style="color:#047857;">✅ Best Practices</h3>
  <ul>
    <li>📝 Use YAML pipelines for version-controlled, portable definitions</li>
    <li>⚡ Cache dependencies (e.g., NuGet packages) to improve build times</li>
    <li>🔒 Store secrets in <strong>Azure Key Vault</strong>, not in YAML files</li>
    <li>🛑 Implement quality gates and manual approval steps for production deployments</li>
    <li>📊 Monitor pipeline history and test coverage reports regularly</li>
    <li>🔍 Break long pipelines into reusable templates and stages</li>
  </ul>

  <h3 style="color:#059669;">📚 Learn More</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops" target="_blank" style="color:#10b981;">Azure Pipelines Documentation</a></li>
    <li><a href="https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema?view=azure-devops&tabs=example" target="_blank" style="color:#10b981;">YAML Schema Reference</a></li>
  </ul>
</div>
` },
        {
          id: "gitlab-ci-cd", title: "GitLab CI/CD", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#fefce8; padding:2rem; border-radius:1rem; border:2px solid #eab308; box-shadow:0 6px 20px rgba(234,179,8,0.2)">
  <h2 style="color:#ca8a04;">🔧 Continuous Integration & Delivery with GitLab CI/CD</h2>
  <p>
    <strong>GitLab CI/CD</strong> is a built-in automation system within GitLab for defining, running, and monitoring Continuous Integration and Continuous Deployment pipelines.
    It uses a <code>.gitlab-ci.yml</code> file stored in the project root to define pipeline stages, jobs, and triggers.
  </p>

  <h3 style="color:#a16207;">💡 Why Use GitLab CI/CD?</h3>
  <ul>
    <li>⚡ Fully integrated with GitLab — no extra setup needed</li>
    <li>🚀 Automates build, test, and deployment workflows</li>
    <li>🌍 Supports Docker, Kubernetes, cloud, and on-prem deployments</li>
    <li>🔒 Secure secrets management via GitLab variables</li>
    <li>📊 Visual pipeline monitoring with detailed job logs</li>
  </ul>

  <h3 style="color:#a16207;">🔧 Core Features</h3>
  <ul>
    <li>✅ YAML-based pipeline definitions via <code>.gitlab-ci.yml</code></li>
    <li>📦 Multi-stage pipelines (build, test, deploy)</li>
    <li>📊 Auto DevOps support for containerized apps</li>
    <li>🚦 Manual jobs, approvals, and environment-specific deployments</li>
  </ul>

  <h3 style="color:#ca8a04;">💻 Example: .NET Build & Test Pipeline</h3>
  <pre style="background:#fef9c3; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
stages:
  - build
  - test

variables:
  DOTNET_CLI_TELEMETRY_OPTOUT: "1"
  DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "true"

build:
  stage: build
  image: mcr.microsoft.com/dotnet/sdk:8.0
  script:
    - dotnet restore
    - dotnet build --configuration Release

test:
  stage: test
  image: mcr.microsoft.com/dotnet/sdk:8.0
  script:
    - dotnet test --no-build --verbosity normal
  </pre>

  <h3 style="color:#a16207;">✅ Best Practices</h3>
  <ul>
    <li>📝 Keep <strong>.gitlab-ci.yml</strong> clean, modular, and version-controlled</li>
    <li>🚀 Use stages to logically separate build, test, deploy workflows</li>
    <li>🔒 Store secrets and tokens as GitLab CI/CD variables</li>
    <li>⚡ Use Docker caching to speed up repetitive builds</li>
    <li>📊 Regularly monitor pipeline metrics and job run times</li>
    <li>🔍 Split long pipelines using <code>includes</code> or <code>trigger</code> jobs for large projects</li>
    <li>🛑 Implement manual approval steps for production deployments</li>
  </ul>

  <h3 style="color:#ca8a04;">📚 Learn More</h3>
  <ul>
    <li><a href="https://docs.gitlab.com/ee/ci/" target="_blank" style="color:#eab308;">GitLab CI/CD Documentation</a></li>
    <li><a href="https://docs.gitlab.com/ee/ci/yaml/" target="_blank" style="color:#eab308;">.gitlab-ci.yml Syntax Guide</a></li>
  </ul>
</div>
` },
        {
          id: "teamcity-ci-cd", title: "TeamCity CI/CD", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #0ea5e9; box-shadow:0 6px 20px rgba(14,165,233,0.2)">
  <h2 style="color:#0284c7;">🏗️ Continuous Integration & Delivery with TeamCity</h2>
  <p>
    <strong>TeamCity</strong> is a powerful, enterprise-grade CI/CD server developed by JetBrains. It supports building, testing, and deploying applications on a wide range of platforms, with deep integrations for popular tools and frameworks.
  </p>

  <h3 style="color:#0369a1;">💡 Why Use TeamCity?</h3>
  <ul>
    <li>🖥️ On-premise or cloud-based CI/CD server</li>
    <li>⚙️ Rich UI with advanced build configuration management</li>
    <li>🔄 Supports parallel builds, pipelines, and dependencies</li>
    <li>📊 Detailed build history, trends, and analytics dashboards</li>
    <li>🔐 Secure, enterprise-ready access control and token management</li>
  </ul>

  <h3 style="color:#0369a1;">🔧 Core Features</h3>
  <ul>
    <li>✅ Build chains (dependent builds)</li>
    <li>📦 Docker support and Kubernetes integration</li>
    <li>📑 Custom build steps with scripts, tools, or Docker</li>
    <li>🌐 Integration with GitHub, Azure DevOps, Bitbucket, GitLab, and more</li>
    <li>📊 Visual pipelines and build status monitoring</li>
  </ul>

  <h3 style="color:#0284c7;">💻 Example: Build Step (PowerShell)</h3>
  <pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
steps:
  - name: Restore
    type: PowerShell
    script: |
      dotnet restore

  - name: Build
    type: PowerShell
    script: |
      dotnet build --configuration Release

  - name: Test
    type: PowerShell
    script: |
      dotnet test --no-build --verbosity normal
  </pre>

  <h3 style="color:#0369a1;">✅ Best Practices</h3>
  <ul>
    <li>📝 Use <strong>build templates</strong> for reusable configurations</li>
    <li>📊 Regularly monitor build health and failure rates</li>
    <li>⚙️ Isolate build steps using Docker when possible</li>
    <li>🔒 Store secrets and API keys securely in TeamCity parameters</li>
    <li>🚀 Split large builds into parallel build steps to reduce total time</li>
    <li>🛡️ Set up <strong>build triggers</strong> on feature branches and merge requests</li>
    <li>📦 Use artifact dependencies between builds for optimized workflows</li>
  </ul>

  <h3 style="color:#0284c7;">📚 Learn More</h3>
  <ul>
    <li><a href="https://www.jetbrains.com/teamcity/documentation/" target="_blank" style="color:#0ea5e9;">TeamCity Official Documentation</a></li>
    <li><a href="https://www.jetbrains.com/teamcity/features/" target="_blank" style="color:#0ea5e9;">TeamCity Features Overview</a></li>
  </ul>
</div>
` },
      ]
    },
    {
      id: "monitoring-logging-tracing-alerting",
      title: "Monitoring/Logging/Tracing/Alerting",
      direction: "right",
      description: `<div style="font-family:sans-serif; line-height:1.6; background:#f9fafb; padding:2rem; border-radius:1rem; border:1px solid #d1d5db; box-shadow:0 4px 15px rgba(0,0,0,0.05)">
  <h2 style="color:#0ea5e9">📡 Monitoring / Logging / Tracing / Alerting</h2>
  <p>These four pillars form the foundation of <strong>observability</strong> in modern software systems. They help developers understand what’s happening inside their applications and respond quickly to issues.</p>

  <hr style="margin:1.5rem 0">

  <h3 style="color:#10b981">📊 Monitoring</h3>
  <p>Tracks real-time metrics like CPU, memory, requests/sec, and error rates to understand application and infrastructure health.</p>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>📈 Visualize trends with dashboards (Grafana, Datadog)</li>
    <li>🧠 Identify performance bottlenecks early</li>
    <li>⚙️ Tools: Prometheus, Grafana, Datadog</li>
  </ul>

  <h3 style="color:#ca8a04">📝 Logging</h3>
  <p>Captures structured information about application events to assist with debugging, auditing, and tracking system behavior.</p>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>🧩 Use structured formats (JSON logs)</li>
    <li>🔗 Correlate logs using request/trace IDs</li>
    <li>⚙️ Tools: Serilog, NLog, log4net, ELK Stack, Sentry.io</li>
  </ul>

  <h3 style="color:#3b82f6">🔍 Tracing</h3>
  <p>Follows a request’s path across microservices and components, identifying where time is spent and where failures happen.</p>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>🧭 Essential for debugging distributed systems</li>
    <li>🕵️ Links logs + metrics via spans and trace IDs</li>
    <li>⚙️ Tools: OpenTelemetry (OTel), Jaeger, Zipkin, Datadog, Sentry.io</li>
  </ul>

  <h3 style="color:#ef4444">🚨 Alerting</h3>
  <p>Sends notifications when thresholds or anomalies occur, enabling proactive response to production issues.</p>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li>🔔 Trigger alerts from metrics, logs, or traces</li>
    <li>📬 Send to Slack, email, pager, or webhook</li>
    <li>⚙️ Tools: Alertmanager, Zabbix, Datadog, Sentry.io</li>
  </ul>

  <hr style="margin:1.5rem 0">

  <h3 style="color:#0ea5e9">💡 Best Practices</h3>
  <ul>
    <li>✅ Use all 4 together for full observability</li>
    <li>📦 Centralize logs and traces for unified debugging</li>
    <li>📈 Create SLOs/SLIs to define and track expectations</li>
    <li>🔐 Secure access to sensitive logs and dashboards</li>
    <li>🔁 Continuously tune alerts to reduce noise</li>
  </ul>

  <h3 style="color:#0ea5e9">📚 Learn More</h3>
  <ul>
    <li><a href="https://opentelemetry.io/" target="_blank" style="color:#0ea5e9">OpenTelemetry (official site)</a></li>
    <li><a href="https://grafana.com/oss/prometheus/" target="_blank" style="color:#0ea5e9">Prometheus + Grafana</a></li>
    <li><a href="https://www.elastic.co/elastic-stack/" target="_blank" style="color:#0ea5e9">ELK Stack</a></li>
    <li><a href="https://sentry.io/" target="_blank" style="color:#0ea5e9">Sentry.io</a></li>
    <li><a href="https://www.datadoghq.com/" target="_blank" style="color:#0ea5e9">Datadog Monitoring</a></li>
  </ul>
</div>
`,
      children: [
        {
          id: "monitoring",
          title: "Monitoring",
          type: "must-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#eff6ff; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)">
<h2 style="color:#2563eb;">📊 Monitoring</h2>
<p>
  <strong>Monitoring</strong> is the continuous process of collecting, analyzing, and displaying data from software applications, infrastructure, and systems to ensure performance, availability, and reliability.
  It helps teams detect anomalies, track trends, and proactively respond to issues before they impact end users.
</p>

<h3 style="color:#1e40af;">💡 Why Monitoring Matters?</h3>
<ul>
  <li>🔍 Detect issues early to minimize downtime</li>
  <li>📈 Understand system behavior under different loads</li>
  <li>🚦 Optimize performance by identifying bottlenecks</li>
  <li>🛡️ Improve security by monitoring unusual activity</li>
  <li>📊 Provide transparency to stakeholders with dashboards and alerts</li>
</ul>

<h3 style="color:#1e40af;">🔧 Core Components</h3>
<ul>
  <li>📡 <strong>Metrics Collection:</strong> Gathering quantitative data like CPU usage, memory, request rates, and error counts.</li>
  <li>📜 <strong>Logs:</strong> Capturing detailed event records and contextual information.</li>
  <li>🔔 <strong>Alerts:</strong> Automated notifications triggered by threshold breaches or anomalies.</li>
  <li>📉 <strong>Dashboards:</strong> Visual representations of system health and trends.</li>
</ul>

<h3 style="color:#2563eb;">💻 Example: Basic Application Metrics Monitoring with Prometheus</h3>
<pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
# prometheus.yml snippet
global:
scrape_interval: 15s

scrape_configs:
- job_name: 'myapp'
static_configs:
  - targets: ['localhost:5000']
</pre>

<h3 style="color:#1e40af;">✅ Best Practices</h3>
<ul>
  <li>🧹 Keep metrics relevant and lightweight to avoid performance overhead</li>
  <li>⚡ Define clear alert thresholds to reduce noise</li>
  <li>🛠️ Combine metrics with logs and traces for full observability</li>
  <li>📊 Use dashboards tailored for different roles (dev, ops, business)</li>
  <li>🔄 Regularly review and refine monitoring setup as systems evolve</li>
</ul>

<h3 style="color:#2563eb;">📚 Learn More</h3>
<ul>
  <li><a href="https://prometheus.io/docs/introduction/overview/" target="_blank" style="color:#3b82f6;">Prometheus Monitoring Overview</a></li>
  <li><a href="https://www.datadoghq.com/monitoring/" target="_blank" style="color:#3b82f6;">Datadog Monitoring Platform</a></li>
  <li><a href="https://opentelemetry.io/docs/monitoring/" target="_blank" style="color:#3b82f6;">OpenTelemetry Monitoring Concepts</a></li>
</ul>
</div>`,
          children: [
            {
              id: "on-premises-monitoring",
              title: "On-Premises",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #0ea5e9; box-shadow:0 6px 20px rgba(14,165,233,0.2)">
<h2 style="color:#0284c7;">🏢 On-Premises Monitoring</h2>
<p>
  <strong>On-Premises Monitoring</strong> refers to the practice of monitoring servers, applications, and infrastructure that are hosted locally within an organization's own data centers rather than in the cloud.
  It involves deploying monitoring tools and agents inside the local network to collect real-time performance, availability, and health data.
</p>

<h3 style="color:#0369a1;">💡 Why On-Premises Monitoring?</h3>
<ul>
  <li>🔒 Greater control over data privacy and security</li>
  <li>⚙️ Customization and integration with internal tools and legacy systems</li>
  <li>🖥️ Useful for environments with limited or no cloud connectivity</li>
  <li>📊 Immediate access to hardware-level metrics and local network performance</li>
  <li>💰 Potentially lower long-term costs for large-scale infrastructures</li>
</ul>

<h3 style="color:#0369a1;">🔧 Common Tools & Techniques</h3>
<ul>
  <li>🖥️ <strong>Agent-based monitoring:</strong> Install agents on physical or virtual machines to collect CPU, memory, disk, and network metrics.</li>
  <li>📜 <strong>Log aggregation:</strong> Collect logs locally using tools like ELK Stack (Elasticsearch, Logstash, Kibana) or Graylog.</li>
  <li>📊 <strong>Dashboards & Alerts:</strong> Use tools such as Grafana or Zabbix to visualize metrics and trigger alerts.</li>
  <li>🔄 <strong>Periodic health checks:</strong> Run scripts or probes to verify service availability and response times.</li>
</ul>

<h3 style="color:#0284c7;">💻 Example: Simple On-Prem Prometheus Setup</h3>
<pre style="background:#d0ebff; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
global:
scrape_interval: 15s

scrape_configs:
- job_name: 'local_servers'
static_configs:
  - targets: ['192.168.1.100:9100', '192.168.1.101:9100']
</pre>

<h3 style="color:#0369a1;">✅ Best Practices</h3>
<ul>
  <li>🔐 Secure monitoring agents and endpoints with proper network segmentation and access controls</li>
  <li>🛠️ Regularly update monitoring tools to patch vulnerabilities</li>
  <li>⚡ Optimize data retention policies to balance storage and historical analysis needs</li>
  <li>📈 Combine on-prem monitoring with cloud monitoring if hybrid environments exist</li>
  <li>🧩 Ensure monitoring integrates well with incident management and alerting workflows</li>
</ul>

<h3 style="color:#0284c7;">📚 Learn More</h3>
<ul>
  <li><a href="https://www.zabbix.com/documentation/current/manual/quickstart/on-premises" target="_blank" style="color:#0ea5e9;">Zabbix On-Premises Monitoring Guide</a></li>
  <li><a href="https://prometheus.io/docs/prometheus/latest/getting_started/" target="_blank" style="color:#0ea5e9;">Prometheus Getting Started</a></li>
  <li><a href="https://grafana.com/docs/grafana/latest/getting-started/" target="_blank" style="color:#0ea5e9;">Grafana Dashboards & Visualization</a></li>
</ul>
</div>`,
              children: [
                {
                  id: "prometheus-grafana", title: "Prometheus/Grafana", type: "must-know",
                  description: `<div style="font-family:sans-serif; line-height:1.6; background:#e9f5ff; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)">
<h2 style="color:#2563eb;">📊 Monitoring with Prometheus & Grafana</h2>
<p>
  <strong>Prometheus</strong> is an open-source systems monitoring and alerting toolkit designed for reliability and scalability. It collects and stores metrics as time series data, pulling from configured targets at specified intervals.
  <strong>Grafana</strong> complements Prometheus by providing rich, interactive dashboards and visualization capabilities that help teams understand metrics through graphs, charts, and alerts.
</p>

<h3 style="color:#1e40af;">💡 Why Use Prometheus & Grafana?</h3>
<ul>
  <li>⚡ Powerful multi-dimensional data model and flexible query language (PromQL)</li>
  <li>📈 Highly customizable and visually appealing dashboards via Grafana</li>
  <li>🔔 Built-in alerting with Prometheus Alertmanager integration</li>
  <li>🛠️ Extensive ecosystem of exporters and integrations for infrastructure, apps, and services</li>
  <li>🌐 Strong community support and cloud-native design</li>
</ul>

<h3 style="color:#1e40af;">🔧 Core Components</h3>
<ul>
  <li>📥 <strong>Prometheus Server:</strong> Scrapes metrics from instrumented jobs and stores them.</li>
  <li>📤 <strong>Exporters:</strong> Collect metrics from third-party systems like node_exporter, blackbox_exporter, and more.</li>
  <li>📊 <strong>Grafana:</strong> Visualizes the collected data with dashboards and graphs.</li>
  <li>🔔 <strong>Alertmanager:</strong> Manages alerts sent by Prometheus, supporting routing, silencing, and notifications.</li>
</ul>

<h3 style="color:#2563eb;">💻 Example: Basic Prometheus Configuration</h3>
<pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
global:
scrape_interval: 15s
evaluation_interval: 15s

scrape_configs:
- job_name: 'node_exporter'
static_configs:
  - targets: ['localhost:9100']
</pre>

<h3 style="color:#1e40af;">✅ Best Practices</h3>
<ul>
  <li>🔐 Secure Prometheus and Grafana with authentication and network policies</li>
  <li>📊 Design meaningful dashboards tailored to different teams and roles</li>
  <li>⚡ Use PromQL efficiently to avoid overloading the Prometheus server</li>
  <li>🔔 Set up alert rules to proactively detect issues and integrate with incident management</li>
  <li>🛠️ Leverage exporters to monitor all critical components in your infrastructure</li>
  <li>📈 Regularly review and optimize scrape intervals and data retention for performance</li>
</ul>

<h3 style="color:#2563eb;">📚 Learn More</h3>
<ul>
  <li><a href="https://prometheus.io/docs/introduction/overview/" target="_blank" style="color:#3b82f6;">Prometheus Official Documentation</a></li>
  <li><a href="https://grafana.com/docs/grafana/latest/" target="_blank" style="color:#3b82f6;">Grafana Documentation</a></li>
  <li><a href="https://prometheus.io/docs/prometheus/latest/configuration/configuration/" target="_blank" style="color:#3b82f6;">Prometheus Configuration Guide</a></li>
</ul>
</div>`
                },
              ]
            },
            {
              id: "cloud-monitoring",
              title: "Cloud",
              "description": `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:2rem; border-radius:1rem; border:2px solid #22c55e; box-shadow:0 6px 20px rgba(34,197,94,0.2)">
<h2 style="color:#15803d;">☁️ Cloud Monitoring</h2>
<p>
  <strong>Cloud Monitoring</strong> involves tracking, analyzing, and managing the health, performance, and reliability of applications and infrastructure running in the cloud. Modern cloud providers offer built-in monitoring tools with powerful visualization, alerting, and observability features.
</p>

<h3 style="color:#166534;">🌐 Key Cloud Monitoring Providers</h3>
<ul>
  <li><strong>Azure Monitor</strong>: Native monitoring for Azure resources with integration to Log Analytics and Application Insights.</li>
  <li><strong>AWS CloudWatch</strong>: Collects logs, metrics, and events across AWS services with dashboards and alarms.</li>
  <li><strong>Google Cloud Operations Suite</strong> (formerly Stackdriver): Monitoring, logging, tracing, and profiling in GCP.</li>
  <li><strong>Datadog / New Relic / Dynatrace</strong>: Cloud-agnostic third-party monitoring platforms with deep observability capabilities.</li>
</ul>

<h3 style="color:#166534;">⚙️ Typical Features</h3>
<ul>
  <li>📈 Real-time metrics collection and dashboarding</li>
  <li>📊 Logs aggregation and search</li>
  <li>🔔 Alerting and auto-remediation workflows</li>
  <li>🌐 Distributed tracing and dependency mapping</li>
  <li>📉 SLA, SLO, and error budget monitoring</li>
</ul>

<h3 style="color:#15803d;">💻 Example: AWS CloudWatch Alarm</h3>
<pre style="background:#dcfce7; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
{
  "AlarmName": "HighCPUAlarm",
  "MetricName": "CPUUtilization",
  "Namespace": "AWS/EC2",
  "Statistic": "Average",
  "Period": 300,
  "EvaluationPeriods": 2,
  "Threshold": 80,
  "ComparisonOperator": "GreaterThanThreshold",
  "Dimensions": 
    [
      {
        "Name": "InstanceId",
        "Value": "i-0123456789abcdef0"
      }
    ]
}
</pre>

<h3 style="color:#166534;">✅ Best Practices</h3>
<ul>
  <li>🔍 Monitor critical KPIs like latency, error rate, and throughput (the RED method)</li>
  <li>🧩 Use tagging and naming conventions to organize resources and metrics</li>
  <li>📤 Send metrics to centralized observability platforms for cross-service visibility</li>
  <li>🛡️ Set up automated alerts and incident escalation policies</li>
  <li>📊 Implement dashboards for real-time and historical trend analysis</li>
</ul>

<h3 style="color:#15803d;">📚 Learn More</h3>
<ul>
  <li><a href="https://learn.microsoft.com/en-us/azure/azure-monitor/overview" target="_blank" style="color:#22c55e;">Azure Monitor Overview</a></li>
  <li><a href="https://docs.aws.amazon.com/cloudwatch/" target="_blank" style="color:#22c55e;">AWS CloudWatch Docs</a></li>
  <li><a href="https://cloud.google.com/products/operations" target="_blank" style="color:#22c55e;">Google Cloud Operations Suite</a></li>
</ul>
</div>`,
              children: [
                {
                  id: "datadog-mon", title: "Datadog", type: "must-know",
                  description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #0ea5e9; box-shadow:0 6px 20px rgba(14,165,233,0.2)">
<h2 style="color:#0284c7;">📊 Datadog: Cloud Monitoring & Observability Platform</h2>
<p>
  <strong>Datadog</strong> is a cloud-native observability platform that provides monitoring, security, and analytics for infrastructure, applications, logs, and user experience. It is widely used by DevOps, SREs, and developers to ensure reliability, performance, and uptime across distributed systems.
</p>

<h3 style="color:#0369a1;">🧩 Core Features</h3>
<ul>
  <li>📈 Infrastructure & application performance monitoring (APM)</li>
  <li>📄 Log management and full-text search</li>
  <li>🌐 Distributed tracing and service maps</li>
  <li>🔔 Alerting with anomaly detection and threshold rules</li>
  <li>🛡️ Security monitoring & compliance dashboards</li>
  <li>📊 Custom dashboards with real-time metrics</li>
</ul>

<h3 style="color:#0369a1;">🔌 Integrations</h3>
<p>
  Datadog supports 600+ out-of-the-box integrations including:
  <strong>AWS, Azure, GCP, Docker, Kubernetes, PostgreSQL, Redis, Kafka, .NET, ASP.NET Core, IIS, and more.</strong>
</p>

<h3 style="color:#0284c7;">💻 Example: ASP.NET Core APM Setup</h3>
<pre style="background:#e0f2fe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// Install Datadog .NET Tracer
dotnet add package Datadog.Trace

// In Program.cs
public class Program
{
  public static void Main(string[] args)
  {
      Datadog.Trace.ClrProfiler.Instrumentation.Initialize();
      CreateHostBuilder(args).Build().Run();
  }
}
</pre>

<h3 style="color:#0369a1;">✅ Best Practices</h3>
<ul>
  <li>🧭 Use unified dashboards to correlate metrics, logs, and traces</li>
  <li>🔒 Use role-based access control (RBAC) for secure visibility</li>
  <li>📈 Define custom service-level indicators (SLIs) and error budgets</li>
  <li>🚨 Set anomaly detection for early warnings on outliers</li>
  <li>📦 Tag everything: services, environments, teams for scoped filtering</li>
</ul>

<h3 style="color:#0284c7;">📚 Learn More</h3>
<ul>
  <li><a href="https://docs.datadoghq.com/" target="_blank" style="color:#0ea5e9;">Datadog Documentation</a></li>
  <li><a href="https://docs.datadoghq.com/tracing/setup_overview/" target="_blank" style="color:#0ea5e9;">Datadog APM Setup</a></li>
  <li><a href="https://docs.datadoghq.com/logs/log_collection/" target="_blank" style="color:#0ea5e9;">Log Collection Guide</a></li>
</ul>
</div>`
                },
              ]
            },
          ]
        },
        {
          id: "logging",
          title: "Logging",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#fef9c3; padding:2rem; border-radius:1rem; border:2px solid #eab308; box-shadow:0 6px 20px rgba(234,179,8,0.2)">
<h2 style="color:#ca8a04;">📝 Logging in .NET Applications</h2>
<p>
  <strong>Logging</strong> is a fundamental aspect of observability, allowing developers and operations teams to understand application behavior, diagnose issues, and audit activities. In the .NET ecosystem, structured logging is encouraged for better filtering, querying, and correlation across distributed systems.
</p>

<h3 style="color:#a16207;">🔧 Core Concepts</h3>
<ul>
  <li>📄 Structured logs (e.g., JSON) enable efficient searching and filtering</li>
  <li>🧵 Logs can include scopes, correlation IDs, and contextual metadata</li>
  <li>📁 Log providers can target files, console, remote servers, or observability platforms</li>
  <li>🕵️ Centralized logging helps correlate across microservices</li>
</ul>

<h3 style="color:#a16207;">🔌 Common Logging Providers</h3>
<ul>
  <li><strong>Microsoft.Extensions.Logging</strong> – Default abstraction in .NET Core</li>
  <li><strong>Serilog</strong> – Rich structured logging with sinks like Seq, Elasticsearch, Console</li>
  <li><strong>NLog</strong> – Configurable with flexible targets and rules</li>
  <li><strong>Log4Net</strong> – Mature legacy logger for .NET Framework</li>
</ul>

<h3 style="color:#ca8a04;">💻 Example: Serilog Setup</h3>
<pre style="background:#fefce8; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// Install Serilog packages
dotnet add package Serilog.AspNetCore
dotnet add package Serilog.Sinks.Console

// In Program.cs
Log.Logger = new LoggerConfiguration()
  .WriteTo.Console()
  .Enrich.FromLogContext()
  .CreateLogger();

var builder = WebApplication.CreateBuilder(args);
builder.Host.UseSerilog();

var app = builder.Build();
app.MapGet("/", () => {
  Log.Information("Homepage visited");
  return "Hello, World!";
});
app.Run();
</pre>

<h3 style="color:#a16207;">✅ Best Practices</h3>
<ul>
  <li>🔍 Use structured logging with key-value pairs</li>
  <li>📛 Never log sensitive data (passwords, tokens)</li>
  <li>🛠️ Configure log levels appropriately (Information, Warning, Error, Debug)</li>
  <li>📦 Use correlation IDs for tracing logs across services</li>
  <li>📊 Forward logs to centralized platforms (e.g., Seq, ELK, Datadog, Azure Monitor)</li>
</ul>

<h3 style="color:#ca8a04;">📚 Learn More</h3>
<ul>
  <li><a href="https://learn.microsoft.com/en-us/aspnet/core/fundamentals/logging/" target="_blank" style="color:#eab308;">Microsoft Logging Docs</a></li>
  <li><a href="https://serilog.net/" target="_blank" style="color:#eab308;">Serilog Official Site</a></li>
  <li><a href="https://nlog-project.org/" target="_blank" style="color:#eab308;">NLog Documentation</a></li>
</ul>
</div>`,
          type: "must-know",
          children: [
            {
              id: "on-premises-logging",
              description: `<div style="font-family:sans-serif; line-height:1.6; background:#fef9c3; padding:2rem; border-radius:1rem; border:2px solid #eab308; box-shadow:0 6px 20px rgba(234,179,8,0.2)">
<h2 style="color:#ca8a04;">🏠 On-Premises Logging Solutions</h2>
<p>
  <strong>On-premises logging</strong> refers to the practice of collecting, storing, and analyzing log data within infrastructure that is fully managed in your own data center or private cloud — without relying on third-party cloud services.
</p>

<h3 style="color:#a16207;">💡 Why Choose On-Prem Logging?</h3>
<ul>
  <li>🔐 Full control over sensitive data (security, compliance)</li>
  <li>🧱 Tailored to local network and resource constraints</li>
  <li>🌐 Avoid vendor lock-in and cloud data egress costs</li>
  <li>⚙️ Can be customized for domain-specific requirements</li>
</ul>

<h3 style="color:#a16207;">🧰 Popular On-Prem Logging Tools</h3>
<ul>
  <li><strong>Elastic Stack (ELK)</strong>: Elasticsearch, Logstash, and Kibana for centralized log indexing and visualization</li>
  <li><strong>Graylog</strong>: A powerful log aggregator with alerting and analysis features</li>
  <li><strong>Fluentd</strong>: Lightweight log collector and forwarder that integrates with many storage systems</li>
  <li><strong>Seq</strong>: A structured log server with rich query support, ideal for .NET applications</li>
  <li><strong>Loki + Grafana</strong>: A scalable log aggregation system optimized for Kubernetes and cloud-native apps</li>
</ul>

<h3 style="color:#ca8a04;">📦 Example: Running ELK Stack Locally via Docker</h3>
<pre style="background:#fefce8; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
version: '3.7'
services:
elasticsearch:
  image: docker.elastic.co/elasticsearch/elasticsearch:8.13.4
  environment:
    - discovery.type=single-node
  ports:
    - "9200:9200"

logstash:
  image: docker.elastic.co/logstash/logstash:8.13.4
  ports:
    - "5044:5044"

kibana:
  image: docker.elastic.co/kibana/kibana:8.13.4
  ports:
    - "5601:5601"
</pre>

<h3 style="color:#a16207;">✅ Best Practices</h3>
<ul>
  <li>🧩 Structure logs using JSON for easier querying and parsing</li>
  <li>🔍 Include application, environment, and correlation metadata in logs</li>
  <li>🛡️ Secure log access and encrypt data at rest and in transit</li>
  <li>🧠 Define log retention policies to manage disk usage</li>
  <li>📊 Set up dashboards and alerts for anomaly detection</li>
  <li>⚙️ Use log shipping tools (e.g., Filebeat, Fluentd) for scalable ingestion</li>
</ul>

<h3 style="color:#ca8a04;">📚 Learn More</h3>
<ul>
  <li><a href="https://www.elastic.co/what-is/elk-stack" target="_blank" style="color:#eab308;">Elastic Stack Overview</a></li>
  <li><a href="https://docs.graylog.org/" target="_blank" style="color:#eab308;">Graylog Documentation</a></li>
  <li><a href="https://datalust.co/seq" target="_blank" style="color:#eab308;">Seq Structured Log Server</a></li>
</ul>
</div>`,
              title: "On-Premises",
              children: [
                {
                  id: "elk-stack", title: "ELK Stack", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#ecfccb; padding:2rem; border-radius:1rem; border:2px solid #65a30d; box-shadow:0 6px 20px rgba(132,204,22,0.2)">
<h2 style="color:#4d7c0f;">📦 ELK Stack (Elasticsearch, Logstash, Kibana)</h2>
<p>
  The <strong>ELK Stack</strong> is a powerful, open-source suite for centralized logging, real-time log analysis, and visualization. It is widely used in DevOps, SRE, and security operations to collect, index, and visualize log data from various systems and applications.
</p>

<h3 style="color:#4d7c0f;">📚 Components</h3>
<ul>
  <li><strong>Elasticsearch</strong> – A distributed search and analytics engine that stores and indexes logs.</li>
  <li><strong>Logstash</strong> – A data processing pipeline that ingests, transforms, and forwards logs.</li>
  <li><strong>Kibana</strong> – A visualization and dashboarding tool for querying and exploring log data.</li>
</ul>

<h3 style="color:#4d7c0f;">🛠️ Example Use Case</h3>
<p>Imagine you are running a microservices-based e-commerce platform. Each service logs data (e.g., orders, payments, errors). ELK can collect these logs, make them searchable, and display real-time metrics on a dashboard.</p>

<h3 style="color:#4d7c0f;">🚀 Quick Start (Docker Compose)</h3>
<pre style="background:#f7fee7; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
version: '3'
services:
elasticsearch:
  image: docker.elastic.co/elasticsearch/elasticsearch:8.13.4
  environment:
    - discovery.type=single-node
  ports:
    - "9200:9200"

logstash:
  image: docker.elastic.co/logstash/logstash:8.13.4
  ports:
    - "5044:5044"
  volumes:
    - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf

kibana:
  image: docker.elastic.co/kibana/kibana:8.13.4
  ports:
    - "5601:5601"
</pre>

<h3 style="color:#4d7c0f;">🔍 Sample Logstash Pipeline</h3>
<pre style="background:#f0fdf4; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
input {
  file {
    path => "/var/log/myapp.log"
    start_position => "beginning"
  }
}

filter {
  grok {
    match => { "message" => "%{TIMESTAMP_ISO8601:timestamp} %{LOGLEVEL:level} %{GREEDYDATA:msg}" }
  }
}

output {
  elasticsearch {
    hosts => ["http://elasticsearch:9200"]
    index => "myapp-logs"
  }
}
</pre>

<h3 style="color:#4d7c0f;">✅ Best Practices</h3>
<ul>
  <li>🧱 Structure logs (e.g., JSON) for better parsing</li>
  <li>🔒 Secure your stack with HTTPS and authentication</li>
  <li>🧹 Rotate and expire old indices to manage storage</li>
  <li>📊 Create dashboards to monitor error rates, response times, etc.</li>
  <li>📁 Use Filebeat or Fluentd for scalable log shipping</li>
</ul>

<h3 style="color:#4d7c0f;">📚 Resources</h3>
<ul>
  <li><a href="https://www.elastic.co/what-is/elk-stack" target="_blank" style="color:#65a30d;">Elastic Official ELK Guide</a></li>
  <li><a href="https://www.elastic.co/guide/en/logstash/current/index.html" target="_blank" style="color:#65a30d;">Logstash Documentation</a></li>
  <li><a href="https://www.elastic.co/kibana" target="_blank" style="color:#65a30d;">Kibana Dashboards</a></li>
</ul>
</div>` },
                {
                  id: "seq", title: "Seq", type: "good-to-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#fef3c7; padding:2rem; border-radius:1rem; border:2px solid #f59e0b; box-shadow:0 6px 20px rgba(249,115,22,0.15)">
<h2 style="color:#d97706;">📋 Structured Logging with Seq</h2>
<p>
  <strong>Seq</strong> is a structured log server that specializes in collecting, indexing, and querying application logs — particularly from .NET applications. It turns log events into searchable, structured data and offers a clean, developer-friendly UI.
</p>

<h3 style="color:#b45309;">✨ Key Benefits</h3>
<ul>
  <li>🔍 Advanced full-text and structured query capabilities</li>
  <li>📦 Easy integration with Serilog, NLog, and Microsoft.Extensions.Logging</li>
  <li>💬 Support for rich, semantic logs (not just text)</li>
  <li>📈 Real-time dashboards and alerting with custom signal rules</li>
  <li>🔐 Self-hosted or managed cloud options available</li>
</ul>

<h3 style="color:#b45309;">⚙️ How It Works</h3>
<p>Seq ingests log events (typically JSON-formatted) from applications and stores them in an internal event store. You can query logs using a SQL-like syntax and monitor systems in near-real-time.</p>

<h3 style="color:#b45309;">💻 Example: Serilog Integration</h3>
<pre style="background:#fef9c3; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
Log.Logger = new LoggerConfiguration()
  .MinimumLevel.Information()
  .WriteTo.Seq("http://localhost:5341")
  .Enrich.FromLogContext()
  .CreateLogger();

builder.Host.UseSerilog();
</pre>

<h3 style="color:#b45309;">📊 Example Log Output</h3>
<pre style="background:#fefce8; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
{
"Timestamp": "2025-06-16T17:30:00Z",
"Level": "Information",
"MessageTemplate": "User {UserId} placed order {OrderId}",
"Properties": {
  "UserId": 42,
  "OrderId": "ORD-98765"
}
}
</pre>

<h3 style="color:#d97706;">✅ Best Practices</h3>
<ul>
  <li>🧱 Use structured logging libraries like Serilog to get the most out of Seq</li>
  <li>🔐 Protect Seq with authentication and HTTPS in production</li>
  <li>🧹 Regularly archive or purge old logs to manage storage</li>
  <li>📢 Set up alerts for important patterns (e.g., errors, downtime, retries)</li>
  <li>🧩 Enrich logs with request IDs, user context, and environment info</li>
</ul>

<h3 style="color:#d97706;">📚 Learn More</h3>
<ul>
  <li><a href="https://datalust.co/seq" target="_blank" style="color:#f59e0b;">Seq Official Website</a></li>
  <li><a href="https://docs.datalust.co/docs" target="_blank" style="color:#f59e0b;">Seq Documentation</a></li>
  <li><a href="https://github.com/datalust/seq-tutorials" target="_blank" style="color:#f59e0b;">Seq Tutorials on GitHub</a></li>
</ul>
</div>` },
                {
                  id: "sentry", title: "Sentry.io", type: "optional",
                  description: `<div style="font-family:sans-serif; line-height:1.6; background:#fef2f2; padding:2rem; border-radius:1rem; border:2px solid #ef4444; box-shadow:0 6px 20px rgba(239,68,68,0.2)">
<h2 style="color:#b91c1c;">📝 Logging with Sentry.io</h2>
<p>
  <strong>Sentry.io</strong> is not just an error monitoring tool, but also a powerful logging platform that provides rich context and actionable insights for developers.
  It captures logs tied to application errors, performance issues, and user behavior across distributed systems.
</p>

<h3 style="color:#b91c1c;">🔍 What Makes Sentry Different?</h3>
<ul>
  <li>⚙️ Automatically correlates logs with exceptions and stack traces</li>
  <li>🧠 Uses breadcrumbs to show the sequence of log events before an error</li>
  <li>📊 Includes environment, user, release, and performance data</li>
  <li>📌 Integrates seamlessly with popular logging libraries like <code>Serilog</code>, <code>NLog</code>, and <code>Microsoft.Extensions.Logging</code></li>
  <li>🔔 Alerting based on log-level, tags, and error frequency</li>
</ul>

<h3 style="color:#b91c1c;">🛠️ Example: Logging with Serilog + Sentry in ASP.NET Core</h3>
<pre style="background:#fee2e2; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// Program.cs
Log.Logger = new LoggerConfiguration()
  .WriteTo.Sentry(o =>
  {
      o.Dsn = "https://example@sentry.io/0";
      o.MinimumBreadcrumbLevel = LogEventLevel.Debug;
      o.MinimumEventLevel = LogEventLevel.Error;
  })
  .CreateLogger();

builder.Host.UseSerilog();
</pre>

<h3 style="color:#b91c1c;">📘 Real-World Logging Use Case</h3>
<p>
  In a high-traffic web API, developers use Sentry to capture both handled and unhandled exceptions along with structured logs and HTTP context. When an error occurs in production, the team can quickly trace the problem using logs, breadcrumbs, and request metadata without needing to reproduce the issue locally.
</p>

<h3 style="color:#b91c1c;">✅ Best Practices</h3>
<ul>
  <li>🏷️ Use structured logging to attach metadata to each log event</li>
  <li>🔐 Mask or strip PII before sending logs</li>
  <li>📡 Filter noisy logs using log levels and tag filters</li>
  <li>🧵 Correlate logs with user sessions using Sentry's scope/context</li>
  <li>⚠️ Avoid sending verbose Debug logs to production</li>
</ul>

<h3 style="color:#b91c1c;">📚 Learn More</h3>
<ul>
  <li><a href="https://docs.sentry.io/platforms/dotnet/guides/aspnetcore/" target="_blank" style="color:#ef4444;">Sentry .NET Guide</a></li>
  <li><a href="https://docs.sentry.io/platforms/dotnet/enriching-events/logging/" target="_blank" style="color:#ef4444;">Logging Integration Docs</a></li>
</ul>
</div>` },
              ]
            },
            {
              id: "cloud-logging",
              title: "Cloud",
              description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🌩️ Cloud Logging</h2>
  <p><strong>Cloud logging</strong> centralizes application and system logs in a managed cloud platform. It enables real-time search, visualization, alerts, and compliance-ready audit capabilities.</p>

  <h3 style='color:#10b981'>☁️ Why Use Cloud Logging?</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Instant setup:</strong> start logging immediately with no infrastructure to manage.</li>
    <li><strong>Automatic scaling:</strong> handles growing log volumes across distributed systems.</li>
    <li><strong>Security & compliance:</strong> encrypted storage, audit trails, and regional data residency.</li>
    <li><strong>Cost-efficiency:</strong> no need for on-premise logging infrastructure.</li>
  </ul>

  <h3 style='color:#f59e0b'>⚙️ Core Features</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Real-time ingestion:</strong> fast and reliable log collection from various sources.</li>
    <li><strong>Log-based metrics:</strong> transform log data into KPIs and alert thresholds.</li>
    <li><strong>Alerting:</strong> set rules to detect issues based on log content.</li>
    <li><strong>Routing & retention:</strong> control where logs go and how long they are kept.</li>
    <li><strong>Audit logs:</strong> track access, configuration, and user activity for compliance.</li>
  </ul>

  <h3 style='color:#8b5cf6'>🚀 Use Cases</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Log ingestion from Kubernetes, VMs, or serverless apps</li>
    <li>Error tracking and real-time incident alerts</li>
    <li>Security auditing and compliance reporting</li>
    <li>Advanced analysis with tools like BigQuery or Datadog</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li><strong>Define clear retention policies:</strong> avoid unnecessary storage costs.</li>
    <li><strong>Structure logs:</strong> use JSON for easier parsing and querying.</li>
    <li><strong>Separate log levels:</strong> group info, warning, and error logs accordingly.</li>
    <li><strong>Visualize trends:</strong> integrate with dashboards and alert systems.</li>
    <li><strong>Tag logs:</strong> add environment, service, region tags for filtering.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://cloud.google.com/logging/docs' target='_blank' style='color:#3b82f6'>Google Cloud Logging Documentation</a></li>
    <li><a href='https://docs.aws.amazon.com/cloudwatch/index.html' target='_blank' style='color:#3b82f6'>AWS CloudWatch Logs</a></li>
    <li><a href='https://docs.microsoft.com/en-us/azure/azure-monitor/logs/log-query-overview' target='_blank' style='color:#3b82f6'>Azure Monitor Logs</a></li>
    <li><a href='https://www.datadoghq.com/product/log-management/' target='_blank' style='color:#3b82f6'>Datadog Log Management</a></li>
  </ul>
</div>
`,
              children: [
                {
                  id: "datadog-log", title: "Datadog", type: "must-know", description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>📊 Logging & Monitoring with Datadog</h2>
  <p><strong>Datadog</strong> is a cloud-based monitoring and analytics platform used for infrastructure, application performance, and log management. It provides real-time visibility into your entire tech stack.</p>

  <h3 style='color:#10b981'>☁️ Why Cloud Logging Matters</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Centralized Logs:</strong> All logs from distributed systems in one place.</li>
    <li><strong>Scalability:</strong> Automatically handles large-scale environments.</li>
    <li><strong>Real-Time Monitoring:</strong> Detect issues instantly with alerts and dashboards.</li>
    <li><strong>Troubleshooting:</strong> Easily trace and debug application issues.</li>
  </ul>

  <h3 style='color:#f59e0b'>🧰 Key Features of Datadog</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Log Management:</strong> Ingest, filter, and search logs easily.</li>
    <li><strong>Dashboards:</strong> Customizable visualizations of metrics & logs.</li>
    <li><strong>APM (Application Performance Monitoring):</strong> Track latency, throughput, and errors.</li>
    <li><strong>Integrations:</strong> Works with AWS, Azure, GCP, Kubernetes, and more.</li>
    <li><strong>Alerting:</strong> Set thresholds and get notified via email, Slack, PagerDuty.</li>
  </ul>

  <h3 style='color:#8b5cf6'>📈 Use Cases</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Monitoring microservices and cloud-native apps</li>
    <li>Analyzing user behavior or request patterns</li>
    <li>Proactive error detection before customers notice</li>
    <li>Audit and security logging for compliance</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li>Structure logs with JSON for better querying.</li>
    <li>Use tags for context (env, service, region, etc.).</li>
    <li>Set up retention policies to manage cost.</li>
    <li>Use correlation IDs to trace logs across services.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://www.datadoghq.com/' target='_blank' style='color:#3b82f6'>Official Datadog Website</a></li>
    <li><a href='https://docs.datadoghq.com/logs/' target='_blank' style='color:#3b82f6'>Datadog Logs Documentation</a></li>
    <li><a href='https://www.youtube.com/watch?v=2K4jN3Y3P9U' target='_blank' style='color:#3b82f6'>Intro to Datadog (YouTube)</a></li>
    <li><a href='https://www.udemy.com/course/datadog-complete-guide/' target='_blank' style='color:#3b82f6'>Udemy Course on Datadog</a></li>
  </ul>
</div>
` },
                {
                  id: "sentry-io-log", title: "Sentry.io", type: "optional", description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🐞 Error Tracking & Logging with Sentry</h2>
  <p><strong>Sentry.io</strong> is a powerful open-source error monitoring and performance tracking tool designed to help developers diagnose, fix, and optimize their code across every stack.</p>

  <h3 style='color:#10b981'>☁️ Why Use Sentry in the Cloud</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Real-Time Error Monitoring:</strong> Instantly catch bugs as they happen in production.</li>
    <li><strong>Stack Traces & Context:</strong> See the exact line of code that caused the error.</li>
    <li><strong>Issue Grouping:</strong> Automatically groups similar errors for better triaging.</li>
    <li><strong>Cloud Native:</strong> Hosted solution for effortless scaling and management.</li>
  </ul>

  <h3 style='color:#f59e0b'>🧰 Key Features of Sentry</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Error Tracking:</strong> Capture exceptions with rich metadata and stack traces.</li>
    <li><strong>Performance Monitoring:</strong> Measure slow transactions, page loads, API calls.</li>
    <li><strong>Session Replay:</strong> Watch how users interacted before an error occurred.</li>
    <li><strong>Alerts & Notifications:</strong> Custom rules via email, Slack, PagerDuty, etc.</li>
    <li><strong>Integrations:</strong> Works with React, Vue, Node.js, Python, iOS, Android, and more.</li>
  </ul>

  <h3 style='color:#8b5cf6'>🚀 Use Cases</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Identify and fix uncaught exceptions in frontend or backend.</li>
    <li>Monitor API latency and performance bottlenecks.</li>
    <li>Understand how crashes affect users with user impact tracking.</li>
    <li>Gain visibility into silent failures in production.</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li>Use source maps to get readable JavaScript stack traces.</li>
    <li>Filter noisy or non-actionable logs (e.g., 404s or timeouts).</li>
    <li>Tag errors with metadata like release version, user ID, etc.</li>
    <li>Regularly triage and resolve issues to maintain code health.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://sentry.io/' target='_blank' style='color:#3b82f6'>Official Sentry Website</a></li>
    <li><a href='https://docs.sentry.io/' target='_blank' style='color:#3b82f6'>Sentry Documentation</a></li>
    <li><a href='https://www.youtube.com/watch?v=pemPp_YJgkE' target='_blank' style='color:#3b82f6'>Sentry Overview (YouTube)</a></li>
    <li><a href='https://www.udemy.com/course/error-tracking-with-sentry/' target='_blank' style='color:#3b82f6'>Udemy: Error Tracking with Sentry</a></li>
  </ul>
</div>
` },
              ]
            },
          ]
        },
        {
          id: "tracing",
          title: "Tracing",
          type: "must-know",
          description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🔍 Distributed Tracing</h2>
  <p><strong>Tracing</strong> is the process of tracking the flow of a request or transaction across multiple services in a distributed system. It helps developers and DevOps teams understand where bottlenecks or failures occur in microservices architectures.</p>

  <h3 style='color:#10b981'>🌐 Why Tracing Matters</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>End-to-End Visibility:</strong> See the full path a request takes across services.</li>
    <li><strong>Performance Monitoring:</strong> Identify slow components or dependencies.</li>
    <li><strong>Error Isolation:</strong> Pinpoint where and why failures happen.</li>
    <li><strong>Better Debugging:</strong> Understand complex service interactions in production.</li>
  </ul>

  <h3 style='color:#f59e0b'>🛠️ Key Concepts</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Trace:</strong> A complete journey of a request through the system.</li>
    <li><strong>Span:</strong> A single unit of work (e.g., a function call, API request).</li>
    <li><strong>Trace ID:</strong> Unique identifier for a trace, shared across spans.</li>
    <li><strong>Context Propagation:</strong> Passing trace metadata between services.</li>
  </ul>

  <h3 style='color:#8b5cf6'>⚙️ Tools for Tracing</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li><strong>OpenTelemetry:</strong> Open standard for tracing and telemetry.</li>
    <li><strong>Jaeger:</strong> CNCF project for visualizing traces.</li>
    <li><strong>Zipkin:</strong> Lightweight tracing system with a simple UI.</li>
    <li><strong>Datadog APM:</strong> Full tracing with dashboards and alerting.</li>
    <li><strong>Sentry Tracing:</strong> Integrates tracing with error monitoring.</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li>Instrument key functions and endpoints manually or via libraries.</li>
    <li>Include custom tags (e.g., user ID, endpoint) for better filtering.</li>
    <li>Minimize span overhead to avoid latency.</li>
    <li>Visualize traces regularly to catch performance regressions early.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://opentelemetry.io/docs/' target='_blank' style='color:#3b82f6'>OpenTelemetry Docs</a></li>
    <li><a href='https://www.jaegertracing.io/docs/' target='_blank' style='color:#3b82f6'>Jaeger Documentation</a></li>
    <li><a href='https://zipkin.io/' target='_blank' style='color:#3b82f6'>Zipkin Official Site</a></li>
    <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/traceparent' target='_blank' style='color:#3b82f6'>W3C Trace Context</a></li>
  </ul>
</div>
`,
          children: [
            {
              id: "on-premises-tracing",
              title: "On-Premises",
              description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🏠 Tracing in On-Premises Environments</h2>
  <p><strong>On-premises tracing</strong> refers to collecting and analyzing trace data within your own infrastructure, rather than using cloud-hosted platforms. It's ideal for organizations with strict data privacy, regulatory, or performance requirements.</p>

  <h3 style='color:#10b981'>🔎 Why Use On-Prem Tracing?</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Data Control:</strong> Full ownership and control over trace data.</li>
    <li><strong>Security & Compliance:</strong> Ensures sensitive data doesn't leave internal networks.</li>
    <li><strong>Custom Infrastructure:</strong> Tailor the tracing stack to match internal systems.</li>
    <li><strong>Low-Latency Access:</strong> Faster access to data with local storage and queries.</li>
  </ul>

  <h3 style='color:#f59e0b'>⚙️ Key Components</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Instrumentation Libraries:</strong> Language-specific SDKs (OpenTelemetry, Zipkin, etc.).</li>
    <li><strong>Trace Collectors:</strong> Receive and process incoming trace data.</li>
    <li><strong>Storage Backend:</strong> Store trace data (e.g., Elasticsearch, Cassandra).</li>
    <li><strong>UI & Dashboards:</strong> Visualize trace timelines and spans (e.g., Jaeger UI).</li>
  </ul>

  <h3 style='color:#8b5cf6'>🛠 Recommended Tools</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li><strong>Jaeger:</strong> Full on-prem tracing suite from the CNCF ecosystem.</li>
    <li><strong>Zipkin:</strong> Lightweight, simple on-prem deployment option.</li>
    <li><strong>Grafana Tempo:</strong> Scalable distributed tracing backend integrated with Grafana.</li>
    <li><strong>OpenTelemetry Collector:</strong> Centralized agent to receive and export traces.</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li>Deploy redundant tracing components to ensure reliability.</li>
    <li>Ensure proper resource allocation for trace storage (disk, memory).</li>
    <li>Use log correlation and span IDs to enhance debugging.</li>
    <li>Rotate and archive trace data to manage volume and retention policies.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://www.jaegertracing.io/docs/' target='_blank' style='color:#3b82f6'>Jaeger Documentation</a></li>
    <li><a href='https://zipkin.io/pages/quickstart.html' target='_blank' style='color:#3b82f6'>Zipkin Quickstart</a></li>
    <li><a href='https://opentelemetry.io/docs/collector/' target='_blank' style='color:#3b82f6'>OpenTelemetry Collector Docs</a></li>
    <li><a href='https://grafana.com/oss/tempo/' target='_blank' style='color:#3b82f6'>Grafana Tempo Overview</a></li>
  </ul>
</div>
`,
              children: [
                {
                  id: "opentelemetry",
                  title: "OpenTelemetry (OTel)",
                  description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🏗️ On-Premises Tracing with OpenTelemetry (OTel)</h2>
  <p><strong>OpenTelemetry (OTel)</strong> is an open-source, vendor-neutral standard for observability. It supports tracing, metrics, and logs. Running OTel in an on-premises environment enables full control over telemetry data and infrastructure.</p>

  <h3 style='color:#10b981'>🌐 Why Use OTel On-Prem?</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Vendor Independence:</strong> No lock-in to commercial platforms.</li>
    <li><strong>Full Control:</strong> Own the telemetry pipeline and data flow.</li>
    <li><strong>Compliance:</strong> Keep observability data within secure environments.</li>
    <li><strong>Customization:</strong> Tailor pipelines, exporters, and processors to fit your needs.</li>
  </ul>

  <h3 style='color:#f59e0b'>🧰 Core Components of OTel</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Instrumentation:</strong> SDKs for many languages (Node.js, Java, Python, etc.).</li>
    <li><strong>OTel Collector:</strong> Central agent to receive, process, and export telemetry data.</li>
    <li><strong>Receivers:</strong> Accept data (OTLP, Zipkin, Jaeger, Prometheus, etc.).</li>
    <li><strong>Processors:</strong> Modify or filter data (e.g., batch, attributes).</li>
    <li><strong>Exporters:</strong> Send data to storage or visualization tools (Jaeger, Zipkin, Tempo, etc.).</li>
  </ul>

  <h3 style='color:#8b5cf6'>🏢 Typical On-Prem Setup</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Apps instrumented with OTel SDKs send trace data via OTLP.</li>
    <li>OTel Collector receives and processes data.</li>
    <li>Traces are exported to Jaeger, Zipkin, or Grafana Tempo deployed locally.</li>
    <li>Data visualized through Jaeger UI or Grafana dashboards.</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li>Deploy Collectors close to services to reduce network overhead.</li>
    <li>Use batching and retry processors to improve reliability.</li>
    <li>Secure endpoints and configure authentication on the collector.</li>
    <li>Continuously monitor resource usage of OTel components.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://opentelemetry.io/' target='_blank' style='color:#3b82f6'>OpenTelemetry Official Site</a></li>
    <li><a href='https://opentelemetry.io/docs/collector/' target='_blank' style='color:#3b82f6'>OTel Collector Documentation</a></li>
    <li><a href='https://opentelemetry.io/docs/concepts/architecture/' target='_blank' style='color:#3b82f6'>OTel Architecture Guide</a></li>
    <li><a href='https://www.jaegertracing.io/docs/' target='_blank' style='color:#3b82f6'>Jaeger Docs (Integration with OTel)</a></li>
  </ul>
</div>
`,
                  type: "must-know",
                  children: [
                    {
                      id: "jaeger", title: "Jaeger", type: "must-know", description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🔗 Tracing On-Premises with OpenTelemetry + Jaeger</h2>
  <p><strong>OpenTelemetry</strong> combined with <strong>Jaeger</strong> is a powerful, open-source tracing solution for on-premises environments. OpenTelemetry handles instrumentation and data collection, while Jaeger provides visualization, storage, and analysis of distributed traces.</p>

  <h3 style='color:#10b981'>🏠 Why Use OTel + Jaeger On-Prem?</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Vendor-Free Observability:</strong> Full control over trace data and deployment.</li>
    <li><strong>Local Data Storage:</strong> Meet data sovereignty and compliance needs.</li>
    <li><strong>Rich Trace Visualization:</strong> Understand request flows, latencies, and bottlenecks.</li>
    <li><strong>Microservices Visibility:</strong> Ideal for distributed on-prem architectures.</li>
  </ul>

  <h3 style='color:#f59e0b'>⚙️ Key Components</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>OpenTelemetry SDKs:</strong> Instrument applications to emit trace data (Java, Node.js, Go, etc.).</li>
    <li><strong>OTel Collector:</strong> Central component to receive, process, and export trace data.</li>
    <li><strong>Jaeger Collector & Agent:</strong> Accept trace data and forward it to Jaeger backend.</li>
    <li><strong>Jaeger UI:</strong> Web interface to view trace timelines, spans, and services.</li>
    <li><strong>Storage Backend:</strong> Elasticsearch, Cassandra, or local storage for trace persistence.</li>
  </ul>

  <h3 style='color:#8b5cf6'>📦 Deployment Flow</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Apps → OTel SDKs → OTLP Exporter → OTel Collector</li>
    <li>OTel Collector → Jaeger Exporter → Jaeger Collector</li>
    <li>Jaeger Collector → Storage Backend (e.g., Elasticsearch)</li>
    <li>Jaeger UI pulls data from storage to visualize traces</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li>Use batching and retries in the OTel Collector for efficient export.</li>
    <li>Enable span limits and sampling to reduce noise and volume.</li>
    <li>Tag spans with service, environment, version metadata.</li>
    <li>Secure collector and UI endpoints with TLS and access control.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://opentelemetry.io/docs/' target='_blank' style='color:#3b82f6'>OpenTelemetry Documentation</a></li>
    <li><a href='https://www.jaegertracing.io/docs/' target='_blank' style='color:#3b82f6'>Jaeger Documentation</a></li>
    <li><a href='https://opentelemetry.io/docs/collector/exporter/jaeger/' target='_blank' style='color:#3b82f6'>OTel Collector Jaeger Exporter</a></li>
    <li><a href='https://github.com/open-telemetry/opentelemetry-collector-contrib' target='_blank' style='color:#3b82f6'>OTel Collector Contrib GitHub</a></li>
  </ul>
</div>
` },
                    {
                      id: "zipkin", title: "Zipkin", type: "optional", description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🕵️ Tracing On-Premises with OpenTelemetry + Zipkin</h2>
  <p><strong>Zipkin</strong> is a simple, efficient, and open-source distributed tracing system. When combined with <strong>OpenTelemetry (OTel)</strong>, it allows teams to collect, process, and visualize traces in self-hosted environments with full control and minimal overhead.</p>

  <h3 style='color:#10b981'>🏠 Why Use OTel + Zipkin On-Prem?</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Lightweight Deployment:</strong> Zipkin is fast and easy to run on local infrastructure.</li>
    <li><strong>Vendor Independence:</strong> No reliance on commercial SaaS platforms.</li>
    <li><strong>Privacy & Compliance:</strong> Keep all telemetry data inside secure internal networks.</li>
    <li><strong>Quick Setup:</strong> Ideal for small teams or proof-of-concept tracing systems.</li>
  </ul>

  <h3 style='color:#f59e0b'>⚙️ Core Architecture</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>OTel SDKs:</strong> Automatically or manually instrument your application code.</li>
    <li><strong>OTel Collector:</strong> Receives OTLP-formatted trace data.</li>
    <li><strong>Zipkin Exporter:</strong> Sends data from the collector to Zipkin in Zipkin format.</li>
    <li><strong>Zipkin Server:</strong> Stores and visualizes trace data via web UI.</li>
    <li><strong>Storage:</strong> In-memory by default, can use MySQL, Elasticsearch, Cassandra.</li>
  </ul>

  <h3 style='color:#8b5cf6'>🚀 Trace Pipeline Example</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Apps → OTel SDKs → OTLP → OTel Collector</li>
    <li>OTel Collector → Zipkin Exporter → Zipkin Server</li>
    <li>Zipkin UI → Visual trace data (latency, span depth, timing)</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li>Enable sampling to reduce trace volume and noise.</li>
    <li>Tag traces with service name, request ID, environment, etc.</li>
    <li>Use persistent storage for longer trace retention.</li>
    <li>Deploy Zipkin with reverse proxy and authentication for secure access.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://zipkin.io/' target='_blank' style='color:#3b82f6'>Zipkin Official Site</a></li>
    <li><a href='https://zipkin.io/pages/quickstart.html' target='_blank' style='color:#3b82f6'>Zipkin Quickstart Guide</a></li>
    <li><a href='https://opentelemetry.io/docs/collector/exporter/zipkin/' target='_blank' style='color:#3b82f6'>OTel Zipkin Exporter Docs</a></li>
    <li><a href='https://github.com/openzipkin/zipkin' target='_blank' style='color:#3b82f6'>Zipkin GitHub Repository</a></li>
  </ul>
</div>
` },
                  ]
                },
                {
                  id: "sentry-io-onprem-trace", title: "Sentry.io", type: "optional", description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🏠 Tracing with Sentry (On-Premises)</h2>
  <p><strong>Sentry</strong> provides performance monitoring and distributed tracing features, in addition to its core error tracking capabilities. Sentry can be deployed <strong>on-premises</strong> for teams that require local control, data privacy, or integration with internal infrastructure.</p>

  <h3 style='color:#10b981'>🔎 Why Use Sentry On-Prem for Tracing?</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Self-Hosting:</strong> Full control over data storage and privacy.</li>
    <li><strong>Integrated Tracing & Errors:</strong> Correlate performance traces directly with error data.</li>
    <li><strong>Security & Compliance:</strong> Keep trace data within internal networks for regulated environments.</li>
    <li><strong>Customization:</strong> Adjust storage, retention, and integrations based on local requirements.</li>
  </ul>

  <h3 style='color:#f59e0b'>🧰 Core Features of Sentry Tracing</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Performance Tracing:</strong> Capture latency, transactions, spans across services.</li>
    <li><strong>Transaction Sampling:</strong> Reduce load by capturing only relevant traces.</li>
    <li><strong>Trace IDs:</strong> Unique identifiers link related spans and errors.</li>
    <li><strong>Contextual Insights:</strong> View tags, breadcrumbs, and request metadata alongside traces.</li>
    <li><strong>UI Dashboards:</strong> Visualize transaction timelines, bottlenecks, and throughput.</li>
  </ul>

  <h3 style='color:#8b5cf6'>🛠 On-Prem Setup Highlights</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Use the <strong>Sentry self-hosted Docker</strong> deployment to run locally.</li>
    <li>Enable <code>performance monitoring</code> in project settings and SDKs.</li>
    <li>Instrument your app with <strong>Sentry SDKs</strong> (JavaScript, Python, Node.js, etc.).</li>
    <li>Use Relay for efficient ingestion and rate limiting.</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li>Apply transaction sampling to avoid overloading storage.</li>
    <li>Use custom tags (user ID, endpoint) for filtering and grouping.</li>
    <li>Keep your Sentry self-hosted stack updated for stability and security.</li>
    <li>Integrate with other on-prem tools like Grafana or Prometheus for extended observability.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://develop.sentry.dev/self-hosted/' target='_blank' style='color:#3b82f6'>Sentry Self-Hosted Docs</a></li>
    <li><a href='https://docs.sentry.io/product/performance/' target='_blank' style='color:#3b82f6'>Performance Monitoring Guide</a></li>
    <li><a href='https://docs.sentry.io/platforms/javascript/performance/instrumentation/' target='_blank' style='color:#3b82f6'>SDK Tracing Instrumentation</a></li>
    <li><a href='https://github.com/getsentry/self-hosted' target='_blank' style='color:#3b82f6'>GitHub - Sentry Self-Hosted</a></li>
  </ul>
</div>
` },
              ]
            },

            {
              id: "cloud-tracing",
              title: "Cloud",
              description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>☁️ Tracing in the Cloud</h2>
  <p><strong>Cloud tracing</strong> is the process of monitoring and visualizing request flows across distributed systems deployed on cloud platforms. It allows DevOps and developers to gain deep insights into application performance, dependencies, and bottlenecks without managing the infrastructure themselves.</p>

  <h3 style='color:#10b981'>🌐 Why Cloud Tracing?</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Managed Services:</strong> No need to deploy or maintain tracing infrastructure.</li>
    <li><strong>Auto-Scaling:</strong> Seamlessly handles large trace volumes from dynamic cloud workloads.</li>
    <li><strong>Integration:</strong> Easily connects with cloud-native tools and services.</li>
    <li><strong>Global Visibility:</strong> Trace requests across multiple regions or availability zones.</li>
  </ul>

  <h3 style='color:#f59e0b'>⚙️ Key Cloud Tracing Platforms</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>AWS X-Ray:</strong> Traces requests across AWS services and Lambda functions.</li>
    <li><strong>Google Cloud Trace:</strong> Collects latency data from apps running in GCP.</li>
    <li><strong>Azure Monitor Application Insights:</strong> Tracks distributed traces in Azure-hosted apps.</li>
    <li><strong>Datadog APM:</strong> Full-featured tracing with dashboards, alerting, and logs.</li>
    <li><strong>Sentry Tracing (Cloud):</strong> Lightweight integration with frontend and backend stacks.</li>
  </ul>

  <h3 style='color:#8b5cf6'>🚀 Use Cases</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Track slow database queries or API calls across microservices.</li>
    <li>Identify the root cause of latency spikes in production.</li>
    <li>Correlate traces with logs and metrics for full-stack observability.</li>
    <li>Monitor cold starts or retries in serverless environments.</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li>Instrument critical services and endpoints with trace context.</li>
    <li>Enable sampling to balance performance and data volume.</li>
    <li>Tag traces with metadata (env, service, region) for filtering.</li>
    <li>Correlate trace IDs across logs and metrics for troubleshooting.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://docs.aws.amazon.com/xray/' target='_blank' style='color:#3b82f6'>AWS X-Ray Documentation</a></li>
    <li><a href='https://cloud.google.com/trace/docs' target='_blank' style='color:#3b82f6'>Google Cloud Trace Docs</a></li>
    <li><a href='https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview' target='_blank' style='color:#3b82f6'>Azure Application Insights</a></li>
    <li><a href='https://docs.datadoghq.com/tracing/' target='_blank' style='color:#3b82f6'>Datadog Tracing Docs</a></li>
    <li><a href='https://docs.sentry.io/product/performance/' target='_blank' style='color:#3b82f6'>Sentry Performance Monitoring</a></li>
  </ul>
</div>
`,
              children: [
                {
                  id: "datadog-trace", title: "Datadog", type: "must-know", description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>📈 Tracing in the Cloud with Datadog APM</h2>
  <p><strong>Datadog APM (Application Performance Monitoring)</strong> is a powerful cloud-based platform for distributed tracing, performance monitoring, and full-stack observability. It provides deep visibility into application behavior across services, containers, and infrastructure.</p>

  <h3 style='color:#10b981'>☁️ Why Use Datadog for Cloud Tracing?</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>End-to-End Tracing:</strong> Follow requests from frontend to backend to database.</li>
    <li><strong>Automatic Instrumentation:</strong> Supports many languages with minimal setup.</li>
    <li><strong>Correlated Observability:</strong> Unified traces, logs, metrics, and alerts in one place.</li>
    <li><strong>Scalable Cloud Service:</strong> Built for high-traffic, cloud-native apps.</li>
  </ul>

  <h3 style='color:#f59e0b'>⚙️ Key Features</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Distributed Tracing:</strong> View complete trace timelines and service maps.</li>
    <li><strong>Root Cause Analysis:</strong> Pinpoint slow services, errors, and bottlenecks.</li>
    <li><strong>Service Overviews:</strong> Visual dashboards for latency, throughput, error rates.</li>
    <li><strong>Trace Search & Analytics:</strong> Filter and aggregate traces using tags.</li>
    <li><strong>Integrations:</strong> Works with Kubernetes, AWS, Azure, GCP, Docker, and more.</li>
  </ul>

  <h3 style='color:#8b5cf6'>🚀 Typical Use Cases</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Monitor performance of microservices in production.</li>
    <li>Detect slow queries or API endpoints affecting user experience.</li>
    <li>Correlate errors with traces for faster debugging.</li>
    <li>Visualize dependencies and trace propagation across services.</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li>Tag spans with key metadata (env, service, version, region).</li>
    <li>Use trace sampling to balance detail vs cost.</li>
    <li>Leverage monitors and anomaly detection for proactive alerting.</li>
    <li>Instrument all critical services and gateways consistently.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://docs.datadoghq.com/tracing/' target='_blank' style='color:#3b82f6'>Datadog APM Documentation</a></li>
    <li><a href='https://docs.datadoghq.com/tracing/trace_search_and_analytics/' target='_blank' style='color:#3b82f6'>Trace Search & Analytics</a></li>
    <li><a href='https://www.datadoghq.com/product/apm/' target='_blank' style='color:#3b82f6'>Datadog APM Product Page</a></li>
    <li><a href='https://docs.datadoghq.com/tracing/setup/' target='_blank' style='color:#3b82f6'>Setup Instructions for Supported Languages</a></li>
  </ul>
</div>
` },
                {
                  id: "sentry-io-trace", title: "Sentry.io", type: "optional", description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🐞 Cloud Tracing with Sentry Performance</h2>
  <p><strong>Sentry</strong>, hata izleme aracı olarak bilinse de Cloud ortamlarında güçlü bir <strong>Performance Monitoring & Tracing</strong> yeteneğine sahiptir. Uygulama performansını izler, hataların etkisini ölçer ve dağıtık sistemlerdeki gecikmeleri (latency) net bir şekilde görselleştirir :contentReference[oaicite:1]{index=1}.</p>

  <h3 style='color:#10b981'>☁️ Neden Cloud Tracing (Sentry)?</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Dağıtık Performans Verisi:</strong> Microservisler, veritabanları ve üçüncü parti servisler üzerinde uçtan uca izleme sağlar :contentReference[oaicite:2]{index=2}.</li>
    <li><strong>Error & Trace Korelasyonu:</strong> Hata ve tracing verilerini ilişkilendirerek root cause analizini hızlandırır :contentReference[oaicite:3]{index=3}.</li>
    <li><strong>Insights ve Trace Explorer:</strong> Yüksek seviyede performans metriği sağlar; detaylı Trace Explorer ile alt uçlara inme imkânı sunar :contentReference[oaicite:4]{index=4}.</li>
    <li><strong>OpenTelemetry Desteği:</strong> OTel SDK’larını Sentry’ye kolayca entegre edebilirsiniz :contentReference[oaicite:5]{index=5}.</li>
  </ul>

  <h3 style='color:#f59e0b'>⚙️ Temel Özellikler</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Transaction & Spans:</strong> İstek, işlem ve fonksiyon bazlı detaylı izleme yakalar :contentReference[oaicite:6]{index=6}.</li>
    <li><strong>Trace Sampling:</strong> tracesSampleRate ya da tracesSampler kullanılarak gönderilecek trace oranı kontrol edilebilir :contentReference[oaicite:7]{index=7}.</li>
    <li><strong>Performance Insights:</strong> Örn. yavaş sorgular, N+1 problemleri gibi performans sorunlarını otomatik belirler :contentReference[oaicite:8]{index=8}.</li>
    <li><strong>Trace Explorer:</strong> Trace’leri filtreleyerek p95, p99 gibi gecikme metriklerini inceleme imkânı sunar :contentReference[oaicite:9]{index=9}.</li>
    <li><strong>UI'De Görselleştirme:</strong> Transaction detayları, span süreleri ve metadata etiketleri net grafiklerle sunulur :contentReference[oaicite:10]{index=10}.</li>
  </ul>

  <h3 style='color:#8b5cf6'>🚀 Kullanım Senaryoları</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Production ortamında uçtan uca performans analizi</li>
    <li>Hata ve yavaşlık sorunlarını birlikte inceleyerek hızla çözme</li>
    <li>Özellikle frontend / backend / API süreçlerinde detaylı izleme</li>
    <li>Ölçeklendirme sonrası performans regresyonlarını tespit etme</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ En İyi Uygulamalar</h3>
  <ul>
    <li><strong>Sampling Oranı Belirleme:</strong> Yüksek trafikte aşırı veri üretiminden kaçınmak için doğru oran belirleyin :contentReference[oaicite:11]{index=11}.</li>
    <li><strong>Metadata Etiketleme:</strong> service, environment, öncelik gibi etiketlerle izlenebilirliği artırın.</li>
    <li><strong>Sentry SDK ve OTel:</strong> Mevcut uygulamalara kolay entegre edilir; OTel ile birlikte kullanarak uyumluluğu artırın :contentReference[oaicite:12]{index=12}.</li>
    <li><strong>Trace & Error Korrelasyonu:</strong> Performans sorunlarını hata verileriyle birleştirerek sorunun kaynağına daha hızlı ulaşılır.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Daha Fazla Öğren</h3>
  <ul>
    <li><a href='https://sentry.io/product/tracing/' target='_blank' style='color:#3b82f6'>Sentry Tracing Özellikleri</a></li>
    <li><a href='https://docs.sentry.io/concepts/key-terms/tracing/' target='_blank' style='color:#3b82f6'>Tracing Kavramları ve Kullanım Dökümantasyonu</a></li>
    <li><a href='https://docs.sentry.io/product/sentry-basics/performance-monitoring/' target='_blank' style='color:#3b82f6'>Performance Monitoring Rehberi</a></li>
    <li><a href='https://develop.sentry.dev/sdk/telemetry/traces/' target='_blank' style='color:#3b82f6'>Sentry SDK ile Tracing Konfigürasyonu</a></li>
  </ul>
</div>
` },
              ]
            },

          ]
        },
        {
          id: "alerting",
          title: "Alerting",
          type: "must-know",
          description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🚨 Alerting</h2>
  <p><strong>Alerting</strong> is the process of notifying system operators or developers when specific thresholds or conditions are met in an application or infrastructure. It's a critical part of observability and incident response.</p>

  <h3 style='color:#10b981'>📡 Why Alerting Matters</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Proactive Monitoring:</strong> Detect issues before they impact users.</li>
    <li><strong>Reduce Downtime:</strong> Immediate notifications help resolve incidents faster.</li>
    <li><strong>Service Reliability:</strong> Keeps SLAs and uptime targets in check.</li>
    <li><strong>Operational Awareness:</strong> Informs the right teams at the right time.</li>
  </ul>

  <h3 style='color:#f59e0b'>⚙️ Core Components</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Metrics-Based Alerts:</strong> Triggered by CPU, memory, latency, etc.</li>
    <li><strong>Log-Based Alerts:</strong> Triggered by specific log patterns or error counts.</li>
    <li><strong>Tracing & Anomaly Detection:</strong> Alerts on abnormal behaviors in traces or distributed services.</li>
    <li><strong>Thresholds & Rules:</strong> Define conditions (e.g., 95% CPU for 5 minutes).</li>
    <li><strong>Notification Channels:</strong> Email, Slack, SMS, PagerDuty, etc.</li>
  </ul>

  <h3 style='color:#8b5cf6'>🚀 Use Cases</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Alert when API error rate exceeds 5% over 10 minutes.</li>
    <li>Notify on memory leaks or container crashes.</li>
    <li>Watch for database query spikes or slowdowns.</li>
    <li>Monitor Kubernetes pod failures or autoscaling events.</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li><strong>Avoid alert fatigue:</strong> Use actionable, high-signal alerts only.</li>
    <li><strong>Group alerts:</strong> Aggregate similar events to reduce noise.</li>
    <li><strong>Include context:</strong> Add links to dashboards and logs in alerts.</li>
    <li><strong>Use escalation policies:</strong> Define alert severity levels and response paths.</li>
    <li><strong>Test alerts regularly:</strong> Simulate conditions to verify reliability.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://sre.google/sre-book/monitoring-distributed-systems/' target='_blank' style='color:#3b82f6'>Google SRE Book: Monitoring Distributed Systems</a></li>
    <li><a href='https://prometheus.io/docs/alerting/latest/overview/' target='_blank' style='color:#3b82f6'>Prometheus Alerting Docs</a></li>
    <li><a href='https://grafana.com/docs/grafana/latest/alerting/' target='_blank' style='color:#3b82f6'>Grafana Alerting</a></li>
    <li><a href='https://docs.datadoghq.com/monitors/' target='_blank' style='color:#3b82f6'>Datadog Monitors (Alerting)</a></li>
  </ul>
</div>
`,
          children: [
            {
              id: "on-premises-alerting",
              title: "On-Premises",
              description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🏠 Alerting – On-Premises</h2>
  <p><strong>On-premises alerting</strong> involves configuring monitoring systems within local data centers or self-hosted environments to detect failures, anomalies, or performance issues. It provides full control over alert rules, routing, and integrations without relying on external cloud services.</p>

  <h3 style='color:#10b981'>🔍 Why It's Important</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Full ownership:</strong> All data and logic remain on internal infrastructure.</li>
    <li><strong>No internet dependency:</strong> Alerts continue functioning during external outages.</li>
    <li><strong>Custom integrations:</strong> Easily tie into local systems or legacy tools.</li>
    <li><strong>Regulatory compliance:</strong> Keeps sensitive environments isolated.</li>
  </ul>

  <h3 style='color:#f59e0b'>⚙️ Key Tools & Components</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Prometheus Alertmanager:</strong> Handles alert dispatching, silencing, grouping.</li>
    <li><strong>Grafana Alerting:</strong> Built-in alert engine tied to on-prem dashboards.</li>
    <li><strong>ELK Stack (Elasticsearch, Logstash, Kibana):</strong> Log-based alerts via watchers or custom scripts.</li>
    <li><strong>Checkmk / Zabbix / Nagios:</strong> Traditional infrastructure and network alerting tools.</li>
    <li><strong>Notification hooks:</strong> Email, SMS, Slack, webhooks, custom shell scripts.</li>
  </ul>

  <h3 style='color:#8b5cf6'>🚀 Use Cases</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Detect failed backups or replication lag</li>
    <li>Monitor disk space, CPU load, memory usage</li>
    <li>Trigger alerts for service downtime or degraded health</li>
    <li>Integrate with on-site paging or call systems</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li><strong>Build redundancy:</strong> Ensure alerting continues even if one node fails.</li>
    <li><strong>Document alert rules:</strong> Keep alert logic versioned and accessible.</li>
    <li><strong>Test regularly:</strong> Simulate incidents to verify alerts and responses.</li>
    <li><strong>Prioritize by severity:</strong> Avoid flooding teams with low-priority noise.</li>
    <li><strong>Use labels and grouping:</strong> Combine related alerts for clarity.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://prometheus.io/docs/alerting/latest/alertmanager/' target='_blank' style='color:#3b82f6'>Prometheus Alertmanager Documentation</a></li>
    <li><a href='https://grafana.com/docs/grafana/latest/alerting/' target='_blank' style='color:#3b82f6'>Grafana On-Prem Alerting</a></li>
    <li><a href='https://checkmk.com/product' target='_blank' style='color:#3b82f6'>Checkmk Monitoring</a></li>
    <li><a href='https://www.zabbix.com/documentation/current/manual/config/notifications' target='_blank' style='color:#3b82f6'>Zabbix Alerting Guide</a></li>
  </ul>
</div>
`,
              children: [
                {
                  id: "zabbix", title: "Zabbix", type: "must-know", description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>📟 Alerting – On-Premises – Zabbix</h2>
  <p><strong>Zabbix</strong> is a powerful open-source monitoring and alerting solution for on-premises environments. It provides real-time monitoring, flexible alert rules, and detailed notifications for hosts, services, and infrastructure components.</p>

  <h3 style='color:#10b981'>🧭 Why Use Zabbix for Alerting?</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Full control:</strong> Self-hosted with customizable notification rules.</li>
    <li><strong>Agent-based and agentless:</strong> Monitor virtually anything with SNMP, IPMI, SSH, or Zabbix agents.</li>
    <li><strong>Powerful templating:</strong> Reusable alert logic and macros simplify setup.</li>
    <li><strong>High scalability:</strong> Supports thousands of nodes in large networks.</li>
  </ul>

  <h3 style='color:#f59e0b'>⚙️ Key Alerting Features</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Trigger expressions:</strong> Create complex conditions (e.g., CPU > 90% for 5 min).</li>
    <li><strong>Event correlation:</strong> Prevent alert floods by recognizing related events.</li>
    <li><strong>Escalations:</strong> Define response workflows based on severity or duration.</li>
    <li><strong>Media types:</strong> Integrate email, SMS, webhook, Slack, Telegram, and more.</li>
    <li><strong>Maintenance mode:</strong> Suppress alerts during planned outages.</li>
  </ul>

  <h3 style='color:#8b5cf6'>🚀 Use Cases</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Monitor Linux/Windows servers and services</li>
    <li>Alert when disk space drops below thresholds</li>
    <li>Notify on network downtime or link degradation</li>
    <li>Send escalations to different teams by priority</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li><strong>Use templates:</strong> Apply standard alert logic across hosts for consistency.</li>
    <li><strong>Fine-tune triggers:</strong> Avoid noisy or false-positive alerts.</li>
    <li><strong>Test notifications:</strong> Verify email/SMS channels regularly.</li>
    <li><strong>Document escalation policies:</strong> Ensure teams understand alert workflows.</li>
    <li><strong>Keep Zabbix updated:</strong> Apply security and feature patches proactively.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://www.zabbix.com/documentation/current/manual/config/triggers' target='_blank' style='color:#3b82f6'>Zabbix Triggers Documentation</a></li>
    <li><a href='https://www.zabbix.com/documentation/current/manual/notifications/media/email' target='_blank' style='color:#3b82f6'>Email Alerting in Zabbix</a></li>
    <li><a href='https://www.zabbix.com/integrations' target='_blank' style='color:#3b82f6'>Zabbix Integrations (Telegram, Slack, etc.)</a></li>
    <li><a href='https://bestmonitoringtools.com/zabbix-alerting/' target='_blank' style='color:#3b82f6'>Best Practices for Zabbix Alerting</a></li>
  </ul>
</div>
` },
                {
                  id: "alertmanager", title: "Alertmanager", type: "optional", description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>📢 Alerting – On-Premises – Alertmanager</h2>
  <p><strong>Alertmanager</strong> is an essential part of the Prometheus monitoring stack, designed to manage alerts from Prometheus servers. It handles deduplication, grouping, routing, and notification of alerts for on-premises environments.</p>

  <h3 style='color:#10b981'>🔧 Why Use Alertmanager?</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Integrates natively:</strong> Works seamlessly with Prometheus alerts.</li>
    <li><strong>Noise reduction:</strong> Group and silence alerts to prevent overload.</li>
    <li><strong>Highly configurable:</strong> Route alerts by severity, source, or labels.</li>
    <li><strong>On-prem friendly:</strong> Fully self-hosted and lightweight.</li>
  </ul>

  <h3 style='color:#f59e0b'>⚙️ Key Features</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Alert grouping:</strong> Combine similar alerts to reduce noise.</li>
    <li><strong>Silencing:</strong> Temporarily mute known issues or during maintenance.</li>
    <li><strong>Routing tree:</strong> Define alert flows based on label matchers.</li>
    <li><strong>Multi-receiver support:</strong> Email, Slack, PagerDuty, Opsgenie, Webhooks.</li>
    <li><strong>Templates:</strong> Custom notification messages with Go templating.</li>
  </ul>

  <h3 style='color:#8b5cf6'>🚀 Use Cases</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Send critical CPU/memory alerts via Slack</li>
    <li>Route different service alerts to different teams</li>
    <li>Silence alerts during planned downtime automatically</li>
    <li>Use webhook receiver to trigger custom scripts or integrations</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li><strong>Use labels wisely:</strong> Structure your Prometheus alerts to support flexible routing.</li>
    <li><strong>Manage silences:</strong> Use time-bound silences to avoid ignoring real issues.</li>
    <li><strong>Version control configs:</strong> Store alertmanager.yml in Git.</li>
    <li><strong>Integrate with dashboards:</strong> Display active alerts in Grafana or similar tools.</li>
    <li><strong>Secure endpoints:</strong> Enable authentication for public-facing APIs.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://prometheus.io/docs/alerting/latest/alertmanager/' target='_blank' style='color:#3b82f6'>Official Alertmanager Docs</a></li>
    <li><a href='https://grafana.com/docs/grafana/latest/alerting/contacts/alertmanager/' target='_blank' style='color:#3b82f6'>Grafana Alertmanager Integration</a></li>
    <li><a href='https://awesome-prometheus-alerts.grep.to/' target='_blank' style='color:#3b82f6'>Awesome Prometheus Alerts (GitHub)</a></li>
    <li><a href='https://www.robustperception.io/alerting-on-your-terms' target='_blank' style='color:#3b82f6'>Blog: Alerting on Your Terms (Prometheus)</a></li>
  </ul>
</div>
` },

              ]
            },
            {
              id: "cloud-alerting",
              title: "Cloud",
              description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🌐 Alerting – Cloud</h2>
  <p><strong>Cloud alerting</strong> enables real-time notifications and incident detection across distributed systems, applications, and infrastructure hosted on cloud platforms. It is scalable, flexible, and integrates tightly with modern DevOps and SRE workflows.</p>

  <h3 style='color:#10b981'>☁️ Why Use Cloud Alerting?</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>No infrastructure management:</strong> Fully hosted and maintained by providers.</li>
    <li><strong>Global scale:</strong> Alert on resources across multiple regions and zones.</li>
    <li><strong>Fast setup:</strong> Out-of-the-box integrations with cloud-native services.</li>
    <li><strong>Seamless DevOps integration:</strong> Supports CI/CD, incident response, and automation.</li>
  </ul>

  <h3 style='color:#f59e0b'>⚙️ Key Features</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Multi-signal alerting:</strong> Alerts from metrics, logs, traces, and uptime checks.</li>
    <li><strong>AI/ML enhancements:</strong> Anomaly detection, predictive alerts, root cause hints.</li>
    <li><strong>SLO & SLA monitoring:</strong> Alert based on service objectives and thresholds.</li>
    <li><strong>Event correlation:</strong> Link related incidents across multiple layers.</li>
    <li><strong>Notification routing:</strong> Escalate alerts based on time, severity, team, or region.</li>
  </ul>

  <h3 style='color:#8b5cf6'>📌 Common Providers</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li><strong>Datadog:</strong> Integrated with logs, traces, synthetics.</li>
    <li><strong>Google Cloud Monitoring (Opsgenie/Cloud Alerting):</strong> GCP-native alerting tools.</li>
    <li><strong>AWS CloudWatch Alarms:</strong> Deep integration with AWS services.</li>
    <li><strong>Azure Monitor Alerts:</strong> Supports infrastructure, app, and security alerts.</li>
    <li><strong>Sentry.io:</strong> Focused on error and performance monitoring with alerting.</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li><strong>Define meaningful thresholds:</strong> Avoid over-alerting and false positives.</li>
    <li><strong>Group alerts by service:</strong> Improve readability and triage.</li>
    <li><strong>Use tags and labels:</strong> Organize alerts by team, environment, and region.</li>
    <li><strong>Escalation policies:</strong> Ensure alerts reach the right responders at the right time.</li>
    <li><strong>Link dashboards:</strong> Provide visual context with each alert.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://cloud.google.com/monitoring/alerts' target='_blank' style='color:#3b82f6'>Google Cloud Alerting Docs</a></li>
    <li><a href='https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html' target='_blank' style='color:#3b82f6'>AWS CloudWatch Alarms</a></li>
    <li><a href='https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview' target='_blank' style='color:#3b82f6'>Azure Monitor Alerts</a></li>
    <li><a href='https://docs.datadoghq.com/monitors/' target='_blank' style='color:#3b82f6'>Datadog Monitors</a></li>
  </ul>
</div>
`,
              children: [
                {
                  id: "datadog-alert", title: "Datadog", type: "must-know", description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>☁️ Alerting – Cloud – Datadog</h2>
  <p><strong>Datadog</strong> is a modern monitoring and observability platform that provides robust alerting capabilities across cloud-native, hybrid, and microservices architectures. It allows teams to create, manage, and escalate alerts based on logs, metrics, traces, and more.</p>

  <h3 style='color:#10b981'>🚀 Why Use Datadog for Alerting?</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Unified alerting:</strong> Metrics, logs, traces, synthetics, and more in one place.</li>
    <li><strong>AI-based detection:</strong> Outlier detection, anomaly alerts, forecasting.</li>
    <li><strong>Multi-cloud native:</strong> Works seamlessly across AWS, Azure, GCP, and hybrid setups.</li>
    <li><strong>Built-in integrations:</strong> Slack, PagerDuty, Opsgenie, ServiceNow, and custom webhooks.</li>
  </ul>

  <h3 style='color:#f59e0b'>⚙️ Core Alerting Features</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Monitors:</strong> Define alert conditions using thresholds, trends, or formulas.</li>
    <li><strong>Composite monitors:</strong> Combine multiple conditions in one alert.</li>
    <li><strong>Outlier & anomaly detection:</strong> Identify unusual behaviors automatically.</li>
    <li><strong>SLO-based alerting:</strong> Set alerts around SLAs and error budgets.</li>
    <li><strong>Alert correlation:</strong> Reduce noise by grouping related incidents.</li>
  </ul>

  <h3 style='color:#8b5cf6'>📌 Use Cases</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Notify when service latency exceeds 500ms</li>
    <li>Alert on high error rates in production logs</li>
    <li>Detect and report anomalies in user traffic patterns</li>
    <li>Escalate outages across global teams via incident workflows</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li><strong>Tag everything:</strong> Use tags to filter, route, and group alerts logically.</li>
    <li><strong>Use alert severity levels:</strong> Critical, Warning, Info – for better triage.</li>
    <li><strong>Document monitors:</strong> Include alert rationale and runbooks in messages.</li>
    <li><strong>Test alert noise:</strong> Simulate conditions to optimize thresholds.</li>
    <li><strong>Link dashboards:</strong> Embed charts and logs directly in alert messages.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://docs.datadoghq.com/monitors/' target='_blank' style='color:#3b82f6'>Datadog Monitors Overview</a></li>
    <li><a href='https://docs.datadoghq.com/monitors/monitor_types/' target='_blank' style='color:#3b82f6'>Monitor Types in Datadog</a></li>
    <li><a href='https://www.datadoghq.com/blog/monitoring-at-scale/' target='_blank' style='color:#3b82f6'>Monitoring at Scale with Datadog</a></li>
    <li><a href='https://www.datadoghq.com/blog/tagging-best-practices/' target='_blank' style='color:#3b82f6'>Tagging Best Practices in Datadog</a></li>
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
      id: "client-side-dotnet",
      title: "Client-Side .NET",
      "type": "optional",
      direction: "left",
      description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🖥️ Client-Side .NET</h2>
  <p><strong>Client-side .NET</strong> enables developers to build interactive applications that run directly in the user's environment — whether that's the browser, desktop, or mobile device — using .NET technologies.</p>

  <h3 style='color:#10b981'>🌐 Blazor WebAssembly</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Runs .NET in the browser:</strong> Uses WebAssembly to run C# instead of JavaScript.</li>
    <li><strong>Single-page app (SPA):</strong> Works like React/Vue but written in C#.</li>
    <li><strong>Reusability:</strong> Share code and components between client and server.</li>
    <li><strong>Offline support:</strong> Can run without internet once loaded.</li>
  </ul>

  <h3 style='color:#f59e0b'>🖥️ .NET MAUI (Multi-platform App UI)</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Cross-platform client apps:</strong> Build for Windows, macOS, Android, iOS with one codebase.</li>
    <li><strong>XAML-based UI:</strong> Declarative UI layout using XAML and C#.</li>
    <li><strong>Native performance:</strong> Compiled to native code with full access to platform APIs.</li>
  </ul>

  <h3 style='color:#8b5cf6'>🪟 WPF & Windows Forms</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li><strong>Classic desktop technologies:</strong> Still widely used in enterprise apps.</li>
    <li><strong>WPF:</strong> Uses XAML and MVVM for modern UI binding.</li>
    <li><strong>WinForms:</strong> Simpler event-driven model, great for rapid development.</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Considerations</h3>
  <ul>
    <li><strong>Blazor WebAssembly:</strong> Initial load size can affect performance; best with trimming and lazy loading.</li>
    <li><strong>MAUI:</strong> Still maturing; not all 3rd-party libraries fully support it yet.</li>
    <li><strong>WPF/WinForms:</strong> Windows-only; not suitable for modern cross-platform UI needs.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://learn.microsoft.com/en-us/aspnet/core/blazor/' target='_blank' style='color:#3b82f6'>Blazor WebAssembly Docs</a></li>
    <li><a href='https://learn.microsoft.com/en-us/dotnet/maui/' target='_blank' style='color:#3b82f6'>.NET MAUI Documentation</a></li>
    <li><a href='https://learn.microsoft.com/en-us/dotnet/desktop/wpf/' target='_blank' style='color:#3b82f6'>WPF Guide</a></li>
    <li><a href='https://learn.microsoft.com/en-us/dotnet/desktop/winforms/' target='_blank' style='color:#3b82f6'>Windows Forms Guide</a></li>
  </ul>
</div>
`,
      children: [
        {
          id: "template-engines",
          title: "Template Engines",
          type: "good-to-know",
          description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>📄 Template Engines</h2>
  <p><strong>Template engines</strong> are tools that allow developers to generate dynamic content by combining static templates with runtime data. They are commonly used in web development for rendering HTML views on the server or client side.</p>

  <h3 style='color:#10b981'>🔧 How Template Engines Work</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li>Use placeholders or expressions in a template file (e.g., <code>{{ name }}</code>).</li>
    <li>At runtime, inject data to render a final HTML/text output.</li>
    <li>Support logic like loops, conditionals, includes, and filters.</li>
    <li>Useful for email templates, reports, SSR, or static site generation.</li>
  </ul>

  <h3 style='color:#f59e0b'>💻 Popular Template Engines</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Handlebars (JS):</strong> Logic-less templates, great for web apps and emails.</li>
    <li><strong>EJS (JS):</strong> Embedded JavaScript templating, used in Express.js.</li>
    <li><strong>Pug (JS):</strong> Indentation-based and clean syntax.</li>
    <li><strong>Thymeleaf (Java):</strong> Natural templating engine for Spring applications.</li>
    <li><strong>Razor (C#):</strong> Server-side HTML generation in ASP.NET.</li>
    <li><strong>Jinja2 (Python):</strong> Used in Flask and Django (via Django Templates).</li>
    <li><strong>Mustache:</strong> Minimal and logic-less, cross-language compatible.</li>
  </ul>

  <h3 style='color:#8b5cf6'>📦 Use Cases</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li>Render HTML from server-side (SSR apps)</li>
    <li>Create dynamic e-mails with variable content</li>
    <li>Generate PDFs or reports based on templates</li>
    <li>Build static websites with templated pages</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li><strong>Keep templates clean:</strong> Avoid business logic in templates.</li>
    <li><strong>Escape output:</strong> Prevent XSS by escaping user input.</li>
    <li><strong>Use partials:</strong> Reuse layout sections like headers and footers.</li>
    <li><strong>Separate concerns:</strong> Keep templates separate from controllers or models.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://handlebarsjs.com/' target='_blank' style='color:#3b82f6'>Handlebars Documentation</a></li>
    <li><a href='https://ejs.co/' target='_blank' style='color:#3b82f6'>EJS Documentation</a></li>
    <li><a href='https://pugjs.org/api/getting-started.html' target='_blank' style='color:#3b82f6'>Pug Guide</a></li>
    <li><a href='https://jinja.palletsprojects.com/' target='_blank' style='color:#3b82f6'>Jinja2 Docs</a></li>
    <li><a href='https://learn.microsoft.com/en-us/aspnet/core/mvc/views/razor' target='_blank' style='color:#3b82f6'>Razor View Engine</a></li>
  </ul>
</div>
`,
          children: [
            {
              id: "razor", title: "Razor", type: "must-know", description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🧩 Template Engines – Razor</h2>
  <p><strong>Razor</strong> is a markup syntax used in ASP.NET for embedding C# logic into HTML templates. It enables clean and efficient server-side rendering of dynamic web pages.</p>

  <h3 style='color:#10b981'>🧬 Key Features</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Clean syntax:</strong> Uses <code>@</code> to embed C# within HTML.</li>
    <li><strong>IntelliSense support:</strong> Works natively with Visual Studio and VS Code.</li>
    <li><strong>Server-side rendering (SSR):</strong> Great for SEO and first-page load performance.</li>
    <li><strong>View components & partials:</strong> Modularize templates for reuse.</li>
    <li><strong>Model binding:</strong> Strongly-typed views with compile-time checking.</li>
  </ul>

  <h3 style='color:#f59e0b'>📦 Where It's Used</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>ASP.NET MVC:</strong> Traditional server-rendered web apps.</li>
    <li><strong>ASP.NET Razor Pages:</strong> Page-based programming model.</li>
    <li><strong>Blazor Server:</strong> Razor syntax used with SignalR for real-time UI.</li>
    <li><strong>Email templates:</strong> Generate dynamic server-side HTML emails.</li>
  </ul>

  <h3 style='color:#8b5cf6'>📌 Razor Syntax Examples</h3>
  <pre style="background:#f3f4f6;padding:1rem;border-radius:0.5rem">
@model MyApp.Models.Product

&lt;h1&gt;@Model.Name&lt;/h1&gt;
&lt;p&gt;Price: @Model.Price.ToString("C")&lt;/p&gt;

@if(Model.IsAvailable) {
  &lt;span class="text-success"&gt;In Stock&lt;/span&gt;
} else {
  &lt;span class="text-danger"&gt;Out of Stock&lt;/span&gt;
}
  </pre>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li><strong>Use layout pages:</strong> For consistent headers/footers/navigation.</li>
    <li><strong>Avoid business logic:</strong> Keep Razor views clean and presentation-focused.</li>
    <li><strong>Use partial views:</strong> Break large views into maintainable components.</li>
    <li><strong>Validate models:</strong> Use data annotations for UI-level validation.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://learn.microsoft.com/en-us/aspnet/core/mvc/views/razor' target='_blank' style='color:#3b82f6'>Razor Syntax Documentation</a></li>
    <li><a href='https://learn.microsoft.com/en-us/aspnet/core/mvc/views/overview' target='_blank' style='color:#3b82f6'>ASP.NET MVC Views Overview</a></li>
    <li><a href='https://learn.microsoft.com/en-us/aspnet/core/razor-pages/' target='_blank' style='color:#3b82f6'>Razor Pages Guide</a></li>
    <li><a href='https://learn.microsoft.com/en-us/aspnet/core/blazor/components/' target='_blank' style='color:#3b82f6'>Blazor and Razor Components</a></li>
  </ul>
</div>
` },
            {
              id: "scriban", title: "Scriban", type: "optional", description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🧾 Template Engines – Scriban</h2>
  <p><strong>Scriban</strong> is a fast, powerful, and lightweight text templating engine for .NET. It's ideal for generating structured documents like emails, reports, configuration files, and source code.</p>

  <h3 style='color:#10b981'>🚀 Why Use Scriban?</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Lightweight:</strong> No external dependencies, pure .NET library.</li>
    <li><strong>Safe and sandboxed:</strong> Executes templates in an isolated environment.</li>
    <li><strong>Portable:</strong> Works with .NET Core, .NET Framework, and .NET Standard.</li>
    <li><strong>Script-style syntax:</strong> Similar to Liquid or Jinja, but faster and safer.</li>
    <li><strong>High performance:</strong> Optimized for runtime template generation.</li>
  </ul>

  <h3 style='color:#f59e0b'>📦 Key Features</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li><strong>Built-in functions:</strong> Math, string, array, date, JSON helpers.</li>
    <li><strong>Custom functions:</strong> Extend the engine with your own logic.</li>
    <li><strong>Template inheritance:</strong> Include/extend base templates.</li>
    <li><strong>Looping and conditions:</strong> Supports if/else, for/while, filters.</li>
    <li><strong>Precompiled templates:</strong> For optimal performance in production.</li>
  </ul>

  <h3 style='color:#8b5cf6'>🧪 Sample Template</h3>
  <pre style="background:#f3f4f6;padding:1rem;border-radius:0.5rem">
Hello {{ user.name }},

You have {{ user.notifications.size }} new notifications.

{% for item in user.notifications %}
- {{ item.title }} at {{ item.time | date.format "yyyy-MM-dd HH:mm" }}
{% end %}
  </pre>

  <h3 style='color:#ef4444'>⚠️ Best Practices</h3>
  <ul>
    <li><strong>Keep templates logic-light:</strong> Use Scriban for presentation, not heavy logic.</li>
    <li><strong>Escape user input:</strong> Protect output when generating HTML or scripts.</li>
    <li><strong>Pre-validate context:</strong> Ensure required variables are set before rendering.</li>
    <li><strong>Use includes:</strong> Separate large templates into maintainable partials.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://github.com/scriban/scriban' target='_blank' style='color:#3b82f6'>Scriban on GitHub</a></li>
    <li><a href='https://github.com/scriban/scriban/blob/master/doc/language.md' target='_blank' style='color:#3b82f6'>Scriban Language Reference</a></li>
    <li><a href='https://www.nuget.org/packages/Scriban/' target='_blank' style='color:#3b82f6'>Scriban NuGet Package</a></li>
    <li><a href='https://davidwengier.com/posts/scriban.html' target='_blank' style='color:#3b82f6'>Blog: Using Scriban in .NET Projects</a></li>
  </ul>
</div>
` },
            {
              id: "fluid", title: "Fluid", type: "optional",
              description: "<div style='font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:2rem; border-radius:1rem; border:2px solid #4ade80; box-shadow:0 6px 20px rgba(74,222,128,0.2)'>\n  <h2 style='color:#22c55e;'>💧 Fluid Framework</h2>\n  <p>\n    <strong>Fluid Framework</strong> is an open-source library developed by Microsoft that enables <em>real-time collaborative experiences</em> in web applications. It allows multiple users to simultaneously interact with shared data structures — like documents, forms, or diagrams — with seamless sync across clients.\n  </p>\n\n  <h3 style='color:#15803d;'>🚀 Key Capabilities</h3>\n  <ul>\n    <li>⚡ Real-time synchronization of shared data (e.g., text, lists, objects)</li>\n    <li>🧠 Conflict-free, distributed data structures (CRDTs) built-in</li>\n    <li>📦 Support for both client and server-side hosting models</li>\n    <li>🔄 Offline support with eventual consistency</li>\n    <li>🌐 Integration with Microsoft 365, Azure Fluid Relay, or custom servers</li>\n  </ul>\n\n  <h3 style='color:#15803d;'>🧪 Real-World Use Cases</h3>\n  <ul>\n    <li>✍️ Collaborative document editing (e.g., Word-like apps)</li>\n    <li>📊 Live dashboards with shared filters or state</li>\n    <li>📁 Shared whiteboards or design tools</li>\n    <li>🗳️ Multi-user form or survey inputs in real time</li>\n  </ul>\n\n  <h3 style='color:#15803d;'>🔧 Example (Shared Counter)</h3>\n  <pre style='background:#dcfce7; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;'>import { SharedMap } from \"fluid-framework\";\n\n// Create a shared object\nconst sharedMap = new SharedMap(dataStoreRuntime, id);\n\n// Set data\nsharedMap.set(\"counter\", 1);\n\n// Listen for changes\nsharedMap.on(\"valueChanged\", (changed) => {\n  const newValue = sharedMap.get(\"counter\");\n  console.log(\"Updated count:\", newValue);\n});</pre>\n\n  <h3 style='color:#15803d;'>✅ Best Practices</h3>\n  <ul>\n    <li>💡 Use Fluid for apps that need low-latency shared state</li>\n    <li>🧩 Build modular components using Fluid’s shared objects</li>\n    <li>🌍 Host Fluid services on Azure Relay or a custom server</li>\n    <li>🔐 Ensure access control and session handling in multi-user environments</li>\n    <li>🧪 Test sync scenarios with multiple clients to ensure consistency</li>\n  </ul>\n\n  <h3 style='color:#22c55e;'>📚 Learn More</h3>\n  <ul>\n    <li><a href='https://fluidframework.com' target='_blank' style='color:#4ade80;'>Official Fluid Framework Website</a></li>\n    <li><a href='https://github.com/microsoft/FluidFramework' target='_blank' style='color:#4ade80;'>GitHub Repository</a></li>\n  </ul>\n</div>"
            },
          ]
        },
        {
          id: "frameworks-client",
          title: "Frameworks",
          description: "<div style='font-family:sans-serif; line-height:1.6; background:#fef9c3; padding:2rem; border-radius:1rem; border:2px solid #facc15; box-shadow:0 6px 20px rgba(234,179,8,0.2)'>\n  <h2 style='color:#ca8a04;'>🖥️ Client-side Frameworks in .NET Ecosystem</h2>\n  <p>\n    In the .NET ecosystem, client-side frameworks enable developers to build rich, interactive, and performant user interfaces for web, desktop, and mobile platforms using C#, Razor, and .NET runtime capabilities. These frameworks allow developers to avoid JavaScript for most front-end needs, while still building modern UIs.\n  </p>\n\n  <h3 style='color:#92400e;'>Key Frameworks:</h3>\n  <ul>\n    <li><strong>Blazor WebAssembly:</strong> Run .NET code directly in the browser using WebAssembly. Great for SPA apps with offline support.</li>\n    <li><strong>Blazor Server:</strong> UI events are handled on the server via SignalR. Suitable for enterprise intranet apps with constant connectivity.</li>\n    <li><strong>.NET MAUI (Blazor Hybrid):</strong> Enables building native apps for iOS, Android, macOS, and Windows using Blazor UI components.</li>\n    <li><strong>Uno Platform:</strong> A cross-platform framework that brings UWP and WinUI apps to WebAssembly, Android, iOS, macOS, and Linux.</li>\n    <li><strong>Avalonia UI:</strong> XAML-based UI framework for cross-platform desktop apps in .NET. Supports Linux, Windows, macOS.</li>\n  </ul>\n\n  <h3 style='color:#92400e;'>Benefits</h3>\n  <ul>\n    <li>🧠 Full-stack development with C#</li>\n    <li>🔄 Code sharing between client and server</li>\n    <li>📦 Built-in support for DI, routing, state, and component model</li>\n    <li>🛠️ Access to modern dev tools and .NET ecosystem</li>\n  </ul>\n\n  <h3 style='color:#92400e;'>When to Use Client-side Frameworks</h3>\n  <ul>\n    <li>✅ Building SPA-style apps without relying heavily on JavaScript</li>\n    <li>✅ Need for a shared codebase between desktop, mobile, and web</li>\n    <li>✅ Targeting modern platforms and maximizing developer productivity in C#</li>\n  </ul>\n\n  <p>Client-side frameworks like Blazor and MAUI are central to the future of cross-platform .NET development. They empower teams to ship UIs faster and more reliably using a consistent tech stack.</p>\n</div>"
          ,
          type: "must-know",
          children: [
            {
              id: "blazor",
              title: "Blazor",
              description: `<div style=\"font-family:sans-serif; line-height:1.6; background:#e0f2fe; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)\">\n  <h2 style=\"color:#2563eb;\">⚡ Blazor: Modern Web UI Framework with .NET</h2>\n  <p>\n    <strong>Blazor</strong> is a Microsoft framework for building interactive client-side web UIs using C# instead of JavaScript. It runs either on the server or directly in the browser via WebAssembly.\n  </p>\n\n  <h3 style=\"color:#1e40af;\">Hosting Models</h3>\n  <ul>\n    <li><strong>Blazor Server:</strong> UI logic executes on the server. The UI updates are sent over a SignalR connection, making the app lightweight but requiring a persistent connection.</li>\n    <li><strong>Blazor WebAssembly (WASM):</strong> The app runs fully in the browser via WebAssembly. This allows offline support and reduces server load but increases initial load size.</li>\n  </ul>\n\n  <h3 style=\"color:#2563eb;\">Why Choose Blazor?</h3>\n  <ul>\n    <li>✅ Write full-stack applications in C# with reusable components</li>\n    <li>✅ Share code and libraries between client and server</li>\n    <li>✅ Use Razor syntax for clean UI definitions</li>\n    <li>✅ Leverage .NET ecosystem and tooling, including dependency injection</li>\n    <li>✅ Supports progressive web apps (PWAs) and native integration via .NET MAUI</li>\n  </ul>\n\n  <h3 style=\"color:#1e40af;\">Simple Counter Component Example</h3>\n  <pre style=\"background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;\">\n@page \"/counter\"\n\n&lt;h3&gt;Counter Example&lt;/h3&gt;\n\n&lt;p&gt;Current count: @count&lt;/p&gt;\n\n&lt;button class=\\\"btn btn-primary\\\" @onclick=\\\"IncrementCount\\\"&gt;Click me&lt;/button&gt;\n\n@code {\n    private int count = 0;\n\n    private void IncrementCount()\n    {\n        count++;\n    }\n}\n  </pre>\n\n  <h3 style=\"color:#2563eb;\">Data Binding and Events</h3>\n  <p>Blazor supports two-way data binding and event handling seamlessly:</p>\n  <pre style=\"background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;\">\n@page \"/input-example\"\n\n&lt;h3&gt;Input Binding Example&lt;/h3&gt;\n\n&lt;input @bind=\\\"name\\\" placeholder=\\\"Enter your name\\\" /&gt;\n\n&lt;p&gt;Hello, @name!&lt;/p&gt;\n\n@code {\n    private string name = string.Empty;\n}\n  </pre>\n\n  <h3 style=\"color:#1e40af;\">Dependency Injection (DI) Example</h3>\n  <p>Inject services easily into components:</p>\n  <pre style=\"background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;\">\n@inject WeatherService WeatherService\n\n&lt;h3&gt;Weather Forecast&lt;/h3&gt;\n\n@if (forecasts == null)\n{\n    &lt;p&gt;Loading...&lt;/p&gt;\n}\nelse\n{\n    &lt;ul&gt;\n    @foreach (var forecast in forecasts)\n    {\n        &lt;li&gt;@forecast.Date.ToShortDateString(): @forecast.TemperatureC °C&lt;/li&gt;\n    }\n    &lt;/ul&gt;\n}\n\n@code {\n    private WeatherForecast[] forecasts;\n\n    protected override async Task OnInitializedAsync()\n    {\n        forecasts = await WeatherService.GetForecastAsync(DateTime.Now);\n    }\n}\n  </pre>\n\n  <h3 style=\"color:#2563eb;\">Real-World Use Cases</h3>\n  <ul>\n    <li>Enterprise dashboards with complex UI logic in C#</li>\n    <li>Internal apps where sharing code between client/server saves effort</li>\n    <li>Building PWAs for offline-first user experiences</li>\n    <li>Integrating with existing .NET backends seamlessly</li>\n  </ul>\n\n  <h3 style=\"color:#1e40af;\">Best Practices</h3>\n  <ul>\n    <li>📝 Organize components to maximize reuse and maintainability</li>\n    <li>⚡ Use asynchronous programming patterns to keep UI responsive</li>\n    <li>🔐 Secure data and API calls carefully, especially for Blazor WASM</li>\n    <li>📦 Lazy-load assemblies to improve initial app load times</li>\n    <li>🔄 Take advantage of state management patterns (e.g. Fluxor, Redux)</li>\n  </ul>\n\n  <h3 style=\"color:#2563eb;\">Learn More</h3>\n  <ul>\n    <li><a href=\"https://learn.microsoft.com/en-us/aspnet/core/blazor\" target=\"_blank\" style=\"color:#3b82f6;\">Official Microsoft Blazor Documentation</a></li>\n    <li><a href=\"https://blazor-university.com/\" target=\"_blank\" style=\"color:#3b82f6;\">Blazor University - Comprehensive Tutorials</a></li>\n  </ul>\n</div>`,
              type: "must-know",
              children: [
                {
                  id: "blazor-wasm", title: "Blazor WASM", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #0ea5e9; box-shadow:0 6px 20px rgba(14,165,233,0.2)">
  <h2 style="color:#0284c7;">🚀 Blazor WebAssembly (WASM): Full Client-Side .NET Apps in the Browser</h2>

  <p>
    <strong>Blazor WebAssembly</strong> is a client-side hosting model for Blazor apps where the entire app, including the .NET runtime, runs in the browser via WebAssembly.
    This approach enables building rich interactive web applications fully in C# without needing server-side rendering or JavaScript frameworks.
  </p>

  <h3 style="color:#0369a1;">💡 Why Use Blazor WebAssembly?</h3>
  <ul>
    <li>🖥️ Runs entirely in the browser, eliminating server round trips for UI updates</li>
    <li>📦 Deploy as static files, simplifying hosting and scaling</li>
    <li>🔗 Full control over offline scenarios and client-side logic</li>
    <li>🔄 Share code and components with Blazor Server or .NET MAUI apps</li>
    <li>🚀 Great for progressive web apps (PWAs) with offline capabilities</li>
  </ul>

  <h3 style="color:#0369a1;">💻 Example: Basic Blazor WebAssembly Setup</h3>
  <pre style="background:#bae6fd; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// In Program.cs (Blazor WASM)
var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");

// Register services, for example HttpClient
builder.Services.AddScoped(sp =&gt; new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

await builder.Build().RunAsync();

// index.html
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
    &lt;title&gt;Blazor WASM App&lt;/title&gt;
    &lt;base href="/" /&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="app"&gt;&lt;/div&gt;
    &lt;script src="_framework/blazor.webassembly.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
  </pre>

  <h3 style="color:#0369a1;">💡 Real-World Use Cases</h3>
  <ul>
    <li>📱 Progressive Web Apps needing offline support and rich client UI</li>
    <li>🌍 Public-facing websites wanting client-side interactivity with minimal server load</li>
    <li>🔒 Apps where data privacy demands client-side processing</li>
    <li>📦 Static sites hosted on CDN or serverless platforms</li>
  </ul>

  <h3 style="color:#0369a1;">✅ Best Practices</h3>
  <ul>
    <li>⚡ Optimize app size and startup time with lazy loading and trimming</li>
    <li>🔐 Use secure API endpoints and authentication tokens for backend communication</li>
    <li>📡 Handle network failures gracefully and provide offline fallback UI</li>
    <li>🧩 Reuse components and share code with other .NET projects</li>
    <li>🔄 Monitor performance and memory usage in client browsers</li>
  </ul>

  <h3 style="color:#0369a1;">📚 Learn More</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models#blazor-webassembly" target="_blank" style="color:#0284c7;">Blazor WebAssembly Hosting Model Docs</a></li>
    <li><a href="https://docs.microsoft.com/en-us/aspnet/core/blazor/tutorials/build-a-blazor-webassembly-app" target="_blank" style="color:#0284c7;">Official Blazor WASM Tutorial</a></li>
    <li><a href="https://devblogs.microsoft.com/aspnet/blazor-webassembly-3-2-release/" target="_blank" style="color:#0284c7;">Microsoft Blog on Blazor WASM</a></li>
  </ul>
</div>
` },
                {
                  id: "blazor-server-side", title: "Blazor Server-Side", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#e0f2fe; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)">
  <h2 style="color:#1e40af;">⚡ Blazor Server-Side: Interactive Web UI with Real-Time Server Rendering</h2>

  <p>
    <strong>Blazor Server-Side</strong> is a hosting model for Blazor applications where the UI logic runs on the server while the client acts as a thin UI renderer.
    User interactions are sent over a real-time <code>SignalR</code> connection, enabling rich interactivity with minimal client-side processing.
  </p>

  <h3 style="color:#2563eb;">💡 Why Choose Blazor Server-Side?</h3>
  <ul>
    <li>🚀 Fast initial load times since UI is rendered on the server</li>
    <li>🌐 Full .NET runtime and server resources available for processing</li>
    <li>🔄 Automatic UI updates via SignalR without full page reloads</li>
    <li>🔒 Centralized security and data access on the server</li>
    <li>⚙️ Easier to debug and deploy compared to WebAssembly apps</li>
  </ul>

  <h3 style="color:#2563eb;">💻 Example: Basic Blazor Server Setup</h3>
  <pre style="background:#bfdbfe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// In Program.cs (minimal hosting model)
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();

var app = builder.Build();

app.MapBlazorHub();
app.MapFallbackToPage("/_Host");

app.Run();

// In _Host.cshtml (main host page)
@page "/"
@namespace YourApp.Pages
@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers
@{
    Layout = null;
}

<!DOCTYPE html>
<html lang="en">
<head>
    &lt;meta charset="utf-8" /&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
    &lt;title&gt;Blazor Server App&lt;/title&gt;
    &lt;link href="css/site.css" rel="stylesheet" /&gt;
</head>
<body>
    &lt;app&gt;
        &lt;component type="typeof(App)" render-mode="ServerPrerendered" /&gt;
    &lt;/app&gt;

    &lt;script src="_framework/blazor.server.js"&gt;&lt;/script&gt;
</body>
</html>
  </pre>

  <h3 style="color:#2563eb;">💡 Real-World Use Cases</h3>
  <ul>
    <li>📊 Enterprise internal apps with complex UI and heavy server-side logic</li>
    <li>🔐 Apps requiring centralized control and sensitive data on server only</li>
    <li>⚡ Real-time dashboards and monitoring systems with live updates</li>
    <li>🛠️ Applications where SEO or fast initial load matters</li>
  </ul>

  <h3 style="color:#2563eb;">✅ Best Practices</h3>
  <ul>
    <li>🔄 Use circuit management to handle user disconnects gracefully</li>
    <li>📈 Scale SignalR connections properly for high concurrency</li>
    <li>🔒 Secure SignalR endpoints and authenticate users rigorously</li>
    <li>⚙️ Optimize component rendering to reduce unnecessary UI updates</li>
    <li>🛠️ Use dependency injection to separate UI and data logic cleanly</li>
  </ul>

  <h3 style="color:#2563eb;">📚 Learn More</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models#blazor-server" target="_blank" style="color:#1e40af;">Blazor Server Hosting Model Docs</a></li>
    <li><a href="https://docs.microsoft.com/en-us/aspnet/core/blazor/tutorials/server-side" target="_blank" style="color:#1e40af;">Official Blazor Server Tutorial</a></li>
    <li><a href="https://devblogs.microsoft.com/aspnet/blazor-server-apps-in-asp-net-core-3-0/" target="_blank" style="color:#1e40af;">Microsoft Blog on Blazor Server</a></li>
  </ul>
</div>
` },
                {
                  id: "blazor-hybrid", title: "Blazor Hybrid", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#e8f0fe; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)">
  <h2 style="color:#1e40af;">🌐 Blazor Hybrid: Combining Web UI with Native Apps</h2>

  <p>
    <strong>Blazor Hybrid</strong> is an innovative approach that allows developers to build native desktop and mobile applications using <code>Blazor</code> components rendered with native UI controls.
    It leverages the power of web technologies (Razor, C#, .NET) but hosts them inside native application containers like <code>.NET MAUI</code> or Windows desktop apps.
  </p>

  <h3 style="color:#2563eb;">💡 Why Blazor Hybrid?</h3>
  <ul>
    <li>⚡ Build rich, interactive UI with Blazor’s component model and C# instead of JavaScript</li>
    <li>📱 Run your web UI directly inside native apps on Windows, macOS, Android, and iOS</li>
    <li>🔄 Share code and UI components between web, mobile, and desktop projects</li>
    <li>🔧 Access native device APIs and platform features seamlessly alongside web UI</li>
    <li>🌍 Use existing Blazor skills to create cross-platform apps without rewriting UI in platform-specific languages</li>
  </ul>

  <h3 style="color:#2563eb;">💻 Example: Basic Blazor Hybrid App Structure</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// In .NET MAUI App.xaml.cs
public partial class App : Application
{
    public App()
    {
        InitializeComponent();

        MainPage = new MainPage();
    }
}

// In MainPage.xaml.cs
public partial class MainPage : ContentPage
{
    public MainPage()
    {
        InitializeComponent();

        var blazorWebView = new BlazorWebView
        {
            HostPage = "wwwroot/index.html",
            RootComponents =
            {
                new RootComponent { Selector = "#app", ComponentType = typeof(Main) }
            }
        };

        Content = blazorWebView;
    }
}
  </pre>

  <h3 style="color:#2563eb;">💡 Real-World Use Cases</h3>
  <ul>
    <li>📊 Enterprise apps needing rich data visualization with reusable Blazor components</li>
    <li>📱 Mobile apps that share UI and business logic with a Blazor web app</li>
    <li>🔧 Internal tools requiring quick UI iteration while leveraging native OS features</li>
    <li>🛠️ Cross-platform utilities combining native performance with web flexibility</li>
  </ul>

  <h3 style="color:#2563eb;">✅ Best Practices</h3>
  <ul>
    <li>🔄 Maximize component reuse between Blazor Web and Blazor Hybrid apps</li>
    <li>📱 Properly handle lifecycle events in native containers for resource management</li>
    <li>🛠️ Use Dependency Injection to abstract platform-specific services</li>
    <li>⚡ Take advantage of Hot Reload for faster development cycles</li>
    <li>🔍 Profile performance both on the web and native side, especially for UI rendering</li>
  </ul>

  <h3 style="color:#2563eb;">📚 Learn More</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/dotnet/maui/blazor/" target="_blank" style="color:#1e40af;">Microsoft .NET MAUI Blazor Hybrid Docs</a></li>
    <li><a href="https://github.com/dotnet/maui-samples/tree/main/BlazorHybrid" target="_blank" style="color:#1e40af;">Official Blazor Hybrid Sample Repository</a></li>
    <li><a href="https://devblogs.microsoft.com/dotnet/category/blazor/" target="_blank" style="color:#1e40af;">Blazor Blog Posts by Microsoft</a></li>
  </ul>
</div>
` },
              ]
            },

            {
              id: "net-maui", title: ".NET MAUI", type: "good-to-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#e0f7fa; padding:2rem; border-radius:1rem; border:2px solid #00796b; box-shadow:0 6px 20px rgba(0,121,107,0.2)">
  <h2 style="color:#004d40;">📱 .NET MAUI (Multi-platform App UI): Cross-Platform App Development Simplified</h2>
  
  <p>
    <strong>.NET MAUI</strong> is a modern, open-source framework developed by Microsoft for building native, cross-platform applications using a single shared codebase in C# and XAML.
    It targets Android, iOS, macOS, and Windows, allowing developers to create rich, performant apps with native UI controls and platform-specific features, without duplicating effort.
  </p>

  <h3 style="color:#00796b;">💡 Why Choose .NET MAUI?</h3>
  <ul>
    <li>🧩 Single project structure supports multiple platforms, simplifying development and deployment</li>
    <li>🎨 Access to native UI controls and platform APIs, ensuring great user experience on every device</li>
    <li>⚡ Performance close to native apps thanks to ahead-of-time (AOT) compilation on iOS and Android</li>
    <li>🔄 Hot Reload for XAML and C# code, speeding up development by enabling real-time UI and logic updates</li>
    <li>🛠️ Full integration with .NET ecosystem and tooling (Visual Studio, NuGet packages, etc.)</li>
    <li>🌍 Support for MVU (Model-View-Update), MVVM, and other modern architectural patterns</li>
  </ul>

  <h3 style="color:#00796b;">💻 Example: Simple Cross-Platform Counter App</h3>
  <pre style="background:#b2dfdb; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using Microsoft.Maui.Controls;

public class CounterPage : ContentPage
{
    int count = 0;
    Label countLabel;

    public CounterPage()
    {
        countLabel = new Label
        {
            Text = "You clicked 0 times",
            FontSize = 24,
            HorizontalOptions = LayoutOptions.Center
        };

        var button = new Button
        {
            Text = "Click me",
            HorizontalOptions = LayoutOptions.Center
        };
        button.Clicked += OnButtonClicked;

        Content = new StackLayout
        {
            VerticalOptions = LayoutOptions.Center,
            Children = { countLabel, button }
        };
    }

    void OnButtonClicked(object sender, EventArgs e)
    {
        count++;
        countLabel.Text = $"You clicked {count} times";
    }
}
  </pre>

  <h3 style="color:#00796b;">💡 Real-World Use Cases</h3>
  <ul>
    <li>📱 Enterprise apps requiring deployment to Android, iOS, Windows, and macOS without separate teams</li>
    <li>🛒 E-commerce apps with consistent UI/UX across devices</li>
    <li>🧭 Apps needing deep platform integration (GPS, camera, sensors) with unified business logic</li>
    <li>🎮 Lightweight games or interactive apps leveraging native graphics performance</li>
  </ul>

  <h3 style="color:#00796b;">✅ Best Practices</h3>
  <ul>
    <li>🔧 Use MVVM architecture with data binding for maintainable, testable code</li>
    <li>📱 Test UI and platform-specific behaviors on all target devices regularly</li>
    <li>📦 Optimize app size by trimming unused assemblies and resources</li>
    <li>⚡ Use Hot Reload and Live Visual Tree to accelerate UI development</li>
    <li>🛠️ Leverage platform-specific APIs via dependency injection or partial classes to handle special cases</li>
    <li>🔍 Profile performance on each platform to detect and fix bottlenecks early</li>
  </ul>

  <h3 style="color:#00796b;">📚 Learn More</h3>
  <ul>
    <li><a href="https://learn.microsoft.com/en-us/dotnet/maui/" target="_blank" style="color:#004d40;">Official .NET MAUI Documentation</a></li>
    <li><a href="https://github.com/dotnet/maui" target="_blank" style="color:#004d40;">.NET MAUI GitHub Repository</a></li>
    <li><a href="https://devblogs.microsoft.com/dotnet/tag/maui/" target="_blank" style="color:#004d40;">Microsoft .NET MAUI Blog Posts</a></li>
  </ul>
</div>
` },
          ]
        },
      ]
    },
    {
      id: "good-to-know-libraries",
      title: "Good to Know Libraries",
      description: `<div style="font-family:sans-serif; background:#f0f9ff; padding:1.5rem; border-radius:1rem; border:1px solid #38bdf8; box-shadow:0 4px 12px rgba(56, 189, 248, 0.15)">
  <h2 style="color:#0ea5e9">📚 Good to Know Libraries</h2>
  <p>These are high-quality, battle-tested .NET libraries that aren't strictly required but can significantly improve your development workflow and application robustness.</p>
  
  <h3 style="color:#38bdf8">🛠 Included Libraries</h3>
  <ul style="list-style:disc; padding-left:1.2rem">
    <li><strong>Scalar:</strong> Value object encapsulation for domain-driven design.</li>
    <li><strong>MediatR:</strong> Simple in-process messaging, great for CQRS and clean architecture.</li>
    <li><strong>FluentValidation:</strong> Fluent API for expressive and testable model validations.</li>
    <li><strong>Polly:</strong> Resilience and transient-fault handling library (retry, circuit breaker, etc).</li>
    <li><strong>Benchmark.NET:</strong> Powerful benchmarking library to measure and compare .NET code performance.</li>
    <li><strong>DistributedLock:</strong> Provides distributed locking primitives using Redis, SQL Server, etc.</li>
    <li><strong>Nuke.Build:</strong> C#-based build automation tool (alternative to YAML CI/CD config).</li>
    <li><strong>Marten:</strong> Event store and document database library for PostgreSQL in .NET.</li>
  </ul>

  <h3 style="color:#0ea5e9">📌 Why This Matters</h3>
  <ul>
    <li>🔧 Solve cross-cutting concerns cleanly</li>
    <li>⚡ Reduce boilerplate and improve maintainability</li>
    <li>📈 Make your application more resilient and performant</li>
    <li>🚀 Empower advanced development workflows</li>
  </ul>

  <h3 style="color:#0ea5e9">🧠 When to Use</h3>
  <ul>
    <li>✅ You need expressive validation without bloating your models</li>
    <li>✅ Your domain logic demands separation of concerns (CQRS/MediatR)</li>
    <li>✅ You want production-grade error recovery (Polly)</li>
    <li>✅ You’re building complex or large systems needing automation (Nuke, Marten, etc)</li>
  </ul>
</div>
`,
      direction: "left",
      children: [
        {
          id: "scalar", title: "Scalar", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#eef6ff; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)">
  <h2 style="color:#2563eb;">🤖 OpenAI Integration with <code>openai-net</code></h2>
  <p>
    <strong>openai-net</strong> is a powerful .NET client library for integrating OpenAI services like GPT models into your .NET applications easily.
  </p>

  <h3 style="color:#1e40af;">💡 Why Use openai-net?</h3>
  <ul>
    <li>🔗 Simple and fluent API design tailored for .NET developers</li>
    <li>⚡ Supports GPT-4, GPT-3.5 Turbo, embeddings, and more</li>
    <li>🔒 Built-in support for API key management and security</li>
    <li>🚀 Asynchronous programming with Task-based methods</li>
    <li>🔧 Flexible customization of requests and response handling</li>
  </ul>

  <h3 style="color:#1e40af;">💻 Example: Basic Chat Completion</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using OpenAI.Net;
using OpenAI.Net.Models;

var client = new OpenAIClient("your_api_key_here");
var response = await client.Chat.Completions.CreateAsync(new ChatCompletionCreateRequest
{
    Model = "gpt-4",
    Messages = new[]
    {
        new ChatMessage { Role = "user", Content = "Hello, how can I use openai-net?" }
    }
});

Console.WriteLine(response.Choices[0].Message.Content);
  </pre>

  <h3 style="color:#1e40af;">✅ Best Practices</h3>
  <ul>
    <li>🔐 Store your OpenAI API key securely using environment variables or secure vaults</li>
    <li>⚡ Use async methods to keep your app responsive</li>
    <li>🔍 Handle API errors and rate limits gracefully</li>
    <li>🧪 Test prompts thoroughly to optimize cost and relevance</li>
    <li>📚 Consult official documentation and stay updated on new features</li>
  </ul>

  <h3 style="color:#2563eb;">📚 Learn More</h3>
  <ul>
    <li><a href="https://github.com/OkGoDoIt/OpenAI-API-dotnet" target="_blank" style="color:#3b82f6;">openai-net GitHub Repository</a></li>
    <li><a href="https://platform.openai.com/docs" target="_blank" style="color:#3b82f6;">OpenAI API Documentation</a></li>
  </ul>
</div>
` },
        {
          id: "mediatr", title: "MediatR", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#e0f2fe; padding:2rem; border-radius:1rem; border:2px solid #0284c7; box-shadow:0 6px 20px rgba(2,132,199,0.2)">
  <h2 style="color:#0369a1;">📦 MediatR - Simplifying In-Process Messaging in .NET</h2>
  <p>
    <strong>MediatR</strong> is a popular, lightweight library for .NET that implements the Mediator design pattern. It helps decouple application components by enabling in-process messaging — sending requests and publishing notifications — without explicit dependencies between sender and receiver.
  </p>

  <h3 style="color:#0284c7;">💡 Why Use MediatR?</h3>
  <ul>
    <li>🔗 Decouples components to improve maintainability and testability</li>
    <li>🎯 Supports Command, Query, and Notification patterns cleanly</li>
    <li>⚡ Simple, intuitive API for sending messages and handling responses</li>
    <li>📚 Facilitates implementing CQRS (Command Query Responsibility Segregation) architectures</li>
    <li>🛠️ Works seamlessly with dependency injection containers</li>
  </ul>

  <h3 style="color:#0284c7;">🚀 Core Concepts</h3>
  <ul>
    <li><strong>Requests:</strong> Commands or Queries that expect a response (via <code>IRequest&lt;TResponse&gt;</code> or <code>IRequest</code>).</li>
    <li><strong>Handlers:</strong> Classes implementing <code>IRequestHandler&lt;TRequest, TResponse&gt;</code> to process requests.</li>
    <li><strong>Notifications:</strong> Events published to multiple handlers (via <code>INotification</code> and <code>INotificationHandler&lt;TNotification&gt;</code>).</li>
    <li><strong>Pipeline Behaviors:</strong> Middleware-like components that intercept requests for cross-cutting concerns (logging, validation, etc.).</li>
  </ul>

  <h3 style="color:#0284c7;">💻 Example: Simple Command & Handler</h3>
  <pre style="background:#bfdbfe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// Command
public record CreateOrderCommand(string ProductId, int Quantity) : IRequest&lt;bool&gt;;

// Handler
public class CreateOrderHandler : IRequestHandler&lt;CreateOrderCommand, bool&gt;
{
    public async Task&lt;bool&gt; Handle(CreateOrderCommand request, CancellationToken cancellationToken)
    {
        // Business logic to create an order
        Console.WriteLine($"Creating order for product {request.ProductId} with quantity {request.Quantity}");
        await Task.Delay(500); // simulate async work
        return true;
    }
}
  </pre>

  <h3 style="color:#0284c7;">💡 Sending Requests and Handling Responses</h3>
  <pre style="background:#bfdbfe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
var mediator = serviceProvider.GetRequiredService&lt;IMediator&gt;();

bool result = await mediator.Send(new CreateOrderCommand("ABC123", 10));
Console.WriteLine($"Order created: {result}");
  </pre>

  <h3 style="color:#0284c7;">🔔 Notifications Example</h3>
  <pre style="background:#bfdbfe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// Notification
public record OrderCreatedNotification(string OrderId) : INotification;

// Handler
public class SendConfirmationEmailHandler : INotificationHandler&lt;OrderCreatedNotification&gt;
{
    public Task Handle(OrderCreatedNotification notification, CancellationToken cancellationToken)
    {
        Console.WriteLine($"Sending confirmation email for order {notification.OrderId}");
        return Task.CompletedTask;
    }
}
  </pre>

  <h3 style="color:#0284c7;">✅ Best Practices</h3>
  <ul>
    <li>📏 Keep handlers focused on single responsibilities</li>
    <li>🔧 Use Pipeline Behaviors for cross-cutting concerns like logging, validation, and retry policies</li>
    <li>🧪 Write unit tests for handlers separately, mocking <code>IMediator</code> in your business logic</li>
    <li>⚙️ Register MediatR services and handlers with your DI container in startup</li>
    <li>📚 Use meaningful request and notification names to clearly indicate intent</li>
  </ul>

  <h3 style="color:#0284c7;">📚 Learn More</h3>
  <ul>
    <li><a href="https://github.com/jbogard/MediatR" target="_blank" style="color:#2563eb;">MediatR GitHub Repository</a></li>
    <li><a href="https://jimmybogard.com/mediatr-what-and-why/" target="_blank" style="color:#2563eb;">Introductory Article by Jimmy Bogard</a></li>
    <li><a href="https://docs.microsoft.com/en-us/aspnet/core/fundamentals/mediator" target="_blank" style="color:#2563eb;">Microsoft Docs on Mediator Pattern</a></li>
  </ul>
</div>
` },
        {
          id: "fluentvalidation", title: "FluentValidation", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #3b82f6; box-shadow:0 6px 20px rgba(59,130,246,0.2)">
  <h2 style="color:#1e40af;">🔍 FluentValidation - Elegant Validation Library for .NET</h2>
  <p>
    <strong>FluentValidation</strong> is a popular .NET library designed to help you define strongly-typed validation rules for your objects using a fluent interface. It promotes separation of concerns by moving validation logic outside your models or controllers, making code cleaner and more maintainable.
  </p>

  <h3 style="color:#2563eb;">💡 Why Use FluentValidation?</h3>
  <ul>
    <li>🧩 Clean, readable validation rules with a fluent API</li>
    <li>🔄 Supports complex conditional validation and custom rules</li>
    <li>🎯 Integrates smoothly with ASP.NET Core, MVC, and Blazor</li>
    <li>🚀 Supports async validation</li>
    <li>🛠️ Extensible with custom validators and localization support</li>
  </ul>

  <h3 style="color:#2563eb;">💻 Example: Validating a User Registration Model</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
public class UserRegistration
{
    public string Username { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
}

public class UserRegistrationValidator : AbstractValidator&lt;UserRegistration&gt;
{
    public UserRegistrationValidator()
    {
        RuleFor(x =&gt; x.Username)
            .NotEmpty().WithMessage("Username is required.")
            .MinimumLength(3).WithMessage("Username must be at least 3 characters long.");

        RuleFor(x =&gt; x.Email)
            .NotEmpty().WithMessage("Email is required.")
            .EmailAddress().WithMessage("Invalid email format.");

        RuleFor(x =&gt; x.Password)
            .NotEmpty().WithMessage("Password is required.")
            .MinimumLength(6).WithMessage("Password must be at least 6 characters.");
    }
}
  </pre>

  <h3 style="color:#2563eb;">💡 How to Use in ASP.NET Core</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
// In Program.cs or Startup.cs
builder.Services.AddControllers()
    .AddFluentValidation(fv =&gt; fv.RegisterValidatorsFromAssemblyContaining&lt;UserRegistrationValidator&gt;());

// In a controller action
[HttpPost]
public IActionResult Register(UserRegistration model)
{
    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);
    }
    // Proceed with registration
    return Ok();
}
  </pre>

  <h3 style="color:#2563eb;">✅ Best Practices</h3>
  <ul>
    <li>📏 Keep validation logic separate from business logic</li>
    <li>🔧 Use custom validators for reusable validation logic</li>
    <li>🌐 Leverage localization features for multilingual error messages</li>
    <li>⚡ Utilize async rules for validations requiring database or external calls</li>
    <li>🧪 Write unit tests for validators to ensure correctness</li>
  </ul>

  <h3 style="color:#2563eb;">📚 Learn More</h3>
  <ul>
    <li><a href="https://fluentvalidation.net/" target="_blank" style="color:#3b82f6;">Official FluentValidation Documentation</a></li>
    <li><a href="https://github.com/FluentValidation/FluentValidation" target="_blank" style="color:#3b82f6;">GitHub Repository</a></li>
  </ul>
</div>
` },
        {
          id: "polly", title: "Polly", type: "good-to-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #2563eb; box-shadow:0 6px 20px rgba(37,99,235,0.2)">
  <h2 style="color:#1e40af;">🛡️ Polly - Resilience and Transient-Fault Handling Library for .NET</h2>
  <p>
    <strong>Polly</strong> is a powerful .NET library that helps you build resilient applications by providing sophisticated policies to handle transient faults such as network failures, timeouts, and exceptions. Polly enables you to express retry, circuit breaker, timeout, bulkhead isolation, and fallback policies in a fluent, thread-safe way.
  </p>

  <h3 style="color:#2563eb;">💡 Why Use Polly?</h3>
  <ul>
    <li>🔄 Automatically retry failed operations with customizable retry logic</li>
    <li>⛔ Circuit Breaker prevents system overload by stopping calls to failing components</li>
    <li>⏳ Timeout policies to prevent hanging operations</li>
    <li>🚪 Fallbacks to provide alternative results when all else fails</li>
    <li>🛡️ Bulkhead Isolation to limit concurrent executions and improve system stability</li>
    <li>⚙️ Composable policies to combine multiple resilience strategies</li>
  </ul>

  <h3 style="color:#2563eb;">💻 Example: Retry Policy with Exponential Backoff</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using Polly;
using Polly.Retry;

AsyncRetryPolicy retryPolicy = Policy
    .Handle&lt;HttpRequestException&gt;()
    .WaitAndRetryAsync(
        retryCount: 3,
        sleepDurationProvider: attempt =&gt; TimeSpan.FromSeconds(Math.Pow(2, attempt)),
        onRetry: (exception, timespan, context) =&gt;
        {
            Console.WriteLine($"Retrying due to: {exception.Message}. Waiting {timespan.TotalSeconds}s before next retry.");
        });

await retryPolicy.ExecuteAsync(async () =&gt;
{
    // Your HTTP call or any operation that might fail transiently
    await httpClient.GetAsync("https://example.com/api/data");
});
  </pre>

  <h3 style="color:#2563eb;">💡 Combining Policies: Circuit Breaker + Retry</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
var circuitBreakerPolicy = Policy
    .Handle&lt;HttpRequestException&gt;()
    .CircuitBreakerAsync(
        handledEventsAllowedBeforeBreaking: 2,
        durationOfBreak: TimeSpan.FromSeconds(30),
        onBreak: (ex, breakDelay) =&gt; Console.WriteLine($"Circuit broken! Break duration: {breakDelay.TotalSeconds}s"),
        onReset: () =&gt; Console.WriteLine("Circuit reset."));

var combinedPolicy = Policy.WrapAsync(retryPolicy, circuitBreakerPolicy);

await combinedPolicy.ExecuteAsync(async () =&gt;
{
    await httpClient.GetAsync("https://example.com/api/data");
});
  </pre>

  <h3 style="color:#2563eb;">✅ Best Practices</h3>
  <ul>
    <li>🛠️ Tailor retry counts and backoff strategies based on your system’s characteristics</li>
    <li>📊 Monitor circuit breaker states to detect system health issues early</li>
    <li>⚡ Use fallback policies to gracefully degrade functionality</li>
    <li>🧪 Test your policies to ensure they behave correctly under failure conditions</li>
    <li>📚 Combine multiple policies to cover different failure scenarios</li>
  </ul>

  <h3 style="color:#2563eb;">📚 Learn More</h3>
  <ul>
    <li><a href="https://github.com/App-vNext/Polly" target="_blank" style="color:#3b82f6;">Polly GitHub Repository</a></li>
    <li><a href="https://github.com/App-vNext/Polly/wiki" target="_blank" style="color:#3b82f6;">Polly Wiki & Documentation</a></li>
  </ul>
</div>
` },
        {
          id: "benchmark-net", title: "Benchmark.NET", type: "good-to-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f9fafb; padding:2rem; border-radius:1rem; border:2px solid #2563eb; box-shadow:0 6px 20px rgba(37,99,235,0.2)">
  <h2 style="color:#1e40af;">⚡ BenchmarkDotNet - Powerful Benchmarking Library for .NET</h2>
  <p>
    <strong>BenchmarkDotNet</strong> is a popular, open-source .NET library designed to help developers measure and analyze the performance of their code with precision and ease. It automates benchmarking tasks like running tests multiple times, warming up, and providing detailed reports with statistics.
  </p>

  <h3 style="color:#2563eb;">💡 Why Use BenchmarkDotNet?</h3>
  <ul>
    <li>📊 Accurate, reliable, and reproducible performance measurements</li>
    <li>🛠️ Easy to use with minimal setup</li>
    <li>⚙️ Supports benchmarking synchronous and asynchronous methods</li>
    <li>📈 Generates detailed reports including mean, median, standard deviation, and more</li>
    <li>🔄 Supports different runtimes and platforms (e.g., .NET Framework, .NET Core, Mono)</li>
  </ul>

  <h3 style="color:#2563eb;">💻 Example: Benchmarking a Simple String Concatenation</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;

public class StringConcatBenchmark
{
    private string str1 = "Hello";
    private string str2 = "World";

    [Benchmark]
    public string UsingPlusOperator() =&gt;
        str1 + " " + str2;

    [Benchmark]
    public string UsingStringConcat() =&gt;
        string.Concat(str1, " ", str2);

    [Benchmark]
    public string UsingStringBuilder()
    {
        var sb = new System.Text.StringBuilder();
        sb.Append(str1);
        sb.Append(" ");
        sb.Append(str2);
        return sb.ToString();
    }
}

class Program
{
    static void Main(string[] args)
    {
        BenchmarkRunner.Run&lt;StringConcatBenchmark&gt;();
    }
}
  </pre>

  <h3 style="color:#2563eb;">💡 Real-World Scenario</h3>
  <p>
    When optimizing critical sections of your application — for example, data processing loops, serialization routines, or algorithm implementations — BenchmarkDotNet helps you objectively compare different approaches and choose the best-performing solution.
  </p>

  <h3 style="color:#2563eb;">✅ Best Practices</h3>
  <ul>
    <li>🔧 Isolate benchmarks from unrelated code to get precise measurements</li>
    <li>⏱️ Use warmup iterations to avoid JIT and cold start biases</li>
    <li>📋 Run benchmarks on a stable machine to avoid interference</li>
    <li>📊 Analyze multiple metrics like mean time, error, and memory allocations</li>
    <li>🔄 Compare multiple implementations side-by-side to make informed optimization decisions</li>
  </ul>

  <h3 style="color:#2563eb;">📚 Learn More</h3>
  <ul>
    <li><a href="https://benchmarkdotnet.org/" target="_blank" style="color:#3b82f6;">Official BenchmarkDotNet Website</a></li>
    <li><a href="https://github.com/dotnet/BenchmarkDotNet" target="_blank" style="color:#3b82f6;">GitHub Repository</a></li>
  </ul>
</div>
` },
        {
          id: "distributedlock", title: "DistributedLock", type: "good-to-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f9fafb; padding:2rem; border-radius:1rem; border:2px solid #2563eb; box-shadow:0 6px 20px rgba(37,99,235,0.2)">
  <h2 style="color:#1e40af;">🔒 Distributed Locking in .NET</h2>
  <p>
    Distributed locks help coordinate access to shared resources in distributed systems, preventing race conditions and ensuring consistency when multiple processes or services try to access or modify the same resource concurrently.
  </p>

  <h3 style="color:#2563eb;">💡 Why Use Distributed Locks?</h3>
  <ul>
    <li>🔗 Coordinate resource access across multiple nodes or instances</li>
    <li>⏳ Prevent race conditions and data corruption</li>
    <li>⚙️ Manage critical sections in distributed applications like microservices, cloud apps, or multi-server setups</li>
  </ul>

  <h3 style="color:#2563eb;">💻 Example: Using <code>RedLock.net</code> with Redis</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using RedLockNet.SERedis;
using RedLockNet.SERedis.Configuration;
using StackExchange.Redis;

var redisEndpoints = new List&lt;RedLockEndPoint&gt;()
{
    new RedLockEndPoint { EndPoint = DnsEndPoint.Parse("127.0.0.1:6379") }
};

using var redisMultiplexer = ConnectionMultiplexer.Connect("127.0.0.1:6379");
using var redlockFactory = RedLockFactory.Create(redisMultiplexer);

TimeSpan expiry = TimeSpan.FromSeconds(30);

using (var redLock = redlockFactory.CreateLock("my-resource-key", expiry))
{
    if (redLock.IsAcquired)
    {
        // Critical section: safely access shared resource here
        Console.WriteLine("Lock acquired! Performing work...");
    }
    else
    {
        Console.WriteLine("Could not acquire the lock.");
    }
}
  </pre>

  <h3 style="color:#2563eb;">💡 Real-World Use Cases</h3>
  <ul>
    <li>🔄 Preventing duplicate job execution in distributed background processing</li>
    <li>📦 Coordinating inventory updates in e-commerce platforms with multiple servers</li>
    <li>🗂️ Ensuring only one instance processes a batch of data at a time</li>
  </ul>

  <h3 style="color:#2563eb;">✅ Best Practices</h3>
  <ul>
    <li>⏳ Use appropriate lock expiry to avoid deadlocks</li>
    <li>🧪 Test failure scenarios (e.g., process crashes) to ensure lock release</li>
    <li>🔐 Use consensus-based algorithms (like RedLock) if using multiple Redis nodes for higher reliability</li>
    <li>📊 Monitor lock contention and adjust your system to minimize bottlenecks</li>
  </ul>

  <h3 style="color:#2563eb;">📚 Learn More</h3>
  <ul>
    <li><a href="https://github.com/michaeldye/RedLock.net" target="_blank" style="color:#3b82f6;">RedLock.net GitHub Repository</a></li>
    <li><a href="https://redis.io/topics/distlock" target="_blank" style="color:#3b82f6;">Redis Distributed Locking Documentation</a></li>
  </ul>
</div>
` },
        {
          id: "nuke-build", title: "Nuke.Build", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #0284c7; box-shadow:0 6px 20px rgba(2,132,199,0.2)">
  <h2 style="color:#0369a1;">🛠️ Nuke Build: Modern Build Automation for .NET</h2>
  <p>
    <strong>NUKE</strong> is a cross-platform build automation system for .NET projects that lets you write build scripts in C# instead of traditional XML or DSLs. It integrates seamlessly with the .NET ecosystem, enabling powerful, type-safe, and maintainable build pipelines.
  </p>

  <h3 style="color:#0284c7;">💡 Why Choose NUKE?</h3>
  <ul>
    <li>⚡ Write build logic in C# with full IDE support (IntelliSense, debugging)</li>
    <li>🔄 Cross-platform support (Windows, Linux, macOS)</li>
    <li>🔗 Strong integration with MSBuild, .NET CLI, Git, Docker, and more</li>
    <li>🛡️ Type-safe pipelines with dependencies and parallel execution</li>
    <li>📦 Easy to extend with custom tasks and reusable components</li>
  </ul>

  <h3 style="color:#0284c7;">💻 Example: Basic Build Script</h3>
  <pre style="background:#dbf4ff; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using Nuke.Common;
using Nuke.Common.Tools.DotNet;
using static Nuke.Common.Tools.DotNet.DotNetTasks;

class Build : NukeBuild
{
    public static int Main() => Execute&lt;Build&gt;(x =&gt; x.Compile);

    Target Clean =&gt; _ =&gt; _
        .Executes(() =&gt; 
        {
            DotNetClean();
        });

    Target Restore =&gt; _ =&gt; _
        .Executes(() =&gt; 
        {
            DotNetRestore();
        });

    Target Compile =&gt; _ =&gt; _
        .DependsOn(Restore)
        .Executes(() =&gt; 
        {
            DotNetBuild();
        });
}
  </pre>

  <h3 style="color:#0284c7;">💡 Real-World Scenarios</h3>
  <ul>
    <li>🔄 Automate complex multi-project builds with dependencies</li>
    <li>🚀 Integrate deployment, testing, packaging, and versioning in build pipelines</li>
    <li>🤝 Use in CI/CD pipelines for consistent, maintainable automation</li>
  </ul>

  <h3 style="color:#0284c7;">✅ Best Practices</h3>
  <ul>
    <li>📝 Keep build logic clear and modular with well-defined targets</li>
    <li>⚙️ Leverage NUKE’s strong typing and IDE support to avoid errors</li>
    <li>🔄 Use caching and incremental builds where possible to speed up pipelines</li>
    <li>🛡️ Isolate external tool calls and manage environment variables carefully</li>
  </ul>

  <h3 style="color:#0284c7;">📚 Learn More</h3>
  <ul>
    <li><a href="https://nuke.build/" target="_blank" style="color:#0284c7;">Official NUKE Build Website</a></li>
    <li><a href="https://github.com/nuke-build/nuke" target="_blank" style="color:#0284c7;">NUKE GitHub Repository</a></li>
    <li><a href="https://nuke.build/docs/" target="_blank" style="color:#0284c7;">NUKE Documentation</a></li>
  </ul>
</div>
` },
        {
          id: "marten", title: "Marten", type: "optional", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0f9ff; padding:2rem; border-radius:1rem; border:2px solid #2563eb; box-shadow:0 6px 20px rgba(37,99,235,0.2)">
  <h2 style="color:#1e40af;">📦 Marten: Modern .NET Document Database & Event Store on PostgreSQL</h2>
  <p>
    <strong>Marten</strong> is a powerful .NET library that turns PostgreSQL into a document database and event store, providing a flexible, scalable, and developer-friendly way to work with JSON documents and event sourcing in your .NET applications.
  </p>

  <h3 style="color:#2563eb;">💡 Why Marten?</h3>
  <ul>
    <li>🗄️ Stores JSON documents natively in PostgreSQL using advanced JSONB capabilities</li>
    <li>🔄 Built-in support for Event Sourcing and CQRS patterns</li>
    <li>⚡ High performance with ACID transactions and indexing</li>
    <li>🔧 Supports LINQ queries over JSON documents</li>
    <li>🧩 Works as a document database or event store, reducing infrastructure complexity</li>
  </ul>

  <h3 style="color:#2563eb;">💻 Example: Basic Setup and Usage</h3>
  <pre style="background:#dbeafe; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
using Marten;
using System;

// Define a document model
public class User
{
    public Guid Id { get; set; }
    public string Name { get; set; }
}

// Configure Marten with PostgreSQL connection
var store = DocumentStore.For(options =>
{
    options.Connection("Host=localhost;Database=mydb;Username=postgres;Password=secret");
    options.AutoCreateSchemaObjects = AutoCreate.All;
});

// Use Marten session to store and query documents
using (var session = store.LightweightSession())
{
    var user = new User { Id = Guid.NewGuid(), Name = "Alice" };
    session.Store(user);
    session.SaveChanges();

    // Query example
    var users = session.Query<User>().Where(u => u.Name == "Alice").ToList();
    Console.WriteLine($"Found {users.Count} user(s) named Alice");
}
  </pre>

  <h3 style="color:#2563eb;">💡 Real-World Use Cases</h3>
  <ul>
    <li>📄 Document storage for flexible, evolving schemas without complex migrations</li>
    <li>🕰️ Event Sourcing systems to track state changes over time</li>
    <li>📈 Building CQRS architectures with clear separation of read/write models</li>
    <li>⚡ High-performance applications requiring ACID compliance and PostgreSQL reliability</li>
  </ul>

  <h3 style="color:#2563eb;">✅ Best Practices</h3>
  <ul>
    <li>🛠️ Use explicit document IDs (GUIDs) for consistency and scalability</li>
    <li>📊 Leverage PostgreSQL JSONB indexing for optimized queries</li>
    <li>🔄 Regularly review schema auto-creation settings for production safety</li>
    <li>🧪 Write integration tests to validate document persistence and queries</li>
  </ul>

  <h3 style="color:#2563eb;">📚 Learn More</h3>
  <ul>
    <li><a href="https://martendb.io" target="_blank" style="color:#3b82f6;">Official Marten Website</a></li>
    <li><a href="https://github.com/JasperFx/marten" target="_blank" style="color:#3b82f6;">Marten GitHub Repository</a></li>
    <li><a href="https://martendb.io/documentation/" target="_blank" style="color:#3b82f6;">Marten Documentation</a></li>
  </ul>
</div>
` },
      ]
    },
    {
      id: "ai-llms",
      title: "AI / LLMs",
      "type": "good-to-know",
      direction: "right",
      description: `<div style='font-family:sans-serif;line-height:1.6;background:#fdfdfd;padding:1.5rem;border-radius:1rem;border:1px solid #e5e7eb;box-shadow:0 4px 12px rgba(0,0,0,0.05)'>
  <h2 style='color:#3b82f6'>🧠 AI / LLMs (Large Language Models)</h2>
  <p><strong>Large Language Models (LLMs)</strong> are advanced AI systems trained on massive datasets of text to understand, generate, and reason with human language. They power tools like ChatGPT, GitHub Copilot, and other AI assistants.</p>

  <h3 style='color:#10b981'>🔍 Core Capabilities</h3>
  <ul style='list-style:disc;padding-left:1.2rem'>
    <li><strong>Text generation:</strong> Compose human-like responses, summaries, or stories.</li>
    <li><strong>Question answering:</strong> Respond intelligently to user queries.</li>
    <li><strong>Translation:</strong> Translate between languages accurately.</li>
    <li><strong>Code generation:</strong> Generate and explain code in multiple languages.</li>
    <li><strong>Conversation:</strong> Maintain context-aware, interactive dialogue.</li>
  </ul>

  <h3 style='color:#f59e0b'>⚙️ How LLMs Work</h3>
  <ul style='list-style:circle;padding-left:1.2rem'>
    <li>Based on transformer architecture (e.g., GPT, BERT, T5).</li>
    <li>Trained on public and licensed internet data at scale.</li>
    <li>Use attention mechanisms to model context and semantics.</li>
    <li>Predict the next token in a sequence to generate language.</li>
  </ul>

  <h3 style='color:#8b5cf6'>📌 Popular LLMs</h3>
  <ul style='list-style:square;padding-left:1.2rem'>
    <li><strong>GPT-4 / GPT-3.5 (OpenAI):</strong> ChatGPT, coding, content generation.</li>
    <li><strong>Claude (Anthropic):</strong> AI assistant with safety alignment.</li>
    <li><strong>Gemini (Google):</strong> Multimodal model for text and image.</li>
    <li><strong>Mistral / Mixtral:</strong> Open-source performant LLMs.</li>
    <li><strong>LLaMA 3 (Meta):</strong> Foundation models for research and commercial use.</li>
    <li><strong>Command R / Cohere / Falcon:</strong> Open alternatives for developers.</li>
  </ul>

  <h3 style='color:#ef4444'>⚠️ Challenges & Considerations</h3>
  <ul>
    <li><strong>Hallucinations:</strong> May produce incorrect or made-up information.</li>
    <li><strong>Bias:</strong> Reflect societal or training data biases.</li>
    <li><strong>Cost:</strong> Large models require significant compute resources.</li>
    <li><strong>Data privacy:</strong> Need careful handling in sensitive environments.</li>
  </ul>

  <h3 style='color:#0ea5e9'>📚 Learn More</h3>
  <ul>
    <li><a href='https://platform.openai.com/docs' target='_blank' style='color:#3b82f6'>OpenAI Platform Documentation</a></li>
    <li><a href='https://huggingface.co/models' target='_blank' style='color:#3b82f6'>HuggingFace Model Hub</a></li>
    <li><a href='https://anthropic.com/index/claude' target='_blank' style='color:#3b82f6'>Anthropic Claude</a></li>
    <li><a href='https://ai.meta.com/llama/' target='_blank' style='color:#3b82f6'>Meta’s LLaMA</a></li>
    <li><a href='https://github.com/mistralai' target='_blank' style='color:#3b82f6'>Mistral AI GitHub</a></li>
  </ul>
</div>
`,
      children: [
        {
          id: "semantic-kernel", title: "Semantic Kernel", type: "must-know",
          description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:2rem; border-radius:1rem; border:2px solid #22c55e; box-shadow:0 6px 20px rgba(34,197,94,0.2)">
  <h2 style="color:#15803d;">🧠 Semantic Kernel: Building Intelligent AI Workflows in .NET</h2>

  <p>
    <strong>Semantic Kernel (SK)</strong> is Microsoft’s open-source orchestration SDK that enables developers to combine LLMs like OpenAI, Azure OpenAI, and HuggingFace with conventional programming logic in .NET, JavaScript, or Python. It brings together <strong>semantic reasoning</strong> (natural language prompts) with <strong>symbolic execution</strong> (traditional code), creating powerful AI-first apps.
  </p>

  <h3 style="color:#15803d;">🔍 Key Architectural Concepts</h3>
  <ul>
    <li>🧩 <strong>Skills:</strong> A logical group of functions (semantic or native) encapsulated for reuse.</li>
    <li>🧠 <strong>Semantic Functions:</strong> Prompt templates interpreted by an LLM (e.g., summarizing text).</li>
    <li>⚙️ <strong>Native Functions:</strong> Regular C# methods that are registered into the kernel.</li>
    <li>📚 <strong>Memory:</strong> Short-term and long-term context handling via vector stores (e.g., Redis, Qdrant, ChromaDB).</li>
    <li>🗓️ <strong>Planner:</strong> Uses natural language goals to create and execute function chains automatically.</li>
    <li>📜 <strong>Prompt Templates:</strong> Use Handlebars-like syntax for dynamic and structured prompting.</li>
  </ul>

  <h3 style="color:#15803d;">🚀 Real-World Scenario: Customer Support Bot</h3>
  <p>Imagine you're building an AI support assistant that takes user input, summarizes it, logs the conversation, and fetches context from prior conversations.</p>

  <pre style="background:#dcfce7; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
var builder = Kernel.CreateBuilder();
builder.AddOpenAIChatCompletion("gpt-4", "your-api-key");
builder.Plugins.AddFromType&lt;LoggerSkill&gt;();
builder.Services.AddMemoryStore(new VolatileMemoryStore()); // In-memory or vector DB

var kernel = builder.Build();

// Define semantic summarization function
var summarize = kernel.CreateFunctionFromPrompt(
  "Summarize this user message:\n{{$input}}");

// Invoke flow
var input = "Hi, my order hasn't arrived yet.";
var result = await kernel.InvokeAsync(summarize, new() { ["input"] = input });

// Log the summary with a native skill
await kernel.InvokeAsync("LoggerSkill.Log", new() { ["message"] = result.GetValue&lt;string&gt;() });

// Store in memory for later context
await kernel.Memory.SaveReferenceAsync("chat", "user1", input);
  </pre>

  <h3 style="color:#15803d;">✅ Best Practices</h3>
  <ul>
    <li>📦 Group related functions into <strong>skills</strong> to maintain clean separation of concerns.</li>
    <li>🧠 Use <strong>semantic memory</strong> for persistent context in long-running conversations.</li>
    <li>🧪 Regularly <strong>test prompts</strong> using built-in tools or tools like PromptFlow.</li>
    <li>🔁 Use <code>Planner</code> module to allow users to express goals in plain English and convert them to actions.</li>
    <li>🔒 Protect LLM tokens and endpoints using <strong>secure secrets management</strong>.</li>
    <li>📈 Log and monitor <strong>token usage</strong> and <strong>latency</strong> per function to optimize prompt engineering.</li>
    <li>🔄 Prefer combining semantic + native functions in workflows for maximum reliability and explainability.</li>
    <li>📚 Keep <strong>prompt templates</strong> modular, comment-rich, and version-controlled.</li>
  </ul>

  <h3 style="color:#15803d;">💼 Advanced Use Cases</h3>
  <ul>
    <li>🧾 AI Copilot in enterprise dashboards</li>
    <li>📅 Natural language scheduling assistant</li>
    <li>📧 Email summarization & classification</li>
    <li>📊 Report generation from unstructured input</li>
    <li>🤖 Multi-agent collaboration with autonomous planning</li>
  </ul>

  <h3 style="color:#15803d;">📚 Learn More</h3>
  <ul>
    <li><a href="https://github.com/microsoft/semantic-kernel" target="_blank" style="color:#22c55e;">Semantic Kernel on GitHub</a></li>
    <li><a href="https://learn.microsoft.com/en-us/semantic-kernel/" target="_blank" style="color:#22c55e;">Microsoft Docs</a></li>
    <li><a href="https://aka.ms/sk-samples" target="_blank" style="color:#22c55e;">Sample Scenarios</a></li>
  </ul>
</div>`
        },
        {
          id: "openai-net", title: "OpenAI .NET", type: "must-know", description: `<div style="font-family:sans-serif; line-height:1.6; background:#f0fdf4; padding:2rem; border-radius:1rem; border:2px solid #22c55e; box-shadow:0 6px 20px rgba(34,197,94,0.2)">
  <h2 style="color:#15803d;">🤖 OpenAI Integration with .NET using openai-net</h2>
  <p>
    <strong>openai-net</strong> is a popular .NET SDK that provides seamless access to OpenAI’s APIs (ChatGPT, DALL·E, Whisper, Embeddings, etc.). It helps developers build AI-powered apps in C# with minimal effort and strong type support.
  </p>

  <h3 style="color:#166534;">💡 Why Use openai-net?</h3>
  <ul>
    <li>✅ Easy and idiomatic C# access to OpenAI APIs</li>
    <li>📦 Built-in support for Chat, Completions, Images, Embeddings, Files, Moderations, and more</li>
    <li>🛠️ Works with ASP.NET Core, Console apps, Azure Functions</li>
    <li>🔐 Supports secure API key configuration (via Secret Manager, Azure Key Vault, etc.)</li>
  </ul>

  <h3 style="color:#166534;">🚀 Getting Started</h3>
  <pre style="background:#dcfce7; padding:1rem; border-radius:0.75rem; overflow-x:auto; font-family:monospace;">
dotnet add package OpenAI

// In your service
var api = new OpenAIClient("your-api-key");

var chat = await api.ChatEndpoint.GetCompletionAsync(new ChatRequest()
{
    Messages = new List&lt;ChatMessage&gt;()
    {
        ChatMessage.FromSystem("You are a helpful assistant."),
        ChatMessage.FromUser("What is the capital of France?")
    }
});

Console.WriteLine(chat.FirstChoice.Message.Content);
// Output: Paris
  </pre>

  <h3 style="color:#166534;">🔍 Real-World Use Cases</h3>
  <ul>
    <li>🧠 Smart FAQ bots or assistants inside ASP.NET MVC/Blazor apps</li>
    <li>📄 Auto-summarization for enterprise documents</li>
    <li>🖼️ Image generation tools using DALL·E for content platforms</li>
    <li>🎧 Transcription services using Whisper API</li>
    <li>🔍 Semantic search with Embeddings + Vector DBs</li>
  </ul>

  <h3 style="color:#15803d;">✅ Best Practices</h3>
  <ul>
    <li>🔒 Never hardcode API keys — use environment variables or secret managers</li>
    <li>⏱️ Use streaming responses for real-time experiences (especially in chat)</li>
    <li>📊 Log token usage & latency for cost monitoring</li>
    <li>🧪 Retry on rate limits using Polly or Resilience Pipelines</li>
    <li>💬 Use system messages to control tone, style, and persona of the assistant</li>
  </ul>

  <h3 style="color:#166534;">📚 Learn More</h3>
  <ul>
    <li><a href="https://github.com/betalgo/openai" target="_blank" style="color:#22c55e;">openai-net GitHub Repository</a></li>
    <li><a href="https://platform.openai.com/docs" target="_blank" style="color:#22c55e;">OpenAI API Documentation</a></li>
  </ul>
</div>
`  },
      ]
    },
    {
      id: "keep-learning",
      title: "Keep Learning :)",
      description: `<div style="
  font-family: 'Segoe UI', sans-serif;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  color: #f8fafc;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  margin-top: 3rem;
">

  <h2 style="font-size: 1.75rem; margin-bottom: 1rem; color: #7dd3fc;">
    📖 Timeless Developer Quotes
  </h2>

  <ul style="list-style-type: none; padding-left: 0; line-height: 1.8; font-size: 1.05rem;">
    <li style="margin-bottom: 1rem;">
      <em style="color:#e0f2fe">"Clean code always looks like it was written by someone who cares."</em><br />
      — <strong style="color:#bae6fd;">Robert C. Martin</strong>, <span style="color:#94a3b8;">Clean Code</span>
    </li>
    <li style="margin-bottom: 1rem;">
      <em style="color:#e0f2fe">"Programs must be written for people to read, and only incidentally for machines to execute."</em><br />
      — <strong style="color:#bae6fd;">Harold Abelson</strong>, <span style="color:#94a3b8;">SICP</span>
    </li>
    <li style="margin-bottom: 1rem;">
      <em style="color:#e0f2fe">"The only way to go fast is to go well."</em><br />
      — <strong style="color:#bae6fd;">Robert C. Martin</strong>
    </li>
    <li style="margin-bottom: 1rem;">
      <em style="color:#e0f2fe">"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."</em><br />
      — <strong style="color:#bae6fd;">Martin Fowler</strong>
    </li>
    <li style="margin-bottom: 1rem;">
      <em style="color:#e0f2fe">"Simplicity is prerequisite for reliability."</em><br />
      — <strong style="color:#bae6fd;">Edsger W. Dijkstra</strong>
    </li>
    <li style="margin-bottom: 1rem;">
      <em style="color:#e0f2fe">"Before software can be reusable, it first has to be usable."</em><br />
      — <strong style="color:#bae6fd;">Ralph Johnson</strong>
    </li>
  </ul>

  <p style="font-style: italic; color: #94a3b8; margin-top: 1.5rem;">
    💬 *Read code like poetry. Write it like you're leaving a legacy.*
  </p>
</div>


`,
      direction: "right",
    }
  ]
};