import {
  ArrowRight,
  BarChart3,
  Brain,
  Database,
  Layers3,
  MoveUpRight,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

const insightAreas = [
  {
    number: "01",
    title: "Market Analysis",
    description:
      "Exploring market data, analytical methods and the systems used to understand financial information.",
    icon: BarChart3,
  },
  {
    number: "02",
    title: "Research & Analysis",
    description:
      "Examining technical ideas, data workflows and analytical approaches that can be applied to real problems.",
    icon: Search,
  },
  {
    number: "03",
    title: "Data & Decision Support",
    description:
      "Looking at how structured information and analytical systems can support clearer decisions.",
    icon: Database,
  },
  {
    number: "04",
    title: "Business Context",
    description:
      "Understanding the wider requirements and context that shape useful technology solutions.",
    icon: Layers3,
  },
];

function Insights() {
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
                  Blue Scouts Insights
                </span>
              </div>

              <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                Thinking through
                <br />
                data, technology
                <br />
                and analysis.
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                Ideas, research and analytical perspectives from Blue Scouts
                Group on data systems, technology and the problems they can
                help solve.
              </p>
            </div>
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
                  Perspective
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Better systems begin with better questions.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
                Technology is most useful when it is connected to a clear
                problem. Our research explores how data, software and
                analytical methods can work together to address those
                problems.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-black/50">
                Insights may cover technical concepts, analytical workflows,
                market data and broader ideas around building practical
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INSIGHT AREAS
      ========================================================= */}
      <section className="border-y border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                Areas We Explore
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
              Research grounded in real systems.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/50">
              Our areas of interest connect technical research with practical
              applications.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">
            {insightAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.number}
                  className="bg-white p-8 sm:p-10 lg:p-12"
                >
                  <div className="flex items-start justify-between gap-8">
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      className="text-black/60"
                    />

                    <span className="text-xs tracking-[0.18em] text-black/35">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="mt-16 text-2xl font-semibold tracking-tight">
                    {area.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-black/55">
                    {area.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-xs text-black/35">
                    <span className="h-px w-5 bg-black/30" />
                    Research area
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ANALYSIS VISUAL
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            {/* Visual */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden border border-black/10 bg-black text-white">
                <div className="border-b border-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                        Analysis Perspective
                      </span>

                      <p className="mt-2 text-lg font-medium">
                        Connecting the pieces
                      </p>
                    </div>

                    <Brain
                      size={21}
                      strokeWidth={1.5}
                      className="text-white/40"
                    />
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {/* Markets */}
                    <div className="border border-white/10 p-5">
                      <span className="text-xs text-white/35">
                        01
                      </span>

                      <p className="mt-8 text-sm font-medium">
                        Markets
                      </p>

                      <div className="mt-8 h-20">
                        <div className="flex h-full items-end gap-1">
                          <div className="h-[30%] w-full bg-white/15" />
                          <div className="h-[50%] w-full bg-white/20" />
                          <div className="h-[42%] w-full bg-white/15" />
                          <div className="h-[68%] w-full bg-white/25" />
                          <div className="h-[58%] w-full bg-white/20" />
                          <div className="h-[82%] w-full bg-white/30" />
                        </div>
                      </div>
                    </div>

                    {/* Information */}
                    <div className="border border-white/10 p-5">
                      <span className="text-xs text-white/35">
                        02
                      </span>

                      <p className="mt-8 text-sm font-medium">
                        Information
                      </p>

                      <div className="mt-8 space-y-2">
                        <div className="h-1.5 w-full bg-white/15" />
                        <div className="h-1.5 w-[82%] bg-white/20" />
                        <div className="h-1.5 w-[65%] bg-white/15" />
                        <div className="h-1.5 w-[90%] bg-white/20" />
                      </div>
                    </div>

                    {/* Analysis */}
                    <div className="border border-white/10 p-5">
                      <span className="text-xs text-white/35">
                        03
                      </span>

                      <p className="mt-8 text-sm font-medium">
                        Analysis
                      </p>

                      <div className="mt-8 flex items-center gap-2">
                        <div className="h-8 w-8 border border-white/15" />
                        <div className="h-12 w-12 border border-white/20" />
                        <div className="h-16 w-16 border border-white/30" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/35">
                        Research framework
                      </span>

                      <span className="text-xs text-white/50">
                        Data → Analysis → Output
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Our Perspective
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Connecting technical ideas to practical applications.
              </h2>

              <p className="mt-6 text-base leading-7 text-black/55">
                We are interested in the space between raw information and
                useful outcomes—where data engineering, software and analysis
                come together.
              </p>

              <Link
                to="/solutions"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-medium"
              >
                Explore our solutions

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
          RESEARCH NOTE
      ========================================================= */}
      <section className="border-y border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Research
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Exploring what comes next.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-xl leading-8 text-black/65 sm:text-2xl sm:leading-9">
                Our research interests include data systems, artificial
                intelligence, analytical workflows and software architectures.
              </p>

              <p className="mt-7 max-w-2xl text-base leading-7 text-black/50">
                We use research to understand new approaches, evaluate their
                practical value and identify where they can contribute to
                useful products and systems.
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-3">
                <div className="border-t border-black/10 pt-5">
                  <span className="text-xs uppercase tracking-[0.18em] text-black/35">
                    Data
                  </span>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Pipelines, processing and structured information.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-5">
                  <span className="text-xs uppercase tracking-[0.18em] text-black/35">
                    AI
                  </span>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Applied artificial intelligence and machine learning.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-5">
                  <span className="text-xs uppercase tracking-[0.18em] text-black/35">
                    Systems
                  </span>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Software architectures built for practical use.
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
                  Blue Scouts Group
                </span>

                <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Good ideas become valuable when they solve real problems.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-black/50">
                  Explore our work, learn about our approach or get in touch
                  to discuss a problem worth solving.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
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
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-black/5"
                >
                  Contact Us
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