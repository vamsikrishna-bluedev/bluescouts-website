import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  Database,
  LineChart,
  Search,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const insightAreas = [
  {
    number: "01",
    icon: LineChart,
    title: "Market Intelligence",
    description:
      "Exploring how market data, company developments and broader signals can be brought together to understand changing market conditions.",
  },
  {
    number: "02",
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Perspectives on applying AI, machine learning and intelligent systems to real-world information and decision-making problems.",
  },
  {
    number: "03",
    icon: Database,
    title: "Data & Technology",
    description:
      "Research and perspectives on data systems, technology and the infrastructure required to turn complex information into usable intelligence.",
  },
];

function Insights() {
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
                  Blue Scouts Insights
                </span>
              </div>

              <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                Ideas,
                <br />
                intelligence &
                <br />
                perspective.
              </h1>

            </div>


            <div className="lg:col-span-4">

              <p className="max-w-md text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                Perspectives from Blue Scouts Group on data, artificial
                intelligence, technology and the changing information
                landscape.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRO
      ========================================================= */}
      <section>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            <div className="lg:col-span-4">

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Our Perspective
                </span>
              </div>

            </div>


            <div className="lg:col-span-7 lg:col-start-6">

              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-4xl">
                Better intelligence starts with understanding the information
                behind the decision.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-black/55">
                Our insights explore the intersection of information, data and
                technology. We focus on practical ideas that help make complex
                information easier to understand, connect and use.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FEATURED INSIGHT
      ========================================================= */}
      <section className="border-y border-black/10 bg-[#fafafa]">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-black" />

            <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
              Featured
            </span>

          </div>


          <div className="mt-10 overflow-hidden border border-black/10 bg-white">

            <div className="grid lg:grid-cols-12">

              {/* Visual */}
              <div className="relative min-h-[360px] overflow-hidden bg-black lg:col-span-7">

                <div
                  className="absolute inset-0 opacity-[0.13]"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #fff 1px, transparent 1px),
                      linear-gradient(to bottom, #fff 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                  }}
                />

                <div className="relative flex h-full min-h-[360px] items-center justify-center p-8">

                  <div className="w-full max-w-md">

                    <div className="flex items-center justify-between border-b border-white/10 pb-5">

                      <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                        Blue Scouts Research
                      </span>

                      <Sparkles
                        size={18}
                        strokeWidth={1.5}
                        className="text-white/40"
                      />

                    </div>


                    <div className="mt-12">

                      <div className="flex items-end gap-2">

                        <div className="h-12 w-3 bg-white/20" />
                        <div className="h-20 w-3 bg-white/30" />
                        <div className="h-16 w-3 bg-white/20" />
                        <div className="h-28 w-3 bg-white/40" />
                        <div className="h-24 w-3 bg-white/30" />
                        <div className="h-36 w-3 bg-white/50" />
                        <div className="h-32 w-3 bg-white/40" />
                        <div className="h-44 w-3 bg-white/60" />

                      </div>

                    </div>


                    <div className="mt-8 grid grid-cols-3 gap-3">

                      <div className="border border-white/10 p-3">
                        <span className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                          Data
                        </span>
                      </div>

                      <div className="border border-white/10 p-3">
                        <span className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                          Context
                        </span>
                      </div>

                      <div className="border border-white/10 p-3">
                        <span className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                          Analysis
                        </span>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* Content */}
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-5 lg:p-12">

                <div>

                  <div className="flex items-center gap-3">

                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-black/35">
                      Research
                    </span>

                    <span className="h-1 w-1 rounded-full bg-black/25" />

                    <span className="text-xs text-black/35">
                      Coming soon
                    </span>

                  </div>


                  <h2 className="mt-8 text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl">
                    Turning complex information into structured intelligence.
                  </h2>


                  <p className="mt-6 text-base leading-7 text-black/55">
                    Blue Scouts Group is developing a research perspective
                    around how fragmented information can be connected,
                    analyzed and transformed into useful intelligence.
                  </p>

                </div>


                <div className="mt-12">

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-black/40">
                    Published research will appear here
                    <ArrowUpRight size={15} />
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          INSIGHT AREAS
      ========================================================= */}
      <section>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            <div className="lg:col-span-4">

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Areas of Focus
                </span>

              </div>


              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                What we're exploring.
              </h2>

            </div>


            <div className="lg:col-span-7 lg:col-start-6">

              <div className="divide-y divide-black/10 border-y border-black/10">

                {insightAreas.map((area) => {

                  const Icon = area.icon;

                  return (
                    <div
                      key={area.number}
                      className="group grid gap-6 py-8 sm:grid-cols-[52px_1fr_auto] sm:items-start"
                    >

                      <span className="text-xs font-medium tracking-[0.18em] text-black/30">
                        {area.number}
                      </span>


                      <div>

                        <div className="flex items-center gap-3">

                          <Icon
                            size={20}
                            strokeWidth={1.5}
                            className="text-black/40"
                          />

                          <h3 className="text-xl font-semibold tracking-tight">
                            {area.title}
                          </h3>

                        </div>


                        <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                          {area.description}
                        </p>

                      </div>


                      <ArrowUpRight
                        size={19}
                        strokeWidth={1.5}
                        className="hidden text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:block"
                      />

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          RESEARCH NOTE
      ========================================================= */}
      <section className="border-y border-black/10 bg-black text-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            <div className="lg:col-span-7">

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-white" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/40">
                  A Growing Library
                </span>

              </div>


              <h2 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Our research library will grow with the work we do.
              </h2>

            </div>


            <div className="lg:col-span-4 lg:col-start-9">

              <p className="text-base leading-7 text-white/50">
                As Blue Scouts Group develops its products and research,
                this space will become a collection of perspectives,
                technical explorations and intelligence-led analysis.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          STOCK INTELLIGENCE CTA
      ========================================================= */}
      <section>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="border-t border-black/10 pt-12">

            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">

              <div className="lg:col-span-8">

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/40">
                  Explore the Platform
                </span>

                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                  See how connected information becomes stock intelligence.
                </h2>

              </div>


              <div className="lg:col-span-4 lg:flex lg:justify-end">

                <Link
                  to="/stock-intelligence"
                  className="group inline-flex w-fit items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
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

    </main>
  );
}

export default Insights;