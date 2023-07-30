import React from 'react'
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/styles/Global';
import { StyledContainer } from './components/styles/container.styled';

const theme = {
  colors:{
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile:{
    width: '768px'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
      <StyledContainer>
        <h1>Test</h1>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
