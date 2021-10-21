import React, { FC } from "react";
import styled from "styled-components";
import { Typography, Row, Col, Divider, Space } from "antd";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";
import { ReactComponent as RightArrow } from "assets/svg/right_arrow.svg";

interface SkillDetailProps {
  title: string;
  skillList: string[];
}

const SkillDetailContainer = styled.div`
  .title {
    color: #3d56b2;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.4;
  }

  .ant-divider-horizontal {
    margin: 14px 0;
  }

  .skill-list {
    margin-left: 1.5em;
  }
`;

const RightArrowColor = styled(RightArrow)`
  height: 1em;
  width: auto;
  margin-top: 0.5em;

  path {
    stroke: ${(props) => props.theme.title};
    fill: ${(props) => props.theme.title};
  }
`;

const { Text } = Typography;

const SkillDetail: FC<SkillDetailProps> = (props) => {
  const { title, skillList } = props;
  return (
    <FadeInContainer>
      <SkillDetailContainer>
        <Row gutter={[15, 0]}>
          <Col xs={24} md={8}>
            <Text className="title">
              <Space>
                <RightArrowColor />
                {title}
              </Space>
            </Text>
          </Col>
          <Col xs={24} md={10}>
            <div className="skill-list">
              {skillList.map((item: string, index: number) => (
                <Text key={index}>
                  {index !== skillList.length - 1 ? `${item}, ` : item}
                </Text>
              ))}
            </div>
          </Col>
        </Row>
        <Divider />
      </SkillDetailContainer>
    </FadeInContainer>
  );
};

export default SkillDetail;
