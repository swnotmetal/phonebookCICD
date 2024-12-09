#!/bin/bash
echo "Starting build process..."

# Install backend dependencies
npm install

cd client
npm install
npm run build


cp -r dist ..

echo "Build completed successfully!"
