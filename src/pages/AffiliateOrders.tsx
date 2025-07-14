
import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import { Order } from '@/types/affiliate';

export const AffiliateOrders: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const mockOrders: Order[] = [
    {
      id: 'ORD-20240101',
      orderDate: '01/01/2024',
      customerName: 'John Smith',
      productName: 'MacBook Pro 16"',
      orderAmount: 2500000,
      status: 'Completed',
      affiliate: 'AFN30109',
      retailerId: 'RET001',
      voucherCode: 'AFFCODE123'
    },
    {
      id: 'ORD-20240102',
      orderDate: '02/01/2024',
      customerName: 'Jane Doe',
      productName: 'iPhone 15 Pro',
      orderAmount: 1200000,
      status: 'Pending',
      affiliate: 'AFN30109',
      retailerId: 'RET002',
      voucherCode: 'AFFCODE123'
    },
    {
      id: 'ORD-20240103',
      orderDate: '03/01/2024',
      customerName: 'Mike Wilson',
      productName: 'Dell XPS 13',
      orderAmount: 1800000,
      status: 'Processing',
      affiliate: 'AFN30109',
      retailerId: 'RET001',
      voucherCode: 'AFFCODE123'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled':
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Orders</h1>
          <p className="text-gray-600">Track all your affiliate orders</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">30</div>
              <p className="text-sm text-gray-500">All time</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Complete/Closed Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">23</div>
              <p className="text-sm text-gray-500">Successfully completed</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pending/Processing Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">7</div>
              <p className="text-sm text-gray-500">In progress</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg border p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-80"
              />
            </div>
            <div className="text-sm text-gray-500">All Orders ({mockOrders.length})</div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Order Date</TableHead>
                  <TableHead>Customer Name</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Order Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Retailer ID</TableHead>
                  <TableHead>Voucher Code</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.orderDate}</TableCell>
                    <TableCell>{order.customerName}</TableCell>
                    <TableCell>{order.productName}</TableCell>
                    <TableCell>₦{order.orderAmount.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{order.retailerId}</TableCell>
                    <TableCell>{order.voucherCode}</TableCell>
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
