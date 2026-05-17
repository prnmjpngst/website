#!/bin/bash

set -e

cd ~/document/website

echo "Pull latest changes..."
git pull

echo "Building Astro..."
npm run build > build.log 2>&1

echo "Deploying..."
rm -rf /var/www/landing-page/*
cp -r dist/* /var/www/landing-page/

echo "Deploy selesai"
