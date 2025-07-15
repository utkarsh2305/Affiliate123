
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const BackOfficeDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleStatCardClick = (type: string) => {
    switch (type) {
      case 'pending':
        navigate('/backoffice/users?status=pending');
        break;
      case 'active':
        navigate('/backoffice/users?status=active');
        break;
      case 'total':
        navigate('/backoffice/users');
        break;
      default:
        break;
    }
  };

  return (
    <DashboardLayout userType="backoffice">
      <div className="px-6 py-8">
        <div className="mb-8">
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-2">BackOffice Dashboard</h1>
            <p>Manage back-end office management and various admin tasks</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div onClick={() => handleStatCardClick('pending')} className="cursor-pointer">
            <StatCard
              title="Pending Applications"
              value={47}
              subtitle="43 affiliate applications"
              color="blue"
            />
          </div>
          <div onClick={() => handleStatCardClick('active')} className="cursor-pointer">
            <StatCard
              title="Active Affiliates"
              value={156}
              subtitle="Currently active"
              color="green"
            />
          </div>
          <div onClick={() => handleStatCardClick('total')} className="cursor-pointer">
            <StatCard
              title="Total Applications"
              value={203}
              subtitle="All time applications"
              color="purple"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <div className="text-sm font-medium text-gray-900">New Applications</div>
                    <div className="text-xs text-gray-500">12 new affiliate applications</div>
                  </div>
                  <span className="text-xs text-blue-600">Today</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <div className="text-sm font-medium text-gray-900">System Updates</div>
                    <div className="text-xs text-gray-500">Platform maintenance completed</div>
                  </div>
                  <span className="text-xs text-green-600">Yesterday</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <div className="text-sm font-medium text-gray-900">User Activities</div>
                    <div className="text-xs text-gray-500">High user engagement recorded</div>
                  </div>
                  <span className="text-xs text-gray-600">2 days ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};
