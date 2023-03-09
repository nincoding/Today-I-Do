import './css/App.css';
import React, { useEffect, useState } from 'react';
import Main from './pages/Main';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import style from 'styled-theming';
import useTheme from './components/useTheme';
import ToggleMode from './components/ToggleMode';

const getBackground = style('mode', {
  light: '#EEE',
  dark: '#111',
})

const getForeground = style('mode', {
  light: '#111',
  dark: '#EEE',
})

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${getBackground};
    color: ${getForeground};
  }
`

function App() {

  useEffect(() => {
    localStorage.setItem('list', 10)
  }, []);

  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToggleMode/>
      <Main />
    </ThemeProvider>
  );
}

export default App;
