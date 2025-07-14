
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const nigerianBanks = [
  'Access Bank',
  'First Bank of Nigeria',
  'Guaranty Trust Bank',
  'United Bank for Africa',
  'Zenith Bank',
  'Fidelity Bank',
  'Union Bank of Nigeria',
  'Sterling Bank',
  'Stanbic IBTC Bank',
  'Ecobank Nigeria'
];

export const AffiliateProfile: React.FC = () => {
  // Determine user type based on current route
  const currentPath = window.location.pathname;
  let userType: 'admin' | 'backoffice' | 'affiliate' = 'affiliate';
  
  if (currentPath.includes('/admin')) {
    userType = 'admin';
  } else if (currentPath.includes('/backoffice')) {
    userType = 'backoffice';
  }

  return (
    <DashboardLayout userType={userType}>
      <div className="px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile</h1>
          <p className="text-gray-600">Manage your personal and banking information.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value="John Adebayo Okoro"
                  readOnly
                  className="bg-gray-50"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  value="john.okoro@example.com"
                  readOnly
                  className="bg-gray-50"
                />
              </div>
              <div>
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  value="+234 801 234 5678"
                  readOnly
                  className="bg-gray-50"
                />
              </div>
              <div>
                <Label htmlFor="nin">NIN</Label>
                <Input
                  id="nin"
                  value="12345678901"
                  readOnly
                  className="bg-gray-50"
                />
              </div>
            </CardContent>
          </Card>

          {/* Banking Information */}
          <Card>
            <CardHeader>
              <CardTitle>Banking Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Bank Name</Label>
                <Select disabled>
                  <SelectTrigger className="bg-gray-50">
                    <SelectValue placeholder="First Bank of Nigeria" />
                  </SelectTrigger>
                  <SelectContent>
                    {nigerianBanks.map((bank) => (
                      <SelectItem key={bank} value={bank}>
                        {bank}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input
                  id="accountNumber"
                  value="0123456789"
                  readOnly
                  className="bg-gray-50"
                />
              </div>
              <div>
                <Label htmlFor="accountName">Account Name</Label>
                <Input
                  id="accountName"
                  value="John Adebayo Okoro"
                  readOnly
                  className="bg-gray-50"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};
