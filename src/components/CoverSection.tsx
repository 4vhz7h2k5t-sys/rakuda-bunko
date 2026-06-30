import { site } from "@/data/site";
import RakudaLogo from "./RakudaLogo";

export default function CoverSection() {
  return (
    <section id="cover" className="book-section cover-section">
      <div className="book-spread cover-spread">
        <div className="cover-board">
          <div className="cover-logo">
            <RakudaLogo />
          </div>
          <div className="cover-actions" aria-label="表紙ナビゲーション">
            <a href="#schedule" className="cover-schedule-link">
              営業日を見る
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="cover-instagram-link"
              aria-label="Instagramを開く"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
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
          </div>
        </div>
      </div>
    </section>
  );
}
