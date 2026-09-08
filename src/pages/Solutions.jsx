import {
  ArrowRight,
  BarChart3,
  Brain,
  Database,
  FileSearch,
  Layers3,
} from "lucide-react";
import { Link } from "react-router-dom";

function Solutions() {
  return (
    <main className="bg-white text-black">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-8 bg-black"
                  aria-hidden="true"
                />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Our Solutions
                </span>
              </div>

              <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Intelligence built around real problems.
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                We combine data, technology and intelligent analysis to build
                systems that turn complex information into useful insight.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          CORE SOLUTIONS INTRO
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-8 bg-black"
                  aria-hidden="true"
                />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Core Capabilities
                </span>
              </div>

              <h2 className="mt-8 max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                From raw information to meaningful intelligence.
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="max-w-2xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                Our solutions are designed around the complete information
                lifecycle — collecting relevant data, extracting useful
                information, analyzing relationships and presenting results
                clearly.
              </p>
            </div>

          </div>


          {/* =====================================================
              SOLUTION GRID
          ===================================================== */}
          <div className="mt-16 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">

            {/* Data Intelligence */}
            <div className="group bg-white p-8 transition-colors duration-300 hover:bg-[#fafafa] lg:p-10">
              <Database
                size={27}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <div className="mt-16 flex items-start justify-between gap-6">
                <div>
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    01
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    Data Intelligence
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-black/55">
                    Organizing information from relevant sources so that it can
                    be analyzed, connected and understood.
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black"
                />
              </div>
            </div>


            {/* Information Extraction */}
            <div className="group bg-white p-8 transition-colors duration-300 hover:bg-[#fafafa] lg:p-10">
              <FileSearch
                size={27}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <div className="mt-16 flex items-start justify-between gap-6">
                <div>
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    02
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    Information Extraction
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-black/55">
                    Extracting structured information from documents, images
                    and other complex sources.
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black"
                />
              </div>
            </div>


            {/* Intelligent Analysis */}
            <div className="group bg-white p-8 transition-colors duration-300 hover:bg-[#fafafa] lg:p-10">
              <Brain
                size={27}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <div className="mt-16 flex items-start justify-between gap-6">
                <div>
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    03
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    Intelligent Analysis
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-black/55">
                    Relating information, context and events to identify
                    patterns and produce structured insights.
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black"
                />
              </div>
            </div>


            {/* Decision Support */}
            <div className="group bg-white p-8 transition-colors duration-300 hover:bg-[#fafafa] lg:p-10">
              <BarChart3
                size={27}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <div className="mt-16 flex items-start justify-between gap-6">
                <div>
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    04
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    Decision Support
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-black/55">
                    Presenting complex findings in a structured way that makes
                    information easier to interpret and evaluate.
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          SOLUTION PROCESS
      ========================================================= */}
      <section className="border-y border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-8 bg-black"
                  aria-hidden="true"
                />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  How It Connects
                </span>
              </div>

              <h2 className="mt-8 max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Every solution starts with information.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div>

                {/* Step 01 */}
                <div className="grid grid-cols-[48px_1fr] gap-6 border-t border-black/10 py-7">
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    01
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      Collect
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-black/55">
                      Gather relevant information from the sources required
                      for the problem.
                    </p>
                  </div>
                </div>


                {/* Step 02 */}
                <div className="grid grid-cols-[48px_1fr] gap-6 border-t border-black/10 py-7">
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    02
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      Structure
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-black/55">
                      Transform fragmented information into structured,
                      usable data.
                    </p>
                  </div>
                </div>


                {/* Step 03 */}
                <div className="grid grid-cols-[48px_1fr] gap-6 border-t border-black/10 py-7">
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    03
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      Analyze
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-black/55">
                      Connect data, context and events to produce meaningful
                      intelligence.
                    </p>
                  </div>
                </div>


                {/* Step 04 */}
                <div className="grid grid-cols-[48px_1fr] gap-6 border-y border-black/10 py-7">
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    04
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      Communicate
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-black/55">
                      Present the resulting intelligence in a clear and useful
                      format.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          FEATURED SOLUTION
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="flex items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-8 bg-black"
                  aria-hidden="true"
                />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Featured Solution
                </span>
              </div>

              <h2 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Stock Intelligence
              </h2>
            </div>

            <Link
              to="/stock-intelligence"
              className="group hidden items-center gap-2 text-sm font-medium sm:flex"
            >
              Explore Platform

              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>


          <div className="mt-12 overflow-hidden border border-black/10 bg-black text-white">
            <div className="grid lg:grid-cols-12">

              <div className="p-8 sm:p-10 lg:col-span-7 lg:p-14">

                <div className="flex items-center gap-3">
                  <span
                    className="h-px w-8 bg-white"
                    aria-hidden="true"
                  />

                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                    Intelligence Platform
                  </span>
                </div>

                <h3 className="mt-8 max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-4xl">
                  Connecting market data, documents, news and events.
                </h3>

                <p className="mt-6 max-w-2xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                  Our Stock Intelligence platform brings multiple sources of
                  information together to help analyze stocks and present the
                  resulting intelligence through structured reports.
                </p>

                <Link
                  to="/stock-intelligence"
                  className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Explore Stock Intelligence

                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>


              {/* Visual system */}
              <div className="relative min-h-[280px] border-t border-white/10 lg:col-span-5 lg:min-h-full lg:border-l lg:border-t-0">

                <div
                  className="absolute inset-0 opacity-[0.12]"
                  aria-hidden="true"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #fff 1px, transparent 1px),
                      linear-gradient(to bottom, #fff 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                  }}
                />

                <div className="relative flex h-full items-center justify-center p-10">
                  <div className="w-full max-w-sm">

                    <div className="border border-white/15 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                          Intelligence
                        </span>

                        <Layers3
                          size={18}
                          strokeWidth={1.5}
                          aria-hidden="true"
                          className="text-white/45"
                        />
                      </div>

                      <div className="mt-7 space-y-3">

                        <div className="h-2 w-full bg-white/10">
                          <div className="h-2 w-[82%] bg-white/45" />
                        </div>

                        <div className="h-2 w-[78%] bg-white/10">
                          <div className="h-2 w-[61%] bg-white/35" />
                        </div>

                        <div className="h-2 w-[90%] bg-white/10">
                          <div className="h-2 w-[73%] bg-white/35" />
                        </div>

                      </div>

                      <div className="mt-7 grid grid-cols-3 gap-2">
                        <div className="h-12 border border-white/10" />
                        <div className="h-12 border border-white/10" />
                        <div className="h-12 border border-white/10" />
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>


          {/* Mobile link */}
          <Link
            to="/stock-intelligence"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium sm:hidden"
          >
            Explore Platform

            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="border-t border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="flex flex-col gap-8 border-t border-black/10 pt-12 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/40">
                Work With Us
              </span>

              <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Have a problem worth turning into intelligence?
              </h2>
            </div>

            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Talk to Blue Scouts Group

              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Solutions;