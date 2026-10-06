import React, { useEffect } from 'react';
import { setMeta } from '../../utils/seo';
import ConsultationPageLayout from '../../components/consultation/ConsultationPageLayout';
import { financialArchitectureConfig } from '../../data/consultation/financial-architecture';

const FinancialArchitecture: React.FC<{ handleInquire: (s?: string) => void }> = ({ handleInquire }) => {
  useEffect(() => {
    setMeta({
      title: financialArchitectureConfig.metaTitle,
      description: financialArchitectureConfig.metaDescription,
      url: window.location.href,
      image: '/assets/logos/ledgify_solutionss_ogImage.png'
    });
  }, []);

  return <ConsultationPageLayout config={financialArchitectureConfig} onInquire={handleInquire} />;
};

export default FinancialArchitecture;
