import React from "react";
import styled from "styled-components";
import { Card } from "antd";

const SkillContainer = styled.div`
  background-color: transparent;
  min-height: 400px;
  min-width: 375px;
  margin-top: 4em;
  padding-bottom: 4em;
  padding-right: 1rem;
  padding-left: 1rem;

  letter-spacing: 0.05em;
  word-wrap: break-word;

  .card {
    margin: 0.5em auto;
    width: 95%;

    .ant-card-body {
      font-size: 1.4em;
      position: sticky;
    }

    --border-width: 3px;
    position: relative;
    display: flex;
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

  @media (min-width: 1150px) {
    .about {
      max-width: 85%;
    }

    .ant-row {
      width: 85%;
    }
  }

  .title {
    text-align: right;
  }

  .bold {
    font-weight: bold;
  }

  .about {
    padding: 0.25em;
  }
`;

const SkillSection = () => {
  return (
    <SkillContainer>
      <Card className="card">
        <div className="title">
          <h1>Skills</h1>
        </div>
      </Card>
    </SkillContainer>
  );
};

export default SkillSection;
