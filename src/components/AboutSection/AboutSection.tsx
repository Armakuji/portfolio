import React from "react";
import styled from "styled-components";
import { Card } from "antd";

const AboutSectionWrapper = styled.div`
  background-color: transparent;
  min-height: 400px;
  min-width: 375px;
  letter-spacing: 0.05em;
  margin-top: 3rem;
  padding-bottom: 2rem;
  padding-right: 2em;
  padding-left: 2em;
  display: flex;
  justify-content: flex-start;

  .card {
    width: 100%;

    .ant-card-body {
      padding: 2em;
      font-size: 1.4em;
    }

    @media (min-width: 460px) {
      padding: 3em;
    }
  }

  div {
    margin: 1em auto;
  }
`;

const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <Card className="card">
        <h1>About</h1>
        <div>
          My name is Nitipon. I like to think, analyze, solve problems. so I
          very like to write programs.
        </div>
        <div>
          I like to create beautiful things in web. And now I interested in
          blockchain Technology, Decentralized Finance.
        </div>
      </Card>
    </AboutSectionWrapper>
  );
};

export default AboutSection;
