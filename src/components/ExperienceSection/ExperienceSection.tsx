import React from "react";
import styled from "styled-components";
import { Typography, Card } from "antd";
import ExperienceDetail from "./components/ExperienceDetail";

const ExperienceSectionContainer = styled.div`
  background: #221b47;

  min-height: 400px;
  display: flex;
  justify-content: center;
  letter-spacing: 0.05em;
  word-wrap: break-word;
  padding: 4rem 0.5rem 0.5rem;
  .title {
    color: #50fa7b;
  }

  .card {
    width: 95%;
    height: 100%;
    min-height: 800px;
    border-radius: 15px;
    background: #282a36;
    box-shadow: 1px 1px 15px #282a36;

    border: none;

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

const { Title } = Typography;

const ExperienceSection = () => {
  return (
    <ExperienceSectionContainer id="experience">
      <Card className="card">
        <Title level={2} className="title">
          Experience
        </Title>
        <ExperienceDetail />
      </Card>
    </ExperienceSectionContainer>
  );
};

export default ExperienceSection;
