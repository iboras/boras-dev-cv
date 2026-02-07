import { personalInfo } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="border-t border-gray-800 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold text-white">About Me</h2>
        <p className="leading-relaxed text-gray-400">{personalInfo.bio}</p>
      </div>
    </section>
  );
}
