import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useUserState } from '../context/UserProvider';
import { get } from '../utils/articleService';
import { getCurrentUser } from '../utils/loginService';
import {sendMailToUser} from '../utils/mailService.js';

const ContactSchema = styled.form`
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
  const [name, setName] = useState();

  const [question, setQuestion] = useState();
  const { isLoggedIn } = useUserState();

  const [user, setUser] = useState();

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const epostToAdmin = {
    name: name,
    email: email,
    question: question,
  }

  useEffect(() => {
    const getUser = async () => {
      try{
        const { data } =  await getCurrentUser();
        setUser(data.data);
        setEmail(data.data.email);
        setName(data.data.name);
      }catch (err) {
        console.log(err)
      }
    }

    getUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("USER: ", user);

    const sendAsync = async () =>  {
     await sendMailToUser(epostToAdmin);
     //console.log("MAIL fra client", mail);
    }
    console.log("epostToAdmin: ", epostToAdmin)
    sendAsync();
  }

  return (
    <ContactSchema >
      <BoxSection>
        <h1>Kontaktskjema</h1>
        <Form>
        {isLoggedIn && name?.length !=0 &&
          <input defaultValue={name} type="text" />
          }
          {!isLoggedIn && !name?.length !=0 &&
          <input defaultValue="" placeholder="Navn" type="text" />

          }
          {isLoggedIn && email?.length !=0 &&
          <input defaultValue={email} type="text" />
          }
          {!isLoggedIn && !email?.length !=0 &&
          <input defaultValue="" placeholder="E-post" type="text" />
          }
          <textarea type="text" placeholder="Hendvendelse" onChange={handleChange} />
            
          <SendButton onClick={handleSubmit}>Send</SendButton>
        </Form>
      </BoxSection>
    </ContactSchema>
  );
};

export default ContactForm;
