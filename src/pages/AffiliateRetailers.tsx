
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const retailers = [
  {
    id: 'RET-001',
    clusterManager: 'cluster.manager1@redcloud.com',
    businessName: 'ABC Electronics Store',
    contactPerson: 'John Okoro',
    location: 'Lagos, Nigeria',
    registrationDate: '2024-01-15',
    daysSinceLastOrder: 8
  },
  {
    id: 'RET-002',
    clusterManager: 'cluster.manager2@redcloud.com',
    businessName: 'Tech Solutions Ltd',
    contactPerson: 'Mary Adebayo',
    location: 'Abuja, Nigeria',
    registrationDate: '2024-01-10',
    daysSinceLastOrder: 12
  },
  {
    id: 'RET-003',
    clusterManager: 'cluster.manager3@redcloud.com',
    businessName: 'Digital Hub Enterprise',
    contactPerson: 'Ibrahim Hassan',
    location: 'Kano, Nigeria',
    registrationDate: '2024-01-08',
    daysSinceLastOrder: 5
  }
];

export const AffiliateRetailers: React.FC = () => {
  const getDaysSinceLastOrderColor = (days: number) => {
    if (days >= 10) {
      return 'text-red-600 font-semibold';
    }
    return 'text-gray-900';
  };

  return (
    <DashboardLayout userType="affiliate">
      <div className="px-6 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">My Retailers</h1>
            <p className="text-gray-600">Manage your registered retailers and track their performance.</p>
          </div>
          <Button className="mt-4 sm:mt-0">
            <Plus className="h-4 w-4 mr-2" />
            Add New Retailer
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Retailer Network</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium">Retailer ID</th>
                    <th className="text-left p-4 font-medium">Cluster Manager</th>
                    <th className="text-left p-4 font-medium">Business Name</th>
                    <th className="text-left p-4 font-medium">Contact Person</th>
                    <th className="text-left p-4 font-medium">Location</th>
                    <th className="text-left p-4 font-medium">Registration Date</th>
                    <th className="text-left p-4 font-medium">Days Since Last Order</th>
                  </tr>
                </thead>
                <tbody>
                  {retailers.map((retailer) => (
                    <tr key={retailer.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{retailer.id}</td>
                      <td className="p-4 text-sm">{retailer.clusterManager}</td>
                      <td className="p-4">{retailer.businessName}</td>
                      <td className="p-4">{retailer.contactPerson}</td>
                      <td className="p-4">{retailer.location}</td>
                      <td className="p-4">{retailer.registrationDate}</td>
                      <td className={`p-4 ${getDaysSinceLastOrderColor(retailer.daysSinceLastOrder)}`}>
                        {retailer.daysSinceLastOrder}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};
