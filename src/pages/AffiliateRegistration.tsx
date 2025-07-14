
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import { Upload } from 'lucide-react';

export const AffiliateRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    ninOrBvn: '',
    bankName: '',
    accountNumber: '',
    selfieUpload: null as File | null,
    acceptTerms: false
  });

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
    'Ecobank Nigeria',
    'FCMB',
    'Heritage Bank',
    'Keystone Bank',
    'Polaris Bank',
    'Providus Bank',
    'Unity Bank',
    'Wema Bank'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBankSelect = (value: string) => {
    setFormData({
      ...formData,
      bankName: value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      selfieUpload: file
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', formData);
  };

  const sendOTP = () => {
    console.log('Sending OTP to:', formData.mobileNumber);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-8">
      {/* Logo */}
      <div className="mb-8">
        <img 
          src="/lovable-uploads/6b8381fd-9da9-481c-ac8f-d5de29277627.png" 
          alt="RedCloud Logo" 
          className="h-12 w-auto"
        />
      </div>

      <div className="w-full max-w-md">
        <Card className="border-blue-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-blue-900">Affiliate Registration</CardTitle>
            <p className="text-blue-600">Join the RedCloud affiliate network and start earning commissions</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-blue-800">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="border-blue-200 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-blue-800">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="border-blue-200 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="mobileNumber" className="text-blue-800">Mobile Number *</Label>
                <div className="flex space-x-2">
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="+234 800 123 4567"
                    className="border-blue-200 focus:border-blue-500 flex-1"
                    required
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={sendOTP}
                    className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    Send OTP
                  </Button>
                </div>
                <p className="text-xs text-blue-600 mt-1">Note: The mobile number must be registered with WhatsApp</p>
              </div>

              <div>
                <Label htmlFor="ninOrBvn" className="text-blue-800">NIN or BVN *</Label>
                <Input
                  id="ninOrBvn"
                  name="ninOrBvn"
                  value={formData.ninOrBvn}
                  onChange={handleInputChange}
                  placeholder="Enter your NIN or BVN"
                  className="border-blue-200 focus:border-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-blue-800">Bank Name</Label>
                  <Select onValueChange={handleBankSelect}>
                    <SelectTrigger className="border-blue-200 focus:border-blue-500">
                      <SelectValue placeholder="Select your bank" />
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
                  <Label htmlFor="accountNumber" className="text-blue-800">Account Number</Label>
                  <Input
                    id="accountNumber"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    placeholder="Enter account number"
                    className="border-blue-200 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="text-blue-800">Upload Selfie *</Label>
                <div className="border-2 border-dashed border-blue-200 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept="image/png,image/jpeg"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="selfie-upload"
                  />
                  <label htmlFor="selfie-upload" className="cursor-pointer">
                    <Upload className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-blue-600 font-medium">Click to upload your selfie</p>
                    <p className="text-xs text-blue-500">PNG, JPG up to 5MB</p>
                  </label>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-700 text-sm">reCAPTCHA verification (placeholder)</p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, acceptTerms: checked as boolean })
                  }
                />
                <Label htmlFor="terms" className="text-sm text-blue-700">
                  I accept the{' '}
                  <Link to="#" className="text-blue-600 hover:underline">Terms & Conditions</Link>
                  {' '}and{' '}
                  <Link to="#" className="text-blue-600 hover:underline">Privacy Policy</Link>
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={!formData.acceptTerms}
              >
                Register Now
              </Button>

              <div className="text-center">
                <p className="text-sm text-blue-600">
                  Already have an account?{' '}
                  <Link to="/login" className="text-blue-700 hover:underline font-medium">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
