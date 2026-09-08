import {
  ArrowRight,
  BarChart3,
  Brain,
  Database,
  FileText,
  Image,
  Newspaper,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

function StockIntelligence() {
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
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Blue Scouts Intelligence
                </span>
              </div>

              <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                Market intelligence,
                <br />
                connected.
              </h1>

            </div>

            <div className="lg:col-span-4">

              <p className="max-w-md text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                Stock Intelligence brings market data, documents, news,
                historical information and events together to create a
                structured view of a stock.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Talk to Us

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>


          {/* Product visual */}
          <div className="mt-20 overflow-hidden border border-black/10 bg-[#fafafa]">

            <div className="grid lg:grid-cols-12">

              <div className="border-b border-black/10 p-7 sm:p-10 lg:col-span-8 lg:border-b-0 lg:border-r">

                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-black/35">
                    Intelligence Overview
                  </span>

                  <span className="flex items-center gap-2 text-xs text-black/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/50" />
                    Multi-source analysis
                  </span>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">

                  <div className="border border-black/10 bg-white p-5">
                    <span className="text-xs text-black/35">
                      Market Data
                    </span>

                    <p className="mt-6 text-2xl font-semibold">
                      Connected
                    </p>

                    <div className="mt-5 h-px bg-black/10">
                      <div className="h-px w-[82%] bg-black/50" />
                    </div>
                  </div>

                  <div className="border border-black/10 bg-white p-5">
                    <span className="text-xs text-black/35">
                      News & Events
                    </span>

                    <p className="mt-6 text-2xl font-semibold">
                      Analyzed
                    </p>

                    <div className="mt-5 h-px bg-black/10">
                      <div className="h-px w-[68%] bg-black/50" />
                    </div>
                  </div>

                  <div className="border border-black/10 bg-white p-5">
                    <span className="text-xs text-black/35">
                      Documents
                    </span>

                    <p className="mt-6 text-2xl font-semibold">
                      Extracted
                    </p>

                    <div className="mt-5 h-px bg-black/10">
                      <div className="h-px w-[74%] bg-black/50" />
                    </div>
                  </div>

                </div>

              </div>


              <div className="relative min-h-[260px] bg-black lg:col-span-4">

                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #fff 1px, transparent 1px),
                      linear-gradient(to bottom, #fff 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />

                <div className="relative flex h-full items-center justify-center p-8">

                  <div className="w-full max-w-xs border border-white/15 p-5">

                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                        Stock Reading
                      </span>

                      <TrendingUp
                        size={18}
                        strokeWidth={1.5}
                        className="text-white/50"
                      />
                    </div>

                    <div className="mt-8 flex items-end gap-2">
                      <div className="h-8 w-2 bg-white/20" />
                      <div className="h-14 w-2 bg-white/30" />
                      <div className="h-11 w-2 bg-white/20" />
                      <div className="h-20 w-2 bg-white/40" />
                      <div className="h-16 w-2 bg-white/30" />
                      <div className="h-24 w-2 bg-white/50" />
                      <div className="h-20 w-2 bg-white/30" />
                      <div className="h-28 w-2 bg-white/60" />
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-xs text-white/35">
                        Context
                      </span>

                      <span className="text-xs text-white/60">
                        Connected signals
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          PROBLEM
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            <div className="lg:col-span-4">

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  The Problem
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Market information rarely exists in one place.
              </h2>

            </div>


            <div className="lg:col-span-7 lg:col-start-6">

              <p className="text-xl leading-8 text-black/65 sm:text-2xl sm:leading-9">
                A stock can be affected by financial information, company
                events, historical movement, market conditions, documents and
                developments reported across different sources.
              </p>

              <p className="mt-7 max-w-2xl text-base leading-7 text-black/50">
                Stock Intelligence is designed to bring these different
                information sources into a common analytical workflow, making
                it easier to examine the context surrounding a stock.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          DATA SOURCES
      ========================================================= */}
      <section className="border-y border-black/10 bg-[#fafafa]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                Connected Information
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
              Different sources. One intelligence workflow.
            </h2>

          </div>


          <div className="mt-16 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">

            {/* Market Data */}
            <div className="bg-white p-8 lg:p-10">

              <BarChart3
                size={26}
                strokeWidth={1.5}
              />

              <span className="mt-14 block text-xs tracking-[0.18em] text-black/35">
                01
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Market Data
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Relevant stock information and historical market data used to
                understand price and market behavior.
              </p>

            </div>


            {/* Documents */}
            <div className="bg-white p-8 lg:p-10">

              <FileText
                size={26}
                strokeWidth={1.5}
              />

              <span className="mt-14 block text-xs tracking-[0.18em] text-black/35">
                02
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Documents
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Uploaded images and documents can be processed to extract
                relevant information.
              </p>

            </div>


            {/* OCR */}
            <div className="bg-white p-8 lg:p-10">

              <Image
                size={26}
                strokeWidth={1.5}
              />

              <span className="mt-14 block text-xs tracking-[0.18em] text-black/35">
                03
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                OCR Extraction
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Information contained within uploaded images can be extracted
                and converted into structured data.
              </p>

            </div>


            {/* News */}
            <div className="bg-white p-8 lg:p-10">

              <Newspaper
                size={26}
                strokeWidth={1.5}
              />

              <span className="mt-14 block text-xs tracking-[0.18em] text-black/35">
                04
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                News
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Relevant news and developments provide additional context
                around a company and its market environment.
              </p>

            </div>


            {/* Events */}
            <div className="bg-white p-8 lg:p-10">

              <Search
                size={26}
                strokeWidth={1.5}
              />

              <span className="mt-14 block text-xs tracking-[0.18em] text-black/35">
                05
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Events & Context
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Relevant events and surrounding information are considered
                alongside the stock data.
              </p>

            </div>


            {/* Intelligence */}
            <div className="bg-white p-8 lg:p-10">

              <Brain
                size={26}
                strokeWidth={1.5}
              />

              <span className="mt-14 block text-xs tracking-[0.18em] text-black/35">
                06
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Intelligent Analysis
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Connected information is analyzed to produce a structured
                interpretation of the available signals.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PIPELINE
      ========================================================= */}
      <section>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            <div className="lg:col-span-4">

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Intelligence Pipeline
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                From information to intelligence.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-black/50">
                The platform connects multiple stages of the information
                lifecycle instead of treating each source independently.
              </p>

            </div>


            <div className="lg:col-span-7 lg:col-start-6">

              <div className="space-y-0">

                {/* Collect */}
                <div className="grid grid-cols-[52px_1fr] gap-6 border-t border-black/10 py-8">

                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    01
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Collect
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                      Bring together stock information, documents, news,
                      historical data and relevant events.
                    </p>
                  </div>

                </div>


                {/* Extract */}
                <div className="grid grid-cols-[52px_1fr] gap-6 border-t border-black/10 py-8">

                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    02
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Extract
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                      Extract useful information from uploaded images and
                      documents using OCR and data-processing workflows.
                    </p>
                  </div>

                </div>


                {/* Connect */}
                <div className="grid grid-cols-[52px_1fr] gap-6 border-t border-black/10 py-8">

                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    03
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Connect
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                      Relate extracted information to historical movement,
                      news, events and other relevant stock context.
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
                      Examine relationships between the available information
                      and identify relevant signals and potential implications.
                    </p>
                  </div>

                </div>


                {/* Report */}
                <div className="grid grid-cols-[52px_1fr] gap-6 border-y border-black/10 py-8">

                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    05
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Report
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                      Present the resulting stock reading and supporting
                      intelligence through a structured report.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          STOCK READING
      ========================================================= */}
      <section className="border-y border-black/10 bg-black text-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">

            <div className="lg:col-span-6">

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-white" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/40">
                  Stock Reading
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-5xl">
                A clearer view of the information surrounding a stock.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/50">
                The platform organizes relevant information into a structured
                reading so users can understand the context behind the
                available signals.
              </p>

            </div>


            <div className="lg:col-span-5 lg:col-start-8">

              <div className="border border-white/15 p-6">

                <div className="flex items-center justify-between border-b border-white/10 pb-5">

                  <div>
                    <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                      Analysis
                    </span>

                    <p className="mt-2 text-lg font-medium">
                      Stock context
                    </p>
                  </div>

                  <Sparkles
                    size={20}
                    strokeWidth={1.5}
                    className="text-white/45"
                  />

                </div>


                <div className="mt-6 space-y-5">

                  <div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">
                        Historical context
                      </span>

                      <span className="text-white/60">
                        Reviewed
                      </span>
                    </div>

                    <div className="mt-2 h-1 bg-white/10">
                      <div className="h-1 w-[82%] bg-white/40" />
                    </div>
                  </div>


                  <div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">
                        News context
                      </span>

                      <span className="text-white/60">
                        Connected
                      </span>
                    </div>

                    <div className="mt-2 h-1 bg-white/10">
                      <div className="h-1 w-[72%] bg-white/40" />
                    </div>
                  </div>


                  <div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">
                        Event context
                      </span>

                      <span className="text-white/60">
                        Reviewed
                      </span>
                    </div>

                    <div className="mt-2 h-1 bg-white/10">
                      <div className="h-1 w-[64%] bg-white/40" />
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          REPORT
      ========================================================= */}
      <section>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            <div className="lg:col-span-4">

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Intelligence Report
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Intelligence presented with context.
              </h2>

            </div>


            <div className="lg:col-span-7 lg:col-start-6">

              <div className="border border-black/10">

                <div className="border-b border-black/10 p-6 sm:p-8">

                  <div className="flex items-center justify-between">

                    <div>
                      <span className="text-xs uppercase tracking-[0.18em] text-black/35">
                        Stock Intelligence Report
                      </span>

                      <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                        Structured analysis
                      </h3>
                    </div>

                    <FileText
                      size={22}
                      strokeWidth={1.5}
                      className="text-black/35"
                    />

                  </div>

                </div>


                <div className="grid sm:grid-cols-2">

                  <div className="border-b border-black/10 p-6 sm:border-r sm:p-8">
                    <span className="text-xs text-black/35">
                      Market context
                    </span>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      Historical information and relevant market movement.
                    </p>
                  </div>

                  <div className="border-b border-black/10 p-6 sm:p-8">
                    <span className="text-xs text-black/35">
                      News & events
                    </span>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      Relevant developments connected to the company or stock.
                    </p>
                  </div>

                  <div className="border-b border-black/10 p-6 sm:border-r sm:p-8">
                    <span className="text-xs text-black/35">
                      Extracted information
                    </span>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      Information extracted from uploaded source material.
                    </p>
                  </div>

                  <div className="border-b border-black/10 p-6 sm:p-8">
                    <span className="text-xs text-black/35">
                      Potential implications
                    </span>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      Analytical interpretation of how connected information
                      may relate to the stock.
                    </p>
                  </div>

                </div>


                <div className="p-6 sm:p-8">

                  <div className="flex items-start gap-4">

                    <Brain
                      size={20}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-black/40"
                    />

                    <p className="text-sm leading-6 text-black/55">
                      The report is designed to organize available evidence and
                      context. It does not guarantee future market outcomes or
                      constitute financial advice.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

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
                Explore Blue Scouts Group
              </span>

              <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Intelligence begins with better information.
              </h2>

            </div>


            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Contact Us

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default StockIntelligence;