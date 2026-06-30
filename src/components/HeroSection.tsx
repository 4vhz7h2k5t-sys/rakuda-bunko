import Image from "next/image";
import { site } from "@/data/site";
import RakudaLogo from "./RakudaLogo";

export default function HeroSection() {
  return (
    <section id="hero" className="book-section hero-section">
      <div className="book-spread">
        <div className="book-page page-left">
          <div className="page-label">
            <span>Book cafe for quiet afternoons</span>
            <span>{site.nameEn}</span>
          </div>
          <div className="page-copy">
            <div className="mb-7">
              <RakudaLogo compact />
            </div>
            <h1 className="whitespace-pre-line">{site.catchcopy}</h1>
            <div className="page-lead">
              <p>{site.subcopy}</p>
            </div>
          </div>
          <div className="page-meta flex flex-wrap gap-3">
            <a
              href="#schedule"
              className="inline-flex min-h-12 items-center border border-[#9b6a3d] bg-[#9b6a3d] px-6 text-sm font-medium text-white transition hover:bg-[#4a3528]"
            >
              営業日を見る
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center border border-[#b08968] bg-white/60 px-6 text-sm font-medium text-[#4a3528] transition hover:border-[#4a3528]"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="book-page page-right">
          <div className="hero-visual">
            <Image
              src={site.heroImage}
              alt="本と珈琲と午後の光がある静かな読書空間"
              fill
              priority
              loading="eager"
              sizes="(min-width: 900px) 48vw, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d261f]/20 via-transparent to-white/5" />
            <div className="absolute bottom-5 left-5 border border-[#e6d8c8] bg-white/88 px-5 py-4 text-sm leading-7 text-[#4a3528] backdrop-blur">
              <p className="fine-label text-xs uppercase text-[#9b6a3d]">
                Today&apos;s note
              </p>
              <p className="mt-1 text-lg font-medium">{site.hours}</p>
              <p>定休日 {site.closedDays}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
