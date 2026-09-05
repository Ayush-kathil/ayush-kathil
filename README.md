<a name="top"></a>

<!--======== HERO BANNER ========-->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./public/hero-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="./public/hero-light.svg">
  <img alt="System Architecture Visualization" src="./public/hero-dark.svg" width="100%">
</picture>

<!--======== GRADIENT DIVIDER ========-->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<!--======== ANIMATED TYPING HEADER ========-->
<div align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=30&duration=4000&pause=1000&color=58A6FF&center=true&vCenter=true&multiline=true&repeat=true&width=800&height=100&lines=Systems+%26+Software+Engineer;Distributed+Systems+%C2%B7+Open+Source+%C2%B7+ML+Infrastructure" alt="Typing SVG" />
  </a>
</div>

<br>

<div align="center">
  <samp>
    I engineer backend systems and data pipelines, focusing on deterministic performance,<br>
    memory safety, and fault tolerance within large-scale distributed architectures.
  </samp>
</div>

<br>

<!--======== GRADIENT DIVIDER ========-->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<!--======== CONTRIBUTION SNAKE ========-->
<div align="center">
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset="https://raw.githubusercontent.com/Ayush-kathil/Ayush-kathil/output/github-snake-dark.svg?v=3"
    />
    <source
      media="(prefers-color-scheme: light)"
      srcset="https://raw.githubusercontent.com/Ayush-kathil/Ayush-kathil/output/github-snake.svg?v=3"
    />
    <img
      alt="GitHub contribution snake"
      src="https://raw.githubusercontent.com/Ayush-kathil/Ayush-kathil/output/github-snake.svg?v=3"
      width="100%"
    />
  </picture>
</div>

<br>

<!--======== GITHUB STATS ========-->
<div id="user-content-toc">
  <ul align="center">
    <summary><h2 style="display: inline-block; font-family: Inter, sans-serif"><samp>GITHUB ANALYTICS</samp></h2></summary>
  </ul>
</div>

<br>

<p align="center">
  <img width="49%" src="https://github-readme-stats-sigma-five.vercel.app/api?username=Ayush-kathil&show_icons=true&theme=transparent&hide_border=true&include_all_commits=true" alt="GitHub Stats" />
  <img width="49%" src="https://streak-stats.demolab.com?user=Ayush-kathil&theme=transparent&hide_border=true" alt="GitHub Streak" />
</p>

<br>

<p align="center">
  <img width="42%" src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=Ayush-kathil&layout=compact&theme=transparent&hide_border=true&langs_count=8" alt="Top Languages" />
</p>

<br>

<!--======== GRADIENT DIVIDER ========-->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<!--======== TECH STACK ========-->
<div id="user-content-toc">
  <ul align="center">
    <summary><h2 style="display: inline-block; font-family: Inter, sans-serif"><samp>SYSTEMS & ARCHITECTURE STACK</samp></h2></summary>
  </ul>
</div>

<br>

<div align="center">

<h4><samp>Languages & Runtimes</samp></h4>
<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=go,python,typescript,java,cpp,bash&theme=dark" alt="Languages" />
</a>

<br><br>

<h4><samp>Frameworks & Application Layer</samp></h4>
<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=nextjs,react,nodejs,fastapi,flask,tailwind&theme=dark" alt="Frameworks" />
</a>

<br><br>

<h4><samp>Data Persistence & Messaging</samp></h4>
<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=postgres,mongodb,redis,supabase,firebase,kafka&theme=dark" alt="Databases" />
</a>

<br><br>

<h4><samp>Infrastructure & DevOps</samp></h4>
<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=kubernetes,docker,aws,linux,git,githubactions&theme=dark" alt="Infrastructure" />
</a>

<br><br>

<h4><samp>ML & Data Science</samp></h4>
<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=pytorch,tensorflow,opencv,anaconda&theme=dark" alt="ML Stack" />
</a>

<br><br>

<h4><samp>Development Environment</samp></h4>
<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=vscode,idea,postman,figma,vercel,netlify&theme=dark" alt="Dev Tools" />
</a>

</div>

<br>

