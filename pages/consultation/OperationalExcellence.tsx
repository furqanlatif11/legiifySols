import React, { useEffect } from 'react';
import { setMeta } from '../../utils/seo';
import ConsultationPageLayout from '../../components/consultation/ConsultationPageLayout';
import { operationalExcellenceConfig } from '../../data/consultation/operational-excellence';

const OperationalExcellence: React.FC<{ handleInquire: (s?: string) => void }> = ({ handleInquire }) => {
  useEffect(() => {
    setMeta({
      title: operationalExcellenceConfig.metaTitle,
      description: operationalExcellenceConfig.metaDescription,
      url: window.location.href,
      image: '/assets/logos/ledgify_solutionss_ogImage.png'
    });
  }, []);

  return <ConsultationPageLayout config={operationalExcellenceConfig} onInquire={handleInquire} />;
};

export default OperationalExcellence;
