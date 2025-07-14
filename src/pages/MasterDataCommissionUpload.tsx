
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, FileSpreadsheet, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const MasterDataCommissionUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      toast({
        title: "File uploaded successfully",
        description: "Commission details have been processed and uploaded."
      });
      setSelectedFile(null);
    } else {
      toast({
        title: "No file selected",
        description: "Please select a file to upload.",
        variant: "destructive"
      });
    }
  };

  const downloadTemplate = () => {
    toast({
      title: "Template downloaded",
      description: "Commission template CSV file has been downloaded."
    });
  };

  return (
    <DashboardLayout userType="admin">
      <div className="px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Upload Commission Details</h1>
          <p className="text-gray-600">Upload commission details using CSV or Excel files.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="h-5 w-5 mr-2" />
                Upload File
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="commission-file">Select Commission File</Label>
                <Input
                  id="commission-file"
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileSelect}
                  className="mt-1"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Supported formats: CSV, Excel (.xlsx, .xls)
                </p>
              </div>

              {selectedFile && (
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <FileSpreadsheet className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-900">
                      {selectedFile.name}
                    </span>
                  </div>
                  <p className="text-xs text-blue-600 mt-1">
                    Size: {(selectedFile.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              )}

              <Button onClick={handleUpload} className="w-full" disabled={!selectedFile}>
                <Upload className="h-4 w-4 mr-2" />
                Upload Commission Details
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="h-5 w-5 mr-2" />
                Download Template
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Download the commission details template to ensure your data is formatted correctly before uploading.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium">Template includes:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Affiliate ID</li>
                  <li>• Commission Rate (%)</li>
                  <li>• Product Category</li>
                  <li>• Minimum Order Value</li>
                  <li>• Effective Date</li>
                </ul>
              </div>

              <Button onClick={downloadTemplate} variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download CSV Template
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};
