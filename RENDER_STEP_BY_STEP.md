# Step-by-Step Render Deployment Guide

## Step 1: Prepare Your Code

### Add Node.js Version to package.json
First, we need to specify the Node.js version. Add this to your package.json after the "license" field:

```json
"engines": {
  "node": "18.x"
}
```

### Commit and Push to GitHub
```bash
git add .
git commit -m "Configure for Render deployment"
git push origin main
```

## Step 2: Create Render Account

1. Go to https://render.com
2. Click "Get Started for Free"
3. Sign up with your GitHub account
4. Allow Render to access your repositories

## Step 3: Create PostgreSQL Database

1. In Render dashboard, click "New +"
2. Select "PostgreSQL"
3. Fill in details:
   - **Name**: `back2health-db`
   - **Database**: `back2health`
   - **User**: `back2health_user`
   - **Region**: Choose closest to your users
   - **Plan**: Free tier is fine for testing
4. Click "Create Database"
5. Wait for database to be created (2-3 minutes)
6. Copy the "External Database URL" - you'll need this

## Step 4: Create Web Service

1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Select your Back 2 Health repository
4. Configure the service:

### Basic Settings
- **Name**: `back2health-website`
- **Environment**: `Node`
- **Region**: Same as your database
- **Branch**: `main`
- **Root Directory**: Leave blank

### Build & Deploy Settings
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

### Advanced Settings
- **Auto-Deploy**: Yes (recommended)

## Step 5: Environment Variables

In the Environment Variables section, add these variables:

1. **NODE_ENV**
   - Value: `production`

2. **DATABASE_URL**
   - Value: [Paste the External Database URL from Step 3]

3. **RESEND_API_KEY**
   - Value: [Your Resend API key from Resend dashboard]

To get your Resend API key:
- Go to https://resend.com/api-keys
- Create a new API key if you don't have one
- Copy the key

## Step 6: Deploy

1. Click "Create Web Service"
2. Render will start building your application
3. Watch the build logs for any errors
4. Build process takes 3-5 minutes

## Step 7: Test Your Deployment

Once deployment completes:

1. Click the URL provided by Render (something like `https://back2health-website.onrender.com`)
2. Test the appointment booking form
3. Check if emails are being sent
4. Verify all pages load correctly

## Step 8: Custom Domain (Optional)

If you have a custom domain:

1. Go to your web service settings
2. Click "Custom Domains"
3. Add your domain
4. Update your DNS records as instructed
5. Render will automatically provision SSL certificate

## Troubleshooting Common Issues

### Build Fails
- Check build logs for specific errors
- Ensure all dependencies are in package.json
- Verify Node.js version is specified

### Database Connection Issues
- Double-check DATABASE_URL is correct
- Ensure database is in same region as web service
- Check database status in Render dashboard

### Email Not Working
- Verify RESEND_API_KEY is correct
- Check Resend dashboard for domain verification
- Review server logs for email errors

### App Won't Start
- Check start command is `npm start`
- Verify build completed successfully
- Review application logs

## Expected Results

After successful deployment:
- Website loads at your Render URL
- Appointment booking works
- Confirmation emails are sent
- Database stores appointments
- Professional healthcare website is live

## Monitoring

- View logs in Render dashboard
- Monitor performance metrics
- Set up health checks if needed
- Review email delivery in Resend dashboard

## Cost

- PostgreSQL database: Free tier available
- Web service: Free tier available (with limitations)
- Custom domain: Free
- SSL certificate: Free

Your website will be live and professional, perfect for your healthcare practice!