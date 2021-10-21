import React, { FC } from "react";
import styled from "styled-components";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";
import { Typography, Space } from "antd";
import { ExperienceDetailType } from "utils/ExperienceList";
import { ReactComponent as RightArrow } from "assets/svg/right_arrow.svg";

const ExperienceDetailContainer = styled.div`
  margin: 2rem 1rem;
  word-break: break-word;

  .detail {
    padding-bottom: 2em;

    .title {
      color: white;
      line-height: 1.25;
      font-weight: 600;
      font-size: 20px;
    }

    .ant-space {
      padding-bottom: 0.25em;
    }

    .description {
      margin-left: 1.5em;

      span.ant-typography {
        color: #a4a7c1;
      }
    }
  }
`;

const RightArrowColor = styled(RightArrow)`
  height: 1em;
  width: auto;

  path {
    stroke: #50fa7b;
    fill: #50fa7b;
  }
`;

const { Text } = Typography;

interface ExperienceDetailProps {
  experienceList: ExperienceDetailType[];
}

const ExperienceDetail: FC<ExperienceDetailProps> = (props) => {
  const { experienceList } = props;
  return (
    <ExperienceDetailContainer>
      {experienceList.map((item: ExperienceDetailType, index: number) => {
        return (
          <div className="detail" key={index}>
            <FadeInContainer>
              <Text className="title">
                <Space>
                  <RightArrowColor />
                  {item.title}
                </Space>
              </Text>
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
