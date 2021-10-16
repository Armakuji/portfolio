import React from "react";
import styled from "styled-components";
import ProfileImage from "assets/images/profile_pic2.png";

const ImageWrapper = styled.span`
  .bounce-2 {
    animation-name: bounce-2;
    animation-timing-function: ease;
  }

  @keyframes bounce-2 {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .image {
    height: 80%;
    width: 80%;
    max-height: 1.25em;
    max-width: 1.25em;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
  }
`;

const EthBlock = () => {
  return (
    <ImageWrapper>
      {" "}
      <img src={ProfileImage} className="image bounce-2" alt="profile_image" />
    </ImageWrapper>
  );
};

export default EthBlock;
