
import React, { useEffect, useState } from 'react';
import { BrowserRouter, StaticRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import DetailModal from './components/DetailModal';
import BackToTop from './components/BackToTop';
import StickyConsultationButton from './components/StickyConsultationButton';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import IndustriesPage from './pages/Industries';
import ContactPage from './pages/Contact';
import WhyPage from './pages/Why';
import PricingPage from './pages/Pricing';
import NotFoundPage from './pages/NotFound';
import TaxPlanning from './pages/services/TaxPlanning';
import FinancialAnalysis from './pages/services/FinancialAnalysis';
import VirtualCFO from './pages/services/VirtualCFO';
import TaxResolution from './pages/services/TaxResolution';
import SuccessionPlanning from './pages/services/SuccessionPlanning';
import ConsultationPage from './pages/Consultation';
import StrategicAcceleration from './pages/consultation/StrategicAcceleration';
import OperationalExcellence from './pages/consultation/OperationalExcellence';
import FinancialArchitecture from './pages/consultation/FinancialArchitecture';
import MarketDomination from './pages/consultation/MarketDomination';
import { setJsonLd, getSiteUrl } from './utils/seo';
import { firmIdentity } from './data/firm';

// --- MAIN APP COMPONENT ---

const App: React.FC<{ ssrPath?: string }> = ({ ssrPath }) => {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [selectedInquiryService, setSelectedInquiryService] = useState('');

  // sitewide Organization schema, emitted once so per-page Service schema can reference the same entity
  useEffect(() => {
    const site = getSiteUrl();
    setJsonLd('organization', {
      '@context': 'https://schema.org',
      '@type': 'AccountingService',
      '@id': `${site}/#organization`,
      name: firmIdentity.legalName,
      url: site,
      logo: `${site}/assets/logos/ls-mainLogo600x200_main.svg`,
      email: firmIdentity.email,
      telephone: firmIdentity.phone,
      address: { '@type': 'PostalAddress', addressLocality: 'Walnut Ridge', addressRegion: 'AR', postalCode: '72476', addressCountry: 'US' }
    });
    return () => setJsonLd('organization', null);
  }, []);

  const handleInquire = (service: string = '') => {
    setSelectedInquiryService(service);
    setIsInquiryModalOpen(true);
  };

  const handleShowDetails = (item: any) => {
    setSelectedItem(item);
    setIsDetailModalOpen(true);
  };

  const RouterProvider: React.FC<React.PropsWithChildren> = ssrPath
    ? ({ children }) => <StaticRouter location={ssrPath}>{children}</StaticRouter>
    : BrowserRouter;

  return (
    <RouterProvider>
      <div className="min-h-screen bg-white text-ink selection:bg-emerald-100 selection:text-ink">
        <Header onInquire={() => handleInquire()} />
        
        <main className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage handleInquire={handleInquire} handleShowDetails={handleShowDetails} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage handleInquire={handleInquire} handleShowDetails={handleShowDetails} />} />
            <Route path="/services/tax-planning" element={<TaxPlanning handleInquire={handleInquire} />} />
            <Route path="/services/financial-analysis" element={<FinancialAnalysis handleInquire={handleInquire} />} />
            <Route path="/services/virtual-cfo" element={<VirtualCFO handleInquire={handleInquire} />} />
            <Route path="/services/tax-resolution" element={<TaxResolution handleInquire={handleInquire} />} />
            <Route path="/services/succession-planning" element={<SuccessionPlanning handleInquire={handleInquire} />} />
            <Route path="/consultation" element={<ConsultationPage handleInquire={handleInquire} />} />
            <Route path="/consultation/strategic-acceleration" element={<StrategicAcceleration handleInquire={handleInquire} />} />
            <Route path="/consultation/operational-excellence" element={<OperationalExcellence handleInquire={handleInquire} />} />
            <Route path="/consultation/financial-architecture" element={<FinancialArchitecture handleInquire={handleInquire} />} />
            <Route path="/consultation/market-domination" element={<MarketDomination handleInquire={handleInquire} />} />
            <Route path="/industries" element={<IndustriesPage handleInquire={handleInquire} handleShowDetails={handleShowDetails} />} />
            <Route path="/pricing" element={<PricingPage handleInquire={handleInquire} />} />
            <Route path="/philosophy" element={<WhyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage handleInquire={handleInquire} />} />
          </Routes>
        </main>

        <Footer onInquire={() => handleInquire()} />

        <InquiryModal 
          isOpen={isInquiryModalOpen} 
          onClose={() => setIsInquiryModalOpen(false)} 
          initialService={selectedInquiryService}
        />

        {selectedItem && (
          <DetailModal
            isOpen={isDetailModalOpen}
            onClose={() => setIsDetailModalOpen(false)}
            title={selectedItem.title}
            description={selectedItem.fullDesc || selectedItem.description}
            icon={selectedItem.icon}
            featuresTitle={selectedItem.fullDesc ? "Nexus Mandates" : "Strategy Blueprint"}
            features={selectedItem.mandates || selectedItem.blueprint}
            points={selectedItem.challenges || ["Institutional Verification", "Regulatory Shielding", "Risk Minimization", "Strategic Alignment"]}
            onInquire={() => handleInquire(`Detail Inquiry: ${selectedItem.title}`)}
          />
        )}

        <BackToTop />

        <StickyConsultationButton onClick={() => handleInquire()} />
      </div>
    </RouterProvider>
  );
};

export default App;
