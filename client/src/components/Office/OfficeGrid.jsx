import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { useParams, withRouter } from 'react-router-dom';

const Grid = styled.section`
  //padding: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 0.4fr));
  grid-template-rows: 1fr;
  column-gap: 9rem;
  row-gap: 2rem;
  max-width: 100rem;
  //place-items: 'center';
  justify-content: space-evenly;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 0 auto;
`;

export const OfficeGrid = ({ offices }) => (
  <Container>
    <Grid>
      {offices &&
        offices.map((office, index) => (
          <Card
            key={office.id}
            name={office.name}
            adress={office.adress}
            phone={office.phone}
            location={office.location}
            index={index}
          />
        ))}
    </Grid>
  </Container>
);

export default OfficeGrid;
