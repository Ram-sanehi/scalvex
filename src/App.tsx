import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { lazy, Suspense } from "react";

// Lazy-loaded page components
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Work = lazy(() => import("./pages/Work"));
const Process = lazy(() => import("./pages/Process"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

const AlphaInvestmentCaseStudy = lazy(() => import("./pages/AlphaInvestmentCaseStudy"));
const AgrifreshCaseStudy = lazy(() => import("./pages/AgrifreshCaseStudy"));
const FinanceHubCaseStudy = lazy(() => import("./pages/FinanceHubCaseStudy"));
const ArchlyCaseStudy = lazy(() => import("./pages/ArchlyCaseStudy"));
const NilkamalInteriorsCaseStudy = lazy(() => import("./pages/NilkamalInteriorsCaseStudy"));
const SanjhBoutiqueCaseStudy = lazy(() => import("./pages/SanjhBoutiqueCaseStudy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlogIndex = lazy(() => import("./pages/blog/index"));
const SeoFirstLeads = lazy(() => import("./pages/blog/seo-first-leads"));
const RedesignChecklist = lazy(() => import("./pages/blog/redesign-checklist"));
const FixConversion = lazy(() => import("./pages/blog/fix-conversion"));
const SeoContentStrategy = lazy(() => import("./pages/blog/seo-content-strategy"));
const LocalSeoGuide = lazy(() => import("./pages/blog/local-seo-guide"));
const FastSiteBenefits = lazy(() => import("./pages/blog/fast-site-benefits"));

const GrowthWebsites = lazy(() => import("./pages/GrowthWebsites"));
const WebsiteOptimization = lazy(() => import("./pages/WebsiteOptimization"));
const VisibilitySeo = lazy(() => import("./pages/VisibilitySeo"));
const PerformanceImprovements = lazy(() => import("./pages/PerformanceImprovements"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={null}>
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
            <Route path="/sanjhboutiquecasestudy" element={<SanjhBoutiqueCaseStudy />} />
            <Route path="/agrifreshcasestudy" element={<AgrifreshCaseStudy />} />
            <Route path="/financehubcasestudy" element={<FinanceHubCaseStudy />} />
            <Route path="/archlycasestudy" element={<ArchlyCaseStudy />} />
            <Route path="/nilkamalinteriorscasestudy" element={<NilkamalInteriorsCaseStudy />} />
            
            {/* New Clean Premium Routes */}
            <Route path="/growth-websites" element={<GrowthWebsites />} />
            <Route path="/website-optimization" element={<WebsiteOptimization />} />
            <Route path="/visibility-seo" element={<VisibilitySeo />} />
            <Route path="/performance-improvements" element={<PerformanceImprovements />} />
            
            {/* Legacy SEO URL Aliases */}
            <Route path="/coimbatore-web-development" element={<GrowthWebsites />} />
            <Route path="/seo-service-businesses" element={<WebsiteOptimization />} />
            <Route path="/startup-website-design" element={<VisibilitySeo />} />
            <Route path="/seo-architects-clinics" element={<PerformanceImprovements />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
