import { schedule } from "@/data/schedule";
import { site } from "@/data/site";
import SectionPage from "./SectionPage";

const weekLabels = ["月", "火", "水", "木", "金", "土", "日"];

const statusStyles = {
  open: "border-[#9b6a3d] bg-white text-[#4a3528]",
  closed: "border-[#e6d8c8] bg-[#f5eadf] text-[#b08968]",
  check: "border-[#b08968] bg-[#fffaf2] text-[#4a3528]"
};

const statusText = {
  open: "Open",
  closed: "Close",
  check: "Check"
};

export default function ScheduleSection() {
  return (
    <SectionPage
      id="schedule"
      eyebrow="Schedule"
      title={"営業日を、\nまず見やすく。"}
      lead={
        <p>
          Instagramに流れてしまう営業情報を、お出かけ前にひと目で確認できるように。
        </p>
      }
      leftMeta={
        <div className="space-y-4">
          <div className="soft-card p-5">
            <p className="text-sm text-[#9b6a3d]">営業時間</p>
            <p className="mt-2 text-4xl font-medium text-[#2d261f] sm:text-5xl">
              {schedule.hours}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm leading-7 text-[#3a3028]">
            <div className="soft-card p-4">
              <p className="text-[#9b6a3d]">定休日</p>
              <p className="text-lg">{schedule.closedDays}</p>
            </div>
            <div className="soft-card p-4">
              <p className="text-[#9b6a3d]">不定休</p>
              <p className="text-lg">あり</p>
            </div>
          </div>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center border border-[#9b6a3d] bg-[#9b6a3d] px-5 text-sm font-medium text-white transition hover:bg-[#4a3528]"
          >
            Instagramで最新情報を見る
          </a>
        </div>
      }
      right={
        <div className="schedule-board flex h-full flex-col gap-4">
          <div className="soft-card grid grid-cols-2 gap-4 p-4 schedule-week-card">
            <div>
              <p className="fine-label text-xs uppercase text-[#9b6a3d]">
                This week
              </p>
              <p className="mt-2 text-2xl font-medium text-[#2d261f]">
                13:00 - 18:00
              </p>
            </div>
            <p className="self-end text-sm leading-7 text-[#3a3028]">
              最新情報はInstagramをご確認ください。
            </p>
          </div>
          <div className="soft-card schedule-calendar-card min-h-0 flex flex-1 flex-col p-5">
            <div className="mb-3 flex items-end justify-between gap-4">
              <div>
                <p className="fine-label text-xs uppercase text-[#9b6a3d]">
                  Demo calendar
                </p>
                <p className="mt-1 text-sm text-[#3a3028]">
                  {schedule.monthlyNotice}
                </p>
              </div>
              <div className="hidden gap-3 text-xs text-[#4a3528] sm:flex">
                <span>□ Open</span>
                <span>□ Check</span>
              </div>
            </div>
            <div className="schedule-calendar-grid">
              {weekLabels.map((label) => (
                <div
                  key={label}
                  className="schedule-week-label fine-label"
                >
                  {label}
                </div>
              ))}
              {schedule.days.map((day) => (
                <div
                  key={day.day}
                  className={`schedule-day-cell border ${statusStyles[day.status]}`}
                >
                  <p className="text-xs font-semibold">{day.day}</p>
                  <p className="fine-label mt-1 text-[0.52rem] uppercase sm:text-[0.62rem]">
                    {statusText[day.status]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}
