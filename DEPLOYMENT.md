# 🚀 Deployment Guide - CircleZone

## Build untuk Production

```bash
npm run build
```

Ini akan membuat folder `dist/` yang berisi file-file production-ready.

## Preview Build Lokal

```bash
npm run preview
```

Server akan berjalan di http://localhost:4173/

---

## Deployment ke Vercel (Recommended)

### Via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Production deployment:
```bash
vercel --prod
```

### Via Vercel Dashboard

1. Push code ke GitHub
2. Buka https://vercel.com
3. Import repository
4. Vercel akan auto-detect Vite
5. Deploy!

**Environment Variables** (jika menggunakan Anthropic API):
- `VITE_ANTHROPIC_API_KEY`: Your API key

---

## Deployment ke Netlify

### Via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod
```

### Via Netlify Dashboard

1. Push code ke GitHub
2. Buka https://netlify.com
3. New site from Git
4. Pilih repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

**Redirects** (untuk SPA):
Buat file `public/_redirects`:
```
/*    /index.html   200
```

---

## Deployment ke GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `vite.config.js`:
```js
export default defineConfig({
  base: '/circlezone/', // nama repository
  plugins: [react()],
})
```

3. Update `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages di repository settings:
   - Source: gh-pages branch

---

## Deployment ke Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login:
```bash
firebase login
```

3. Initialize:
```bash
firebase init hosting
```

Pilih:
- Public directory: `dist`
- Single-page app: Yes
- GitHub auto-deploy: Optional

4. Build:
```bash
npm run build
```

5. Deploy:
```bash
firebase deploy
```

---

## Deployment ke Cloudflare Pages

1. Push code ke GitHub
2. Buka https://pages.cloudflare.com
3. Create a project
4. Connect GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
6. Deploy!

---

## Optimisasi Production

### 1. Lazy Loading Components

```jsx
import { lazy, Suspense } from 'react';

const LatihanSoal = lazy(() => import('./components/sections/LatihanSoal'));

<Suspense fallback={<div>Loading...</div>}>
  <LatihanSoal />
</Suspense>
```

### 2. Image Optimization

- Gunakan WebP format
- Compress images dengan TinyPNG
- Lazy load images dengan `loading="lazy"`

### 3. Code Splitting

Vite sudah melakukan code splitting otomatis.

### 4. Minification

Vite sudah minify CSS dan JS otomatis di production.

### 5. Caching

Set cache headers di hosting:
```
# Vercel (vercel.json)
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## Environment Variables

### Development (.env.local)
```
VITE_ANTHROPIC_API_KEY=sk-ant-...
```

### Production
Set di dashboard hosting:
- Vercel: Settings → Environment Variables
- Netlify: Site settings → Environment variables
- GitHub Pages: Repository secrets

---

## Custom Domain

### Vercel
1. Domains → Add domain
2. Update DNS records
3. Auto SSL

### Netlify
1. Domain settings → Add custom domain
2. Update DNS records
3. Auto SSL

### GitHub Pages
1. Settings → Pages → Custom domain
2. Update DNS:
```
A record: 185.199.108.153
A record: 185.199.109.153
A record: 185.199.110.153
A record: 185.199.111.153
```

---

## Performance Checklist

- [ ] Build size < 500KB (gzipped)
- [ ] First Contentful Paint < 1.8s
- [ ] Time to Interactive < 3.8s
- [ ] Lighthouse score > 90
- [ ] Images optimized
- [ ] Fonts preloaded
- [ ] Critical CSS inlined
- [ ] Service Worker (optional)

---

## Monitoring

### Analytics
- Google Analytics
- Vercel Analytics
- Plausible Analytics

### Error Tracking
- Sentry
- LogRocket
- Bugsnag

### Performance
- Lighthouse CI
- WebPageTest
- GTmetrix

---

## Rollback

### Vercel
Dashboard → Deployments → Previous deployment → Promote to Production

### Netlify
Deploys → Previous deploy → Publish deploy

### GitHub Pages
```bash
git revert HEAD
git push
npm run deploy
```

---

## Troubleshooting

### Build fails
```bash
# Clear cache
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### 404 on refresh
Pastikan SPA redirect sudah dikonfigurasi.

### Environment variables tidak terbaca
Pastikan prefix `VITE_` dan restart dev server.

### Slow build
- Enable caching di CI/CD
- Optimize dependencies
- Use pnpm instead of npm

---

## CI/CD Pipeline

### GitHub Actions (.github/workflows/deploy.yml)

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Post-Deployment

1. Test semua fitur
2. Check responsive design
3. Test dark mode
4. Verify analytics
5. Monitor errors
6. Check performance

---

Selamat! Aplikasi CircleZone siap digunakan! 🎉
