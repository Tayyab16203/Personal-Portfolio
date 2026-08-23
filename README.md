# Personal Portfolio

A modern, responsive personal portfolio website built with React and Vite.

## Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool and dev server
- **CSS3** — Custom styling with global styles

## Features

- Responsive design that works on all devices
- Hero section with personal introduction
- About section with background details
- Skills showcase with technology icons
- Portfolio/projects gallery
- Stats section highlighting achievements
- Contact section
- Smooth scroll-to-top functionality
- Clean, modern UI with dark theme

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Tayyab16203/Personal-Portfolio.git

# Navigate to the project
cd Personal-Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # React components
│   ├── About/
│   ├── Contact/
│   ├── Footer/
│   ├── GoToTop/
│   ├── Header/
│   ├── Hero/
│   ├── Portfolio/
│   ├── Skills/
│   └── Stats/
├── styles/          # Global CSS styles
├── App.jsx          # Main app component
└── main.jsx         # Entry point
```

## Deployment

This project can be easily deployed on [Vercel](https://vercel.com):

1. Push the repo to GitHub
2. Import the project on Vercel
3. Vercel auto-detects Vite and deploys — no extra config needed

## License

This project is open source and available for personal use.
