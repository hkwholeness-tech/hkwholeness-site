# 安裝與部署

全治護脊官網（`hkwholeness-site`）的技術棧、本機安裝與部署說明。產品行為見 [SPEC.md](./SPEC.md)，程式規範見 [AGENTS.md](./AGENTS.md)。

本文重點在 **Windows** 環境；macOS / Linux 差異會另加註。

---

## 1. 技術棧

### 執行期（Production）

| 層       | 技術                                      | 說明                                                         |
| -------- | ----------------------------------------- | ------------------------------------------------------------ |
| UI       | **React 19** + **TypeScript 6**           | 函式元件 + Hooks，無 class component                         |
| 路由     | **React Router 8**                        | `createBrowserRouter`（前端）＋ `createStaticHandler`（SSR） |
| 建置     | **Vite 8** + `@vitejs/plugin-react`       | Dev server（HMR）＋ production bundle                        |
| 樣式     | **Tailwind CSS 4**（`@tailwindcss/vite`） | 只做 reset / 基礎；版面相容樣式寫在各頁 `index.css`（BEM）   |
| 圖示     | **react-icons**                           | 社群圖示集                                                   |
| Class    | **classnames**                            | 只在條件 class 時使用                                        |
| 渲染模式 | **SPA + 靜態預渲染（SSR prerender）**     | 瀏覽時是 SPA；建置時逐頁輸出完整 HTML + SEO metadata         |

### 建置期 / 工具鏈

| 工具                        | 用途                                                            |
| --------------------------- | --------------------------------------------------------------- |
| `tsc -b`                    | 型別檢查（`noUnusedLocals`、`verbatimModuleSyntax` 等嚴格模式） |
| `scripts/prerender.mjs`     | 逐頁 SSR 渲染、注入 SEO、產生 `sitemap.xml` / `robots.txt`      |
| `scripts/lint-tailwind.mjs` | Tailwind class 正規化檢查（`pnpm lint:tw`）                     |
| Prettier 3                  | 格式化（4 空格、printWidth 200、`bracketSpacing: false`）       |
| ESLint 10                   | 語法檢查（規範上唔使主動跑）                                    |
| **pnpm**                    | 唯一的套件管理員（`pnpm-lock.yaml`，lockfile v9）               |

### 執行環境需求

| 項目    | 需求                                            |
| ------- | ----------------------------------------------- |
| Node.js | **20.19+**（建議用 **22 LTS / 24 LTS** 或更新） |
| pnpm    | **9+**（lockfile 為 v9.0；建議用最新穩定版）    |
| Git     | 任何近期版本                                    |
| 瀏覽器  | Chrome / Edge / Safari / Firefox（支援 ES2023） |

> 專案無後端、無 CMS、無會員、無測試套件。建置完輸出係純靜態檔，任何靜態主機都放得。

---

## 2. Windows 安裝

### 2.1 安裝 Node.js

三個方法揀一個（**唔好同時裝幾個**，會爭 PATH）：

**A. winget（最快）**

```powershell
winget install OpenJS.NodeJS.LTS
```

**B. 官方安裝器**

去 <https://nodejs.org/> 下載 LTS 的 `.msi`，一路 Next。安裝時 **唔好** 勾「自動安裝額外工具（Chocolatey）」，專案唔需要。

**C. nvm-windows（要管多個 Node 版本先揀）**

```powershell
winget install CoreyButler.NVMforWindows
nvm install 24
nvm use 24
```

裝完開一個 **新的** PowerShell / Terminal，確認：

```powershell
node -v
npm -v
```

### 2.2 安裝 pnpm

**推薦：用 corepack（Node 附帶）**

```powershell
corepack enable pnpm
corepack prepare pnpm@latest --activate
```

如果 `corepack` 唔存在或 `corepack enable` 報權限錯，改用：

```powershell
npm install -g pnpm
```

或者官方獨立安裝器（PowerShell）：

```powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

確認：

```powershell
pnpm -v
```

> `pnpm` 喺 Windows 係靠 `.cmd` / `.ps1` shim 執行。如果 `pnpm` 指令「找不到」，多數係 npm 全域 bin 冇入 PATH；搵 `npm config get prefix`，再將該路徑加入 PATH。

### 2.3 設定 PowerShell 執行原則（常見卡關）

若果跑 `pnpm` 出現類似「`pnpm.ps1` cannot be loaded because running scripts is disabled」，於當前使用者開一次：

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

### 2.4 攞源碼並安裝

```powershell
git clone <repo-url> hkwholeness-site
cd hkwholeness-site
pnpm install
```

### 2.5 起開發伺服器

```powershell
pnpm dev
```

預設 <http://localhost:5173>，支援 HMR。

---

## 3. macOS / Linux 安裝（對照）

```bash
# 用 nvm / fnm / brew 裝 Node 24，再：
corepack enable pnpm
# 或
npm install -g pnpm

