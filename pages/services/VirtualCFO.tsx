import React, { useEffect } from 'react';
import { setMeta } from '../../utils/seo';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import { virtualCfoConfig } from '../../data/services/virtual-cfo';

const VirtualCFO: React.FC<{ handleInquire: (s?: string) => void }> = ({ handleInquire }) => {
  useEffect(() => {
    setMeta({
      title: virtualCfoConfig.metaTitle,
      description: virtualCfoConfig.metaDescription,
      url: window.location.href,
      image: '/assets/logos/ledgifySols_OGImage.webp'
    });
  }, []);

  return <ServicePageLayout config={virtualCfoConfig} onInquire={handleInquire} />;
};

export default VirtualCFO;
