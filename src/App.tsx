import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "utils/theme";
import LandingPage from "pages/LandingPage/LandingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
