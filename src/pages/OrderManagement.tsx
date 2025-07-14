
import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { StatCard } from '@/components/dashboard/StatCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Search, Upload, Trash2 } from 'lucide-react';
import { Order } from '@/types/affiliate';
import { useToast } from '@/hooks/use-toast';

export const OrderManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  
  const mockOrders: Order[] = [
    {
      id: 'ORD-20240101',
      orderDate: '01/01/2024',
      customerName: 'John Smith',
      productName: 'MacBook Pro 16"',
      orderAmount: 2500000,
      status: 'Completed',
      affiliate: 'AFN30109'
    },
    {
      id: 'ORD-20240102',
      orderDate: '02/01/2024',
      customerName: 'Jane Doe',
      productName: 'iPhone 15 Pro',
      orderAmount: 1200000,
      status: 'Pending',
      affiliate: 'AFN30110'
    },
    {
      id: 'ORD-20240103',
      orderDate: '03/01/2024',
      customerName: 'Mike Wilson',
      productName: 'Dell XPS 13',
      orderAmount: 1800000,
      status: 'Completed',
      affiliate: 'AFN30111'
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast({
        title: "File uploaded successfully",
        description: `Commission details from ${file.name} have been processed.`
      });
    }
  };

  const handleDelete = (orderId: string) => {
    toast({
      title: "Order deleted",
      description: `Order ${orderId} has been removed from the system.`
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType="admin" />
      
      <div className="px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Management</h1>
          <p className="text-gray-600">Track and manage all affiliate orders</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Orders"
            value={1247}
            subtitle="All-time orders"
            color="blue"
          />
          <StatCard
            title="Completed Orders"
            value={1089}
            subtitle="Successfully completed"
            color="green"
          />
          <StatCard
            title="Pending Orders"
            value={158}
            subtitle="Awaiting processing"
            color="orange"
          />
          <StatCard
            title="Total Revenue"
            value="₦12,450,000"
            subtitle="Platform revenue"
            color="purple"
          />
        </div>

        <div className="bg-white rounded-lg border p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  type="file"
                  accept=".xlsx,.csv"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="commission-upload"
                />
                <label htmlFor="commission-upload">
                  <Button variant="outline" className="cursor-pointer" asChild>
                    <span>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Commission Details
                    </span>
                  </Button>
                </label>
              </div>
              <div className="text-sm text-gray-500">All Orders ({mockOrders.length})</div>
            </div>
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
                  <TableHead>Affiliate</TableHead>
                  <TableHead>Actions</TableHead>
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
                    <TableCell>{order.affiliate}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(order.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
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
