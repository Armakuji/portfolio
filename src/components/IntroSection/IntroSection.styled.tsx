import styled from "styled-components";

export const IntroContrainer = styled.div`
  background-color: #221b47;
`;

export const ContentWrapper = styled.div`
  background-color: transparent;
  min-height: 450px;
  min-width: 375px;
  letter-spacing: 0.04em;
  display: flex;
  justify-content: center;
  padding-top: 22vmax;
  padding-bottom: 25vmax;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  padding: 0 2em;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  .blue {
    color: #7b79f7;
  }


  h1 {
    color: white;
    opacity: 0.98;
    font-weight: bold;
    margin-bottom: 0;
  }

  h2 {
    font-weight: bold;
    color: white;
    margin-bottom: 0;
  }

  p {
    word-wrap: break-word;
    margin-top: 0.5em;

    color: white;
  }

  .ant-row {
    min-width: 70vw;
}
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
      font-size: 2.6rem;
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
