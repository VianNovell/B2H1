# Vercel Deployment Guide for Back 2 Health

## Overview
This guide explains how to deploy the Back 2 Health website to Vercel with all dependencies and configurations properly set up.

## Key Fixes Applied

### 1. Missing Build Dependencies
- Moved essential build tools from devDependencies to dependencies
- Installed: `vite`, `esbuild`, `typescript`, `@vitejs/plugin-react`, `tailwindcss`, `autoprefixer`, `postcss`, etc.

### 2. Replit Plugin Compatibility
- Created `vite.config.prod.ts` - production config without Replit plugins
- Created `scripts/build-vercel.js` - custom build script for Vercel
- Environment variables set to disable Replit-specific features during build

### 3. Vercel Configuration
- Updated `vercel.json` with proper build commands and routing
- Set environment variables to ensure production build

## Environment Variables Required

Set these in your Vercel dashboard:

```
DATABASE_URL=your_neon_database_connection_string
RESEND_API_KEY=your_resend_api_key
NODE_ENV=production
```

## Build Process

The custom build script (`scripts/build-vercel.js`) performs:
1. Frontend build using `vite.config.prod.ts` (no Replit plugins)
2. Backend build using esbuild
3. Proper environment variable configuration

## Files Modified/Created

- `vercel.json` - Vercel deployment configuration
- `vite.config.prod.ts` - Production-only Vite config
- `scripts/build-vercel.js` - Custom build script
- `.env.example` - Environment variables template

## Deployment Steps

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Set the required environment variables in Vercel dashboard
4. Deploy - Vercel will automatically use the configurations

The build should now complete successfully without the "vite: command not found" error.