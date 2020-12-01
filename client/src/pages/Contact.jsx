import React from 'react'
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';

const WholePage = styled.section `
display: flex;
    background-color: #F9F9F9;
    width: 95%;
    height: 70rem;
    margin: 0 auto;
`;

export const Contact = () => {
    return (

        <WholePage> 
            <ContactForm/>
        </WholePage>
    )
};

export default Contact;