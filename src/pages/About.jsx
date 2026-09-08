import { ArrowRight, Database, Brain, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="bg-white text-black">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  About Blue Scouts Group
                </span>
              </div>

              <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Building intelligent solutions from complex information.
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                Blue Scouts Group focuses on turning complex information into
                structured intelligence through data, technology and analysis.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          COMPANY OVERVIEW
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Who We Are
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Blue Scouts Group is focused on building practical
                intelligence systems for complex problems.
              </h2>

              <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
                <p>
                  We work with information that can be difficult to collect,
                  organize and understand. Our approach combines data,
                  technology and analytical methods to make that information
                  more useful.
                </p>

                <p>
                  Rather than treating data as isolated points, we look at the
                  relationships between information, context and events to
                  develop a clearer picture of the problem being examined.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          WHAT WE BELIEVE
      ========================================================= */}
      <section className="border-y border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  What We Believe
                </span>
              </div>

              <h2 className="mt-8 max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Better information leads to better understanding.
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-10">

                <div className="border-t border-black/10 pt-7">
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    01
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    Information
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                    Relevant information needs to be collected and organized
                    before it can provide meaningful insight.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-7">
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    02
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    Intelligence
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                    Context and relationships can reveal signals that are not
                    visible when information is viewed independently.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-7">
                  <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                    03
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    Clarity
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                    Intelligence becomes valuable when it can be communicated
                    clearly and used to understand a decision or problem.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          HOW WE BUILD
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                How We Build
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
              Connecting data, technology and intelligence.
            </h2>
          </div>


          <div className="mt-16 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-3">

            {/* Data */}
            <div className="bg-white p-8 lg:p-10">
              <Database size={26} strokeWidth={1.5} />

              <span className="mt-12 block text-xs font-medium tracking-[0.18em] text-black/35">
                01
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Data
              </h3>

              <p className="mt-4 text-sm leading-6 text-black/55">
                Collecting, extracting and organizing information from
                relevant sources.
              </p>
            </div>


            {/* Technology */}
            <div className="bg-white p-8 lg:p-10">
              <Layers3 size={26} strokeWidth={1.5} />

              <span className="mt-12 block text-xs font-medium tracking-[0.18em] text-black/35">
                02
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Technology
              </h3>

              <p className="mt-4 text-sm leading-6 text-black/55">
                Applying software and intelligent systems to transform
                information into usable outputs.
              </p>
            </div>


            {/* Intelligence */}
            <div className="bg-white p-8 lg:p-10">
              <Brain size={26} strokeWidth={1.5} />

              <span className="mt-12 block text-xs font-medium tracking-[0.18em] text-black/35">
                03
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Intelligence
              </h3>

              <p className="mt-4 text-sm leading-6 text-black/55">
                Relating information and context to produce clearer,
                structured insights.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          OUR FOCUS
      ========================================================= */}
      <section className="border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-white" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/40">
                  Our Focus
                </span>
              </div>

              <h2 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Building systems that make complex information easier to
                understand.
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                Our work is centered around practical applications of data,
                software and intelligent analysis.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="flex flex-col gap-8 border-t border-black/10 pt-12 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/40">
                Get in Touch
              </span>

              <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Let's build something intelligent.
              </h2>
            </div>

            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Contact Blue Scouts Group

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

export default About;