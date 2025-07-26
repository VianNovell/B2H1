#!/bin/bash

echo "🚀 Starting basic Vercel build process..."

# Install dependencies
echo "🔨 Running npm install..."
npm install

# Build frontend only (simplified)
echo "🔨 Running frontend build..."
vite build

echo "🎉 Basic build completed successfully!"