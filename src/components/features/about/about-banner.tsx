import { Section } from "@/components/common/section";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "React",
  "Next.js",
  "Git",
  "GitHub",
];

const details = [
  { label: "Name", value: "JEfferon A. Ando" },
  { label: "Course & Year", value: "BSIT 3B" },
  { label: "Focus", value: "Front-End Development" },
  { label: "Location", value: "Philippines" },
];

export function AboutPageBannerSection() {
  return (
    <Section className="py-16 md:py-24">
      <div className="w-full max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            About Me
          </p>

          <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold text-zinc-50">
            Who I Am
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-zinc-400">
            Get to know me and the technologies I use.
          </p>
        </div>

        {/* Intro Card */}
        <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50">
            I'm JEfferon A. Ando
          </h2>

          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            BSIT 3B
          </p>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 leading-relaxed">
            I'm JEfferon A. Ando, a BSIT 3B student who enjoys building clean
            and responsive websites. I like turning ideas into working
            interfaces, paying attention to layout, usability, and how a page
            feels on both phone and desktop.
          </p>

          <p className="mt-4 text-lg sm:text-xl text-zinc-300 leading-relaxed">
            Right now I'm focused on strengthening my fundamentals in HTML,
            CSS, JavaScript, and React, along with Git and GitHub for version
            control. I learn by building small projects and applying what I
            read, which helps me improve as a developer step by step.
          </p>
        </div>

        {/* Details Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 hover:border-zinc-500 transition-colors"
            >
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                {detail.label}
              </p>
              <p className="mt-1 text-base font-semibold text-zinc-100">
                {detail.value}
              </p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-zinc-50 text-center">
            My Skills
          </h2>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-5 text-center text-lg font-semibold text-zinc-200 hover:border-zinc-500 hover:text-zinc-50 transition-all"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
