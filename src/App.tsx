import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Process from "./pages/Process";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

import AlphaInvestmentCaseStudy from "./pages/AlphaInvestmentCaseStudy";
import AgrifreshCaseStudy from "./pages/AgrifreshCaseStudy";
import FinanceHubCaseStudy from "./pages/FinanceHubCaseStudy";
import ArchlyCaseStudy from "./pages/ArchlyCaseStudy";
import NilkamalInteriorsCaseStudy from "./pages/NilkamalInteriorsCaseStudy";
import NotFound from "./pages/NotFound";
import BlogIndex from "./pages/blog/index";
import SeoFirstLeads from "./pages/blog/seo-first-leads";
import RedesignChecklist from "./pages/blog/redesign-checklist";
import FixConversion from "./pages/blog/fix-conversion";
import SeoContentStrategy from "./pages/blog/seo-content-strategy";
import LocalSeoGuide from "./pages/blog/local-seo-guide";
import FastSiteBenefits from "./pages/blog/fast-site-benefits";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/seo-first-leads" element={<SeoFirstLeads />} />
          <Route path="blog/redesign-checklist" element={<RedesignChecklist />} />
          <Route path="blog/fix-conversion" element={<FixConversion />} />
          <Route path="blog/seo-content-strategy" element={<SeoContentStrategy />} />
          <Route path="blog/local-seo-guide" element={<LocalSeoGuide />} />
          <Route path="blog/fast-site-benefits" element={<FastSiteBenefits />} />
          <Route path="/alphainvestmentcasestudy" element={<AlphaInvestmentCaseStudy />} />
          <Route path="/agrifreshcasestudy" element={<AgrifreshCaseStudy />} />
          <Route path="/financehubcasestudy" element={<FinanceHubCaseStudy />} />
          <Route path="/archlycasestudy" element={<ArchlyCaseStudy />} />
          <Route path="/nilkamalinteriorscasestudy" element={<NilkamalInteriorsCaseStudy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
