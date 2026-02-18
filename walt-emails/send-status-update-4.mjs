/**
 * Send status update #4 to the Walt waitlist audience via Resend Broadcasts.
 *
 * Usage:
 *   node walt-emails/send-status-update-4.mjs [--send]
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

const SUBJECT = "Walt Status Update #4: Copenhagen Fintech and Full-Time Focus";

const HTML_BODY = `
<div style="padding: 32px 16px;">
  <div style="font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">

    <!-- Heading -->
    <h1 style="color: #ff4800; font-size: 28px; font-weight: 500; letter-spacing: -0.04em; line-height: 1.2; margin: 0 0 8px 0;"><a href="https://walt.is" style="color: #ff4800; text-decoration: none;">Walt Status Update #4</a></h1>
    <p style="color: #7f7f7f; font-size: 14px; font-weight: 400; line-height: 1.5; margin: 0 0 24px 0;">You are receiving this email because you subscribed to updates at <a href="https://walt.is" style="color: #7f7f7f; text-decoration: underline;">walt.is</a></p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 24px 0;">
      Things keep on keeping on!
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 24px 0;">
      January and February were HUGE months for Walt on an engineering side. Some of the biggest hurdles that Walt's vision aimed for were within the engineering, and these challenges were successfully overcome. Now, Walt is moving into a different phase. Here are a couple updates on where we're at!
    </p>

    <!-- Copenhagen Fintech -->
    <h2 style="color: #151515; font-size: 22px; font-weight: 500; letter-spacing: -0.04em; line-height: 1.2; margin: 0 0 12px 0;">Copenhagen Fintech</h2>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 16px 0;">
      Walt and I have accepted an invitation from <a href="https://www.copenhagenfintech.dk/" style="color: #ff4800; text-decoration: underline;">Copenhagen Fintech's</a> incubation program. This is an absolutely huge step for Walt! Copenhagen Fintech is the premier fintech accelerator in the Nordics and the most well-connected to banks and issuers, whom are the keys to accomplishing Walt's vision. Getting warm introductions to issuers is the biggest need (even beyond funding) that Walt has right now.
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 16px 0;">
      Additionally, accelerator programs like Copenhagen Fintech focus on companies with hopes to become extremely profitable and make big investment requests. Walt does not fit this profile. Walt deliberately focuses on modesty and limited features. Additionally, and in contrast to the other companies in the cohort, Walt has no AI focus. Lastly, the founding team intends to ask for as little investment as possible if that need someday arises.
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 32px 0;">
      The fact that Copenhagen Fintech has accepted us into their incubation program despite these big differences from their standard acceptees is an extremely good sign.
    </p>

    <!-- Full-Time Focus -->
    <h2 style="color: #151515; font-size: 22px; font-weight: 500; letter-spacing: -0.04em; line-height: 1.2; margin: 0 0 12px 0;">Full-Time Focus</h2>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 16px 0;">
      Accepting the invitation also comes with the need to devote more time and intention to overcoming the current hurdles Walt must overcome. That means that I (Cole) am moving to work full-time on Walt. This change is something that has been planned for months, and it's very exciting!
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 32px 0;">
      Working on Walt has been incredibly exciting and fun so far. Most of the focus has been on something I was already well-versed in- the engineering build. But now that the proof-of-concept for building a completely private, compliant, tap-to-pay alternative to Google Wallet is complete, the challenges require me to develop new skills. The full-time move is a welcome change.
    </p>

    <!-- Sign-off -->
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 32px 0;">
      Hope y'all are doing well out there!<br>
      Cole &amp; the Walt team<br>
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
