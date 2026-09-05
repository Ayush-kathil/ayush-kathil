<a name="top"></a>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/hero-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="public/hero-light.svg">
  <img alt="System Architecture Visualization" src="public/hero-dark.svg" width="100%">
</picture>

<img src="https://raw.githubusercontent.com/Ayush-kathil/ayush-kathil/main/public/divider.svg" width="100%" height="2" style="opacity:0">

<h1><samp>AYUSH GUPTA</samp></h1>
<p>
  <b>Software Engineer</b><br>
  Systems Architecture · Open Source Infrastructure · Applied Machine Learning
</p>

<blockquote>
  I engineer backend systems and data pipelines, focusing on deterministic performance, memory safety, and fault tolerance within large-scale distributed architectures.
</blockquote>

<br>
<img src="public/divider.svg" width="100%">
<br>

<h2><samp>CORE ENGINEERING TOOLKIT</samp></h2>

<p>
  <img src="https://cdn.simpleicons.org/go/000000" height="14"> <b>Languages:</b> Go, Python, TypeScript, Java, C++, SQL<br>
  <img src="https://cdn.simpleicons.org/kubernetes/000000" height="14"> <b>Infrastructure:</b> Kubernetes, Docker, GitHub Actions, Linux Environments<br>
  <img src="https://cdn.simpleicons.org/postgresql/000000" height="14"> <b>Databases:</b> PostgreSQL, MongoDB, Redis, Supabase<br>
  <img src="https://cdn.simpleicons.org/pytorch/000000" height="14"> <b>ML & Systems:</b> PyTorch, TensorFlow, LangGraph, OpenCV, FastAPI, Next.js
</p>

<br>
<img src="public/divider.svg" width="100%">
<br>

<a name="open-source"></a>
<h2><samp>UPSTREAM CONTRIBUTIONS</samp></h2>

<br>

<h3><samp>01 / KUBEFLOW PIPELINES</samp></h3>
<p><b>Domain:</b> Distributed Workflow Orchestration | <b>Stack:</b> Go, Python, Kubernetes</p>

<p>
• <b>Memory Management & OOM Mitigation:</b> Engineered backend database payload defenses within the Go API server. Optimized <code>ListRuns</code> deserialization by dynamically stripping multi-megabyte pipeline execution manifests, drastically reducing database over-fetching and preventing node-level memory exhaustion under high concurrency.<br>
• <b>Security Vulnerability Patching:</b> Architected mitigations for critical denial-of-service (DoS) attack vectors within the metrics parsing infrastructure, explicitly patching tarball traversal exploits and zip bomb vulnerabilities during artifact ingestion.
</p>

<details>
<summary><b>View Implementation Notes</b></summary>
<br>
<p><i>The OOM mitigation required tracing nil pointer panics across the <code>api_converter.go</code> layer and overriding the Squirrel SQL query builder to inject mocked payload schemas. This safely bypassed expensive multi-megabyte JSON allocations while maintaining strict REST API contract compatibility with downstream orchestrators.</i></p>
</details>

<br>
<br>

<h3><samp>02 / KUBEFLOW KATIB</samp></h3>
<p><b>Domain:</b> Automated Machine Learning Infrastructure</p>
<p>
• Contributed to infrastructure stability by resolving validation pipeline bugs and enhancing test coverage for hyperparameter tuning controllers.
</p>

<br>
<img src="public/divider.svg" width="100%">
<br>

<a name="architecture"></a>
<h2><samp>SYSTEMS & ARCHITECTURE</samp></h2>

<br>

<h3><samp>01 / CURA</samp></h3>
<p><b>Domain:</b> Stateful Conversational RAG Pipelines</p>

<p>
• <b>State Machine Architecture:</b> Designed a self-correcting generation pipeline utilizing LangGraph to handle hallucination detection, forcing cyclic query rewrites until context validation passes.<br>
• <b>Database Indexing Strategy:</b> Implemented a hybrid search engine combining exact keyword matching with HNSW (Hierarchical Navigable Small World) semantic vector search via <code>pgvector</code>, minimizing nearest-neighbor lookup latency.<br>
• <b>Memory Management:</b> Integrated context compression algorithms to strictly manage token limits and optimize language model throughput before re-ranking payloads.
</p>

<details>
<summary><b>View Tech Stack & Trade-offs</b></summary>
<br>
<p><b>Stack:</b> Next.js, LangGraph, Supabase, pgvector, OpenAI.<br>
<i>Trade-off: Chose complex cyclic state machines over linear chains to guarantee deterministic output accuracy, intentionally trading a slight increase in P99 latency for strict zero-hallucination verification.</i></p>
</details>

<br>
<br>

<h3><samp>02 / SFORA</samp></h3>
<p><b>Domain:</b> High-Performance File Automation</p>

<p>
• <b>Time & Space Complexity:</b> Engineered an O(1) stream buffering deduplication engine utilizing native <code>java.nio</code>. Implemented SHA-256 cryptographic hashing on localized byte chunks to guarantee memory safety regardless of target file size.<br>
• <b>Concurrency & State:</b> Built a transactional, state-aware undo mechanism that logs localized file operations, allowing atomic rollbacks of large-scale directory mutations.<br>
• <b>Dependency Elimination:</b> Architected strictly using standard library Java 17 to bypass JVM bloat and external build dependencies.
</p>

<br>
<br>

<h3><samp>03 / CYBERIA</samp></h3>
<p><b>Domain:</b> Applied ML & Threat Analysis</p>

<p>
• <b>Multi-modal Pipeline:</b> Built an ingestion engine capable of parsing Android Application Packages (APK) in real-time alongside visual steganography analysis.<br>
• <b>Computer Vision:</b> Implemented OpenCV-based pixel anomaly detection for UI forgery identification on banking surfaces.
</p>

<br>
<img src="public/divider.svg" width="100%">
<br>

<h2><samp>VERIFIED ACHIEVEMENTS</samp></h2>

<p>
<b>2026</b> / Software Engineering Intern — HackerRank<br>
<b>2026</b> / Open Source Contributor — GSSoC (DevPath)<br>
<b>2026</b> / Published Indian Patent Application — VIT Bhopal University<br>
<b>2025</b> / Google Cloud Generative AI Certification<br>
<b>2025</b> / Applied Machine Learning in Python — University of Michigan
</p>

<br>
<br>
<br>

<p>
  <a href="#top"><code>[ Return to Top ]</code></a> &nbsp;·&nbsp;
  <a href="https://github.com/Ayush-kathil"><code>[ GitHub ]</code></a> &nbsp;·&nbsp;
  <a href="https://linkedin.com/in/ayushkathil"><code>[ LinkedIn ]</code></a> &nbsp;·&nbsp;
  <a href="https://ayushgupta3.vercel.app"><code>[ Portfolio ]</code></a>
</p>
