// Firm-wide facts consumed by components/trust/*. Address/phone/email/legal
// name are reused from the site's existing Footer and Contact page content —
// they are already published, not invented here. Anything not published
// anywhere on the site (named practitioner, licence, memberships, insurance,
// tech stack, response commitment) remains TODO_VERIFY — do not fabricate.

export const firmIdentity = {
  legalName: 'Ledgify Solutions LLC',
  address: 'Walnut Ridge, AR 72476',
  phone: '+1 (870) 202-6004',
  email: 'info@ledgifysolutions.com',
  ein: undefined
};

export const primaryCredential = {
  name: 'TODO_VERIFY: named individual',
  credential: 'TODO_VERIFY: e.g. CPA',
  licenseNumber: 'TODO_VERIFY',
  jurisdiction: 'TODO_VERIFY: issuing state/board',
  status: 'TODO_VERIFY: e.g. Active',
  verifyUrl: undefined
};

export const securityPosture = {
  encryption: 'AES-256 encryption for sensitive information, multi-layered and SOC2-aligned data storage',
  retentionPolicy: 'TODO_VERIFY',
  accessControl: 'TODO_VERIFY',
  ndaAvailable: false, // TODO_VERIFY
  soc2Status: 'TODO_VERIFY: confirm current SOC 2 status/report availability'
};

export const memberships: { name: string; logoUrl?: string; status?: string }[] = [
  // TODO_VERIFY: only list real, current memberships (AICPA, state CPA society, NATP, NACVA, IMA...)
];

export const insurance = {
  hasCoverage: false, // TODO_VERIFY
  note: 'TODO_VERIFY: e.g. Professional liability (E&O) coverage held.'
};

export const techStack: { name: string; certified?: boolean }[] = [
  // TODO_VERIFY: only list tools genuinely used (QuickBooks, Xero, NetSuite, Gusto, etc.)
];

export const responseCommitment = {
  text: 'TODO_VERIFY: e.g. We respond to client messages within one business day.'
};

