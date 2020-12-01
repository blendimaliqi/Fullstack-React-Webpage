import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  flex-direction: row;
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

const ListItem = ({name, adress, phone, email}) => (
  <Container>
    <Name>{name}</Name>
    <Paragraph>{adress}</Paragraph>
    <Paragraph>{phone}</Paragraph>
    <Paragraph>{email}</Paragraph>
  </Container>
);

export default ListItem;
