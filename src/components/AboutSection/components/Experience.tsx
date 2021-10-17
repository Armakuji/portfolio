import React from "react";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";
import styled from "styled-components";

const ExperienceContainer = styled.div`
  height: 1000px;
`;

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <FadeInContainer>
        <div className="title">
          <h2>Experience</h2>
        </div>
      </FadeInContainer>
    </ExperienceContainer>
  );
};

export default Experience;
