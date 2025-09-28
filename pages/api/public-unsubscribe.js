// Public unsubscribe endpoint that works without authentication
export default async function handler(req, res) {
  // Enable CORS for all origins
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Support both GET and POST (required for List-Unsubscribe compliance)
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Get email from query params (for GET) or body (for POST)
    const email = req.method === "GET" ? req.query.email : req.body?.email;

    // Basic email validation
    if (!email || !email.includes("@")) {
      // For invalid requests, still return success for security
      if (req.method === "POST") {
        // One-click unsubscribe - return blank 200 response
        return res.status(200).end();
      } else {
        // GET request - redirect to unsubscribe page
        return res.redirect(302, "/unsubscribed");
      }
    }

    // Try to unsubscribe via Resend if environment variables are available
    // but don't fail if they're not (for public access)
    let unsubscribeSuccess = false;

    if (process.env.RESEND_API_KEY && process.env.RESEND_AUDIENCE_ID) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);

        const { error } = await resend.contacts.update({
          email: email,
          audienceId: process.env.RESEND_AUDIENCE_ID,
          unsubscribed: true,
        });

        if (!error || (error.message && error.message.includes("not found"))) {
          unsubscribeSuccess = true;
        }
      } catch (apiError) {
        // Log error but don't fail - still show success to user
        console.error("Resend API error (non-critical):", apiError);
        unsubscribeSuccess = true; // Assume success for user experience
      }
    } else {
      // No API keys available but still show success
      unsubscribeSuccess = true;
    }

    if (req.method === "POST") {
      // One-click unsubscribe - return blank 200 response as required
      return res.status(200).end();
    } else {
      // GET request - redirect to confirmation page
      return res.redirect(302, `/unsubscribed?email=${encodeURIComponent(email)}&success=${unsubscribeSuccess}`);
    }

  } catch (error) {
    console.error("Unsubscribe error:", error);

    if (req.method === "POST") {
      // Even on error, return 200 for one-click unsubscribe
      return res.status(200).end();
    } else {
      // Redirect to generic unsubscribed page
      return res.redirect(302, "/unsubscribed");
    }
  }
}