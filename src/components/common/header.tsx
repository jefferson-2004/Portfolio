import { useState } from "react";

import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";
import { Section } from "@/components/common/section";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/project" }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const getLinkClass = (isActive: boolean) => {
    if(isActive){
      return "text-zinc-50 underline underline-offset-4"
    }else{
      return "text-zinc-400 hover:text-zinc-50";
    }
  }

  return (
    <header className="bg-black/85 backdrop-blur border-b border-zinc-800 sticky top-0 z-50">
      {/* Backdrop overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/70 transition-opacity duration-300 md:hidden z-40",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleMenu}
      />

      <Section className="py-0" containerClassName="relative z-50 bg-black/85">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-zinc-50" onClick={toggleMenu}>
              JEfferon A. Ando | BSIT 3B
            </NavLink>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn("text-base font-medium transition-colors", getLinkClass(isActive))}
              >
                {item.label}
              </NavLink>
            ))}

            {/* Contact Button */}
            <NavLink to="/contact">
              <Button>Contact</Button>
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-50 hover:bg-zinc-900 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Section>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "md:hidden border-t border-zinc-800 bg-black transition-all duration-300 ease-in-out grid overflow-hidden absolute top-16 left-0 right-0 border-b shadow-2xl shadow-black z-50",
          isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn("text-base font-medium py-2 transition-colors", getLinkClass(isActive))}
                onClick={toggleMenu}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-zinc-800">
              <NavLink to="/contact" onClick={toggleMenu} className="inline-block w-full">
                <Button className="w-full">Contact</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}