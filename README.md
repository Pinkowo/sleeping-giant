# Sleeping Giant Backpackers

Sleeping Giant Backpackers 的官方靜態網站，提供位於紐西蘭 Hastings（Hawke's Bay 地區）的背包客棧住宿資訊，並協助旅客銜接當地果園、葡萄園、包裝廠等季節性工作機會。

## 功能

- **首頁介紹**：背包客棧特色與主打服務一覽（`index.html`）
- **關於我們**：館內 14 項設施清單與介紹（`about.html`）
- **房型與價格**：單人房 / 雙人房 / 多人房床位週租金資訊（`prices.html`）
- **工作機會**：依季節（修剪、疏果、採收）整理的當地打工資訊（`work.html`）
- **照片相簿**：搭配 Lightbox 效果的圖片瀏覽，可用滑鼠或鍵盤切換、ESC 關閉（`gallery.html`）
- **地點資訊**：嵌入 Google Maps，提供地址與導航連結（`location.html`）
- **Hastings 地區介紹**：當地生活與環境介紹（`about-hastings.html`）
- **雇主合作頁**：提供給當地雇主的合作媒合說明（`employers.html`）
- **聯絡我們**：含姓名、Email、電話、預計入住日期、房型選擇等欄位的聯絡表單（`contact.html`）
- **滾動動畫**：使用 Intersection Observer 實現區塊進場與子元素的漸進動畫效果
- **無障礙設計**：具備 Skip link、語意化標籤與 ARIA 屬性，支援鍵盤操作

## 技術架構

純靜態網站，無需任何建置工具或後端伺服器：

| 類別 | 技術 |
| --- | --- |
| 標記語言 | HTML5 |
| 樣式 | CSS3（`styles.css`） |
| 互動邏輯 | Vanilla JavaScript（`site.js`） |
| 字體 | Google Fonts（Manrope、Sora） |
| 圖示 | Material Symbols Outlined |
| 地圖 | Google Maps Embed |

### 專案結構

```
.
├── index.html              # 首頁
├── about.html               # 關於我們 / 設施介紹
├── prices.html              # 房型與價格
├── work.html                 # 季節性工作機會
├── gallery.html              # 照片相簿（含 Lightbox）
├── location.html            # 地點與地圖
├── about-hastings.html      # Hastings 地區介紹
├── employers.html           # 雇主合作頁
├── contact.html              # 聯絡表單
├── site.js                   # 滾動動畫 / Lightbox 邏輯
├── styles.css                 # 全站樣式
└── assets/
    ├── photos/               # 場館實景照片
    └── *.svg, logo.png       # 圖示與 Logo
```

## 本機開發 / 預覽

不需安裝任何套件，直接用瀏覽器開啟 `index.html` 即可預覽；若需以本機伺服器形式瀏覽（避免部分瀏覽器對本地檔案的限制），可使用任意靜態伺服器，例如：

```bash
python3 -m http.server 8000
```

然後在瀏覽器開啟 `http://localhost:8000`。

## 部署

將整個專案目錄複製到任一支援靜態檔案的網頁伺服器（如 Nginx、Apache，或 Netlify / Vercel / GitHub Pages 等靜態託管平台）即可，無需額外建置步驟。

## 聯絡資訊

- 免付費電話：0800 131 753
- 簡訊：027 428 4868
- Email：sleepinggiant@xtra.co.nz
- 地址：109 Davis Street, Hastings, New Zealand
