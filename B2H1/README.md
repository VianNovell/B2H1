# Back 2 Health - Professional Healthcare Website

A modern, responsive healthcare website for Back 2 Health clinic, designed to provide comprehensive medical service information and streamline patient engagement through interactive digital experiences.

## Features

- **Professional Healthcare Design**: Modern, responsive layout optimized for healthcare services
- **Appointment Booking System**: Integrated booking form with email confirmations
- **Service Information**: Comprehensive details on 7 core healthcare services
- **Doctor Profiles**: Professional bios with specializations and experience
- **Contact Management**: Form submissions with admin notifications
- **Email Integration**: Automatic confirmations via Resend API
- **Database Integration**: PostgreSQL with Drizzle ORM
- **Mobile Responsive**: Optimized for all device sizes

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Wouter** for routing
- **React Query** for state management
- **Vite** for build tooling

### Backend
- **Node.js** with Express
- **TypeScript** throughout
- **PostgreSQL** database
- **Drizzle ORM** for database operations
- **Resend** for email service
- **Zod** for validation

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd back2health
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your actual credentials
   ```

4. **Set up the database:**
   ```bash
   npm run db:push
   ```

5. **Start development server:**
   ```bash
   npm run dev
   ```

## 📖 Deployment Guide

**Deploying from Replit to GitHub?** Follow our comprehensive step-by-step guide:
**[GITHUB_DEPLOYMENT_GUIDE.md](./GITHUB_DEPLOYMENT_GUIDE.md)**

This guide includes:
- Setting up GitHub repository
- Configuring database (Neon.tech recommended)
- Environment variables setup
- Production deployment options (Vercel, Netlify, Railway)
   ```

Visit `http://localhost:5000` to see the application.

## Environment Variables

Required environment variables (see `.env.example`):

- `DATABASE_URL`: PostgreSQL connection string
- `RESEND_API_KEY`: Email service API key
- `NODE_ENV`: Application environment (development/production)

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   └── lib/            # Utilities and configurations
├── server/                 # Backend Express application
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Database operations
│   └── email.ts            # Email service
├── shared/                 # Shared TypeScript definitions
│   └── schema.ts           # Database schemas and validation
└── dist/                   # Compiled production assets
```

## Core Services

1. **Chiropractic Care**: Professional spinal adjustment and alignment
2. **Physiotherapy**: Rehabilitation and movement therapy
3. **Massage Therapy**: Therapeutic massage treatments
4. **PEMF Therapy**: Pulsed electromagnetic field therapy
5. **Qigong and Breathwork**: Mind-body wellness practices
6. **Diabetes & Weight Loss Programs**: Specialized health programs
7. **Corporate Wellness**: Workplace health solutions

## API Endpoints

- `POST /api/appointments` - Book new appointment
- `GET /api/appointments` - Retrieve appointments (admin)
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve contact submissions (admin)
- `POST /api/testimonials` - Submit testimonial
- `GET /api/testimonials` - Retrieve testimonials

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions including:
- Environment setup
- Database configuration
- Email service setup
- Platform-specific deployment guides

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open database management interface

### Code Style

- TypeScript throughout for type safety
- Tailwind CSS for consistent styling
- Component-based architecture
- Server-side form validation with Zod
- Responsive mobile-first design

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to Back 2 Health clinic.

## Support

For technical support or questions about deployment, please refer to the DEPLOYMENT.md guide or contact the development team.