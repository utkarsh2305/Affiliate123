
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const orders = [
  {
    id: 'ORD-001',
    buyerName: 'Alice Johnson',
    orderDate: '2024-01-15',
    orderValue: '₦275,000',
    fao: 'Sarah Ahmed - +234-801-234-5678',
    status: 'Completed',
    daysSinceOrder: 5
  },
  {
    id: 'ORD-002',
    buyerName: 'Bob Wilson',
    orderDate: '2024-01-12',
    orderValue: '₦450,000',
    fao: 'Michael Chen - +234-802-345-6789',
    status: 'Processing',
    daysSinceOrder: 8
  },
  {
    id: 'ORD-003',
    buyerName: 'Carol Brown',
    orderDate: '2024-01-10',
    orderValue: '₦320,000',
    fao: 'David Okafor - +234-803-456-7890',
    status: 'Completed',
    daysSinceOrder: 12
  }
];

export const AffiliateOrders: React.FC = () => {

  return (
    <DashboardLayout userType="affiliate">
      <div className="px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">Track your order history and performance.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Order History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium">Order ID</th>
                    <th className="text-left p-4 font-medium">Buyer Name</th>
                    <th className="text-left p-4 font-medium">Order Date</th>
                    <th className="text-left p-4 font-medium">Order Value</th>
                    <th className="text-left p-4 font-medium">Order Assigned to</th>
                    <th className="text-left p-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{order.id}</td>
                      <td className="p-4">{order.buyerName}</td>
                      <td className="p-4">{order.orderDate}</td>
                      <td className="p-4">{order.orderValue}</td>
                      <td className="p-4 font-medium text-blue-600">{order.fao}</td>
                      <td className="p-4">
                        <Badge 
                          variant={order.status === 'Completed' ? 'default' : 'secondary'}
                          className={order.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                        >
                          {order.status}
                        </Badge>
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
