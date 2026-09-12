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
      dataKey: string,
      onRender?: (isMobile: boolean, expanded: boolean) => void,
      onCleanup?: () => void
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
        onRender?.(isMobile, expanded);
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
        onCleanup?.();
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

    const educationCards = Array.from(document.querySelectorAll<HTMLElement>("#education article"));

    educationCards.forEach((card) => {
      const title = card.querySelector<HTMLElement>(":scope > h3");
      const degree = title?.nextElementSibling as HTMLElement | null;

      if (!title) return;

      const anchor = degree ?? title;
      const detailNodes = Array.from(card.children).filter(
        (node): node is HTMLElement =>
          node instanceof HTMLElement &&
          node !== title &&
          node !== degree &&
          !node.classList.contains("kicker")
      );

      setupCollapse(card, anchor, detailNodes, "mobileEducationToggle");
    });

    const certificateCards = Array.from(document.querySelectorAll<HTMLElement>("#certificates article"));

    certificateCards.forEach((card) => {
      const preview = card.firstElementChild as HTMLElement | null;
      const content = card.lastElementChild as HTMLElement | null;
      const title = content?.querySelector<HTMLElement>(":scope > h3");
      const provider = content?.querySelector<HTMLElement>(":scope > .kicker");
      const metadata = content?.querySelector<HTMLElement>(":scope > div.mt-5.grid");

      if (!preview || !content || !title || !metadata) return;

      const rows = Array.from(metadata.children).filter(
        (node): node is HTMLElement => node instanceof HTMLElement
      );
      const courseDateRow = rows[0];
      const issueDateRow = rows[1];
      const areaRow = rows[2];
      const levelRow = rows[3];

      levelRow?.classList.add("certificate-level-row");
      areaRow?.classList.add("certificate-area-row");

      const detailNodes = [provider, courseDateRow, issueDateRow].filter(
        (node): node is HTMLElement => node instanceof HTMLElement
      );

      const restorePreview = () => {
        preview.hidden = false;
        preview.classList.remove("mobile-certificate-preview");
        if (preview.parentElement !== card || preview.nextElementSibling !== content) {
          card.insertBefore(preview, content);
        }
      };

      setupCollapse(
        content,
        metadata,
        detailNodes,
        "mobileCertificateToggle",
        (isMobile, expanded) => {
          if (isMobile) {
            if (preview.parentElement !== content) {
              content.appendChild(preview);
            }
            preview.classList.add("mobile-certificate-preview");
            preview.hidden = !expanded;
          } else {
            restorePreview();
          }
        },
        restorePreview
      );
    });

    return () => cleanup.forEach((fn) => fn());
  }, []);

  return null;
}
