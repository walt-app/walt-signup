import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, country, bank } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    if (!country && !bank) {
      return res.status(200).json({ success: true });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const details = [
      country && `Country: ${country}`,
      bank && `Bank: ${bank}`,
    ]
      .filter(Boolean)
      .join("\n");

    await resend.emails.send({
      from: "Walt Waitlist <cole@updates.walt.is>",
      to: "cole@walt.is",
      subject: `Waitlist profile: ${email}`,
      text: `${email} shared additional info:\n\n${details}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({ error: "An unexpected error occurred" });
  }
}
