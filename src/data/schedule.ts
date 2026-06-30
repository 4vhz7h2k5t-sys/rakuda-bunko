export type CalendarDay = {
  day: number;
  status: "open" | "closed" | "check";
  note?: string;
};

export const schedule = {
  hours: "13:00 - 18:00",
  closedDays: "水・木・金",
  temporaryNotice:
    "営業日は変更になる場合があります。お出かけ前に公式Instagramで最新情報をご確認ください。",
  monthlyNotice: "今月の営業日はデモ用の仮表示です。",
  days: [
    { day: 1, status: "open" },
    { day: 2, status: "closed" },
    { day: 3, status: "closed" },
    { day: 4, status: "closed" },
    { day: 5, status: "open" },
    { day: 6, status: "open" },
    { day: 7, status: "open" },
    { day: 8, status: "open" },
    { day: 9, status: "closed" },
    { day: 10, status: "closed" },
    { day: 11, status: "closed" },
    { day: 12, status: "open" },
    { day: 13, status: "open" },
    { day: 14, status: "open" },
    { day: 15, status: "check", note: "要確認" },
    { day: 16, status: "closed" },
    { day: 17, status: "closed" },
    { day: 18, status: "closed" },
    { day: 19, status: "open" },
    { day: 20, status: "open" },
    { day: 21, status: "open" },
    { day: 22, status: "open" },
    { day: 23, status: "closed" },
    { day: 24, status: "closed" },
    { day: 25, status: "closed" },
    { day: 26, status: "open" },
    { day: 27, status: "open" },
    { day: 28, status: "open" },
    { day: 29, status: "check", note: "要確認" },
    { day: 30, status: "closed" }
  ] satisfies CalendarDay[]
} as const;
