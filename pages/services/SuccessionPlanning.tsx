import React, { useEffect } from 'react';
import { setMeta } from '../../utils/seo';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import { successionPlanningConfig } from '../../data/services/succession-planning';

const SuccessionPlanning: React.FC<{ handleInquire: (s?: string) => void }> = ({ handleInquire }) => {
  useEffect(() => {
    setMeta({
      title: successionPlanningConfig.metaTitle,
      description: successionPlanningConfig.metaDescription,
      url: window.location.href,
      image: '/assets/logos/ledgifySols_OGImage.webp'
    });
  }, []);

  return <ServicePageLayout config={successionPlanningConfig} onInquire={handleInquire} />;
};

export default SuccessionPlanning;
