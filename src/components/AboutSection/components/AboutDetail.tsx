import React from "react";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";
import styled from "styled-components";
import { Row, Col } from "antd";
import ProfileImage from "assets/images/profile_image.jpg";

const AboutDetailContainer = styled.div`
  display: grid;
  justify-content: center;

  @media (min-width: 1100px) {
    .ant-row {
      padding: 1em 2em;
      max-width: 940px;
    }
  }

  .title {
    color: #454894;
  }

  .sub-title {
    color: #454894;
  }

  .text-center {
    text-align: center;
  }

  .bold {
    font-weight: bold;
  }

  .about {
    padding: 0.25em;
  }

  .ant-row {
    display: flex;
    justify-content: center;
  }

  .ant-col {
    display: flex;
    justify-content: center;
  }
`;

const ProfileImageContainer = styled.div`
  background-image: url(${ProfileImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
  width: 250px;
  height: 250px;
  border-radius: 0.25em;
`;

const Experience = () => {
  return (
    <AboutDetailContainer>
      <div className="text-center title">
        <h1 className="title">About Me</h1>
      </div>

      <Row align="middle" justify="center" gutter={[20, 40]} id="intro-fade">
        <Col xs={24} md={12}>
          <FadeInContainer>
            <ProfileImageContainer />
          </FadeInContainer>
        </Col>
        <Col xs={24} md={12}>
          <FadeInContainer>
            <div className="about">
              <div>
                &ldquo; My name is{" "}
                <label className="bold sub-title">Nitipon Chingthongchai</label>
                . I like to think, analyze, and solve problems. So I really like
                coding.
              </div>
              <br />
              <div>
                <div>
                  I like to create beautiful things on the Web. And now I'm
                  studying Ethereum smart contracts, Blockchain, and
                  Decentralized finance. &rdquo;
                </div>
              </div>
            </div>
          </FadeInContainer>
        </Col>
      </Row>
    </AboutDetailContainer>
  );
};

export default Experience;
