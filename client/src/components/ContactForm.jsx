import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useUserState } from '../context/UserProvider';
import { get } from '../utils/articleService';
import { getCurrentUser } from '../utils/loginService';
import { sendMailToUser, sendMailToAdmin } from '../utils/mailService.js';

const ContactSchema = styled.section`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 300px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;

  & input {
    border: 1px solid black;
    margin-bottom: 20px;
    height: 50px;
    border-radius: 7px;
    font-size: 16px;
  }

  & textarea {
    border: 1px solid black;
    margin-bottom: 20px;
    height: 100px;
    border-radius: 7px;
    font-size: 16px;
  }
`;

const SendButton = styled.button`
  background-color: #469fb9;
  padding: 1rem 1rem;
  border: 0;
  height: 60px;
  margin-top: 0px;
  font-weight: bold;
  font-size: 1rem;
  max-height: 4rem;
  color: white;
`;

const BoxSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  font-weight: bolder;
  height: 50rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 30rem;
  width: 80%;
  margin-top: 200px;

  & h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

const KontaktSkjema = styled.p`
  font-size: 35px;
  border-bottom: 1px solid black;
`;

export const ContactForm = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();

  const [question, setQuestion] = useState();
  const { isLoggedIn, isAdmin } = useUserState();

  const [user, setUser] = useState();

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const epostObject = {
    name,
    email,
    question,
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await getCurrentUser();
        setUser(data.data);
        setEmail(data.data.email);
        setName(data.data.name);
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendAsync = async () => {
      await sendMailToUser(epostObject);
      await sendMailToAdmin(epostObject);
    };
    sendAsync();
  };

  return (
    <ContactSchema>
      <BoxSection>
        <KontaktSkjema>Kontaktskjema</KontaktSkjema>
        <Form>
          {isLoggedIn && name?.length != 0 && (
            <input defaultValue={name} type="text" />
          )}
          {!isLoggedIn && (
            <input
              defaultValue=""
              onChange={handleNameChange}
              placeholder="Navn"
              type="text"
            />
          )}
          {isLoggedIn && email?.length !== 0 && (
            <input defaultValue={email} type="text" />
          )}
          {!isLoggedIn && (
            <input
              defaultValue=""
              onChange={handleEmailChange}
              placeholder="E-post"
              type="text"
            />
          )}
          <textarea
            type="text"
            placeholder="Hendvendelse"
            onChange={handleChange}
          />

          <SendButton onClick={handleSubmit}>Send</SendButton>
        </Form>
      </BoxSection>
    </ContactSchema>
  );
};

export default ContactForm;
