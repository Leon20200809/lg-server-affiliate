// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// 公開URLを環境変数から受け取り、未設定時は本番URLを使う
const site = process.env.SITE_URL ?? "https://server.lazygenius.dev";

// 静的サイトとサイトマップの生成条件を定義する
export default defineConfig({
  site,
  output: "static",
  integrations: [sitemap()],
});
