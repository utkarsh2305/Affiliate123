
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const AdminDashboard: React.FC = () => {
  return (
    <DashboardLayout userType="admin">
      <div className="px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Administrator Dashboard</h1>
          <p className="text-gray-600">Manage, track, and monitor all affiliates and performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          <StatCard
            title="Total Affiliates"
            value={136}
            subtitle="29% up from last month"
            color="blue"
          />
          <StatCard
            title="Total Orders"
            value={1247}
            subtitle="All affiliate orders"
            color="green"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>System Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Active Affiliates</span>
                  <span className="text-lg font-bold text-green-600">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Pending Applications</span>
                  <span className="text-lg font-bold text-yellow-600">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Total Retailers</span>
                  <span className="text-lg font-bold">156</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Platform Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Monthly Growth</span>
                  <span className="text-lg font-bold text-green-600">+15%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Order Completion Rate</span>
                  <span className="text-lg font-bold">94%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Average Order Value</span>
                  <span className="text-lg font-bold">₦185,000</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};
