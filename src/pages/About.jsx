import {
  ArrowRight,
  Database,
  Brain,
  Layers3,
  
} from "lucide-react";
import { Link } from "react-router-dom";

function About() {
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
                  About Blue Scouts Group
                </span>
              </div>

              <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                Building practical
                <br />
                solutions from
                <br />
                complex information.
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                Blue Scouts Group works with data, technology and software to
                create systems that make complex information easier to
                process, analyze and use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
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
                A technology group focused on making complex information
                useful.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
                We build data-driven systems that connect information,
                software and analytical workflows.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-black/50">
                Our work spans data processing, information extraction,
                analysis and software development. The goal is simple:
                transform difficult information into structured outputs that
                people can understand and work with.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-black/50">
                We approach each problem from the underlying data and
                requirements first, then design the technology needed to
                deliver a practical solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE BELIEVE
      ========================================================= */}
      <section className="border-y border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                What We Believe
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
              Good technology starts with good understanding.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-3">
            {/* Information */}
            <div className="bg-white p-8 lg:p-10">
              <Database
                size={28}
                strokeWidth={1.5}
              />

              <h3 className="mt-16 text-2xl font-semibold tracking-tight">
                Information
              </h3>

              <p className="mt-4 text-sm leading-6 text-black/55">
                Every solution begins with understanding the information
                involved, where it comes from and how it should be used.
              </p>
            </div>

            {/* Analysis */}
            <div className="bg-white p-8 lg:p-10">
              <Brain
                size={28}
                strokeWidth={1.5}
              />

              <h3 className="mt-16 text-2xl font-semibold tracking-tight">
                Analysis
              </h3>

              <p className="mt-4 text-sm leading-6 text-black/55">
                Structured analysis helps turn large or complex information
                into something more useful and understandable.
              </p>
            </div>

            {/* Clarity */}
            <div className="bg-white p-8 lg:p-10">
              <Layers3
                size={28}
                strokeWidth={1.5}
              />

              <h3 className="mt-16 text-2xl font-semibold tracking-tight">
                Clarity
              </h3>

              <p className="mt-4 text-sm leading-6 text-black/55">
                The final system should make information easier to access,
                interpret and act upon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE BUILD
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  How We Build
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Connecting data, technology and analysis.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-black/50">
                We treat the data layer, software layer and analytical layer
                as connected parts of the same solution.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10">
                {/* Data */}
                <div className="bg-white p-8 sm:p-10">
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                        01
                      </span>

                      <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                        Data
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-6 text-black/55">
                        We design reliable ways to collect, process, structure
                        and store information.
                      </p>
                    </div>

                    <Database
                      size={25}
                      strokeWidth={1.5}
                      className="shrink-0 text-black/35"
                    />
                  </div>
                </div>

                {/* Technology */}
                <div className="bg-white p-8 sm:p-10">
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                        02
                      </span>

                      <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                        Technology
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-6 text-black/55">
                        We build the software, backend services and interfaces
                        required to turn the underlying data flow into a
                        working product.
                      </p>
                    </div>

                    <Layers3
                      size={25}
                      strokeWidth={1.5}
                      className="shrink-0 text-black/35"
                    />
                  </div>
                </div>

                {/* Analysis */}
                <div className="bg-white p-8 sm:p-10">
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                        03
                      </span>

                      <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                        Analysis
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-6 text-black/55">
                        We apply analytical methods where they add value,
                        helping transform processed information into useful
                        outputs.
                      </p>
                    </div>

                    <Brain
                      size={25}
                      strokeWidth={1.5}
                      className="shrink-0 text-black/35"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR FOCUS
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
                Practical systems for complex problems.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-xl leading-8 text-black/65 sm:text-2xl sm:leading-9">
                We focus on building technology that has a clear purpose,
                understandable workflows and a useful outcome.
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div className="border-t border-black/10 pt-5">
                  <span className="text-xs uppercase tracking-[0.18em] text-black/35">
                    Data Systems
                  </span>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Reliable data pipelines and structured information flows.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-5">
                  <span className="text-xs uppercase tracking-[0.18em] text-black/35">
                    Analytical Systems
                  </span>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Workflows that help examine complex information and
                    identify useful patterns.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-5">
                  <span className="text-xs uppercase tracking-[0.18em] text-black/35">
                    Software
                  </span>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Interfaces and backend systems designed around practical
                    requirements.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-5">
                  <span className="text-xs uppercase tracking-[0.18em] text-black/35">
                    Decision Support
                  </span>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Structured outputs that make complex information easier to
                    review and use.
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
                  Work With Us
                </span>

                <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Let's build something useful.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-black/50">
                  Have a complex data, software or analytical problem? Tell us
                  what you are trying to solve and we can explore the right
                  approach.
                </p>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Get in Touch

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

export default About;