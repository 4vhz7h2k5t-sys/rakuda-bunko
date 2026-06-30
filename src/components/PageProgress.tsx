"use client";

type PageProgressProps = {
  currentPage: number;
  total: number;
  labels: string[];
  progress: number;
};

export default function PageProgress({
  currentPage,
  total,
  labels,
  progress
}: PageProgressProps) {
  return (
    <aside className="pointer-events-none fixed bottom-3 left-1/2 z-40 flex w-[min(34rem,calc(100vw-1.5rem))] -translate-x-1/2 items-center gap-3 border border-[#e6d8c8]/80 bg-white/86 px-3 py-2 shadow-[0_1rem_3rem_rgb(74_53_40/0.12)] backdrop-blur sm:bottom-5 sm:w-[min(46rem,calc(100vw-3rem))] sm:gap-4 sm:px-4 sm:py-3">
      <span className="fine-label min-w-10 text-[0.66rem] text-[#4a3528] sm:min-w-12 sm:text-xs">
        {String(currentPage + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <div className="h-px flex-1 overflow-hidden bg-[#e6d8c8]">
        <div
          className="h-full bg-[#9b6a3d] transition-[width] duration-200"
          style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
        />
      </div>
      <span className="fine-label min-w-16 text-right text-[0.66rem] text-[#9b6a3d] sm:min-w-24 sm:text-xs">
        {labels[currentPage]}
      </span>
    </aside>
  );
}
