#!/bin/bash

echo "🏥 Back 2 Health - Setup Script"
echo "================================"

# Check if .env exists
if [ ! -f .env ]; then
    echo "Creating .env file from template..."
    cp .env.example .env
    echo "✅ .env file created"
    echo ""
    echo "⚠️  IMPORTANT: Edit .env file with your actual credentials:"
    echo "   - DATABASE_URL (from neon.tech or supabase.com)"
    echo "   - RESEND_API_KEY (from resend.com)"
    echo ""
else
    echo "✅ .env file already exists"
fi

# Install dependencies
echo "Installing dependencies..."
npm install

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env with your actual API keys"
echo "2. Run: npm run db:push"
echo "3. Run: npm run dev"
echo ""
echo "For deployment help, see: GITHUB_DEPLOYMENT_GUIDE.md"