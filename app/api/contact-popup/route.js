import { NextResponse } from 'next/server'
import { Resend } from 'resend'

/**
 * Contact Popup API Route
 * Handles form submissions and sends email/WhatsApp notifications
 * 
 * SETUP REQUIRED:
 * 1. Install Resend: npm install resend
 * 2. Get API key from: https://resend.com/api-keys
 * 3. Add to .env.local: RESEND_API_KEY=your_key_here
 * 4. Add: ADMIN_EMAIL=your-email@example.com
 * 5. Add: ADMIN_PHONE=919769045555 (for WhatsApp notifications)
 */

// Initialize Resend (only if API key is available)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request) {
  try {
    console.log('📥 Contact form submission received')
    const body = await request.json()
    const { name, email, mobile, enableWhatsApp } = body
    console.log('📋 Form data:', { name, email, mobile, enableWhatsApp })

    // Validate input
    if (!name || !email || !mobile) {
      console.log('❌ Validation failed: Missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate mobile number (10 digits)
    const mobileRegex = /^[0-9]{10}$/
    if (!mobileRegex.test(mobile)) {
      return NextResponse.json(
        { error: 'Invalid mobile number' },
        { status: 400 }
      )
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Prepare notification content
    const timestamp = new Date().toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short'
    })

    // 1. Send Email Notification
    console.log('📧 Attempting to send email...')
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY)
    console.log('ADMIN_EMAIL:', process.env.ADMIN_EMAIL)
    
    if (resend && process.env.ADMIN_EMAIL) {
      try {
        const emailResult = await resend.emails.send({
          from: 'Vihaara Business Bay <onboarding@resend.dev>', // Use your verified domain
          to: process.env.ADMIN_EMAIL,
          subject: `🎯 New Lead: ${name} - Vihaara Business Bay`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #0a4d5c 0%, #0a4d5c 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                  .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                  .field { margin-bottom: 15px; }
                  .label { font-weight: bold; color: #0a4d5c; }
                  .value { color: #333; }
                  .whatsapp { background: #25D366; color: white; padding: 10px; border-radius: 5px; margin-top: 20px; }
                  .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1 style="margin: 0;">🎯 New Contact Lead</h1>
                    <p style="margin: 10px 0 0 0; opacity: 0.9;">Vihaara Business Bay</p>
                  </div>
                  <div class="content">
                    <div class="field">
                      <span class="label">👤 Name:</span>
                      <span class="value">${name}</span>
                    </div>
                    <div class="field">
                      <span class="label">📧 Email:</span>
                      <span class="value"><a href="mailto:${email}">${email}</a></span>
                    </div>
                    <div class="field">
                      <span class="label">📱 Mobile:</span>
                      <span class="value"><a href="tel:+91${mobile}">+91 ${mobile}</a></span>
                    </div>
                    <div class="field">
                      <span class="label">⏰ Received:</span>
                      <span class="value">${timestamp}</span>
                    </div>
                    ${enableWhatsApp ? `
                      <div class="whatsapp">
                        <strong>✅ WhatsApp Updates Enabled</strong>
                        <p style="margin: 5px 0 0 0; font-size: 14px;">
                          Click to message: <a href="https://wa.me/91${mobile}" style="color: white; text-decoration: underline;">wa.me/91${mobile}</a>
                        </p>
                      </div>
                    ` : ''}
                  </div>
                  <div class="footer">
                    <p>This lead was submitted via the website contact popup</p>
                  </div>
                </div>
              </body>
            </html>
          `,
        })
        console.log('✅ Email notification sent successfully', emailResult)
      } catch (emailError) {
        console.error('❌ Email sending failed:', emailError)
        console.error('Error details:', emailError.message)
        // Don't fail the request if email fails
      }
    } else {
      console.log('⚠️ Email not configured. Resend:', !!resend, 'Admin email:', !!process.env.ADMIN_EMAIL)
    }

    // 2. Send WhatsApp Notification (if enabled)
    // This requires a WhatsApp Business API integration
    if (enableWhatsApp && process.env.WHATSAPP_API_URL && process.env.WHATSAPP_API_KEY) {
      try {
        // Example using a generic WhatsApp API provider
        // You'll need to replace this with your actual provider's API
        await fetch(process.env.WHATSAPP_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.WHATSAPP_API_KEY}`,
          },
          body: JSON.stringify({
            to: `91${process.env.ADMIN_PHONE}`,
            message: `🎯 *New Lead - Vihaara Business Bay*\n\n👤 Name: ${name}\n📧 Email: ${email}\n📱 Mobile: +91 ${mobile}\n⏰ Time: ${timestamp}\n\n✅ WhatsApp updates enabled`,
          }),
        })
        console.log('✅ WhatsApp notification sent successfully')
      } catch (whatsappError) {
        console.error('❌ WhatsApp notification failed:', whatsappError)
        // Don't fail the request if WhatsApp fails
      }
    }

    // 3. Optional: Send thank you email to user
    if (resend) {
      try {
        await resend.emails.send({
          from: 'Vihaara Business Bay <onboarding@resend.dev>',
          to: email,
          subject: 'Thank you for your interest in Vihaara Business Bay',
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #0a4d5c 0%, #0a4d5c 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                  .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                  .button { display: inline-block; background: #d4b896; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                  .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1 style="margin: 0;">Welcome to Vihaara Business Bay</h1>
                  </div>
                  <div class="content">
                    <p>Dear ${name},</p>
                    <p>Thank you for your interest in <strong>Vihaara Business Bay</strong> - India's First Sparkle Tower!</p>
                    <p>Our team will get in touch with you shortly to discuss your requirements and schedule a site visit.</p>
                    <p style="text-align: center;">
                      <a href="https://wa.me/919769045555?text=Hi,%20I%20want%20to%20know%20more%20about%20Vihaara%20Business%20Bay" class="button">
                        💬 Chat on WhatsApp
                      </a>
                    </p>
                    <p><strong>Contact Details:</strong><br>
                    📞 +91 9769045555<br>
                    📧 vihaarabusinessbay@gmail.com</p>
                  </div>
                  <div class="footer">
                    <p>Vihaara Business Bay | Dombivli East, Thane</p>
                  </div>
                </div>
              </body>
            </html>
          `,
        })
        console.log('✅ Thank you email sent to user')
      } catch (error) {
        console.error('❌ Thank you email failed:', error)
      }
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Contact information received successfully',
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
