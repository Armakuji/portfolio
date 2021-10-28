import React from "react";
import styled from "styled-components";
import AboutDetail from "./components/AboutDetail";
import SectionDevider from "components/SectionDevider/SectionDevider";
import Skills from "./components/Skills/Skills";
import { Card, CardBody } from "components/GlobalStyleComponent";

const AboutContainer = styled.div`
  background: #221b47;

  min-height: 400px;
  min-width: 375px;
  padding: 4rem 1rem 1rem 1rem;

  display: flex;
  justify-content: center;
  letter-spacing: 0.05em;
  word-wrap: break-word;

  .title {
    color: #454894;
  }
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <Card>
        <CardBody>
          <AboutDetail />
          <SectionDevider />
          <Skills />
        </CardBody>
      </Card>
    </AboutContainer>
  );
};

export default AboutSection;
