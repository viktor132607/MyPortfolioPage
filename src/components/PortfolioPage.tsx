import { content, type Lang } from "@/data/profile";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";

type PortfolioPageProps = {
  lang: Lang;
};

export function PortfolioPage({ lang }: PortfolioPageProps) {
  const t = content[lang];

  return (
    <>
      <Header lang={lang} />

      <main>
        <Hero lang={lang} />

        <section id="skills" className="section-shell section-padding">
          <SectionHeading
            eyebrow={t.sections.skills.eyebrow}
            title={t.sections.skills.title}
            text={t.sections.skills.text}
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {t.techStack.map((group) => (
              <article key={group.title} className="card">
                <h3 className="text-xl font-semibold text-ink dark:text-slate-100">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.badges.map((badge) => (
                    <span
                      key={badge.name}
                      className={`inline-flex items-center rounded-md px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] shadow-sm ${badge.className}`}
                    >
                      {badge.name}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-shell section-padding">
          <SectionHeading eyebrow={t.sections.about.eyebrow} title={t.sections.about.title} />

          <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="card">
              <p className="text-base leading-8 text-muted dark:text-slate-300 sm:text-lg">
                {t.sections.about.text}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {t.aboutCards.map((card) => (
                <article key={card.number} className="card">
                  <p className="kicker">{card.number}</p>
                  <h3 className="mt-4 text-lg font-semibold text-ink dark:text-slate-100">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted dark:text-slate-300">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell section-padding">
          <SectionHeading
            eyebrow={t.sections.experience.eyebrow}
            title={t.sections.experience.title}
            text={t.sections.experience.text}
          />

          <div className="space-y-5">
            {t.experience.map((item) => (
              <article key={`${item.period}-${item.title}`} className="card">
                <div className="grid gap-5 lg:grid-cols-[0.3fr_0.7fr]">
                  <div>
                    <p className="kicker">{item.period}</p>
                    <p className="mt-4 text-sm text-muted dark:text-slate-300">{item.company}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink dark:text-slate-100 sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-muted dark:text-slate-300">{item.text}</p>

                    <ul className="mt-5 space-y-2 text-sm leading-6 text-muted dark:text-slate-300">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>• {bullet}</li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span key={tech} className="pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-padding">
          <div className="section-shell">
            <SectionHeading
              eyebrow={t.sections.projects.eyebrow}
              title={t.sections.projects.title}
              text={t.sections.projects.text}
            />
          </div>

          <div className="mt-10 grid gap-12">
            {t.projects.map((project) => (
              <article
                key={project.number}
                className="mx-auto w-[80vw] overflow-hidden rounded-[2rem] border border-line bg-panel/80 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
              >
                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="kicker">{project.number}</p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink dark:text-slate-100 sm:text-3xl">
                    {project.title}
                  </h3>

                  <div className="mt-6 space-y-3 text-sm leading-7 text-muted dark:text-slate-300">
                    <p>
                      <strong className="text-ink dark:text-slate-100">{t.sections.projects.labels.context}:</strong>{" "}
                      {project.context}
                    </p>

                    <p>
                      <strong className="text-ink dark:text-slate-100">{t.sections.projects.labels.solution}:</strong>{" "}
                      {project.solution}
                    </p>

                    <p>
                      <strong className="text-ink dark:text-slate-100">{t.sections.projects.labels.role}:</strong>{" "}
                      {project.role}
                    </p>

                    <p>
                      <strong className="text-ink dark:text-slate-100">{t.sections.projects.labels.result}:</strong>{" "}
                      {project.result}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.previewUrl ? (
                  <div className="border-t border-line bg-white dark:border-slate-800">
                    <iframe
                      src={project.previewUrl}
                      title={`${project.title} preview`}
                      loading="lazy"
                      className="h-[80vh] w-full bg-white"
                    />

                    <div className="border-t border-line bg-panel px-4 py-3 text-right text-xs font-semibold text-muted dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-ink dark:hover:text-slate-100"
                      >
                        Open live project
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-[80vh] items-center justify-center border-t border-dashed border-line bg-panel/60 text-sm font-semibold text-muted dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400">
                    Project preview coming soon
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section-shell section-padding">
          <SectionHeading
            eyebrow={t.sections.education.eyebrow}
            title={t.sections.education.title}
            text={t.sections.education.text}
          />

          <div className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-4">
            {t.education.map((item) => (
              <article key={`${item.title}-${item.period}`} className="card">
                <p className="kicker">{item.period}</p>
                <h3 className="mt-4 text-xl font-semibold text-ink dark:text-slate-100">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold text-ink dark:text-slate-100">{item.degree}</p>
                <p className="mt-4 text-sm leading-7 text-muted dark:text-slate-300">{item.text}</p>

                <ul className="mt-5 space-y-2 text-sm leading-6 text-muted dark:text-slate-300">
                  {item.details.map((detail) => (
                    <li key={detail}>• {detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="certificates" className="section-shell section-padding">
          <SectionHeading
            eyebrow={t.sections.certificates.eyebrow}
            title={t.sections.certificates.title}
            text={t.sections.certificates.text}
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {t.certificates.map((certificate) => (
              <article
                key={`${certificate.title}-${certificate.date}`}
                className="overflow-hidden rounded-[2rem] border border-line bg-panel/80 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
              >
                <div className="border-b border-line bg-white dark:border-slate-800">
                  <img
                    src={certificate.previewImage}
                    alt={`${certificate.title} certificate preview`}
                    className="w-full bg-white object-contain object-top"
                  />
                </div>

                <div className="p-5">
                  <p className="kicker">{certificate.provider}</p>

                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-ink dark:text-slate-100">
                    {certificate.title}
                  </h3>

                  <div className="mt-5 grid gap-3 text-sm leading-6 text-muted dark:text-slate-300">
                    <div className="grid grid-cols-[0.35fr_0.65fr] gap-3">
                      <span className="font-semibold text-ink dark:text-slate-100">Course date</span>
                      <span>{certificate.date}</span>
                    </div>

                    <div className="grid grid-cols-[0.35fr_0.65fr] gap-3">
                      <span className="font-semibold text-ink dark:text-slate-100">Issue date</span>
                      <span>{certificate.issueDate}</span>
                    </div>

                    <div className="grid grid-cols-[0.35fr_0.65fr] gap-3">
                      <span className="font-semibold text-ink dark:text-slate-100">Area</span>
                      <span>{certificate.area}</span>
                    </div>

                    <div className="grid grid-cols-[0.35fr_0.65fr] gap-3">
                      <span className="font-semibold text-ink dark:text-slate-100">Level</span>
                      <span>{certificate.level}</span>
                    </div>
                  </div>

                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    Open certificate
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell section-padding">
          <div className="rounded-[2rem] border border-teal-700/60 bg-teal-950/40 p-6 shadow-sm dark:border-teal-700/70 dark:bg-[#061f1f]/80 sm:p-8 lg:p-12">
            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              {t.sections.contact.title}
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              {t.sections.contact.text}
            </p>

            <div className="mt-10 grid gap-4 rounded-[1.5rem] border border-teal-500/50 bg-slate-950/45 p-5 text-sm font-semibold text-white sm:grid-cols-2 xl:grid-cols-4">
              <a
                href={`mailto:${t.profile.email}`}
                className="rounded-2xl border border-teal-500/40 bg-teal-950/60 px-5 py-4 transition hover:border-teal-300 hover:bg-teal-900/80"
              >
                <span className="block text-xs uppercase tracking-[0.18em] text-white">
                  {t.sections.contact.email}
                </span>
                <span className="mt-2 block break-all text-white">{t.profile.email}</span>
              </a>

              <a
                href={`tel:${t.profile.phone}`}
                className="rounded-2xl border border-teal-500/40 bg-teal-950/60 px-5 py-4 transition hover:border-teal-300 hover:bg-teal-900/80"
              >
                <span className="block text-xs uppercase tracking-[0.18em] text-white">
                  {t.sections.contact.phone}
                </span>
                <span className="mt-2 block text-white">{t.profile.phone}</span>
              </a>

              <a
                href={t.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-teal-500/40 bg-teal-950/60 px-5 py-4 transition hover:border-teal-300 hover:bg-teal-900/80"
              >
                <span className="block text-xs uppercase tracking-[0.18em] text-white">GitHub</span>
                <span className="mt-2 block text-white">Open profile</span>
              </a>

              <a
                href={t.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-teal-500/40 bg-teal-950/60 px-5 py-4 transition hover:border-teal-300 hover:bg-teal-900/80"
              >
                <span className="block text-xs uppercase tracking-[0.18em] text-white">LinkedIn</span>
                <span className="mt-2 block text-white">Open profile</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-teal-800/80 bg-[#031f1f] py-10 text-white shadow-sm dark:border-teal-900/80 dark:bg-[#031f1f]/95 dark:shadow-[0_-10px_40px_rgba(0,0,0,0.35)]">
        <div className="section-shell flex flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-bold tracking-[-0.02em] text-white">{t.profile.name}</p>
            <p className="mt-1 font-medium text-white">{t.profile.role}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              href={`mailto:${t.profile.email}`}
              className="font-semibold text-white transition hover:text-white"
            >
              Email
            </a>

            <a
              href={t.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href={t.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-xs font-medium text-white">
            © {new Date().getFullYear()} {t.profile.name}. Next.js / TypeScript / TailwindCSS
          </p>
        </div>
      </footer>
    </>
  );
}