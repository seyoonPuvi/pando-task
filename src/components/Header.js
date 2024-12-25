import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #234357;
  width: 100%;
  padding: 1rem 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
`;

const Logo = styled.img`
  height: 2.4rem;
  width: 2.8rem;
  object-fit: contain;
  object-position: center;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 400;
  font-family: Open Sans;
  color: white;
  letter-spacing: 2px;
`;

const LineContainer = styled.div`
  height: 3.2rem;
  border: 1px solid #9cb3bf80;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src="https://i.postimg.cc/G2TdYnHH/Shipper.png" alt="logo" />
        <LineContainer />
        <Title>Global Industries - planning</Title>
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
