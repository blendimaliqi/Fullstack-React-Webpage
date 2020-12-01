import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from './src/styles/theme';
import Routes from './src/routes/Routes';

const App = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Routes />
  </ThemeProvider>
);

export default App;
