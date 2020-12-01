import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Text, Icon } from '@chakra-ui/core';
import { list } from '../utils/eventService';
import HomepageGrid from "../components/Homepage/HomepageGrid.jsx";

const Home = () => {
  return (
    <section>
      <HomepageGrid />
    </section>
  );
};

export default Home;
