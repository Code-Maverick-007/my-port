// app/actions/contact.ts
'use server'

import nodemailer from 'nodemailer'

type SendEmailResponse = {
  success: boolean
  error?: string
}

export async function sendEmail(formData: FormData): Promise<SendEmailResponse> {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    if (!name || !email || !message) {
      return { success: false, error: "All fields are required" }
    }

    if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASS) {
      return { success: false, error: "Email service not configured" }
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL, // Send to yourself
      replyTo: email,
      subject: `New message from ${name} (${email})`,
      text: message,
      html: `
        <h3>New message from ${name} (${email})</h3>
        <p>${message}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send message' 
    }
  }
}