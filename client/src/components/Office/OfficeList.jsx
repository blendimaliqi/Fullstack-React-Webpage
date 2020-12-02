import React, { useState } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 0 auto;
`;

export const OfficeGrid = ({ offices }) => (
  <Container>
    {offices &&
      offices.map((office, index) => (
        <ListItem
          key={office.id}
          name={office.name}
          adress={office.adress}
          phone={office.phone}
          location={office.location}
          index={index}
        />
      ))}
  </Container>
);

export default OfficeGrid;
