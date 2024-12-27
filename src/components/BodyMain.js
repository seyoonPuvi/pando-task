import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import DisplaySection from "./DisplaySection";
import { useSelector } from "react-redux";
import Shipment from "./shipment/Shipment";

const BodyMainContainer = styled.div`
  display: flex;
`;

const BodyMain = () => {
  const showShipment = useSelector((store) => store.shipmentView.showShipment);
  return (
    <BodyMainContainer>
      <SideBar />
      <DisplaySection />
      {showShipment && <Shipment />}
    </BodyMainContainer>
  );
};

export default BodyMain;
