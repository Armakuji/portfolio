import React from "react";

import styled from "styled-components";
import { Typography } from "antd";
import SkillDetail from "./SkillDetail";
import {
  languageList,
  libraryList,
  databaseList,
  toolList,
} from "utils/SkillList";

const SkillContainer = styled.div``;

const SkillDetailContainer = styled.div`
  margin-top: 1em;
`;

const { Title } = Typography;

const Skills = () => {
  return (
    <SkillContainer id="skills">
      <Title level={2} className="title">
        Skills
      </Title>
      <SkillDetailContainer>
        <SkillDetail title="Languages" skillList={languageList} />
        <SkillDetail title="Library and Frameworks" skillList={libraryList} />
        <SkillDetail title="Database" skillList={databaseList} />
        <SkillDetail title="Tools" skillList={toolList} />
      </SkillDetailContainer>
    </SkillContainer>
  );
};

export default Skills;
