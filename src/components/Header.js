import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 1440px;
  height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #234357;
`;

const LeftContainer = styled.div`
  width: fit-content;
  max-width: 272px;
  height: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  opacity: 1;
`;

const RightContainer = styled.div`
  width: 132px;
  height: 100%;
  gap: 20px;
`;

const Logo = styled.img`
  width: 24px;
  height: 28px;
`;

const HeaderBorder = styled.div`
  width: 2px;
  height: 32px;
  border: 1px solid #9cb3bf80;
`;

const HeaderTextContainer = styled.div`
  height: 22px;
  display: flex;
  gap: 4px;
`;
const HeaderText = styled.p`
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  color: white;
  width: 127px;
  height: 22px;
`;

const HeaderText2 = styled(HeaderText)`
  width: 6px;
  height: 22px;
`;

const HeaderText3 = styled(HeaderText)`
  width: 65px;
  height: 22px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftContainer>
        <Logo src="https://i.postimg.cc/G2TdYnHH/Shipper.png" alt="logo" />
        <HeaderBorder />
        <HeaderTextContainer>
          <HeaderText>Global Industries</HeaderText>
          <HeaderText2>-</HeaderText2>
          <HeaderText3>Planning</HeaderText3>
        </HeaderTextContainer>
      </LeftContainer>
      <RightContainer></RightContainer>
    </HeaderContainer>
  );
};

export default Header;
