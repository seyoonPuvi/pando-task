import React from "react";
import styled, { keyframes } from "styled-components";

const SideBarContainer = styled.div`
  width: 40px;
  height: 658px;
  min-height: 650px;
  background-color: #d9e6ff;
  margin-right: 10px;
  margin-top: 13px;
`;

const MenuContainer = styled.div`
  padding: 1rem;
  background-color: ${(props) => (props.isActive ? "white" : "transparent")};
  cursor: pointer;
  position: relative;
  width: 40px; /* Corrected width */
  height: 40px; /* Corrected height */
`;

const Menu = styled.img`
  height: 20px;
  width: 20px;
  object-fit: cover;
  object-position: center;
`;
const growShrink = keyframes`
  0%, 100% {
    width: 6px;
    height: 6px;
  }
  50% {
    width: 8px; /* Change this value to adjust the max size */
    height: 8px; /* Change this value to adjust the max size */
  }
`;
const NotificationDot = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  top: 2px;
  right: 2px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  animation: ${growShrink} 1s ease-in-out infinite;
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
