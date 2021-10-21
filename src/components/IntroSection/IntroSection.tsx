import React from "react";
import { Row, Col, Typography } from "antd";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";

import NightIcon from "components/NightIcon/NightIcon";
import {
  IntroContrainer,
  ContentWrapper,
  Content,
  IconWrapper,
} from "./IntroSection.styled";

const { Title, Text } = Typography;

const IntroSection = () => {
  return (
    <IntroContrainer id="intro" className="intro">
      <ContentWrapper>
        <Content>
          <FadeInContainer>
            <Row justify="center" align="middle" gutter={[20, 20]}>
              <Col xs={24} md={14}>
                <Title level={1}>
                  Hi there. I'm <span className="title">Nitipon</span>
                </Title>
                <Title level={2}>Software Engineer 🧑‍💻</Title>
                <Text>
                  I am a software engineer with a focus on the frontend
                </Text>
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
