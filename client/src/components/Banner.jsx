import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Title = styled.h1`
  margin: auto 0;
  font-size: 3rem;
`;

const Banner = () => (
  <Container>
    <Title>Våre kontorer</Title>
  </Container>
);

export default Banner;
