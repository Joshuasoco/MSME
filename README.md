# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # MSME Pathways — Web

    A concise, user-facing web frontend for MSME Pathways: a platform that helps micro-entrepreneurs and freelancers in the Philippines access loans using alternative data.

    **Status**: Production-ready frontend (React + TypeScript)

    **Tech stack**
    - React + TypeScript
    - Vite
    - Tailwind CSS
    - Framer Motion, lucide-react (icons)

    **Quick start (local)**

    1. Install dependencies:

    ```bash
    npm install
    ```

    2. Create local environment variables by copying `.env.example` to `.env` and filling values:

    ```bash
    cp .env.example .env
    # on Windows (PowerShell): Copy-Item .env.example .env
    ```

    Required environment variables (set locally or in your CI/CD provider):
    - `VITE_BOTPRESS_BOT_ID`
    - `VITE_BOTPRESS_CLIENT_ID`

    3. Start development server:

    ```bash
    npm run dev
    ```

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
