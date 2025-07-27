// Vercel serverless function entry point
import appHandler from '../dist/index.js';

export default async function handler(req, res) {
  console.log('🚀 [VERCEL-FUNCTION] Request received:', {
    method: req.method,
    url: req.url,
    path: req.path || req.url,
    query: req.query,
    hasBody: !!req.body
  });

  try {
    // Set CORS headers for all requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      console.log('🚀 [VERCEL-FUNCTION] Handling OPTIONS request');
      res.status(200).end();
      return;
    }

    console.log('🚀 [VERCEL-FUNCTION] Forwarding to Express app handler');
    const result = await appHandler(req, res);
    console.log('🚀 [VERCEL-FUNCTION] Express handler completed');
    return result;
  } catch (error) {
    console.error('❌ [VERCEL-FUNCTION] Handler error:', error);
    console.error('❌ [VERCEL-FUNCTION] Error stack:', error.stack);
    
    if (!res.headersSent) {
      res.status(500).json({ 
        error: 'Internal server error',
        message: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }
}