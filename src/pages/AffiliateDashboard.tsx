
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

export const AffiliateDashboard: React.FC = () => {
  return (
    <DashboardLayout userType="affiliate">
      <div className="px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Affiliate Dashboard</h1>
          <p className="text-gray-600">Track your performance and manage your affiliate activities.</p>
        </div>

        {/* Notice Board */}
        <div className="mb-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <AlertCircle className="h-5 w-5 mr-2" />
                Commission Requirements Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-blue-700">
                <p className="font-medium mb-2">To earn commission, ensure the following requirements are met:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>The Retailer must be registered with your Affiliate ID</li>
                  <li>The order must include your Affiliate voucher code</li>
                  <li>The order amount must be at least ₦150,000</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Qualified Orders (MTD)"
            value={12}
            subtitle="Closed/completed orders this month"
            color="green"
          />
          <StatCard
            title="Projected Commission"
            value="₦245,000"
            subtitle="All order statuses"
            color="blue"
          />
          <StatCard
            title="Qualified Commission"
            value="₦180,000"
            subtitle="Qualified orders only"
            color="purple"
          />
          <StatCard
            title="Monthly Commission"
            value="₦156,750"
            subtitle="This month's earnings"
            color="green"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Complete/Closed Orders</span>
                  <span className="text-lg font-bold text-green-600">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Pending/Processing Orders</span>
                  <span className="text-lg font-bold text-yellow-600">8</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Active Retailers</span>
                  <span className="text-lg font-bold">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Average Order Value</span>
                  <span className="text-lg font-bold">₦185,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Conversion Rate</span>
                  <span className="text-lg font-bold text-green-600">12.5%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};
