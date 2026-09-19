# SPEC — 全治護脊官方網站

本文件描述 `hkwholeness-site` 的功能與技術規格，作為開發、驗收與維護的依據。

---

## 1. 專案概述

全治護脊（WE Acupuncture）為香港脊椎修正／自然醫學診所。本專案將其品牌網站由舊版靜態 HTML（存放於 `legacy/`）重寫為 React 單頁應用，同時透過預渲染保留每頁獨立 HTML 以利 SEO。

網站核心敘事：以五行（木、火、土、金、水）對應五個內容面向，並以首頁轉盤作為主要導覽。

## 2. 目標與範圍

**目標**

- 一致且可維護的元件化前端。
- 首頁互動體驗：可旋轉五行轉盤、背景音樂、歌詞動畫。
- 每頁可被搜尋引擎收錄（title／description／canonical／OG／JSON-LD／sitemap）。
- 響應式支援桌面與手機。

**範圍**

- 6 個頁面：首頁與 5 個內容頁（見 §4）。
- 純前端內容呈現，無後端 API、無會員、無 CMS。
- 預約與查詢以外部渠道（WhatsApp／電話／Email／社交媒體）完成。

**非目標**

- 線上付款、線上掛號、帳號系統。
- 多語系切換（目前為繁體中文 `zh-Hant`／`zh_HK`）。

## 3. 技術架構

| 層       | 選用                                                                                     |
| -------- | ---------------------------------------------------------------------------------------- |
| UI       | React 19（`react-jsx`）                                                                  |
| 語言     | TypeScript 6，嚴格設定（`noUnusedLocals`、`noUnusedParameters`、`verbatimModuleSyntax`） |
| 建置     | Vite 8                                                                                   |
| 路由     | React Router 8（`createBrowserRouter`）                                                  |
| 樣式     | Tailwind CSS 4（工具類）＋ 每頁 `index.css`（BEM 命名）                                  |
| 圖示     | react-icons                                                                              |
| 類名     | classnames                                                                               |
| 套件管理 | pnpm                                                                                     |

**渲染模型**

1. 執行期：`main.tsx` 判斷 `#root` 是否有子節點；有（預渲染過的 HTML）用 `hydrateRoot`，否則 `createRoot`。
2. 建置期：`entry-server.tsx` 以 `createStaticHandler` + `createStaticRouter` + `renderToString` 產生各路由 HTML，交由 `scripts/prerender.mjs` 注入 SEO 標籤後寫入 `dist/<path>/index.html`。

## 4. 路由與頁面規格

路由樹定義於 `src/routes.ts`：

```
/                (RootLayout)
├─ index         HomePage                → /
└─ (SiteLayout)
   ├─ /theory    TheoryPage
   ├─ /spirit    SpiritPage
   ├─ /contact   ContactPage
   ├─ /pricing   PricingPage
   └─ /charity   CharityPage
*                loader → redirect("/")
```

- `RootLayout`：掛載 `Seo` 元件 + `<Outlet />`，套用於所有頁面。
- `SiteLayout`：掛載 `NavBar`、`MoveTopButton`、`ContactWidget` 與 `<Outlet />`；首頁不套用，以保留全螢幕轉盤體驗。
- 未知路徑一律 302 導回首頁（SSR 預渲染時若遇 redirect 會拋錯，確保只在非定義路徑發生）。

### 4.1 首頁 `/`

五行轉盤為主要互動：

- 中心為醫師人像（`CenterPortrait`）。
- 外圈 5 個元素按鈕（`ElementButton`），各據角度：木 0°、火 72°、土 144°、金 216°、水 288°。
- 每個元素對應路由：

    | id      | label | href       |
    | ------- | ----- | ---------- |
    | `wood`  | 木    | `/theory`  |
    | `fire`  | 火    | `/spirit`  |
    | `earth` | 土    | `/contact` |
    | `metal` | 金    | `/pricing` |
    | `water` | 水    | `/charity` |

- 點擊元素：將被選元素轉至正上方，轉動結束（`transitionend`，且 `propertyName === "transform"`）後導航至對應路由；`pageshow` 時重置導航狀態。
- 若被選元素已喺正上方（無需轉動），照樣轉足 360° 先導航，避免「零反應」。（例如初始狀態點擊木。）
- 子元素以反向旋轉（`rotate(-rotation)`）保持文字／圖示正向。
- 元素具 idle／active 兩張圖，選中時發光。
- `:hover` 只喺桌面生效（包喺 `@media (hover: hover) and (pointer: fine)`）；觸控裝置第一下 tap 即觸發 `click`，唔會出現 iOS「先 tap 觸發 hover、再 tap 才 click」嘅兩下問題。音樂鍵、預約鍵同理。

