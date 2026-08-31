# MISSION 005｜Figma承認版TOPをAstroへ実装する

## 0. 任務

Figmaで承認済みのTOPページデザインを、現在のAstroサイトへ実装する。

Figma成果物：

`https://www.figma.com/design/QP5ywrbRqmZ6Io5wbpESwm`

対象：

`TOP / Desktop / 1440`

---

# 1. GOAL

> 承認済みFigmaデザインの視覚階層・世界観・余白・配色・ロードマップ・CTAをAstro/CSSへ再現し、既存機能を壊さず公開可能な状態にする。

---

# 2. 最重要原則

今回は**再デザインしない**。

```text
Figma
= 承認済み設計

Astro
= その実装
```

戦闘員の判断で別デザインへ変更しない。

---

# 3. 維持するもの

以下は必ず維持する。

- Hero主コピー

  - 「ローカルでは作れる。次は、本番で動かせる人へ。」

- VALUE主コピー

  - 「作ったものを『自分のPCの中』で終わらせない。」

- 既存記事
- 既存URL
- Content Collections
- A8.net正式広告コード
- A8計測コード
- sitemap
- about
- privacy
- Cloudflare / Wrangler構成

---

# 4. 実装するデザイン

Figmaの「Production Field Notes」を基準にする。

主要要素：

- Navyを基調としたHero
- 技術ドキュメント風Eyebrow
- セクション番号
- 細い罫線
- 状態表示
- Production / Deploymentを連想させるUI
- 大胆な余白
- 暗色・白・淡色セクションのリズム
- VALUEの連続フロー
- 6段階ロードマップ
- 技術記事カード
- FIT
- 独立した最終CTA

主要色：

```text
Navy    #071829
Navy 2  #0B253C
Blue    #1477E8
Cyan    #5DD9FF
Canvas  #F3F7F9
```

---

# 5. Hero画像

MISSION 005では**新規Hero画像を生成・追加しない**。

今回まずFigma承認版の構造を実装する。

画像については後から司令官がVS Code上で追加・差し替える。

画像を後から追加しやすいよう、Hero構造を不必要に固定しすぎないこと。

---

# 6. Eyebrow

Figma初版よりも視認性を高めたいという司令官方針がある。

Eyebrowは、

- 小さすぎない
- セクション導入として認識できる
- ブランド要素として機能する

よう調整してよい。

ただし本文見出しより強くしない。

---

# 7. 余白

今回の重要改善点。

現行サイトより**余白を大胆に取る**。

特に、

- Hero上下
- セクション間
- 見出しと本文
- カード周囲
- Roadmap周囲
- CTA前後

を意識する。

目的は情報量を減らすことではなく、

> 各要素に呼吸させ、ブランド感と高級感を出すこと。

---

# 8. レスポンシブ

Figma成果物はPC 1440px版を正本とする。

スマートフォンについては視覚階層を維持しながら自然に変換する。

特に、

```text
横フロー
↓
縦フロー

横ロードマップ
↓
縦レール
```

としてよい。

PC版を無理に縮小しない。

---

# 9. A8広告

正式コードは変更禁止。

以下を保持する。

- URL
- パラメータ
- nofollow
- バナーsrc
- 1×1計測画像

Figma上のCTA枠へ自然に収める。

---

# 10. 今回やらない

- Figma再設計
- Figmaファイル編集
- Hero画像生成
- Hero画像追加
- 記事本文大改稿
- A8コード変更
- React導入
- JS追加（必要性がない場合）
- CMS変更
- Cloudflare設定変更
- GitHub設定変更

---

# 11. 実装方針

既存Astro構造を確認した上で、

- 不要な大規模構造変更を避ける
- CSSで再現可能なものはCSSで実装
- 共通化の必要があるものだけcomponent化
- デザインのためだけに不要なDOMを増やさない

こと。

---

# 12. 検証

最低限以下を実施する。

- [ ] `npm run check`
- [ ] `npm run build`
- [ ] sitemap生成
- [ ] PC 1440px確認
- [ ] tablet確認
- [ ] smartphone確認
- [ ] Hero表示
- [ ] VALUE表示
- [ ] Roadmap表示
- [ ] Articles表示
- [ ] FIT表示
- [ ] CTA表示
- [ ] A8広告表示
- [ ] A8コード変更なし
- [ ] `git diff --check`

可能ならFigmaと本番実装を目視比較する。

---

# 13. Git

戦闘員は以下のみ実施可。

```text
git status
git diff
git diff --check
```

以下は禁止。

```text
git commit
git push
```

commit / push / Cloudflare公開は司令官が行う。

---

# 14. アーカイブ

DONE.mdに従い、

```text
.codex/archive/MISSION_005_REPORT.md
```

へ完了報告を保存する。

---

# 15. 完了報告

```md
## MISSION 005 任務完了報告

### Figma参照

-

### 実装したセクション

-

### デザイン再現

-

### レスポンシブ対応

-

### Hero画像

- 未追加（司令官が後から対応）

### A8コード

- 変更なし

### 検証

- Astro check:
- build:
- sitemap:
- PC:
- tablet:
- smartphone:
- git diff --check:

### Git

- commit: 未実施
- push: 未実施

### Cloudflare

- 変更なし

### アーカイブ

-

### 未実施

-

### 次の作業

Hero画像の生成・差し替え、および本番公開後の最終デザイン検閲
```

---

# 16. 最終命令

今回はデザインを考える任務ではない。

**承認されたFigmaを、保守可能なAstro/CSSへ翻訳せよ。**

見た目を再現する。

既存機能を守る。

A8計測を壊さない。

レスポンシブへ自然に展開する。

そして司令官がGit差分を確認できる状態で停止せよ。
