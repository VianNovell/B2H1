# Back 2 Health - Premium Holistic Wellness Center

## Overview

Back 2 Health is a world-class, professional healthcare website built with React, TypeScript, and Express.js. It serves as the premium digital presence for a specialist chiropractic and holistic healthcare clinic, featuring comprehensive service information, appointment booking, testimonials, FAQs, and a modern, responsive design that embodies wellness and healing.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state
- **Build Tool**: Vite for fast development and optimized builds
- **Component Library**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: In-memory storage with future database integration

### Design System
- **UI Framework**: shadcn/ui with "new-york" style
- **Theme**: Custom healthcare-focused color palette with wellness green (#4ade80) and blue (#2563eb)
- **Typography**: Inter font family
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Contact Submissions Table**: Form submissions with name, email, phone, service, message, and timestamp
- **Testimonials Table**: Patient reviews with name, service, content, rating, and timestamp
- **Appointments Table**: Appointment bookings with patient details, service, preferred date/time, and status
- **Schema Validation**: Zod schemas for type-safe data validation

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve contact submissions (admin)
- `POST /api/appointments` - Book appointment
- `GET /api/appointments` - Retrieve appointments (admin)
- `POST /api/testimonials` - Submit testimonial
- `GET /api/testimonials` - Retrieve testimonials

### Frontend Pages
- **Home Page**: Premium single-page application with sections:
  - Hero section with interactive slider and premium visuals
  - About section explaining collaborative care model
  - Services section showcasing 12 different treatments with professional images
  - Programs section (Individual, Group, Corporate wellness)
  - Conditions section highlighting treatable conditions
  - Testimonials section with patient reviews and trust indicators
  - Appointment booking section with comprehensive form
  - FAQ section with common questions and answers
  - Contact section with Google Maps integration and clinic information
  - Footer with enhanced social links and navigation

### UI Components
- Navigation with smooth scrolling
- Contact form with validation
- Service cards with icons and descriptions
- Responsive layout components
- Toast notifications for user feedback

## Data Flow

1. **User Interaction**: Users navigate the single-page website and interact with the contact form
2. **Form Submission**: Contact form data is validated client-side using Zod schemas
3. **API Request**: Form data is sent to the backend via POST request
4. **Server Processing**: Express server validates and stores contact submissions
5. **Database Storage**: Contact submissions are stored in PostgreSQL via Drizzle ORM
6. **Response Handling**: Success/error responses are displayed to users via toast notifications

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- UI Libraries (Radix UI primitives, Lucide React icons)
- Styling (Tailwind CSS, class-variance-authority)
- Utilities (date-fns, clsx, embla-carousel)

### Backend Dependencies
- Express.js for server framework
- Drizzle ORM for database operations
- Neon Database for serverless PostgreSQL
- Zod for runtime validation
- Development tools (tsx, esbuild)

### Development Tools
- Vite for build tooling
- TypeScript for type safety
- ESLint and Prettier (implicit)
- Replit-specific plugins for development environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: esbuild bundles Express server for production
3. **Database Migration**: Drizzle Kit handles schema migrations

### Environment Configuration
- **Development**: Uses tsx for hot reloading and development server
- **Production**: Compiled JavaScript with optimized assets
- **Database**: Requires `DATABASE_URL` environment variable

### File Structure
- `client/` - React frontend application
- `server/` - Express backend application
- `shared/` - Common TypeScript definitions and schemas
- `dist/` - Compiled production assets

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- July 25, 2025. 🆕 LATEST: Successfully migrated Back 2 Health website to local VS Code development environment
- July 25, 2025. Resolved queryClient.ts file loading issues and browser caching conflicts in local setup
- July 25, 2025. Fixed server configuration for macOS compatibility (removed host binding restrictions)
- July 25, 2025. Confirmed database connection and email system working in local environment
- July 25, 2025. Established proper development workflow using integrated Express + Vite server on port 5000
- July 24, 2025. 🚀 PREVIOUS: Prepared comprehensive GitHub deployment setup with complete documentation
- July 24, 2025. Created GITHUB_DEPLOYMENT_GUIDE.md with step-by-step instructions for database, email, and hosting setup
- July 24, 2025. Tested and confirmed email functionality working perfectly with Resend API (viankamanzi5@gmail.com)
- July 24, 2025. Created automated setup script (setup.sh) and deployment checklist for easy GitHub transition
- July 24, 2025. Verified appointment booking system with database integration and email confirmations
- July 23, 2025. 🚀 PREVIOUS: Successfully migrated project from Replit Agent to Replit environment
- July 23, 2025. Integrated professional Back 2 Health logo with spine design and blue color scheme
- July 23, 2025. Set up PostgreSQL database with secure connection and all healthcare tables
- July 23, 2025. Configured Resend email service for appointment confirmations and contact notifications
- July 23, 2025. Fixed all TypeScript compatibility issues and ensured clean deployment
- July 16, 2025. 🚀 PREVIOUS: Enhanced navigation with Services dropdown menu and improved UI
- July 16, 2025. Added hover-triggered dropdown under Services navigation with individual service listings
- July 16, 2025. Included "Book Now" option at bottom of Services dropdown menu
- July 16, 2025. Added "Learn More" buttons to all service cards that scroll to contact section
- July 16, 2025. Removed "Reviews" and "Book Now" from main navigation bar for cleaner layout
- July 16, 2025. Removed "Book Appointment" CTA button from top right corner of navigation
- July 16, 2025. Improved appointment booking section text visibility with better contrast
- July 16, 2025. Removed Google Maps from contact section per user preference
- July 04, 2025. 🚀 PREVIOUS: Comprehensive mobile responsiveness improvements across entire website
- July 04, 2025. Enhanced Programs section with mobile-first responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- July 04, 2025. Improved Hero section with mobile-optimized text sizes, spacing, and touch-friendly buttons
- July 04, 2025. Updated Contact section with responsive layout and mobile-friendly form elements
- July 04, 2025. Enhanced Navigation with responsive logo sizing and improved mobile menu
- July 04, 2025. Added mobile-specific CSS for better touch targets, preventing zoom, and smooth scrolling
- July 04, 2025. 🚀 PREVIOUS: Added full-width fullscreen background image slider to hero section
- July 04, 2025. Enhanced hero with 4 high-resolution wellness-themed background images
- July 04, 2025. Implemented smooth fade transitions with semi-transparent overlays for text readability
- July 04, 2025. Added responsive design with mobile-optimized controls and typography
- July 04, 2025. Integrated floating wellness cards and trust indicators directly in hero
- July 04, 2025. ✨ MAJOR UPGRADE: Transformed website to world-class professional standard
- July 04, 2025. Enhanced hero section with premium gradient backgrounds, animations, and holistic imagery
- July 04, 2025. Added comprehensive testimonials section with patient reviews and trust indicators
- July 04, 2025. Implemented full appointment booking system with database integration
- July 04, 2025. Created detailed FAQ section with common healthcare questions
- July 04, 2025. Upgraded navigation with enhanced styling and smooth scrolling
- July 04, 2025. Integrated Google Maps in contact section for clinic location
- July 04, 2025. Added PostgreSQL database with testimonials and appointments tables
- July 04, 2025. Enhanced SEO with comprehensive meta tags and structured data

## Changelog

Changelog:
- July 04, 2025. Initial setup