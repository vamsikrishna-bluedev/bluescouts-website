import {
  ArrowRight,
  BarChart3,
  Brain,
  Database,
  FileSearch,
  Layers3,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function Solutions() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Solutions
                </span>
              </div>

              <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                Solutions built
                <br />
                around real
                <br />
                problems.
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                We combine data, technology and analysis to build systems that
                turn complex information into useful outputs.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Discuss a Project

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CORE CAPABILITIES
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                Core Capabilities
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
              From raw information to meaningful analysis.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/50">
              Our solutions focus on the stages required to transform
              information into structured, usable outputs.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">
            {/* Data Processing */}
            <div className="bg-white p-8 lg:p-10">
              <Database size={28} strokeWidth={1.5} />

              <span className="mt-16 block text-xs tracking-[0.18em] text-black/35">
                01
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Data Processing
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-black/55">
                Build structured data flows that clean, organize and prepare
                information for downstream use.
              </p>
            </div>

            {/* Data Extraction */}
            <div className="bg-white p-8 lg:p-10">
              <FileSearch size={28} strokeWidth={1.5} />

              <span className="mt-16 block text-xs tracking-[0.18em] text-black/35">
                02
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Data Extraction
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-black/55">
                Extract relevant information from documents, images and other
                supported sources so it can be processed and analyzed.
              </p>
            </div>

            {/* Data Analysis */}
            <div className="bg-white p-8 lg:p-10">
              <BarChart3 size={28} strokeWidth={1.5} />

              <span className="mt-16 block text-xs tracking-[0.18em] text-black/35">
                03
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Data Analysis
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-black/55">
                Apply analytical methods to structured information to identify
                patterns, relationships and relevant signals.
              </p>
            </div>

            {/* Decision Support */}
            <div className="bg-white p-8 lg:p-10">
              <Brain size={28} strokeWidth={1.5} />

              <span className="mt-16 block text-xs tracking-[0.18em] text-black/35">
                04
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Decision Support
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-black/55">
                Turn processed information and analysis into structured
                outputs that support clearer decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE WORK
      ========================================================= */}
      <section className="border-y border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  How We Work
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                A practical path from problem to solution.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-black/50">
                We break complex requirements into clear stages so the
                resulting system remains understandable, scalable and useful.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              {/* Understand */}
              <div className="grid grid-cols-[52px_1fr] gap-6 border-t border-black/10 py-8">
                <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                  01
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Understand
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                    Define the problem, available information, system
                    requirements and desired outcome.
                  </p>
                </div>
              </div>

              {/* Structure */}
              <div className="grid grid-cols-[52px_1fr] gap-6 border-t border-black/10 py-8">
                <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                  02
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Structure
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                    Design the data flow, processing steps and software
                    components required by the solution.
                  </p>
                </div>
              </div>

              {/* Build */}
              <div className="grid grid-cols-[52px_1fr] gap-6 border-t border-black/10 py-8">
                <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                  03
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Build
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                    Develop the required data, software and analytical
                    components into a working system.
                  </p>
                </div>
              </div>

              {/* Analyze */}
              <div className="grid grid-cols-[52px_1fr] gap-6 border-t border-black/10 py-8">
                <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                  04
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Analyze
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                    Connect processed information and context to produce
                    meaningful analysis.
                  </p>
                </div>
              </div>

              {/* Deliver */}
              <div className="grid grid-cols-[52px_1fr] gap-6 border-y border-black/10 py-8">
                <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                  05
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Deliver
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                    Present the resulting information through a practical
                    interface, report or decision-support workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED SOLUTION — STOCK ANALYSIS
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            {/* Text */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Featured Solution
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Stock Analysis
              </h2>

              <p className="mt-6 text-xl leading-8 text-black/60">
                Connecting market data, extracted information and analytical
                processing.
              </p>

              <p className="mt-6 max-w-xl text-base leading-7 text-black/50">
                Our Stock Analysis platform is being developed around a
                structured workflow for collecting market information,
                extracting useful data, processing it and presenting the
                resulting analysis.
              </p>

              <Link
                to="/stock-analysis"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore Stock Analysis

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Visual */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="overflow-hidden border border-black/10 bg-black text-white">
                <div className="border-b border-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                        Stock Analysis
                      </span>

                      <p className="mt-2 text-lg font-medium">
                        Analysis Workflow
                      </p>
                    </div>

                    <Layers3
                      size={21}
                      strokeWidth={1.5}
                      className="text-white/40"
                    />
                  </div>
                </div>

                <div className="divide-y divide-white/10">
                  {/* Market Data */}
                  <div className="flex items-center gap-5 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10">
                      <BarChart3
                        size={18}
                        strokeWidth={1.5}
                        className="text-white/50"
                      />
                    </div>

                    <div className="flex-1">
                      <span className="text-xs text-white/35">
                        01
                      </span>

                      <p className="mt-1 text-sm font-medium">
                        Market Data
                      </p>
                    </div>

                    <span className="text-xs text-white/35">
                      Input
                    </span>
                  </div>

                  {/* Extraction */}
                  <div className="flex items-center gap-5 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10">
                      <FileSearch
                        size={18}
                        strokeWidth={1.5}
                        className="text-white/50"
                      />
                    </div>

                    <div className="flex-1">
                      <span className="text-xs text-white/35">
                        02
                      </span>

                      <p className="mt-1 text-sm font-medium">
                        Data Extraction
                      </p>
                    </div>

                    <span className="text-xs text-white/35">
                      Process
                    </span>
                  </div>

                  {/* Processing */}
                  <div className="flex items-center gap-5 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10">
                      <Database
                        size={18}
                        strokeWidth={1.5}
                        className="text-white/50"
                      />
                    </div>

                    <div className="flex-1">
                      <span className="text-xs text-white/35">
                        03
                      </span>

                      <p className="mt-1 text-sm font-medium">
                        Data Processing
                      </p>
                    </div>

                    <span className="text-xs text-white/35">
                      Process
                    </span>
                  </div>

                  {/* Analysis */}
                  <div className="flex items-center gap-5 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10">
                      <Brain
                        size={18}
                        strokeWidth={1.5}
                        className="text-white/50"
                      />
                    </div>

                    <div className="flex-1">
                      <span className="text-xs text-white/35">
                        04
                      </span>

                      <p className="mt-1 text-sm font-medium">
                        Data Analysis
                      </p>
                    </div>

                    <span className="text-xs text-white/35">
                      Output
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/50" />

                    <span className="text-xs text-white/40">
                      Structured decision support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY THIS APPROACH
      ========================================================= */}
      <section className="border-y border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Our Focus
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Technology should make complex work easier.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2">
                <div className="bg-white p-8">
                  <Database
                    size={25}
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-12 text-xl font-semibold">
                    Reliable Data
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Build data flows that are structured, understandable and
                    ready for practical use.
                  </p>
                </div>

                <div className="bg-white p-8">
                  <Brain
                    size={25}
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-12 text-xl font-semibold">
                    Meaningful Analysis
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Apply analytical methods to help transform information
                    into useful conclusions.
                  </p>
                </div>

                <div className="bg-white p-8">
                  <Layers3
                    size={25}
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-12 text-xl font-semibold">
                    Scalable Systems
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Design solutions that can evolve as requirements, data and
                    workflows grow.
                  </p>
                </div>

                <div className="bg-white p-8">
                  <MoveUpRight
                    size={25}
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-12 text-xl font-semibold">
                    Practical Outputs
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Focus on interfaces, reports and workflows that people can
                    actually use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="border-t border-black/10 pt-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/40">
                  Start a Conversation
                </span>

                <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Have a problem worth turning into a practical solution?
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-black/50">
                  Tell us about the challenge. We can explore the data,
                  technology and system requirements needed to solve it.
                </p>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Contact Blue Scouts

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Solutions;