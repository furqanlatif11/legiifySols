import nodemailer from 'nodemailer';

export default async function handler(req:any, res:any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fullName, email, company, service, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const emailUser = process.env.EMAIL_USER;
     const emailPass = process.env.EMAIL_PASS;
     if (!emailUser || !emailPass) {
       throw new Error('Email credentials not configured');
     }
   
     const transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: { user: emailUser, pass: emailPass },
     });
   
     const mailOptions = {
       from: emailUser,
       to: emailUser,
       subject: `New inquiry from ${fullName}`,
       text: `Full Name: ${fullName}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nService: ${service || 'N/A'}\n\n${message}`,
     };
   
     await transporter.sendMail(mailOptions);
   
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Unable to send message" });
  }
}