<a name="top"></a>

<!-- HERO SECTION -->
<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./public/hero-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="./public/hero-light.svg">
    <img alt="System Architecture Visualization" src="./public/hero-dark.svg" width="100%">
  </picture>
</div>

<div align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=500&size=22&duration=4000&pause=1000&color=58A6FF&center=true&vCenter=true&multiline=true&repeat=true&width=800&height=80&lines=Software+Engineer+%7C+ML+Systems+%7C+Open+Source;Engineering+reliable+backend+systems;Building+ML-powered+products;Designing+refined+frontend+experiences;Contributing+to+open-source+infrastructure" alt="Animated Typing Headline" />
  </a>
</div>

<div align="center">
  <a href="https://ayushgupta3.vercel.app"><b>Interactive Portfolio</b></a> &nbsp;&middot;&nbsp; 
  <a href="https://www.linkedin.com/in/ayushkathil"><b>LinkedIn</b></a> &nbsp;&middot;&nbsp; 
  <a href="mailto:kathilshiva@gmail.com"><b>Email</b></a>
</div>

<br>

<!-- NAVIGATION -->
<div align="center">
  <a href="#-open-source-engineering"><kbd>&emsp;Open Source&emsp;</kbd></a>&nbsp;&nbsp;
  <a href="#-featured-projects"><kbd>&emsp;Projects&emsp;</kbd></a>&nbsp;&nbsp;
  <a href="#-technical-toolkit"><kbd>&emsp;Tech Stack&emsp;</kbd></a>&nbsp;&nbsp;
  <a href="#-github-activity"><kbd>&emsp;Activity&emsp;</kbd></a>&nbsp;&nbsp;
  <a href="#-verified-achievements"><kbd>&emsp;Achievements&emsp;</kbd></a>
</div>

<br><br>

## ✦ Open Source Engineering

**[Kubeflow Pipelines (CNCF Graduated)](https://github.com/kubeflow/pipelines)**  
*Enterprise-grade Machine Learning Workflow Orchestration*

* **Memory Management & OOM Mitigation:** Engineered backend database payload defenses within the Go API server. Optimized `ListRuns` deserialization by dynamically stripping multi-megabyte pipeline execution manifests, drastically reducing database over-fetching and preventing node-level memory exhaustion (OOM panics).
* **CVE Prevention:** Architected mitigations for critical DoS attack vectors within the metrics parsing infrastructure, explicitly patching tarball traversal exploits and zip bomb vulnerabilities.

<details>
<summary><b>View Architecture Trade-offs</b></summary>
<br>

> **Post-Mortem Note:** The OOM mitigation required tracing nil pointer panics across the `api_converter.go` layer and overriding the Squirrel SQL query builder to inject mocked payload schemas. This safely bypassed expensive multi-megabyte JSON allocations while maintaining strict REST API contract compatibility. *Trade-off: Increased code complexity in the data access layer to guarantee stable heap memory limits under production scale.*
</details>

**Kubeflow Katib**  
*Automated Machine Learning Infrastructure*

* **Controller Stability:** Resolved validation pipeline bugs and enhanced test coverage for hyperparameter tuning controllers.

---

## ✦ Featured Projects

<table width="100%" border="0">
  <tr>
    <td width="50%" valign="top">
      <h3>01 / <a href="https://github.com/Ayush-kathil/cura-assistant-RAG">CURA</a></h3>
      <i>Stateful RAG Architecture</i>
      <ul>
        <li><b>Self-Correcting:</b> Utilizes LangGraph for hallucination detection and cyclic query rewrites.</li>
        <li><b>Hybrid Search:</b> Combined BM25 with HNSW semantic vector search via <code>pgvector</code>.</li>
        <li><b>Stack:</b> Next.js, Python, PostgreSQL, Supabase.</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>02 / <a href="https://github.com/Ayush-kathil/SFORA-Smart-File-Organizer">SFORA</a></h3>
      <i>O(1) Memory Engine</i>
      <ul>
        <li><b>Concurrency:</b> Engineered an O(1) stream buffering deduplication engine using native <code>java.nio</code>.</li>
        <li><b>State-Aware:</b> Built a transactional undo mechanism for atomic rollbacks of directory mutations.</li>
        <li><b>Stack:</b> Java 17 (Zero Dependency).</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>03 / <a href="https://github.com/Ayush-kathil/Cyberia---Detecting-Fake-Banking-APKs">Cyberia</a></h3>
      <i>Applied ML Threat Analysis</i>
      <ul>
        <li><b>Multi-modal:</b> Parses Android APKs in real-time alongside visual steganography analysis.</li>
        <li><b>Computer Vision:</b> OpenCV-based pixel anomaly detection for UI forgery identification.</li>
        <li><b>Stack:</b> Python, OpenCV, TensorFlow.</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>04 / <a href="https://github.com/Ayush-kathil/resume-builder">AI Resume Builder</a></h3>
      <i>Full-Stack Real-Time Platform</i>
      <br><br>
      <a href="https://github.com/Ayush-kathil/resume-builder">
        <img src="./public/projects/resume-builder.png" alt="Resume Builder" width="100%" style="border-radius: 8px;">
      </a>
      <ul>
        <li><b>State:</b> Zustand integration for zero-lag rendering.</li>
        <li><b>Security:</b> NextAuth.js & MongoDB RBAC.</li>
      </ul>
    </td>
  </tr>
</table>

---

## ✦ Technical Toolkit

| Category | Core Technologies |
| :--- | :--- |
| **Languages** | Go, Python, TypeScript, Java, C++, Bash |
| **Frameworks** | Next.js, React, Node.js, FastAPI, Flask |
| **Databases** | PostgreSQL (pgvector), MongoDB, Redis, Kafka |
| **Infrastructure** | Kubernetes, Docker, AWS, GitHub Actions |
| **ML & Data** | PyTorch, TensorFlow, OpenCV |

---

## ✦ GitHub Activity

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Ayush-kathil&show_icons=true&theme=transparent&hide_border=true&title_color=58A6FF&icon_color=58A6FF&text_color=A9B2C3" width="48%">
  <img src="https://streak-stats.demolab.com?user=Ayush-kathil&theme=transparent&hide_border=true&title_color=58A6FF&icon_color=58A6FF&text_color=A9B2C3" width="48%">
</div>

### My Contribution Journey

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Ayush-kathil/ayush-kathil/output/github-snake-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Ayush-kathil/ayush-kathil/output/github-snake.svg">
    <img alt="GitHub Contribution Snake" src="https://raw.githubusercontent.com/Ayush-kathil/ayush-kathil/output/github-snake-dark.svg" width="100%">
  </picture>
</div>

---

## ✦ Verified Achievements

* `[2026]` **Software Engineering Intern** — HackerRank
* `[2026]` **Open Source Contributor** — GSSoC (DevPath)
* `[2026]` **Published Indian Patent Application** — VIT Bhopal University
* `[2025]` **Google Cloud Generative AI Certification** 
* `[2025]` **Applied Machine Learning in Python** — University of Michigan (Coursera)

---
<div align="center">
  <p><i>Make sure to visit my full motion-driven portfolio for a richer interactive experience.</i></p>
  <a href="https://ayushgupta3.vercel.app"><b>View Interactive Portfolio</b></a>
  <br><br>
  <a href="#top"><code>[ Return to Top ]</code></a>
</div>
