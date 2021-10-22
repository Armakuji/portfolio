import React from "react";
import styled from "styled-components";
import { Typography, Card } from "antd";

const ContractSectionContainer = styled.div`
  background: #221b47;

  display: flex;
  justify-content: center;
  letter-spacing: 0.05em;
  word-wrap: break-word;
  padding: 4rem 0.5rem 2rem;
  .title {
    color: #50fa7b;
  }

  .card {
    width: 95%;
    height: 100%;
    text-align: center;

    border-radius: 15px;
    background: #282a36;
    box-shadow: 1px 1px 10px #282a36;

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

const ContractDetail = styled.div`
  // background: red;
`;

const { Title } = Typography;

const ContractSection = () => {
  return (
    <ContractSectionContainer id="contract">
      <Card className="card">
        <ContractDetail>
          <Title level={2} className="title">
            Get in touch!
          </Title>
        </ContractDetail>
      </Card>
    </ContractSectionContainer>
  );
};

export default ContractSection;
