# MISSION 001｜XServerアフィリエイトサイト MVP公開

## 0. 任務名

**任務：XServerアフィリエイトサイトの最小構成を作成し、Cloudflare Workersで公開可能な状態にする**

---

# 1. 背景

このプロジェクトは、XServerを実際に利用して得た経験をもとにした**アフィリエイトサイト**を構築するためのもの。

技術ブログを作ること自体が目的ではない。

最終目的は、

> XServerを検討している読者に、実体験を根拠として価値を伝え、XServer公式サイトへの送客および契約につなげること。

である。

---

# 2. 最重要原則

このサイトは、

**技術ブログではなくXServerのアフィリエイトサイトである。**

技術情報は、

```text
検索流入
↓
実体験による信頼獲得
↓
XServerで何ができるか理解
↓
XServerへの興味
↓
公式サイトへの送客
↓
契約
```

という導線を作るために使用する。

「技術的に面白いから」という理由だけでページや機能を追加しない。

---

# 3. 参照する既存資産

## 3-1. 技術基盤の参考実装

ローカルに存在する以下のプロジェクトを参照する。

```text
~/projects/lg-astro-cloudflare-lp
```

このリポジトリは、今回のプロジェクトとは別の**参照専用プロジェクト**である。

以下を中心に調査する。

- Astro構成
- Cloudflare Workers + Static Assets
- Wrangler設定
- sitemap
- `package.json`
- build / test構成
- `astro.config.mjs`
- Worker構成
- layouts
- components
- styles
- pages
- Cloudflare公開に必要な設定

必要なものだけ今回のプロジェクトへ取り込む。

既存コードを無条件に丸ごとコピーしない。

### 重要

`~/projects/lg-astro-cloudflare-lp` は**変更禁止**。

参照・読み取りのみ許可する。

今回の任務中に、

- 編集
- 削除
- commit
- push

を行わない。

参照できない場合は推測で代替せず、

> 参照元プロジェクトを確認できない

と報告する。

GitHubから新たにcloneする必要はない。

---

## 3-2. LG Codex Kit

LG Codex Kitの配備は**司令官が事前に手動で行う**。

戦闘員は、

- LG Codex Kitのインストール
- 再インストール
- 配備スクリプトの実行
- 共通テンプレートの更新

を行わない。

プロジェクトに存在する以下の指示を読み、それに従う。

```text
AGENTS.md
docs/LG_DEVELOPMENT_PHILOSOPHY.md
docs/LG_PROJECT_INITIAL_FLOW.md
.codex/missions/ACTIVE.md
```

存在しない文書がある場合は推測で補完しない。

---

# 4. GOAL

以下の状態になればMISSION 001成功とする。

> Astroで構築されたXServerアフィリエイトサイトのMVPが存在し、主要ページと最低限の記事を閲覧でき、Cloudflare Workersへ公開可能である。

---

# 5. 現在想定する全体像

```text
ユーザー
↓
Cloudflare
↓
Astro Static Site
↓
TOP
├─ XServerを使っている理由
├─ XServerでできること
├─ 技術記事
├─ プロフィール
├─ プライバシーポリシー
└─ 広告・アフィリエイト表記

将来
↓
A8.net
↓
XServer公式
```

MISSION 001ではA8.netとの実リンク接続は行わない。

---

# 6. 今回のMVP境界

## 今回やる

### 6-1. Astro + Cloudflare基盤

`~/projects/lg-astro-cloudflare-lp` を調査し、今回必要な構成だけ再利用する。

基本構成は以下とする。

```text
Astro
+
TypeScript
+
Cloudflare Workers Static Assets
+
Wrangler
```

原則としてStatic Site Generationを使用する。

---

### 6-2. 最低限のページ

最低限以下を閲覧可能にする。

```text
/
├─ XServerを実際に使っていること
├─ XServerでできたこと
├─ 技術記事への導線
└─ 仮CTA

/articles/
/about/
/privacy/
```

Astroの構成上、より自然なURLがある場合は必要最小限の範囲で調整してよい。

---

# 7. TOPページ

TOPページでは、

**「XServerを実際に使ってきた人間が紹介している」**

ことが最初に伝わる構成にする。

---

## Hero

XServerを単なるWordPress用レンタルサーバーとしてではなく、

- WordPress
- SSH
- WP-CLI
- PHP
- Composer
- Node.js
- Git
- CI/CD
- Laravel

などを実際に利用・検証してきた経験があることを伝える。

ただしHeroへ情報を詰め込みすぎない。

---

## XServerを使っている理由

広告文だけではなく、

**実際に利用した経験を持つ利用者の視点**

