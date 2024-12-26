import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import { CiViewColumn } from "react-icons/ci";
import styled from "styled-components";
import ListItem from "./ListItem/ListItem";
import { ListItemContainer } from "./ListItem/style";
import { dummyData } from "../utils/constant";
import { useSelector } from "react-redux";
import Shipment from "./shipment/Shipment";

const DisplayContainer = styled.div`
  min-height: 65rem;
  display: flex;
  background-color: #f3f6fc;
  width: 100%;
`;

const DisplayMainContainer = styled.div`
  overflow-y: auto;
  padding: 2rem;
  width: 100%;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
`;

const SectionTitle = styled.p`
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 19.07px;
  letter-spacing: 1px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #005399;
`;

const SectionHignlightTitle = styled.span`
  font-family: Open Sans;
  font-size: 10px;
  font-weight: 600;
  line-height: 13.62px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #404040;
  background-color: #bdf0f4;

  padding: 0.8px 2px 0.8px 2px;
  gap: 10px;
  border-radius: 2px 0px 0px 0px;
  height: 15px;
  width: 94px;
`;

const SectionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
`;

export const ListTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ListTitle = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  height: 34px;
  border: 1px 0px 0px 0px;
  padding: 1rem 1.2rem;
`;
const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3rem;
`;
export const Checkbox = styled.input`
  width: 14px;
  height: 14px;

  margin-left: ${(props) => (props.showShipment ? "1.2rem" : "0")};

  @media (min-width: 1300px) {
    margin-left: 1.2rem;
  }
`;

const CheckBoxTitle = styled.p`
  font-family: Open Sans;
  font-size: 10px;
  font-weight: 600;

  letter-spacing: 0.5px;

  color: #005399;
`;
const ListHeading = styled.p`
  font-family: Open Sans;
  font-size: 10px;
  font-weight: 600;
  line-height: 13.62px;
  letter-spacing: 0.5px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #005399;
`;

const DownArrowIcon = styled(BiDownArrowAlt)`
  color: #005399;
  font-size: 1.2rem;
`;

const ColumnIcon = styled(CiViewColumn)`
  font-size: 2rem;
  color: #005399;
  margin-left: auto;
`;
const DisplaySection = () => {
  const showShipment = useSelector((store) => store.shipmentView.showShipment);
  return (
    <DisplayContainer>
      <DisplayMainContainer>
        <SectionTitleContainer>
          <SectionTitle>PLANNED</SectionTitle>
          <SectionHignlightTitle>Optima Generated</SectionHignlightTitle>
        </SectionTitleContainer>
        <SectionListContainer>
          <ListTitleContainer>
            <ListTitle width={showShipment ? "10%" : "5%"}>
              <CheckboxContainer>
                <Checkbox type="checkbox" showShipment={showShipment} />
                <CheckBoxTitle>S.NO</CheckBoxTitle>
              </CheckboxContainer>
            </ListTitle>
            <ListTitle width={showShipment ? "15%" : "25%"}>
              <ListHeading>ORIGIN</ListHeading>
              <DownArrowIcon />
            </ListTitle>
            <ListTitle width={showShipment ? "15%" : "10%"}>
              <ListHeading>DESTINATION</ListHeading>
              <DownArrowIcon />
            </ListTitle>
            <ListTitle width={showShipment ? "15%" : "10%"}>
              <ListHeading>CARRIER | TYPE</ListHeading>
            </ListTitle>
            <ListTitle width={showShipment ? "35%" : "20%"}>
              <ListHeading>MAX UTILISATION | VEHICLE</ListHeading>
            </ListTitle>
            {!showShipment && (
              <ListTitle width="20%">
                <ListHeading>TOTAL | WEIGHT | QTY</ListHeading>
                <DownArrowIcon />
              </ListTitle>
            )}
            <ListTitle width="10%">
              <ColumnIcon />
            </ListTitle>
          </ListTitleContainer>
          <ListItemContainer>
            {dummyData.map((each, index) => (
              <ListItem data={each} key={each.id} index={index} />
            ))}
          </ListItemContainer>
        </SectionListContainer>
      </DisplayMainContainer>
      {showShipment && <Shipment />}
    </DisplayContainer>
  );
};

export default DisplaySection;
