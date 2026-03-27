# Data Analyst Portfolio

A modern, single-page portfolio website built with Next.js and TypeScript to showcase data analytics projects, work experience, hackathon achievements, education, certifications, and technical skills.

## Live Portfolio

- Production: https://vaibhavsonidataanalystportfolio.vercel.app

## Highlights

- Responsive single-page layout with smooth section navigation.
- Sticky navbar with active section tracking and mobile menu.
- Hero section with profile, social links, and resume download.
- Experience timeline with role-wise impact points.
- Project showcase with category tabs:
	- Flagship
	- Notable
	- Exploratory
- Achievements gallery with hackathon highlights and photos.
- Education and certification section with academic metrics.
- Skill matrix with grouped proficiency bars and tool badges.
- Custom styled UI using CSS Modules and global design tokens.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- CSS Modules + global styles
- ESLint (Next.js config)

## Project Structure

```text
src/
	app/
		globals.css
		layout.tsx
		page.tsx
	components/
		Navbar.tsx
		Hero.tsx
		Experience.tsx
		Projects.tsx
		Achievements.tsx
		Education.tsx
		Skills.tsx
		Footer.tsx
public/
	Me.jpeg
	Vaibhav_Soni_DataAnalyst_Resume.pdf
	tiesummit.jpeg
	sphinxmnit.jpeg
	enigmariet.jpeg
	hackjklu.jpeg
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 3) Build for production

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` - Start local development server.
- `npm run build` - Build optimized production bundle.
- `npm run start` - Run production server.
- `npm run lint` - Run ESLint checks.

## Customize Content

- Update page composition in `src/app/page.tsx`.
- Edit each section in its component file under `src/components/`.
- Replace portfolio assets (profile photo, resume, achievement images) in `public/`.
- Update social/contact links in `src/components/Hero.tsx` and `src/components/Footer.tsx`.

## Notes

- `next.config.ts` uses `images.unoptimized: true` for simplified static image behavior.
- Resume file path currently used in multiple components:
	- `/Vaibhav_Soni_DataAnalyst_Resume.pdf`

## Deployment

The app is deployment-ready for Vercel.

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Deploy with default Next.js settings.

## Author

Vaibhav Soni

- GitHub: https://github.com/VaibhavSoni24
- LinkedIn: https://linkedin.com/in/vaibhav-soni-867836285
- Email: vaibhavsoni280506@gmail.com
