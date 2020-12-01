import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from './src/styles/theme';
import Routes from './src/routes/Routes';
import Banner from './src/components/Banner';
import Office from './src/pages/Office.jsx';

const App = () => (
  <>
    <Banner />
    <Office />
  </>
  /* <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Routes />
  </ThemeProvider> */
);

export default App;
