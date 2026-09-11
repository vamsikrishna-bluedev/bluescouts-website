import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Database,
  Mail,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const contactAreas = [
  {
    icon: Database,
    title: "Data Processing",
    description:
      "Discuss solutions for collecting, transforming, organizing and preparing data for practical use.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Explore analytical approaches that turn structured data into useful insights and clearer decisions.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "Discuss applied AI and machine learning ideas, experimentation and technology-driven solutions.",
  },
  {
    icon: Sparkles,
    title: "Product Development",
    description:
      "Talk through software products, technical concepts and ideas that can be developed into usable solutions.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding the problem, objectives and requirements.",
  },
  {
    number: "02",
    title: "Explore",
    description:
      "We identify suitable technologies, approaches and possible solutions.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "The selected approach can then be developed into a practical solution.",
  },
];

export default function Contact() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-28 lg:pt-32">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 border border-black/10 bg-black/[0.02] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-black/60">
              <MessageSquare className="h-3.5 w-3.5" />
              Start a conversation
            </div>

            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Let's build
              <br />
              something useful.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
              Have a project, technology requirement or idea in mind? Tell us
              what you are working on and start a conversation with Blue Scouts
              Group.
            </p>
          </div>

          <div className="mt-16 grid gap-6 border-t border-black/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/40">
                Company
              </p>
              <p className="mt-3 text-lg font-medium">Blue Scouts Group</p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/40">
                Email
              </p>
              <a
                href="mailto:hello@bluescoutsgroup.com"
                className="mt-3 inline-flex items-center gap-2 text-lg font-medium transition-opacity hover:opacity-60"
              >
                hello@bluescoutsgroup.com
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/40">
                Focus
              </p>
              <p className="mt-3 text-lg font-medium">
                Data • Technology • Analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:px-12 lg:py-28">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
              Get in touch
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              Start with the problem.
              <br />
              We can explore the solution.
            </h2>
          </div>

          <div className="flex flex-col justify-between">
            <p className="max-w-2xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
              We believe good technology starts with understanding the actual
              problem. Whether you are exploring a new product, working with
              data or looking for a technical direction, reach out and let's
              discuss it.
            </p>

            <div className="mt-10">
              <a
                href="mailto:hello@bluescoutsgroup.com"
                className="group inline-flex items-center gap-3 bg-black px-6 py-4 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Email Blue Scouts Group
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Discussion Areas */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
              What we can discuss
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Areas of focus
            </h2>

            <p className="mt-5 text-base leading-7 text-black/60">
              Our conversations can start anywhere from a technical challenge
              to an early-stage product idea.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2">
            {contactAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="group bg-white p-8 transition-colors hover:bg-black/[0.025] sm:p-10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center border border-black/10">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <ArrowRight className="h-4 w-4 text-black/30 transition-transform group-hover:translate-x-1 group-hover:text-black" />
                  </div>

                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em]">
                    {area.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-black/55">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Start */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
                Our approach
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                From conversation
                <br />
                to direction.
              </h2>
            </div>

            <div className="divide-y divide-black/10 border-y border-black/10">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-4 py-7 sm:grid-cols-[80px_1fr] sm:gap-8"
                >
                  <span className="text-sm font-medium text-black/35">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-black/55">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Privacy */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/10">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="font-semibold">Direct communication</h3>
                <p className="mt-1 max-w-xl text-sm leading-6 text-black/55">
                  We keep the first step simple. Contact us directly by email
                  rather than collecting your information through a website
                  form.
                </p>
              </div>
            </div>

            <a
              href="mailto:hello@bluescoutsgroup.com"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
            >
              hello@bluescoutsgroup.com
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              to="/solutions"
              className="group border border-black/10 p-8 transition-colors hover:bg-black/[0.025] sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-black/40">
                  Explore
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>

              <h3 className="mt-12 text-2xl font-semibold tracking-[-0.02em]">
                Our Solutions
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-black/55">
                Explore how we approach data, technology, analysis and
                decision support.
              </p>
            </Link>

            <Link
              to="/stock-analysis"
              className="group bg-black p-8 text-white transition-transform hover:-translate-y-0.5 sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">
                  Product
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>

              <h3 className="mt-12 text-2xl font-semibold tracking-[-0.02em]">
                Stock Analysis
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
                Explore our work around market data, analysis and structured
                decision support.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}