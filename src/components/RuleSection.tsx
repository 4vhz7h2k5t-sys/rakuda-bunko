import SectionPage from "./SectionPage";

const rules = [
  "15歳以上の方へ",
  "静かに過ごす読書空間",
  "少人数・ひとり時間向け",
  "営業日は変わる場合があります"
];

export default function RuleSection() {
  return (
    <SectionPage
      id="rule"
      eyebrow="Rule"
      title="静けさを大切にするために。"
      lead={
        <div className="space-y-5">
          <p>ラクダ文庫は、ゆっくり本を開き、静かに過ごすための場所です。</p>
          <p>
            初めての方にも心地よく過ごしていただけるよう、営業日やご利用については事前にご確認ください。
          </p>
        </div>
      }
      right={
        <div className="grid h-full grid-cols-2 gap-4">
          {rules.map((rule, index) => (
            <article
              key={rule}
              className="soft-card flex flex-col justify-between p-5 sm:p-7"
            >
              <p className="fine-label text-xs text-[#b08968]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="text-xl font-medium leading-8 text-[#2d261f] sm:text-3xl sm:leading-10">
                {rule}
              </p>
            </article>
          ))}
        </div>
      }
    />
  );
}
