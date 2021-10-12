import React from "react";
import styled from "styled-components";
import { Card, Row, Col } from "antd";
import ProfileImage from "utils/images/profile_image.png";

const AboutContainer = styled.div`
  background-color: transparent;
  min-height: 400px;
  min-width: 375px;
  margin-top: 4em;
  padding-bottom: 4em;
  padding-right: 1rem;
  padding-left: 1rem;
  display: flex;
  justify-content: center;
  letter-spacing: 0.05em;

  .card {
    .ant-card-body {
      padding: 2em;
      font-size: 1.4em;
    }

    @media (min-width: 576px) {
      max-width: 540px;
    }

    @media (min-width: 770px) {
      max-width: 960px;
    }
  }

  div {
    margin: 1em auto;
  }

  .title {
    text-align: center;
  }
`;

const ProfileImageContainer = styled.div`
  background-image: url(${ProfileImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 280px;
  height: 280px;
  border-radius: 0.25em;
  box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
`;

const AboutSection = () => {
  return (
    <AboutContainer>
      <Card className="card">
        <div className="title">
          <h1>About Me</h1>
        </div>
        <Row justify="center" align="middle">
          <Col xs={24} md={14}>
            <div>
              My name is Nitipon. I like to think, analyze, solve problems. so I
              very like to write programs.
            </div>
            <div>
              I like to create beautiful things in web. And now I interested in
              blockchain Technology, Decentralized Finance.
            </div>
          </Col>
          <Col xs={24} md={10}>
            <ProfileImageContainer />
          </Col>
        </Row>
      </Card>
    </AboutContainer>
  );
};

export default AboutSection;
