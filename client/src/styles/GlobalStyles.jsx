import React from 'react';
import { createGlobalStyle } from 'styled-components';

/** GJENBRUKT FRA EGEN OBLIG FRA SISTE OBLIG
 * Global style som gjelder for hele appen
 */
const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0 auto;
        min-height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

export default GlobalStyle;
