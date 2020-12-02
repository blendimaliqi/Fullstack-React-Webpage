import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from './src/styles/theme';
import Routes from './src/routes/Routes';
import ArticleDetails from './src/components/Article Details/ArticleDetails.jsx';

const App = () => (
<>
<Routes />
</>
);
//<ArticleDetails />);

export default App;
