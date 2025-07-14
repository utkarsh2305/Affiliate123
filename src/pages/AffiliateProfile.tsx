
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export const AffiliateProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType="affiliate" />
      
      <div className="px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile</h1>
          <p className="text-gray-600">Manage your account information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" value="John Doe" readOnly className="bg-gray-50" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" value="john.doe@affiliate.com" readOnly className="bg-gray-50" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" value="+234 801 234 5678" readOnly className="bg-gray-50" />
              </div>
              <div>
                <Label htmlFor="affiliateId">Affiliate ID</Label>
                <Input id="affiliateId" value="AFN30109" readOnly className="bg-gray-50" />
              </div>
              <div>
                <Label htmlFor="registrationDate">Registration Date</Label>
                <Input id="registrationDate" value="15/06/2023" readOnly className="bg-gray-50" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Personal Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" value="123 Victoria Island, Lagos" readOnly className="bg-gray-50" />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" value="Lagos" readOnly className="bg-gray-50" />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" value="Lagos State" readOnly className="bg-gray-50" />
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input id="country" value="Nigeria" readOnly className="bg-gray-50" />
              </div>
              <div>
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input id="postalCode" value="101001" readOnly className="bg-gray-50" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Banking Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="bankName">Bank Name</Label>
                <Input id="bankName" value="First Bank of Nigeria" readOnly className="bg-gray-50" />
              </div>
              <div>
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input id="accountNumber" value="0123456789" readOnly className="bg-gray-50" />
              </div>
              <div>
                <Label htmlFor="accountName">Account Name</Label>
                <Input id="accountName" value="John Doe" readOnly className="bg-gray-50" />
              </div>
              <div>
                <Label htmlFor="routingNumber">Routing Number</Label>
                <Input id="routingNumber" value="011151003" readOnly className="bg-gray-50" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" placeholder="Enter current password" />
              </div>
              <div>
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" placeholder="Enter new password" />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
              </div>
              <Button className="w-full">Update Password</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
