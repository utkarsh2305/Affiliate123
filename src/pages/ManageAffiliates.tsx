
import React, { useState, useMemo } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Search } from 'lucide-react';
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
  },
  {
    id: 'AFF-003',
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    phone: '+234-555-123-4567',
    status: 'Inactive',
    registrationDate: '2024-01-10',
    totalEarnings: 120000,
    pendingCommission: 5000,
    clicks: 650,
    conversions: 35,
    conversionRate: 5.4
  }
];

export const ManageAffiliates: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Determine user type based on current route
  const currentPath = window.location.pathname;
  const userType = currentPath.includes('/admin') ? 'admin' : 'backoffice';

  // Filter and search affiliates
  const filteredAffiliates = useMemo(() => {
    return mockAffiliates.filter((affiliate) => {
      const matchesSearch = 
        affiliate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        affiliate.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        affiliate.name.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = statusFilter === 'all' || affiliate.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

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

        {/* Search and Filter Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Search & Filter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by email, phone number, or name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {(searchTerm || statusFilter !== 'all') && (
              <div className="mt-4 text-sm text-gray-600">
                Showing {filteredAffiliates.length} of {mockAffiliates.length} users
                {searchTerm && ` matching "${searchTerm}"`}
                {statusFilter !== 'all' && ` with status "${statusFilter}"`}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent>
            <AffiliateTable affiliates={filteredAffiliates} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};
