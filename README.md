<a name="top"></a>

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./public/hero-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="./public/hero-light.svg">
    <img alt="System Architecture Visualization" src="./public/hero-dark.svg" width="100%" style="max-width: 850px;">
  </picture>
</div>

<div align="center">
  <h1>Ayush Gupta</h1>
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=500&size=20&duration=4000&pause=1000&color=58A6FF&center=true&vCenter=true&multiline=false&repeat=true&width=800&height=40&lines=Software+Engineer+%7C+ML+Systems+%7C+Open+Source;Engineering+reliable+backend+systems;Building+ML-powered+products" alt="Animated Typing Headline" />
  </a>
  <p><i>Building robust distributed systems, data pipelines, and responsive web applications.</i></p>
</div>

<div align="center">
  <a href="https://ayushgupta3.vercel.app">Portfolio</a> &nbsp;&middot;&nbsp;
  <a href="https://github.com/Ayush-kathil">GitHub</a> &nbsp;&middot;&nbsp;
  <a href="https://www.linkedin.com/in/ayushkathil">LinkedIn</a> &nbsp;&middot;&nbsp;
  <a href="mailto:kathilshiva@gmail.com">Email</a>
</div>

<br>

<div align="center">
  <a href="#github-contribution-journey">Contributions</a> &nbsp;&middot;&nbsp;
  <a href="#open-source-engineering">Open Source</a> &nbsp;&middot;&nbsp;
  <a href="#selected-work">Selected Work</a> &nbsp;&middot;&nbsp;
  <a href="#technical-toolkit">Tech Stack</a> &nbsp;&middot;&nbsp;
  <a href="#credentials--recognition">Credentials</a>
</div>

<br>

## GitHub Contribution Journey

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Ayush-kathil/ayush-kathil/output/github-snake-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Ayush-kathil/ayush-kathil/output/github-snake.svg">
    <img alt="GitHub Contribution Snake" src="https://raw.githubusercontent.com/Ayush-kathil/ayush-kathil/output/github-snake-dark.svg" width="100%" style="max-width: 850px;">
  </picture>
</div>

<br>

## Open Source Engineering

