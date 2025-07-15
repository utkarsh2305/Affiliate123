
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OrderTable } from '@/components/orders/OrderTable';
import { Order } from '@/types/affiliate';

// Mock data for orders
const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    orderDate: '2024-01-15',
    customerName: 'Alice Johnson',
    productName: 'Laptop Pro 15"',
    orderAmount: 450000,
    status: 'Completed',
    affiliate: 'John Doe'
  },
  {
    id: 'ORD-002',
    orderDate: '2024-01-14',
    customerName: 'Bob Wilson',
    productName: 'Smartphone X',
    orderAmount: 280000,
    status: 'Pending',
    affiliate: 'Jane Smith'
  },
  {
    id: 'ORD-003',
    orderDate: '2024-01-13',
    customerName: 'Carol Brown',
    productName: 'Tablet Air',
    orderAmount: 320000,
    status: 'Processing',
    affiliate: 'John Doe'
  }
];

export const OrderManagement: React.FC = () => {
  return (
    <DashboardLayout userType="admin">
      <div className="px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Management</h1>
          <p className="text-gray-600">Monitor and manage all orders across the platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Orders"
            value={1234}
            subtitle="All time orders"
            color="blue"
          />
          <StatCard
            title="Pending Orders"
            value={42}
            subtitle="Awaiting processing"
            color="orange"
          />
          <StatCard
            title="Completed Orders"
            value={1150}
            subtitle="Successfully fulfilled"
            color="green"
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <OrderTable orders={mockOrders} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};
