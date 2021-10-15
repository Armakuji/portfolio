import React, { FC, useState } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { GrMenu } from "react-icons/gr";

interface NavBarProps {
  isTop: boolean;
  fontColor: string;
  backgroundColor: string;
}

const NavBarWrapper = styled.div<NavBarProps>`
  width: 100%;
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  backdrop-filter: blur(1px);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: ${(props) =>
    props.isTop
      ? "unset;"
      : "0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);"}

  padding-right: 4vw;
  padding-left: 4vw;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 999;
    

  h1 {
    margin-bottom: 0;
    font-size: 1.6em;
    color: ${(props) => props.fontColor};
  }

  .nav {
    width: 100%;
    height: 100%;
    min-width: 200px;
    font-size: 1.2rem;
  }

  .ant-row {
    padding: 0.25em 0;
  }

  .menu {
    display: flex;
    justify-content: space-around;
    min-width: 400px;
    font-weight: bold;

    div {
      cursor: pointer;
    }
  }
  
  a{
      color: ${(props) => props.fontColor};
    }

  .sub-menu:hover {
  }

  .mobile-menu {
    display: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.4em;
  }

  @media (max-width: 767px) {
    .menu {
      display: none;
    }

    .mobile-menu {
      display: flex;
    }
  }
`;

interface MenuSliderProps {
  setOpenMenu: (flag: boolean) => void;
}

const NavBar: FC<MenuSliderProps> = (props) => {
  const { setOpenMenu } = props;
  const [isTop, setIsTop] = useState<boolean>(true);
  const [fontColor, setFontColor] = useState<string>("white");
  const [backgroundColor, setBackgroundColor] = useState<string>("#221b47");

  window.onscroll = function () {
    if (window.pageYOffset <= 50) {
      setIsTop(true);
      setFontColor("white");
      setBackgroundColor("#221b47");
    } else {
      setIsTop(false);
      setFontColor("black");
      setBackgroundColor("white");
    }
  };

  return (
    <NavBarWrapper
      isTop={isTop}
      fontColor={fontColor}
      backgroundColor={backgroundColor}
    >
      <Row justify="space-between" align="middle" className="nav">
        <Col>
          <h1>
            <a href="#intro"> Nitipon.eth</a>
          </h1>
        </Col>
        <Col>
          <div className="menu">
            <div className="sub-menu">
              <a href="#about">About</a>
            </div>
            <div className="sub-menu">Skills</div>
            <div className="sub-menu">Works</div>
            <div className="sub-menu">Contract</div>
          </div>
          <div className="mobile-menu" onClick={() => setOpenMenu(true)}>
            <GrMenu />
          </div>
        </Col>
      </Row>
    </NavBarWrapper>
  );
};

export default NavBar;
