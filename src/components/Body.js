import React from "react";
import Header from "./Header";
import styled from "styled-components";
import SubHeader from "./SubHeader";
import FilterHeader from "./FilterHeader";
import BodyMain from "./BodyMain";

const BodyContainer = styled.div`
  background-color: white;
  width: 1440px;
  height: 810px;
  margin: auto;
  overflow: hidden;
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