git clone <repo-url> hkwholeness-site
cd hkwholeness-site
pnpm install
pnpm dev
```

macOS / Linux 冇 PowerShell 執行原則問題，亦少有 symlink 權限問題。

---

## 4. 常用指令

| 指令               | 說明                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| `pnpm dev`         | 開發伺服器（HMR）                                                                                |
| `pnpm build`       | `tsc -b` → `vite build` → `vite build --ssr src/entry-server.tsx` → `node scripts/prerender.mjs` |
| `pnpm preview`     | 本機預覽 `dist/` 產物                                                                            |
| `pnpm format`      | Prettier 格式化                                                                                  |
| `pnpm lint`        | ESLint（規範上唔使主動跑）                                                                       |
| `pnpm lint:tw`     | Tailwind class 正規化檢查（有改 className 才需要）                                               |
| `pnpm lint:tw:fix` | 自動修正 Tailwind class                                                                          |

> `pnpm build` 已包含 `tsc -b`，唔需要另外跑 `tsc`。
> Windows 上 pnpm 用 `cmd.exe` 執行 script，`&&` 串接冇問題；但如果你喺 **PowerShell 5.1** 手動打 `&&` 係會報錯（PowerShell 7+ 才支援），跑 `pnpm build` 本身就唔受影響。

---

## 5. 環境變數

只有一個可選變數：

| 變數            | 用途                                                                   | 預設                 |
| --------------- | ---------------------------------------------------------------------- | -------------------- |
| `VITE_SITE_URL` | 覆蓋 `src/seo/routes.json` 的 `siteUrl`（canonical / OG / sitemap 用） | `routes.json` 內設定 |

**建議做法（跨平台一致）**：喺專案根目錄開 `.env.local`（已被 `.gitignore`）：

```dotenv
VITE_SITE_URL=https://your-domain.com
```

如果只係一次性：

```powershell
# PowerShell
$env:VITE_SITE_URL="https://your-domain.com"; pnpm build
```

```bat
:: cmd.exe
set VITE_SITE_URL=https://your-domain.com && pnpm build
```

> 呢個變數係 **建置期** 注入，唔係執行期。改完要重新 `pnpm build`。

---

## 6. 建置產物

`pnpm build` 會產生兩個資料夾（兩者都已列入 `.gitignore`）：

```
dist/                     # 部署這個
├─ index.html             # 首頁（已 prerender + SEO）
├─ theory/index.html      # 其餘各頁，逐個資料夾一個 index.html
├─ spirit/index.html
├─ contact/index.html
├─ pricing/index.html
├─ charity/index.html
├─ assets/                # 前端 JS / CSS / 圖片
├─ favicon.ico
├─ og-cover.jpg
├─ sitemap.xml
└─ robots.txt

dist-ssr/
└─ entry-server.js        # 只係 prerender 的中間產物，唔使部署
```

因為每個路由都已 prerender 成實體 `index.html`，靜態主機開箱即用，仲有完整 SEO metadata（title / description / OG / Twitter Card / `MedicalClinic` JSON-LD）。

---

## 7. 部署

### 7.1 Vercel（已附設定）

根目錄 `vercel.json` 已經配好：

```json
{
    "framework": "vite",
    "buildCommand": "pnpm build",
    "installCommand": "pnpm install",
    "outputDirectory": "dist",
    "routes": [{"handle": "filesystem"}, {"src": "/(.*)", "dest": "/index.html"}]
}
```

流程：Import repo → 設定 `VITE_SITE_URL` 環境變數（Production / Preview）→ Deploy。Vercel 會自己跑 pnpm（有 lockfile 就會用 pnpm）。

### 7.2 其他靜態主機（Netlify / Cloudflare Pages / GitHub Pages）

- **Build command**：`pnpm build`
- **Output / Publish directory**：`dist`
- **SPA fallback**：未知路徑要 fallback 去 `/index.html`（路由會 `redirect("/")`）。

### 7.3 Windows 本機 / IIS

Windows Server 用 IIS 都可以，但要處理兩件事：

1. **SPA fallback**：装 [URL Rewrite](https://www.iis.net/downloads/microsoft/url-rewrite)，喺 `dist/` 放 `web.config`：

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="SPA fallback" stopProcessing="true">
                    <match url=".*" />
                    <conditions logicalGrouping="MatchAll">
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                    </conditions>
                    <action type="Rewrite" url="/index.html" />
                </rule>
            </rules>
        </rewrite>
        <staticContent>
            <remove fileExtension=".json" />
            <mimeMap fileExtension=".json" mimeType="application/json" />
            <remove fileExtension=".webmanifest" />
            <mimeMap fileExtension=".webmanifest" mimeType="application/manifest+json" />
        </staticContent>
    </system.webServer>
</configuration>
```

