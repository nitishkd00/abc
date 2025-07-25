import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user || !user.is_admin) {
    // Redirect non-admins to home
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
        <p className="mb-8 text-gray-700">Welcome, {user.username}! You have auctioneer privileges.</p>
        <div className="mb-6">
          <Link
            to="/create-auction"
            className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors font-semibold"
          >
            + Create New Auction
          </Link>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">All Auctions</h2>
          {/* In the future, list and manage all auctions here */}
          <p>Go to the Auctions page to view and manage all auctions.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 