**背景音樂**（`useBackgroundMusic` + `MusicToggleButton`）

- 頁面載入嘗試自動播放。
- 被瀏覽器攔截時，於 `document` 註冊一次性 `click` / `touchstart`：頁面任意位置第一次點擊或觸控即解鎖並播放。
- 模組層級 `hasAutoPlayed` 確保每個 session 只自動／解鎖播放一次。
- 「聆聽」按鈕（桌面 `#musicToggleBtn`、手機 `#mobileMusicToggleBtn`，`data-playing` 反映狀態）以 `toggle` 控制播放／暫停。
- `<audio>`（`Home/index.tsx` 的 `music.mp3`）無 `loop`：每輪只播一次。
- 播完觸發 `ended`，將 `isPlaying` 設為 `false`，聆聽按鈕回到 idle。
- 再次 `play()` 時若 `audio.ended`，先將 `currentTime` 歸零再播。
- 點擊任一元素導航前 `fadeOut(1000ms)` 淡出；離開首頁時 pause。內容頁（如 `/theory`）沒有音訊。
- 播放時重啟歌詞動畫（雙行歌詞）。

**版面**

- 桌面：`VerticalTitle`（直式標題）、`DesktopLyricsPanel`。
- 手機：`MobileTopBar`（標題 + 歌詞 + 播放鍵）。
- 底部 `BottomInfoBar`：WhatsApp 預約按鈕 + 地址、電話。

### 4.2 治療理論 `/theory`

- 標題「全治氣針治療理論」，撰文：劍峰醫師 ｜ 治療理論：木。
- 內容段落：醫師背景、恩師致謝名單（`MENTORS`）、退化性病變挑戰、頻率治療手法、氣針與古典五行波形。
- 以「木」圖作浮水印背景；提供返回首頁連結（頂部 + 底部）。

### 4.3 心法 `/spirit`

- 標題「善用五行破解人生逆境大論」。
- 內容以結構化資料渲染：五行流程節點（火→土→金→水→木→火）、五個代碼章節（`CODE_SECTIONS`，各有主題色）、三大策略（`STRATEGIES`）、告世人書。
- 以「火」圖作浮水印。

### 4.4 聯絡見證 `/contact`

分區：

1. **診所資訊**：Google Maps 嵌入 (`MAP_EMBED_SRC`)、地址、WhatsApp／電話 `+852 6499 9199`、Email、工作時間表（`SCHEDULE`，含休息標示）、星期日及公眾假期休息、需預約。
2. **遙距治癒與影音個案**：`REMOTE_CASES`（YouTube 嵌入）。
3. **脊椎矯正個案分享**：`SPINE_CASES`（YouTube 嵌入）。
4. **脊椎矯正影像對比**：`XRAY_CASES`，每案含治療前／後（部分含第二療程）影像與描述。

- 頂部快捷按鈕（跳至好轉個案 / 返回首頁），以「土」圖作浮水印。

### 4.5 收費認證 `/pricing`

- **全面照顧計劃**價目表（`PRICE_ROWS`）：檢查費 $300、X-Ray 照片 $380、氣針療程 $1,000／次。
- **專業資歷與權威認證**：`CERTIFICATES` 清單 + `CERTIFICATE_IMAGES` 證書縮圖。
- 證書點擊開啟 `CertificateLightbox` 燈箱，可放大與前後切換；`activeCert` 為 `null` 時關閉。
- 以「金」圖作浮水印、插圖作裝飾。

### 4.6 慈善教學 `/charity`

1. **臨床技術教學**：`TEACHING_CARDS`（工聯會專題教學、明愛長者工作坊；描述支援 `string | {strong}` 富文本片段）。
2. **街頭公開義診**：服務時間（逢星期日 12:00 起）、地點、檢查全免、首針免費其後每針 $100；現場位置地圖、近期場次相片（`CLINIC_SESSIONS`）、精華影片（`CLINIC_VIDEOS`，本地 mp4）。
3. **天醫濟世計畫**：`TIANYI_ROWS`（檢查 $0、氣針 $500）與預約須知。

- 以「水」圖作浮水印。

## 5. 共用元件規格

| 元件            | 位置                    | 行為                                                                                                     |
| --------------- | ----------------------- | -------------------------------------------------------------------------------------------------------- |
| `RootLayout`    | `component/`            | `Seo` + `Outlet`                                                                                         |
| `SiteLayout`    | `component/SiteLayout/` | `NavBar` + `main` + `MoveTopButton` + `ContactWidget`                                                    |
| `NavBar`        | `SiteLayout/`           | 置中 Logo，連回首頁，`aria-label`                                                                        |
| `ContactWidget` | `SiteLayout/`           | 浮動聯絡選單；`CONTACT_LINKS`（電話／WhatsApp／Facebook／Instagram／Email），可展開收合，`aria-expanded` |
| `MoveTopButton` | `SiteLayout/`           | 捲動超過 300px 顯示，點擊平滑捲回頂部，`aria-label`                                                      |

