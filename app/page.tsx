import Link from "next/link";

const highlights = [
  { label: "Vision models deployed", value: "120+" },
  { label: "Edge nodes online", value: "4.7K" },
  { label: "Incidents resolved faster", value: "62%" },
];

const features = [
  {
    title: "Unified monitoring",
    description:
      "Bring every camera, stream, and workflow into a single glass dashboard with role-based views.",
    detail:
      "Realtime health indicators highlight failing feeds, while interactive maps surface spatial anomalies before they impact operators.",
  },
  {
    title: "Edge orchestration",
    description:
      "Ship optimized models straight to remote devices and schedule updates without downtime.",
    detail:
      "Deployments cascade intelligently across the fleet with automatic rollbacks, version pinning, and safety checks at each hop.",
  },
  {
    title: "Alert automation",
    description:
      "Cut through noise with context-rich alerts generated from cross-camera correlations.",
    detail:
      "VisionForge fuses detections with historical baselines to prioritize what matters most, routing playbooks to the right on-call teams.",
  },
];

const workflow = [
  {
    title: "Connect your vision estate",
    description:
      "Securely onboard IP cameras, RTSP streams, or uploaded footage with zero-touch provisioning for the edge fleet.",
  },
  {
    title: "Compose intelligent pipelines",
    description:
      "Drag-and-drop detection, tracking, and enrichment blocks or promote existing notebooks straight into production-ready graphs.",
  },
  {
    title: "Operationalize insights",
    description:
      "Publish dashboards, trigger automations, and sync outcomes back into Slack, ServiceNow, or any tool via webhooks.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/25 blur-[150px]" />
        <div className="absolute bottom-[-14rem] left-[-10rem] h-[26rem] w-[26rem] rounded-full bg-sky-500/20 blur-[180px]" />
        <div className="absolute bottom-[-18rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-indigo-500/20 blur-[220px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-32 pt-24 sm:pb-40 sm:pt-32">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm font-medium text-slate-300">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500/15 text-base text-sky-300 shadow-[0_8px_30px_rgba(56,189,248,0.35)]">
              VF
            </span>
            <span className="tracking-wide">VisionForge Platform</span>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-slate-400">
            <Link className="transition hover:text-sky-200" href="#features">
              Features
            </Link>
            <Link className="transition hover:text-sky-200" href="#workflow">
              Workflow
            </Link>
            <Link className="transition hover:text-sky-200" href="/privacy">
              Security & privacy
            </Link>
          </nav>
        </header>

        <section className="mt-16 grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                Computer vision operations
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Launch, monitor, and scale your entire vision fleet from one console.
              </h1>
              <p className="max-w-xl text-base text-slate-300 sm:text-lg">
                VisionForge unifies live camera monitoring, edge model orchestration, and incident response so your teams can deliver
                safer, smarter spaces without wrestling with disconnected tools.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/privacy#access"
                className="flex items-center justify-center rounded-xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_15px_35px_-20px_rgba(56,189,248,0.9)] transition hover:-translate-y-0.5 hover:bg-sky-300"
              >
                Book a guided tour
              </Link>
              <Link
                href="/privacy"
                className="flex items-center justify-center rounded-xl border border-slate-700/60 bg-slate-950/60 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500/80 hover:bg-slate-900/70"
              >
                Download platform brief
              </Link>
            </div>
          </div>
          <aside className="rounded-[32px] border border-slate-800/70 bg-slate-900/60 p-8 shadow-[0_40px_70px_-35px_rgba(8,47,73,0.85)] backdrop-blur-xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Impact at a glance</h2>
            <div className="mt-6 grid gap-6">
              {highlights.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-slate-400">
              Trusted by logistics, retail, and public safety teams operating thousands of live feeds across five continents.
            </p>
          </aside>
        </section>

        <section id="features" className="mt-32 space-y-14">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Built for mission-critical vision</h2>
            <p className="max-w-2xl text-sm text-slate-400 sm:text-base">
              Every layer of VisionForge is purpose-built for operators overseeing vast camera networks — from proactive anomaly
              detection to automated compliance reporting.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="flex h-full flex-col rounded-3xl border border-slate-800/60 bg-slate-900/60 p-8 shadow-[0_25px_55px_-35px_rgba(8,47,73,0.8)] backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
                <p className="mt-5 text-sm text-slate-400">{feature.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="workflow" className="mt-32 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">How VisionForge keeps teams aligned</h2>
            <p className="max-w-xl text-sm text-slate-400 sm:text-base">
              Connect technical and operational stakeholders with a shared control surface that scales from pilot projects to global
              deployments.
            </p>
          </div>
          <ol className="grid gap-6">
            {workflow.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-3xl border border-slate-800/60 bg-slate-900/60 p-7 pl-16 shadow-[0_25px_55px_-35px_rgba(8,47,73,0.8)] backdrop-blur-xl"
              >
                <span className="absolute left-6 top-7 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sm font-semibold text-sky-200">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-32 rounded-[36px] border border-slate-800/70 bg-gradient-to-r from-slate-900/80 to-slate-900/40 p-10 shadow-[0_50px_90px_-45px_rgba(8,47,73,0.85)] backdrop-blur-xl sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to reimagine your computer vision ops?</h2>
              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                Partner with our solution engineers to audit existing deployments, identify quick wins, and build a roadmap for your
                next generation of intelligent environments.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Link
                href="/privacy#access"
                className="flex items-center justify-center rounded-xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_15px_35px_-20px_rgba(56,189,248,0.9)] transition hover:-translate-y-0.5 hover:bg-sky-300"
              >
                Talk to an expert
              </Link>
              <Link
                href="mailto:hello@visionforge.ai"
                className="flex items-center justify-center rounded-xl border border-slate-700/60 bg-slate-950/60 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500/80 hover:bg-slate-900/70"
              >
                hello@visionforge.ai
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
