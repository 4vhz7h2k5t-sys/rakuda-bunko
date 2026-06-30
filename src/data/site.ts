import { links } from "./links";

export const site = {
  nameJa: "ラクダ文庫",
  nameEn: "Rakuda Bunko",
  title: "ラクダ文庫 | 本と静けさの午後。大人のひとり時間へ。",
  description:
    "東広島・西条町田口のブックカフェ「ラクダ文庫」のデモサイト。本と静けさ、営業スケジュール、アクセス、Instagram情報を案内します。",
  catchcopy: "本と静けさの午後。\n大人のひとり時間を。",
  subcopy:
    "東広島市西条町田口にある、15歳以上のための小さなブックカフェ。本を開き、飲みものを味わい、静かに自分へ戻る場所。",
  address: "東広島市西条町田口",
  hours: "13:00 - 18:00",
  closedDays: "水・木・金",
  instagramUrl: links.instagram,
  googleMapsUrl: links.googleMaps,
  googleMapsEmbedUrl: links.googleMapsEmbed,
  heroImage: "/images/rakuda/hero-reading-cafe.png",
  ogImage: "/images/rakuda/hero-reading-cafe.png",
  demoNotice:
    "This is an unofficial demo site. 掲載内容はデモ制作時点の仮情報を含みます。最新情報は公式Instagramをご確認ください。"
} as const;
