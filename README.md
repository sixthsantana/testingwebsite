# Portfolio Website

A modern, responsive portfolio website showcasing computer science projects and photography work. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Photography Portfolio**: Filterable gallery with categories (Landscapes, Portraits, Street, Events)
- **CS Projects Showcase**: Interactive project cards with live demo and GitHub links
- **Professional Sections**: About, Skills, Education, Experience, and Contact
- **Modern UI**: Clean design with smooth animations and hover effects
- **Contact Form**: Functional contact form with validation

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **TanStack Query** for state management
- **Wouter** for lightweight routing
- **Framer Motion** for animations

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **PostgreSQL** database support
- **RESTful API** design

### Build Tools
- **Vite** for fast development and building
- **PostCSS** for CSS processing
- **ESBuild** for backend compilation

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5000`

## Project Structure

```
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   │   └── photography/   # Photography portfolio images
│   └── src/
│       ├── components/    # React components
│       ├── pages/         # Page components
│       ├── lib/           # Utility functions and data
│       └── hooks/         # Custom React hooks
├── server/                # Backend Express application
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage layer
│   └── index.ts          # Server entry point
├── shared/                # Shared types and schemas
└── images/               # Original photography images
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema changes

## Photography Portfolio

The photography section displays your personal photography work organized by categories:
- **Landscapes**: Nature and scenic photography
- **Portraits**: People and character studies  
- **Street**: Urban and architectural photography
- **Events**: Team photos and event coverage

To add your own photos:
1. Place images in the `images/` folder
2. Update the photo catalog in `client/src/lib/photo-catalog.ts`
3. Images will be automatically copied to `client/public/photography/`

## Customization

### Personal Information
Update your personal details in:
- `client/src/lib/portfolio-data.ts` - Static data
- `client/src/components/` - Individual section components

### Styling
- Colors: Edit CSS variables in `client/src/index.css`
- Components: Modify components in `client/src/components/`
- Responsive design: Tailwind CSS classes handle all breakpoints

### Content
- Projects: Update project data in the projects section
- Photography: Modify the photo catalog file
- About/Skills/Experience: Edit respective component files

## Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to GitHub Pages

### Vercel/Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist/` folder to your web server

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions!

- Email: your-email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]