import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from './src/styles/theme';
import Routes from './src/routes/Routes';
import UserProvider from '../client/src/context/UserProvider.jsx';

const App = () => (
  <>
  <UserProvider>
    <Routes />
  </UserProvider>
  </>
);


export default App;
