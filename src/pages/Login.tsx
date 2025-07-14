
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dummy login logic
    if (formData.email === 'admin@example.com' && formData.password === 'password123') {
      toast({ title: "Login successful", description: "Welcome Admin!" });
      navigate('/admin');
    } else if (formData.email === 'backoffice@example.com' && formData.password === 'password123') {
      toast({ title: "Login successful", description: "Welcome Back Office!" });
      navigate('/backoffice');
    } else if (formData.email === 'affiliate@example.com' && formData.password === 'password123') {
      toast({ title: "Login successful", description: "Welcome Affiliate!" });
      navigate('/affiliate');
    } else {
      toast({ title: "Login failed", description: "Invalid credentials" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign In</h2>
            <p className="text-gray-600">Access your affiliate management account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-600 hover:underline">
                  Register as an Affiliate
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Panel - Demo Accounts */}
      <div className="w-80 bg-white border-l p-8">
        <div className="mb-8">
          <div className="text-xl font-bold text-red-600 mb-4">RedCloud</div>
          <p className="text-sm text-gray-600">Affiliate Management System</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Demo Accounts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">Admin:</h4>
              <p className="text-sm text-gray-600">admin@example.com</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Back Office:</h4>
              <p className="text-sm text-gray-600">backoffice@example.com</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Affiliate:</h4>
              <p className="text-sm text-gray-600">affiliate@example.com</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Password:</h4>
              <p className="text-sm text-gray-600">password123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
