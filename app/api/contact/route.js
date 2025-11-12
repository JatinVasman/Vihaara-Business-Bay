import { NextResponse } from 'next/server'

/**
 * Contact Form API Route
 * POST /api/contact
 * 
 * Accepts: { name, email, phone, message }
 * Returns: { ok: boolean, message?: string, error?: string }
 * 
 * TODO: Implement actual email sending logic
 * - Use a service like SendGrid, Mailgun, or Nodemailer
 * - Store submissions in a database
 * - Send confirmation emails to users
 * - Notify admin team of new inquiries
 */

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'All fields are required' 
        },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Invalid email address' 
        },
        { status: 400 }
      )
    }

    // Basic phone validation (Indian mobile numbers)
    const phoneRegex = /^[6-9]\d{9}$/
    const cleanPhone = phone.replace(/\s/g, '')
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Invalid phone number. Please enter a valid 10-digit Indian mobile number.' 
        },
        { status: 400 }
      )
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Message must be at least 10 characters long' 
        },
        { status: 400 }
      )
    }

    // TODO: Implement email sending logic here
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // const msg = {
    //   to: 'info@vihaarabusinessbay.com',
    //   from: 'noreply@vihaarabusinessbay.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    //   html: `<strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Phone:</strong> ${phone}<br><strong>Message:</strong> ${message}`,
    // }
    // await sgMail.send(msg)

    // TODO: Save to database
    // Example with Prisma or MongoDB:
    // await prisma.contact.create({
    //   data: { name, email, phone, message, createdAt: new Date() }
    // })

    // Log the submission (for now)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString()
    })

    // Return success response
    return NextResponse.json(
      { 
        ok: true, 
        message: 'Thank you for your inquiry. We will get back to you soon!' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { 
        ok: false, 
        error: 'An error occurred while processing your request. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
