import { createFileRoute } from "@tanstack/react-router";
import emailSimulationImage from "../assets/email-simulation-interface.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pragma — Meeting & Email Simulators" },
      { name: "description", content: "Rehearse high-stakes meetings and difficult emails in a controlled simulator. Build confidence before the real conversation." },
      { property: "og:title", content: "Pragma — Meeting & Email Simulators" },
      { property: "og:description", content: "Rehearse high-stakes meetings and difficult emails in a controlled simulator. Build confidence before the real conversation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: emailSimulationImage },
      { name: "twitter:image", content: emailSimulationImage },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-navy-50 font-dm text-navy-950 antialiased">
      <nav className="w-full border-b border-navy-950/5">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-sm bg-navy-800">
              <div className="size-2 rounded-full bg-navy-50"></div>
            </div>
            <span className="font-space text-lg font-semibold tracking-tight">Pragma</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#simulators"
              className="text-sm font-medium text-navy-800/80 transition-colors hover:text-navy-950"
            >
              Simulators
            </a>
            <a
              href="#cockpit"
              className="text-sm font-medium text-navy-800/80 transition-colors hover:text-navy-950"
            >
              Why practice
            </a>
            <a
              href="#"
              className="text-sm font-medium text-navy-800/80 transition-colors hover:text-navy-950"
            >
              Pricing
            </a>
          </div>
          <button className="rounded-md bg-navy-950 px-4 py-2 text-sm font-medium text-navy-50 ring-1 ring-navy-950 transition-colors hover:bg-navy-800">
            Get Started
          </button>
        </div>
      </nav>

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-[48ch]">
            <h1 className="mb-6 font-space text-4xl font-semibold leading-tight text-balance md:text-6xl">
              Rehearse high-stakes moments before they happen.
            </h1>
            <p className="mb-8 text-lg text-navy-800/80 text-pretty md:text-xl">
              A high-fidelity simulator for meetings and emails. Master complex
              negotiations and difficult conversations in a controlled environment.
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 rounded-md bg-navy-950 py-2 pl-2 pr-3 text-sm font-medium text-navy-50 ring-1 ring-navy-950 transition-colors hover:bg-navy-800">
                <svg
                  className="size-4 shrink-0"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 2v12l10-6-10-6z" />
                </svg>
                Start Simulation
              </button>
              <button className="rounded-md bg-navy-950/5 px-4 py-2 text-sm font-medium text-navy-950 ring-1 ring-black/5 transition-colors hover:bg-navy-950/10">
                View Curriculum
              </button>
            </div>
          </div>

          {/* Hero Grid */}
          <div className="grid auto-rows-[240px] grid-cols-12 gap-4">
            {/* Primary Interface Card */}
            <div className="col-span-12 row-span-2 flex flex-col overflow-hidden rounded-xl bg-zinc-50/50 ring-1 ring-black/5 md:col-span-8">
              <div className="flex items-center justify-between border-b border-navy-950/5 bg-zinc-50/80 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-navy-950/10"></div>
                    <div className="size-2.5 rounded-full bg-navy-950/10"></div>
                    <div className="size-2.5 rounded-full bg-navy-950/10"></div>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-widest text-navy-800/60">
                    Active Simulation / Session 04
                  </span>
                </div>
                <div className="rounded-sm bg-navy-600/10 px-2 py-1 text-xs font-medium text-navy-600">
                  Live Transcript
                </div>
              </div>
              <div className="flex-1 p-4 md:p-8">
                <img
                  src={emailSimulationImage}
                  alt="AI-driven email simulation interface with tone analysis and highlighted keywords"
                  width={1200}
                  height={800}
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Analytics Dial Card */}
            <div className="col-span-12 row-span-1 flex flex-col justify-between rounded-xl bg-zinc-50/50 p-6 ring-1 ring-black/5 md:col-span-4">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-navy-800/60">
                    Tone Intensity
                  </span>
                  <svg
                    className="size-4 text-navy-600"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M8 1v14M1 8h14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="relative mx-auto size-24">
                  <div className="absolute inset-0 rounded-full border-4 border-navy-600/10"></div>
                  <div className="absolute inset-0 -rotate-45 rounded-full border-4 border-navy-600 border-t-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-space text-xl font-medium">84%</span>
                  </div>
                </div>
              </div>
              <p className="text-pretty text-sm text-navy-800/70">
                Your recent response shifted toward assertive. Recommendation: Soften
                the closing.
              </p>
            </div>

            {/* History Log Card */}
            <div className="col-span-12 row-span-1 rounded-xl bg-zinc-50/50 p-6 ring-1 ring-black/5 md:col-span-4">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-navy-800/60">
                Recent Sessions
              </span>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-navy-950/5 py-2">
                  <span className="text-sm font-medium">Quarterly Review Rehearsal</span>
                  <span className="text-[10px] font-medium text-navy-600">B+</span>
                </div>
                <div className="flex items-center justify-between border-b border-navy-950/5 py-2">
                  <span className="text-sm font-medium">Client Negotiation A</span>
                  <span className="text-[10px] font-medium text-navy-600">A-</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium">Internal Pivot Deck</span>
                  <span className="text-[10px] font-medium text-navy-600">A+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cockpit" className="border-t border-navy-950/5 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-16 md:flex-row">
            <div className="flex-1">
              <h2 className="mb-4 font-space text-2xl font-semibold">
                The Cockpit Metaphor
              </h2>
              <p className="max-w-[48ch] text-pretty text-navy-800/80">
                Just as pilots train in simulators before taking flight, modern
                professionals need a safe space to test their communication
                strategies. Pragma provides the instrumentation to measure impact
                in real-time.
              </p>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <div className="mb-4 flex size-8 items-center justify-center rounded-sm bg-navy-600/10">
                  <svg
                    className="size-4 text-navy-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-space text-lg font-medium">Perspective Mapping</h3>
                <p className="text-sm text-navy-800/70">
                  See how your words land from the recipient's point of view through
                  AI sentiment mirroring.
                </p>
              </div>
              <div>
                <div className="mb-4 flex size-8 items-center justify-center rounded-sm bg-navy-600/10">
                  <svg
                    className="size-4 text-navy-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm10 4a1 1 0 100-2 1 1 0 000 2zm1 3a1 1 0 10-2 0 1 1 0 002 0zM9 9a1 1 0 100-2 1 1 0 000 2zm1 3a1 1 0 10-2 0 1 1 0 002 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-space text-lg font-medium">Branching Scenarios</h3>
                <p className="text-sm text-navy-800/70">
                  Explore thousands of potential paths based on specific tonal choices
                  and data points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-navy-950/5 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <div className="size-5 rounded-sm bg-navy-800"></div>
            <span className="font-space text-sm font-semibold tracking-tight">
              Pragma Systems
            </span>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs font-medium text-navy-800/60 transition-colors hover:text-navy-950"
            >
              System Status
            </a>
            <a
              href="#"
              className="text-xs font-medium text-navy-800/60 transition-colors hover:text-navy-950"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs font-medium text-navy-800/60 transition-colors hover:text-navy-950"
            >
              Terms of Service
            </a>
          </div>
          <p className="text-xs text-navy-800/40">© 2024 Pragma Systems Inc.</p>
        </div>
      </footer>
    </div>
  );
}
