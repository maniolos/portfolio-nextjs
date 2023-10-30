// MyEmailTemplate.js
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from "react";

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
}) => (
<Html>
  <Head />

  <Preview>
    New message!
  </Preview>
  <Body style={main}>
    <Container style={container}>
      <Section style={box}>
        <Text style={maintext}>Kamil Pawłowski</Text>

        <Text style={paragraph}>Hello Kamil,</Text>
        <Text style={paragraph}>
          You have received an email from '{email}' <br/> regarding the subject:<br/> {subject}
        </Text>
        <Text style={paragraph}>
          Message: <br/>{message}
        </Text>
        <Text style={paragraph}>
          You can reach {firstName} at the following contact details:<br/>
          - Email: {email}<br/>
          - Phone: {phone}
        </Text>
        <Text style={paragraph}>
          Feel free to respond to this email or contact {firstName} using the provided contact information for further discussion.
        </Text>

        <Text style={paragraph}>
          Best regards,
          <br />
          Kamil Pawłowski
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Chorzów - Śląsk - Poland</Text>
      </Section>
    </Container>
  </Body>
</Html>
);

export default MyEmailTemplate;

const maintext = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '40px',
  fontWeight: 'bold',
  paddingBottom: '50px',
  textShadow: '1px 1px 3px #8F8F8F',
  textAlign: 'center' as const,
  color: '#000000'
  
}
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};
const container = {
  backgroundColor: '#ffffff',
  margin: '40px auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  border: '1px solid #eee',
  borderRadius: '5px',
  boxShadow: '0 5px 10px rgba(20,50,70,.2)',
};
const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  paddingBottom: '10px',
  color: '#000000',
};
const hr = {
  borderColor: '#cccccc',
  margin: '15px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
const box = {
  padding: '0 48px',
};