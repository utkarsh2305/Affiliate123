
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin" replace />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/affiliates" element={<ManageAffiliates />} />
          <Route path="/admin/orders" element={<OrderManagement />} />
          <Route path="/admin/users" element={<AdminDashboard />} />
          <Route path="/admin/commissions" element={<AdminDashboard />} />
          
          {/* Back Office Routes */}
          <Route path="/backoffice" element={<BackOfficeDashboard />} />
          <Route path="/backoffice/affiliates" element={<ManageAffiliates />} />
          <Route path="/backoffice/orders" element={<OrderManagement />} />
          <Route path="/backoffice/commission" element={<BackOfficeDashboard />} />
          
          {/* Affiliate Routes */}
          <Route path="/affiliate" element={<AffiliateDashboard />} />
          <Route path="/affiliate/retailers" element={<AffiliateDashboard />} />
          <Route path="/affiliate/orders" element={<AffiliateDashboard />} />
          <Route path="/affiliate/profile" element={<AffiliateDashboard />} />
          
          {/* Registration */}
          <Route path="/register" element={<AffiliateRegistration />} />
          
          {/* Catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
