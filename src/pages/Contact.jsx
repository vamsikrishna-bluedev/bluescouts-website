import {
  ArrowRight,
  Mail,
  MessageSquare,
  MoveUpRight,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

const enquiryTypes = [
  {
    title: "General Enquiry",
    description:
      "Questions about Blue Scouts Group, our work or what we are building.",
    icon: MessageSquare,
  },
  {
    title: "Stock Analysis",
    description:
      "Questions about our Stock Analysis platform and its analytical workflow.",
    icon: Briefcase,
  },
  {
    title: "Project Discussion",
    description:
      "Discuss a data, software, AI or analytical problem you are looking to solve.",
    icon: ArrowRight,
  },
];

function Contact() {
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
                  Contact
                </span>
              </div>

              <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                Let's build
                <br />
                something
                <br />
                useful.
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                Have a question, project idea or problem worth exploring?
                Tell us what you are working on and let's start a
                conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM / ENQUIRY
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Left */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Get in Touch
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Tell us what you are working on.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-black/50">
                Whether you are interested in Stock Analysis, software
                development, data systems or a new project, we would like to
                understand the problem first.
              </p>

              {/* Email */}
              <div className="mt-10 border-t border-black/10 pt-6">
                <div className="flex items-center gap-3">
                  <Mail
                    size={18}
                    strokeWidth={1.5}
                    className="text-black/40"
                  />

                  <span className="text-xs uppercase tracking-[0.18em] text-black/35">
                    Email
                  </span>
                </div>

                <a
                  href="mailto:hello@bluescoutsgroup.com"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-black/60"
                >
                  hello@bluescoutsgroup.com

                  <MoveUpRight
                    size={14}
                    className="text-black/35"
                  />
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-7 lg:col-start-6">
              <form className="border border-black/10">
                {/* Name */}
                <div className="border-b border-black/10 p-6 sm:p-8">
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium uppercase tracking-[0.18em] text-black/40"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-4 w-full border-0 bg-transparent p-0 text-lg outline-none placeholder:text-black/25 focus:ring-0"
                  />
                </div>

                {/* Email */}
                <div className="border-b border-black/10 p-6 sm:p-8">
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium uppercase tracking-[0.18em] text-black/40"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-4 w-full border-0 bg-transparent p-0 text-lg outline-none placeholder:text-black/25 focus:ring-0"
                  />
                </div>

                {/* Enquiry */}
                <div className="border-b border-black/10 p-6 sm:p-8">
                  <label
                    htmlFor="enquiry"
                    className="block text-xs font-medium uppercase tracking-[0.18em] text-black/40"
                  >
                    Enquiry Type
                  </label>

                  <select
                    id="enquiry"
                    name="enquiry"
                    defaultValue=""
                    className="mt-4 w-full border-0 bg-transparent p-0 text-lg outline-none focus:ring-0"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    {enquiryTypes.map((type) => (
                      <option
                        key={type.title}
                        value={type.title}
                      >
                        {type.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="border-b border-black/10 p-6 sm:p-8">
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium uppercase tracking-[0.18em] text-black/40"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us a little about what you are working on..."
                    className="mt-4 w-full resize-none border-0 bg-transparent p-0 text-lg leading-7 outline-none placeholder:text-black/25 focus:ring-0"
                  />
                </div>

                {/* Submit */}
                <div className="flex items-center justify-between gap-6 p-6 sm:p-8">
                  <p className="max-w-sm text-xs leading-5 text-black/35">
                    We will review your message and get back to you.
                  </p>

                  <button
                    type="submit"
                    className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Send Message

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENQUIRY TYPES
      ========================================================= */}
      <section className="border-y border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                What Can We Discuss?
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
              Start with the problem.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/50">
              A clear understanding of the problem helps us identify the right
              data, technology and approach.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-3">
            {enquiryTypes.map((type, index) => {
              const Icon = type.icon;

              return (
                <div
                  key={type.title}
                  className="bg-white p-8 lg:p-10"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      size={26}
                      strokeWidth={1.5}
                      className="text-black/55"
                    />

                    <span className="text-xs tracking-[0.18em] text-black/35">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-16 text-xl font-semibold tracking-tight">
                    {type.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          STOCK ANALYSIS CTA
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Stock Analysis
                </span>
              </div>

              <h2 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Interested in how we turn market data into structured
                analysis?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-black/50">
                Explore the Stock Analysis workflow and see how market data,
                extracted information and analytical processing come together.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                to="/stock-analysis"
                className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore Stock Analysis

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;