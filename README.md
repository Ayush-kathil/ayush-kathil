<a name="top"></a>

<!-- ================= HERO SECTION ================= -->
<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./public/hero-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="./public/hero-light.svg">
    <img alt="System Architecture Visualization" src="./public/hero-dark.svg" width="100%" style="max-width: 850px;">
  </picture>
</div>

<br>

<div align="center">
  <h1>Ayush Gupta</h1>
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=500&size=20&duration=4000&pause=1000&color=58A6FF&center=true&vCenter=true&multiline=false&repeat=true&width=800&height=40&lines=Software+Engineer+%7C+ML+Systems+%7C+Open+Source;Engineering+reliable+backend+systems;Building+ML-powered+products;Designing+refined+frontend+experiences" alt="Animated Typing Headline" />
  </a>
</div>

<div align="center">
  <p><i>Building robust distributed systems, data pipelines, and responsive frontends with deterministic performance.</i></p>
  <a href="https://ayushgupta3.vercel.app"><kbd>&emsp;View Interactive Portfolio&emsp;</kbd></a> &nbsp;&nbsp;&middot;&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/ayushkathil"><kbd>&emsp;LinkedIn&emsp;</kbd></a> &nbsp;&nbsp;&middot;&nbsp;&nbsp;
  <a href="mailto:kathilshiva@gmail.com"><kbd>&emsp;Email&emsp;</kbd></a>
</div>

<br>

<!-- ================= NAVIGATION ================= -->
<div align="center">
  <a href="#-open-source-engineering"><b>Open Source</b></a> &nbsp;&nbsp;&middot;&nbsp;&nbsp;
  <a href="#-featured-engineering-work"><b>Featured Work</b></a> &nbsp;&nbsp;&middot;&nbsp;&nbsp;
  <a href="#-technical-toolkit"><b>Tech Stack</b></a> &nbsp;&nbsp;&middot;&nbsp;&nbsp;
  <a href="#-github-activity"><b>Activity</b></a> &nbsp;&nbsp;&middot;&nbsp;&nbsp;
  <a href="#-verified-achievements"><b>Achievements</b></a>
</div>

<br><hr><br>

<!-- ================= OPEN SOURCE ================= -->
## ✦ Open Source Engineering

