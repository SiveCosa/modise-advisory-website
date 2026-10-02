const FIELD_LIMITS = {
  name: 120,
  email: 254,
  phone: 40,
  company: 160,
  service: 120,
  subject: 160,
  message: 5000,
  website: 200,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function asString(value) {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim();
}

function limitField(value, maxLength) {
  return value.slice(0, maxLength);
}

function buildEmailContent(fields) {
  const rows = [
    ["Name", fields.name],
    ["Email", fields.email],
    ["Phone", fields.phone || "Not provided"],
    ["Company", fields.company || "Not provided"],
    ["Service", fields.service || "Not provided"],
    ["Subject", fields.subject || "Not provided"],
    ["Message", fields.message],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;vertical-align:top;width:140px;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;">
      <h2 style="margin:0 0 16px;">New website enquiry</h2>
      <p style="margin:0 0 16px;">A new enquiry was submitted via the Modise Advisory Group contact form.</p>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">
        ${htmlRows}
      </table>
    </div>
  `.trim();

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  return { html, text };
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return jsonResponse(
      { ok: false, message: "Please submit the form as JSON." },
      415,
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse(
      { ok: false, message: "Invalid JSON payload." },
      400,
    );
  }

  if (!payload || typeof payload !== "object") {
    return jsonResponse(
      { ok: false, message: "Invalid form submission." },
      400,
    );
  }

  const honeypot = asString(payload.website);
  if (honeypot) {
    return jsonResponse({
      ok: true,
      message: "Thank you. Your enquiry has been sent successfully.",
    });
  }

  const name = limitField(asString(payload.name), FIELD_LIMITS.name);
  const email = limitField(asString(payload.email), FIELD_LIMITS.email);
  const phone = limitField(asString(payload.phone), FIELD_LIMITS.phone);
  const company = limitField(asString(payload.company), FIELD_LIMITS.company);
  const service = limitField(asString(payload.service), FIELD_LIMITS.service);
  const subject = limitField(asString(payload.subject), FIELD_LIMITS.subject);
  const message = limitField(asString(payload.message), FIELD_LIMITS.message);

  if (!name || !email || !message) {
    return jsonResponse(
      {
        ok: false,
        message: "Please complete the required fields: name, email, and message.",
      },
      400,
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return jsonResponse(
      { ok: false, message: "Please enter a valid email address." },
      400,
    );
  }

  const apiKey = env.RESEND_API_KEY;
  const toEmail = env.CONTACT_TO_EMAIL;
  const fromEmail = env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Contact form misconfigured: missing environment variables.");
    return jsonResponse(
      {
        ok: false,
        message: "Unable to send your enquiry right now. Please try again later.",
      },
      500,
    );
  }

  const fields = { name, email, phone, company, service, subject, message };
  const { html, text } = buildEmailContent(fields);

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New website enquiry from ${name}`,
        html,
        text,
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error("Resend API error:", resendResponse.status, errorBody);
      return jsonResponse(
        {
          ok: false,
          message: "Unable to send your enquiry right now. Please try again later.",
        },
        502,
      );
    }

    return jsonResponse({
      ok: true,
      message: "Thank you. Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form unexpected error:", error);
    return jsonResponse(
      {
        ok: false,
        message: "Unable to send your enquiry right now. Please try again later.",
      },
      500,
    );
  }
}
