import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const serverDir = path.join(root, '.prerender');
const templatePath = path.join(distDir, 'index.html');
const { render, getStructuredData } = await import(pathToFileURL(path.join(serverDir, 'prerender-entry.js')).href);

const routes = [
  '/',
  '/about',
  '/services',
  '/services/tax-planning',
  '/services/financial-analysis',
  '/services/virtual-cfo',
  '/services/tax-resolution',
  '/services/succession-planning',
  '/industries',
  '/pricing',
  '/philosophy',
  '/contact',
  '/404'
];

const template = fs.readFileSync(templatePath, 'utf8');

const metadata = {
  '/': {
    title: 'Accounting Solutions for Every Business Stage | Ledgify Solutions',
    description: 'Outsourced accounting and bookkeeping for individuals, founders, agencies, ecommerce brands, and businesses at every stage, with tax planning and finance support.'
  },
  '/about': { title: 'About Ledgify Solutions | Accounting Solutions', description: 'Ledgify Solutions provides accessible accounting, bookkeeping, tax planning, and fractional finance support for individuals and businesses at every stage in the USA.' },
  '/services': { title: 'Accounting, Tax Planning & CFO Support Services | Ledgify', description: 'Accounting and bookkeeping for individuals, founders, agencies, ecommerce brands, and businesses at every stage, with tax planning and fractional finance support.' },
  '/industries': { title: 'Accounting Services for Businesses at Every Stage | Ledgify', description: 'Bookkeeping, accounting, and tax-planning support for individuals, founders, agencies, ecommerce brands, and businesses at every stage in the USA.' },
  '/pricing': { title: 'Accounting Solutions Pricing | Ledgify Solutions', description: 'Published monthly pricing for bookkeeping, accounting, tax planning, and fractional finance support, from $80 for individuals to $1,199 for enterprise tier.' },
  '/philosophy': { title: 'How We Work — Accounting and Bookkeeping | Ledgify Solutions', description: 'The positions behind our accounting work: published prices, statements reviewed before they leave us, and clarity about what we do and dont handle.' },
  '/contact': { title: 'Contact Ledgify Solutions | Get an Accounting Quote', description: 'Contact Ledgify Solutions for bookkeeping, accounting, tax planning, or fractional finance support with clear pricing and practical next steps.' },
  '/404': { title: 'Page Not Found | Ledgify Solutions', description: 'The page you are looking for does not exist or has moved.' }
};

const serviceMetadata = {
  '/services/tax-planning': ['Tax Planning & Strategy for Businesses | Ledgify', 'Tax planning for founders and businesses at every stage: entity choices, estimated payments, state obligations, and a clear quarterly planning calendar.'],
  '/services/financial-analysis': ['Financial Reporting & Analysis | Ledgify Solutions', 'Monthly and annual financial reporting, KPI review, and practical analysis for founders, agencies, ecommerce brands, and businesses at every stage.'],
  '/services/virtual-cfo': ['Fractional CFO Support for Businesses | Ledgify', 'Fractional finance support for businesses at every stage: monthly financial reviews, budget vs. actual, cash flow forecasting, and lender-ready materials.'],
  '/services/tax-resolution': ['Tax Resolution Support for Business Owners | Ledgify', 'Support for business owners responding to tax notices: document organization, notice triage, response planning, and realistic next steps with clear guidance.'],
  '/services/succession-planning': ['Business Exit & Succession Tax Planning Services | Ledgify', 'Tax and structural planning for business owners considering a sale, succession, or ownership transition, with attorney coordination where needed.']
};

function buildHtml(route) {
  const page = metadata[route] || (serviceMetadata[route] && { title: serviceMetadata[route][0], description: serviceMetadata[route][1] }) || metadata['/404'];
  const site = 'https://www.ledgifysolutions.com';
  const canonical = route === '/' ? `${site}/` : `${site}${route}`;
  const schemas = getStructuredData(route);
  let html = template.replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);
  html = html.replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${page.description}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${page.title}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${page.description}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${page.title}" />`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${page.description}" />`);
  const schemaScripts = schemas.map((schema, index) => {
    const id = index === 0 ? 'jsonld-organization' : route === '/services' ? 'jsonld-services-hub' : `jsonld-service-${route.split('/').pop()}`;
    return `<script id="${id}" type="application/ld+json">${JSON.stringify(schema)}</script>`;
  }).join('\n  ');
  html = html.replace('</head>', `<link rel="canonical" href="${canonical}" />\n  ${schemaScripts}\n  </head>`);
  if (route === '/404') html = html.replace('</head>', '<meta name="robots" content="noindex, nofollow" />\n  </head>');
  return html;
}

for (const route of routes) {
  const target = route === '/' ? path.join(distDir, 'index.html') : path.join(distDir, route.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, buildHtml(route));
}

fs.rmSync(serverDir, { recursive: true, force: true });