**[Kubeflow Pipelines (CNCF Graduated)](https://github.com/kubeflow/pipelines)**  
*Enterprise-grade Machine Learning Workflow Orchestration*

* **OOM Mitigation:** Engineered backend database payload defenses within the Go API server. Optimized `ListRuns` deserialization by dynamically stripping multi-megabyte execution manifests, actively preventing node-level memory exhaustion under high concurrency.
* **Security Patching:** Architected mitigations against denial-of-service (DoS) attack vectors within the metrics parsing infrastructure, patching tarball traversal exploits and zip bomb vulnerabilities.

<details>
<summary><b>View Architecture Trade-offs</b></summary>
<br>

> **Implementation Note:** Traced nil pointer panics across the `api_converter.go` layer and overrode the SQL query builder to inject mocked payload schemas. This safely bypassed expensive multi-megabyte JSON allocations while maintaining strict REST API contract compatibility. *Trade-off: Increased code complexity in the data access layer to guarantee stable heap memory limits.*
</details>

**Kubeflow Katib**  
*Automated Machine Learning Infrastructure*

* **Controller Stability:** Resolved validation pipeline bugs and enhanced unit test coverage for hyperparameter tuning controllers.

<br>

<!-- ================= FEATURED PROJECTS ================= -->
## ✦ Featured Engineering Work

<table width="100%" border="0" cellpadding="10">
  <tr>
    <td width="50%" valign="top">
      <h3>01 / <a href="https://github.com/Ayush-kathil/cura-assistant-RAG">CURA</a></h3>
      <i>Stateful RAG Architecture</i>
      <br><br>
      <ul>
        <li><b>Self-Correcting Pipelines:</b> Utilized LangGraph for hallucination detection and cyclic query rewrites to ensure response validity.</li>
        <li><b>Hybrid Search:</b> Combined exact BM25 keyword matching with HNSW semantic vector search using <code>pgvector</code>.</li>
        <li><b>Stack:</b> Next.js, Python, PostgreSQL, Supabase, Gemini AI.</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>02 / <a href="https://github.com/Ayush-kathil/SFORA-Smart-File-Organizer">SFORA</a></h3>
      <i>High-Performance File Engine</i>
      <br><br>
      <ul>
        <li><b>Concurrency:</b> Engineered an O(1) memory-bound stream buffering deduplication engine utilizing native <code>java.nio</code>.</li>
        <li><b>State-Aware:</b> Built a transactional rollback mechanism logging localized file operations.</li>
        <li><b>Stack:</b> Java 17 (Zero Dependency).</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>03 / <a href="https://github.com/Ayush-kathil/Cyberia---Detecting-Fake-Banking-APKs">Cyberia</a></h3>
      <i>Applied ML Threat Analysis</i>
      <br><br>
      <ul>
        <li><b>Multi-modal Ingestion:</b> Parses Android APKs in real-time alongside visual steganography analysis.</li>
        <li><b>Computer Vision:</b> OpenCV-based pixel anomaly detection for UI forgery identification.</li>
        <li><b>Stack:</b> Python, OpenCV, TensorFlow.</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>04 / <a href="https://github.com/Ayush-kathil/resume-builder">AI Resume Builder</a></h3>
      <i>Full-Stack Real-Time Platform</i>
      <br><br>
      <a href="https://github.com/Ayush-kathil/resume-builder">
        <img src="./public/projects/resume-builder.png" alt="Resume Builder Interactive Preview" width="100%" style="border-radius: 8px; border: 1px solid #30363D;">
      </a>
      <br><br>
      <ul>
        <li><b>State Management:</b> Integrated Zustand for highly responsive real-time preview rendering.</li>
        <li><b>Security:</b> Configured NextAuth.js & MongoDB for role-based access control.</li>
      </ul>
    </td>
  </tr>
</table>

<br>

<!-- ================= TECHNICAL TOOLKIT ================= -->
## ✦ Technical Toolkit

<div align="center">
  <table>
    <tr>
      <td align="right"><b>Languages</b></td>
      <td><img src="https://skillicons.dev/icons?i=go,python,ts,java,cpp,bash&theme=dark" alt="Languages" height="30" /></td>
    </tr>
    <tr>
      <td align="right"><b>Frontend & UI</b></td>
      <td><img src="https://skillicons.dev/icons?i=nextjs,react,tailwind,html,css&theme=dark" alt="Frontend" height="30" /></td>
    </tr>
    <tr>
      <td align="right"><b>Backend & APIs</b></td>
      <td><img src="https://skillicons.dev/icons?i=nodejs,fastapi,flask&theme=dark" alt="Backend" height="30" /></td>
    </tr>
    <tr>
      <td align="right"><b>Data & Message Brokers</b></td>
      <td><img src="https://skillicons.dev/icons?i=postgres,mongodb,redis,kafka,supabase&theme=dark" alt="Databases" height="30" /></td>
    </tr>
    <tr>
      <td align="right"><b>Infrastructure</b></td>
      <td><img src="https://skillicons.dev/icons?i=kubernetes,docker,aws,linux,githubactions&theme=dark" alt="Infrastructure" height="30" /></td>
    </tr>
    <tr>
      <td align="right"><b>Machine Learning</b></td>
      <td><img src="https://skillicons.dev/icons?i=pytorch,tensorflow,opencv&theme=dark" alt="Machine Learning" height="30" /></td>
    </tr>
  </table>
</div>

<br>

<!-- ================= GITHUB ACTIVITY ================= -->
## ✦ GitHub Activity

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Ayush-kathil&show_icons=true&theme=transparent&hide_border=true&title_color=58A6FF&icon_color=58A6FF&text_color=A9B2C3&bg_color=0D1117" width="48%">
  <img src="https://streak-stats.demolab.com?user=Ayush-kathil&theme=transparent&hide_border=true&title_color=58A6FF&icon_color=58A6FF&text_color=A9B2C3&bg_color=0D1117" width="48%">
</div>

### Contribution Journey

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Ayush-kathil/ayush-kathil/output/github-snake-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Ayush-kathil/ayush-kathil/output/github-snake.svg">
    <img alt="GitHub Contribution Snake" src="https://raw.githubusercontent.com/Ayush-kathil/ayush-kathil/output/github-snake-dark.svg" width="100%" style="max-width: 850px;">
  </picture>
</div>

<br>

<!-- ================= ACHIEVEMENTS ================= -->
## ✦ Verified Achievements

* `[2026]` **Software Engineer Intern Role Certification** — HackerRank
* `[2026]` **Open Source Contributor** — GSSoC (DevPath)
* `[2026]` **Published Indian Patent Application** — VIT Bhopal University
* `[2025]` **Google Cloud Generative AI Certification** 
* `[2025]` **Applied Machine Learning in Python** — University of Michigan (Coursera)

<br><hr><br>

<div align="center">
  <p><i>This README operates as a technical brief. For a richer, motion-driven experience, visit my complete portfolio.</i></p>
  <a href="https://ayushgupta3.vercel.app"><kbd>&emsp;<b>Launch Interactive Portfolio</b>&emsp;</kbd></a>
  <br><br>
  <a href="#top"><code>[ Return to Top ]</code></a>
</div>
