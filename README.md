# 🐟 Pulasa Auction System

A **centralized real-time auction platform** for rare fish (Pulasa) with INR payments via Razorpay. Built with React, Node.js, Express, MySQL, and Socket.IO for live bidding updates.

## ✨ Features

### 🏛️ **Centralized Auction System**
- **No blockchain complexity** - Simple and fast transactions
- **Real-time bidding** with Socket.IO
- **Automatic refunds** for outbid users
- **Platform fees** (₹2-₹5 per bid)
- **Admin auction management**

### 💳 **Payment Integration**
- **Razorpay integration** for INR payments
- **Secure payment processing**
- **Automatic refund handling**
- **Transaction history**

### 🔐 **User Management**
- **JWT authentication**
- **User registration & login**
- **Profile management**
- **Bid history tracking**

### ⚡ **Real-time Features**
- **Live bid updates**
- **Auction countdown timers**
- **Instant notifications**
- **Real-time auction status**

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Frontend│    │  Node.js Backend│    │   MySQL Database│
│                 │    │                 │    │                 │
│ • User Interface│◄──►│ • REST APIs     │◄──►│ • User Data     │
│ • Real-time UI  │    │ • Socket.IO     │    │ • Auction Data  │
│ • Payment UI    │    │ • Razorpay      │    │ • Bid History   │
│ • Admin Panel   │    │ • JWT Auth      │    │ • Transactions  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MySQL (v8.0+)
- Razorpay account

### 1. Clone & Setup
```bash
git clone <repository-url>
cd pulasa-auction
npm run setup
```

### 2. Database Setup
```sql
CREATE DATABASE pulasa_auction;
```

### 3. Environment Configuration

#### Backend (.env)
```env
# Server Configuration
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000

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
```

#### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_RAZORPAY_KEY_ID=rzp_test_your_razorpay_key_id
```

### 4. Install Dependencies
```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 5. Start the Application
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm start
```

## 📁 Project Structure

```
pulasa-auction/
├── server/                 # Backend API
│   ├── config/            # Database & config
│   ├── middleware/        # Auth middleware
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   └── index.js           # Server entry
├── client/                # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── contexts/      # React contexts
│   │   ├── pages/         # Page components
│   │   └── App.js         # Main app
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Auctions
- `GET /api/auction` - Get all auctions
- `GET /api/auction/:id` - Get auction details
- `POST /api/auction/create` - Create auction (Admin)
- `POST /api/auction/:id/end` - End auction (Admin)

### Bidding
- `POST /api/bid/create-order` - Create bid order
- `POST /api/bid/verify-payment` - Verify payment & place bid
- `GET /api/bid/my-bids` - Get user's bids
- `GET /api/bid/auction/:id` - Get auction bids

## 💰 Payment Flow

1. **User places bid** → Creates Razorpay order
2. **Payment processed** → Razorpay handles payment
3. **Payment verified** → Bid placed in database
4. **Previous bidder refunded** → Automatic refund via Razorpay
5. **Real-time update** → All users notified via Socket.IO

## 🎯 Key Features Explained

### Centralized Auction Logic
- All auction logic handled in backend database
- No blockchain gas fees or complexity
- Fast transaction processing
- Easy to maintain and debug

### Real-time Bidding
- Socket.IO for instant updates
- Live bid notifications
- Auction countdown timers
- Real-time auction status

### Automatic Refunds
- Previous highest bidder automatically refunded
- Razorpay handles all payment processing
- Transparent transaction history
- No manual intervention needed

### Platform Fees
- 2% fee with minimum ₹2 and maximum ₹5
- Fees collected automatically
- Transparent fee structure
- Revenue generation for platform

## 🔒 Security Features

- **JWT authentication** for secure API access
- **Input validation** with express-validator
- **SQL injection protection** with parameterized queries
- **CORS configuration** for frontend-backend communication
- **Rate limiting** to prevent abuse
- **Helmet.js** for security headers

## 🎨 UI/UX Features

- **Responsive design** with Tailwind CSS
- **Modern interface** with clean aesthetics
- **Real-time updates** without page refresh
- **Loading states** and error handling
- **Mobile-friendly** design
- **Accessible** components

## 🚀 Deployment

### Backend Deployment
```bash
# Production build
cd server
npm install --production
NODE_ENV=production npm start
```

### Frontend Deployment
```bash
# Build for production
cd client
npm run build

# Serve static files
npx serve -s build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code comments

---

**Built with ❤️ for the Pulasa fish auction community** 