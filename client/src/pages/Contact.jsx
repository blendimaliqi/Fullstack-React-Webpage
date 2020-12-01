import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import Banner from '../components/Banner';

const WholePage = styled.section`
  display: flex;
  background-color: #f9f9f9;
  width: 95%;
  height: 70rem;
  margin: 0 auto;
`;

export const Contact = () => (
  <>
    <Banner title="Kontakt oss" />
    <WholePage>
      <ContactForm />
    </WholePage>
  </>
);

export default Contact;
