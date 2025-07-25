#!/usr/bin/env node

/**
 * Deploy Setup Script for Vercel
 * This script creates a deployable version by removing Replit dependencies
 */

import fs from 'fs';
import path from 'path';

console.log('Setting up project for Vercel deployment...');

// Read the original package.json
const packageJsonPath = 'package.json';
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Create a deployment version without Replit dependencies
const deployPackageJson = {
  ...packageJson,
  devDependencies: {
    ...packageJson.devDependencies
  }
};

// Remove Replit-specific dependencies that cause build failures
delete deployPackageJson.devDependencies['@replit/vite-plugin-cartographer'];
delete deployPackageJson.devDependencies['@replit/vite-plugin-runtime-error-modal'];

// Update scripts for deployment
deployPackageJson.scripts = {
  ...packageJson.scripts,
  'build': 'NODE_ENV=production vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist',
  'start': 'NODE_ENV=production node dist/index.js'
};

// Write the deployment package.json
fs.writeFileSync('package.deploy.json', JSON.stringify(deployPackageJson, null, 2));

// Create a deployment vite config without Replit plugins
const viteConfigContent = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    }
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});`;

fs.writeFileSync('vite.config.deploy.ts', viteConfigContent);

console.log('✅ Created deployment configuration files');
console.log('📝 Next steps:');
console.log('1. Copy package.deploy.json content to package.json in your repo');
console.log('2. Copy vite.config.deploy.ts content to vite.config.ts in your repo');
console.log('3. Update vercel.json with the new configuration');
console.log('4. Push changes to GitHub and redeploy');