2. **測試**：`pnpm build` 之後將 `dist/` 內容複製去網站根目錄；或者用 `pnpm preview` 喺其他 port 快速驗證。

> 唔建議喺 Windows 上做 production「build server」除非必要；CI（Vercel / GitHub Actions）出 Linux 產物最穩陣。要喺 Windows 建置就留意下面第 8 節。

---

## 8. Windows 常見問題

### 8.1 `pnpm install` 出現 EPERM / symlink 權限錯誤

pnpm 用連結方式管理 `node_modules`。解法（由快到慢）：

1. Windows 設定 → 隱私權與安全性 → 開發人員選項 → 開 **開發人員模式（Developer Mode）**。
2. 或者用管理員身分開 PowerShell 再跑 `pnpm install`。
3. 或者退而求其次，喺專案根目錄 `.npmrc` 加：

    ```ini
    node-linker=hoisted
    ```

    代價係失去 pnpm 的嚴格相依隔離同慳位優勢。**改完要 `pnpm install` 重新 install，並考慮唔好 commit 呢個檔案。**

### 8.2 路徑太長（`ENAMETOOLONG` / `path too long`）

`node_modules/.pnpm` 下面路徑可以好深。啟用長路徑支援：

```powershell
# Git
git config --system core.longpaths true

# Windows（需要管理員，改完要重開機）
New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" `
  -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force
```

同時養成習慣：將專案 clone 去 **短路徑**，例如 `C:\dev\hkwholeness-site`，唔好放喺 `C:\Users\<名>\Documents\...\...` 深處，亦唔好放喺 OneDrive / Dropbox 同步資料夾（同步會鎖檔、拖慢 build，亦可能整亂 `node_modules`）。

### 8.3 換行符（CRLF / LF）搞到 Prettier 全檔 diff

專案冇 `.gitattributes`，而 Prettier 預設 `endOfLine` 係 **LF**。Windows 上如果 Git `core.autocrlf=true`，checkout 會變 CRLF，一跑 `pnpm format` 就會改到成個檔案。建議：

```powershell
git config core.autocrlf input
```

（或者同 team 傾，加一個 `.gitattributes` 將 `*.ts` `*.tsx` `*.css` `*.json` 定為 `text eol=lf`。）

### 8.4 Build 好慢

- 將專案資料夾加入 **Windows Security → 排除項目**（病毒與威脅防護 → 管理設定 → 排除項目），尤其 `node_modules`、`dist`、`dist-ssr`。
- 關閉 OneDrive 對專案資料夾的即時同步。
- 用 SSD。

### 8.5 中文 / 空格路徑

專案路徑有中文或空格多數唔會即時爆，但個別工具（尤其舊版 npm scripts、IIS）會出古怪錯誤。一律用純英數短路徑最保險：`C:\dev\hkwholeness-site`。

### 8.6 `pnpm` 指令找不到 / 版本唔啱

```powershell
where.exe pnpm        # 睇實際揀咗邊個
pnpm -v
corepack enable pnpm  # 用 corepack 重設
```

專案冇 `packageManager` 欄位，corepack 唔會自動 pin 版本。如果想團隊鎖死版本，可以喺 `package.json` 加：

```json
"packageManager": "pnpm@10.0.0"
```

（加之前同 team 傾，避免撞版本。）

### 8.7 前端功能冇問題但音樂 / 影片唔播

`pnpm dev` 係 HTTP（`http://localhost`），瀏覽器對自動播放有政策限制，屬預期行為：首頁音樂被擋時，點頁面任一位置即可解鎖（詳見 [README.md](./README.md) 及 [AGENTS.md](./AGENTS.md) 的「首頁音樂」）。

---

## 9. 改動本文件

技術棧、安裝步驟、部署方式有變（例如換 Node 版本、加 CI、改 `vercel.json`）就要 **同一次改動** 更新本文件，並同步 `README.md` 的「技術棧 / 部署」段落。純內部重構、無可見影響可略過。
