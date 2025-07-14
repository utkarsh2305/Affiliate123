
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Calendar } from 'lucide-react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/AppSidebar';

interface ReportsProps {
  userType: 'admin' | 'backoffice';
}

export const Reports: React.FC<ReportsProps> = ({ userType }) => {
  const reports = [
    {
      title: 'Daily Affiliate Login Report',
      description: 'Track daily affiliate user logins and activity',
      lastGenerated: '2024-01-15 09:30',
      type: 'daily'
    },
    {
      title: 'Weekly Affiliate Login Report',
      description: 'Weekly summary of affiliate user engagement',
      lastGenerated: '2024-01-14 18:00',
      type: 'weekly'
    },
    {
      title: 'Monthly Performance Report',
      description: 'Comprehensive monthly affiliate performance metrics',
      lastGenerated: '2024-01-01 08:00',
      type: 'monthly'
    }
  ];

  const generateReport = (reportType: string) => {
    console.log(`Generating ${reportType} report...`);
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar userType={userType} />
        <div className="flex-1">
          <Navbar userType={userType} />
          
          <div className="px-6 py-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Reports</h1>
              <p className="text-gray-600">Generate and download system reports</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.map((report) => (
                <Card key={report.type}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                      {report.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm">{report.description}</p>
                    <div>
                      <p className="text-xs text-gray-500">Last Generated:</p>
                      <p className="text-sm font-medium">{report.lastGenerated}</p>
                    </div>
                    <Button 
                      onClick={() => generateReport(report.type)}
                      className="w-full"
                      variant="outline"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};
