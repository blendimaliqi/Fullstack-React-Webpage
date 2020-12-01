import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 6px;

    & p {
        margin-right: 20px;
    }
`;

export const Footer = () => {
    return (
        <StyledFooter>
            <p>Orgnr: 007 007 007 </p>
            <p>lg@ilgror.no </p>
            <p>99 00 00 00</p>
        </StyledFooter>
    )
};

export default Footer;