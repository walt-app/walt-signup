/**
 * Send status update #5 to the Walt waitlist audience via Resend Broadcasts.
 *
 * Usage:
 *   node walt-emails/send-status-update-5.mjs [--send]
 *
 * Without --send, this does a dry run (creates the broadcast but doesn't send it).
 * With --send, it creates and sends the broadcast immediately.
 *
 * Requires RESEND_API_KEY and RESEND_AUDIENCE_ID in .env.local
 */

import { Resend } from "resend";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local
function loadEnv() {
  try {
    const envPath = resolve(__dirname, "../.env.local");
    const envContent = readFileSync(envPath, "utf-8");
    for (const line of envContent.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIndex = trimmed.indexOf("=");
      if (eqIndex === -1) continue;
      const key = trimmed.slice(0, eqIndex).trim();
      const value = trimmed.slice(eqIndex + 1).trim();
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  } catch (e) {
    // .env.local may not exist if env vars are set another way
  }
}

loadEnv();

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
  console.error("Missing RESEND_API_KEY or RESEND_AUDIENCE_ID in environment.");
  process.exit(1);
}

const shouldSend = process.argv.includes("--send");

// --- Email content ---
// Edit the subject and HTML body below, then run the script.

const SUBJECT = "Walt Status Update #5: Shifting to Full Time";

const HTML_BODY = `
<div style="padding: 32px 16px;">
  <div style="font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">

    <!-- Heading -->
    <h1 style="color: #ff4800; font-size: 28px; font-weight: 500; letter-spacing: -0.04em; line-height: 1.2; margin: 0 0 8px 0;"><a href="https://walt.is" style="color: #ff4800; text-decoration: none;">Walt Status Update #5</a></h1>
    <p style="color: #7f7f7f; font-size: 14px; font-weight: 400; line-height: 1.5; margin: 0 0 24px 0;">You are receiving this email because you subscribed to updates at <a href="https://walt.is" style="color: #7f7f7f; text-decoration: underline;">walt.is</a></p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 24px 0;">
      Hi everyone!
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 24px 0;">
      What an exciting update!
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 24px 0;">
      Today turns the page for Walt. For the last year, the founding team has been using their evenings and weekends working on Walt, building architecture and ensuring the core values of Walt's privacy-first ethics are baked into the product. That was enormously successful, and the proof-of-concept that the team initially created is now alive in a beta offering in the Google Play store.
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 24px 0;">
      But today, something new begins - The team begins a 2 month, full-time intensive program at the Copenhagen Fintech incubator program!
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 24px 0;">
      The program goes through a thorough deep dive into all facets of the Walt offering. Branding, legal, engineering, marketing. All aspects of the company and the product will be analyzed and polished. This is TREMENDOUS news because, up until now, Walt has been entirely focused on the engineering side and making sure that the privacy goals were legitimately possible. Having some critical analysis on the branding, for instance, will likely yield some huge (and embarrassing) improvements. (For those of you who have noticed how amateur our design skills are, thank you for sticking around despite this). The team will be pitching Walt to some of the largest investors in Denmark and more importantly, to the largest banks in the Nordics. And while Walt's aspirations are very much beyond just a product for the Nordics, starting locally and using Denmark as a testing ground is perfect, as 85% of in-store transactions in the Nordic region are with tap-to-pay. You can check out how we frame Walt to banks (and why banks also benefit from Walt's success) in our pitch deck.
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 32px 0;">
      And more importantly, this is a mindset shift. Walt is no longer a hobby project that we've been building in our basement. While it's true that's how it started, it's very clear from customer conversations, inbound investor messages, and the subscription waitlist that Walt has touched on a problem that has very solid grounding with people right now. For me, this means that I can no longer act like I have one foot in, one foot out. The commitment to working full time, without pay, on Walt means that I must take the problem and the potential customers of Walt seriously.
    </p>

    <!-- Sign-off -->
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 32px 0;">
      Thank you for continuing to support us on our journey!<br>
      Cole and the Walt team!<br>
      <em>(This email was written by a human)</em>
    </p>

    <!-- Footer -->
    <div style="border-top: 2px solid #ff4800; padding-top: 20px;">
      <p style="color: #7f7f7f; font-size: 14px; font-weight: 400; line-height: 1.5; margin: 0 0 8px 0;">You're receiving this because you signed up for the Walt waitlist.</p>
      <p style="margin: 0;"><a href="https://walt.is/api/public-unsubscribe?email={{email}}" style="color: #7f7f7f; font-size: 14px; text-decoration: underline;">Click here to unsubscribe</a></p>
    </div>

  </div>
</div>
`;

// --- Send logic ---

async function main() {
  const resend = new Resend(RESEND_API_KEY);

  console.log("Subject:", SUBJECT);
  console.log("Audience:", RESEND_AUDIENCE_ID);
  console.log(
    "Mode:",
    shouldSend ? "SENDING" : "DRY RUN (pass --send to send for real)",
  );
  console.log();

  // Create the broadcast
  const { data: broadcast, error: createError } =
    await resend.broadcasts.create({
      audienceId: RESEND_AUDIENCE_ID,
      from: "Cole <cole@updates.walt.is>",
      replyTo: "cole@walt.is",
      subject: SUBJECT,
      html: HTML_BODY,
    });

  if (createError) {
    console.error("Failed to create broadcast:", createError);
    process.exit(1);
  }

  console.log("Broadcast created:", broadcast.id);

  if (!shouldSend) {
    console.log(
      "\nDry run complete. Review the broadcast in your Resend dashboard,",
    );
    console.log("or re-run with --send to send immediately.");
    return;
  }

  // Send it
  const { data: sendResult, error: sendError } = await resend.broadcasts.send(
    broadcast.id,
  );

  if (sendError) {
    console.error("Failed to send broadcast:", sendError);
    process.exit(1);
  }

  console.log("Broadcast sent!", sendResult);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
