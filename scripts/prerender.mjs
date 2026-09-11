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
    title: 'Ledgify Solutions — Institutional Accounting & Tax Strategy',
    description: 'Ledgify Solutions provides specialized accounting, tax architecture, and CFO leadership for individuals, founders, and growth companies in the USA.'
  },
  '/about': { title: 'About — Ledgify Solutions', description: 'Learn about Ledgify Solutions, our mission, culture, and institutional approach to accounting and tax strategy.' },
  '/services': { title: 'Services — Ledgify Solutions | Tax, CFO & Financial Planning', description: 'Five in-depth guides for founders covering tax planning, financial analysis, virtual CFO leadership, IRS resolution support, and succession planning.' },
  '/industries': { title: 'Industries — Ledgify Solutions', description: 'Accounting, tax strategy, and CFO support for the industries and business stages Ledgify Solutions serves.' },
  '/pricing': { title: 'Pricing — Ledgify Solutions', description: 'Transparent, tiered monthly pricing for tax strategy, bookkeeping, and CFO services — from $80/month for individuals up to enterprise-scale plans.' },
  '/philosophy': { title: 'Philosophy — Ledgify Solutions', description: 'The Ledgify Solutions approach to precise accounting, tax strategy, security, and long-term financial clarity.' },
  '/contact': { title: 'Contact — Ledgify Solutions', description: 'Contact Ledgify Solutions to discuss accounting, tax planning, financial analysis, or CFO support.' },
  '/404': { title: 'Page Not Found — Ledgify Solutions', description: 'The page you are looking for does not exist or has moved.' }
};

const serviceMetadata = {
  '/services/tax-planning': ['Tax Planning & Strategy for Growth Companies | Ledgify', 'Forward-looking tax planning for founders and growing businesses: entity structure, SALT optimization, and a quarterly liability projection calendar.'],
  '/services/financial-analysis': ['Financial Analysis & Reporting Services | Ledgify Solutions', 'Board-ready financial reporting: GAAP-aligned statements, KPI dashboards, and pattern-recognition review that flags discrepancies before they compound.'],
  '/services/virtual-cfo': ['Virtual CFO Services for Growing Companies | Ledgify', 'Fractional CFO leadership for growing companies: capital allocation strategy, budget vs. actual modeling, board representation, and funding round support.'],
  '/services/tax-resolution': ['IRS Tax Resolution & Audit Support | Ledgify Solutions', 'Document preparation and resolution strategy support for IRS notices and audits: notice triage, record organization, and a realistic path forward.'],
  '/services/succession-planning': ['Business Succession & Exit Planning | Ledgify Solutions', 'Tax-efficient exit planning for business owners: entity restructuring, exit tax modeling, owner compensation, and coordination with your attorney and adviser.']
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