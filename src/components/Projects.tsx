import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-gray-800 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-3xl font-bold text-white">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition-colors hover:border-gray-700"
            >
              <h3 className="mb-2 text-lg font-semibold text-white">
                {project.name}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-gray-800 px-2 py-0.5 text-xs text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  Source
                </a>
                {"live" in project && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 transition-colors hover:text-indigo-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
