/**
 * Send a status update email to the Walt waitlist audience via Resend Broadcasts.
 *
 * Usage:
 *   node walt-emails/send-status-update.mjs [--send]
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

const SUBJECT = "Walt Status Update";

const HTML_BODY = `
<div style="padding: 32px 16px;">
  <div style="font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">

    <!-- Logo -->
    <div style="margin-bottom: 32px;">
      <a href="https://walt.is" style="font-size: 36px; font-weight: 500; letter-spacing: -0.04em; color: #ff4800; text-decoration: none;">Walt</a>
    </div>

    <!-- Heading and intro -->
    <h1 style="color: #151515; font-size: 28px; font-weight: 500; letter-spacing: -0.04em; line-height: 1.2; margin: 0 0 16px 0;">Status Update</h1>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 16px 0;">
      Hello Walt supporters!
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 16px 0;">
      What a 6 months it has been! The team hasn't really left our computers since the company was formed! We've been (very) hard at work building. We've focused primarily on the engineering side so far, building out the secure, completely private Android wallet application.
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 16px 0;">
      And it's gone SO GREAT!!! Besides the tremendous success of the engineering build, it's also been the joy of a lifetime to build something that we really believe in, and that we truly believe benefits real humans. And that joy and passion has really come through in the way the application looks and feels.
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 24px 0;">
      Have a look at some of these primary screens for the application:
    </p>

    <!-- Screenshots -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
      <tr>
        <td width="33%" style="padding: 0 4px 0 0;">
          <img src="https://walt.is/promo-screen.jpg" alt="Promo screen" width="180" style="width: 100%; height: auto; display: block; border-radius: 12px;" />
        </td>
        <td width="34%" style="padding: 0 4px;">
          <img src="https://walt.is/add-card.jpg" alt="Add card screen" width="180" style="width: 100%; height: auto; display: block; border-radius: 12px;" />
        </td>
        <td width="33%" style="padding: 0 0 0 4px;">
          <img src="https://walt.is/intro-screen.jpg" alt="Intro screen" width="180" style="width: 100%; height: auto; display: block; border-radius: 12px;" />
        </td>
      </tr>
    </table>

    <!-- Request for Intros -->
    <h2 style="color: #151515; font-size: 22px; font-weight: 500; letter-spacing: -0.04em; line-height: 1.2; margin: 0 0 12px 0;">Request for Intros!</h2>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 16px 0;">
      But now that the engineering is largely completed, now begins the hard part- the partnerships phase.
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 16px 0;">
      Before Walt can be used by actual humans, "issuers" like banks and neo-banks have to approve Walt to be an acceptable app for their bank card to be loaded into. This sounds like a small task! They just need to click "OK" on their acceptance screen!
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 16px 0;">
      But it was well known before starting that this is the most difficult task for Walt and the team. Right now, most issuers across the globe have a list of just 2 accepted apps for their cards to be loaded into - Apple Pay and Google Wallet (and sometimes Samsung Pay, and very rarely Garmin Pay).
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 16px 0;">
      We're making tremendous progress. We have very strong starts with two small issuers with relationships to the team.
      But we'll need many, many more issuers to accept Walt if we're ever going to allow the general population to begin using Walt.
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 32px 0;">
      So this is where we need your help, friendly supporters.
      If you have any personal connections with any issuers (eg. a bank or fintech neo-bank), <span style="text-decoration: underline;">the team at Walt would love any warm intros.</span>
    </p>

    <!-- Coming Up Next -->
    <h2 style="color: #151515; font-size: 22px; font-weight: 500; letter-spacing: -0.04em; line-height: 1.2; margin: 0 0 12px 0;">Coming Up Next</h2>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 16px 0;">
      We continue to update our roadmap on the walt.is website. The immediate next steps are to focus on onboarding our first issuer and then to test the end-to-end flow of add card => insert card details => start using tap-to-pay with Walt.
    </p>
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 32px 0;">
      But beyond that, we have an exciting engineering update as well, that we'll share in March!
    </p>

    <!-- Sign-off -->
    <p style="color: #151515; font-size: 16px; font-weight: 400; line-height: 1.6; letter-spacing: -0.01em; margin: 0 0 32px 0;">
      Good luck out there, everyone!<br>
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
