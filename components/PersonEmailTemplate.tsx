
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Text,
} from '@react-email/components';
import * as React from "react";

interface PersonEmailTemplateProps {
  firstName: string;
}

export const PersonEmailTemplate: React.FC<Readonly<PersonEmailTemplateProps>> = ({
  firstName,
}) => (
  <Html>
      <Head />
      
      <Body style={main}>
        <Container style={container}>
        <Section style={box}>
          <Text style={maintext}>Kamil Pawłowski</Text>
          
        
          <Text style={paragraph}>Hello {firstName},</Text>
          <Text style={paragraph}>
          I trust this message finds you well.
          </Text>
          <Text style={paragraph}>
          I&apos;m absolutely delighted that you&apos;ve taken the time to reach out to me through my personal portfolio.<br/>
          
          </Text>
          <Text style={paragraph}>
          
          Your interest is greatly appreciated, and I&apos;m excited to connect with you.
          </Text>
          <Text style={paragraph}>
          Please feel free to share your questions, ideas, or any specific topics you&apos;d like to explore. Your input is valuable to me, and I&apos;m here to help.

          </Text>

          <Text style={paragraph}>
            Best regards,
            <br />
            Kamil Pawłowski
          </Text>
          <Hr style={hr}/>
          <Text  style={footer}>Chorzów - Śląsk - Poland</Text>
          </Section>
        </Container>
      </Body>
      
    </Html>
);

export default PersonEmailTemplate;

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
