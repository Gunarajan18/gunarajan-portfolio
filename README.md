# Gunarajan — Portfolio

A premium Apple-style portfolio built with **React (Vite) + Tailwind CSS + Framer Motion**.

## 🚀 Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Add your assets to src/assets/
#    - profile.jpg  (your photo)
#    - Place resume.pdf in /public/

# 3. Start dev server
npm run dev
# → http://localhost:5173
```

## 🌐 Deploy to Vercel

```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: Vercel Dashboard
# 1. Push code to GitHub
# 2. Go to vercel.com → New Project
# 3. Import your GitHub repo
# 4. Framework: Vite (auto-detected)
# 5. Click Deploy ✓
```

## 📁 Project Structure

```
src/
├── assets/
│   └── profile.jpg        ← Add your photo here
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Sections.jsx       ← About, Projects, Experience, Education, Contact, Footer
│   └── utils.jsx          ← Reveal animations & SectionHeader
├── App.jsx
├── main.jsx
└── index.css
public/
└── resume.pdf             ← Add your resume here
```

## 🎨 Customization

- **Colors**: Change `accent` in `tailwind.config.js`
- **Content**: Edit data arrays in `Sections.jsx`
- **Fonts**: Update Google Fonts link in `index.html`
