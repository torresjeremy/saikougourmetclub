/* eslint-disable import/no-unresolved */
import React, { useRef, useState } from 'react';
import {
  Flex, VStack, Box, Textarea, Heading, Container, Input, Button, SimpleGrid,
  FormLabel, FormControl, Alert, AlertTitle, CloseButton,
} from '@chakra-ui/react';
import HeaderContact from 'images/contact/header_contact.png';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const recaptchaRef = useRef(null);
  const formRef = useRef(null);
  const [successMessageDisplay, setSuccessMessageDisplay] = useState<boolean>(false);
  const [recaptchaResp, setRecaptchaResp] = useState(null);

  const dismissTimeout = () => {
    setTimeout(() => {
      setSuccessMessageDisplay(false);
      window.location.reload();
    }, 3000);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_c5mav1f', 'template_nb1ikuc', formRef.current, 'user_qmU8FjIYDD2LecWzyelZI')
      .then((result) => {
        console.log(result.text);
        setSuccessMessageDisplay(true);
        dismissTimeout();
        formRef.current.reset();
        setRecaptchaResp(null);
      }, (error) => {
        console.error(error.text);
        setSuccessMessageDisplay(true);
        dismissTimeout();
        formRef.current.reset();
        setRecaptchaResp(null);
      });
  };

  return (
    <Flex direction="row">
      <VStack width="100%" bgColor="yellow.150">
        <Box
          backgroundImage={`url(${HeaderContact})`}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          w="100%"
          height={{ base: '80vh' }}
        >
          <Container maxW="100%" textAlign="left" alignContent="flex-start" pl={{ base: '16px', lg: '16%' }} pr={{ base: '16px', lg: '32%' }} pt={{ base: 0, md: '80px' }}>
            <Alert status="success" display={successMessageDisplay ? 'block' : 'none'} variant="subtle">
              <AlertTitle>Message sent!</AlertTitle>
              <CloseButton position="absolute" right="8px" top="8px" onClick={() => setSuccessMessageDisplay(false)} />
            </Alert>
            <Heading pb="20px" fontFamily="CFSamuraiBob" color="red.150" fontSize="55px" fontWeight="400">GET IN TOUCH</Heading>
            <VStack fontWeight="500">
              <form ref={formRef} onSubmit={(e) => sendEmail(e)} style={{ width: '100%' }}>
                <SimpleGrid columns={{ sm: 1, md: 2 }} w="100%" spacing="20px" pb="20px">
                  <FormControl isRequired>
                    <FormLabel htmlFor="firstname">First name</FormLabel>
                    <Input name="firstname" id="firstname" borderColor="black" focusBorderColor="black" height="60px" variant="outline" borderRadius="0" bgColor="white" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="lastname">Last name</FormLabel>
                    <Input name="lastname" id="lastname" borderColor="black" focusBorderColor="black" height="60px" variant="outline" borderRadius="0" bgColor="white" />
                  </FormControl>
                </SimpleGrid>
                <FormControl isRequired pb="20px">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input name="email" type="email" id="email" borderColor="black" focusBorderColor="black" height="60px" variant="outline" borderRadius="0" bgColor="white" />
                </FormControl>
                <FormControl isRequired pb="20px">
                  <FormLabel htmlFor="message">Comment or Message</FormLabel>
                  <Textarea maxLength={200} name="message" id="message" borderColor="black" focusBorderColor="black" height="100px" variant="outline" borderRadius="0" bgColor="white" />
                </FormControl>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LfBimoeAAAAAHgd9hFxaxlBwNY-eHjU2vKtSNju"
                  onChange={(value: string | null) => setRecaptchaResp(value)}
                />
                <Box w="100%" pt="40px">
                  <Button disabled={!recaptchaResp} type="submit" bgColor="red.150" size="lg" color="white">Submit</Button>
                </Box>
              </form>
            </VStack>
          </Container>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Contact;
