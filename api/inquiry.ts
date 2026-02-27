import { VercelRequest, VercelResponse } from '@vercel/node';
import dotenv from 'dotenv';
import { sendInquiryEmail } from '../lib/mail';

// load environment variables (Vercel automatically handles .env but this ensures
// local tests via `vercel dev` also pick up .env.local)
dotenv.config();
dotenv.config({ path: '.env.local', override: true });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, company, service, message } = req.body as {
    fullName?: string;
    email?: string;
    company?: string;
    service?: string;
    message?: string;
  };

  if (!fullName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await sendInquiryEmail({ fullName, email, company, service, message });
    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('inquiry function error', err);
    return res.status(500).json({ error: 'Unable to send message' });
  }
}
