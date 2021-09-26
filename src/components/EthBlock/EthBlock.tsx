import React from "react";
import styled from "styled-components";
import ProfileImage from "utils/images/profile_pic2.png";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  .bounce-2 {
    animation-name: bounce-2;
    animation-timing-function: ease;
  }

  @keyframes bounce-2 {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .image {
    height: 80%;
    width: 80%;
    max-height: 300px;
    max-width: 300px;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-origin: bottom;

    @media (max-width: 1200px) {
      max-height: 220px;
      max-width: 220px;
    }
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
