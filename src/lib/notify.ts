/**
 * Outbound notification seam for form submissions (contact).
 *
 * Phase 5 leaves this as a single pluggable function. To go live, implement one of:
 *  - transactional email (Resend / Postmark / SES) to the WhizzoWow / Whizzo sales inbox
 *  - a CRM webhook (HubSpot / Pipedrive)
 *  - append to a database table
 *
 * Configure via env (e.g. NOTIFY_WEBHOOK_URL) and fill in the branch below.
 */

export interface Submission {
  kind: "contact";
  reference?: string;
  fields: Record<string, unknown>;
}

export async function notify(sub: Submission): Promise<void> {
  const webhook = process.env.NOTIFY_WEBHOOK_URL;

  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...sub, at: new Date().toISOString() }),
      });
      return;
    } catch (err) {
      console.error("[notify] webhook failed", err);
    }
  }

  // Fallback: structured log so submissions are never silently lost in dev / pre-launch.
  console.log("[notify]", sub.kind, sub.reference ?? "", JSON.stringify(sub.fields));
}
