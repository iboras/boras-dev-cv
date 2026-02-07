import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-gray-800 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-3xl font-bold text-white">Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="relative border-l-2 border-gray-700 pl-6"
            >
              <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-indigo-500 bg-gray-950" />
              <p className="mb-1 text-sm text-gray-500">{exp.period}</p>
              <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
              <p className="mb-3 text-sm text-indigo-400">{exp.company}</p>
              <ul className="space-y-1 text-sm text-gray-400">
                {exp.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-600" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
