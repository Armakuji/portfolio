import React from "react";
import "antd/dist/antd.css";
import "App.css";
import { ThemeProvider } from "styled-components";

import LandingPage from "pages/LandingPage/LandingPage";

const theme = {
  fg: "palevioletred",
  bg: "white",
  primary: "#7a58bf",
  lightGray: "#d9d9d9",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
