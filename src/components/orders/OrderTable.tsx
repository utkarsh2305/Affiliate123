
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Order } from '@/types/affiliate';

interface OrderTableProps {
  orders: Order[];
}

export const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
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
            <TableHead>FAO</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
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
              <TableCell className="font-medium text-blue-600">{order.fao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
