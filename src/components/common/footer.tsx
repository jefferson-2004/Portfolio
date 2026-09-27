import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-base text-zinc-500 text-center sm:text-left">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </p>

          <nav className="flex items-center space-x-6">
            <NavLink to="/" className="text-base text-zinc-400 hover:text-zinc-50 transition-colors">Home</NavLink>
            <NavLink to="/about" className="text-base text-zinc-400 hover:text-zinc-50 transition-colors">About</NavLink>
            <NavLink to="/project" className="text-base text-zinc-400 hover:text-zinc-50 transition-colors">Projects</NavLink>
            <NavLink to="/contact" className="text-base text-zinc-400 hover:text-zinc-50 transition-colors">Contact</NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}
