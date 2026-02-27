import { VercelRequest, VercelResponse } from '@vercel/node';
import dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: '.env.local', override: true });

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ status: 'ok' });
}
