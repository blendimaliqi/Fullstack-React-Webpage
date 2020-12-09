import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import GlobalStyle from '../styles/GlobalStyles.jsx';

const StyledHeader = styled.header`
  background: #fff;
  box-shadow: 1px 1px 2px #f5f5f5;
  width: 100%;
`;

const Container = styled.section`
  margin: auto;
  min-height: 100%;
`;

const MainLayout = ({ children }) => (
  <Container>
    <GlobalStyle />
    <StyledHeader>
      <Nav />
    </StyledHeader>
    <Container>{children}</Container>
  </Container>
);

export default MainLayout;
