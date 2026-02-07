import { personalInfo } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-gray-800 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold text-white">Get in Touch</h2>
        <p className="mb-8 text-gray-400">
          I'm always open to new opportunities and interesting projects. Feel
          free to reach out!
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="rounded-lg bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            {personalInfo.email}
          </a>
          <div className="flex gap-4">
            {personalInfo.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
