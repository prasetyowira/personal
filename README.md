# Personal Portfolio Website

A modern, responsive personal portfolio website built with Astro and TailwindCSS. This project features a terminal-inspired UI with multilingual support (English and Japanese) and dark/light theme options.

## ✨ Features

- **Multi-language Support**: Complete English and Japanese localization
- **Terminal-inspired UI**: Command-line aesthetic with modern web design principles
- **Dynamic Content**: Content loaded from JSON data files for easy maintenance
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Dark/Light Mode**: Theme toggle with persistent preferences
- **Performance Optimized**: Fast page loads with minimal JavaScript
- **Project Showcase**: Detailed project pages with descriptions, key features, and technical challenges
- **SEO Friendly**: Meta tags and structured content for better search engine visibility

## 🚀 Tech Stack

- [Astro](https://astro.build/) - Static site generator with excellent performance
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vue.js](https://vuejs.org/) - For interactive components (used minimally)
- [Vercel](https://vercel.com/) - Deployment and hosting

## 📁 Project Structure

```text
/
├── public/              # Static assets (images, fonts)
├── src/
│   ├── assets/          # Project assets (processed during build)
│   ├── components/      # Reusable UI components
│   ├── content/         # Markdown content files
│   ├── data/            # JSON data files
│   │   ├── education.json   # Education history
│   │   ├── experience.json  # Work experience
│   │   ├── interests.json   # Personal interests
│   │   ├── projects.json    # Project showcase data
│   │   ├── skills.json      # Skills and competencies
│   │   └── tech-stack.json  # Current technology stack
│   ├── layouts/         # Page layout components
│   ├── pages/           # Page components and routes
│   │   ├── ja/          # Japanese localized pages
│   │   └── ...          # English pages (default)
│   ├── styles/          # Global styles and Tailwind config
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
│       └── i18n.ts      # Internationalization utilities
└── package.json         # Project dependencies
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 📝 Content Management

This site uses JSON data files located in `src/data/` for content management:

- Edit work experience, education, skills, etc. by modifying the appropriate JSON files
- Images and other assets can be placed in the `public/` directory
- Multilingual content uses separate keys for English and Japanese translations

## 🌐 Internationalization

The site supports English and Japanese languages:

- English content is the default
- Japanese content is available at `/ja/` routes
- Language switching is available in the UI
- Content is structured to support both languages with fallbacks

## 🚀 Deployment

This site is deployed on Vercel with continuous deployment from the main branch. Configuration settings can be found in `vercel.json`.

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