<!--======== GRADIENT DIVIDER ========-->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<!--======== UPSTREAM CONTRIBUTIONS ========-->
<div id="user-content-toc">
  <ul align="center">
    <summary><h2 style="display: inline-block; font-family: Inter, sans-serif"><samp>UPSTREAM OPEN SOURCE CONTRIBUTIONS</samp></h2></summary>
  </ul>
</div>

<br>

<h3><samp>KUBEFLOW PIPELINES</samp> &nbsp; <img src="https://skillicons.dev/icons?i=go&theme=dark" height="22" alt="Go"> <img src="https://skillicons.dev/icons?i=kubernetes&theme=dark" height="22" alt="Kubernetes"> <img src="https://skillicons.dev/icons?i=python&theme=dark" height="22" alt="Python"></h3>
<p><i>Enterprise-grade Machine Learning Workflow Orchestration &mdash; CNCF Graduated Project</i></p>

<ul>
  <li><b>Memory Management & OOM Mitigation:</b> Engineered backend database payload defenses within the Go API server. Optimized <code>ListRuns</code> deserialization by dynamically stripping multi-megabyte pipeline execution manifests, drastically reducing database over-fetching and preventing node-level memory exhaustion (OOM panics) under high concurrency.</li>
  <li><b>Security Vulnerability Patching (CVE Prevention):</b> Architected mitigations for critical denial-of-service (DoS) attack vectors within the metrics parsing infrastructure, explicitly patching tarball traversal exploits and zip bomb vulnerabilities during artifact ingestion.</li>
  <li><b>Unit Test Engineering:</b> Rewrote and verified test assertions in <code>run_store_test.go</code> to ensure strict payload contract compliance after the OOM defense refactor.</li>
</ul>

<details>
<summary><b>View Architecture Trade-offs & Post-Mortem</b></summary>
<br>
<blockquote>
  <b>Post-Mortem Note:</b> The OOM mitigation required tracing nil pointer panics across the <code>api_converter.go</code> layer and overriding the Squirrel SQL query builder to inject mocked payload schemas. This safely bypassed expensive multi-megabyte JSON allocations while maintaining strict REST API contract compatibility with downstream orchestrators. <i>Trade-off: Increased code complexity in the data access layer to guarantee stable heap memory limits under production scale.</i>
</blockquote>
</details>

<br>

<h3><samp>KUBEFLOW KATIB</samp> &nbsp; <img src="https://skillicons.dev/icons?i=kubernetes&theme=dark" height="22" alt="Kubernetes"></h3>
<p><i>Automated Machine Learning Infrastructure &mdash; Hyperparameter Tuning</i></p>

<ul>
  <li>Contributed to infrastructure stability by resolving validation pipeline bugs and enhancing test coverage for hyperparameter tuning controllers.</li>
</ul>

<br>

<!--======== GRADIENT DIVIDER ========-->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<!--======== HIGH-PERFORMANCE PROJECTS ========-->
<div id="user-content-toc">
  <ul align="center">
    <summary><h2 style="display: inline-block; font-family: Inter, sans-serif"><samp>HIGH-PERFORMANCE IMPLEMENTATIONS</samp></h2></summary>
  </ul>
</div>

<br>

<!--======== PINNED REPOS ========-->
<p align="center">
  <a href="https://github.com/Ayush-kathil/cura-assistant-RAG">
    <img src="https://github-readme-stats-sigma-five.vercel.app/api/pin/?username=Ayush-kathil&repo=cura-assistant-RAG&theme=transparent&hide_border=true" alt="CURA" />
  </a>
  <a href="https://github.com/Ayush-kathil/SFORA-Smart-File-Organizer">
    <img src="https://github-readme-stats-sigma-five.vercel.app/api/pin/?username=Ayush-kathil&repo=SFORA-Smart-File-Organizer&theme=transparent&hide_border=true" alt="SFORA" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/Ayush-kathil/Cyberia---Detecting-Fake-Banking-APKs">
    <img src="https://github-readme-stats-sigma-five.vercel.app/api/pin/?username=Ayush-kathil&repo=Cyberia---Detecting-Fake-Banking-APKs&theme=transparent&hide_border=true" alt="Cyberia" />
  </a>
  <a href="https://github.com/Ayush-kathil/resume-builder">
    <img src="https://github-readme-stats-sigma-five.vercel.app/api/pin/?username=Ayush-kathil&repo=resume-builder&theme=transparent&hide_border=true" alt="Resume Builder" />
  </a>
