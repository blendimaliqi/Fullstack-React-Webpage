import React from 'react';
import styled from 'styled-components';
import { useParams, withRouter } from 'react-router-dom';

const Container = styled.article`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;
const Name = styled.h3`
  font-weight: bold;
  padding: 0;
  margin: 0;
  margin-bottom: 0.4rem;
  margin-right: 1rem;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-right: 0.5rem;
  padding: 0;
  font-size: 0.9rem;
`;

const BlackBox = styled.section`
  width: 1.4rem;
  height: 1.4rem;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.6rem;
  padding: 3px;
`;

const ListItem = ({ index, name, adress, phone, location, history }) => {
  const { id } = useParams();

  return (
    <Container onClick={() => history.push(`kontorer/${index + 1}`)}>
      <BlackBox>{index + 1}</BlackBox>
      <Name>{`${name} ${index + 1}`}</Name>
      <Paragraph>{`${adress} ${index + 1}`}</Paragraph>
      <Paragraph>{phone}</Paragraph>
      <Paragraph>{`${location}${index + 1}@epost.no`}</Paragraph>
    </Container>
  );
};

export default withRouter(ListItem);
