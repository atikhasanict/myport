# Atik's Portfolio Website

A modern portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Dark/Light mode toggle
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 📧 Contact form integration with Formspree
- 🚀 Built with Next.js 15
- 🎯 Tailwind CSS for styling
- 📦 Icons from Lucide React

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Service**: Formspree
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
myport/
├── app/
│   ├── page.jsx          # Main portfolio page
│   ├── layout.js         # Root layout
│   └── globals.css       # Global styles
├── next.jsx              # Legacy component (integrated into page.jsx)
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── next.config.js        # Next.js configuration
└── README.md             # This file
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Change Contact Form
Update the `FORM_ENDPOINT` in [app/page.jsx](app/page.jsx) with your Formspree form ID.

### Modify Projects
Edit the `projects` array in [app/page.jsx](app/page.jsx) to add or change project information.

### Customize Styling
- Modify Tailwind classes in component files
- Update [tailwind.config.js](tailwind.config.js) for theme customization
- Edit [app/globals.css](app/globals.css) for global styles

## Deployment

Deploy easily with Vercel:

```bash
npm run build
npm start
```

Or push to GitHub and connect to Vercel for automatic deployments.

## License

This project is open source and available under the MIT License.
