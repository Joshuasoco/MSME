# MSME Pathways — Web Platform

A modern, user-focused web application designed to help micro-entrepreneurs and freelancers in the Philippines access financial services through innovative alternative data assessment. Built with React, TypeScript, and integrated AI-powered conversational assistance.

## Overview

MSME Pathways provides a streamlined digital platform that empowers small business owners and independent professionals to explore loan opportunities using alternative credit scoring methods. The platform features an intuitive interface, real-time assistance through an integrated chatbot, and comprehensive information about eligibility, benefits, and application processes.

## Key Features

- **Interactive Landing Page** — Comprehensive sections covering problem statements, solutions, features, and benefits
- **AI-Powered Chat Assistant** — Integrated Botpress chatbot for real-time user guidance and support
- **Eligibility Checker** — Clear information on qualification criteria and requirements
- **How It Works Guide** — Step-by-step breakdown of the application process
- **Testimonials & Social Proof** — Real user success stories and platform statistics
- **FAQ Section** — Frequently asked questions with expandable accordion interface
- **Responsive Design** — Fully optimized for desktop, tablet, and mobile devices
- **Performance Optimized** — Lazy loading, code splitting, and efficient asset management
- **Accessibility Focus** — Built with semantic HTML and ARIA attributes

## Technology Stack

### Core Framework
- **React 19** — Modern UI library with latest features
- **TypeScript** — Type-safe development environment
- **Vite** — Fast build tool and development server

### Styling & UI
- **Tailwind CSS** — Utility-first CSS framework
- **Framer Motion** — Animation library for smooth transitions
- **Radix UI** — Unstyled, accessible UI components
- **Lucide React** — Beautiful, consistent icon library

### Forms & Validation
- **React Hook Form** — Performant form management
- **Zod** — TypeScript-first schema validation
- **@hookform/resolvers** — Form validation integration

### Additional Tools
- **class-variance-authority** — Managing component variants
- **clsx** & **tailwind-merge** — Utility for conditional classes
- **ESLint** — Code quality and consistency

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.x or higher)
- **npm** (version 9.x or higher) or **yarn**
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   # Windows (PowerShell)
   Copy-Item .env.example .env

   # macOS/Linux
   cp .env.example .env
   ```

   Add the following environment variables:
   ```env
   VITE_BOTPRESS_BOT_ID=your_botpress_bot_id
   VITE_BOTPRESS_WEBCHAT_ID=your_webchat_id
   VITE_BOTPRESS_CLIENT_ID=your_client_id
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Code Quality

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
web/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, and other assets
│   ├── components/        # React components
│   │   ├── common/        # Reusable components
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   ├── sections/      # Page sections
│   │   └── ui/            # UI primitives (buttons, cards, etc.)
│   ├── lib/               # Utilities and constants
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── msme-chatbot/          # Botpress chatbot configuration
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## Key Components

### Layout Components
- **Navbar** — Responsive navigation with mobile menu
- **Footer** — Site footer with links and information
- **Section** — Reusable section wrapper component

### Page Sections
- **HeroSection** — Landing page hero with CTA
- **ProblemSection** — Problem statement and value proposition
- **FeaturesSection** — Platform features showcase
- **EligibilitySection** — Qualification criteria
- **HowItWorksSection** — Step-by-step process guide
- **BenefitsSection** — Key benefits overview
- **TestimonialsSection** — User testimonials
- **StatsSection** — Platform statistics and metrics
- **FAQSection** — Frequently asked questions
- **CTASection** — Call-to-action for conversions

### Common Components
- **BotpressChatWidget** — Integrated AI chatbot
- **AnimatedCounter** — Animated number counter
- **LoadingScreen** — Application loading state
- **ErrorBoundary** — Error handling wrapper
- **CookieConsent** — GDPR-compliant cookie notice

## Chatbot Integration

The platform includes an integrated Botpress chatbot for real-time user assistance. The chatbot configuration is located in the `msme-chatbot/` directory.

To set up the chatbot:
1. Configure your Botpress credentials in `.env`
2. The chatbot will automatically initialize on page load
3. Users can access it via the chat widget in the bottom-right corner

For detailed chatbot setup instructions, see [BOTPRESS_SETUP.md](BOTPRESS_SETUP.md).

## Performance Optimizations

- **Code Splitting** — Automatic route-based code splitting
- **Lazy Loading** — Below-the-fold sections load on demand
- **Image Optimization** — Optimized assets for faster loading
- **Tree Shaking** — Unused code elimination
- **Production Minification** — Compressed builds for production

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_BOTPRESS_BOT_ID` | Botpress bot identifier | Yes |
| `VITE_BOTPRESS_WEBCHAT_ID` | Webchat widget ID | Yes |
| `VITE_BOTPRESS_CLIENT_ID` | Botpress client ID | Yes |

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint code analysis |

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards
- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent code formatting
- Write descriptive commit messages
- Add comments for complex logic

## License

This project is proprietary and confidential.

## Support

For issues, questions, or feedback:
- Open an issue in the repository
- Contact the development team
- Check the [FAQ section](src/components/sections/FAQSection.tsx)

## Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [Vite](https://vitejs.dev/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

**Version:** 0.0.0  
**Status:** Production Ready  
**Last Updated:** February 2026

    4. Build for production:

    ```bash
    npm run build
    ```

    **Netlify deployment**
    - Netlify does not read local `.env` files. Add the environment variables in the Netlify site dashboard under "Environment variables" and then trigger a deploy (choose "Clear cache and deploy site" for a clean build).
    - Publish directory: `dist`

    **Common tasks**
    - `npm run dev` — start development server
    - `npm run build` — run TypeScript and produce production assets
    - `npm run preview` — preview production build locally

    **Contributing**
    - Create a branch: `git checkout -b feat/your-change`
    - Run lint/tests and open a PR against `main`

    **Contact**
    - Project owner: Joshua Soco
    - Repo: https://github.com/Joshuasoco/MSME

    ---

    If you'd like, I can also:
    - Add a Netlify deployment checklist
    - Add a GitHub Actions workflow to run `npm run build` on PRs
    - Expand Windows-specific setup notes
