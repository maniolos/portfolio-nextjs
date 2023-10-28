import * as React from 'react';

interface PersonEmailTemplateProps {
  name: string;
}

export const PersonEmailTemplate: React.FC<Readonly<PersonEmailTemplateProps>> = ({
  name,
}) => (
  <div>
    <h1>Thank you, {name}!</h1>
    <p>Thank you for contacting us. We will get back to you as soon as possible.</p>
  </div>
);