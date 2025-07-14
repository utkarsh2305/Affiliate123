
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  FileText, 
  Store, 
  Database,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

interface AppSidebarProps {
  userType: 'admin' | 'backoffice' | 'affiliate';
}

export const AppSidebar: React.FC<AppSidebarProps> = ({ userType }) => {
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  const getMenuItems = () => {
    switch (userType) {
      case 'admin':
        return [
          { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
          { 
            label: 'Manage Users', 
            path: '/admin/users', 
            icon: Users,
            subItems: [
              { label: 'All Users', path: '/admin/users' },
              { label: 'Create User', path: '/admin/users/create' }
            ]
          },
          { label: 'Order Management', path: '/admin/orders', icon: ShoppingCart },
          { label: 'Reports', path: '/admin/reports', icon: FileText },
          { 
            label: 'Master Data', 
            path: '/admin/master-data', 
            icon: Database,
            subItems: [
              { label: 'Upload Commission Details', path: '/admin/master-data/commission-upload' }
            ]
          }
        ];
      case 'backoffice':
        return [
          { label: 'Dashboard', path: '/backoffice', icon: LayoutDashboard },
          { 
            label: 'Manage Users', 
            path: '/backoffice/users', 
            icon: Users,
            subItems: [
              { label: 'All Users', path: '/backoffice/users' },
              { label: 'Create User', path: '/backoffice/users/create' }
            ]
          },
          { label: 'Reports', path: '/backoffice/reports', icon: FileText }
        ];
      case 'affiliate':
        return [
          { label: 'Dashboard', path: '/affiliate', icon: LayoutDashboard },
          { label: 'Retailers', path: '/affiliate/retailers', icon: Store },
          { label: 'Orders', path: '/affiliate/orders', icon: ShoppingCart }
        ];
      default:
        return [];
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {getMenuItems().map((item) => (
                <SidebarMenuItem key={item.path}>
                  {item.subItems ? (
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full justify-between">
                          <div className="flex items-center">
                            <item.icon className="h-4 w-4 mr-2" />
                            {!isCollapsed && <span>{item.label}</span>}
                          </div>
                          {!isCollapsed && (
                            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.path}>
                              <SidebarMenuSubButton asChild>
                                <NavLink
                                  to={subItem.path}
                                  className={({ isActive }) =>
                                    isActive
                                      ? 'bg-blue-100 text-blue-700 font-medium'
                                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                  }
                                >
                                  {subItem.label}
                                </NavLink>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `flex items-center ${
                            isActive
                              ? 'bg-blue-100 text-blue-700 font-medium'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }`
                        }
                      >
                        <item.icon className="h-4 w-4 mr-2" />
                        {!isCollapsed && <span>{item.label}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
