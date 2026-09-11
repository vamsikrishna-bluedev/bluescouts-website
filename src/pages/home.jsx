import {
  ArrowDown,
  ArrowRight,
  MoveUpRight,
  Database,
  ScanText,
  Brain,
  BarChart3,
  LineChart,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
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
                  Data • Analysis • Technology
                </span>
              </div>

              <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                Building practical
                <br />
                solutions from
                <br />
                complex data.
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                Blue Scouts Group develops data-driven solutions that
                transform complex information into meaningful analysis and
                useful decision support.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/solutions"
                  className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Explore Solutions

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-black/5"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-20 flex items-center justify-between border-t border-black/10 pt-6">
            <span className="text-xs uppercase tracking-[0.18em] text-black/35">
              Blue Scouts Group
            </span>

            <ArrowDown
              size={18}
              strokeWidth={1.5}
              className="text-black/35"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Who We Are
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Turning complex information into meaningful analysis.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
                Blue Scouts Group works at the intersection of data,
                technology and software to build practical systems for
                complex information.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-black/50">
                From data processing and extraction to analytical workflows
                and decision support, our focus is on making information
                easier to work with and understand.
              </p>

              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-medium"
              >
                Learn more about us

                <MoveUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================= */}
      <section className="border-y border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                What We Do
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
              From raw information to useful analysis.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/50">
              We combine data, software and analytical methods to create
              systems that organize complex information and turn it into
              practical outputs.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-4">
            {/* Data Processing */}
            <div className="bg-white p-8 lg:p-9">
              <Database size={26} strokeWidth={1.5} />

              <span className="mt-14 block text-xs tracking-[0.18em] text-black/35">
                01
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Data Processing
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Organizing and preparing complex data so it can be used
                consistently across analytical workflows.
              </p>
            </div>

            {/* Data Extraction */}
            <div className="bg-white p-8 lg:p-9">
              <ScanText size={26} strokeWidth={1.5} />

              <span className="mt-14 block text-xs tracking-[0.18em] text-black/35">
                02
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Data Extraction
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Extracting useful information from documents, images and
                other supported sources.
              </p>
            </div>

            {/* Data Analysis */}
            <div className="bg-white p-8 lg:p-9">
              <BarChart3 size={26} strokeWidth={1.5} />

              <span className="mt-14 block text-xs tracking-[0.18em] text-black/35">
                03
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Data Analysis
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Examining processed information to identify patterns,
                relationships and relevant signals.
              </p>
            </div>

            {/* Decision Support */}
            <div className="bg-white p-8 lg:p-9">
              <Brain size={26} strokeWidth={1.5} />

              <span className="mt-14 block text-xs tracking-[0.18em] text-black/35">
                04
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Decision Support
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Presenting structured outputs that help people review
                information and make better-informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED PRODUCT — STOCK ANALYSIS
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            {/* Text */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Featured Product
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Stock analysis,
                <br />
                built around the data.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-black/55">
                Our Stock Analysis platform brings together market data,
                extracted information and analytical processing to create a
                structured view of a stock.
              </p>

              <p className="mt-5 max-w-xl text-base leading-7 text-black/45">
                The workflow is designed to move from data collection and
                extraction through processing and analysis toward structured
                decision support.
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

            {/* Product Visual */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border border-black/10 bg-[#fafafa]">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-black/10 p-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.18em] text-black/35">
                      Stock Analysis
                    </span>

                    <p className="mt-2 text-lg font-semibold">
                      Analysis Overview
                    </p>
                  </div>

                  <LineChart
                    size={22}
                    strokeWidth={1.5}
                    className="text-black/35"
                  />
                </div>

                {/* Analysis Items */}
                <div className="grid sm:grid-cols-2">
                  {/* Market Data */}
                  <div className="border-b border-black/10 p-6 sm:border-r">
                    <div className="flex items-center gap-3">
                      <BarChart3
                        size={18}
                        strokeWidth={1.5}
                        className="text-black/45"
                      />

                      <span className="text-xs text-black/40">
                        Market Data
                      </span>
                    </div>

                    <p className="mt-8 text-lg font-medium">
                      Structured
                    </p>

                    <div className="mt-5 h-px bg-black/10">
                      <div className="h-px bg-black/10" />
                    </div>
                  </div>

                  {/* Data Extraction */}
                  <div className="border-b border-black/10 p-6">
                    <div className="flex items-center gap-3">
                      <ScanText
                        size={18}
                        strokeWidth={1.5}
                        className="text-black/45"
                      />

                      <span className="text-xs text-black/40">
                        Data Extraction
                      </span>
                    </div>

                    <p className="mt-8 text-lg font-medium">
                      Processed
                    </p>

                    <div className="mt-5 h-px bg-black/10">
                      <div className="h-px bg-black/10" />
                    </div>
                  </div>

                  {/* Data Processing */}
                  <div className="border-b border-black/10 p-6 sm:border-b-0 sm:border-r">
                    <div className="flex items-center gap-3">
                      <Database
                        size={18}
                        strokeWidth={1.5}
                        className="text-black/45"
                      />

                      <span className="text-xs text-black/40">
                        Data Processing
                      </span>
                    </div>

                    <p className="mt-8 text-lg font-medium">
                      Organized
                    </p>

                    <div className="mt-5 h-px bg-black/10">
                      <div className="h-px bg-black/10" />
                    </div>
                  </div>

                  {/* Data Analysis */}
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <Brain
                        size={18}
                        strokeWidth={1.5}
                        className="text-black/45"
                      />

                      <span className="text-xs text-black/40">
                        Data Analysis
                      </span>
                    </div>

                    <p className="mt-8 text-lg font-medium">
                      Reviewed
                    </p>

                    <div className="mt-5 h-px bg-black/10">
                      <div className="h-px bg-black/10" />
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-black/10 p-6">
                  <div className="flex items-center gap-3">
                    <FileText
                      size={18}
                      strokeWidth={1.5}
                      className="text-black/35"
                    />

                    <span className="text-xs text-black/40">
                      Structured analysis workflow
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR APPROACH
      ========================================================= */}
      <section className="border-y border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Our Approach
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Better analysis begins with understanding the data.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-0">
                {/* Step 1 */}
                <div className="grid grid-cols-[52px_1fr] gap-6 border-t border-black/10 py-8">
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    01
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Understand
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                      We first understand the problem, available information
                      and the outcome the system needs to support.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="grid grid-cols-[52px_1fr] gap-6 border-t border-black/10 py-8">
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    02
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Structure
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                      Information is organized into reliable data flows that
                      can be processed and reused.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="grid grid-cols-[52px_1fr] gap-6 border-t border-black/10 py-8">
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    03
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Analyze
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                      Analytical methods are applied to identify useful
                      patterns, relationships and relevant information.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="grid grid-cols-[52px_1fr] gap-6 border-y border-black/10 py-8">
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    04
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Deliver
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                      The resulting information is presented through practical
                      outputs designed for easier review and decision support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="border-t border-black/10 pt-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/40">
                  Blue Scouts Group
                </span>

                <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Turning data and technology into useful solutions.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-black/50">
                  Whether the challenge involves data processing, extraction,
                  analysis or software development, we focus on building
                  systems that solve practical problems.
                </p>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Start a Conversation

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

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <img
                  src="/favicon.svg"
                  alt="Blue Scouts Group"
                  className="h-8 w-8 object-contain"
                />

                <span className="text-sm font-medium">
                  Blue Scouts Group
                </span>
              </div>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/45">
                Building practical solutions from complex data through
                technology, analysis and structured decision support.
              </p>
            </div>

            <div className="lg:col-span-2">
              <span className="text-xs uppercase tracking-[0.18em] text-white/30">
                Company
              </span>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
                <Link
                  to="/about"
                  className="transition-colors hover:text-white"
                >
                  About
                </Link>

                <Link
                  to="/solutions"
                  className="transition-colors hover:text-white"
                >
                  Solutions
                </Link>

                <Link
                  to="/insights"
                  className="transition-colors hover:text-white"
                >
                  Insights
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <span className="text-xs uppercase tracking-[0.18em] text-white/30">
                Product
              </span>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
                <Link
                  to="/stock-analysis"
                  className="transition-colors hover:text-white"
                >
                  Stock Analysis
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <span className="text-xs uppercase tracking-[0.18em] text-white/30">
                Contact
              </span>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
                <Link
                  to="/contact"
                  className="transition-colors hover:text-white"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Blue Scouts Group. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;