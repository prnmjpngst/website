#!/bin/bash

set -e

echo "Building website..."

if npm run build > build.log 2>&1; then
    echo "Build sukses"
else
    echo "Build gagal"
    tail -n 20 build.log
    exit 1
fi

echo "Deploying files..."
rm -rf /var/www/landing-page/*
cp -r dist/* /var/www/landing-page/

echo "Deploy selesai"
