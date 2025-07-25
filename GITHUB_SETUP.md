# GitHub Setup & VS Code Development Guide

## Step 1: Prepare Your Project for GitHub

### 1.1 Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: Back 2 Health healthcare website"
```

### 1.2 Create Repository on GitHub
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name it: `back2health-website`
4. Set to Private (recommended for business websites)
5. Don't initialize with README (you already have one)

### 1.3 Connect and Push to GitHub
```bash
git remote add origin https://github.com/yourusername/back2health-website.git
git branch -M main
git push -u origin main
```

## Step 2: Clone to Your Local Machine

### 2.1 Clone the Repository
```bash
git clone https://github.com/yourusername/back2health-website.git
cd back2health-website
```

### 2.2 Install Dependencies
```bash
npm install
```

## Step 3: Set Up Environment Variables Locally

### 3.1 Create Your Environment File
```bash
cp .env.example .env
```

### 3.2 Configure Your .env File

Open `.env` and add your actual credentials:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/back2health
# OR use your cloud database URL
# DATABASE_URL=postgresql://user:pass@hostname:5432/dbname

# Email Service Configuration
RESEND_API_KEY=re_your_actual_resend_api_key_here

# Application Configuration
NODE_ENV=development
PORT=5000
```

### 3.3 Get Your Resend API Key

1. Visit [resend.com](https://resend.com)
2. Sign up or log in
3. Go to "API Keys" section
4. Click "Create API Key"
5. Copy the key and paste into your `.env` file

## Step 4: Set Up Database

### Option A: Local PostgreSQL
```bash
# Install PostgreSQL (macOS)
brew install postgresql
brew services start postgresql

# Create database
createdb back2health

# Update .env with local connection
DATABASE_URL="postgresql://yourusername@localhost:5432/back2health"
```

### Option B: Cloud Database (Recommended)

**Neon (Free tier available):**
1. Go to [neon.tech](https://neon.tech)
2. Create account and new database
3. Copy connection string to your `.env`

**Supabase:**
1. Go to [supabase.com](https://supabase.com)
2. Create project
3. Get database URL from settings

## Step 5: Initialize Database Schema

```bash
npm run db:push
```

## Step 6: Test Email Functionality

### 6.1 Verify Resend Setup
1. Log into [resend.com](https://resend.com)
2. Add your domain (optional for testing)
3. Verify your API key is active

### 6.2 Test Email Sending
```bash
npm run dev
```
Then try booking an appointment to test email delivery.

## Step 7: VS Code Setup

### 7.1 Recommended Extensions
Install these VS Code extensions:

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **TypeScript Importer**
- **Prettier - Code formatter**
- **ESLint**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**

### 7.2 VS Code Settings
Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

### 7.3 Launch Configuration
Create `.vscode/launch.json` for debugging:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Program",
      "program": "${workspaceFolder}/server/index.ts",
      "request": "launch",
      "skipFiles": ["<node_internals>/**"],
      "type": "node",
      "runtimeArgs": ["-r", "tsx/cjs"]
    }
  ]
}
```

## Step 8: Development Workflow

### 8.1 Daily Development
```bash
# Pull latest changes
git pull origin main

# Start development server
npm run dev

# Make your changes...

# Commit and push changes
git add .
git commit -m "Add: new feature description"
git push origin main
```

### 8.2 Database Changes
```bash
# After modifying schema.ts
npm run db:push

# To view database in GUI
npm run db:studio
```

## Step 9: Production Deployment

### Option A: Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel
```

Add environment variables in Vercel dashboard:
- `DATABASE_URL`
- `RESEND_API_KEY`
- `NODE_ENV=production`

### Option B: Railway
```bash
npm install -g @railway/cli
railway login
railway link
railway up
```

Add environment variables in Railway dashboard.

## Troubleshooting

### Email Issues
- **Emails not sending**: Check RESEND_API_KEY is correct
- **Emails in spam**: Verify your domain in Resend
- **API errors**: Check Resend dashboard for quota/status

### Database Issues
- **Connection errors**: Verify DATABASE_URL format
- **Schema errors**: Run `npm run db:push` after changes
- **Local DB issues**: Ensure PostgreSQL service is running

### Development Issues
- **Port conflicts**: Change PORT in .env
- **Module errors**: Delete node_modules and run `npm install`
- **TypeScript errors**: Restart VS Code TypeScript service

## Security Checklist

- ✅ `.env` is in `.gitignore`
- ✅ Database URL uses strong password
- ✅ Resend API key is secure
- ✅ Repository is private (for business)
- ✅ Regular dependency updates
- ✅ Environment variables in production are secure

## Support

If you encounter issues:
1. Check this guide first
2. Review error logs in terminal
3. Check database connectivity
4. Verify API keys are valid
5. Consult the main README.md and DEPLOYMENT.md