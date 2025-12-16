# EIX Mining & On-Chain Infrastructure

## Overview

This is a full-stack web application for EthicX (EIX), a blockchain token deployment platform. The application serves as a contributor hiring and project documentation portal, featuring an earnings calculator, FAQ section, contributor agreement forms, and market comparison information. The platform positions itself as a low-cost alternative to competitors in the token deployment space.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite with custom plugins for Replit integration

The frontend follows a component-based architecture with pages in `client/src/pages/` and reusable components in `client/src/components/`. The UI component library is shadcn/ui (new-york style) with extensive Radix UI primitives.

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: Node.js with HTTP server
- **Development**: tsx for TypeScript execution, Vite dev server for HMR

The backend is minimal, primarily serving the static frontend in production. Routes are registered in `server/routes.ts` with an in-memory storage implementation in `server/storage.ts`.

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` with users table
- **Current State**: Uses in-memory storage (`MemStorage`) class, PostgreSQL can be provisioned when needed
- **Migrations**: Drizzle Kit with output to `./migrations`

### Build System
- **Client**: Vite builds to `dist/public`
- **Server**: esbuild bundles server code to `dist/index.cjs`
- **Scripts**: Custom build script in `script/build.ts` handles both client and server builds

### Development vs Production
- Development: Vite dev server with HMR, served through Express middleware
- Production: Static file serving from `dist/public` with Express

## External Dependencies

### Database
- PostgreSQL (via `DATABASE_URL` environment variable)
- Drizzle ORM for database operations
- connect-pg-simple for session storage (available but not currently active)

### UI Framework
- shadcn/ui components with Radix UI primitives
- Tailwind CSS v4 with CSS variables theming
- Lucide React for icons
- Class Variance Authority for component variants

### Third-Party Services
- No external APIs currently integrated
- Replit-specific plugins for development (cartographer, dev-banner, runtime-error-modal)

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `drizzle-orm` / `drizzle-zod`: Database ORM and validation
- `zod`: Schema validation
- `wouter`: Client-side routing
- `date-fns`: Date utilities
- `embla-carousel-react`: Carousel component