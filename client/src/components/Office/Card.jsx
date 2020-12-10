import React from 'react';
import styled from 'styled-components';
import { useParams, withRouter } from 'react-router-dom';

const Container = styled.article`
  border: 1px solid black;
  padding: 1rem;
`;
const Name = styled.h3`
  font-weight: bold;
  padding: 0;
  margin: 0;
  margin-bottom: 0.4rem;
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
`;

const Card = ({ name, adress, phone, thelocation, index, history }) => (
  <Container onClick={() => history.push(`kontorer/${index + 1}`)}>
    <Name>{`${name} ${index + 1}`}</Name>
    <Paragraph>{`${adress} ${index + 1}`}</Paragraph>
    <Paragraph>{phone}</Paragraph>
    <Paragraph>{`${thelocation}${index + 1}@epost.no`}</Paragraph>
  </Container>
);

export default withRouter(Card);
