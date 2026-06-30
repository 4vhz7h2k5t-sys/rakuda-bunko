import { site } from "@/data/site";
import SectionPage from "./SectionPage";

export default function AccessSection() {
  return (
    <SectionPage
      id="access"
      eyebrow="Access"
      title="田口の小さな読書場所へ。"
      lead={
        <p>
          正確な場所・経路はGoogleマップでご確認ください。駐車場情報はInstagramをご確認ください。
        </p>
      }
      leftMeta={
        <div className="space-y-4">
          <div className="soft-card p-6">
            <p className="fine-label text-xs uppercase text-[#9b6a3d]">
              Rakuda Bunko
            </p>
            <h3 className="mt-4 text-3xl font-medium text-[#2d261f]">
              {site.nameJa}
            </h3>
            <p className="mt-3 text-lg text-[#3a3028]">{site.address}</p>
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#e6d8c8] pt-5 text-sm leading-7">
              <div>
                <p className="text-[#9b6a3d]">営業時間</p>
                <p>{site.hours}</p>
              </div>
              <div>
                <p className="text-[#9b6a3d]">定休日</p>
                <p>{site.closedDays}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center border border-[#9b6a3d] bg-[#9b6a3d] px-5 text-sm font-medium text-white transition hover:bg-[#4a3528]"
            >
              Googleマップで開く
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center border border-[#b08968] bg-white/70 px-5 text-sm font-medium text-[#4a3528] transition hover:border-[#4a3528]"
            >
              Instagram
            </a>
          </div>
        </div>
      }
      right={
        <div className="map-frame">
          <iframe
            title="ラクダ文庫 Googleマップ"
            src={site.googleMapsEmbedUrl}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute left-5 top-5 border border-[#e6d8c8] bg-white/88 px-4 py-3 text-sm text-[#4a3528] backdrop-blur">
            衛星表示のGoogleマップ
          </div>
        </div>
      }
    />
  );
}
