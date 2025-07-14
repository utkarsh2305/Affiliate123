
import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { OrderTable } from '@/components/orders/OrderTable';
import { StatCard } from '@/components/dashboard/StatCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Order } from '@/types/affiliate';

export const OrderManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const mockOrders: Order[] = [
    {
      id: 'ORD-20240101',
      orderDate: '01/01/2024',
      customerName: 'John Smith',
      productName: 'MacBook Pro 16"',
      orderAmount: 2500000,
      commissionAmount: 125000,
      status: 'Completed',
      affiliate: 'AFN30109'
    },
    {
      id: 'ORD-20240102',
      orderDate: '02/01/2024',
      customerName: 'Jane Doe',
      productName: 'iPhone 15 Pro',
      orderAmount: 1200000,
      commissionAmount: 60000,
      status: 'Pending',
      affiliate: 'AFN30110'
    },
    {
      id: 'ORD-20240103',
      orderDate: '03/01/2024',
      customerName: 'Mike Wilson',
      productName: 'Dell XPS 13',
      orderAmount: 1800000,
      commissionAmount: 90000,
      status: 'Completed',
      affiliate: 'AFN30111'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType="admin" />
      
      <div className="px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Management</h1>
          <p className="text-gray-600">Track and manage all affiliate orders</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Sales"
            value={4}
            subtitle="All-time sales"
            color="blue"
          />
          <StatCard
            title="Total Commission"
            value="₦2,685,000"
            subtitle="Total earnings"
            color="green"
          />
          <StatCard
            title="Monthly Earnings"
            value="₦275,000"
            subtitle="This month"
            color="purple"
          />
          <StatCard
            title="Weekly Earnings"
            value="₦14,400"
            subtitle="This week"
            color="orange"
          />
        </div>

        <div className="bg-white rounded-lg border p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-80"
              />
            </div>
            <div className="text-sm text-gray-500">All Orders ({mockOrders.length})</div>
          </div>

          <OrderTable orders={mockOrders} />
        </div>
      </div>
    </div>
  );
};
