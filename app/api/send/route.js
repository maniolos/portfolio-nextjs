import { PersonEmailTemplate } from '../../../components/PersonEmailTemplate';
import { MyEmailTemplate } from '../../../components/MyEmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey);
const personalEmailAddress = 'pawlowskidev@gmail.com';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, name, message, phone, subject } = body;
    
    // Send the email to the person who filled out the form
    const personEmailData = await resend.emails.send({
      from: 'Kamil <kamilpawlowski@kamilweb.dev>',
      to: email,
      subject: 'Confirmation: Your Message Has Been Received',
      react: PersonEmailTemplate({
        firstName: name,
        email,
        phone,
        subject,
        message,
      }),
    });

    // Send the notification email to your personal email address
    const myEmailData = await resend.emails.send({
      from: 'Kamil <kamilpawlowski@kamilweb.dev>',
      to: personalEmailAddress,
      subject: 'New Contact Form Submission',
      react: MyEmailTemplate({
        firstName: name,
        email,
        phone,
        subject,
        message,
      }),
    });

    if (personEmailData.id && myEmailData.id) {
      console.log('Emails sent successfully');
      return NextResponse.json({ message: 'Emails sent!' });
      
    } else {
      console.log('Email sending failed');
      return NextResponse.json({ error: 'Email sending failed' });
    }
  } catch (error) {
    console.error('Error:', error);
    console.log('Internal server error');
    return NextResponse.json({ error: 'Internal server error' });
  }
}
