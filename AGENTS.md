# AGENTS.md

給 coding agent 的寫碼規範。產品行為見 [SPEC.md](./SPEC.md)，專案概覽見 [README.md](./README.md)。跟現有檔案的寫法，不要發明第二套風格。

## 專案約束

- 純前端：React 19 + Vite 8 + React Router 8 + TypeScript。無後端、無 CMS、無會員、無測試套件。
- 套件管理用 **pnpm**。不要為小改動引入新依賴。
- `legacy/` 只是舊站對照，**不要改、不要從建置引用**。
- 沒有 path alias，一律相對路徑。
- 原始碼幾乎無註解；只在非顯而易見的約束先加短註解，不要敘事、不要留下 TODO 佔位。

## 指令

```bash
pnpm dev          # 開發伺服器
pnpm build        # tsc -b + vite build + SSR + prerender
pnpm preview      # 預覽 dist/
pnpm format       # Prettier
pnpm lint:tw      # Tailwind class 正規化檢查（有改 className 字串才需要）
```

改完 TypeScript / JavaScript 後：

- **必須**對改過的檔跑 Prettier。
- **不要**跑 ESLint。
- **不要**額外跑 `tsc`；型別檢查屬 `pnpm build`。

`.prettierrc`：4 空格、`printWidth` 200、`trailingComma: es5`、`bracketSpacing: false`、`arrowParens: avoid`。

## 完成任務後

收工前檢查文件有無過時，**同一改動**內更新：

- `README.md`：專案概覽、指令、目錄結構、技術棧。
- `SPEC.md`：產品行為、頁面內容、文案、SEO。
- `AGENTS.md`：寫碼規範、約束、各清單。

改動觸及對外行為、頁面、路由、資源或規範就要更新；純內部重構、無可見影響可略過。唔肯定就問。

## 目錄

```
src/
├─ app.tsx / main.tsx / router.ts / routes.ts / entry-server.tsx
├─ index.css                 # 只 import Tailwind + html/body 100dvh
├─ component/                # 跨頁 layout
│  ├─ RootLayout.tsx
│  └─ SiteLayout/            # index.tsx + index.css + 子元件 + constant.ts + asset/
├─ page/<Page>/
│  ├─ index.tsx              # 頁面本體，export const XxxPage
│  ├─ index.css              # 該頁 BEM
│  ├─ type.ts                # 該頁型別
│  ├─ constant.ts            # 文案、清單、圖片 src（長文頁可把內容留在 index.tsx）
│  ├─ component/             # 頁內子元件（可選）
│  ├─ hook/                  # 頁內 hook（可選）
│  └─ asset/                 # 該頁圖片 / 影片 / 音訊
└─ seo/                      # routes.json 為 SEO 唯一資料源
```

- 頁資料夾 PascalCase：`Home`、`Theory`、`Spirit`、`Contact`、`Pricing`、`Charity`。
- 頁面由 `src/page/Xxx/index.tsx` 提供，用 `import {XxxPage} from "./page/Xxx"`，不要另做 barrel。
- 共用 layout 放 `src/component/`。不要再用 `src/page/Layout/`。
- `public/` 只放 `favicon.ico`、`og-cover.jpg`。頁面資源一律放該頁 `asset/`，用 `import`，不要寫死 URL。

## React

### Import

1. `import React from "react"`：**只有用到 `React.xxx` 先 import**，而且必須第一行。
2. 第三方（`react-router`、`classnames`、`react-icons`）。
3. 本地值：asset → component → hook → constant。
4. `import type {…}`。
5. `import "./index.css"` **永遠最後**。

`verbatimModuleSyntax`：型別必須 `import type`，不要混在 value import。

JSX 用 `react-jsx`。純 markup、沒用 `React.xxx` 的檔（例如 `Home/index.tsx`、`NavBar.tsx`）不要多餘 import React。

### 元件與 hook

| 項目         | 寫法                                                                 | 不要                                           |
| ------------ | -------------------------------------------------------------------- | ---------------------------------------------- |
| Component    | `export const Foo = () => { … }`                                     | `export default`、`export function Foo`        |
| 子元件       | `export const Foo = React.memo((props: Props) => { … })`             | 頁面 / layout 不必 memo                        |
| Hook         | `export function useFoo()`                                           | `export const useFoo = …`                      |
| API          | `React.useState` / `React.useEffect` / `React.useRef` / `React.memo` | `const {useState} = React` 或直接 `useState()` |
| Fragment     | `<React.Fragment>` / `<React.Fragment key={…}>`                      | `<>…</>`                                       |
| Props        | 未 export 的 `interface Props`；本體用 `props.xxx`                   | 在參數解構 `({foo}: Props)`                    |
| 元件內部函式 | arrow function                                                       | 非必要不要 `React.useCallback`                 |
| 模組層函式   | `function foo()`                                                     | 頂層 arrow（匿名 callback 除外）               |
| 條件渲染     | `cond ? node : null`                                                 | `cond && node`                                 |

頁級元件（`HomePage` 等）與 layout **不要 memo**。`page/*/component/` 與 `Pricing/component/` 的子元件 **要 `React.memo`**。

