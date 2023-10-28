// MyEmailTemplate.js
import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const MyEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  subject,
  message,
}) => (
  
  
  <div>
    <h1>New Contact Form Submission</h1>
    <p>You have received a new contact form submission. Here are the details:</p>
    <ul>
      <li><strong>Name:</strong> {name}</li>
      <li><strong>Email:</strong> {email}</li>
      <li><strong>Phone:</strong> {phone}</li>
      <li><strong>Subject:</strong> {subject}</li>
    </ul>
    <p><strong>Message:</strong></p>
    <p>{message}</p>
  </div>
);