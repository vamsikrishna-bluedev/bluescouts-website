import {
  ArrowDown,
  ArrowRight,
  MoveUpRight,
  Database,
  ScanText,
  Brain,
  BarChart3,
  Newspaper,
  LineChart,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white text-black">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-black/[0.035] blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-black" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-black/55">
                Intelligence • Data • Technology
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              Building intelligent
              <br />
              solutions from
              <br />
              <span className="text-black/45">complex data.</span>
            </h1>

            <p className="mt-9 max-w-2xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
              Blue Scouts Group develops data-driven and intelligent solutions
              that transform complex information into meaningful insights.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/solutions"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/85"
              >
                Explore Our Solutions

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:border-black/30 hover:bg-black/[0.03]"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-8 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-xs leading-5 text-black/45">
              Turning information into structured intelligence and
              decision-support systems.
            </p>

            <a
              href="#company"
              className="group flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-black/55 transition-colors hover:text-black"
            >
              Discover more

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/15 transition-transform duration-300 group-hover:translate-y-1">
                <ArrowDown size={14} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPANY INTRODUCTION
      ========================================================= */}
      <section
        id="company"
        className="border-t border-black/10 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/50">
                  About Blue Scouts
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Turning complex information into meaningful intelligence.
              </h2>

              <div className="mt-8 max-w-2xl">
                <p className="text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
                  Blue Scouts Group focuses on building data-driven and
                  intelligent solutions that help transform complex
                  information into structured insights and useful
                  decision-support systems.
                </p>
              </div>

              <Link
                to="/about"
                className="group mt-10 inline-flex items-center gap-3 text-sm font-medium"
              >
                Learn more about Blue Scouts Group

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                  <MoveUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================= */}
      <section
        id="solutions"
        className="border-t border-black/10 bg-[#fafafa]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/50">
                  What We Do
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                From raw information to actionable intelligence.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
                We bring together data processing, information extraction,
                analysis and intelligent systems to turn complex data into
                structured insights.
              </p>
            </div>
          </div>

          <div className="mt-20 grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Data Intelligence */}
            <div className="group border-b border-r border-black/10 bg-white p-7 transition-colors duration-300 hover:bg-black hover:text-white lg:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-colors duration-300 group-hover:border-white/20">
                <Database size={19} strokeWidth={1.7} />
              </div>

              <div className="mt-12">
                <span className="text-xs font-medium tracking-wider text-black/35 group-hover:text-white/40">
                  01
                </span>

                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  Data Intelligence
                </h3>

                <p className="mt-4 text-sm leading-6 text-black/55 group-hover:text-white/60">
                  Collecting, processing and structuring information from
                  multiple data sources.
                </p>
              </div>

              <ArrowRight
                size={18}
                className="mt-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>

            {/* Information Extraction */}
            <div className="group border-b border-r border-black/10 bg-white p-7 transition-colors duration-300 hover:bg-black hover:text-white lg:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-colors duration-300 group-hover:border-white/20">
                <ScanText size={19} strokeWidth={1.7} />
              </div>

              <div className="mt-12">
                <span className="text-xs font-medium tracking-wider text-black/35 group-hover:text-white/40">
                  02
                </span>

                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  Information Extraction
                </h3>

                <p className="mt-4 text-sm leading-6 text-black/55 group-hover:text-white/60">
                  Extracting useful structured information from unstructured
                  sources and documents.
                </p>
              </div>

              <ArrowRight
                size={18}
                className="mt-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>

            {/* Intelligent Analysis */}
            <div className="group border-b border-r border-black/10 bg-white p-7 transition-colors duration-300 hover:bg-black hover:text-white lg:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-colors duration-300 group-hover:border-white/20">
                <Brain size={19} strokeWidth={1.7} />
              </div>

              <div className="mt-12">
                <span className="text-xs font-medium tracking-wider text-black/35 group-hover:text-white/40">
                  03
                </span>

                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  Intelligent Analysis
                </h3>

                <p className="mt-4 text-sm leading-6 text-black/55 group-hover:text-white/60">
                  Combining multiple signals and contextual information to
                  generate meaningful analysis.
                </p>
              </div>

              <ArrowRight
                size={18}
                className="mt-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>

            {/* Decision Support */}
            <div className="group border-b border-r border-black/10 bg-white p-7 transition-colors duration-300 hover:bg-black hover:text-white lg:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-colors duration-300 group-hover:border-white/20">
                <BarChart3 size={19} strokeWidth={1.7} />
              </div>

              <div className="mt-12">
                <span className="text-xs font-medium tracking-wider text-black/35 group-hover:text-white/40">
                  04
                </span>

                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  Decision Support
                </h3>

                <p className="mt-4 text-sm leading-6 text-black/55 group-hover:text-white/60">
                  Presenting structured intelligence through reports,
                  insights and decision-support systems.
                </p>
              </div>

              <ArrowRight
                size={18}
                className="mt-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>

          <div className="mt-10 flex justify-end">
            <Link
              to="/solutions"
              className="group inline-flex items-center gap-3 text-sm font-medium"
            >
              Explore our solutions

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                <MoveUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED PRODUCT
      ========================================================= */}
      <section
        id="stock-intelligence"
        className="border-t border-black/10 bg-black text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          {/* Header */}
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-white" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/45">
                  Featured Product
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs uppercase tracking-[0.15em] text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Stock Intelligence
              </div>

              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Intelligence for understanding the market.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                Our Stock Intelligence platform brings together market data,
                extracted information, news and contextual events to generate
                structured analysis around individual stocks.
              </p>
            </div>
          </div>

          {/* Product Visualization */}
          <div className="mt-20 overflow-hidden border border-white/10 bg-white/[0.035]">
            <div className="grid lg:grid-cols-12">
              {/* Visualization Side */}
              <div className="relative min-h-[420px] border-b border-white/10 p-7 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-10">
                {/* Fake chart grid */}
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #fff 1px, transparent 1px),
                      linear-gradient(to bottom, #fff 1px, transparent 1px)
                    `,
                    backgroundSize: "52px 52px",
                  }}
                />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                        Intelligence Pipeline
                      </p>

                      <p className="mt-2 text-lg font-medium">
                        Multi-source analysis
                      </p>
                    </div>

                    <LineChart
                      size={22}
                      strokeWidth={1.5}
                      className="text-white/50"
                    />
                  </div>

                  {/* Pipeline */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="border border-white/10 bg-black/70 p-5 backdrop-blur-sm">
                      <ScanText size={19} className="text-white/55" />

                      <p className="mt-5 text-sm font-medium">
                        Document & OCR Data
                      </p>

                      <p className="mt-2 text-xs leading-5 text-white/40">
                        Extracting structured information from uploaded
                        material.
                      </p>
                    </div>

                    <div className="border border-white/10 bg-black/70 p-5 backdrop-blur-sm">
                      <LineChart size={19} className="text-white/55" />

                      <p className="mt-5 text-sm font-medium">
                        Market Data
                      </p>

                      <p className="mt-2 text-xs leading-5 text-white/40">
                        Historical and relevant market information.
                      </p>
                    </div>

                    <div className="border border-white/10 bg-black/70 p-5 backdrop-blur-sm">
                      <Newspaper size={19} className="text-white/55" />

                      <p className="mt-5 text-sm font-medium">
                        News & Events
                      </p>

                      <p className="mt-2 text-xs leading-5 text-white/40">
                        Relevant external events and news surrounding the
                        stock.
                      </p>
                    </div>

                    <div className="border border-white/10 bg-black/70 p-5 backdrop-blur-sm">
                      <Brain size={19} className="text-white/55" />

                      <p className="mt-5 text-sm font-medium">
                        Intelligent Analysis
                      </p>

                      <p className="mt-2 text-xs leading-5 text-white/40">
                        Relating signals to produce structured intelligence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Description */}
              <div className="flex flex-col justify-between p-7 lg:col-span-5 lg:p-10">
                <div>
                  <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                    What it brings together
                  </span>

                  <div className="mt-8 space-y-7">
                    <div className="flex gap-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10">
                        <Database size={15} />
                      </div>

                      <div>
                        <h3 className="text-sm font-medium">
                          Multiple data sources
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white/45">
                          Relevant information is brought together into a
                          unified analysis.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10">
                        <Newspaper size={15} />
                      </div>

                      <div>
                        <h3 className="text-sm font-medium">
                          Contextual events
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white/45">
                          News and events can be considered alongside stock
                          information.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10">
                        <FileText size={15} />
                      </div>

                      <div>
                        <h3 className="text-sm font-medium">
                          Structured reports
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white/45">
                          The resulting analysis is presented through a
                          structured report.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/stock-intelligence"
                  className="group mt-12 inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Explore Stock Intelligence

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
        OUR APPROACH
      ========================================================= */}
      <section className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          {/* Header */}
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/50">
                  Our Approach
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Intelligence begins with understanding the information.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
                We look beyond individual data points, bringing together
                information, context and analysis to create a clearer view of
                complex problems.
              </p>
            </div>
          </div>

          {/* Approach Steps */}
          <div className="mt-20 border-t border-black/10">
            {/* Step 01 */}
            <div className="grid gap-6 border-b border-black/10 py-8 lg:grid-cols-12 lg:items-center lg:gap-12">
              <div className="lg:col-span-2">
                <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                  01
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Gather
                </h3>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-sm leading-6 text-black/55">
                  Bring together relevant information from structured and
                  unstructured sources.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="grid gap-6 border-b border-black/10 py-8 lg:grid-cols-12 lg:items-center lg:gap-12">
              <div className="lg:col-span-2">
                <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                  02
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Structure
                </h3>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-sm leading-6 text-black/55">
                  Extract and organize information so that different signals
                  can be understood together.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="grid gap-6 border-b border-black/10 py-8 lg:grid-cols-12 lg:items-center lg:gap-12">
              <div className="lg:col-span-2">
                <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                  03
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Analyze
                </h3>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-sm leading-6 text-black/55">
                  Relate information and context to identify patterns,
                  relationships and meaningful signals.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="grid gap-6 border-b border-black/10 py-8 lg:grid-cols-12 lg:items-center lg:gap-12">
              <div className="lg:col-span-2">
                <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                  04
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Communicate
                </h3>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-sm leading-6 text-black/55">
                  Present the resulting intelligence through clear insights,
                  analysis and structured reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* =========================================================
          CONTACT CTA
      ========================================================= */}
      <section className="border-t border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="relative overflow-hidden bg-black px-7 py-16 text-white sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            {/* Subtle Grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #fff 1px, transparent 1px),
                  linear-gradient(to bottom, #fff 1px, transparent 1px)
                `,
                backgroundSize: "56px 56px",
              }}
            />

            <div className="relative max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-white" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/45">
                  Let's Connect
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Have a complex problem worth solving?
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                Let's explore how data, technology and intelligent systems can
                turn complex information into meaningful solutions.
              </p>

              <Link
                to="/contact"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Talk to Blue Scouts Group

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
          FOOTER
      ========================================================= */}
      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Main Footer */}
          <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
            {/* Company */}
            <div className="lg:col-span-5">
              <Link
                to="/"
                className="text-lg font-semibold tracking-tight"
              >
                Blue Scouts Group
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-6 text-black/50">
                Building intelligent solutions from complex data through
                technology, analysis and structured intelligence.
              </p>

              <a
                href="mailto:admin@bluescoutsgroup.org"
                className="mt-7 inline-flex text-sm font-medium text-black transition-colors hover:text-black/50"
              >
                admin@bluescoutsgroup.org
              </a>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2 lg:col-start-7">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
                Navigate
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  to="/"
                  className="w-fit text-sm text-black/60 transition-colors hover:text-black"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="w-fit text-sm text-black/60 transition-colors hover:text-black"
                >
                  About
                </Link>

                <Link
                  to="/solutions"
                  className="w-fit text-sm text-black/60 transition-colors hover:text-black"
                >
                  Solutions
                </Link>

                <Link
                  to="/stock-intelligence"
                  className="w-fit text-sm text-black/60 transition-colors hover:text-black"
                >
                  Stock Intelligence
                </Link>

                <Link
                  to="/insights"
                  className="w-fit text-sm text-black/60 transition-colors hover:text-black"
                >
                  Insights
                </Link>

                <Link
                  to="/contact"
                  className="w-fit text-sm text-black/60 transition-colors hover:text-black"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Company / Contact */}
            <div className="lg:col-span-3">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
                Company
              </p>

              <div className="mt-5 space-y-3 text-sm text-black/60">
                <p>Blue Scouts Group</p>

                <a
                  href="https://bluescoutsgroup.org"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-fit transition-colors hover:text-black"
                >
                  bluescoutsgroup.org
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col gap-5 border-t border-black/10 py-7 text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Blue Scouts Group. All rights
              reserved.
            </p>

            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="transition-colors hover:text-black"
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="transition-colors hover:text-black"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;