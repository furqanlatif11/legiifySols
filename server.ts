import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// load environment variables from .env, then override with .env.local if present
dotenv.config();
dotenv.config({ path: '.env.local', override: true });

// helpful debug output when starting up
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.warn('WARNING: EMAIL_USER or EMAIL_PASS not set in environment.  \n' +
    'Ensure you copied .env.example to .env or .env.local and filled in credentials.');
}

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// simple health check
app.get('/api/health', (_req: express.Request, res: express.Response) => {
  res.json({ status: 'ok' });
});

app.post('/api/inquiry', async (req: express.Request, res: express.Response) => {
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
    // verify credentials are present
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    if (!emailUser || !emailPass) {
      console.error('email credentials missing:', { emailUser, emailPass });
      return res
        .status(500)
        .json({ error: 'Email credentials not configured on server.' });
    }

    // configure transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New inquiry from ${fullName}`,
      text: `Full Name: ${fullName}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nService: ${service || 'N/A'}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return res.json({ success: true });
  } catch (err) {
    console.error('error sending mail', err);
    return res.status(500).json({ error: 'Unable to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`backend server listening on http://localhost:${PORT}`);
});
