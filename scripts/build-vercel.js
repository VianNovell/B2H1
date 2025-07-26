#!/usr/bin/env node

// Build script specifically for Vercel deployment
// Uses production vite config without Replit plugins

import { spawn } from 'child_process';
import path from 'path';

async function build() {
  console.log('Building for Vercel deployment...');
  
  // Set environment for production build
  process.env.NODE_ENV = 'production';
  process.env.REPL_ID = '';
  
  try {
    // Build frontend with production vite config
    console.log('Building frontend...');
    await runCommand('npx', ['vite', 'build', '--config', 'vite.config.prod.ts']);
    
    // Build backend
    console.log('Building backend...');
    await runCommand('npx', ['esbuild', 'server/index.ts', '--platform=node', '--packages=external', '--bundle', '--format=esm', '--outdir=dist']);
    
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });
    
    child.on('error', (error) => {
      reject(error);
    });
  });
}

build();