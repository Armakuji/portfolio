import React from "react";
import styled from "styled-components";
import { Divider } from "antd";

const SectionDeviderContainer = styled.div`
  .section-devider {
    margin: 36px 0;
    height: 2px;
  }
`;

const SectionDevider = () => {
  return (
    <SectionDeviderContainer>
      <Divider className="section-devider" />
    </SectionDeviderContainer>
  );
};

export default SectionDevider;
