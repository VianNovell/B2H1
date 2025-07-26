# Vercel Deployment Fix Guide

## Problem
The build is failing on Vercel due to Replit-specific dependencies and plugins that don't work outside the Replit environment.

## Solution

### 1. Update Environment Variables in Vercel Dashboard
In your Vercel project settings, add these environment variables:

```
NODE_ENV=production
REPL_ID=
DATABASE_URL=your_neon_database_url
RESEND_API_KEY=your_resend_api_key
```

### 2. Fix Build Command in Vercel
Go to your Vercel project settings > Build & Output Settings and set:

**Build Command:**
```bash
NODE_ENV=production REPL_ID= npm run build
```

**Output Directory:**
```
dist/public
```

**Install Command:**
```bash
npm install --production=false
```

### 3. Alternative: Create package.json Override
If the above doesn't work, create a temporary `package-vercel.json` file in your GitHub repo:

```json
{
  "name": "rest-express",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "build": "NODE_ENV=production vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js"
  }
}
```

Then in Vercel settings, use:
**Build Command:** `cp package-vercel.json package.json && npm install && npm run build`

### 4. Database Setup
Make sure your Neon database is accessible from Vercel and has the correct connection string in the environment variables.

### 5. Email Service
Add your Resend API key to Vercel environment variables for email functionality to work.

## Quick Fix Steps
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add all required environment variables (DATABASE_URL, RESEND_API_KEY, NODE_ENV=production, REPL_ID=)
3. Go to Build & Output Settings
4. Set Build Command: `NODE_ENV=production REPL_ID= npm run build`
5. Redeploy from GitHub

## Current vercel.json Configuration
The vercel.json file has been updated to properly handle the Express server and static files routing.

## Expected Result
After these changes, Vercel should successfully build and deploy your Back 2 Health website with all functionality working.