import { createTheme, ThemeProvider } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';
import React from 'react';
import './App.css';
import { CartProvider } from './providers/CartContext';
import Routes from './routes';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#00101f',
        contrastText: '#ECFEE8',
      },
      secondary: {
        main: '#E36B02',
        contrastText: '#ECFEE8',
      },
    },
  },
  ptBR,
);

function App() {
  return (
    <div className="wrapperApp">
      <ThemeProvider theme={theme}>
      <CartProvider>
        <Routes />
      </CartProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;