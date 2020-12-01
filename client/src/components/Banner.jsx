import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: lightgray;
  width: 100%;
  height: 20rem;
  display: flex;
  margin: 0;
  margin-bottom: 1rem;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Title = styled.h1`
  margin: auto 0;
  font-size: 3rem;
`;

const Banner = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

export default Banner;
