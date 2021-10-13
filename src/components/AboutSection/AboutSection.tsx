import React from "react";
import styled from "styled-components";
import { Card, Row, Col } from "antd";
import ProfileImage from "utils/images/profile_image.png";

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
    margin: 0.5em auto;

    .ant-card-body {
      font-size: 1.4em;
      position: sticky;
      margin: 1rem 4rem;
    }

    --border-width: 3px;
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

    // @media (min-width: 576px) {
    //   max-width: 540px;
    // }

    // @media (min-width: 770px) {
    //   max-width: 80vw;
    // }
  }

  @media (min-width: 1100px) {
    .about {
      max-width: 85%;
    }

    .ant-row {
      padding: 1em 2em;
    }
  }

  .title {
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

const AboutSection = () => {
  return (
    <AboutContainer>
      <Card className="card">
        <div className="title">
          <h1>About Me</h1>
        </div>
        <Row align="middle" justify="center" gutter={[20, 40]}>
          <Col xs={24} md={12}>
            <ProfileImageContainer />
          </Col>
          <Col xs={24} md={12}>
            <div className="about">
              <div>
                &ldquo; My name is <label className="bold">Nitipon</label>. I
                like to think, analyze, and solve problems. So I really like
                coding.
              </div>
              <div>
                I like to create beautiful things on the Web. And now I'm
                studying Ethereum smart contracts, Blockchain, and Decentralized
                finance. &rdquo;
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </AboutContainer>
  );
};

export default AboutSection;
