import React, { FC } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { GrMenu } from "react-icons/gr";

const NavBarWrapper = styled.div`
  width: 100%;
  background: transparent;
  //   background: rgba(30, 30, 30, 0.5);
  //   backdrop-filter: blur(1px);

  padding-right: 4vw;
  padding-left: 4vw;
  display: flex;
  justify-content: center;

  h1 {
    font-family: Comic Sans MS;
    margin-bottom: 0;
    font-size: 1.6em;
  }

  .nav {
    width: 100%;
    height: 100%;
    // max-width: 1024px;
    min-width: 200px;
    font-size: 1.2rem;

    // @media (max-width: 1200px) {
    //   max-width: 820px;
    // }

    // @media (max-width: 960px) {
    //   max-width: 680px;
    // }

    // @media (max-width: 755px) {
    //   max-width: 520px;
    // }
  }

  .ant-row {
    padding: 1em 0;
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
  return (
    <NavBarWrapper>
      <Row justify="space-between" align="middle" className="nav">
        <Col>
          <h1>Nitipon.eth</h1>
        </Col>
        <Col>
          <div className="menu">
            <div className="sub-menu">About</div>
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
