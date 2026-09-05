<a name="top"></a>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./public/hero-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="./public/hero-light.svg">
  <img alt="System Architecture Visualization" src="./public/hero-dark.svg" width="100%">
</picture>

<br>
<br>

<h1><samp>AYUSH GUPTA</samp></h1>
<p>
  <b>Systems & Software Engineer</b><br>
  <i>Distributed Systems · Open Source Infrastructure · Applied Machine Learning</i>
</p>

<blockquote>
  "Engineering is the art of constraint management. I build backend systems and data pipelines that prioritize deterministic performance, strict memory safety, and fault tolerance beneath the application layer."
</blockquote>

<br>

<details open>
<summary><b><samp>DIRECTORY</samp></b></summary>
<br>
<ul>
  <li><a href="#architecture"><code>01. Systems & Architecture Stack</code></a></li>
  <li><a href="#upstream"><code>02. Upstream Contributions (Kubeflow)</code></a></li>
  <li><a href="#projects"><code>03. High-Performance Implementations</code></a></li>
  <li><a href="#telemetry"><code>04. Telemetry, Logs & Contact</code></a></li>
</ul>
</details>

<img src="https://raw.githubusercontent.com/Ayush-kathil/ayush-kathil/main/public/divider.svg" width="100%" height="2" style="opacity:0.5" alt="divider">

<a name="architecture"></a>
<h2><samp>01 / SYSTEMS & ARCHITECTURE STACK</samp></h2>
<p><i>Technologies selected for production deployments, categorized by infrastructure layer.</i></p>

<p><b>Application & Edge:</b></p>
<p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=go,py,ts,java,nextjs,fastapi&theme=dark" alt="Application Stack" />
  </a>
</p>

<p><b>Data Persistence & State:</b></p>
<p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=postgres,mongodb,redis&theme=dark" alt="Data Stack" />
  </a>
</p>

<p><b>Infrastructure & Telemetry:</b></p>
<p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=kubernetes,docker,github,linux,aws&theme=dark" alt="Infrastructure Stack" />
  </a>
</p>

<br>

<a name="upstream"></a>
<h2><samp>02 / UPSTREAM CONTRIBUTIONS</samp></h2>

<h3><samp>KUBEFLOW PIPELINES</samp></h3>
<p><i>Enterprise-grade Machine Learning Workflow Orchestration</i></p>

<ul>
  <li><b>Memory Management & OOM Mitigation:</b> Engineered backend database payload defenses within the Go API server. Optimized <code>ListRuns</code> deserialization by dynamically stripping multi-megabyte pipeline execution manifests, drastically reducing database over-fetching and preventing node-level memory exhaustion (OOM panics) under high concurrency.</li>
  <li><b>Security Vulnerability Patching (CVE Prevention):</b> Architected mitigations for critical denial-of-service (DoS) attack vectors within the metrics parsing infrastructure, explicitly patching tarball traversal exploits and zip bomb vulnerabilities during artifact ingestion.</li>
</ul>

<details>
<summary><b>View Architecture Trade-offs & Post-Mortem</b></summary>
<br>
<blockquote>
  <b>Post-Mortem Note:</b> The OOM mitigation required tracing nil pointer panics across the <code>api_converter.go</code> layer and overriding the Squirrel SQL query builder to inject mocked payload schemas. This safely bypassed expensive multi-megabyte JSON allocations while maintaining strict REST API contract compatibility with downstream orchestrators. <i>Trade-off: Increased code complexity in the data access layer to guarantee stable heap memory limits.</i>
</blockquote>
</details>

<br>

<a name="projects"></a>
<h2><samp>03 / HIGH-PERFORMANCE IMPLEMENTATIONS</samp></h2>

<h3><samp>CURA : Stateful RAG Architecture</samp></h3>
<p>
  Designed a self-correcting generation pipeline utilizing LangGraph to handle hallucination detection, forcing cyclic query rewrites until context validation passes. Implemented a hybrid search engine combining exact keyword BM25 matching with HNSW (Hierarchical Navigable Small World) semantic vector search via <code>pgvector</code>, minimizing nearest-neighbor lookup latency.
</p>
<ul>
  <li><b>Complexity Metric:</b> Sub-millisecond vector retrieval across high-dimensional embeddings.</li>
  <li><b>Source:</b> <a href="https://github.com/Ayush-kathil/cura-assistant-RAG"><code>Ayush-kathil/cura-assistant-RAG</code></a></li>
</ul>

<h3><samp>SFORA : Deterministic File Automation</samp></h3>
<p>
  Engineered an (1)$ stream buffering deduplication engine utilizing native <code>java.nio</code>. Implemented SHA-256 cryptographic hashing on localized byte chunks to guarantee memory safety regardless of target file size. Built a transactional, state-aware undo mechanism that logs localized operations for atomic rollbacks.
</p>
<ul>
  <li><b>Complexity Metric:</b> Guaranteed (1)$ heap space complexity during large-file I/O streams.</li>
  <li><b>Source:</b> <a href="https://github.com/Ayush-kathil/SFORA-Smart-File-Organizer"><code>Ayush-kathil/SFORA-Smart-File-Organizer</code></a></li>
</ul>

<h3><samp>CYBERIA : Applied ML Threat Analysis</samp></h3>
<p>
  Built a multi-modal ingestion engine capable of parsing Android Application Packages (APK) in real-time alongside visual steganography analysis. Implemented OpenCV-based pixel anomaly detection for UI forgery identification on banking surfaces.
</p>
<ul>
  <li><b>Source:</b> <a href="https://github.com/Ayush-kathil/Cyberia---Detecting-Fake-Banking-APKs"><code>Ayush-kathil/Cyberia</code></a></li>
</ul>

<br>

<a name="telemetry"></a>
<h2><samp>04 / TELEMETRY & CONTACT</samp></h2>

<p><i>Operating out of rigorous testing environments, learning from upstream dependencies, and building fault-tolerant systems.</i></p>

<details>
<summary><b><samp>ENGINEERING LOGS & RFCs</samp></b></summary>
<br>
<ul>
  <li><code>[2026-09]</code> <b>Architecture Review:</b> Mitigating API Server OOM Panics in Go</li>
  <li><code>[2026-08]</code> <b>System Design:</b> Cyclic State Machines for Hallucination Detection</li>
  <li><code>[2026-07]</code> <b>Security Patch:</b> Preventing Tarball Traversal in CI/CD Artifacts</li>
</ul>
</details>

<details>
<summary><b><samp>SYSTEM METRICS</samp></b></summary>
<br>
<ul>
  <li><b>Deployment Status:</b> Native CI/CD checks passing. Vercel builds verified.</li>
  <li><b>Telemetry:</b> Legacy Hit Counters and Shields.io gamification badges have been intentionally deprecated in favor of raw architectural output.</li>
</ul>
</details>

<br>

<p>
  <a href="https://linkedin.com/in/ayushkathil"><img src="https://skillicons.dev/icons?i=linkedin&theme=dark" height="40" alt="LinkedIn"></a> &nbsp;
  <a href="https://github.com/Ayush-kathil"><img src="https://skillicons.dev/icons?i=github&theme=dark" height="40" alt="GitHub"></a> &nbsp;
  <a href="mailto:kathilshiva@gmail.com"><img src="https://skillicons.dev/icons?i=gmail&theme=dark" height="40" alt="Email"></a> &nbsp;
  <a href="https://ayushgupta3.vercel.app"><img src="https://skillicons.dev/icons?i=vercel&theme=dark" height="40" alt="Portfolio"></a>
</p>

<br>
<p><a href="#top"><code>[ Return to Index ]</code></a></p>
