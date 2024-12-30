import React from "react";
import { Heading } from "../Shipment";
import {
  DetailsContainer,
  WtAndVolCont,
  WeightInfoCard,
  NameAndDistCont,
  Name,
  SubHeading,
  Weight,
  WeightHeading,
  LocationInfoContainer,
  LocationContainer,
  ArrowContainer,
  ArrowImage,
  LocationDetails,
  GroupName,
  ShipmentHeader,
  Place,
  ExpandContainer,
  ExpandInfoCard,
  WeightInfo,
  WeightSubHeading,
  Unit,
  QtyHeading,
  QtySubHeading,
  ShipmentPlanContainer,
  ExpandButton,
  ShipmentListMainContainer,
  ShipmentListContainer,
  DotLineContainer,
  DotLine,
  ExpandLineContainer,
  TopCircle,
  ExpandLine,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { toggleExpandDetails } from "../../../utils/store/shipmentViewSlice";

const Details = () => {
  const dispatch = useDispatch();
  const isExpanded = useSelector(
    (store) => store.shipmentView.isDetailsExpanded
  );

  const shipmentData = useSelector(
    (store) => store.shipmentView.selectedShipment
  );
  const onRenderWeightInfo = () => (
    <WeightInfoCard>
      <NameAndDistCont>
        <Name>
          <SubHeading>Carrier : </SubHeading>CH Robinson
        </Name>
        <Name>
          <SubHeading>Total Distance : </SubHeading>300 mi
        </Name>
      </NameAndDistCont>
      <WtAndVolCont>
        <Weight>
          <WeightHeading>Total Wt</WeightHeading> 2500 lbs
        </Weight>
        <Weight>
          <WeightHeading>Total Vol</WeightHeading> 1200 cft
        </Weight>
      </WtAndVolCont>
    </WeightInfoCard>
  );

  const onRenderLocationInfo = (showDestination, data) => (
    <LocationInfoContainer>
      <LocationContainer>
        <ArrowContainer>
          {!showDestination ? (
            <>
              <ArrowImage
                src="https://i.postimg.cc/ydHD8LZb/Dot.png"
                alt="Arrow"
              />
              <DotLineContainer>
                <DotLine />
              </DotLineContainer>
            </>
          ) : (
            <>
              <DotLineContainer>
                <DotLine />
              </DotLineContainer>
              <ArrowImage
                src="https://i.postimg.cc/xqDQrCJW/Dot-1.png"
                alt="Arrow"
              />
            </>
          )}
        </ArrowContainer>
        <LocationDetails>
          <GroupName>{data?.name}</GroupName>
          <Place>{data?.address}</Place>
        </LocationDetails>
      </LocationContainer>
    </LocationInfoContainer>
  );

  const onRenderExpandLineContainer = () => (
    <ExpandLineContainer isExpanded={isExpanded}>
      <TopCircle></TopCircle>
      <ExpandLine isExpanded={isExpanded}></ExpandLine>
      <TopCircle></TopCircle>
    </ExpandLineContainer>
  );

  const onRenderExpandContainer = (showDestination) => (
    <ExpandContainer>
      {!showDestination && onRenderExpandLineContainer()}
      {isExpanded && (
        <ExpandInfoCard>
          <NameAndDistCont>
            <WeightInfo>
              <WeightHeading>Wt</WeightHeading>
              <WeightSubHeading>
                1978.75 <Unit>lbs</Unit>
              </WeightSubHeading>
            </WeightInfo>
            <WeightInfo>
              <WeightHeading>Vol.</WeightHeading>
              <WeightSubHeading>
                127.38 <Unit>cft</Unit>
              </WeightSubHeading>
            </WeightInfo>
          </NameAndDistCont>
          <NameAndDistCont>
            <WeightInfo>
              <QtyHeading>Qty</QtyHeading>
              <QtySubHeading>
                179 <Unit>Pcs.</Unit>
              </QtySubHeading>
            </WeightInfo>
            <WeightInfo>
              <QtyHeading>Plt</QtyHeading>
              <QtySubHeading>2</QtySubHeading>
            </WeightInfo>
          </NameAndDistCont>
        </ExpandInfoCard>
      )}
    </ExpandContainer>
  );

  const onRenderShipmentListContainer = (each) => (
    <>
      {onRenderLocationInfo(false, each)}
      {onRenderExpandContainer(false)}
    </>
  );

  const onRenderDestination = (showDestination) => (
    <>
      {onRenderLocationInfo(showDestination, shipmentData?.shipmentDestination)}
      {onRenderExpandContainer(showDestination)}
    </>
  );

  return (
    <DetailsContainer>
      {onRenderWeightInfo()}
      <ShipmentPlanContainer>
        <ShipmentHeader>
          <Heading>Shipment Plan</Heading>
          <ExpandButton
            type="button"
            onClick={() => {
              dispatch(toggleExpandDetails());
            }}
          >
            {isExpanded ? "COLLAPSE PLAN" : "EXPAND PLAN"}
          </ExpandButton>
        </ShipmentHeader>
        {shipmentData && (
          <ShipmentListMainContainer>
            {shipmentData?.shipmentDetails?.map((each, index) => (
              <ShipmentListContainer key={index}>
                {onRenderShipmentListContainer(each)}
              </ShipmentListContainer>
            ))}
            <ShipmentListContainer>
              {onRenderDestination(true)}
            </ShipmentListContainer>
          </ShipmentListMainContainer>
        )}
      </ShipmentPlanContainer>
    </DetailsContainer>
  );
};

export default Details;
