# Portfolio Application

## Overview

This is a modern full-stack portfolio application built with React, Node.js, and PostgreSQL. The application showcases a personal portfolio for "Alex Johnson," a Computer Science student and photographer, featuring sections for projects, photography, skills, education, and experience. The frontend uses a modern React stack with shadcn/ui components and Tailwind CSS, while the backend provides RESTful APIs powered by Express.js and Drizzle ORM.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React-based SPA with modern tooling (Vite, TypeScript, Tailwind CSS)
- **Backend**: Express.js REST API with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Deployment**: Configured for Replit with autoscale deployment target

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite with React plugin and runtime error overlay

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured to use Neon serverless)
- **API Design**: RESTful endpoints for portfolio data
- **Development**: Hot reload with tsx for TypeScript execution

### Database Schema
The application uses a comprehensive schema for portfolio data:
- **users**: User authentication (username, password)
- **projects**: Portfolio projects with technologies, images, and links
- **photographyItems**: Photography portfolio with categories
- **skills**: Technical skills with proficiency levels
- **experiences**: Work experience entries
- **education**: Educational background

### UI/UX Design
- **Design System**: "New York" style from shadcn/ui
- **Color Scheme**: Custom portfolio color palette with CSS variables
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Navigation**: Smooth scrolling navigation with fixed header
- **Components**: Modular component architecture with consistent styling

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **API Layer**: Express.js routes handle requests and validate input
3. **Database Layer**: Drizzle ORM executes type-safe database queries
4. **Response**: JSON data returned to client and cached by TanStack Query
5. **UI Updates**: React components re-render with new data

The application currently uses static data in the frontend while the database infrastructure is in place for dynamic content management.

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS with PostCSS processing
- **Data Fetching**: TanStack Query for server state management
- **Routing**: Wouter for lightweight routing
- **Form Handling**: React Hook Form with Zod validation
- **Utilities**: clsx, class-variance-authority for conditional styling

### Backend Dependencies
- **Runtime**: Node.js with Express.js framework
- **Database**: Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build**: Vite for frontend, esbuild for backend
- **TypeScript**: Full TypeScript support across the stack
- **Linting/Formatting**: ESLint and Prettier configuration
- **Database Migrations**: Drizzle Kit for schema management

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

- **Environment**: Node.js 20, PostgreSQL 16 modules
- **Development**: `npm run dev` starts both frontend and backend
- **Production Build**: `npm run build` creates optimized bundles
- **Production Start**: `npm run start` serves the compiled application
- **Database**: Drizzle migrations with `npm run db:push`
- **Port Configuration**: Backend serves on port 5000, mapped to external port 80

The deployment uses an autoscale target for optimal performance and resource utilization.

## Changelog

```
Changelog:
- July 1, 2025. Updated photography section to use actual user photos from images folder
- July 1, 2025. Created photo catalog system for organizing photography portfolio
- July 1, 2025. Added GitHub deployment preparation with .gitignore and README.md
- July 1, 2025. Set up public folder structure for serving photography images
- June 25, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```