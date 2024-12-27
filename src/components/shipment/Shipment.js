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
  width: 404px;
  height: 700px;
  background-color: white;
  margin-top: 13px;
`;

export const ShipmentHeader = styled.div`
  display: flex;

  align-items: center;
  width: 100%;
  height: 54px;
  min-height: 48px;
  padding: 12px 15px 12px 15px;
  gap: 10px;
`;

export const Heading = styled.h2`
  color: #005399;
  width: 227px;
  height: 16px;
  //styleName: 14px/Semi-Bold/Normal;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const ButtonContainer = styled.div`
  min-width: 137px;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  //styleName: 14px/Semi-Bold/Normal;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const ButtonText = styled.button`
  min-width: 113px;
  height: 24px;
  padding: 5px 10px 5px 10px;

  border-radius: 4px;

  background-color: #eef2f4;
  color: #0076dd;
  //styleName: Button/Small-Bold;
  font-family: Open Sans;
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;

  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const CloseButton = styled.button`
  background-color: transparent;
  font-size: 14px;
  width: 14px;
  height: 30px;

  border-radius: 4px;
`;

const TabContainer = styled.div`
  width: 100%;
  height: 34px;
  padding: 0px 15px 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Tab = styled.button`
  background-color: ${(props) => (props.isActive ? "#005399" : "white")};

  color: ${(props) => (props.isActive ? "white" : "#005399")};

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  min-width: 43px;
  height: 24px;
  padding: 5px 10px 5px 10px;

  border-radius: 20px;
  font-family: Open Sans;
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
`;

const CloseIcon = styled(IoMdClose)`
  font-size: 2.4rem;
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
