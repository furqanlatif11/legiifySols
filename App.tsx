
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [selectedInquiryService, setSelectedInquiryService] = useState('');

  const handleInquire = (service: string = '') => {
    setSelectedInquiryService(service);
    setIsInquiryModalOpen(true);
  };

  const handleShowDetails = (item: any) => {
    setSelectedItem(item);
    setIsDetailModalOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        <Header onInquire={() => handleInquire()} />
        
        <main className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage handleInquire={handleInquire} handleShowDetails={handleShowDetails} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage handleInquire={handleInquire} handleShowDetails={handleShowDetails} />} />
            <Route path="/industries" element={<IndustriesPage handleInquire={handleInquire} handleShowDetails={handleShowDetails} />} />
            <Route path="/pricing" element={<PricingPage handleInquire={handleInquire} />} />
            <Route path="/philosophy" element={<WhyPage />} />
            <Route path="/contact" element={<ContactPage />} />
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
    </Router>
  );
};

export default App;
