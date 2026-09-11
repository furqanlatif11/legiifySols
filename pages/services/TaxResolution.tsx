import React, { useEffect } from 'react';
import { setMeta } from '../../utils/seo';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import { taxResolutionConfig } from '../../data/services/tax-resolution';

const TaxResolution: React.FC<{ handleInquire: (s?: string) => void }> = ({ handleInquire }) => {
  useEffect(() => {
    setMeta({
      title: taxResolutionConfig.metaTitle,
      description: taxResolutionConfig.metaDescription,
      url: window.location.href,
      image: '/assets/logos/ledgifySols_OGImage.webp'
    });
  }, []);

  return <ServicePageLayout config={taxResolutionConfig} onInquire={handleInquire} />;
};

export default TaxResolution;
