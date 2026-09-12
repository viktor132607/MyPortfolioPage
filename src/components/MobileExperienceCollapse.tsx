"use client";

import { useEffect } from "react";
import { content } from "@/data/profile";

export function MobileExperienceCollapse() {
  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const isBg = window.location.pathname.split("/").includes("bg");
    const cleanup: Array<() => void> = [];

    const setupCollapse = (
      content: HTMLElement,
      anchor: HTMLElement,
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
      anchor.insertAdjacentElement("afterend", button);

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

    const projectTypes = [
      "Photography website",
      "Accounting website",
      "E-commerce platform",
      "Folk community platform",
      "Full-stack platform",
      "Full-stack project",
      "World of Warcraft community platform",
      "Full-stack community platform"
    ];

    const projectCards = Array.from(document.querySelectorAll<HTMLElement>("#projects article"));

    projectCards.forEach((card, index) => {
      const projectData = (content.en.projects[index] ?? null) as
        | {
            repositoryUrl?: string;
            backendRepositoryUrl?: string;
            previewUrl?: string;
          }
        | null;

      const cardContent = card.firstElementChild as HTMLElement | null;
      const title = cardContent?.querySelector<HTMLElement>(":scope > h3");
      const kicker = cardContent?.querySelector<HTMLElement>(":scope > .kicker");

      if (!cardContent || !title) return;

      const originalTitle = title.textContent ?? "";
      const [cleanTitle, inlineType] = originalTitle.split(" — ");
      const projectTypeText = inlineType || projectTypes[index] || "";

      title.textContent = cleanTitle;

      const projectType = document.createElement("p");
      projectType.className = "mt-2 text-sm font-semibold text-ink dark:text-white sm:text-base";
      projectType.textContent = projectTypeText;
      title.insertAdjacentElement("afterend", projectType);

      cleanup.push(() => {
        title.textContent = originalTitle;
        projectType.remove();
      });

      const githubLinks = Array.from(card.querySelectorAll<HTMLAnchorElement>('a[href*="github.com"]'));
      const frontendLink = projectData?.repositoryUrl
        ? githubLinks.find((link) => link.href === projectData.repositoryUrl)
        : githubLinks[0];
      const existingBackendLink = projectData?.backendRepositoryUrl
        ? githubLinks.find((link) => link.href === projectData.backendRepositoryUrl)
        : undefined;

      if (frontendLink && projectData?.backendRepositoryUrl) {
        const originalFrontendText = frontendLink.textContent;
        frontendLink.textContent = "Open frontend repository";

        let backendLink = existingBackendLink;
        let createdBackendLink = false;
        const originalBackendText = backendLink?.textContent ?? null;

        if (!backendLink) {
          backendLink = frontendLink.cloneNode(true) as HTMLAnchorElement;
          backendLink.href = projectData.backendRepositoryUrl;
          frontendLink.insertAdjacentElement("afterend", backendLink);
          createdBackendLink = true;
        }

        backendLink.textContent = "Open backend repository";

        cleanup.push(() => {
          frontendLink.textContent = originalFrontendText;
          if (createdBackendLink) {
            backendLink?.remove();
          } else if (backendLink) {
            backendLink.textContent = originalBackendText;
          }
        });
      } else if (frontendLink) {
        const originalText = frontendLink.textContent;
        frontendLink.textContent = "Open GitHub repository";
        cleanup.push(() => {
          frontendLink.textContent = originalText;
        });
      }

      if (index === 6 && projectData?.previewUrl) {
        const existingIframe = card.querySelector<HTMLIFrameElement>("iframe");

        if (existingIframe) {
          const originalSrc = existingIframe.src;
          const originalLoading = existingIframe.loading;
          existingIframe.src = projectData.previewUrl;
          existingIframe.loading = "eager";

          cleanup.push(() => {
            existingIframe.src = originalSrc;
            existingIframe.loading = originalLoading;
          });
        } else {
          const previewImage = card.querySelector<HTMLImageElement>('img[src*="paladinhub-home"]');
          const previewContainer = previewImage?.closest("a, div") as HTMLElement | null;

          if (previewContainer?.parentElement) {
            const parent = previewContainer.parentElement;
            const nextSibling = previewContainer.nextSibling;
            const iframe = document.createElement("iframe");
            iframe.src = projectData.previewUrl;
            iframe.title = `${cleanTitle} preview`;
            iframe.loading = "eager";
            iframe.className = "h-[80vh] w-full bg-white";
            parent.replaceChild(iframe, previewContainer);

            cleanup.push(() => {
              if (iframe.parentElement === parent) {
                parent.removeChild(iframe);
                parent.insertBefore(previewContainer, nextSibling);
              }
            });
          }
        }
      }

      const detailNodes = Array.from(cardContent.children).filter(
        (node): node is HTMLElement =>
          node instanceof HTMLElement && node !== title && node !== projectType && node !== kicker
      );

      setupCollapse(cardContent, projectType, detailNodes, "mobileProjectToggle");
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
