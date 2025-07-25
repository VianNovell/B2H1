# Back 2 Health - Deployment Guide

## Local Development Setup

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- Resend API account for email functionality

### Environment Variables Setup

1. **Copy the environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Configure your environment variables in `.env`:**

   **Database Configuration:**
   - `DATABASE_URL`: Your PostgreSQL connection string
   - Alternative PostgreSQL variables (if not using DATABASE_URL):
     - `PGHOST`: Database host
     - `PGPORT`: Database port (usually 5432)
     - `PGUSER`: Database username
     - `PGPASSWORD`: Database password
     - `PGDATABASE`: Database name

   **Email Configuration:**
   - `RESEND_API_KEY`: Get this from [Resend.com](https://resend.com)
     1. Sign up at resend.com
     2. Go to API Keys section
     3. Create a new API key
     4. Copy and paste it into your .env file

### Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up the database:**
   ```bash
   npm run db:push
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

## Production Deployment

### Option 1: Vercel (Recommended for this stack)

1. **Deploy to Vercel:**
   ```bash
   npx vercel
   ```

2. **Add environment variables in Vercel dashboard:**
   - Go to your project settings
   - Navigate to Environment Variables
   - Add all variables from your .env file

### Option 2: Railway

1. **Deploy to Railway:**
   ```bash
   npx @railway/cli deploy
   ```

2. **Add environment variables in Railway dashboard**

### Option 3: Heroku

1. **Create Heroku app:**
   ```bash
   heroku create your-app-name
   ```

2. **Add environment variables:**
   ```bash
   heroku config:set DATABASE_URL="your_database_url"
   heroku config:set RESEND_API_KEY="your_resend_key"
   ```

3. **Deploy:**
   ```bash
   git push heroku main
   ```

## Email Service Setup (Resend)

### Why Resend?
- Reliable email delivery
- Simple API
- Free tier available
- Better deliverability than Gmail SMTP

### Setup Steps:
1. Visit [resend.com](https://resend.com)
2. Create an account
3. Verify your domain (or use their test domain for development)
4. Generate an API key
5. Add the API key to your environment variables

### Email Features:
- Appointment confirmation emails to patients
- Admin notifications for new bookings
- Contact form notifications

## Database Setup

### Local PostgreSQL:
```bash
# Install PostgreSQL (macOS)
brew install postgresql
brew services start postgresql

# Create database
createdb back2health

# Update .env with local connection
DATABASE_URL="postgresql://username:password@localhost:5432/back2health"
```

### Cloud Database Options:
- **Neon**: Serverless PostgreSQL (Free tier available)
- **Supabase**: PostgreSQL with additional features
- **Railway**: PostgreSQL hosting
- **Heroku Postgres**: Add-on for Heroku deployments

## Security Notes

- Never commit `.env` files to GitHub
- Use strong, unique API keys
- Regularly rotate API keys
- Use HTTPS in production
- Validate all form inputs (already implemented)

## Troubleshooting

### Email not working:
1. Check RESEND_API_KEY is correctly set
2. Verify domain is properly configured in Resend
3. Check spam folder for test emails
4. Review server logs for email errors

### Database connection issues:
1. Verify DATABASE_URL format
2. Check database server is running
3. Confirm network connectivity
4. Run `npm run db:push` to sync schema

### Build errors:
1. Clear node_modules: `rm -rf node_modules && npm install`
2. Check Node.js version compatibility
3. Verify all environment variables are set