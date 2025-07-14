
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OrderTable } from '@/components/orders/OrderTable';

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
            color="yellow"
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
            <OrderTable />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};
