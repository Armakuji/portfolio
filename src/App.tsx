import React from "react";
import "antd/dist/antd.css";
import "App.css";
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
