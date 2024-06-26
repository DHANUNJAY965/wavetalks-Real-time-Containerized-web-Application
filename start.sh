#!/bin/sh

# Start the backend server
node server/dist/server.js &

# Start the frontend
npm run dev
 