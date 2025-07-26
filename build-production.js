import { execSync } from 'child_process';

// Set production environment
process.env.NODE_ENV = 'production';
process.env.REPL_ID = '';

console.log('Building for production deployment...');

try {
  // Build frontend
  console.log('Building frontend...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  // Build backend  
  console.log('Building backend...');
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });
  
  console.log('Production build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}