### 互動與 a11y

- 按鈕用 `<button type="button">`，補 `aria-label`（必要時加 `title`）。
- 站內導航用 `Link` / `useNavigate`，不要 `<a href="/…">`。
- 外部連結：`target="_blank"` + `rel="noreferrer"`。
- `classnames` 只在有條件 class 時使用。

## TypeScript

- 嚴格：`noUnusedLocals`、`noUnusedParameters`、`verbatimModuleSyntax`。
- CSS 變數：`export type XxxCssVars = CSSProperties & { "--xxx-watermark": string }`，再 `style={themeStyle}` 傳入。
- 資料形狀用 `export interface`；union / CSS vars 用 `export type`。
- 可空狀態用 `null`（例如 `number | null`），不要用 `undefined` 表示「未選」。
- `key` 用穩定 id（`item`、`videoId`、`src`、`title`），不要用 index，除非沒有穩定值。
- 不要用 `enum`。

## 樣式

- **頁面與元件樣式寫在各自 `index.css`，BEM 命名，不要用 Tailwind utility 砌 layout。**
- `src/index.css` 只負責 `@import "tailwindcss"` 與 `html, body { height: 100dvh }`。不要 `@apply`。
- Block 前綴跟範圍：

    | 範圍     | 例子                                                        |
    | -------- | ----------------------------------------------------------- |
    | 頁       | `home-page`、`theory-page`、`contact-page`                  |
    | 首頁子塊 | `home-wheel`、`home-music`、`home-lyrics`                   |
    | 共用     | `site-layout`、`site-nav`、`contact-widget`、`move-top-btn` |

- Element：`block__element`（`pricing-page__title`）。
- Modifier：`block__element--foo` 或 `block--foo`（`home-music--desktop`、`home-element--wood`）。
- 布林狀態 class：`is-open`、`is-visible`、`is-glowing`。
- 由 React 驅動的狀態優先 `data-*`（`data-playing`、`data-active`），CSS 用 `[data-playing="true"]`。
- `:hover` 一律包喺 `@media (hover: hover) and (pointer: fine)`；否則 iOS 觸控要剔兩下先出到 `click`。
- 浮水印／背景圖用 CSS 變數（`--theory-watermark`、`--cyclone-desktop`），JS 傳 `url("…")`。
- 響應式寫在該 CSS 檔底部。內容頁常用 `768px` 或 `860px`；首頁有自己的 breakpoint，不要亂套。
- 改了 `className` 字串才跑 `pnpm lint:tw`。

## 資源

- 檔名 kebab-case：`clinic-2026-08-09.jpg`、`play-active.png`。
- import 名 PascalCase，圖片加 `Image`、音訊加 `Asset`：`WoodImage`、`MusicAsset`。
- 再 export 成 `WOOD` 類常數時用 `SCREAMING_SNAKE`：`WATERMARK_SRC`、`PLAY_ACTIVE_SRC`。

## 路由與 SEO

路由樹在 `src/routes.ts`：

- `/` → `HomePage`（**不**包 `SiteLayout`）
- `/theory` `/spirit` `/contact` `/pricing` `/charity` → 包 `SiteLayout`
- 未知路徑 `redirect("/")`，不要加 404 頁

加頁或改路徑時，**同一改動**要更新：

1. `src/routes.ts`
2. `src/seo/routes.json`（title / description / keywords / ogType / changefreq / priority）
3. 若首頁有入口：`src/page/Home/constant.ts` 的 `FIVE_ELEMENTS`

SEO 資料只來源 `src/seo/routes.json`。正式網域用 `VITE_SITE_URL` 覆寫 `siteUrl`。`index.html` 的 `<!--seo-head-->` 與 `#root` 是 prerender 注入點，不要刪。

文案用**繁體中文（香港）**。不要擅自改成簡體或英文化 UI。

## 首頁音樂

`useBackgroundMusic` + `MusicToggleButton`：

- 頁面載入嘗試自動播放；失敗則在 `document` 的 `click` / `touchstart` 解鎖後播放（click anywhere）。不要改成只准「聆聽」才播，除非明確要求。
- `hasAutoPlayed` 每個 session 只自動／解鎖一次。
- 「聆聽」按鈕（`#musicToggleBtn` / `#mobileMusicToggleBtn`）用 `toggle` 暫停／續播。
- `<audio>` **不要加 `loop`**。播完 `ended` 要將 `isPlaying` 設 `false`，按鈕回到 idle。
- 再播時若 `audio.ended`，先 `currentTime = 0`。
- 點擊五行元素離開前 `fadeOut(1000)`；unmount 要 pause。內容頁沒有音訊。

## 加新頁清單

1. `src/page/Xxx/{index.tsx,index.css,type.ts,constant.ts?,asset/}`
2. `export const XxxPage`；根 class `xxx-page`，container 用 `XxxCssVars` 傳浮水印。
3. 掛去 `routes.ts` 的 `SiteLayout` children（除非是全螢幕頁）。
4. 補 `src/seo/routes.json`。
5. 需要入口就改 Home `FIVE_ELEMENTS`。
6. Prettier。