## 6. SEO 子系統

**資料來源**：`src/seo/routes.json`

```jsonc
{
  "site":   { "siteName", "businessName", "siteUrl", "ogImage", "phone", "email", "address*" },
  "routes": [{ "path", "ogType", "title", "description", "keywords", "changefreq", "priority" }]
}
```

- `config.ts`：讀取資料、以 `VITE_SITE_URL` 覆寫 `siteUrl`、提供 `findRouteMeta` / `getRouteMeta`（未知路徑 fallback 首頁）與 `buildCanonical`。
- `Seo.tsx`：`useEffect` 依 `pathname` 更新 `document.title` 與 head meta／link；未定義路由設 `noindex,follow`。
- `prerender.mjs`：為每頁輸出對應 head、`MedicalClinic` JSON-LD、`sitemap.xml`（含 `lastmod`、`changefreq`、`priority`）與 `robots.txt`。

新增頁面時須同步更新：`routes.ts`、`src/seo/routes.json`、以及（如首頁有入口）相關 constant。

## 7. 建置流程

```
pnpm build
├─ tsc -b                                  # 型別檢查（app + node）
├─ vite build                              # 產出 dist/（含 index.html 預留 <!--seo-head--> 及 <div id="root">）
├─ vite build --ssr src/entry-server.tsx   # 產出 dist-ssr/entry-server.js
└─ node scripts/prerender.mjs              # 逐頁 HTML + sitemap.xml + robots.txt
```

`index.html` 內含 `<!--seo-head-->` 佔位符與 `<div id="root"></div>`，供預渲染注入。字型使用 Google Fonts `LXGW WenKai TC`。

## 8. 樣式與設計系統

- Tailwind 入口：`src/index.css`（`@import "tailwindcss"` + 全域高度設定）。
- 每頁／每元件使用獨立 CSS 檔並以 BEM 命名（如 `home-wheel__spin`、`theory-page__title`），透過 CSS 變數傳遞圖片路徑（例如 `--theory-watermark`、`--cyclone-desktop`）。
- 五個內容頁皆以對應五行圖作浮水印背景，形成一致視覺語言。
- `pnpm lint:tw` 使用 Tailwind `__unstable__loadDesignSystem` 掃描原始碼字串，檢查 class 是否可正規化（rem / collapse / logicalToPhysical），不通過回傳 exit 1。

## 9. 無障礙與響應式

- 互動按鈕皆為 `<button type="button">` 並附 `aria-label` / `title`（音樂鍵、元素鍵、回頂、聯絡）。
- 外部連結加 `rel="noreferrer"` / `target="_blank"`。
- 首頁依視窗寬度切換桌面／手機版面元件。
- `html, body` 使用 `height: 100dvh`。

## 10. 代碼規範

寫碼慣例以 [AGENTS.md](./AGENTS.md) 為準。

## 11. 目錄結構

```
hkwholeness-site/
├─ index.html               # HTML 模板（seo-head 與 root 佔位）
├─ vite.config.ts           # react + tailwindcss plugins
├─ vercel.json              # 部署設定
├─ public/                  # favicon.ico、og-cover.jpg
├─ legacy/                  # 舊版靜態 HTML（charity/contact/main/pricing/spirit/theory）
├─ scripts/
│  ├─ prerender.mjs
│  └─ lint-tailwind.mjs
└─ src/
   ├─ app.tsx / main.tsx / router.ts / routes.ts / entry-server.tsx
   ├─ index.css
   ├─ component/
   │  ├─ RootLayout.tsx
   │  └─ SiteLayout/{index.tsx, index.css, NavBar, ContactWidget, MoveTopButton, constant.ts, asset/}
   ├─ page/
   │  ├─ Home/{index.tsx, index.css, constant.ts, type.ts, component/, hook/, asset/}
   │  ├─ Theory/ Spirit/ Contact/ Pricing/ Charity/{index.tsx, index.css, constant.ts, type.ts, asset/}
   └─ seo/{Seo.tsx, config.ts, routes.json}
```

## 12. 備註與未來方向

- `legacy/` 保留作內容與設計對照，不參與建置。
- 若內容量增長，可考慮將各頁 `constant.ts` 抽為結構化內容資料或接入 CMS。
- 目前無自動化測試；新增功能時以 `pnpm build`（含 `tsc`）與 `pnpm lint:tw` 作最低驗證。