</p>

<br>

<!--======== PROJECT DEEP DIVES ========-->

<h3><samp>01 / CURA</samp> &nbsp; <img src="https://skillicons.dev/icons?i=nextjs&theme=dark" height="22" alt="Next.js"> <img src="https://skillicons.dev/icons?i=python&theme=dark" height="22" alt="Python"> <img src="https://skillicons.dev/icons?i=postgres&theme=dark" height="22" alt="PostgreSQL"> <img src="https://skillicons.dev/icons?i=supabase&theme=dark" height="22" alt="Supabase"></h3>
<p><i>Stateful RAG Architecture with Self-Correcting Generation Pipelines</i></p>

<ul>
  <li><b>State Machine Architecture:</b> Designed a self-correcting generation pipeline utilizing LangGraph to handle hallucination detection, forcing cyclic query rewrites until context validation passes.</li>
  <li><b>Database Indexing Strategy:</b> Implemented a hybrid search engine combining exact keyword BM25 matching with HNSW semantic vector search via <code>pgvector</code>, minimizing nearest-neighbor lookup latency.</li>
  <li><b>Memory Management:</b> Integrated context compression algorithms to strictly manage token limits and optimize language model throughput before re-ranking payloads.</li>
</ul>

<details>
<summary><b>Architecture Trade-offs</b></summary>
<br>
<blockquote>
  Chose complex cyclic state machines over linear chains to guarantee deterministic output accuracy, intentionally trading a slight increase in P99 latency for strict zero-hallucination verification on every query cycle.
</blockquote>
</details>

<br>

<h3><samp>02 / SFORA</samp> &nbsp; <img src="https://skillicons.dev/icons?i=java&theme=dark" height="22" alt="Java"></h3>
<p><i>High-Performance File Automation with O(1) Memory Guarantees</i></p>

<ul>
  <li><b>Complexity:</b> Engineered an O(1) stream buffering deduplication engine utilizing native <code>java.nio</code>. Implemented SHA-256 cryptographic hashing on localized byte chunks to guarantee memory safety regardless of target file size.</li>
  <li><b>Concurrency & State:</b> Built a transactional, state-aware undo mechanism that logs localized file operations, allowing atomic rollbacks of large-scale directory mutations.</li>
  <li><b>Zero Dependencies:</b> Architected strictly using standard library Java 17 to bypass JVM bloat and external build dependencies.</li>
</ul>

<br>

<h3><samp>03 / CYBERIA</samp> &nbsp; <img src="https://skillicons.dev/icons?i=python&theme=dark" height="22" alt="Python"> <img src="https://skillicons.dev/icons?i=opencv&theme=dark" height="22" alt="OpenCV"> <img src="https://skillicons.dev/icons?i=tensorflow&theme=dark" height="22" alt="TensorFlow"></h3>
<p><i>Applied ML Threat Analysis & Banking APK Forgery Detection</i></p>

<ul>
  <li><b>Multi-modal Pipeline:</b> Built an ingestion engine capable of parsing Android Application Packages (APK) in real-time alongside visual steganography analysis.</li>
  <li><b>Computer Vision:</b> Implemented OpenCV-based pixel anomaly detection for UI forgery identification on banking application surfaces.</li>
</ul>

<br>

<h3><samp>04 / RESUME-AI</samp> &nbsp; <img src="https://skillicons.dev/icons?i=nextjs&theme=dark" height="22" alt="Next.js"> <img src="https://skillicons.dev/icons?i=mongodb&theme=dark" height="22" alt="MongoDB"> <img src="https://skillicons.dev/icons?i=tailwind&theme=dark" height="22" alt="Tailwind"></h3>
<p><i>Full-Stack AI Resume Builder with Real-Time Preview Engine</i></p>

<ul>
  <li><b>State Management:</b> Built with Zustand for zero-lag real-time preview rendering alongside generative AI for content rewriting.</li>
  <li><b>Auth & Security:</b> Integrated NextAuth.js with MongoDB backend and role-based access control for admin analytics.</li>
</ul>

<br>

