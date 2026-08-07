export interface Env {
  ALLOWED_ORIGINS: string;
  TO_EMAIL: string;
  FROM_EMAIL: string;
  SMTP2GO_API_KEY: string;
}

interface BookingPayload {
  name: string;
  email: string;
  organization: string;
  role?: string;
  location?: string;
  eventType: string;
  timeframe?: string;
  groupSize?: string;
  message?: string;
  // Honeypot — real visitors never fill this in.
  company?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function corsHeaders(origin: string | null, allowedOrigins: string[]): HeadersInit {
  const allowOrigin = origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

function fields(v: BookingPayload): Array<[string, string]> {
  const rows: Array<[string, string]> = [
    ['Name', v.name],
    ['Email', v.email],
    ['School / organization', v.organization],
  ];

  if (v.role) rows.push(['Role', v.role]);
  if (v.location) rows.push(['Location', v.location]);
  rows.push(['Type of event', v.eventType]);
  if (v.timeframe) rows.push(['Dates in mind', v.timeframe]);
  if (v.groupSize) rows.push(['Roughly how many kids', v.groupSize]);

  return rows;
}

function messageBody(v: BookingPayload): string {
  const lines = ['New visit request from the website.', ''];
  for (const [label, value] of fields(v)) lines.push(`${label}: ${value}`);
  if (v.message) lines.push('', 'Message:', v.message);

  return lines.join('\n');
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function htmlBody(v: BookingPayload): string {
  const rows = fields(v)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:6px 16px 6px 0; color:#6b6b6b; white-space:nowrap; vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:6px 0;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join('');

  const messageSection = v.message
    ? `
      <div style="margin-top:20px;">
        <div style="color:#6b6b6b; margin-bottom:6px;">Message</div>
        <div style="white-space:pre-wrap;">${escapeHtml(v.message)}</div>
      </div>`
    : '';

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; color:#1a1a1a; font-size:15px; max-width:560px;">
      <h2 style="margin:0 0 16px; font-size:18px;">New visit request</h2>
      <table style="border-collapse:collapse; width:100%;">${rows}</table>
      ${messageSection}
    </div>`;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const allowedOrigins = env.ALLOWED_ORIGINS.split(',').map((o) => o.trim());
    const origin = request.headers.get('Origin');
    const headers = corsHeaders(origin, allowedOrigins);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ ok: false, error: 'Method not allowed' }), {
        status: 405,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    if (!origin || !allowedOrigins.includes(origin)) {
      return new Response(JSON.stringify({ ok: false, error: 'Forbidden' }), {
        status: 403,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    let payload: BookingPayload;
    try {
      payload = await request.json();
    } catch {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    // Honeypot field — bots tend to fill in every input they find.
    if (payload.company) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    if (
      !payload.name?.trim() ||
      !payload.email?.trim() ||
      !EMAIL_RE.test(payload.email) ||
      !payload.organization?.trim() ||
      !payload.eventType?.trim()
    ) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing or invalid fields' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    const smtp2goRes = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        api_key: env.SMTP2GO_API_KEY,
        to: [`Miss Lisa <${env.TO_EMAIL}>`],
        sender: `Miss Lisa Books Website <${env.FROM_EMAIL}>`,
        subject: `Visit request — ${payload.organization}`,
        text_body: messageBody(payload),
        html_body: htmlBody(payload),
        custom_headers: [{ header: 'Reply-To', value: `${payload.name} <${payload.email}>` }],
      }),
    });

    const smtp2goJson = await smtp2goRes.json<{ data?: { succeeded?: number } }>().catch(() => null);
    const sent = smtp2goRes.ok && (smtp2goJson?.data?.succeeded ?? 0) > 0;

    if (!sent) {
      return new Response(JSON.stringify({ ok: false, error: 'Send failed' }), {
        status: 502,
        headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  },
};
