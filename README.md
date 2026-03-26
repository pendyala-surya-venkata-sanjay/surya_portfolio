## Cybersecurity Portfolio – Akula Naga Venkata Sanjay

Modern, dark, cybersecurity-themed portfolio built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **React Icons**.

### Project Structure

- **`/pages`**: Next.js pages (main entry: `index.js`)
- **`/components`**: Reusable UI sections (Hero, About, Skills, Projects, Achievements, Certifications, Education, Contact, Layout)
- **`/styles`**: Global Tailwind styles (`globals.css`)
- **`/public/assets`** (create this folder): Static assets like the profile image

### Setup

```bash
cd portfolio
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

Place your profile photo at:

- `public/assets/profile-placeholder.jpg` (or update the path in `Hero.js` to match your actual filename)

### Deployment

- **Vercel**
  - Push to GitHub
  - Import the repo in Vercel
  - Framework preset: **Next.js**
  - Build command: `npm run build`
  - Output directory: `.next`

- **Netlify**
  - Use “Import from Git”
  - Build command: `npm run build`
  - Publish directory: `.next`
  - Enable Next.js runtime support if prompted

- **GitHub Pages**
  - Recommended to deploy via **Vercel** or **Netlify** for Next.js.
  - If you must use GitHub Pages, export a static build with `next export` and serve from the `out` folder (not all Next.js features are supported in static export).