<!--======== GRADIENT DIVIDER ========-->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<!--======== ACHIEVEMENTS ========-->
<div id="user-content-toc">
  <ul align="center">
    <summary><h2 style="display: inline-block; font-family: Inter, sans-serif"><samp>VERIFIED ACHIEVEMENTS</samp></h2></summary>
  </ul>
</div>

<br>

<ul>
  <li><code>[2026]</code> &nbsp; <b>Software Engineering Intern</b> &mdash; HackerRank &nbsp; <img src="https://img.shields.io/badge/HackerRank-00EA64?style=flat&logo=hackerrank&logoColor=white" alt="HackerRank" height="18"></li>
  <li><code>[2026]</code> &nbsp; <b>Open Source Contributor</b> &mdash; GSSoC (DevPath) &nbsp; <img src="https://img.shields.io/badge/Open_Source-F05032?style=flat&logo=git&logoColor=white" alt="OSS" height="18"></li>
  <li><code>[2026]</code> &nbsp; <b>Published Indian Patent Application</b> &mdash; VIT Bhopal University</li>
  <li><code>[2025]</code> &nbsp; <b>Google Cloud Generative AI Certification</b> &nbsp; <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=flat&logo=googlecloud&logoColor=white" alt="GCP" height="18"></li>
  <li><code>[2025]</code> &nbsp; <b>Applied Machine Learning in Python</b> &mdash; University of Michigan &nbsp; <img src="https://img.shields.io/badge/Coursera-0056D2?style=flat&logo=coursera&logoColor=white" alt="Coursera" height="18"></li>
</ul>

<br>

<!--======== ENGINEERING LOGS ========-->
<details>
<summary><b><samp>ENGINEERING LOGS & RFCs</samp></b></summary>
<br>
<ul>
  <li><code>[2026-09]</code> &nbsp; <b>Architecture Review:</b> Mitigating API Server OOM Panics in Go (<a href="https://github.com/kubeflow/pipelines">kubeflow/pipelines</a>)</li>
  <li><code>[2026-08]</code> &nbsp; <b>System Design:</b> Cyclic State Machines for Hallucination Detection in RAG Pipelines</li>
  <li><code>[2026-07]</code> &nbsp; <b>Security Patch:</b> Preventing Tarball Traversal & Zip Bomb Attacks in CI/CD Artifacts</li>
  <li><code>[2026-06]</code> &nbsp; <b>Performance:</b> O(1) Memory-Safe Stream Deduplication with SHA-256 Hashing</li>
</ul>
</details>

<br>

<!--======== GRADIENT DIVIDER ========-->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<!--======== CONNECT ========-->
<div id="user-content-toc">
  <ul align="center">
    <summary><h2 style="display: inline-block; font-family: Inter, sans-serif"><samp>CONNECT</samp></h2></summary>
  </ul>
</div>

<br>

<div align="center">
  <a href="https://linkedin.com/in/ayushkathil">
    <img src="https://skillicons.dev/icons?i=linkedin&theme=dark" height="50" alt="LinkedIn" />
  </a> &nbsp;&nbsp;
  <a href="https://github.com/Ayush-kathil">
    <img src="https://skillicons.dev/icons?i=github&theme=dark" height="50" alt="GitHub" />
  </a> &nbsp;&nbsp;
  <a href="mailto:kathilshiva@gmail.com">
    <img src="https://skillicons.dev/icons?i=gmail&theme=dark" height="50" alt="Email" />
  </a> &nbsp;&nbsp;
  <a href="https://ayushgupta3.vercel.app">
    <img src="https://skillicons.dev/icons?i=vercel&theme=dark" height="50" alt="Portfolio" />
  </a> &nbsp;&nbsp;
  <a href="https://twitter.com/ayushkathil">
    <img src="https://skillicons.dev/icons?i=twitter&theme=dark" height="50" alt="Twitter" />
  </a> &nbsp;&nbsp;
  <a href="https://discord.com">
    <img src="https://skillicons.dev/icons?i=discord&theme=dark" height="50" alt="Discord" />
  </a>
</div>

<br>
<br>

<!--======== GRADIENT DIVIDER ========-->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<br>

<div align="center">
  <a href="#top"><code>[ Return to Top ]</code></a>
</div>

<br>
