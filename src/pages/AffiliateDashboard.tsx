
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { StatCard } from '@/components/dashboard/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Notice } from '@/types/affiliate';

export const AffiliateDashboard: React.FC = () => {
  const progressData = [
    { label: 'Sales Target', progress: 70, color: 'bg-blue-500' },
    { label: 'Target Performance', progress: 45, color: 'bg-orange-500' },
    { label: 'FTD Target', progress: 60, color: 'bg-green-500' }
  ];

  const notices: Notice[] = [
    {
      id: '1',
      title: 'Commission Requirements',
      content: 'To earn commission, ensure: 1) Retailer is registered with your Affiliate ID, 2) Order includes your Affiliate voucher code, 3) Order amount is at least ₦150,000',
      type: 'info',
      date: '2024-01-15'
    },
    {
      id: '2',
      title: 'Monthly Milestone Achieved',
      content: 'Congratulations on achieving your monthly sales target!',
      type: 'success',
      date: '2024-01-14'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType="affiliate" />
      
      <div className="px-6 py-8">
        <div className="mb-8">
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-2">Welcome back, John Doe!</h1>
            <p>Affiliate ID (2019) | Singapore Legion</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Qualified Orders (MTD)"
            value={8}
            subtitle="Closed/completed orders"
            color="blue"
          />
          <StatCard
            title="Projected Commission"
            value="₦65,000"
            subtitle="All order statuses"
            color="green"
          />
          <StatCard
            title="Qualified Commission"
            value="₦45,000"
            subtitle="Qualified orders only"
            color="purple"
          />
          <StatCard
            title="Monthly Commission"
            value="₦33,000"
            subtitle="Current month"
            color="orange"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Monthly Milestones</CardTitle>
                <span className="text-sm text-gray-500">Track your monthly performance</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {progressData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="text-sm text-gray-500">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${item.color} h-2 rounded-full`} 
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Notice Board</CardTitle>
                <Button variant="link" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notices.map((notice) => (
                  <div key={notice.id} className={`p-3 rounded-lg ${
                    notice.type === 'info' ? 'bg-blue-50' :
                    notice.type === 'success' ? 'bg-green-50' : 'bg-yellow-50'
                  }`}>
                    <p className="text-sm font-medium">{notice.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{notice.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
                  <span className="text-lg font-bold text-green-600">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Pending/Processing Orders</span>
                  <span className="text-lg font-bold text-orange-600">7</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Total Revenue</span>
                  <span className="text-lg font-bold">₦1,850,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Conversion Rate</span>
                  <span className="text-lg font-bold text-blue-600">26%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
