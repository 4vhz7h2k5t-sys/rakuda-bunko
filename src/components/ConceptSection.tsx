import Image from "next/image";
import { site } from "@/data/site";
import SectionPage from "./SectionPage";

export default function ConceptSection() {
  return (
    <SectionPage
      id="concept"
      eyebrow="Concept"
      title={"のんびりゆったり、\n本と過ごすための場所。"}
      lead={
        <div className="space-y-5">
          <p>
            ラクダ文庫は、静かに本を読み、ひとりの時間を味わうためのブックカフェです。
          </p>
          <p>飲みものと甘いもの、本棚に並ぶ本、窓から入る午後の光。</p>
          <p>誰かと急いで話すためではなく、自分の時間に戻るための場所です。</p>
        </div>
      }
      leftMeta={
        <p className="fine-label text-xs uppercase text-[#b08968]">
          Slow reading, quiet coffee, afternoon light.
        </p>
      }
      right={
        <div className="media-frame">
          <Image
            src={site.heroImage}
            alt="窓辺の本と珈琲"
            fill
            sizes="(min-width: 900px) 48vw, 92vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2d261f]/16 via-transparent to-white/8" />
        </div>
      }
    />
  );
}
