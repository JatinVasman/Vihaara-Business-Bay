import { NextResponse } from 'next/server'

/**
 * Test endpoint to verify email configuration
 * Visit: http://localhost:3001/api/test-email
 */
export async function GET() {
  const config = {
    hasResendKey: !!process.env.RESEND_API_KEY,
    resendKeyPrefix: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 8) + '...' : 'NOT SET',
    adminEmail: process.env.ADMIN_EMAIL || 'NOT SET',
    adminPhone: process.env.ADMIN_PHONE || 'NOT SET',
  }

  return NextResponse.json({
    message: 'Email Configuration Check',
    config,
    status: config.hasResendKey && config.adminEmail !== 'NOT SET' ? 'Ready ✅' : 'Not Configured ❌',
    instructions: !config.hasResendKey ? 'Add RESEND_API_KEY to .env.local' : 
                  config.adminEmail === 'NOT SET' ? 'Add ADMIN_EMAIL to .env.local' : 
                  'Configuration looks good!'
  })
}
