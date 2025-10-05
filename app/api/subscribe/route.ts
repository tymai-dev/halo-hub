import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = String(body.email || '').trim();
    const role = String(body.role || 'other').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
    }
    const resendKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL || 'hello@halohub.com';
    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({ from: 'HaloHub <noreply@halohub.com>', to: adminEmail, subject: 'New pilot signup', text: `Email: ${email}\nRole: ${role}` });
      await resend.emails.send({ from: 'HaloHub <noreply@halohub.com>', to: email, subject: 'Welcome to the HaloHub pilot', text: 'Thanks for joining. We\'ll be in touch with next steps and transparency updates.' });
    } else {
      console.log('[signup]', { email, role });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}
