# Japanese Learning Academy

An editable, responsive Japanese language academy website built with **React 19 + Vite 7 + Tailwind CSS 4**. Features English, Myanmar (မြန်မာ), and Japanese (日本語), four JLPT levels (N5–N2), individual course pages, class timetable, and an optional real registration form integration.

## 1. Prerequisites

- Node.js 20.19+ (or current LTS)
- npm

## 2. Run locally

```bash
npm install
npm run dev
```

Open the localhost address shown by Vite. To test production output:

```bash
npm run build
npm run preview
```

## 3. Make it your own

**Edit `src/data/site.js`**:
- `academy.name`, `japaneseName`, `email`, `phone`, `address`, and social links
- `courses`: descriptions, N5–N2 syllabi, duration, frequency, course fees and learning outcomes
- `classBatches`: actual days, times, start dates, modes and registration status

**Edit `src/data/translations.js`** for English, Myanmar and Japanese page text.

**Edit `src/styles.css`** for Warm Beige styling. Main colors: `#fcfaf6` (cream), `#61785d` (sage green), `#aa826b` (brown), `#3a3b34` (dark text).

**Replace demo content before publishing:** Class rows and course durations are illustrative, contact info is fake, and teacher/about descriptions are placeholders. Ensure course fees, teaching format, batch status, instructors and claims are all accurate. N5 to N2 are JLPT difficulty levels, not official requirements for a specific number of teaching months.

## 4. Enable real registration

By default, the form is **demo-only**. It deliberately **does not transmit or save any student information**. This prevents visitors from receiving a false confirmation when there is no working backend.

For a simple integration:
1. Create an account with a form endpoint service that supports CORS JSON submissions, e.g. Formspree. Review its pricing, privacy and data processing terms for your needs.
2. Create a form and copy the provided endpoint URL (`https://formspree.io/f/.....`).
3. Paste the endpoint into `academy.registrationEndpoint` in `src/data/site.js`.
4. Test on your deployed website with an email address you own; verify you receive all fields, including level and batch. Check the service response format and confirm any configured spam protections.
5. Publish your own privacy policy, explaining personal data collection, storage, retention, and contact channels. Configure spam protection or rate limiting as needed.

When the endpoint is set, the form sends JSON via `fetch()` and only displays success after an HTTP success response. **Submission is a request, not a confirmed class seat.** Actual class bookings and payments require further integration and verification.

## 5. Deploy for free on Cloudflare Pages

1. Create a GitHub repository named `japanese-learning-academy`.
2. Upload/push the **project source files** (not `node_modules` or `dist`) to the repository.
3. Log in at https://dash.cloudflare.com/ and open **Workers & Pages**.
4. Create a **Pages** project, connecting the GitHub repository.
5. Set the production branch to `main`.
6. Build command: `npm run build`.
7. Output directory: `dist`.
8. Deploy. Cloudflare will provide a free `*.pages.dev` website URL.
9. Push future code changes to GitHub to automatically redeploy.

Cloudflare Pages supports the `_redirects` file in `public/` for SPA routes such as `/courses/n5` and `/register`.

> `*.pages.dev` is a free hosted subdomain. Owning a custom `.com` or similar domain normally requires a separate domain registration fee. Hosting a website does not register a domain for you.

## 6. Project structure

```
├── public/_redirects           Cloudflare SPA fallback
├── src/data/site.js            Editable academy, course and timetable data
├── src/data/translations.js    English/Myanmar/Japanese interface strings
├── src/main.jsx                All page components, navigation and form
├── src/styles.css              Tailwind import and custom responsive design
├── index.html
├── package.json
└── vite.config.js
```

## 7. Before going public checklist

- [ ] Replace email, phone, location, and social media placeholders
- [ ] Verify all course facts, fees, dates, statuses, and teaching formats
- [ ] Add real academy description and instructor credentials
- [ ] Configure and thoroughly test the registration service
- [ ] Add privacy policy and any required student/parent consent processes
- [ ] Check mobile navigation and every page in all 3 languages
- [ ] Update SEO description and favicon / logo if desired

## Official documentation

- https://tailwindcss.com/docs/installation/using-vite
- https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/
- https://vite.dev/guide/static-deploy
