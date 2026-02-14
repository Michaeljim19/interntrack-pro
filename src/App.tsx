import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import Dashboard from "@/pages/Dashboard";
import DTRPage from "@/pages/DTRPage";
import ReportsPage from "@/pages/ReportsPage";
import GoalsPage from "@/pages/GoalsPage";
import EvidencePage from "@/pages/EvidencePage";
import CompanyPage from "@/pages/CompanyPage";
import NotificationsPage from "@/pages/NotificationsPage";
import LoginPage from "@/pages/LoginPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/dtr" element={<AppLayout><DTRPage /></AppLayout>} />
          <Route path="/reports" element={<AppLayout><ReportsPage /></AppLayout>} />
          <Route path="/goals" element={<AppLayout><GoalsPage /></AppLayout>} />
          <Route path="/evidence" element={<AppLayout><EvidencePage /></AppLayout>} />
          <Route path="/company" element={<AppLayout><CompanyPage /></AppLayout>} />
          <Route path="/notifications" element={<AppLayout><NotificationsPage /></AppLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
