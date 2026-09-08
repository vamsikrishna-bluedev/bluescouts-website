import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

const enquiryTypes = [
  "Business / Solutions",
  "Stock Intelligence",
  "Partnership",
  "General Enquiry",
];

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      "Thank you for contacting Blue Scouts Group. We'll get back to you soon."
    );
  };

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
                <span
                  className="h-px w-8 bg-black"
                  aria-hidden="true"
                />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Contact Blue Scouts Group
                </span>
              </div>

              <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                Let's build
                <br />
                something
                <br />
                intelligent.
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                Have a project, partnership opportunity or question about
                Blue Scouts Group? We'd like to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT INFORMATION
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Left */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-8 bg-black"
                  aria-hidden="true"
                />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Get in Touch
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Start a conversation.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-black/50">
                Whether you're interested in our solutions, Stock Intelligence,
                a partnership or simply want to learn more, reach out to our
                team.
              </p>
            </div>

            {/* Right */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="divide-y divide-black/10 border-y border-black/10">
                {/* Email */}
                <a
                  href="mailto:svamsikrishnasatvik@bluescotusgroup.org"
                  aria-label="Email Blue Scouts Group"
                  className="group flex items-center justify-between gap-6 py-8"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center border border-black/10"
                      aria-hidden="true"
                    >
                      <Mail size={19} strokeWidth={1.5} />
                    </div>

                    <div>
                      <span className="text-xs uppercase tracking-[0.18em] text-black/35">
                        Email
                      </span>

                      <p className="mt-2 break-all text-base font-medium sm:text-lg">
                        svamsikrishnasatvik@bluescotusgroup.org
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="shrink-0 text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                {/* Website */}
                <a
                  href="https://bluescoutsgroup.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Blue Scouts Group website"
                  className="group flex items-center justify-between gap-6 py-8"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center border border-black/10"
                      aria-hidden="true"
                    >
                      <Building2 size={19} strokeWidth={1.5} />
                    </div>

                    <div>
                      <span className="text-xs uppercase tracking-[0.18em] text-black/35">
                        Website
                      </span>

                      <p className="mt-2 text-lg font-medium">
                        bluescoutsgroup.org
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="shrink-0 text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM
      ========================================================= */}
      <section className="border-y border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Form heading */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-8 bg-black"
                  aria-hidden="true"
                />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                  Send a Message
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Tell us what you're working on.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-black/50">
                Share a little about your project or enquiry and we'll have
                the right conversation from there.
              </p>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 lg:col-start-6">
              <form
                className="space-y-8"
                onSubmit={handleSubmit}
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-xs font-medium uppercase tracking-[0.18em] text-black/40"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    aria-required="true"
                    className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none placeholder:text-black/25 focus:border-black"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-xs font-medium uppercase tracking-[0.18em] text-black/40"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    aria-required="true"
                    className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none placeholder:text-black/25 focus:border-black"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-3 block text-xs font-medium uppercase tracking-[0.18em] text-black/40"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    autoComplete="organization"
                    className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none placeholder:text-black/25 focus:border-black"
                  />
                </div>

                {/* Enquiry */}
                <div>
                  <label
                    htmlFor="enquiry"
                    className="mb-3 block text-xs font-medium uppercase tracking-[0.18em] text-black/40"
                  >
                    Enquiry Type
                  </label>

                  <select
                    id="enquiry"
                    name="enquiry"
                    defaultValue=""
                    required
                    aria-required="true"
                    className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none focus:border-black"
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>

                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-xs font-medium uppercase tracking-[0.18em] text-black/40"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us a little about what you have in mind..."
                    required
                    aria-required="true"
                    className="w-full resize-none border-0 border-b border-black/15 bg-transparent px-0 py-4 text-base outline-none placeholder:text-black/25 focus:border-black"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Send Message

                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PLATFORM CTA
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="border-t border-black/10 pt-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/40">
                  Stock Intelligence
                </span>

                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                  Interested in how we turn complex market information into
                  intelligence?
                </h2>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Link
                  to="/stock-intelligence"
                  className="group inline-flex w-fit items-center gap-3 rounded-full border border-black/15 px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white"
                >
                  Explore the Platform

                  <ArrowRight
                    size={16}
                    aria-hidden="true"
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

export default Contact;