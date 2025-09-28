import { Resend } from "resend";

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Allow both GET and POST requests
  if (req.method !== "POST" && req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Get email from query params (for GET) or body (for POST)
    const email = req.method === "GET" ? req.query.email : req.body.email;

    // Validate email
    if (!email || !email.includes("@")) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address",
      });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return res.status(500).json({
        success: false,
        error: "Server configuration error - API key missing",
      });
    }

    if (!process.env.RESEND_AUDIENCE_ID) {
      console.error("RESEND_AUDIENCE_ID not configured");
      return res.status(500).json({
        success: false,
        error: "Server configuration error - audience ID missing",
      });
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Update contact status to unsubscribed in Resend audience
    const { data, error } = await resend.contacts.update({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
      unsubscribed: true,
    });

    if (error) {
      console.error("Resend unsubscribe error:", error);

      // Check if contact doesn't exist
      if (error.message && error.message.includes("not found")) {
        return res.status(200).json({
          success: true,
          message: "Email not found in waitlist or already unsubscribed",
        });
      }

      return res.status(400).json({
        success: false,
        error: "Failed to unsubscribe. Please try again.",
      });
    }

    console.log("Contact marked as unsubscribed successfully:", data);

    return res.status(200).json({
      success: true,
      message: "Successfully unsubscribed from the waitlist",
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({
      success: false,
      error: "An unexpected error occurred. Please try again.",
    });
  }
}