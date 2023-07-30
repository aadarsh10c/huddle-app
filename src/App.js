import React from 'react'
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/styles/Global';
import { StyledContainer } from './components/styles/container.styled';
import content from './content';
import Card from './components/Card';
import Footer from './components/Footer';

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
        {
          content.map( (item , index) => <Card key={index} item={item} />)
        }
      </StyledContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
