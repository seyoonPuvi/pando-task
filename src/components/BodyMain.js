import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import DisplaySection from "./DisplaySection";

const BodyMainContainer = styled.div`
  display: flex;
  column-gap: 1rem;
  padding: 1rem 0;
`;

const BodyMain = () => {
  return (
    <BodyMainContainer>
      <SideBar />
      <DisplaySection />
    </BodyMainContainer>
  );
};

export default BodyMain;
