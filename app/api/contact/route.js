import { NextResponse } from 'next/server'

/**
 * Contact Form API Route
 * POST /api/contact
 * 
 * Accepts: { name, email, phone, message }
 * Returns: { ok: true, received: { name, email } }
 * 
 * TODO: Integrate email service (SendGrid, Netlify Forms, or Nodemailer)
 * - SendGrid: npm install @sendgrid/mail, set SENDGRID_API_KEY in .env
 * - Netlify Forms: Add data-netlify="true" to form element
 * - Other services: Mailgun, AWS SES, Resend, etc.
 */

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json()
    const { name, email, phone, message } = body

    // Server-side validation: required fields (either email or phone must be provided)
    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Missing required fields: name and either email or phone are required' 
        },
        { status: 400 }
      )
    }

    // Validate email format if provided
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { 
            ok: false, 
            error: 'Invalid email address format' 
          },
          { status: 400 }
        )
      }
    }

    // TODO: Send email notification using SendGrid or Netlify
    // Example SendGrid implementation:
    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // await sgMail.send({
    //   to: 'info@vihaarabusinessbay.com',
    //   from: 'noreply@vihaarabusinessbay.com',
    //   subject: `New Contact: ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
    // })

    // Log submission for development
    console.log('📧 Contact form submission:', {
      name: name.trim(),
      email: email?.trim() || 'Not provided',
      phone: phone?.trim() || 'Not provided',
      message: message?.trim() || 'Quick callback request',
      timestamp: new Date().toISOString()
    })

    // Return success response with received data
    return NextResponse.json(
      { 
        ok: true,
        received: {
          name: name.trim(),
          email: email?.trim() || null,
          phone: phone?.trim() || null
        }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Contact form error:', error)
    
    return NextResponse.json(
      { 
        ok: false, 
        error: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    )
  }
}
