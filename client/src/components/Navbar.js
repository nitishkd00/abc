import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useWallet } from '../contexts/WalletContext';
import { Fish, Menu, X, Wallet } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const { wallet } = useWallet();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Fish className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">Pulasa</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/auctions" className="text-gray-700 hover:text-primary-600 transition-colors">
              Auctions
            </Link>
            {user && user.is_admin && (
              <Link to="/admin" className="text-gray-700 hover:text-primary-600 transition-colors">
                Admin
              </Link>
            )}
            {user && !user.is_admin && (
              <>
                <Link to="/my-bids" className="text-gray-700 hover:text-primary-600 transition-colors">
                  My Bids
                </Link>
                <Link to="/wallet" className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors">
                  <Wallet className="h-4 w-4" />
                  <span>Wallet</span>
                  {wallet && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      ₹{wallet.available_balance?.toFixed(0) || '0'}
                    </span>
                  )}
                </Link>
              </>
            )}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="text-gray-700 hover:text-primary-600 transition-colors">
                  {user.username}
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              to="/auctions"
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Auctions
            </Link>
            {user && user.is_admin && (
              <Link
                to="/admin"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>
            )}
            {user && (
              <>
                <Link
                  to="/my-bids"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  My Bids
                </Link>
                <Link
                  to="/wallet"
                  className="flex items-center justify-between px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-center space-x-1">
                    <Wallet className="h-4 w-4" />
                    <span>Wallet</span>
                  </span>
                  {wallet && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      ₹{wallet.available_balance?.toFixed(0) || '0'}
                    </span>
                  )}
                </Link>
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  Logout
                </button>
              </>
            )}
            
            {!user && (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 