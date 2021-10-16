import React from "react";
import FadeInContainer from "components/FadeInContainer/FadeInContainer";
import styled from "styled-components";

const WorksContainer = styled.div``;

const Works = () => {
  return (
    <WorksContainer>
      <FadeInContainer>
        <div className="title " id="works">
          <h2>Works</h2>
        </div>
      </FadeInContainer>
    </WorksContainer>
  );
};

export default Works;
