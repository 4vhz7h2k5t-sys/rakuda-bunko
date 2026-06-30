"use client";

import RakudaLogo from "./RakudaLogo";

type NavItem = {
  id: string;
  label: string;
};

type SiteHeaderProps = {
  items: NavItem[];
  activeId?: string;
  onNavigate: (id: string) => void;
};

export default function SiteHeader({
  items,
  activeId,
  onNavigate
}: SiteHeaderProps) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#e6d8c8]/80 bg-white/92 shadow-[0_0.9rem_2.4rem_rgb(60_40_20/0.08)] backdrop-blur-xl">
      <div className="mx-auto flex h-[5.1rem] max-w-[1480px] items-center justify-between gap-5 px-4 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => onNavigate("cover")}
          className="shrink-0 text-left"
          aria-label="トップへ戻る"
        >
          <RakudaLogo compact />
        </button>
        <nav
          className="flex min-w-0 flex-1 justify-start overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:justify-end [&::-webkit-scrollbar]:hidden"
          aria-label="サイト内ナビゲーション"
        >
          <div className="flex items-center gap-1 sm:gap-2">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`relative whitespace-nowrap px-3 py-3 text-[0.76rem] transition sm:text-sm ${
                  activeId === item.id
                    ? "text-[#2d261f] after:absolute after:inset-x-3 after:bottom-1 after:h-px after:bg-[#9b6a3d]"
                    : "text-[#9b6a3d] hover:text-[#2d261f]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
