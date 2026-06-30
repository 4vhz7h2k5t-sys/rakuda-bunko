import { site } from "@/data/site";
import RakudaLogo from "./RakudaLogo";
import SectionPage from "./SectionPage";

export default function ContactSection() {
  return (
    <SectionPage
      id="contact"
      eyebrow="Contact / Footer"
      title="最新情報・お問い合わせはInstagramへ。"
      lead={
        <div className="space-y-5">
          <p>営業日、メニュー、日々のお知らせはInstagramで更新されています。</p>
          <p>お出かけ前に最新情報をご確認ください。</p>
        </div>
      }
      right={
        <footer className="flex h-full flex-col justify-between">
          <div className="soft-card flex flex-1 flex-col items-start justify-center p-8">
            <RakudaLogo />
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex h-24 w-24 items-center justify-center border border-[#9b6a3d] bg-[#9b6a3d] text-white transition hover:bg-[#4a3528]"
              aria-label="Instagramを見る"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-11 w-11"
                fill="none"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
              </svg>
            </a>
            <p className="mt-5 fine-label text-sm uppercase text-[#9b6a3d]">
              @rakuda.bunko
            </p>
          </div>
          <div className="mt-4 border-t border-[#e6d8c8] pt-5">
            <p className="text-sm leading-7 text-[#3a3028]">{site.demoNotice}</p>
            <p className="fine-label mt-3 text-xs uppercase text-[#b08968]">
              Demo site / unofficial
            </p>
          </div>
        </footer>
      }
    />
  );
}
