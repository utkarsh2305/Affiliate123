
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AdminDashboard } from "./pages/AdminDashboard";
import { BackOfficeDashboard } from "./pages/BackOfficeDashboard";
import { AffiliateDashboard } from "./pages/AffiliateDashboard";
import { ManageAffiliates } from "./pages/ManageAffiliates";
import { OrderManagement } from "./pages/OrderManagement";
import { AffiliateRegistration } from "./pages/AffiliateRegistration";
import { Login } from "./pages/Login";
import { AffiliateOrders } from "./pages/AffiliateOrders";
import { AffiliateRetailers } from "./pages/AffiliateRetailers";
import { AffiliateProfile } from "./pages/AffiliateProfile";
import { AdminReports } from "./pages/AdminReports";
import { BackOfficeReports } from "./pages/BackOfficeReports";
import { BackOfficeCreateUser } from "./pages/BackOfficeCreateUser";
import { AdminCreateUser } from "./pages/AdminCreateUser";
import { MasterDataCommissionUpload } from "./pages/MasterDataCommissionUpload";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<AffiliateRegistration />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<ManageAffiliates />} />
          <Route path="/admin/users/create" element={<AdminCreateUser />} />
          <Route path="/admin/orders" element={<OrderManagement />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/master-data/commission-upload" element={<MasterDataCommissionUpload />} />
          <Route path="/admin/profile" element={<AffiliateProfile />} />
          
          {/* Back Office Routes */}
          <Route path="/backoffice" element={<BackOfficeDashboard />} />
          <Route path="/backoffice/users" element={<ManageAffiliates />} />
          <Route path="/backoffice/users/create" element={<BackOfficeCreateUser />} />
          <Route path="/backoffice/reports" element={<BackOfficeReports />} />
          <Route path="/backoffice/profile" element={<AffiliateProfile />} />
          
          {/* Affiliate Routes */}
          <Route path="/affiliate" element={<AffiliateDashboard />} />
          <Route path="/affiliate/retailers" element={<AffiliateRetailers />} />
          <Route path="/affiliate/orders" element={<AffiliateOrders />} />
          <Route path="/affiliate/profile" element={<AffiliateProfile />} />
          
          {/* Catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
