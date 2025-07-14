
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { StatCard } from '@/components/dashboard/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const AffiliateDashboard: React.FC = () => {
  const progressData = [
    { label: 'Sales Target', progress: 70, color: 'bg-blue-500' },
    { label: 'Target Performance', progress: 45, color: 'bg-orange-500' },
    { label: 'FTD Target', progress: 60, color: 'bg-green-500' }
  ];

  const recentOrders = [
    { customer: 'Mike John', product: 'Laptop', status: 'processing', amount: '₦850,000' },
    { customer: 'Sarah Wilson', product: 'Smartphone', status: 'completed', amount: '₦250,000' }
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
            title="Total Revenue"
            value={12}
            subtitle="+ 8% last 30 days"
            color="blue"
          />
          <StatCard
            title="Conversion"
            value="26%"
            subtitle="Order completion rate"
            color="green"
          />
          <StatCard
            title="Total Commission"
            value="₦45,000"
            subtitle="This month earned"
            color="purple"
          />
          <StatCard
            title="Pending Commission"
            value="₦33,000"
            subtitle="Waiting for payment"
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
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium">New Commission Structure Update</p>
                  <p className="text-xs text-gray-500 mt-1">Updated commission rates effective...</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm font-medium">Monthly Milestone Achieved</p>
                  <p className="text-xs text-gray-500 mt-1">Congratulations on achieving...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-sm text-gray-500">{order.product}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
