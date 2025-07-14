
import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import { Retailer } from '@/types/affiliate';

export const AffiliateRetailers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const mockRetailers: Retailer[] = [
    {
      id: 'RET001',
      name: 'Tech Store Lagos',
      email: 'contact@techstore.com',
      phone: '+234 801 234 5678',
      status: 'Active',
      registrationDate: '15/12/2023',
      affiliateId: 'AFN30109',
      daysSinceLastOrder: 3
    },
    {
      id: 'RET002',
      name: 'Electronics Hub',
      email: 'info@electronicshub.com',
      phone: '+234 802 345 6789',
      status: 'Active',
      registrationDate: '20/12/2023',
      affiliateId: 'AFN30109',
      daysSinceLastOrder: 15
    },
    {
      id: 'RET003',
      name: 'Digital World',
      email: 'sales@digitalworld.com',
      phone: '+234 803 456 7890',
      status: 'Inactive',
      registrationDate: '10/12/2023',
      affiliateId: 'AFN30109',
      daysSinceLastOrder: 45
    }
  ];

  const getDaysSinceOrderColor = (days: number) => {
    if (days <= 7) return 'text-green-600';
    if (days <= 14) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Inactive':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType="affiliate" />
      
      <div className="px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Retailers</h1>
          <p className="text-gray-600">Manage your registered retailers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Retailers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{mockRetailers.length}</div>
              <p className="text-sm text-gray-500">Registered retailers</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Active Retailers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {mockRetailers.filter(r => r.status === 'Active').length}
              </div>
              <p className="text-sm text-gray-500">Currently active</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">
                {mockRetailers.filter(r => r.daysSinceLastOrder <= 7).length}
              </div>
              <p className="text-sm text-gray-500">Within 7 days</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg border p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search retailers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-80"
              />
            </div>
            <div className="text-sm text-gray-500">All Retailers ({mockRetailers.length})</div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Retailer ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Registration Date</TableHead>
                  <TableHead>Days Since Last Order</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockRetailers.map((retailer) => (
                  <TableRow key={retailer.id}>
                    <TableCell className="font-medium">{retailer.id}</TableCell>
                    <TableCell>{retailer.name}</TableCell>
                    <TableCell>{retailer.email}</TableCell>
                    <TableCell>{retailer.phone}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(retailer.status)}>
                        {retailer.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{retailer.registrationDate}</TableCell>
                    <TableCell>
                      <span className={`font-medium ${getDaysSinceOrderColor(retailer.daysSinceLastOrder)}`}>
                        {retailer.daysSinceLastOrder} days
                        {retailer.daysSinceLastOrder > 14 && (
                          <span className="ml-2 px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                            Alert
                          </span>
                        )}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
