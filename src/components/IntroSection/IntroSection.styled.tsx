import styled from "styled-components";

export const IntroContrainer = styled.div`
  background: #221b47;
  width: fit-content;

  @media (min-width: 365px) {
    width: auto;
    padding-top: 2em;
  }
`;

export const ContentWrapper = styled.div`
  background-color: transparent;
  min-height: 450px;
  min-width: 375px;
  letter-spacing: 0.04em;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  padding: 0 2em;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100vw;

  .title {
    color: #7b79f7;
  }

  h1.ant-typography {
    color: white;
    opacity: 0.98;
    font-weight: bold;
    margin-bottom: 0;
  }

  h2.ant-typography {
    font-weight: bold;
    color: white;
    margin-bottom: 0;
    margin-top: 0.25em;
  }

  span.ant-typography {
    word-wrap: break-word;
    padding-top: 0.5em;
    color: white;
  }

  .ant-row {
    min-width: 70vw;
  }

  @media (max-width: 767px) {
    text-align: center;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 2rem;
    max-width: 560px;
  }

  @media (min-width: 375px) {
    h1.ant-typography {
      font-size: 2.4rem;
    }

    h2.ant-typography {
      font-size: 2rem;
    }

    span.ant-typography {
      word-wrap: break-word;
      font-size: 1.4rem;
    }
  }

  @media (min-width: 820px) {
    h1.ant-typography {
      font-size: 2.6rem;
    }

    h2.ant-typography {
      font-size: 2.2em;
    }

    span.ant-typography {
      max-width: 460px;
      font-size: 1.8em;
    }
  }

  @media (min-width: 1000px) {
    .ant-row {
      min-width: unset;
      width: 860px;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    margin-top: 3rem;
  }
`;
