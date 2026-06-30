# ラクダ文庫 デモサイト

東広島市西条町田口のブックカフェ「ラクダ文庫」向けに制作した、提案用のトップページデモです。

本のページをめくるように、静かにお店を案内する1ページ構成です。PCでは縦スクロールに合わせて横方向へ進むページフリップ風の演出、モバイルでは読みやすい縦スクロール表示に切り替わります。

## ローカル起動

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認します。

## 技術構成

- Next.js
- TypeScript
- Tailwind CSS
- Cloudflare Pages / Workers デプロイ想定
- GitHub 連携デプロイ想定

## データ管理方針

今回はCMSや管理画面は含めていません。後から `/owner` などの簡易CMSを追加しやすいように、文言・リンク・営業情報・メニュー・お知らせは `src/data/` 以下に分離しています。

主なデータファイル:

- `src/data/site.ts`
- `src/data/schedule.ts`
- `src/data/menu.ts`
- `src/data/notices.ts`
- `src/data/links.ts`

## Cloudflare デプロイ前提

Cloudflare 向けに以下の設定を含めています。

- `open-next.config.ts`
- `wrangler.toml`
- `next.config.ts` の画像最適化無効化設定

実際の公開時は、GitHub リポジトリへ push したうえで Cloudflare Pages から連携してください。

## 注意

This is an unofficial demo site.

掲載内容はデモ制作時点の仮情報を含みます。最新情報は公式Instagramをご確認ください。