**[Kubeflow Pipelines (CNCF Graduated)](https://github.com/kubeflow/pipelines)**  
*Enterprise-grade Machine Learning Workflow Orchestration*

* **Problem:** Large execution manifests caused node-level memory exhaustion (OOM panics) during database queries under high concurrency.
* **Implementation:** Engineered backend payload defenses within the Go API server by overriding the SQL query builder to inject mocked schemas, dynamically stripping multi-megabyte payloads.
* **Result:** Bypassed expensive JSON allocations during `ListRuns` deserialization, actively mitigating OOM panics while maintaining REST API contract compatibility.

* **Problem:** Vulnerabilities in the metrics parsing infrastructure exposed the system to denial-of-service (DoS) vectors.
* **Implementation:** Architected security mitigations targeting the extraction processes.
* **Result:** Successfully patched tarball traversal exploits and zip bomb vulnerabilities.

<details>
<summary><b>View Architecture Trade-offs</b></summary>
<br>

> **Implementation Note:** Tracing nil pointer panics across the `api_converter.go` layer required strict handling of the mocked payload schema. *Trade-off: Increased code complexity in the data access layer was necessary to ensure predictable heap memory behavior during large-scale execution retrieval.*
</details>

<br>

**[Kubeflow Katib](https://github.com/kubeflow/katib)**  
*Automated Machine Learning Infrastructure*

* **Problem:** Validation pipeline instability affected hyperparameter tuning controllers.
* **Implementation:** Enhanced controller unit test coverage and resolved validation logic errors.
* **Result:** Improved controller stability across the validation pipeline.

<br>

## Selected Work

Selected repositories: [CURA](https://github.com/Ayush-kathil/cura-assistant-RAG) &middot; [SFORA](https://github.com/Ayush-kathil/SFORA-Smart-File-Organizer) &middot; [Cyberia](https://github.com/Ayush-kathil/Cyberia---Detecting-Fake-Banking-APKs) &middot; [AI Resume Builder](https://github.com/Ayush-kathil/resume-builder)

<br>

## Technical Toolkit

<div align="center">
  <p><b>Languages</b></p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=go,python,ts,java,cpp,bash&theme=dark">
    <source media="(prefers-color-scheme: light)" srcset="https://skillicons.dev/icons?i=go,python,ts,java,cpp,bash&theme=light">
    <img alt="Languages" src="https://skillicons.dev/icons?i=go,python,ts,java,cpp,bash&theme=dark" height="36">
  </picture>
  <br><br>
  
  <p><b>Frontend & UI</b></p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=nextjs,react,tailwind,html,css&theme=dark">
    <source media="(prefers-color-scheme: light)" srcset="https://skillicons.dev/icons?i=nextjs,react,tailwind,html,css&theme=light">
    <img alt="Frontend & UI" src="https://skillicons.dev/icons?i=nextjs,react,tailwind,html,css&theme=dark" height="36">
  </picture>
  <br><br>

  <p><b>Backend & APIs</b></p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=nodejs,fastapi,flask&theme=dark">
    <source media="(prefers-color-scheme: light)" srcset="https://skillicons.dev/icons?i=nodejs,fastapi,flask&theme=light">
    <img alt="Backend & APIs" src="https://skillicons.dev/icons?i=nodejs,fastapi,flask&theme=dark" height="36">
  </picture>
  <br><br>

  <p><b>Databases & Brokers</b></p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=postgres,mongodb,redis,kafka,supabase&theme=dark">
    <source media="(prefers-color-scheme: light)" srcset="https://skillicons.dev/icons?i=postgres,mongodb,redis,kafka,supabase&theme=light">
    <img alt="Databases & Brokers" src="https://skillicons.dev/icons?i=postgres,mongodb,redis,kafka,supabase&theme=dark" height="36">
  </picture>
  <br><br>

  <p><b>Infrastructure</b></p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=kubernetes,docker,aws,linux,githubactions&theme=dark">
    <source media="(prefers-color-scheme: light)" srcset="https://skillicons.dev/icons?i=kubernetes,docker,aws,linux,githubactions&theme=light">
    <img alt="Infrastructure" src="https://skillicons.dev/icons?i=kubernetes,docker,aws,linux,githubactions&theme=dark" height="36">
  </picture>
  <br><br>

  <p><b>Machine Learning</b></p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=pytorch,tensorflow,opencv&theme=dark">
    <source media="(prefers-color-scheme: light)" srcset="https://skillicons.dev/icons?i=pytorch,tensorflow,opencv&theme=light">
    <img alt="Machine Learning" src="https://skillicons.dev/icons?i=pytorch,tensorflow,opencv&theme=dark" height="36">
  </picture>
</div>

<br>

## GitHub Statistics

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats.vercel.app/api?username=Ayush-kathil&show_icons=true&theme=transparent&hide_border=true&title_color=58A6FF&icon_color=58A6FF&text_color=A9B2C3">
    <source media="(prefers-color-scheme: light)" srcset="https://github-readme-stats.vercel.app/api?username=Ayush-kathil&show_icons=true&theme=transparent&hide_border=true&title_color=0969DA&icon_color=0969DA&text_color=24292F">
    <img alt="GitHub Stats" src="https://github-readme-stats.vercel.app/api?username=Ayush-kathil&show_icons=true&theme=transparent&hide_border=true&title_color=58A6FF&icon_color=58A6FF&text_color=A9B2C3" width="48%">
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://streak-stats.demolab.com?user=Ayush-kathil&theme=transparent&hide_border=true&title_color=58A6FF&icon_color=58A6FF&text_color=A9B2C3">
    <source media="(prefers-color-scheme: light)" srcset="https://streak-stats.demolab.com?user=Ayush-kathil&theme=transparent&hide_border=true&title_color=0969DA&icon_color=0969DA&text_color=24292F">
    <img alt="GitHub Streak" src="https://streak-stats.demolab.com?user=Ayush-kathil&theme=transparent&hide_border=true&title_color=58A6FF&icon_color=58A6FF&text_color=A9B2C3" width="48%">
  </picture>
</div>

<br>

## Credentials & Recognition

* `[2026]` **Software Engineer Intern Role Certification** — HackerRank
* `[2026]` **Open Source Contributor** — GSSoC (DevPath)
* `[2026]` **Published Indian Patent Application** — VIT Bhopal University
* `[2025]` **Google Cloud Generative AI Certification** 
* `[2025]` **Applied Machine Learning in Python** — University of Michigan (Coursera)

<br>

<div align="center">
  <a href="https://ayushgupta3.vercel.app">View Interactive Portfolio</a>
</div>
