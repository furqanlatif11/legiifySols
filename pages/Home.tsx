import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import WhyChoose from '../components/WhyChoose';
import CoreServices from '../components/CoreServices';
import PremiumServices from '../components/PremiumServices';
import ProvenResults from '../components/ProvenResults';
import Testimonials from '../components/Testimonials';
import TrustBadges from '../components/TrustBadges';
import ClientTypes from '../components/ClientTypes';

type HomeProps = {
  handleInquire: (s?: string) => void;
  handleShowDetails: (item: any) => void;
};

const HomePage: React.FC<HomeProps> = ({ handleInquire, handleShowDetails }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <Hero onInquire={() => handleInquire()} />
    <WhyChoose />
    <CoreServices onInquire={handleInquire} onShowDetails={handleShowDetails} />
    <PremiumServices onInquire={handleInquire} onShowDetails={handleShowDetails} />
    <ProvenResults />
    <Testimonials />
    <TrustBadges />
    <ClientTypes onInquire={handleInquire} onShowDetails={handleShowDetails} />
  </motion.div>
);

export default HomePage;
