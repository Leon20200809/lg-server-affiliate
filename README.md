# XServer実践ノート

XServerを実際に利用した経験を、契約検討者の判断材料として届けるアフィリエイトサイトのMVPです。Astroで静的HTMLを生成し、Cloudflare Workers Static Assetsで公開します。

## 現在できること

- TOPで利用経験と技術領域を確認できる
- Content Collectionsで管理した記事一覧・詳細を閲覧できる
- 運営者情報、広告表記、プライバシーポリシーを閲覧できる
- Cloudflare向け静的資産を生成できる
- sitemapを生成できる

A8.netから提供された正式なXServer広告コードを、共通コンポーネントからTOPと記事末尾へ表示します。

## セットアップ

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

公開URLは `https://server.lazygenius.dev` です。環境ごとに変更する場合は、`.env` の `SITE_URL` で上書きできます。

## 検証

```powershell
npm run check
npm run build
npm test
npm run deploy:dry-run
```

生成物は `dist/`、サイトマップは `dist/sitemap-index.xml` から確認できます。

## Cloudflareへの公開

Cloudflare側のビルドコマンドに `npm run build`、デプロイコマンドに `npx wrangler deploy` を設定します。生成された `dist/` がStatic Assetsとして公開されます。

## 構成

```text
src/
├─ components/       共通UI
├─ content/articles/ 技術記事
├─ layouts/          共通ページ構造
├─ pages/            URLごとのページ
└─ styles/           共通スタイル
```

## MVP境界

Astro、TypeScript、静的ページ、記事2本、sitemap、Cloudflare Static Assetsまでを対象とします。CMS、DB、React、問い合わせ、計測、本番アフィリエイトリンク、SSR、Worker APIは含みません。
