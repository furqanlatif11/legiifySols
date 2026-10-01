import nodemailer from 'nodemailer';

interface InquiryData {
  fullName: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

export async function sendInquiryEmail(data: InquiryData): Promise<void> {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  if (!emailUser || !emailPass) {
    throw new Error('Email credentials not configured');
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.titan.email',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: { user: emailUser, pass: emailPass },
  });

  const mailOptions = {
    from: emailUser,
    to: emailUser,
    subject: `New inquiry from ${data.fullName}`,
    text: `Full Name: ${data.fullName}\nEmail: ${data.email}\nCompany: ${data.company || 'N/A'}\nService: ${data.service || 'N/A'}\n\n${data.message}`,
  };

  await transporter.sendMail(mailOptions);
}
