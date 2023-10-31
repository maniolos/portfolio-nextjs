'use client'
import React, { useState, useEffect } from 'react';
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Input, Textarea } from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/react';
import { faInstagram, faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Contact() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const [descriptionValue, setdescriptionValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [buttonColor, setButtonColor] = useState("danger");
  const [submitMessage, setSubmitMessage] = useState("");

  const validateEmail = (email: string): boolean => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);


  const isFormValid = React.useMemo(() => {
    const isEmailValid = validateEmail(emailValue);
    const isNameValid = nameValue !== "";
    const isSubjectValid = subjectValue !== "";
    const isDescriptionValid = descriptionValue !== "";

    return isEmailValid && isNameValid && isSubjectValid && isDescriptionValid;
  }, [emailValue, nameValue, subjectValue, descriptionValue]);

  const isEmailInvalid = React.useMemo(() => {
    if (emailValue === "") return false;

    return validateEmail(emailValue) ? false : true;
  }, [emailValue]);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const sendEmail = async () => {
    if (isFormValid) {
      setIsLoading(true);
  
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: nameValue,
            email: emailValue,
            phone: phoneValue,
            subject: subjectValue,
            message: descriptionValue,
          }),
          
        });
  
        if (response.status === 200) {
          // Reset form inputs individually
          setNameValue("");
          setEmailValue("");
          setPhoneValue("");
          setSubjectValue("");
          setdescriptionValue("");
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
  
      setIsLoading(false);
      setIsSubmitted(true);
      setButtonColor("warning");
      setSubmitMessage("Submitted");
    }
  };
  return (
    <NextUIProvider>
      <Navbar 
      position="static"
      className='dark:bg-stone-900 opacity-70'
      >
        <NavbarBrand>
          <p className="font-bold text-inherit">Kamil Pawłowski</p>
        </NavbarBrand>
        
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="/" variant="ghost">
              Go back
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className='flex justify-center items-center mt-[9rem]'>
        <h1 className="text-xl">Contact me</h1>
      </div>
      <div className='flex justify-center items-center mt-[1rem]'>
        <form action="">
          <Input
            isRequired
            value={nameValue}
            type="text"
            label="Name"
            variant="bordered"
            className="max-w-xs mb-4"
            onValueChange={setNameValue}
          />
          <Input
            isRequired
            value={emailValue}
            type="email"
            label="Email"
            variant="bordered"
            isInvalid={isEmailInvalid}
            color={isEmailInvalid ? "danger" : "default"}
            errorMessage={isEmailInvalid && "Please enter a valid email"}
            className="max-w-xs mb-4"
            onValueChange={setEmailValue}
          />
          <Input
            value={phoneValue}
            type="text"
            label="Phone number"
            variant="bordered"
            placeholder='+48 123 456 789'
            className="max-w-md mb-4"
            onValueChange={setPhoneValue}
          />
          <Input
            isRequired
            value={subjectValue}
            type="text"
            label="Subject"
            variant="bordered"
            className="max-w-md mb-4"
            onValueChange={setSubjectValue}
          />
          <Textarea
            isRequired
            maxRows={4}
            value={descriptionValue}
            type="text"
            label="Description"
            variant="bordered"
            placeholder="Enter your description"
            className="max-w-md"
            onValueChange={setdescriptionValue}
          />
          <div className='flex justify-center mt-3 mb-5'>
            <Button
              // color={isLoading ? "secondary" : isFormValid ? "success" : isButtonColorWarning ? "warning" : "danger"}
              color={isLoading ? "warning" : isSubmitted ? "secondary" : isFormValid ? "success" : "danger"}
              onClick={sendEmail}
              variant="shadow"
              isLoading={isLoading}
              disabled={isLoading || isSubmitted}
            >
              {isLoading ? "Submitting" : isSubmitted ? "Submitted" : isFormValid ? "Submit" : "Check the form"}
            </Button>
          </div>
        </form>
      </div>
      
    </NextUIProvider>
  );
}
