import styled from "styled-components";
import IntroBackGround from "utils/images/intro_background1.png";

export const IntroContrainer = styled.div`
  height: 65vh;
  // background-image: url(${IntroBackGround});
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center;

  // @media screen and (max-width: 1024px) {
  //   background-position: right;
  //   height: fit-content;
  // }

  background-color: transparent;
  max-height: 720px;

  @media (max-width: 570px) {
    height: 78vh;
  }
`;

export const ContentWrapper = styled.div`
  background-color: transparent;
  min-height: 400px;
  min-width: 375px;
  letter-spacing: 0.04em;
  padding-top: 3rem;
  padding-bottom: 2rem;
  padding-right: 4vw;
  padding-left: 4vw;

  display: flex;
  justify-content: center;
  margin-top: 15vh;

  @media (max-width: 570px) {
    margin-top: 5vh;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;

  h1 {
    font-size: 2.4rem;
    color: #151418;
    opacity: 0.98;
    font-weight: bold;
    margin-bottom: 0;
  }

  h2 {
    font-size: 2.2em;
    font-weight: bold;
    opacity: 0.8;
    font-family: proxima-nova;
    color: #151418;
    margin-bottom: 0;
  }

  p {
    word-wrap: break-word;
    margin-top: 0.5em;
    font-size: 1.8em;
    color: #151418;
  }

  .ant-row {
    min-width: 375px;
  }

  @media (max-width: 770px) {
    text-align: center;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 2rem;
    max-width: 560px;

    .description-box {
      max-width: 460px;
      display: inline-block;
    }
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 570px) {
    max-width: 540px;
  }

  @media (min-width: 770px) {
    max-width: 720px;
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 2.8rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    p {
      word-wrap: break-word;
      font-size: 1.2rem;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
