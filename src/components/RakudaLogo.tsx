import { site } from "@/data/site";

type RakudaLogoProps = {
  compact?: boolean;
};

export default function RakudaLogo({ compact = false }: RakudaLogoProps) {
  return (
    <div className="flex items-center gap-3 text-[#4a3528]" aria-label={site.nameJa}>
      <svg
        aria-hidden="true"
        className={compact ? "h-10 w-10" : "h-14 w-14"}
        viewBox="0 0 64 64"
        fill="none"
      >
        <rect
          x="9"
          y="8"
          width="46"
          height="48"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M18 47c4-11 9-18 16-18 3 0 4.7 1.2 6.2 3.2 1.3-2.7 3.3-4.2 6-4.2 4.3 0 7.8 4.2 8.5 10"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
        <path
          d="M17 47h26c4.8 0 8.8-3.4 9.7-8.1"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
        <path
          d="M43 47v5M25 47v5M20 29c2.3-3.6 4.9-5.5 7.9-5.5M20 29l-4-4M28 23.5l1.2-4.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
        <path d="M17 16h30M17 20h22" stroke="currentColor" strokeLinecap="round" />
      </svg>
      <div>
        <p className={compact ? "text-base font-semibold" : "text-xl font-semibold"}>
          {site.nameJa}
        </p>
        <p className="fine-label text-[0.62rem] uppercase text-[#9b6a3d]">
          {site.nameEn}
        </p>
      </div>
    </div>
  );
}
