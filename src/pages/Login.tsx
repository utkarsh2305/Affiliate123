
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
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-8">
      {/* Logo */}
      <div className="mb-8">
        <img 
          src="/lovable-uploads/6b8381fd-9da9-481c-ac8f-d5de29277627.png" 
          alt="RedCloud Logo" 
          className="h-12 w-auto"
        />
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md">
        <Card className="border-blue-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-blue-900">Sign In</CardTitle>
            <p className="text-blue-600">Access your affiliate management account</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-blue-800">Email Address *</Label>
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
                <Label htmlFor="password" className="text-blue-800">Password *</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="border-blue-200 focus:border-blue-500"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Sign In
              </Button>

              <div className="text-center">
                <p className="text-sm text-blue-600">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-blue-700 hover:underline font-medium">
                    Register as an Affiliate
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Demo Accounts - Moved to Bottom */}
      <div className="mt-8 w-full max-w-md">
        <Card className="bg-blue-100 border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg text-blue-900">Demo Accounts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-medium text-blue-900">Admin:</h4>
              <p className="text-sm text-blue-700">admin@example.com</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-900">Back Office:</h4>
              <p className="text-sm text-blue-700">backoffice@example.com</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-900">Affiliate:</h4>
              <p className="text-sm text-blue-700">affiliate@example.com</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-900">Password:</h4>
              <p className="text-sm text-blue-700">password123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
