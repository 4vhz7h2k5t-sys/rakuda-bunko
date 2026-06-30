"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import PageProgress from "./PageProgress";
import SiteHeader from "./SiteHeader";

type PageDefinition = {
  id: string;
  label: string;
  component: React.ReactNode;
};

type PageFlipShellProps = {
  pages: PageDefinition[];
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const smoothstep = (edge0: number, edge1: number, value: number) => {
  const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

export default function PageFlipShell({ pages }: PageFlipShellProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobileBook, setIsMobileBook] = useState(false);

  const pageCount = pages.length;
  const pageProgress = progress * Math.max(0, pageCount - 1);
  const turnIndex = Math.min(pageCount - 2, Math.floor(pageProgress));
  const localProgress =
    pageCount <= 1 || turnIndex < 0 ? 0 : clamp(pageProgress - turnIndex, 0, 1);
  const turnAmount = smoothstep(0.03, 0.9, localProgress);
  const revealAmount = smoothstep(0.08, 0.78, localProgress);
  const settleAmount = smoothstep(0.72, 0.98, localProgress);
  const currentHideAmount = smoothstep(0.12, 0.84, localProgress);
  const currentPage =
    pageProgress >= pageCount - 1 ? pageCount - 1 : Math.min(pageCount - 1, Math.round(pageProgress));
  const activeId = pages[currentPage]?.id;
  const nextIndex = Math.min(pageCount - 1, turnIndex + 1);
  const labels = useMemo(() => pages.map((page) => page.label), [pages]);
  const navItems = useMemo(
    () => [
      { id: "schedule", label: "営業日" },
      { id: "concept", label: "コンセプト" },
      { id: "rule", label: "ご利用について" },
      { id: "menu", label: "メニュー" },
      { id: "access", label: "アクセス" },
      { id: "contact", label: "お問い合わせ" }
    ],
    []
  );

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 860px)");
    const updateMode = () => setReducedMotion(reduced.matches);
    const updateMobile = () => setIsMobileBook(mobile.matches);

    updateMode();
    updateMobile();
    reduced.addEventListener("change", updateMode);
    mobile.addEventListener("change", updateMobile);
    return () => {
      reduced.removeEventListener("change", updateMode);
      mobile.removeEventListener("change", updateMobile);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const update = () => {
      const shell = shellRef.current;
      if (!shell) return;
      const rect = shell.getBoundingClientRect();
      const scrollable = shell.offsetHeight - window.innerHeight;
      const raw = scrollable > 0 ? -rect.top / scrollable : 0;
      setProgress(clamp(raw, 0, 1));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reducedMotion]);

  const scrollToPage = (id: string) => {
    const index = pages.findIndex((page) => page.id === id);
    const shell = shellRef.current;
    if (index < 0) return;

    if (reducedMotion || !shell) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const scrollable = shell.offsetHeight - window.innerHeight;
    const targetTop =
      shell.offsetTop + (scrollable * index) / Math.max(1, pageCount - 1);
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>("a[href^='#']");
      if (!link) return;

      const id = link.getAttribute("href")?.replace("#", "");
      if (!id || !pages.some((page) => page.id === id)) return;
      event.preventDefault();
      scrollToPage(id);
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  });

  if (reducedMotion) {
    return (
      <>
        <SiteHeader
          items={navItems}
          activeId={activeId}
          onNavigate={scrollToPage}
        />
        <main className="reduced-pages">
          {pages.map((page) => (
            <div key={page.id}>{page.component}</div>
          ))}
        </main>
      </>
    );
  }

  return (
    <>
      <SiteHeader
        items={navItems}
        activeId={activeId}
        onNavigate={scrollToPage}
      />
      <main
        ref={shellRef}
        className="book-scroll"
        style={{ height: `${pageCount * 112}vh` }}
      >
        <div className="book-viewport">
          <div className="book-stage" aria-live="polite">
            {pages.map((page, index) => {
              const isVisible =
                index === turnIndex ||
                index === nextIndex ||
                (index === pageCount - 1 && pageProgress > pageCount - 1.02);
              const isNext = index === nextIndex && index !== turnIndex;
              const isTurningBase = index === turnIndex && turnIndex < pageCount - 1;
              const baseOpacity = isTurningBase && isMobileBook ? 1 - currentHideAmount * 0.92 : 1;

              return (
                <div
                  key={page.id}
                  className="spread-layer"
                  aria-hidden={!isVisible}
                  style={{
                    opacity: isVisible ? (isNext ? revealAmount : baseOpacity) : 0,
                    clipPath:
                      isTurningBase && !isMobileBook
                        ? `inset(0 ${50 * currentHideAmount}% 0 0)`
                        : undefined,
                    zIndex: isNext ? 1 : index === turnIndex ? 2 : 0
                  }}
                >
                  {page.component}
                </div>
              );
            })}

            {turnIndex >= 0 && turnIndex < pageCount - 1 ? (
              <div
                className="turning-page"
                style={{
                  transform: `rotateY(${-82 * turnAmount}deg)`,
                  opacity: 1 - settleAmount,
                  boxShadow: `${-24 * turnAmount}px 18px 48px rgb(60 40 20 / ${
                    0.1 + turnAmount * 0.2
                  })`
                }}
              >
                <div className="turning-face">
                  <div className="turning-face-inner">
                    {pages[turnIndex].component}
                  </div>
                </div>
                <div className="turning-back" />
              </div>
            ) : null}

            <div className="book-spine" />
            <div className="book-thickness book-thickness-left" />
            <div className="book-thickness book-thickness-right" />
          </div>
          <PageProgress
            currentPage={currentPage}
            total={pageCount}
            labels={labels}
            progress={progress}
          />
        </div>
      </main>
    </>
  );
}
