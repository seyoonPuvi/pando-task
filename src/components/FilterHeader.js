import React, { useState } from "react";
import styled from "styled-components";

const FilterHeaderContainer = styled.div`
  padding: 0.5rem 2rem;
  background-color: #e9f1f5;
`;
const FHMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FHLeftContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

const DropDownContainer = styled.div`
  width: Hug (239px) px;
  height: Hug (16px) px;
  opacity: 0px;
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

const FilterTitle = styled.p`
  font-family: Open Sans;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #616161;
`;

const FilterDropDown = styled.select`
  outline: none;
  border: none;
  background-color: transparent;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 600;
  color: #18283b;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-image: url("https://i.postimg.cc/9QhZ0wGK/Dropdown-arrow.png");
  background-repeat: no-repeat;

  /* Adjust the position of the arrow */
  background-position: calc(100% - 15px) center;
  background-size: 10px;

  padding-right: 30px;
  cursor: pointer;
`;

const FilterOption = styled.option`
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 10px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #18283b;
  padding: 0 5px;
`;

const FilterButton = styled.button`
  width: Fixed (24px) px;
  height: Fixed (24px) px;
  padding: 5px;
  border-radius: 2px 0px 0px 0px;
  opacity: 0px;
  background-color: white;
  cursor: pointer;
`;

const FilterIcon = styled.img`
  height: 1rem;
  width: 1rem;
  object-fit: contain;
  object-position: center;
`;

const LabelButtonContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;

  border-left: 0.5px solid #616161;
  padding-left: 1rem;
  margin-right: 2rem;
`;
const LabelCont = styled.div`
  background-color: white;
  border-radius: 16px;
  color: #616161;
  padding: 1rem;
`;

const LabelButton = styled.button`
  padding: 0.5rem;
  border-radius: 2px;
  color: #616161;
  cursor: pointer;
`;

const FilterHeader = () => {
  const [showFilter, ToggleFilter] = useState(false);
  return (
    <FilterHeaderContainer>
      <FHMainContainer>
        <FHLeftContainer>
          <DropDownContainer>
            <FilterTitle>Planning Group :</FilterTitle>
            <FilterDropDown>
              <FilterOption>Arizona Zone Retail</FilterOption>
            </FilterDropDown>
          </DropDownContainer>
          {showFilter && (
            <LabelButtonContainer>
              <LabelCont>Label : Select V</LabelCont>
              <LabelButton
                type="button"
                onClick={() => {
                  ToggleFilter(false);
                }}
              >
                X
              </LabelButton>
            </LabelButtonContainer>
          )}
          <FilterButton
            type="button"
            onClick={() => {
              ToggleFilter(!showFilter);
            }}
          >
            <FilterIcon
              src="https://i.postimg.cc/YSNbyxbr/Mask.png"
              alt="filter-icon"
            />
          </FilterButton>
        </FHLeftContainer>
      </FHMainContainer>
    </FilterHeaderContainer>
  );
};

export default FilterHeader;
