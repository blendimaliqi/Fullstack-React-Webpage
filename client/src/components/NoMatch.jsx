import React from 'react';
import { Heading } from '@chakra-ui/core';

/** GJENBRUKT FRA FORELESERS EKSEMPLER
 * Bare en komponent som renderer 404 hvis den ikke
 * klarer å finne riktig side
 */
const NoMatch = () => (
  <Heading as="h2" size="lg">
    404
  </Heading>
);

export default NoMatch;
