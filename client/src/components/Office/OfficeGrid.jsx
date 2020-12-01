import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

export const OfficeGrid = () => {
  const [offices, setOffices] = useState([
    {
      id: 1,  
      name: 'rørlegger2',
      adress: 'rørleggerveien',
      phone: '69 99 00 00',
      email: 'jada@jada.no',
    },
    {
      id: 2,  
      name: 'rørlegger2',
      adress: 'rørleggerveien',
      phone: '69 99 00 00',
      email: 'jada@jada.no',
    },
    {
      id: 3,
      name: 'rørlegger2',
      adress: 'rørleggerveien',
      phone: '69 99 00 00',
      email: 'jada@jada.no',
    },
    { 
      id: 4,  
      name: 'rørlegger2',
      adress: 'rørleggerveien',
      phone: '69 99 00 00',
      email: 'jada@jada.no',
    },
    {
      id: 5,  
      name: 'rørlegger2',
      adress: 'rørleggerveien',
      phone: '69 99 00 00',
      email: 'jada@jada.no',
    },
  ]);

  return (
    <Container>
      <Title>Fredrikstad ({offices.length})</Title>
      <Grid>
        {offices && offices.map((office) => <Card key={office.id} />)}
      </Grid>
    </Container>
  );
};

export default OfficeGrid;
