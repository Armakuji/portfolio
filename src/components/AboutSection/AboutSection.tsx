import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import AboutDetail from "./components/AboutDetail";
import SectionDevider from "components/SectionDevider/SectionDevider";
import Skills from "./components/Skills/Skills";

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

  .card {
    margin: 0.5em 0.25rem;
    width: 95%;
    border-radius: 15px;

    .ant-card-body {
      font-size: 1.4em;
      position: sticky;
      margin: 1rem 1rem;
    }

    @media (min-width: 440px) {
      .ant-card-body {
        margin: 1rem 3rem;
      }
    }
  }
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <Card className="card">
        <AboutDetail />
        <SectionDevider />
        <Skills />
      </Card>
    </AboutContainer>
  );
};

export default AboutSection;
