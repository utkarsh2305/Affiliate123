
import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, FileSpreadsheet, Download } from 'lucide-react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { useToast } from '@/hooks/use-toast';

export const MasterDataCommissionUpload: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      toast({
        title: "File uploaded successfully",
        description: `${file.name} has been uploaded and is ready for processing.`
      });
    }
  };

  const processCommissionData = () => {
    if (uploadedFile) {
      toast({
        title: "Processing commission data",
        description: "Commission details are being processed and updated in the system."
      });
      setUploadedFile(null);
    }
  };

  const downloadTemplate = () => {
    toast({
      title: "Template downloaded",
      description: "Commission upload template has been downloaded."
    });
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar userType="admin" />
        <div className="flex-1">
          <Navbar userType="admin" />
          
          <div className="px-6 py-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Upload Commission Details</h1>
              <p className="text-gray-600">Upload and process commission data from Excel or CSV files</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Upload className="h-5 w-5 mr-2 text-blue-600" />
                    Upload Commission File
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <input
                      type="file"
                      accept=".xlsx,.csv,.xls"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="commission-file-upload"
                    />
                    <label htmlFor="commission-file-upload" className="cursor-pointer">
                      <FileSpreadsheet className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg font-medium text-gray-700 mb-2">
                        Drop your commission file here
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        or click to browse files
                      </p>
                      <p className="text-xs text-gray-400">
                        Supports: Excel (.xlsx, .xls) and CSV files
                      </p>
                    </label>
                  </div>

                  {uploadedFile && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm font-medium text-blue-900">
                        File Ready: {uploadedFile.name}
                      </p>
                      <p className="text-xs text-blue-600">
                        Size: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  )}

                  <Button 
                    onClick={processCommissionData}
                    disabled={!uploadedFile}
                    className="w-full"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Process Commission Data
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upload Instructions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">File Format Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                      <li>Excel files (.xlsx, .xls) or CSV format</li>
                      <li>Maximum file size: 10MB</li>
                      <li>First row should contain column headers</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Required Columns:</h4>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                      <li>Order ID</li>
                      <li>Affiliate ID</li>
                      <li>Commission Amount</li>
                      <li>Commission Rate (%)</li>
                      <li>Payment Status</li>
                    </ul>
                  </div>

                  <Button 
                    onClick={downloadTemplate}
                    variant="outline"
                    className="w-full"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Template
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Recent Uploads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">commission_data_jan_2024.xlsx</p>
                      <p className="text-sm text-gray-500">Uploaded on Jan 15, 2024 at 2:30 PM</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Processed
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">commission_data_dec_2023.csv</p>
                      <p className="text-sm text-gray-500">Uploaded on Jan 1, 2024 at 9:15 AM</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Processed
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};
