import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import AboutDetail from "./components/AboutDetail";
import SectionDevider from "components/SectionDevider/SectionDevider";
import Skills from "./components/Skills/Skills";

const AboutContainer = styled.div`
  z-index: -999;
  min-height: 400px;
  min-width: 375px;
  padding: 4rem 1rem 1rem 1rem;

  display: flex;
  justify-content: center;
  letter-spacing: 0.05em;
  word-wrap: break-word;

  .title {
    color: ${(props) => props.theme.title};
  }

  .card {
    margin: 0.5em 0.25rem;
    width: 95%;

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

    --border-width: 5px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-width);
    &::after {
      position: absolute;
      content: "";
      top: calc(-1 * var(--border-width));
      left: calc(-1 * var(--border-width));
      z-index: -1;
      width: calc(100% + var(--border-width) * 2);
      height: calc(100% + var(--border-width) * 2);
      background: linear-gradient(60deg, #454894, #7b79f7, #221b47, #7b79f7);
      background-size: 300% 300%;
      background-position: 0 50%;
      border-radius: calc(2 * var(--border-width));
      animation: moveGradient 4s alternate infinite;
    }

    @keyframes moveGradient {
      50% {
        background-position: 100% 50%;
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
