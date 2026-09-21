import React, { useEffect } from 'react';
import { setMeta } from '../../utils/seo';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import { financialAnalysisConfig } from '../../data/services/financial-analysis';

const FinancialAnalysis: React.FC<{ handleInquire: (s?: string) => void }> = ({ handleInquire }) => {
  useEffect(() => {
    setMeta({
      title: financialAnalysisConfig.metaTitle,
      description: financialAnalysisConfig.metaDescription,
      url: window.location.href,
      image: '/assets/logos/ledgify_solutionss_ogImage.png'
    });
  }, []);

  return <ServicePageLayout config={financialAnalysisConfig} onInquire={handleInquire} />;
};

export default FinancialAnalysis;
