import React, { useState, useEffect } from "react";
import styled from "styled-components";

import NavBar from "components/NavBar/NavBar";
import MenuSlider from "components/NavBar/MenuSlider";
import IntroSection from "components/IntroSection/IntroSection";
import AboutSection from "components/AboutSection/AboutSection";
import ExperienceSection from "components/ExperienceSection/ExperienceSection";
import ContractSection from "components/ContractSection/ContractSection";

const LandingPageWrapper = styled.div`
  -webkit-font-smoothing: auto;
  font-family: sans-serif;

  .fade-in-section {
    opacity: 1;
  }

  .fade-in-section.is-active {
    animation: fade-in-bottom 1.5s;
  }

  @keyframes fade-in-bottom {
    0% {
      -webkit-transform: translateY(40px);
      transform: translateY(40px);
      opacity: 0.5;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const LandingPage = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.screen.width;
      if (screenWidth >= 760) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <LandingPageWrapper>
      <NavBar setOpenMenu={setOpenMenu} />
      <MenuSlider openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <IntroSection />
      <AboutSection />
      <ExperienceSection />
      <ContractSection />
    </LandingPageWrapper>
  );
};

export default LandingPage;
