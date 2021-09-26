import React, { useState } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { FaGripLines } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const NavBarWrapper = styled.div`
  width: 100%;
  background: transparent;
  //   background: rgba(30, 30, 30, 0.5);
  //   backdrop-filter: blur(1px);

  padding-right: 2rem;
  padding-left: 2rem;
  display: flex;
  justify-content: center;

  h1 {
    margin-bottom: 0;
  }

  .nav {
    width: 100%;
    height: 100%;
    max-width: 960px;
    min-width: 200px;
    font-size: 1.2rem;

    @media (max-width: 1200px) {
      max-width: 820px;
    }

    @media (max-width: 960px) {
      max-width: 680px;
    }

    @media (max-width: 755px) {
      max-width: 520px;
    }
  }

  .ant-row {
    padding: 1em 0;
  }

  .menu {
    display: flex;
    justify-content: space-around;
    min-width: 300px;
    font-weight: bold;

    div {
      cursor: pointer;
    }
  }

  .mobile-menu {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 760px) {
    .menu {
      display: none;
    }

    .mobile-menu {
      display: block;
    }
  }
`;

const NavBar = () => {
  const [openMenu, setOpenMunu] = useState<boolean>(false);

  return (
    <NavBarWrapper>
      <Row justify="space-between" align="middle" className="nav">
        <Col>
          <h1>Nitipon.eth</h1>
        </Col>
        <Col>
          <div className="menu">
            <div>About</div>
            <div>Work</div>
            <div>Contract</div>
          </div>
          <div className="mobile-menu" onClick={() => setOpenMunu(!openMenu)}>
            {openMenu ? <GrClose /> : <FaGripLines />}
          </div>
        </Col>
      </Row>
    </NavBarWrapper>
  );
};

export default NavBar;
