import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  {
    name: "Stock Intelligence",
    path: "/stock-intelligence",
  },
  { name: "Insights", path: "/insights" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo / Company Name */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-lg font-semibold tracking-tight"
        >
          Blue Scouts Group
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-7">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? "font-medium text-black"
                      : "text-black/55 hover:text-black"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/stock-intelligence"
            className="group flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Explore Platform

            <ArrowUpRight
              size={15}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-black/5 lg:hidden"
        >
          {isMenuOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-black/10 bg-white lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-5">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-black/10 py-4 text-sm ${
                    isActive
                      ? "font-medium text-black"
                      : "text-black/60"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/stock-intelligence"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
            >
              Explore Platform

              <ArrowUpRight
                size={15}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;