#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🐟 Setting up Pulasa Auction System (Centralized)...\n');

// Create server .env file
const serverEnvPath = path.join(__dirname, 'server', '.env');
const serverEnvContent = `# Server Configuration
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3001

# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=pulasa_auction

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random

# Razorpay Configuration
RAZORPAY_KEY_ID=rzp_test_your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_WEBHOOK_SECRET=your_razorpay_webhook_secret

# Optional: For production
# POLYGONSCAN_API_KEY=your_polygonscan_api_key
`;

if (!fs.existsSync(serverEnvPath)) {
  fs.writeFileSync(serverEnvPath, serverEnvContent);
  console.log('✅ Created server/.env file');
} else {
  console.log('⚠️  server/.env already exists');
}

// Create client .env file
const clientEnvPath = path.join(__dirname, 'client', '.env');
const clientEnvContent = `PORT=3001
REACT_APP_API_URL=http://localhost:5000
REACT_APP_RAZORPAY_KEY_ID=rzp_test_your_razorpay_key_id
`;

if (!fs.existsSync(clientEnvPath)) {
  fs.writeFileSync(clientEnvPath, clientEnvContent);
  console.log('✅ Created client/.env file');
} else {
  console.log('⚠️  client/.env already exists');
}

console.log('\n🎉 Setup complete!');
console.log('\n📋 Next steps:');
console.log('1. Update the .env files with your actual credentials');
console.log('2. Create MySQL database: CREATE DATABASE pulasa_auction;');
console.log('3. Install dependencies: npm run install-all');
console.log('4. Start the application: npm run dev');
console.log('\n🔧 Required credentials:');
console.log('- MySQL host, username, password');
console.log('- JWT secret (generate a random string)');
console.log('- Razorpay test keys (from Razorpay dashboard)');
console.log('\n📚 For more information, see README.md'); 