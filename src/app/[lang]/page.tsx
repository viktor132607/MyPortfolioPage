import { notFound } from "next/navigation";
import { content, type Lang } from "@/data/profile";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";

type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bg" }];
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;

  if (lang !== "en" && lang !== "bg") {
    notFound();
  }

  const currentLang = lang as Lang;
  const t = content[currentLang];

  return (
    <>
      <Header lang={currentLang} />

      <main>
        <Hero lang={currentLang} />

        <section id="about" className="section-shell section-padding">
          <SectionHeading eyebrow={t.sections.about.eyebrow} title={t.sections.about.title} />

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="card">
              <p className="text-lg leading-8 text-muted dark:text-slate-300">{t.sections.about.text}</p>
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
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink dark:text-slate-100">
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
                className="mx-auto w-[80vw] rounded-[2rem] border border-line bg-panel/80 p-5 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 sm:p-8"
              >
                <p className="kicker">{project.number}</p>

                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink dark:text-slate-100 sm:text-3xl">
                  {project.title}
                </h3>

                <div className="mt-6 space-y-4 text-sm leading-7 text-muted dark:text-slate-300">
                  <p>
                    <strong className="text-ink dark:text-slate-100">
                      {t.sections.projects.labels.context}:
                    </strong>{" "}
                    {project.context}
                  </p>

                  <p>
                    <strong className="text-ink dark:text-slate-100">
                      {t.sections.projects.labels.solution}:
                    </strong>{" "}
                    {project.solution}
                  </p>

                  <p>
                    <strong className="text-ink dark:text-slate-100">
                      {t.sections.projects.labels.role}:
                    </strong>{" "}
                    {project.role}
                  </p>

                  <p>
                    <strong className="text-ink dark:text-slate-100">
                      {t.sections.projects.labels.result}:
                    </strong>{" "}
                    {project.result}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {"previewUrl" in project && project.previewUrl ? (
                  <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-panel shadow-soft dark:border-slate-800 dark:bg-slate-950">
                    <iframe
                      src={project.previewUrl}
                      title={`${project.title} preview`}
                      loading="lazy"
                      className="h-[80vh] w-full bg-white"
                    />

                    <div className="border-t border-line px-4 py-3 text-right text-xs font-semibold text-muted dark:border-slate-800 dark:text-slate-300">
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
                  <div className="mt-8 flex h-[80vh] items-center justify-center rounded-3xl border border-dashed border-line bg-panel/60 text-sm font-semibold text-muted dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400">
                    Project preview coming soon
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell section-padding">
          <SectionHeading
            eyebrow={t.sections.skills.eyebrow}
            title={t.sections.skills.title}
            text={t.sections.skills.text}
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.skills.map((group) => (
              <article key={group.title} className="card">
                <h3 className="text-lg font-semibold text-ink dark:text-slate-100">{group.title}</h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-padding">
          <SectionHeading eyebrow={t.sections.philosophy.eyebrow} title={t.sections.philosophy.title} />

          <div className="grid gap-4 md:grid-cols-3">
            {t.principles.map((item) => (
              <article key={item.number} className="card">
                <p className="kicker">{item.number}</p>
                <h3 className="mt-4 text-lg font-semibold text-ink dark:text-slate-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted dark:text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-padding">
          <SectionHeading eyebrow={t.sections.current.eyebrow} title={t.sections.current.title} />

          <div className="card">
            <ul className="grid gap-3 text-sm leading-7 text-muted dark:text-slate-300 md:grid-cols-2">
              {t.currentFocus.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-shell section-padding">
          <SectionHeading
            eyebrow={t.sections.personal.eyebrow}
            title={t.sections.personal.title}
            text={t.sections.personal.text}
          />

          <div className="grid gap-4 md:grid-cols-3">
            {t.sections.personal.items.map((item) => (
              <article key={item} className="card">
                <h3 className="text-lg font-semibold text-ink dark:text-slate-100">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-muted dark:text-slate-300">
                  {t.sections.personal.itemText}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-padding">
          <SectionHeading
            eyebrow={t.sections.recommendations.eyebrow}
            title={t.sections.recommendations.title}
            text={t.sections.recommendations.text}
          />

          <div className="card">
            <p className="text-lg leading-8 text-muted dark:text-slate-300">
              {t.sections.recommendations.body}
            </p>
          </div>
        </section>

        <section id="contact" className="section-shell section-padding">
          <SectionHeading
            eyebrow={t.sections.contact.eyebrow}
            title={t.sections.contact.title}
            text={t.sections.contact.text}
          />

          <div className="card grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a className="text-sm font-semibold text-ink dark:text-slate-100" href={`mailto:${t.profile.email}`}>
              {t.sections.contact.email}: {t.profile.email}
            </a>

            <a className="text-sm font-semibold text-ink dark:text-slate-100" href={`tel:${t.profile.phone}`}>
              {t.sections.contact.phone}: {t.profile.phone}
            </a>

            <a
              className="text-sm font-semibold text-ink dark:text-slate-100"
              href={t.profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              className="text-sm font-semibold text-ink dark:text-slate-100"
              href={t.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/70 py-8 dark:border-slate-800">
        <div className="section-shell flex flex-col gap-2 text-sm text-muted dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t.profile.name}
          </p>

          <p>Next.js / TypeScript / TailwindCSS</p>
        </div>
      </footer>
    </>
  );
}