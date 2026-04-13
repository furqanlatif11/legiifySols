import { sendInquiryEmail } from "../lib/mail";

export default async function handler(req:any, res:any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fullName, email, company, service, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await sendInquiryEmail({ fullName, email, company, service, message });
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Unable to send message" });
  }
}