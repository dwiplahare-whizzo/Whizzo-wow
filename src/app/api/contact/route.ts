import { NextResponse } from "next/server";
import { notify } from "@/lib/notify";

/**
 * Contact intake. Currently logs + validates; wire to email/CRM in Phase 5.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || message.length < 5) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 422 });
  }

  await notify({ kind: "contact", fields: { context: body.context, name, email, company: body.company, country: body.country, message } });

  return NextResponse.json({ ok: true });
}
