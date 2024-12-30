import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { CiFilter } from "react-icons/ci";

const FilterHeaderContainer = styled.div`
  width: 1440px;
  height: 40px;
  background-color: #e9f1f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FHMainContainer = styled.div`
  width: 1400px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  min-width: 283px;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SelectionDropdown = styled.div`
  min-width: 239px;
  height: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SelectionLabel = styled.p`
  width: 80px;
  height: 16px;
  font-family: Open Sans;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #616161;
`;
const SelectionLabel2 = styled.p`
  width: 3px;
  height: 16px;
  font-family: Open Sans;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #616161;
`;

const SelectionLabel3 = styled.p`
  width: 131px;
  height: 10px;
  min-width: 90px;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 10px;
  text-align: left;
  color: #18283b;
`;

const DownNavBtn = styled(IoIosArrowDown)`
  font-size: 11px;
  color: #a3a3a380;
`;

const MoreFiterCont = styled.div`
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FilterIcon = styled(CiFilter)`
  font-size: 18px;
  color: #234357;
  font-weight: bold;
  transition: all 0.3s ease;
`;

const LabelSelectCont = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.5s ease-out;
`;

const Line = styled.div`
  height: 100%;
  width: 1px;
  border: 1px solid #616161;
`;

const LabelSelect = styled.div`
  height: 100%;
  background-color: white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 10px;
  transition: all 0.5s ease-out;
`;

const Label = styled.p`
  font-family: Open Sans;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #616161;
`;

const LabelDropDown = styled(DownNavBtn)`
  color: #616161;
  font-size: 16px;
`;

const CloseIconCont = styled.button`
  background-color: white;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 24px;
  width: 24px;
`;

const CloseIcon = styled(IoMdClose)`
  font-size: 20px;
  color: #616161;
  font-weight: 700;
`;
const FilterHeader = () => {
  const [showFilter, ToggleFilter] = useState(false);
  return (
    <FilterHeaderContainer>
      <FHMainContainer>
        <LeftContainer>
          <SelectionDropdown>
            <SelectionLabel>Planning Group</SelectionLabel>
            <SelectionLabel2>:</SelectionLabel2>
            <SelectionLabel3>Arizona Zone Retail</SelectionLabel3>
            <DownNavBtn />
          </SelectionDropdown>
          {!showFilter && (
            <MoreFiterCont
              onClick={() => {
                ToggleFilter(true);
              }}
            >
              <FilterIcon />
            </MoreFiterCont>
          )}
          {showFilter && (
            <LabelSelectCont>
              <Line />
              <LabelSelect>
                <Label>Label</Label>
                <Label>:</Label>
                <Label>Select</Label>
                <LabelDropDown />
              </LabelSelect>
              <CloseIconCont
                type="button"
                onClick={() => {
                  ToggleFilter(false);
                }}
              >
                <CloseIcon />
              </CloseIconCont>
            </LabelSelectCont>
          )}
        </LeftContainer>
      </FHMainContainer>
    </FilterHeaderContainer>
  );
};

export default FilterHeader;
