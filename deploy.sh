#!/bin/bash

# 🚀 SmarterBOT.store - Quick Deployment Script
# This script helps you deploy to Dokploy quickly

set -e

echo "🚀 SmarterBOT.store Deployment Helper"
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if git is initialized
if [ ! -d .git ]; then
    print_error "Git repository not initialized!"
    exit 1
fi

print_info "Checking repository status..."

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    print_warning "You have uncommitted changes!"
    echo ""
    git status --short
    echo ""
    read -p "Do you want to commit these changes? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter commit message: " commit_msg
        git add .
        git commit -m "$commit_msg"
        print_success "Changes committed"
    else
        print_info "Skipping commit"
    fi
fi

# Check for remote
remote_url=$(git remote get-url origin 2>/dev/null || echo "")

if [ -z "$remote_url" ]; then
    print_warning "No git remote configured!"
    echo ""
    echo "Please create a repository on GitHub/GitLab and run:"
    echo ""
    echo "  git remote add origin <your-repo-url>"
    echo "  git push -u origin main"
    echo ""
    exit 1
fi

print_info "Remote repository: $remote_url"

# Get current branch
current_branch=$(git branch --show-current)
print_info "Current branch: $current_branch"

# Push to remote
echo ""
read -p "Push to remote? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_info "Pushing to $current_branch..."
    git push origin "$current_branch"
    print_success "Code pushed successfully!"
    echo ""
    print_info "Next steps:"
    echo "  1. Go to your Dokploy dashboard"
    echo "  2. Create or update your application"
    echo "  3. Connect to repository: $remote_url"
    echo "  4. Deploy!"
    echo ""
    print_success "Deployment ready! 🎉"
else
    print_info "Skipping push"
fi

# Test Docker build locally (optional)
echo ""
read -p "Would you like to test Docker build locally? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_info "Building Docker image..."
    docker build -t smarterbot-store:test .
    print_success "Docker build successful!"
    echo ""
    read -p "Run container locally on port 8080? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_info "Starting container..."
        docker run -d -p 8080:80 --name smarterbot-test smarterbot-store:test
        print_success "Container running!"
        echo ""
        print_info "Visit: http://localhost:8080"
        echo ""
        echo "To stop: docker stop smarterbot-test"
        echo "To remove: docker rm smarterbot-test"
    fi
fi

echo ""
print_success "All done! 🚀"
