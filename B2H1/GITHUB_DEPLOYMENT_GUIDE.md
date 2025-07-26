# Complete GitHub Deployment Guide for Back 2 Health

## Step 1: Download Your Code from Replit

### Option A: Download as ZIP (Recommended)
1. In your Replit project, click the **3-dot menu** (⋮) in the top-left
2. Select **"Download as zip"**
3. Extract the ZIP file to a folder called `back2health-website`

### Option B: Copy Files Manually
1. Create a new folder on your computer: `back2health-website`
2. Copy all project files from Replit to this folder

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+" icon** → **"New repository"**
3. Repository settings:
   - **Repository name**: `back2health-website`
   - **Description**: `Professional healthcare website for Back 2 Health clinic`
   - **Visibility**: **Private** (recommended for business)
   - **Do NOT check**: Initialize with README, .gitignore, or license (you already have these)
4. Click **"Create repository"**

## Step 3: Set Up Git Locally

Open terminal/command prompt in your `back2health-website` folder:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Professional Back 2 Health healthcare website

- Complete React/TypeScript frontend with responsive design
- Express.js backend with PostgreSQL database integration
- 7 core healthcare services with detailed information  
- Professional doctor profiles and specializations
- Appointment booking system with email notifications
- Mobile-responsive design optimized for healthcare
- Comprehensive documentation and deployment guides"

# Connect to your GitHub repository (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/back2health-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Set Up Database (Choose One Option)

### Option A: Neon Database (Recommended - Free)
1. Go to [neon.tech](https://neon.tech)
2. Sign up with GitHub account
3. Create new project: "back2health-db"
4. Copy the connection string (starts with `postgresql://`)
5. Save it for Step 6

### Option B: Supabase (Alternative - Free)
1. Go to [supabase.com](https://supabase.com)
2. Sign up with GitHub account
3. Create new project: "back2health"
4. Go to Settings → Database
5. Copy the connection string
6. Save it for Step 6

### Option C: Local PostgreSQL
1. Install PostgreSQL on your computer
2. Create database: `back2health`
3. Connection string: `postgresql://username:password@localhost:5432/back2health`

## Step 5: Get Your Resend API Key

You already have this working! Just retrieve it:
1. Go to [resend.com](https://resend.com)
2. Sign in to your account
3. Go to API Keys section
4. Copy your existing API key (starts with `re_`)
5. Save it for Step 6

## Step 6: Set Up Environment Variables

In your project folder, create `.env` file:

```bash
# Copy the example file
cp .env.example .env
```

Edit `.env` with your actual values:
```env
DATABASE_URL=postgresql://your_neon_connection_string_here
RESEND_API_KEY=re_your_resend_api_key_here
```

## Step 7: Install Dependencies and Test

```bash
# Install all packages
npm install

# Set up database tables
npm run db:push

# Start development server
npm run dev
```

Visit `http://localhost:5000` to test your website locally.

## Step 8: Deploy to Production (Choose One)

### Option A: Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Click **"New Project"**
4. Import your `back2health-website` repository
5. Add environment variables:
   - `DATABASE_URL`: Your Neon connection string
   - `RESEND_API_KEY`: Your Resend API key
6. Click **"Deploy"**

### Option B: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `dist` folder after running `npm run build`
3. Add environment variables in site settings
4. Configure redirects for SPA routing

### Option C: Railway
1. Go to [railway.app](https://railway.app)
2. Connect GitHub repository
3. Add environment variables
4. Deploy automatically

## Step 9: Test Your Deployed Website

1. Visit your deployed URL
2. Test appointment booking with your email (viankamanzi5@gmail.com)
3. Check that emails are received
4. Verify all functionality works

## Troubleshooting

### Database Connection Issues:
```bash
# Test database connection
npm run db:push
```

### Email Not Working:
- Verify `RESEND_API_KEY` is correctly set
- Check Resend dashboard for delivery logs

### Build Errors:
```bash
# Clear dependencies and reinstall
rm -rf node_modules package-lock.json
npm install
```

## What You'll Have After Deployment:

✅ Professional healthcare website live on the internet  
✅ Custom domain support (optional)  
✅ SSL certificate (HTTPS) automatically  
✅ Email notifications working  
✅ Database storing appointments  
✅ Mobile-responsive design  
✅ SEO optimized  
✅ Professional branding  

## Next Steps After Deployment:

1. **Custom Domain**: Point your domain to the deployed site
2. **Analytics**: Add Google Analytics for visitor tracking
3. **Monitoring**: Set up uptime monitoring
4. **Backups**: Schedule database backups
5. **Content Updates**: Easily update via GitHub

## Need Help?

- Check the console logs for specific error messages
- Verify all environment variables are set correctly
- Test locally first before deploying to production

Your website is production-ready with professional email notifications and database functionality!