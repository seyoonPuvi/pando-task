import React from "react";
import styled from "styled-components";

const SideBarContainer = styled.div`
  width: 4rem;
  background-color: #d9e6ff;
  min-height: 65rem;
`;

const MenuContainer = styled.div`
  padding: 1rem;
  background-color: ${(props) => (props.isActive ? "white" : "transparent")};
  cursor: pointer;
  position: relative;
`;

const Menu = styled.img`
  height: 20px;
  width: 20px;
  object-fit: contain;
  object-position: center;
`;

const NotificationDot = styled.div`
  position: absolute;
  top: 3px;
  right: 5px;
  width: 5px;
  height: 5px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const SideBar = () => {
  return (
    <SideBarContainer>
      <MenuContainer>
        <Menu src="https://i.postimg.cc/Dwd9Mz1L/AI.png" alt="menu-icon" />
        <NotificationDot color="#1FCD93" />
      </MenuContainer>
      <MenuContainer isActive>
        <Menu
          src="https://i.postimg.cc/XYH8qSbt/Material-Full.png"
          alt="menu-icon"
        />
      </MenuContainer>
      <MenuContainer>
        <Menu
          src="https://i.postimg.cc/Y2RmMNks/Rejections.png"
          alt="menu-icon"
        />
        <NotificationDot color="#D26568" />
      </MenuContainer>
    </SideBarContainer>
  );
};

export default SideBar;
