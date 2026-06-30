"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { menuGroups } from "@/data/menu";
import { notices } from "@/data/notices";
import SectionPage from "./SectionPage";

export default function MenuBooksSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = menuGroups[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % menuGroups.length);
    }, 7600);
    return () => window.clearInterval(timer);
  }, []);

  const go = (direction: 1 | -1) => {
    setActiveIndex((index) => {
      const next = index + direction;
      if (next < 0) return menuGroups.length - 1;
      if (next >= menuGroups.length) return 0;
      return next;
    });
  };

  const controls = (
    <div className="space-y-5">
      <div className="border-l border-[#b08968] pl-5 text-sm leading-7 text-[#3a3028]">
        <p className="text-[#9b6a3d]">{notices[0].title}</p>
        <p>{notices[0].text}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          className="flex h-12 w-12 items-center justify-center border border-[#b08968] bg-white/70 text-2xl text-[#4a3528] transition hover:border-[#4a3528]"
          aria-label="前のメニュー画像へ"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="flex h-12 w-12 items-center justify-center border border-[#b08968] bg-white/70 text-2xl text-[#4a3528] transition hover:border-[#4a3528]"
          aria-label="次のメニュー画像へ"
        >
          ›
        </button>
        <div className="ml-2 flex gap-2">
          {menuGroups.map((group, index) => (
            <button
              key={group.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 border border-[#9b6a3d] transition ${
                activeIndex === index ? "bg-[#9b6a3d]" : "bg-white/70"
              }`}
              aria-label={`${group.label} を表示`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <SectionPage
      id="menu"
      eyebrow="Menu / Books"
      title={"本のそばに、\n飲みものと甘いものを。"}
      lead={
        <p>
          珈琲やお茶、季節の甘いもの。本を読む手を少し止めて、静かな午後を味わうためのメニューを。
        </p>
      }
      leftMeta={controls}
      right={
        <div className="slider-frame">
          <div
            className="flex h-full transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {menuGroups.map((group) => (
              <article key={group.label} className="relative h-full w-full shrink-0">
                <Image
                  src={group.image}
                  alt={`${group.label} のデモ画像`}
                  fill
                  sizes="(min-width: 900px) 48vw, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d261f]/58 via-[#2d261f]/8 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                  <p className="fine-label text-xs uppercase">{group.label}</p>
                  <h3 className="mt-2 text-3xl font-medium sm:text-5xl">
                    {group.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 sm:text-base">
                    {group.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="absolute right-5 top-5 border border-white/60 bg-white/86 px-3 py-2 text-sm text-[#4a3528] backdrop-blur">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(menuGroups.length).padStart(2, "0")}
          </div>
          <div className="sr-only" aria-live="polite">
            {active.label}
          </div>
        </div>
      }
    />
  );
}
