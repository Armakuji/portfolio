import React, { useState, useEffect } from "react";
import styled from "styled-components";

import NavBar from "components/NavBar/NavBar";
import MenuSlider from "components/NavBar/MenuSlider";
import IntroSection from "components/IntroSection/IntroSection";
import AboutSection from "components/AboutSection/AboutSection";
import SkillSection from "components/SkillSection/SkillSection";

const LandingPageWrapper = styled.div`
  -webkit-font-smoothing: auto;
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
      <SkillSection />
    </LandingPageWrapper>
  );
};

export default LandingPage;
