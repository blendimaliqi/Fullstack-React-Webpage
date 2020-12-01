import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from './src/styles/theme';
import Routes from './src/routes/Routes';
import Banner from './src/components/Banner';
import Card from './src/components/Office/Card';

const App = () => (
  <>
    <Banner />
    <Card />
  </>
  /*<ThemeProvider theme={customTheme}>
    <CSSReset />
    <Routes />
  </ThemeProvider>*/
);

export default App;
