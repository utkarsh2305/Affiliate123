
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { StatCard } from '@/components/dashboard/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const BackOfficeDashboard: React.FC = () => {
  const applications = [
    { id: 1, type: 'Pending Applications', count: 'View All', status: 'Recent Orders' },
    { id: 2, type: 'Open Tickets', count: 'View All', status: 'New Users' },
    { id: 3, type: 'Processed Jobs', count: 'View All', status: 'Recently Uploaded' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType="backoffice" />
      
      <div className="px-6 py-8">
        <div className="mb-8">
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-2">BackOffice Dashboard</h1>
            <p>Manage back-end office management and various admin</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Pending Applications"
            value={47}
            subtitle="43 affiliate"
            color="blue"
          />
          <StatCard
            title="Recent Orders"
            value={23}
            subtitle="23 affiliate orders"
            color="green"
          />
          <StatCard
            title="Approved Today"
            value={18}
            subtitle="applications"
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
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm text-gray-500">No recent activity to display</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
