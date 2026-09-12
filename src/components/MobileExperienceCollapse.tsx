"use client";

import { useEffect } from "react";

export function MobileExperienceCollapse() {
  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const isBg = window.location.pathname.split("/").includes("bg");
    const cleanup: Array<() => void> = [];

    const setupCollapse = (
      content: HTMLElement,
      title: HTMLElement,
      detailNodes: HTMLElement[],
      dataKey: string
    ) => {
      const button = document.createElement("button");
      const label = document.createElement("span");
      const chevron = document.createElement("span");
      let expanded = false;

      button.type = "button";
      button.className = "mobile-experience-toggle";
      button.setAttribute("aria-expanded", "false");
      button.dataset[dataKey] = "true";

      chevron.className = "mobile-experience-chevron";
      chevron.setAttribute("aria-hidden", "true");

      button.append(label, chevron);
      title.insertAdjacentElement("afterend", button);

      const render = () => {
        const isMobile = media.matches;

        button.hidden = !isMobile;
        detailNodes.forEach((node) => {
          node.hidden = isMobile && !expanded;
        });

        label.textContent = expanded
          ? isBg
            ? "Скрий"
            : "Show less"
          : isBg
            ? "Виж повече"
            : "Show more";

        button.setAttribute("aria-expanded", String(expanded));
        button.classList.toggle("is-open", expanded);
      };

      const handleClick = () => {
        expanded = !expanded;
        render();
      };

      button.addEventListener("click", handleClick);
      media.addEventListener("change", render);
      render();

      cleanup.push(() => {
        button.removeEventListener("click", handleClick);
        media.removeEventListener("change", render);
        detailNodes.forEach((node) => {
          node.hidden = false;
        });
        button.remove();
      });
    };

    const experienceCards = Array.from(document.querySelectorAll<HTMLElement>("#experience article"));

    experienceCards.forEach((card) => {
      const grid = card.querySelector<HTMLElement>(":scope > div.grid");
      const content = grid?.lastElementChild as HTMLElement | null;
      const title = content?.querySelector<HTMLElement>(":scope > h3");

      if (!content || !title) return;

      const detailNodes = Array.from(content.children).filter(
        (node): node is HTMLElement => node instanceof HTMLElement && node !== title
      );

      setupCollapse(content, title, detailNodes, "mobileExperienceToggle");
    });

    const projectCards = Array.from(document.querySelectorAll<HTMLElement>("#projects article"));

    projectCards.forEach((card) => {
      const content = card.firstElementChild as HTMLElement | null;
      const title = content?.querySelector<HTMLElement>(":scope > h3");
      const kicker = content?.querySelector<HTMLElement>(":scope > .kicker");

      if (!content || !title) return;

      const detailNodes = Array.from(content.children).filter(
        (node): node is HTMLElement =>
          node instanceof HTMLElement && node !== title && node !== kicker
      );

      setupCollapse(content, title, detailNodes, "mobileProjectToggle");
    });

    return () => cleanup.forEach((fn) => fn());
  }, []);

  return null;
}
