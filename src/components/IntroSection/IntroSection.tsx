import React from "react";
import { Row, Col } from "antd";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";

import NightIcon from "components/NightIcon/NightIcon";
import {
  IntroContrainer,
  ContentWrapper,
  Content,
  IconWrapper,
} from "./IntroSection.styled";

const IntroSection = () => {
  return (
    <IntroContrainer id="intro" className="intro">
      <ContentWrapper>
        <Content>
          <FadeInContainer>
            <Row justify="center" align="middle" gutter={[20, 20]}>
              <Col xs={24} md={14}>
                <div className="description-box">
                  <h1>
                    Hi there. I'm <span className="title">Nitipon</span>
                  </h1>
                  <h2>Software Engineer 🧑‍💻</h2>
                  <p>I am a software engineer with a focus on the frontend</p>
                </div>
              </Col>
              <Col xs={24} md={10}>
                <IconWrapper>
                  <NightIcon />
                </IconWrapper>
              </Col>
            </Row>
          </FadeInContainer>
        </Content>
      </ContentWrapper>
    </IntroContrainer>
  );
};

export default IntroSection;
