
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { StatCard } from '@/components/dashboard/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const BackOfficeDashboard: React.FC = () => {
  const applications = [
    { id: 1, type: 'Pending Applications', count: 'View All', status: 'New Registrations' },
    { id: 2, type: 'Open Tickets', count: 'View All', status: 'Support Requests' },
    { id: 3, type: 'System Updates', count: 'View All', status: 'Recently Updated' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType="backoffice" />
      
      <div className="px-6 py-8">
        <div className="mb-8">
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-2">BackOffice Dashboard</h1>
            <p>Manage back-end office management and various admin tasks</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Pending Applications"
            value={47}
            subtitle="43 affiliate applications"
            color="blue"
          />
          <StatCard
            title="Active Affiliates"
            value={156}
            subtitle="Currently active"
            color="green"
          />
          <StatCard
            title="Total Applications"
            value={203}
            subtitle="All time applications"
            color="purple"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Pending Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applications.map((app) => (
                  <div key={app.id} className="flex items-center justify-between py-2">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{app.type}</div>
                      <div className="text-xs text-gray-500">{app.status}</div>
                    </div>
                    <span className="text-xs text-blue-600 cursor-pointer hover:underline">
                      {app.count}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Total Users</span>
                  <span className="text-lg font-bold">1,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Active Sessions</span>
                  <span className="text-lg font-bold text-green-600">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">System Status</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">Online</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
