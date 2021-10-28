import React from "react";
import styled from "styled-components";
import { Typography, Card, Row, Col } from "antd";
import { ReactComponent as MailIcon } from "assets/svg/mail.svg";
import { ReactComponent as GithubIcon } from "assets/svg/github.svg";
import { ReactComponent as LinkinIcon } from "assets/svg/linkin.svg";
import { ReactComponent as TwitterIcon } from "assets/svg/twitter.svg";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";

const ContractSectionContainer = styled.div`
  background: #221b47;

  display: flex;
  justify-content: center;
  letter-spacing: 0.05em;
  word-wrap: break-word;
  padding: 4rem 0.4rem 4rem;
  height: 380px;

  @media (max-width: 520px) {
    min-height: 450px;
  }

  .title {
    text-align: center;
    h2.ant-typography {
      color: #50fa7b;
    }
  }

  .card {
    width: 95%;
    height: 100%;

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
  padding-top: 1.5em;

  display: flex;
  justify-content: center;

  a {
    color: #282a36;
  }

  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
    }
  }

  svg {
    width: 3em;
    height: 3em;

    path {
      stroke: #50fa7b;
      fill: #50fa7b;
    }

    &:hover {
      animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

      @keyframes slide-top {
        0% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
        100% {
          -webkit-transform: translateY(-1em);
          transform: translateY(-1em);
        }
      }
    }
  }
`;

const { Title } = Typography;

const ContractSection = () => {
  return (
    <ContractSectionContainer id="contract">
      <Card className="card">
        <FadeInContainer>
          <div className="title">
            <Title level={2}>Get in touch!</Title>
          </div>
        </FadeInContainer>
        <FadeInContainer>
          <ContractDetail>
            <Row gutter={[40, 40]} justify="center">
              <Col>
                <a href="mailto: armakuji@hotmail.com" aria-label="email">
                  <MailIcon />
                </a>
              </Col>
              <Col>
                <a
                  href="https://github.com/Armakuji"
                  aria-label="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.linkedin.com/in/nitipon-chingthongchai-162a2b214"
                  aria-label="linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkinIcon />
                </a>
              </Col>
              <Col>
                <a
                  href="https://twitter.com/armakuji"
                  aria-label="twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon />
                </a>
              </Col>
            </Row>
          </ContractDetail>
        </FadeInContainer>
      </Card>
    </ContractSectionContainer>
  );
};

export default ContractSection;
