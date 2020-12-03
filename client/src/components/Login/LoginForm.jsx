import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid black;
  margin-bottom: 50px;
  height: 50px;
  border-radius: 7px;
  font-size: 16px;
  width: 60%;
`;

const Form = styled.form`
  width: 50%;
  margin: 4rem auto 10rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SumbitBtn = styled.button`
  color: white;
  background-color: #53a5be;
  padding: 1.5rem 2.5rem;
  border: 0;
  outline: none;
`;

const BtnContainer = styled.section`
  width: 60%;
  display: flex;
  align-items: flex-start;
`;

export const LoginForm = () => (
  <Form>
    <Input type="text" placeholder="Brukernavn.." />
    <Input type="password" placeholder="Passord.." />
    <BtnContainer>
      <SumbitBtn>Logg inn</SumbitBtn>
    </BtnContainer>
  </Form>
);

export default LoginForm;
