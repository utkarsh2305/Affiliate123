
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

interface DashboardLayoutProps {
  userType: 'admin' | 'backoffice' | 'affiliate';
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ userType, children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar userType={userType} />
        <SidebarInset>
          <Navbar userType={userType} />
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};
