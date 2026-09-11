import {
  ArrowRight,
  BarChart3,
  Brain,
  FileText,
  Database,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

function StockAnalysis() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
            {/* Hero Heading */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Blue Scouts Group
                </span>
              </div>

              <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                Stock analysis,
                <br />
                structured.
              </h1>
            </div>

            {/* Hero Description */}
            <div className="lg:col-span-4">
              <p className="max-w-md text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                Stock Analysis brings together market data, extracted
                information and analytical processing to create a clearer,
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

          {/* =========================================================
              PRODUCT VISUAL
          ========================================================= */}
          <div className="mt-20 overflow-hidden border border-black/10 bg-[#fafafa]">
            <div className="grid lg:grid-cols-12">
              {/* Overview */}
              <div className="border-b border-black/10 p-7 sm:p-10 lg:col-span-8 lg:border-b-0 lg:border-r">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-black/35">
                    Analysis Overview
                  </span>

                  <span className="flex items-center gap-2 text-xs text-black/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/50" />
                    Structured analysis
                  </span>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {/* Market Data */}
                  <div className="border border-black/10 bg-white p-5">
                    <span className="text-xs text-black/35">
                      Market Data
                    </span>

                    <p className="mt-6 text-2xl font-semibold">
                      Processed
                    </p>

                    <div className="mt-5 h-px bg-black/10">
                      <div className="mt-5 h-px bg-black/10" />
                    </div>
                  </div>

                  {/* Data Extraction */}
                  <div className="border border-black/10 bg-white p-5">
                    <span className="text-xs text-black/35">
                      Data Extraction
                    </span>

                    <p className="mt-6 text-2xl font-semibold">
                      Structured
                    </p>

                    <div className="mt-5 h-px bg-black/10">
                      <div className="mt-5 h-px bg-black/10" />
                    </div>
                  </div>

                  {/* Data Analysis */}
                  <div className="border border-black/10 bg-white p-5">
                    <span className="text-xs text-black/35">
                      Data Analysis
                    </span>

                    <p className="mt-6 text-2xl font-semibold">
                      Organized
                    </p>

                    <div className="mt-5 h-px bg-black/10">
                      <div className="mt-5 h-px bg-black/10" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stock Reading Visual */}
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
                        Stock Overview
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
                        Analysis
                      </span>

                      <span className="text-xs text-white/60">
                        Structured view
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
                Market information is often spread across different sources.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-xl leading-8 text-black/65 sm:text-2xl sm:leading-9">
                Understanding a stock can require working with market data,
                historical information, company documents and other relevant
                sources.
              </p>

              <p className="mt-7 max-w-2xl text-base leading-7 text-black/50">
                Stock Analysis is designed to organize these inputs into a
                common analytical workflow, making it easier to process the
                available information and examine a stock in context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DATA & ANALYSIS
      ========================================================= */}
      <section className="border-y border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                Data & Analysis
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
              Different inputs. One analysis workflow.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">
            {/* Market Data */}
            <div className="bg-white p-8 lg:p-10">
              <BarChart3 size={26} strokeWidth={1.5} />

              <span className="mt-14 block text-xs tracking-[0.18em] text-black/35">
                01
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Market Data
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Relevant stock information and historical market data used for
                analysis.
              </p>
            </div>

            {/* Data Extraction */}
            <div className="bg-white p-8 lg:p-10">
              <FileText size={26} strokeWidth={1.5} />

              <span className="mt-14 block text-xs tracking-[0.18em] text-black/35">
                02
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Data Extraction
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Information from uploaded documents and source material can be
                extracted and prepared for further processing.
              </p>
            </div>

            {/* Data Processing */}
            <div className="bg-white p-8 lg:p-10">
              <Database size={26} strokeWidth={1.5} />

              <span className="mt-14 block text-xs tracking-[0.18em] text-black/35">
                03
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Data Processing
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Collected information is organized and processed into a form
                that can be analyzed consistently.
              </p>
            </div>

            {/* Data Analysis */}
            <div className="bg-white p-8 lg:p-10">
              <Brain size={26} strokeWidth={1.5} />

              <span className="mt-14 block text-xs tracking-[0.18em] text-black/35">
                04
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Data Analysis
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Processed information can be examined to identify patterns,
                relationships and relevant signals.
              </p>
            </div>

            {/* Decision Support */}
            <div className="bg-white p-8 lg:p-10">
              <Search size={26} strokeWidth={1.5} />

              <span className="mt-14 block text-xs tracking-[0.18em] text-black/35">
                05
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Decision Support
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Structured analysis helps users review the available
                information and make more informed assessments.
              </p>
            </div>

            {/* Analysis Reports */}
            <div className="bg-white p-8 lg:p-10">
              <FileText size={26} strokeWidth={1.5} />

              <span className="mt-14 block text-xs tracking-[0.18em] text-black/35">
                06
              </span>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Analysis Reports
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Relevant findings can be presented through a structured report
                for easier review and understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ANALYSIS WORKFLOW
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Analysis Workflow
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                From data to decision support.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-black/50">
                The workflow is designed to move information through clear
                stages of extraction, processing and analysis.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div>
                {/* 01 */}
                <div className="grid grid-cols-[52px_1fr] gap-6 border-t border-black/10 py-8">
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    01
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Collect
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                      Bring together the market data and source information
                      required for analysis.
                    </p>
                  </div>
                </div>

                {/* 02 */}
                <div className="grid grid-cols-[52px_1fr] gap-6 border-t border-black/10 py-8">
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    02
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Extract
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                      Extract useful information from supported documents and
                      source material.
                    </p>
                  </div>
                </div>

                {/* 03 */}
                <div className="grid grid-cols-[52px_1fr] gap-6 border-t border-black/10 py-8">
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    03
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Process
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                      Organize and prepare the collected information for
                      consistent analysis.
                    </p>
                  </div>
                </div>

                {/* 04 */}
                <div className="grid grid-cols-[52px_1fr] gap-6 border-t border-black/10 py-8">
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    04
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Analyze
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                      Examine the available information to identify relevant
                      patterns, relationships and signals.
                    </p>
                  </div>
                </div>

                {/* 05 */}
                <div className="grid grid-cols-[52px_1fr] gap-6 border-y border-black/10 py-8">
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    05
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Support
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                      Present the resulting analysis in a structured form that
                      supports review and decision-making.
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
                  Decision Support
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-5xl">
                A clearer view of the information surrounding a stock.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/50">
                Stock Analysis organizes available information into a
                structured view so users can examine the context behind the
                data.
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
                  {/* Market Data */}
                  <div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">
                        Market data
                      </span>

                      <span className="text-white/60">
                        Processed
                      </span>
                    </div>

                    <div className="mt-2 h-1 bg-white/10">
                      <div className="h-1 w-[82%] bg-white/40" />
                    </div>
                  </div>

                  {/* Extracted Data */}
                  <div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">
                        Extracted data
                      </span>

                      <span className="text-white/60">
                        Structured
                      </span>
                    </div>

                    <div className="mt-2 h-1 bg-white/10">
                      <div className="h-1 w-[72%] bg-white/40" />
                    </div>
                  </div>

                  {/* Analysis */}
                  <div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">
                        Data analysis
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
                  Analysis Report
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Analysis presented with context.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border border-black/10">
                {/* Report Header */}
                <div className="border-b border-black/10 p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-[0.18em] text-black/35">
                        Stock Analysis Report
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

                {/* Report Sections */}
                <div className="grid sm:grid-cols-2">
                  <div className="border-b border-black/10 p-6 sm:border-r sm:p-8">
                    <span className="text-xs text-black/35">
                      Market data
                    </span>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      Historical information and relevant market movement.
                    </p>
                  </div>

                  <div className="border-b border-black/10 p-6 sm:p-8">
                    <span className="text-xs text-black/35">
                      Data processing
                    </span>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      Processed information organized for further analysis.
                    </p>
                  </div>

                  <div className="border-b border-black/10 p-6 sm:border-r sm:p-8">
                    <span className="text-xs text-black/35">
                      Extracted information
                    </span>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      Information extracted from supported source material.
                    </p>
                  </div>

                  <div className="border-b border-black/10 p-6 sm:p-8">
                    <span className="text-xs text-black/35">
                      Analysis
                    </span>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      Analytical interpretation of the available information
                      and relevant signals.
                    </p>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <Brain
                      size={20}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-black/40"
                    />

                    <p className="text-sm leading-6 text-black/55">
                      The report is designed to organize available information
                      and analysis. It does not guarantee future market
                      outcomes or constitute financial advice.
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
                Better data supports better decisions.
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

export default StockAnalysis;