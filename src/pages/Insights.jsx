import {
  ArrowRight,
  BarChart3,
  Brain,
  FileText,
  Globe2,
  Lightbulb,
  Newspaper,
  Search,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const insightAreas = [
  {
    number: "01",
    title: "Market Intelligence",
    description:
      "Understand market movements through structured information, historical context and relevant signals.",
    icon: BarChart3,
  },
  {
    number: "02",
    title: "Research & Analysis",
    description:
      "Transform complex information into structured research that is easier to understand and evaluate.",
    icon: Search,
  },
  {
    number: "03",
    title: "AI-Powered Insights",
    description:
      "Use intelligent analysis to connect information and surface meaningful relationships across different sources.",
    icon: Brain,
  },
  {
    number: "04",
    title: "Business Context",
    description:
      "Look beyond individual data points by considering events, developments and the wider business environment.",
    icon: Globe2,
  },
];

const insightPrinciples = [
  {
    number: "01",
    title: "Collect",
    description:
      "Bring together relevant information from different sources.",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Organize information so important relationships and context become clearer.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Relate different signals instead of examining them in isolation.",
  },
  {
    number: "04",
    title: "Communicate",
    description:
      "Present the resulting insight in a clear and structured format.",
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
                Information,
                <br />
                made meaningful.
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                Explore the ideas, research and analytical perspectives behind
                the technologies and intelligence solutions we build.
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

          {/* Hero visual */}
          <div className="mt-20 overflow-hidden border border-black/10 bg-[#fafafa]">
            <div className="grid lg:grid-cols-12">
              <div className="border-b border-black/10 p-7 sm:p-10 lg:col-span-7 lg:border-b-0 lg:border-r">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-black/35">
                    Intelligence Perspective
                  </span>

                  <span className="flex items-center gap-2 text-xs text-black/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/50" />
                    Research driven
                  </span>
                </div>

                <div className="mt-12">
                  <p className="max-w-xl text-2xl font-medium leading-9 tracking-tight sm:text-3xl">
                    Better decisions begin with understanding the information
                    behind them.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-3 gap-px border border-black/10 bg-black/10">
                  <div className="bg-white p-5">
                    <TrendingUp
                      size={20}
                      strokeWidth={1.5}
                    />

                    <span className="mt-8 block text-xs text-black/35">
                      Markets
                    </span>
                  </div>

                  <div className="bg-white p-5">
                    <Newspaper
                      size={20}
                      strokeWidth={1.5}
                    />

                    <span className="mt-8 block text-xs text-black/35">
                      Information
                    </span>
                  </div>

                  <div className="bg-white p-5">
                    <Brain
                      size={20}
                      strokeWidth={1.5}
                    />

                    <span className="mt-8 block text-xs text-black/35">
                      Intelligence
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[300px] bg-black lg:col-span-5">
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
                  <div className="w-full max-w-sm border border-white/15 p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                        Insight Model
                      </span>

                      <Lightbulb
                        size={18}
                        strokeWidth={1.5}
                        className="text-white/45"
                      />
                    </div>

                    <div className="mt-10 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/50" />

                        <span className="text-sm text-white/60">
                          Information
                        </span>
                      </div>

                      <div className="ml-0 h-px w-full bg-white/10" />

                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/50" />

                        <span className="text-sm text-white/60">
                          Context
                        </span>
                      </div>

                      <div className="ml-0 h-px w-full bg-white/10" />

                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/50" />

                        <span className="text-sm text-white/60">
                          Analysis
                        </span>
                      </div>

                      <div className="ml-0 h-px w-full bg-white/10" />

                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/70" />

                        <span className="text-sm text-white/80">
                          Insight
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                  Our Perspective
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Insight starts with better questions.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-xl leading-8 text-black/65 sm:text-2xl sm:leading-9">
                Information is increasingly abundant. The challenge is not
                simply finding more of it, but understanding how different
                pieces of information relate to one another.
              </p>

              <p className="mt-7 max-w-2xl text-base leading-7 text-black/50">
                Our approach focuses on connecting data, context and analysis
                to create clearer perspectives. We explore how technology and
                intelligent systems can help turn fragmented information into
                something more useful.
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
                Areas of Focus
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
              Exploring information from different perspectives.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">
            {insightAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.number}
                  className="group bg-white p-8 transition-colors duration-300 hover:bg-[#f7f7f7] lg:p-10"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      size={26}
                      strokeWidth={1.5}
                    />

                    <span className="text-xs tracking-[0.18em] text-black/30">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="mt-16 text-2xl font-semibold tracking-tight">
                    {area.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-black/55">
                    {area.description}
                  </p>

                  <div className="mt-8 h-px w-0 bg-black transition-all duration-300 group-hover:w-12" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          APPROACH
      ========================================================= */}
      <section>
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
                From raw information to useful perspective.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-black/50">
                A structured approach helps transform disconnected information
                into something that can be examined, understood and
                communicated.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-black/10">
                {insightPrinciples.map((principle) => (
                  <div
                    key={principle.number}
                    className="grid grid-cols-[52px_1fr] gap-6 border-b border-black/10 py-8"
                  >
                    <span className="text-xs font-medium tracking-[0.18em] text-black/35">
                      {principle.number}
                    </span>

                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {principle.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-black/55">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH NOTE
      ========================================================= */}
      <section className="border-y border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-white" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/40">
                  Research & Thinking
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-5xl">
                Building technology around real information problems.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/50">
                Our work explores practical applications of artificial
                intelligence, data systems and analytical workflows to help
                people work with complex information.
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <div className="border border-white/15 p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                      Research Framework
                    </span>

                    <p className="mt-2 text-lg font-medium">
                      Information systems
                    </p>
                  </div>

                  <FileText
                    size={20}
                    strokeWidth={1.5}
                    className="text-white/45"
                  />
                </div>

                <div className="mt-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/40">
                      Data
                    </span>

                    <span className="text-xs text-white/60">
                      Structured
                    </span>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/40">
                      Context
                    </span>

                    <span className="text-xs text-white/60">
                      Connected
                    </span>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/40">
                      Analysis
                    </span>

                    <span className="text-xs text-white/60">
                      Interpreted
                    </span>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/40">
                      Output
                    </span>

                    <span className="text-xs text-white/70">
                      Actionable perspective
                    </span>
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
      <section className="bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-col gap-8 border-t border-black/10 pt-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/40">
                Explore Blue Scouts Group
              </span>

              <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Have a problem worth exploring?
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

export default Insights;