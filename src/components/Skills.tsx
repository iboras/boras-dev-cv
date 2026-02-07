import { skillCategories } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-gray-800 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-3xl font-bold text-white">Skills</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="mb-3 text-sm font-semibold tracking-wider text-indigo-400 uppercase">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
