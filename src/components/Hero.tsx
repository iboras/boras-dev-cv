import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <p className="mb-3 text-sm font-medium tracking-widest text-indigo-400 uppercase">
        {personalInfo.title}
      </p>
      <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
        {personalInfo.name}
      </h1>
      <p className="mb-8 max-w-xl text-lg text-gray-400">
        {personalInfo.tagline}
      </p>
      <div className="flex gap-4">
        <a
          href="#contact"
          className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="rounded-lg border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
