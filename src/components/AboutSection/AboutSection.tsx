import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import AboutDetail from "./components/AboutDetail";
import Skills from "./components/Skills";
const AboutContainer = styled.div`
  z-index: -999;
  min-height: 400px;
  min-width: 375px;
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
  letter-spacing: 0.05em;
  word-wrap: break-word;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  .card {
    margin: 0.5em 0.25rem;
    width: 95%;

    .ant-card-body {
      font-size: 1.4em;
      position: sticky;
      margin: 1rem 3rem;
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
      background: linear-gradient(
        60deg,
        #bf953f,
        #fcf6ba,
        #b38728,
        #fbf5b7,
        #aa771c
      );
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
        <Skills />
      </Card>
    </AboutContainer>
  );
};

export default AboutSection;
