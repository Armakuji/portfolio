import React from "react";
import styled from "styled-components";

import NavBar from "components/NavBar/NavBar";
import IntroSection from "components/IntroSection/IntroSection";

const LandingPageWrapper = styled.div`
  -webkit-font-smoothing: auto;
  background-color: #f7f6f2;
`;

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <NavBar />
      <IntroSection />
    </LandingPageWrapper>
  );
};

export default LandingPage;
