import styled from "styled-components";
import IntroBackGround from "utils/images/intro_background1.png";

export const IntroContrainer = styled.div`
  // background-image: url(${IntroBackGround});
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center;

  // @media screen and (max-width: 1024px) {
  //   background-position: right;
  //   height: fit-content;
  // }

  // max-height: 560px;
  background-color: transparent;

  @media (max-width: 570px) {
    height: 78vh;
  }
`;

export const ContentWrapper = styled.div`
  background-color: transparent;
  min-height: 400px;
  min-width: 375px;
  letter-spacing: 0.04em;
  display: flex;
  justify-content: center;
  padding-top: 15vmax;
  padding-bottom: 12vmax;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  padding: 0 2em;

  h1 {
    color: #151418;
    opacity: 0.98;
    font-weight: bold;
    margin-bottom: 0;
  }

  h2 {
    font-weight: bold;
    opacity: 0.8;
    font-family: proxima-nova;
    color: #151418;
    margin-bottom: 0;
  }

  p {
    word-wrap: break-word;
    margin-top: 0.5em;

    color: #151418;
  }

  .ant-row {
    min-width: 100%;
  }

  .description-box {
    display: inline-block;
  }

  @media (max-width: 767px) {
    text-align: center;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 2rem;
    max-width: 560px;
  }

  @media (min-width: 375px) {
    h1 {
      font-size: 2.4rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      word-wrap: break-word;
      font-size: 1.4rem;
    }
  }

  @media (min-width: 800px) {
    width: 960px;

    h1 {
      font-size: 2.8rem;
    }

    h2 {
      font-size: 2.2em;
    }

    p {
      max-width: 460px;
      font-size: 1.8em;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
