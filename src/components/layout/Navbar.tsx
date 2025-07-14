
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, User, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  userType: 'admin' | 'backoffice' | 'affiliate';
  userName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ userType, userName = 'John Doe' }) => {
  const location = useLocation();
  
  const getNavItems = () => {
    switch (userType) {
      case 'admin':
        return [
          { label: 'Dashboard', path: '/admin' },
          { label: 'Manage Affiliates', path: '/admin/affiliates' },
          { label: 'Order Management', path: '/admin/orders' },
          { label: 'User Management', path: '/admin/users' }
        ];
      case 'backoffice':
        return [
          { label: 'Dashboard', path: '/backoffice' },
          { label: 'Manage Affiliates', path: '/backoffice/affiliates' }
        ];
      case 'affiliate':
        return [
          { label: 'Dashboard', path: '/affiliate' },
          { label: 'Retailers', path: '/affiliate/retailers' },
          { label: 'Orders', path: '/affiliate/orders' },
          { label: 'Profile', path: '/affiliate/profile' }
        ];
      default:
        return [];
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold text-red-600">
            Affiliate Tracker
          </div>
          <div className="hidden md:flex space-x-6">
            {getNavItems().map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">{userName}</span>
          </div>
          <Link to="/login">
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
