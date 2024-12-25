import React from "react";
import styled from "styled-components";

const SubHeaderContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSubContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  border-right: 1px solid #e9f1f5;
  padding: 0.5rem 1rem;
`;

const RightSubContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-left: 1px solid #e9f1f5;
`;

const SubHeaderText = styled.span`
  font-family: Open Sans;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  text-align: left;
  color: #616161;
`;

const ArrowIcon = styled.img`
  width: 4px;
  height: 7px;
`;

const SubHeaderHighlightText = styled.p`
  font-family: Open Sans;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #005399;
`;

const CreateShipmentButton = styled.button`
  width: Hug (130px) px;
  height: Hug (30px) px;
  padding: 6px 10px 8px 10px;
  gap: 10px;
  border-radius: 4px 0px 0px 0px;
  opacity: 0px;
  color: #616161;
  //styleName: Button/Normal-Bold;
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 16.34px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const SubHeader = () => {
  return (
    <SubHeaderContainer>
      <LeftSubContainer>
        <SubHeaderText>New Plan</SubHeaderText>
        <ArrowIcon src="https://i.postimg.cc/PqrQ2vV9/Mask.png" alt="arrow" />
        <SubHeaderHighlightText>{`<New Plan Name>`}</SubHeaderHighlightText>
      </LeftSubContainer>
      <RightSubContainer>
        <CreateShipmentButton type="button">
          CREATE SHIPMENT
        </CreateShipmentButton>
      </RightSubContainer>
    </SubHeaderContainer>
  );
};

export default SubHeader;
