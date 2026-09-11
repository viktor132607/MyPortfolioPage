"use client";

import { useEffect, useMemo, useState } from "react";
import { content, type Lang } from "@/data/profile";

type HeaderProps = {
  lang: Lang;
};

const sectionOrder = ["skills", "about", "experience", "projects", "education", "certificates", "contact"] as const;

export function Header({ lang }: HeaderProps) {
  const t = content[lang] as any;
  const [activeSection, setActiveSection] = useState("top");
  const [isDark, setIsDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = useMemo(() => {
    const labels = new Map<string, string>(t.navItems.map((item: any) => [item.href, item.label] as [string, string]));

    return sectionOrder.map((id) => ({
      id,
      href: `#${id}`,
      label: labels.get(`#${id}`) ?? id
    }));
  }, [t.navItems]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialDark = savedTheme === null ? false : savedTheme === "dark";

    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  useEffect(() => {
    const sectionIds = ["top", ...sectionOrder];

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const headerOffset = 90;

      let bestSection = "top";
      let bestVisibleArea = 0;

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, headerOffset);
        const visibleBottom = Math.min(rect.bottom, viewportHeight);
        const visibleArea = Math.max(0, visibleBottom - visibleTop);

        if (visibleArea > bestVisibleArea) {
          bestVisibleArea = visibleArea;
          bestSection = id;
        }
      }

      setActiveSection(bestSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  function toggleTheme() {
    const nextDark = !isDark;

    setIsDark(nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", nextDark);
  }

  function scrollToSection(id: string) {
    const section = document.getElementById(id);

    if (!section) return;

    const headerHeight = 74;
    const top = section.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top,
      behavior: "smooth"
    });

    setActiveSection(id);
    setMobileOpen(false);
  }

  const nextLang: Lang = lang === "bg" ? "en" : "bg";
  const homeLabel = lang === "bg" ? "Начало" : "Home";

  const mobileLinkClass = (active: boolean) =>
    `block w-full border-b border-slate-200 py-4 text-left text-base font-semibold tracking-[0.01em] transition dark:border-white/10 ${
      active
        ? "text-slate-950 dark:text-white"
        : "text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-teal-700 bg-teal-700 shadow-sm dark:border-cyan-900/70 dark:bg-slate-950/95 dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <div className="section-shell">
        <div className="flex min-h-[72px] items-center justify-between gap-6 lg:min-h-16">
          <nav className="hidden items-center gap-5 lg:flex">
            <button
              type="button"
              onClick={() => scrollToSection("top")}
              className="relative py-2 text-sm font-semibold text-white transition hover:text-white"
            >
              {homeLabel}

              {activeSection === "top" ? (
                <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-red-500 dark:bg-teal-300" />
              ) : null}
            </button>

            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="relative py-2 text-sm font-semibold text-white transition hover:text-white"
                >
                  {item.label}

                  {isActive ? (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-red-500 dark:bg-teal-300" />
                  ) : null}
                </button>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-teal-200/60 bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-500 dark:border-cyan-700/60 dark:bg-slate-950 dark:hover:bg-cyan-950"
            >
              {isDark ? "Light" : "Dark"}
            </button>

            <a
              href={`/${nextLang}`}
              className="rounded-full border border-teal-200/60 bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-500 dark:border-cyan-700/60 dark:bg-slate-950 dark:hover:bg-cyan-950"
            >
              {nextLang.toUpperCase()}
            </a>

            <a
              href={t.profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-teal-200/60 bg-teal-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-500 dark:border-cyan-700/60 dark:bg-slate-950 dark:hover:bg-cyan-950"
            >
              {t.buttons.downloadCv}
            </a>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-3 lg:hidden">
            <a
              href={t.profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center px-1 text-[15px] font-bold tracking-[0.01em] text-slate-900 transition hover:opacity-70 dark:text-white"
            >
              CV
            </a>

            <a
              href={`/${nextLang}`}
              className="inline-flex h-10 items-center justify-center px-1 text-[15px] font-bold tracking-[0.01em] text-slate-900 transition hover:opacity-70 dark:text-white"
            >
              {nextLang.toUpperCase()}
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center border border-transparent bg-transparent text-slate-900 transition hover:bg-slate-100 dark:text-white dark:hover:bg-slate-900 [border-radius:9999px]"
              aria-label={isDark ? "Light theme" : "Dark theme"}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[20px] w-[20px]" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-100 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
              aria-label={lang === "bg" ? "Меню" : "Menu"}
              aria-expanded={mobileOpen}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-[19px] w-[19px]" aria-hidden="true">
                <path d="M5 7h14M5 12h14M5 17h14" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-slate-200 bg-white/95 px-5 py-5 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/95 lg:hidden">
          <button
            type="button"
            onClick={() => scrollToSection("top")}
            className={mobileLinkClass(activeSection === "top")}
          >
            {homeLabel}
          </button>

          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={mobileLinkClass(activeSection === item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </header>
  );
}
