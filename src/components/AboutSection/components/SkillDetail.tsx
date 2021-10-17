import React, { FC } from "react";
import styled from "styled-components";
import { Typography, Row, Col, Space, Divider } from "antd";
import { AiFillCaretRight } from "react-icons/ai";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";

interface SkillDetailProps {
  title: string;
  skillList: string[];
}

const SkillDetailContainer = styled.div`
  margin-bottom: 0.5em;

  .sub-title {
    color: ${(props) => props.theme.subTitle};
  }
`;

const { Text, Title } = Typography;

const SkillDetail: FC<SkillDetailProps> = (props) => {
  const { title, skillList } = props;
  return (
    <FadeInContainer>
      <SkillDetailContainer>
        <Title level={4} className="sub-title">
          {title}
        </Title>
        <Row justify="start" gutter={[20, 10]}>
          {skillList.map((item: string, index: number) => (
            <Col xs={12} md={9} key={index}>
              <Space>
                <AiFillCaretRight />
                <Text>{item}</Text>
              </Space>
            </Col>
          ))}
        </Row>
        <Divider />
      </SkillDetailContainer>
    </FadeInContainer>
  );
};

export default SkillDetail;
