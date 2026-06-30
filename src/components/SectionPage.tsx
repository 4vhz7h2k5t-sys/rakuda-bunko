import type { ReactNode } from "react";

type SectionPageProps = {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  leftMeta?: ReactNode;
  right: ReactNode;
  id?: string;
  className?: string;
};

export default function SectionPage({
  eyebrow,
  title,
  lead,
  leftMeta,
  right,
  id,
  className = ""
}: SectionPageProps) {
  return (
    <section id={id} className={`book-section ${className}`}>
      <div className="book-spread">
        <div className="book-page page-left">
          <div className="page-label">
            <span>{eyebrow}</span>
            <span>Rakuda Bunko</span>
          </div>
          <div className="page-copy">
            <h2>{title}</h2>
            {lead ? <div className="page-lead">{lead}</div> : null}
          </div>
          {leftMeta ? <div className="page-meta">{leftMeta}</div> : null}
        </div>
        <div className="book-page page-right">{right}</div>
      </div>
    </section>
  );
}
