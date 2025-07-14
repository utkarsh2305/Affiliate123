
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { StatCard } from '@/components/dashboard/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const AdminDashboard: React.FC = () => {
  const recentActivities = [
    { id: 1, text: 'New Affiliate Registered', time: 'View All' },
    { id: 2, text: 'Sales Management', time: 'View All' },
    { id: 3, text: 'User Reports', time: 'View All' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType="admin" />
      
      <div className="px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Administrator Dashboard</h1>
          <p className="text-gray-600">Manage, track, and monitor all affiliates and performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Affiliates"
            value={136}
            subtitle="29% up from last month"
            color="blue"
          />
          <StatCard
            title="Total Orders"
            value={23}
            subtitle="25 affiliate orders"
            color="green"
          />
          <StatCard
            title="Revenue"
            value="1,247"
            subtitle="Total affiliate revenue"
            color="purple"
          />
          <StatCard
            title="Commission Paid"
            value="₦890,000"
            subtitle="Current month"
            color="orange"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent System Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-700">{activity.text}</span>
                    <span className="text-xs text-blue-600 cursor-pointer hover:underline">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Affiliates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm text-gray-500">No affiliate specified at the moment</div>
                <div className="text-sm text-gray-500">Upgrade your account to add</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
