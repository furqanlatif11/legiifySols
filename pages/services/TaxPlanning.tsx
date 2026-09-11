import React, { useEffect } from 'react';
import { setMeta } from '../../utils/seo';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import { taxPlanningConfig } from '../../data/services/tax-planning';

const TaxPlanning: React.FC<{ handleInquire: (s?: string) => void }> = ({ handleInquire }) => {
  useEffect(() => {
    setMeta({
      title: taxPlanningConfig.metaTitle,
      description: taxPlanningConfig.metaDescription,
      url: window.location.href,
      image: '/assets/logos/ledgifySols_OGImage.webp'
    });
  }, []);

  return <ServicePageLayout config={taxPlanningConfig} onInquire={handleInquire} />;
};

export default TaxPlanning;
