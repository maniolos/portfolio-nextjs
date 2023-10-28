// MyEmailTemplate.js
import * as React from 'react';

interface EmailTemplateProps {
  firstName: string; 
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const MyEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, 
  email,
  phone,
  subject,
  message,
}) => {
  // Add a console.log statement to check the value of "firstName"
  return (
    <div>
      <h1>New Contact Form Submission</h1>
      <p>You have received a new contact form submission. Here are the details:</p>
      <ul>
        <li><strong>Name:</strong> {firstName}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Phone:</strong> {phone}</li>
        <li><strong>Subject:</strong> {subject}</li>
      </ul>
      <p><strong>Message:</strong></p>
      <p>{message}</p>
    </div>
  );
};