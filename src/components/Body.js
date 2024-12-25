import React from "react";
import Header from "./Header";
import styled from "styled-components";
import SubHeader from "./SubHeader";
import FilterHeader from "./FilterHeader";
import BodyMain from "./BodyMain";

const BodyContainer = styled.div`
  height: 100vh;
  background: white;
`;

const Body = () => {
  return (
    <BodyContainer>
      <Header />
      <SubHeader />
      <FilterHeader />
      <BodyMain />
    </BodyContainer>
  );
};

export default Body;
