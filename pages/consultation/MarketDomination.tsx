import React, { useEffect } from 'react';
import { setMeta } from '../../utils/seo';
import ConsultationPageLayout from '../../components/consultation/ConsultationPageLayout';
import { marketDominationConfig } from '../../data/consultation/market-domination';

const MarketDomination: React.FC<{ handleInquire: (s?: string) => void }> = ({ handleInquire }) => {
  useEffect(() => {
    setMeta({
      title: marketDominationConfig.metaTitle,
      description: marketDominationConfig.metaDescription,
      url: window.location.href,
      image: '/assets/logos/ledgify_solutionss_ogImage.png'
    });
  }, []);

  return <ConsultationPageLayout config={marketDominationConfig} onInquire={handleInquire} />;
};

export default MarketDomination;
