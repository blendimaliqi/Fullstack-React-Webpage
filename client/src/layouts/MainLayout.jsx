import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import GlobalStyle from '../styles/GlobalStyles.jsx';
import HamburgerMenu from '../components/HamburgerMenu.jsx';

const StyledHeader = styled.header`
  background: #fff;
  box-shadow: 1px 1px 2px #f5f5f5;
  width: 100%;

  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 800px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 450px) {
  }
`;

const Container = styled.section`
  margin: auto;
  min-height: 100%;
`;

/** GJENBRUKT FRA FORELESERS EKSEMPEL
 * @param {children} - Den renderer barne elementer
 */
const MainLayout = ({ children }) => (
  <Container>
    <GlobalStyle />
    <StyledHeader>
      <HamburgerMenu />
      <Nav />
    </StyledHeader>
    <Container>{children}</Container>
  </Container>
);

export default MainLayout;
