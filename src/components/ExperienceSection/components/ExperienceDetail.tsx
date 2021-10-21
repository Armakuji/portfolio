import React from "react";
import styled from "styled-components";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";
import { Typography, Space } from "antd";
import { AiFillCaretRight } from "react-icons/ai";
import { experienceList } from "utils/ExperienceList";

interface ExperienceDetailType {
  title: string;
  description: string;
}

const ExperienceDetailContainer = styled.div`
  margin: 2rem 1rem;
  word-break: break-word;

  .detail {
    padding-bottom: 2em;

    h4.ant-typography {
      color: white;
      line-height: 1.25;
    }

    .description {
      margin-left: 1.5em;

      span.ant-typography {
        color: #a4a7c1;
      }
    }
    // color: darkorange;
    // color: deepskyblue;
    // color: dodgerblue;
    // color: mediumspringgreen;
  }
`;

const AiFillCaretRightColor = styled(AiFillCaretRight)`
  height: 1em;
  width: auto;

  path {
    stroke: #50fa7b;
    fill: #50fa7b;
  }
`;

const { Text, Title } = Typography;

const ExperienceDetail = () => {
  return (
    <ExperienceDetailContainer>
      {experienceList.map((item: ExperienceDetailType, index: number) => {
        return (
          <div className="detail" key={index}>
            <FadeInContainer>
              <Title level={4}>
                <Space>
                  <AiFillCaretRightColor />
                  {item.title}
                </Space>
              </Title>
              <div className="description">
                <Text>{item.description}</Text>
              </div>
            </FadeInContainer>
          </div>
        );
      })}
    </ExperienceDetailContainer>
  );
};

export default ExperienceDetail;
