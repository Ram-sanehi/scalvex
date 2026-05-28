import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';
import { contactSchema } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Honeypot Spam Protection
    if (body.honeypot) {
      console.log('Spam detected via honeypot field');
      return NextResponse.json({ success: true, message: 'Inquiry received' });
    }

    // 2. Validate Fields
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input fields', details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, email, company, website, budget, goals, message } = result.data;

    // 3. Send Notification Email to Ram
    const adminEmailPromise = resend.emails.send({
      from: 'Scalvex Studio <inquiry@scalvex.in>',
      to: ['ram@scalvex.in'],
      replyTo: email,
      subject: `New Scalvex Inquiry: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Scalvex Inquiry</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #0b0f19; color: #f3f4f6; margin: 0; padding: 40px 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; padding: 32px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); }
            h2 { color: #3bafda; font-size: 24px; margin-top: 0; margin-bottom: 24px; border-bottom: 1px solid #1f2937; padding-bottom: 16px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 12px; text-transform: uppercase; color: #9ca3af; letter-spacing: 1px; font-weight: bold; margin-bottom: 6px; }
            .value { font-size: 16px; color: #f3f4f6; line-height: 1.5; }
            .message-box { background-color: #0b0f19; border: 1px solid #1f2937; border-radius: 8px; padding: 16px; font-style: italic; color: #d1d5db; }
            .footer { margin-top: 32px; font-size: 12px; color: #4b5563; text-align: center; border-top: 1px solid #1f2937; padding-top: 16px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Project Inquiry</h2>
            
            <div class="field">
              <div class="label">From</div>
              <div class="value"><strong>${name}</strong> (${email})</div>
            </div>
            
            ${company ? `
            <div class="field">
              <div class="label">Company</div>
              <div class="value">${company}</div>
            </div>` : ''}

            ${website ? `
            <div class="field">
              <div class="label">Website</div>
              <div class="value"><a href="${website}" style="color: #3bafda; text-decoration: none;">${website}</a></div>
            </div>` : ''}

            ${budget ? `
            <div class="field">
              <div class="label">Estimated Budget</div>
              <div class="value">${budget}</div>
            </div>` : ''}

            <div class="field">
              <div class="label">Project Goals</div>
              <div class="value">${goals}</div>
            </div>

            <div class="field">
              <div class="label">Inquiry Message</div>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="footer">
              Submitted on ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} (IST)
            </div>
          </div>
        </body>
        </html>
      `
    });

    // 4. Send Auto-Response Email to Client
    const clientEmailPromise = resend.emails.send({
      from: 'Ram Vishwakarma <ram@scalvex.in>',
      to: [email],
      subject: 'Your Scalvex Inquiry Has Been Received',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Inquiry Received</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #0b0f19; color: #f3f4f6; margin: 0; padding: 40px 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #111827; border: 1px dashed #3bafda/30; border-radius: 20px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); }
            .logo { color: #3bafda; font-size: 20px; font-weight: bold; letter-spacing: 1px; margin-bottom: 32px; }
            p { font-size: 15px; line-height: 1.7; color: #d1d5db; margin-bottom: 20px; }
            .signature { margin-top: 40px; border-t: 1px solid #1f2937; padding-top: 24px; }
            .name { font-weight: bold; color: #f3f4f6; font-size: 16px; }
            .title { font-size: 13px; color: #9ca3af; margin-top: 2px; }
            .footer { margin-top: 48px; font-size: 11px; color: #4b5563; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">SCALVEX</div>
            
            <p>Hello ${name},</p>
            
            <p>
              Thanks for reaching out to Scalvex. I’ve received your project details and want to thank you for taking the time to share them.
            </p>
            
            <p>
              I will personally review your inquiry and website layout, and get back to you within 24 hours with some initial, actionable observations regarding your current search visibility, speed, and conversion opportunities.
            </p>
            
            <p>
              If we need any clarifying details before scheduling our call, I'll send a brief note directly to this email address.
            </p>
            
            <div class="signature">
              <div class="name">Ram Vishwakarma</div>
              <div class="title">Founder, Scalvex</div>
            </div>
            
            <div class="footer">
              &copy; ${new Date().getFullYear()} Scalvex. All rights reserved.
            </div>
          </div>
        </body>
        </html>
      `
    });

    // Wait for both emails to be sent
    await Promise.all([adminEmailPromise, clientEmailPromise]);

    return NextResponse.json({ success: true, message: 'Inquiry sent successfully' });
  } catch (error: any) {
    console.error('Error handling contact form API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', message: error.message },
      { status: 500 }
    );
  }
}
