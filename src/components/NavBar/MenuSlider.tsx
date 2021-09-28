import React, { FC } from "react";
import styled from "styled-components";

import { GrClose } from "react-icons/gr";

const MenuSliderWrapper = styled.div`
  .slider {
    background-color: lightgrey;
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0px;
    z-index: 999;
    transition: all 0.3s ease-in-out 0s;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    opacity: 1;
    top: 0%;
  }

  .close {
    opacity: 0;
    top: -100%;
  }

  .close-icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1em 4vw;
    font-size: 1.8rem;
    cursor: pointer;
  }

  h2 {
    cursor: pointer;
    font-size: 1.7rem;
  }
`;

interface MenuSliderProps {
  openMenu: boolean;
  setOpenMenu: (flag: boolean) => void;
}

const MenuSlider: FC<MenuSliderProps> = (props) => {
  const { openMenu, setOpenMenu } = props;

  return (
    <MenuSliderWrapper>
      <div className={openMenu ? "slider" : "slider close"}>
        <div className="close-icon" onClick={() => setOpenMenu(false)}>
          <GrClose />
        </div>
        <h2>About</h2>
        <h2>Skills</h2>
        <h2>Works</h2>
        <h2>Contract</h2>
      </div>
    </MenuSliderWrapper>
  );
};

export default MenuSlider;