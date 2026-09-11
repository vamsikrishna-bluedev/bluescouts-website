import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="bg-white text-black">
      <section className="min-h-[calc(100vh-5rem)] border-b border-black/10">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-24 lg:px-8 lg:py-32">
          <div className="w-full">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                className="h-px w-8 bg-black"
                aria-hidden="true"
              />

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/45">
                Page Not Found
              </span>
            </div>

            {/* Main content */}
            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/35">
                  404
                </p>

                <h1 className="mt-5 max-w-5xl text-6xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                  This page
                  <br />
                  doesn't exist.
                </h1>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                  The page you're looking for may have moved, been removed,
                  or the address may be incorrect.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/"
                    className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <ArrowLeft
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:-translate-x-1"
                    />

                    Back to Home
                  </Link>

                  <Link
                    to="/stock-analysis"
                    className="group inline-flex items-center gap-3 rounded-full border border-black/15 px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white"
                  >
                    Explore Stock Analysis

                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom visual element */}
            <div className="mt-24 border-t border-black/10 pt-6 sm:mt-32">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-black/30">
                <span>Blue Scouts Group</span>
                <span>Data • Analysis • Technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;