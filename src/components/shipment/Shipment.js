import React from "react";
import styled from "styled-components";
import { tabData } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import Map from "./Map";
import Details from "./detailsComponent/Details";
import Rate from "./Rate";
import {
  changeActiveShipmentTab,
  closeShipment,
} from "../../utils/store/shipmentViewSlice";
import { IoMdClose } from "react-icons/io";

const ShipmentContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: white;
  padding: 2rem 1rem;
`;

export const ShipmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Heading = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: #005399;
  letter-spacing: 1px;
`;

const ButtonContainer = styled.div`
  width: 137px;
  height: 30px;
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

const ButtonText = styled.span`
  padding: 0.5rem;
  border-radius: 2px;
  background-color: #eef2f4;
  color: #005399;
  font-size: 10px;
  font-weight: 700;
`;

const CloseButton = styled.button`
  background-color: transparent;
  font-size: 14px;
`;

const TabContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
`;

const Tab = styled.button`
  background-color: ${(props) => (props.isActive ? "#005399" : "white")};
  border-radius: 14px;
  color: ${(props) => (props.isActive ? "white" : "#005399")};
  padding: 5px 10px;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const CloseIcon = styled(IoMdClose)`
  font-size: 2rem;
  padding-top: 5px;
`;

const Shipment = () => {
  const activeTab = useSelector(
    (store) => store.shipmentView.activeShipmentTab
  );
  const dispatch = useDispatch();
  const onRenderShipmentHeader = () => (
    <ShipmentHeader>
      <Heading>Planned Shipment 01</Heading>
      <ButtonContainer>
        <ButtonText>3D VISUALISATION</ButtonText>
        <CloseButton
          type="button"
          onClick={() => {
            dispatch(closeShipment());
          }}
        >
          <CloseIcon />
        </CloseButton>
      </ButtonContainer>
    </ShipmentHeader>
  );

  const onRenderTabContainer = () => (
    <TabContainer>
      {tabData.map((each) => (
        <Tab
          key={each}
          type="button"
          isActive={activeTab === each}
          onClick={() => {
            dispatch(changeActiveShipmentTab(each));
          }}
        >
          {each}
        </Tab>
      ))}
    </TabContainer>
  );

  const onRenderActiveTab = () => {
    switch (activeTab) {
      case "MAP":
        return <Map />;
      case "DETAILS":
        return <Details />;
      case "RATE":
        return <Rate />;
      default:
        break;
    }
  };

  return (
    <ShipmentContainer>
      {onRenderShipmentHeader()}
      {onRenderTabContainer()}
      {onRenderActiveTab()}
    </ShipmentContainer>
  );
};

export default Shipment;
