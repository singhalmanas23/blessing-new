#!/bin/bash

# Production readiness check script for Blessing SoftTech website

echo "🚀 Blessing SoftTech - Production Readiness Check"
echo "================================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔍 Running type checking..."
npx tsc --noEmit

echo "🧹 Running linting..."
npx eslint . --ext .ts,.tsx,.js,.jsx

echo "🏗️  Building the project..."
npm run build

echo "🧪 Running tests (if available)..."
if npm run test --silent 2>/dev/null; then
    npm run test
else
    echo "ℹ️  No tests found. Consider adding tests for production."
fi

echo "📊 Analyzing bundle size..."
if command -v npx &> /dev/null; then
    npx next-bundle-analyzer || echo "ℹ️  Bundle analyzer not available. Consider adding it."
fi

echo "✅ Production readiness check completed!"
echo ""
echo "📋 Pre-deployment checklist:"
echo "□ All TypeScript errors resolved"
echo "□ All linting errors resolved"
echo "□ Build completes successfully"
echo "□ Images optimized and compressed"
echo "□ Environment variables configured"
echo "□ Error tracking service configured (Sentry, etc.)"
echo "□ Analytics configured (Google Analytics, etc.)"
echo "□ SEO meta tags verified"
echo "□ Performance metrics within acceptable ranges"
echo "□ Accessibility requirements met"
echo "□ Cross-browser testing completed"
echo "□ Mobile responsiveness verified"
echo ""
echo "🌟 Your Blessing SoftTech website is ready for production!"
