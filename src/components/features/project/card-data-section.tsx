import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  url: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "",
    description: "",
    technologies: [],
    url: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    technologies: [],
    url: "",
  },
  {
    id: 3,
    title: "",
    description: "",
    technologies: [],
    url: "",
  },
];

export function CardDataSection() {
  return (
    <Section className="py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Portfolio
          </p>

          <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold text-zinc-50">
            My Projects
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            A work in progress. Each card below is a slot for a project I am
            building as a BSIT 3B student.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isEmpty = !project.title;

            return (
              <div
                key={project.id}
                className={cn(
                  "flex flex-col rounded-2xl border transition-colors duration-300",
                  isEmpty
                    ? "border-dashed border-zinc-800 bg-zinc-900/40"
                    : "border-zinc-800 bg-zinc-900/60 hover:border-zinc-500"
                )}
              >
                {project.image && !isEmpty && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover border-b border-zinc-800"
                  />
                )}

                <div className="flex flex-col flex-1 p-6">
                  {isEmpty ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
                      <div className="w-12 h-12 rounded-2xl border border-zinc-800 bg-black flex items-center justify-center text-xl text-zinc-600">
                        +
                      </div>

                      <p className="mt-4 text-lg font-semibold text-zinc-300">
                        Add your project here
                      </p>

                      <p className="mt-1 text-base text-zinc-500">
                        Fill in the title, description, image, technologies
                        and link.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold text-zinc-100">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-base text-zinc-400 leading-relaxed">
                        {project.description}
                      </p>

                      {project.technologies.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="px-2.5 py-1 text-sm font-medium rounded-full bg-zinc-800 text-zinc-200"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      )}

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 w-full"
                        >
                          <Button className="w-full justify-between group/btn">
                            View Project

                            <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">
                              →
                            </span>
                          </Button>
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
