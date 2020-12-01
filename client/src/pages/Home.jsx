import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Text, Icon } from '@chakra-ui/core';
import { list } from '../utils/eventService';
import HomepageGrid from "../components/Homepage/HomepageGrid.jsx";
import { Footer } from '../components/Footer';

const Home = () => {
  return (
    <section>
      <HomepageGrid />
      <Footer/>
    </section>
  );
};

export default Home;
