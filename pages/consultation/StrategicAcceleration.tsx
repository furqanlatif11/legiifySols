import React, { useEffect } from 'react';
import { setMeta } from '../../utils/seo';
import ConsultationPageLayout from '../../components/consultation/ConsultationPageLayout';
import { strategicAccelerationConfig } from '../../data/consultation/strategic-acceleration';

const StrategicAcceleration: React.FC<{ handleInquire: (s?: string) => void }> = ({ handleInquire }) => {
  useEffect(() => {
    setMeta({
      title: strategicAccelerationConfig.metaTitle,
      description: strategicAccelerationConfig.metaDescription,
      url: window.location.href,
      image: '/assets/logos/ledgify_solutionss_ogImage.png'
    });
  }, []);

  return <ConsultationPageLayout config={strategicAccelerationConfig} onInquire={handleInquire} />;
};

export default StrategicAcceleration;