として簡潔に伝える。

---

## XServerで実際にできたこと

候補：

- WordPressサイト運用
- SSH接続
- WP-CLI導入
- PHPバージョンの使い分け
- Composer利用
- nvmによるNode.js管理
- `.bashrc`環境整備
- Git利用
- rsync
- GitHub Actionsを利用したデプロイ
- Laravelアプリ公開

TOPでは概要だけ掲載する。

詳細は記事へ分離する。

---

# 8. CTA

MISSION 001ではA8.netの正式なアフィリエイトリンクはまだ存在しない。

そのため、

> XServer公式サイトを見る

等のCTA UIだけ作成してよい。

### 禁止

- 架空のA8.netリンクを作る
- 架空のトラッキングパラメータを作る
- 仮リンクを正式な広告リンクのように扱う

本番アフィリエイトURLはMISSION 002以降で設定する。

---

# 9. 技術記事

MISSION 001では大量の記事を作成しない。

最低2本、最大3本程度とする。

候補：

1. XServerへSSH接続して分かったこと
2. WP-CLIを自分で導入して使う
3. XServerでLaravelアプリを動かした経験
4. GitHub Actions + SSH / rsyncによるデプロイ
5. WordPressのローカル環境と本番環境の違い

記事本文は完成版でなくてもよい。

MISSION 001では、

> 記事を今後継続して追加できる構造が正常に機能すること

を優先する。

---

# 10. 記事管理

今後記事数が増えることを前提に、Astro標準のコンテンツ管理方法を確認する。

Content Collections等が適切な場合は採用してよい。

導入前に以下を確認する。

- 今回本当に必要か
- 現在の構造より何が良くなるか
- MVPとして過剰ではないか

採用する場合、最低限以下を扱える構造とする。

```text
title
description
publishedAt
updatedAt
category
```

必要性が確認できれば、

```text
verifiedAt
```

等を提案してよい。

ただし、勝手に大量のmetadataを追加しない。

---

# 11. コンテンツ方針

記事は原則として実体験を基礎にする。

基本構造：

```text
困ったこと
↓
なぜ起きたか
↓
何を調べたか
↓
どう解決したか
↓
どう確認したか
↓
XServerを使って分かったこと
```

実際に経験していない内容を、

> 実際にやった

と表現してはいけない。

事実・推定・一般情報を分ける。

---

# 12. 広告表記

サイト内に、

> このサイトはアフィリエイト広告を利用しています。

という趣旨が読者に明確に伝わる表示を設ける。

意図的に隠したり、極端に認識しづらくしたりしない。

---

# 13. プロフィール

最低限、

- XServer利用経験
- WordPress
- PHP
- SSH
- Laravel
- CI/CD

等を実際に経験した人物が記事を書いていることが伝わればよい。

MISSION 001では巨大なポートフォリオページにしない。

---

# 14. 今回やらない

MISSION 001では以下を行わない。

- A8.net登録
- A8.net API連携
- 本番アフィリエイトURL導入
- 独自クリック計測
- 高度なGA4イベント設計
- CMS
- DB
- ログイン
- 会員機能
- コメント
- サイト内検索
- React
- 必要性のないJavaScript
- 問い合わせフォーム
- Resend
- Turnstile
- A/Bテスト
- 大量の記事生成
- SEO目的の量産コンテンツ
- SSR
- 不要なWorker API

必要になった場合は別MISSIONとする。

---

# 15. 既存LPから原則再利用しないもの

`~/projects/lg-astro-cloudflare-lp` に存在していても、MISSION 001では以下は原則不要。

- 問い合わせフォーム
- 問い合わせWorker
- Resend
- Turnstile
- LP固有文章
- LP固有画像
- LP固有コンポーネント
- 問い合わせ処理専用テスト

不要だから削除する場合も、依存関係を確認する。

「いつか使うかもしれない」という理由だけで持ち込まない。

---

# 16. アフィリエイトサイトとしての判断基準

ページ・機能・文章の追加に迷った場合は以下の順で判断する。

```text
XServer契約の判断材料になるか？
↓
読者の不安を減らせるか？
↓
実体験による信頼につながるか？
↓
XServer公式への送客につながるか？
```

全てNOの場合、今回実装する必要性は低い。

---

# 17. 作業手順

以下の順番を基本とする。

