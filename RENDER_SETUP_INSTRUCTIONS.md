# Quick Render Setup Instructions

## Step 1: Add Node.js Version to package.json
Add this after the "license" field in package.json:
```json
"engines": {
  "node": "18.x"
}
```

## Step 2: Push to GitHub
Commit and push all files to your GitHub repository.

## Step 3: Create Render Account
1. Go to https://render.com
2. Sign up with GitHub
3. Connect your GitHub account

## Step 4: Deploy Web Service
1. Click "New +" → "Web Service"
2. Select your Back 2 Health repository
3. Use these settings:
   - **Name**: back2health-website
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

## Step 5: Add Environment Variables
In the Environment Variables section, add:
- `NODE_ENV` = `production`
- `RESEND_API_KEY` = `[your-resend-api-key]`

## Step 6: Create Database
1. Go to Dashboard → "New +" → "PostgreSQL"
2. Name: `back2health-db`
3. Plan: Starter (free)
4. Copy the Database URL

## Step 7: Connect Database
1. Go back to your web service
2. Add environment variable:
   - `DATABASE_URL` = `[copied-database-url]`

## Step 8: Deploy
Click "Deploy" and wait for deployment to complete.

Your website will be available at: `https://back2health-website.onrender.com`

## Environment Variables You'll Need:
- DATABASE_URL (from Render PostgreSQL)
- RESEND_API_KEY (from Resend dashboard)
- NODE_ENV=production

That's it! Much simpler than Vercel for Express.js applications.