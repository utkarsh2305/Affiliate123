
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { AffiliateTable } from '@/components/affiliates/AffiliateTable';

export const ManageAffiliates: React.FC = () => {
  // Determine user type based on current route
  const currentPath = window.location.pathname;
  const userType = currentPath.includes('/admin') ? 'admin' : 'backoffice';

  return (
    <DashboardLayout userType={userType}>
      <div className="px-6 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Manage Users</h1>
            <p className="text-gray-600">Manage affiliate and back office users in the system.</p>
          </div>
          <Button className="mt-4 sm:mt-0">
            <Plus className="h-4 w-4 mr-2" />
            Add New User
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent>
            <AffiliateTable />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};
