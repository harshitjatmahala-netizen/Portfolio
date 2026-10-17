# Harshit Kumar — Personal Portfolio Website

Modern, responsive, and professional personal portfolio for **Harshit Kumar**, First-Year B.Tech Computer Science and Engineering student at JECRC University, Jaipur.

Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Lucide Icons**.

---

## 🚀 Quick Start (Running Locally)

To run the portfolio website on your computer:

1. **Open your terminal / command prompt** in this project directory:
   ```bash
   cd "c:\Users\HARSHIT\OneDrive\Desktop\portfolio 2.0"
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and visit:
   ```
   http://localhost:5173/
   ```

---

## 🎨 How to Customize Your Content

All personal information, links, skills, and projects are centralized in a single, well-commented configuration file:
👉 **`src/data/portfolioData.js`**

### 1. Adding Your Own Profile Photo
1. Copy your photo into the `public/` folder and name it:
   `public/profile-placeholder.jpg` (or any custom name such as `public/harshit.jpg`).
2. If you change the file name, open `src/data/portfolioData.js` and update:
   ```javascript
   profilePhoto: "/harshit.jpg",
   ```

### 2. Updating Your Social & Contact Links
Open `src/data/portfolioData.js` to change:
- `email`: `"harshitjatmahala@gmail.com"`
- `linkedin`: `"https://www.linkedin.com/in/harshit-kumar-160b18408/"`
- `github`: `"https://github.com/harshitjatmahala-netizen"`

### 3. Updating Your RS-CIT Certificate
1. Save your scanned certificate or certificate photo in `public/rscit-certificate.jpg`.
2. It will automatically be displayed in the modal viewer when visitors click **"View Full Certificate"**!

### 4. Adding or Updating Projects
In `src/data/portfolioData.js`, you can update existing projects or add new ones to `projectsData`. When you upload your practice spreadsheets to Google Drive, OneDrive, or GitHub, you can add links to `demoUrl`.

---

## 🌐 How to Deploy Online for Free

### Option A: Deploy on Vercel (Recommended & Easiest)
1. Push this folder to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/harshitjatmahala-netizen/portfolio.git
   git push -u origin main
   ```
2. Go to **[vercel.com](https://vercel.com/)** and sign in with your GitHub account.
3. Click **"Add New..."** → **"Project"**.
4. Import your `portfolio` repository.
5. Vercel automatically detects **Vite** (`npm run build` and `dist` folder).
6. Click **Deploy**. In under a minute, your website will be live with a free `https://your-portfolio.vercel.app` URL!

---

### Option B: Deploy on Netlify
1. Build the production files:
   ```bash
   npm run build
   ```
2. Go to **[netlify.com](https://www.netlify.com/)** and log in.
3. Drag and drop the generated `dist` folder directly into the Netlify dashboard.
4. Your website is instantly live!

---

## 📂 Project Structure

```
portfolio 2.0/
├── index.html                   # HTML entry point, SEO meta tags, Google Fonts
├── package.json                 # Dependencies & scripts
├── vite.config.js               # Vite + Tailwind CSS configuration
├── public/
│   ├── favicon.svg              # Custom HK monogram logo
│   ├── profile-placeholder.jpg  # Profile photo placeholder
│   └── rscit-certificate.jpg    # RS-CIT certificate preview
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main page layout & light/dark mode handler
    ├── index.css                # Tailwind CSS v4 styling & glassmorphism
    ├── data/
    │   └── portfolioData.js     # Centralized, easily editable portfolio info
    └── components/
        ├── Navbar.jsx           # Sticky glassmorphic nav with mobile drawer & theme toggle
        ├── Hero.jsx             # Hero section with headline, bio, CTAs, metrics
        ├── About.jsx            # Educational story, background, and aspirations
        ├── Skills.jsx           # Categorized skill cards with transparent levels
        ├── Projects.jsx         # Practice projects gallery with category filters
        ├── ProjectModal.jsx     # Interactive modal previewing project details
        ├── Education.jsx        # B.Tech CSE details & RS-CIT card
        ├── CertificateModal.jsx # Full-screen certificate viewer
        ├── Opportunities.jsx    # Roles open to (Internships, Excel work, etc.)
        ├── Contact.jsx          # Validated contact form + mailto fallback
        └── Footer.jsx           # Attribution, navigation links, and back-to-top
```

---

## 🛠️ Available NPM Scripts

- `npm run dev` — Starts local development server on `http://localhost:5173/`
- `npm run build` — Compiles optimized production bundle into `dist/`
- `npm run lint` — Runs Oxlint checks across all files
- `npm run preview` — Locally previews the built production bundle
