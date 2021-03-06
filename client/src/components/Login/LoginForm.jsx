import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginPost } from '../../utils/loginService.js';
import { useUserState, useUserDispatch } from '../../context/UserProvider.jsx';

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
  flex-direction: column;
  align-items: flex-start;
`;

const ErrorMessage = styled.p`
  display: flex;
  font-weight: bolder;
  margin-right: 10px;
  color: red;
`;

const ErrorContainer = styled.section`
  display: flex;
  align-items: flex-start;
  width: 60%;
`;

export const LoginForm = ({ history }) => {
  /** BASERT PÅ FORELESERS EKSEMPLER */
  const { setUser, isLoggedIn } = useUserState();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  /** GENERERT KODE FRA https://fkhadra.github.io/react-toastify/introduction/#the-playground
   * Lager en toast som skal displayes hvis log in er suksess
   * @param {boolean} success
   */
  const notifyLoginSuccess = (message) => {
    toast.success(`✅${message}`, {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  /** GJENBRUK FRA FORELESERS EKSEMPLER */
  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setLoginData((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const login = async () => {
      const { data } = await loginPost(loginData);
      console.log(data);
      if (!data.success) {
        console.log(data.message);
        setError(Array.from(data.message));
      } else {
        const user = data?.user;
        setUser({ user });
        setError(null);
        notifyLoginSuccess(data?.loginMessage);
        setTimeout(() => {history.push('/')}, 2000);
      }
    };

    login();
  };

  return (
    <Form onSubmit={handleLogin}>
      <ErrorContainer>
        {error &&
          error.map((err, index) => (
            <ErrorMessage key={(index + 1) * Math.random()}>
              {err.message}
            </ErrorMessage>
          ))}
      </ErrorContainer>
      <Input
        name="email"
        type="text"
        placeholder="Brukernavn.."
        value={loginData.email}
        onChange={updateValue}
      />
      <Input
        name="password"
        type="password"
        placeholder="Passord.."
        value={loginData.password}
        onChange={updateValue}
      />
      <BtnContainer>
        <SumbitBtn>Logg inn</SumbitBtn>
      </BtnContainer>
      {/** GENERERT KODE FRA https://fkhadra.github.io/react-toastify/introduction/#the-playground
       * Lager en toastcontainer som skal brukes til å displaye toast ved suksess
       * @param {boolean} success
       */}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Form>
  );
};

export default withRouter(LoginForm);
