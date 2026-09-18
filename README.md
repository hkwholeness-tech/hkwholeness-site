# 全治護脊 hkwholeness-site

全治護脊（WE Acupuncture）官方網站。以五行「木、火、土、金、水」為主題，將治療理論、心法、聯絡見證、收費認證與慈善教學五個內容頁，串連成一個可旋轉互動的首頁轉盤體驗。

網站為 **SPA + 靜態預渲染（SSR prerender）**：瀏覽時由 React Router 驅動，建置時逐頁輸出完整 HTML 與 SEO metadata，兼顧互動與搜尋引擎收錄。

## 網站結構

| 五行 | 路徑       | 頁面     | 內容                                                               |
| ---- | ---------- | -------- | ------------------------------------------------------------------ |
| —    | `/`        | 首頁     | 五行轉盤、「聆聽」背景音樂（只播一次、不循環）、歌詞動畫、預約資訊 |
| 木   | `/theory`  | 治療理論 | 全治氣針治療理論、頻率治療手法                                     |
| 火   | `/spirit`  | 心法     | 善用五行破解人生逆境大論                                           |
| 土   | `/contact` | 聯絡見證 | 地址地圖、工作時間、遙距／脊椎個案、X-Ray 對比                     |
| 金   | `/pricing` | 收費認證 | 服務價目表、專業資歷、證書燈箱                                     |
| 水   | `/charity` | 慈善教學 | 工聯會／明愛教學、街頭義診、天醫濟世計畫                           |

## 技術棧

- **React 19** + **TypeScript**
- **Vite 8**（`@vitejs/plugin-react`）
- **React Router 8**（`createBrowserRouter` + SSR `createStaticHandler`）
- **Tailwind CSS 4**（`@tailwindcss/vite`）＋ 各頁獨立 Less-free CSS 檔（`index.css`）
- **react-icons**、**classnames**
- 套件管理：**pnpm**

## 快速開始

環境需求：Node.js 20+、pnpm。

```bash
pnpm install
pnpm dev          # 啟動開發伺服器
pnpm build        # 型別檢查 + 前端建置 + SSR 建置 + 預渲染
pnpm preview      # 預覽 dist 產物
```

## Scripts

| 指令               | 說明                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| `pnpm dev`         | 啟動 Vite 開發伺服器（HMR）                                                                      |
| `pnpm build`       | `tsc -b` → `vite build` → `vite build --ssr src/entry-server.tsx` → `node scripts/prerender.mjs` |
| `pnpm preview`     | 預覽建置後的 `dist/`                                                                             |
| `pnpm lint`        | ESLint 檢查                                                                                      |
| `pnpm lint:tw`     | 檢查 Tailwind class 是否可正規化（不通過會 exit 1）                                              |
| `pnpm lint:tw:fix` | 自動修正 Tailwind class                                                                          |
| `pnpm format`      | Prettier 格式化                                                                                  |

## 建置與 SEO

`pnpm build` 除了產出前端 bundle，亦會：

1. 用 `src/entry-server.tsx` 將每個路由渲染成 HTML。
2. 由 `scripts/prerender.mjs` 將 `<title>`、description、keywords、canonical、Open Graph、Twitter Card 及 `MedicalClinic` JSON-LD 注入各頁 HTML。
3. 產生 `dist/sitemap.xml` 與 `dist/robots.txt`。

SEO 資料的唯一來源為 `src/seo/routes.json`（網站資料 + 每個路由的 metadata）。客戶端另由 `src/seo/Seo.tsx` 在路由切換時同步更新 `<head>`。

若要自訂正式網域，設定環境變數 `VITE_SITE_URL`（會覆蓋 `routes.json` 的 `siteUrl`）。

## 部署

已附 `vercel.json`：Vercel 以 `pnpm build` 建置、輸出 `dist/`，並將所有非檔案請求 fallback 至 `index.html`。

## 目錄結構

```
src/
├─ app.tsx                 # RouterProvider 進入點
├─ main.tsx                # createRoot / hydrateRoot
├─ router.ts / routes.ts   # 路由定義
├─ entry-server.tsx        # SSR render
├─ index.css               # Tailwind 入口
├─ component/              # RootLayout、SiteLayout（NavBar / ContactWidget / MoveTopButton）
├─ page/                   # Home / Theory / Spirit / Contact / Pricing / Charity
│  └─ <Page>/{index.tsx, index.css, constant.ts, type.ts, component/, hook/, asset/}
└─ seo/                    # Seo.tsx、config.ts、routes.json
scripts/
├─ prerender.mjs           # 逐頁預渲染 + sitemap + robots
└─ lint-tailwind.mjs       # Tailwind class 正規化檢查
legacy/                    # 舊版靜態 HTML（遷移參考）
```

## 首頁音樂

背景音樂只存在於首頁，由 `useBackgroundMusic` 控制：

- 進入頁面嘗試自動播放；被瀏覽器擋下時，頁面任意位置第一次點擊／觸控即解鎖播放。
- 「聆聽」按鈕可暫停／續播。
- 不循環：播完一次後按鈕回到 idle；再按可重頭播放。
- 點擊五行元素離開首頁前會淡出。

## 開發規範

代碼慣例與 agent 規則見 [AGENTS.md](./AGENTS.md)。產品與技術規格見 [SPEC.md](./SPEC.md)。
