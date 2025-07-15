
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const orders = [
  {
    id: 'ORD-001',
    orderDate: '2024-01-15',
    orderValue: '₦275,000',
    fao: 'FAO1234',
    status: 'Completed',
    daysSinceOrder: 5
  },
  {
    id: 'ORD-002',
    orderDate: '2024-01-12',
    orderValue: '₦450,000',
    fao: 'FAO5678',
    status: 'Processing',
    daysSinceOrder: 8
  },
  {
    id: 'ORD-003',
    orderDate: '2024-01-10',
    orderValue: '₦320,000',
    fao: 'FAO9012',
    status: 'Completed',
    daysSinceOrder: 12
  }
];

export const AffiliateOrders: React.FC = () => {
  const getDaysSinceOrderColor = (days: number) => {
    if (days >= 10) {
      return 'text-red-600 font-semibold';
    }
    return 'text-gray-900';
  };

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
                    <th className="text-left p-4 font-medium">Order Date</th>
                    <th className="text-left p-4 font-medium">Order Value</th>
                    <th className="text-left p-4 font-medium">FAO</th>
                    <th className="text-left p-4 font-medium">Status</th>
                    <th className="text-left p-4 font-medium">Days Since Order</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{order.id}</td>
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
                      <td className={`p-4 ${getDaysSinceOrderColor(order.daysSinceOrder)}`}>
                        {order.daysSinceOrder}
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
