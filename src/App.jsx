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
        main: '#F1F1F1',
        contrastText: '#3b3f42',
      },
      secondary: {
        main: '#224b23',
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