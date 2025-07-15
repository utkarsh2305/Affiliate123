
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { AffiliateTable } from '@/components/affiliates/AffiliateTable';
import { Affiliate } from '@/types/affiliate';

// Mock data for affiliates
const mockAffiliates: Affiliate[] = [
  {
    id: 'AFF-001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+234-123-456-7890',
    status: 'Active',
    registrationDate: '2024-01-15',
    totalEarnings: 250000,
    pendingCommission: 15000,
    clicks: 1250,
    conversions: 85,
    conversionRate: 6.8
  },
  {
    id: 'AFF-002',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+234-987-654-3210',
    status: 'Pending',
    registrationDate: '2024-01-20',
    totalEarnings: 180000,
    pendingCommission: 8500,
    clicks: 980,
    conversions: 62,
    conversionRate: 6.3
  }
];

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
            <AffiliateTable affiliates={mockAffiliates} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};
