import React from "react";
import styled from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SubHeaderContainer = styled.div`
  width: 1440px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border: 1px solid #e9f1f5;
  padding-right: 20px;
`;

const LeftContainer = styled.div`
  width: 235px;
  height: 50px;
  border-right: 1px solid #e9f1f5;
  padding: 0px 0px 0px 20px;
`;
const SubHeaderTextContainer = styled.div`
  width: 215px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SubHeaderText = styled.p`
  width: 60px;
  height: 16px;
  font-family: Open Sans;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  text-align: left;
  color: #616161;
`;

const RightArrow = styled(MdOutlineKeyboardArrowRight)`
  font-size: 13px;
  color: #616161;
  font-weight: 600;
`;

const SubHeaderText2 = styled(SubHeaderText)`
  color: #005399;
  width: 115px;
  height: 16px;
  gap: 0px;
  opacity: 0px;
`;
const RightContainer = styled.div`
  width: 160px;
  height: 50px;
  padding: 0px 0px 0px 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Line = styled.div`
  width: 2px;
  height: 49.5px;
  border: 1px solid #e9f1f5;
`;

const Button = styled.button`
  width: 130px;
  height: 30px;
  padding: 6px 10px 8px 10px;
  border-radius: 4px;
  background-color: #e7e7e7;
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 16.34px;
  text-align: right;
  color: #616161;
`;
const SubHeader = () => {
  return (
    <SubHeaderContainer>
      <LeftContainer>
        <SubHeaderTextContainer>
          <SubHeaderText>New Plan</SubHeaderText>
          <RightArrow />
          <SubHeaderText2>{"<New Plan Name>"}</SubHeaderText2>
        </SubHeaderTextContainer>
      </LeftContainer>
      <RightContainer>
        <Line />
        <Button type="button">Create Shipment</Button>
      </RightContainer>
    </SubHeaderContainer>
  );
};

export default SubHeader;
