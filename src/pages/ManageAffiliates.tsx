
import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { AffiliateTable } from '@/components/affiliates/AffiliateTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search } from 'lucide-react';
import { Affiliate } from '@/types/affiliate';

export const ManageAffiliates: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const mockAffiliates: Affiliate[] = [
    {
      id: 'AFN30109',
      name: 'John Doe',
      email: 'john@affiliates.com',
      phone: '+234 802 123 4567',
      status: 'Active',
      registrationDate: '12/07/2023',
      totalEarnings: 125000,
      pendingCommission: 15000,
      clicks: 1500,
      conversions: 85,
      conversionRate: 5.67
    },
    {
      id: 'AFN30110',
      name: 'Sarah Wilson',
      email: 'sarah@affiliates.com',
      phone: '+234 803 765 4321',
      status: 'Pending',
      registrationDate: '15/07/2023',
      totalEarnings: 75000,
      pendingCommission: 8500,
      clicks: 980,
      conversions: 52,
      conversionRate: 5.31
    },
    {
      id: 'AFN30111',
      name: 'Mike Johnson',
      email: 'mike@affiliates.com',
      phone: '+234 804 567 8901',
      status: 'Inactive',
      registrationDate: '10/07/2023',
      totalEarnings: 95000,
      pendingCommission: 12000,
      clicks: 1200,
      conversions: 68,
      conversionRate: 5.67
    }
  ];

  const filteredAffiliates = mockAffiliates.filter(affiliate =>
    affiliate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    affiliate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    affiliate.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType="admin" />
      
      <div className="px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Manage Affiliates</h1>
          <p className="text-gray-600">Search for members to view and manage affiliates</p>
        </div>

        <div className="bg-white rounded-lg border p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name, email, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Affiliate
            </Button>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🏠 Managed Affiliates ({filteredAffiliates.length})
            </h3>
          </div>

          <AffiliateTable 
            affiliates={filteredAffiliates}
            onView={(affiliate) => console.log('View:', affiliate)}
            onEdit={(affiliate) => console.log('Edit:', affiliate)}
            onDelete={(affiliate) => console.log('Delete:', affiliate)}
          />
        </div>
      </div>
    </div>
  );
};
