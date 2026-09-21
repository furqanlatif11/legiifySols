// Firm-wide facts consumed by components/trust/*. Address/phone/email/legal
// name are reused from the site's existing Footer and Contact page content —
// they are already published, not invented here. Anything not published
// anywhere on the site (named practitioner, licence, memberships, insurance,
// tech stack, response commitment) remains unpublished — do not fabricate.

export const firmIdentity = {
  legalName: 'Ledgify Solutions LLC',
  address: 'Walnut Ridge, AR 72476',
  phone: '+1 (870) 202-6004',
  email: 'info@ledgifysolutions.com',
  ein: undefined
};

export const primaryCredential = {
  name: undefined,
  credential: undefined,
  licenseNumber: undefined,
  jurisdiction: undefined,
  status: undefined,
  verifyUrl: undefined
};

export const securityPosture = {
  encryption: 'Client data is encrypted with AES-256, both in transit and at rest.',
  retentionPolicy: undefined,
  accessControl: undefined,
  ndaAvailable: false,
  soc2Status: undefined
};

export const memberships: { name: string; logoUrl?: string; status?: string }[] = [
];

export const insurance = {
  hasCoverage: false,
  note: undefined
};

export const techStack: { name: string; certified?: boolean }[] = [
];

export const responseCommitment = {
  text: undefined
};

