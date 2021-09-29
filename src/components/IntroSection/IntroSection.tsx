import React from "react";
import { Row, Col } from "antd";

import NightIcon from "components/NightIcon/NightIcon";
import {
  IntroContrainer,
  ContentWrapper,
  Content,
  IconWrapper,
} from "./IntroSection.styled";

const IntroSection = () => {
  return (
    <IntroContrainer>
      <ContentWrapper>
        <Content>
          <Row justify="center" align="middle" gutter={[40, 40]}>
            <Col xs={24} md={16}>
              <div className="description-box">
                <h1>Hi there. I'm Nitipon</h1>
                <h2>Frontend Developer</h2>
                <p>
                  I design and code beautifully simple things, and I love what I
                  do.
                </p>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <IconWrapper>
                <NightIcon />
              </IconWrapper>
            </Col>
          </Row>
        </Content>
      </ContentWrapper>
    </IntroContrainer>
  );
};

export default IntroSection;
