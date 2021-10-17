import React from "react";

import styled from "styled-components";
import { Typography, Divider } from "antd";
import SkillDetail from "./SkillDetail";
import {
  languageList,
  libraryList,
  databaseList,
  toolList,
} from "utils/SkillList/SkillList";

const SkillContainer = styled.div``;

const { Title } = Typography;

const Skills = () => {
  return (
    <SkillContainer id="skills">
      <Divider />
      <Title level={2} className="title">
        Skills
      </Title>
      <SkillDetail title="Languages" skillList={languageList} />
      <SkillDetail title="Library and Frameworks" skillList={libraryList} />
      <SkillDetail title="Database" skillList={databaseList} />
      <SkillDetail title="Tools" skillList={toolList} />
    </SkillContainer>
  );
};

export default Skills;
