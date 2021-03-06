import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HomepageGrid from '../components/Homepage/HomepageGrid.jsx';
import Banner from '../components/Banner';

const Container = styled.section`
  margin: 0;
  padding: 0;
`;

const Home = () => (
  <Container>
    <Banner title="Velkommen til LG Rørleggerservice AS" />
    <section>
      <HomepageGrid />
    </section>
  </Container>
);

export default Home;
