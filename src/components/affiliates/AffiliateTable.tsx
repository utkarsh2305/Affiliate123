
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Edit, Trash2 } from 'lucide-react';
import { Affiliate } from '@/types/affiliate';

interface AffiliateTableProps {
  affiliates: Affiliate[];
  onView?: (affiliate: Affiliate) => void;
  onEdit?: (affiliate: Affiliate) => void;
  onDelete?: (affiliate: Affiliate) => void;
}

export const AffiliateTable: React.FC<AffiliateTableProps> = ({
  affiliates,
  onView,
  onEdit,
  onDelete
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Inactive':
        return 'bg-red-100 text-red-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Affiliate ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Contact Number</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Registration Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {affiliates.map((affiliate) => (
            <TableRow key={affiliate.id}>
              <TableCell className="font-medium">{affiliate.id}</TableCell>
              <TableCell>{affiliate.name}</TableCell>
              <TableCell>{affiliate.email}</TableCell>
              <TableCell>{affiliate.phone}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(affiliate.status)}>
                  {affiliate.status}
                </Badge>
              </TableCell>
              <TableCell>{affiliate.registrationDate}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onView?.(affiliate)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onEdit?.(affiliate)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDelete?.(affiliate)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
