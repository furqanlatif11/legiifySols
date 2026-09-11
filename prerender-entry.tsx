import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { servicePageConfigs } from './data/services';
import { firmIdentity } from './data/firm';

export function render(url: string): string {
  return renderToString(
    <React.StrictMode>
      <App ssrPath={url} />
    </React.StrictMode>
  );
}

export function getStructuredData(url: string): object[] {
  const site = 'https://www.ledgifysolutions.com';
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': `${site}/#organization`,
    name: firmIdentity.legalName,
    url: site,
    logo: `${site}/assets/logos/ls-mainLogo600x200_main.svg`,
    email: firmIdentity.email,
    telephone: firmIdentity.phone,
    address: { '@type': 'PostalAddress', addressLocality: 'Walnut Ridge', addressRegion: 'AR', postalCode: '72476', addressCountry: 'US' }
  };
  const config = Object.values(servicePageConfigs).find((item) => `/services/${item.slug}` === url);
  if (!config) {
    if (url !== '/services') return [organization];
    return [organization, {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: Object.values(servicePageConfigs).map((item, index) => ({
        '@type': 'ListItem', position: index + 1,
        item: { '@type': 'Service', name: item.h1, url: `${site}/services/${item.slug}` }
      }))
    }];
  }
  const pageUrl = `${site}/services/${config.slug}`;
  return [organization, {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', serviceType: config.h1, name: config.h1, description: config.metaDescription, url: pageUrl, provider: { '@id': `${site}/#organization` }, areaServed: 'US' },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${site}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${site}/services` },
        { '@type': 'ListItem', position: 3, name: config.h1, item: pageUrl }
      ] },
      ...(config.faqs.length ? [{
        '@type': 'FAQPage',
        mainEntity: config.faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } }))
      }] : [])
    ]
  }];
}