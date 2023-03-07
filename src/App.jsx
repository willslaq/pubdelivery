import { createTheme, ThemeProvider } from "@material-ui/core";
import { ptBR } from "@material-ui/core/locale";
import React from "react";
import "./App.css";
import { CartProvider } from "./providers/CartContext";
import Routes from "./routes";

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#1B1E20",
        contrastText: "#ECFEE8",
      },
      secondary: {
        main: "#AF2421",
        contrastText: "#ECFEE8",
      },
    },
  },
  ptBR
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
