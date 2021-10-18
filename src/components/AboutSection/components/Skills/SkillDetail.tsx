import React, { FC } from "react";
import styled from "styled-components";
import { Typography, Row, Col, Divider, Space } from "antd";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";
import { AiFillCaretRight } from "react-icons/ai";
interface SkillDetailProps {
  title: string;
  skillList: string[];
}

const SkillDetailContainer = styled.div`
  h4.ant-typography {
    color: ${(props) => props.theme.subTitle};
  }

  .ant-divider-horizontal {
    margin: 14px 0;
  }

  .skill-list {
    margin-left: 1.5em;
  }
`;

const AiFillCaretRightColor = styled(AiFillCaretRight)`
  height: 1em;
  width: auto;
  margin-top: 0.5em;

  path {
    stroke: ${(props) => props.theme.title};
    fill: ${(props) => props.theme.title};
  }
`;

const { Text, Title } = Typography;

const SkillDetail: FC<SkillDetailProps> = (props) => {
  const { title, skillList } = props;
  return (
    <FadeInContainer>
      <SkillDetailContainer>
        <Row gutter={[15, 0]}>
          <Col xs={24} md={8}>
            <Title level={4}>
              <Space>
                <AiFillCaretRightColor />
                {title}
              </Space>
            </Title>
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
