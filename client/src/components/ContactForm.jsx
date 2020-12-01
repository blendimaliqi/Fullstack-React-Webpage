import React, { useState } from 'react';

import styled from 'styled-components';

const ContactSchema = styled.section`
  width: 90%;
  height: 10rem;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;

  & input {
    margin-bottom: 10px;
    border: 1px solid black;
  }

  & textarea {
    border: 1px solid black;
  }
`;

const SendButton = styled.button`
  background-color: green;
  color: #fff;
  margin-top: 10px;
`;

const BoxSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  font-weight: bolder;
  height: 50rem;
  margin-top: 10rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;

  & h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

export const ContactForm = () => {
  const [email, setEmail] = useState();
  const [question, setQuestion] = useState();

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  console.log(question);

  return (
    <ContactSchema>
      <BoxSection>
        <h1>Kontaktskjema</h1>
        <Form>
          <input id="email__Input" type="text" />
          <textarea type="text" onChange={handleChange} />
          <SendButton>Send</SendButton>
        </Form>
      </BoxSection>
    </ContactSchema>
  );
};

export default ContactForm;
