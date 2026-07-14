# Sunera Mehak - Professional Portfolio Website

An elegant, premium, Apple-inspired personal portfolio website built entirely using frontend technologies (**HTML5**, **CSS3**, **Vanilla JavaScript**). Optimized for fast page speeds, high accessibility, and seamless deployment on GitHub Pages.

---

## 🎨 Design & Aesthetic Features

* **Apple-Inspired Styling:** Minimal layouts, ample white space, frosted glass navigation and card overlays (`backdrop-filter`).
* **Micro-Animations:** Fluid scrolling, fade-up reveal behaviors, soft profile floating, and smooth transitions on focus.
* **Typing Subtitles:** Auto-typing text in the hero section displaying professional roles.
* **Stats Counter Panel:** Dynamic counting animations highlighting core achievements.
* **Light / Dark Theme Support:** Dynamic toggle adapting to colors instantly, persisting selections locally.
* **Interactive Modal:** Pop-up panels highlighting project architectural details and leadership responsibilities.
* **Responsive Fluid Grid:** Tailored experience across mobile, tablet, and widescreen displays.
* **Custom Desktop Cursor:** Adaptive cursor scaling during hover over links and cards.

---

## 📂 Folder Structure

```text
portfolio/
│
├── index.html          # Core structure and layout
├── style.css           # Apple-style premium design system, animations, & themes
├── script.js          # Interactive features, loaders, themes, and counters
├── assets/
│   ├── profile.jpg     # Professional profile image
│   ├── resume.pdf      # Professional resume
│   └── icons/          # Fallback assets folder
│
└── README.md           # This documentation file
```

---

## 🚀 Quick Start (Running Locally)

Since this site has no backend dependencies, database requirements, or complex build steps, you can run it immediately on any machine.

### Method 1: Double-Click
Simply navigate into the `portfolio/` directory and double-click **`index.html`** to open it directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari.

### Method 2: Local HTTP Server (Recommended)
Running through an HTTP server ensures correct CORS path mapping for PDFs and asset handling.

If you have **Python** installed:
1. Open your terminal/command prompt.
2. Navigate to the `portfolio/` directory.
3. Run the following command:
   ```bash
   python -m http.server 8000
   ```
4. Open your browser and go to: `http://localhost:8000`

If you are using **VS Code**:
1. Install the extension **"Live Server"** by Ritwick Dey.
2. Open the `portfolio` folder.
3. Click **"Go Live"** in the bottom-right corner of the status bar.

---

## 🌐 Deploying to GitHub Pages

GitHub Pages is a free hosting service that runs static sites directly from a GitHub repository.

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click **New** to create a repository.
3. Name your repository (e.g., `sunera-portfolio`).
4. Set the visibility to **Public**.
5. Leave "Add a README" unchecked (since we already have one) and click **Create repository**.

### Step 2: Push Your Code
Initialize git and push the contents of your `portfolio` directory:

```bash
# Navigate into the project folder
cd portfolio

# Initialize Git
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: initial release of apple-inspired portfolio"

# Rename default branch to main
git branch -M main

# Link to your remote GitHub repository (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/sunera-portfolio.git

# Push code to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository page on GitHub.
2. Click on the **Settings** tab.
3. Scroll down to the **Pages** section (under Code and automation in the sidebar).
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose **`main`** as the source branch and **`/ (root)`** as the folder.
6. Click **Save**.

Within a few minutes, your site will be live at:
`https://YOUR_USERNAME.github.io/sunera-portfolio/`
