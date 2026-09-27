import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";

const highlights = [
  { label: "Course", value: "BSIT 3B" },
  { label: "Focus", value: "Web Development" },
  { label: "Building", value: "React & Tailwind" },
];

export function HomePageBannerSection() {
  return (
    <Section className="p-0">
      <div className="w-full min-h-screen flex items-center bg-black py-12 md:py-0">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* PHOTO CARD */}
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-zinc-800/60 via-zinc-900/30 to-transparent blur-2xl"
              aria-hidden="true"
            />

            <div className="relative rounded-[2rem] border border-zinc-800 bg-zinc-900/60 backdrop-blur p-3 shadow-2xl shadow-black">
              <div className="overflow-hidden rounded-[1.5rem] bg-black">
                <img
                  src="/pars.jpeg"
                  alt="JEfferon A. Ando"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 -left-2 sm:left-6 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 shadow-xl shadow-black">
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Currently
              </p>
              <p className="text-base font-semibold text-zinc-50">
                Building with React
              </p>
            </div>
          </div>

          {/* TEXT + HIGHLIGHT CARDS */}
          <div>
            <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-zinc-300">
              BSIT 3B
            </span>

            <h1 className="mt-5 w-full text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-50 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
                JEfferon A. Ando
              </span>
            </h1>

            <p className="mt-6 w-full max-w-xl text-lg sm:text-xl text-zinc-300 leading-relaxed">
              I am a BSIT 3B student who enjoys building modern, responsive,
              and user-friendly websites. I like turning ideas into functional
              digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-8">
              <NavLink to="/about" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-8 h-12 text-base">
                  Get Started
                </Button>
              </NavLink>

              <NavLink to="/contact" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto px-8 h-12 text-base"
                >
                  Contact Me
                </Button>
              </NavLink>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 hover:border-zinc-500 transition-colors"
                >
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    {highlight.label}
                  </p>
                  <p className="mt-1 text-base font-semibold text-zinc-100">
                    {highlight.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