1. `AGENTS.md` を読む
2. LG関連文書を読む
3. `ACTIVE.md` を読む
4. 現在の新規プロジェクトを確認する
5. `~/projects/lg-astro-cloudflare-lp` を読み取り専用で調査する
6. `package.json` を確認する
7. Astro設定を確認する
8. Wrangler設定を確認する
9. build / test構成を確認する
10. 再利用するものを決める
11. 再利用しないものを決める
12. 最小ページ構成を作る
13. 共通Layoutを作る
14. TOPページを作る
15. 記事管理構造を作る
16. 記事2〜3本を配置する
17. `/about/` を作る
18. `/privacy/` と広告表記を作る
19. sitemapを確認する
20. buildする
21. 利用可能なtestを実行する
22. Wranglerで利用可能な確認を行う
23. `git diff --check`
24. 差分を確認する
25. 完了報告する

一度に大量変更せず、機能単位で進める。

---

# 18. 検証

利用可能な範囲で以下を確認する。

- [ ] `npm install` 成功
- [ ] Astro check成功
- [ ] `npm run build` 成功
- [ ] 必要なtest成功
- [ ] Wrangler dry-run等の確認成功
- [ ] sitemap生成確認
- [ ] TOP表示
- [ ] 記事一覧表示
- [ ] 記事詳細表示
- [ ] about表示
- [ ] privacy表示
- [ ] 広告利用表記確認
- [ ] 仮CTA確認
- [ ] スマートフォン幅で重大な崩れなし
- [ ] 架空のアフィリエイトURLなし
- [ ] 秘密情報なし
- [ ] `git diff --check` 成功

利用できない検証は実施したふりをしない。

未実施理由を報告する。

---

# 19. 原則変更禁止

以下を勝手に変更しない。

- `~/projects/lg-astro-cloudflare-lp`
- LG開発思想
- AGENTS.mdの基本規律
- LG Codex Kit本体
- 任務外ファイル
- 必要性のない大規模構造変更

また以下を行わない。

- 不要なライブラリ追加
- 必要性のないSSR化
- 必要性のないReact導入
- 架空のA8.net情報追加
- 架空のXServer料金追加
- 架空のキャンペーン情報追加
- 未確認の仕様断定
- 実体験していない内容の捏造

現在のXServer仕様・料金・キャンペーン等が必要になった場合は、確認できる事実を使用する。

不明なら不明とする。

---

# 20. Git規律

MISSION中は、

- `git status`
- `git diff`
- `git diff --check`

等による確認は行ってよい。

ただし司令官から明示的な指示がない限り、

```text
git commit
git push
```

は実行しない。

既存LP側ではGit操作そのものを原則行わない。

---

# 21. 完了条件

以下を満たした時だけMISSION 001完了。

- [ ] XServerアフィリエイトサイトであることが分かる
- [ ] Astroで構築されている
- [ ] Cloudflare Workersへ公開可能
- [ ] TOPページが存在する
- [ ] 記事一覧が存在する
- [ ] 技術記事が最低2本存在する
- [ ] aboutが存在する
- [ ] privacy / 広告表記が存在する
- [ ] CTA配置が確認できる
- [ ] 正式アフィリエイトリンクは未導入
- [ ] build成功
- [ ] 利用可能なtest成功
- [ ] Wrangler確認成功または未実施理由あり
- [ ] sitemap確認済み
- [ ] `git diff --check` 成功
- [ ] 秘密情報なし
- [ ] 既存LPを変更していない
- [ ] LG Codex Kitを勝手に再配備していない
- [ ] 任務外機能を追加していない
- [ ] 公開へ進める状態になっている

---

# 22. 完了報告

任務終了時は以下の形式で報告する。

```md
## MISSION 001 任務完了報告

### 作成・変更したファイル

-

### 参照した既存資産

-

### 再利用した構成

-

### 再利用しなかった構成

-

### 実装したページ

-

### 技術記事

-

### アフィリエイト導線

-

### 検証結果

- Astro check:
- build:
- test:
- Wrangler:
- sitemap:
- git diff --check:
- 手動表示確認:

### 既存LPへの変更

- なし

### LG Codex Kitへの変更

- なし

### 未実施

-

### Cloudflare公開可能状態

-

### 注意点

-

### 次MISSION候補

A8.net登録後の正式アフィリエイトリンク導入と成約導線調整
```

---

# 23. 最終命令

MISSION 001の目的は、

**完璧なサイトを作ることではない。**

```text
最小構成
↓
動かす
↓
検証
↓
公開
↓
A8.net登録
↓
実際の広告条件を確認
↓
MISSION 002
```

技術ブログ化しない。

未来の要件を想像して作り込まない。

既存LPを壊さない。

LG Codex Kitを勝手に触らない。

任務外へ進軍しない。

**XServerアフィリエイトサイトの最小戦力を構築し、まず公開可能な状態まで到達せよ。**
