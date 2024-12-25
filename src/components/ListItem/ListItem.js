import React from "react";
import {
  List,
  SubList,
  DeliveryIconContainer,
  DeliveryIcon,
  Number,
  TextContainer,
  PickupDropContainer,
  LineImage,
  HoverContainer,
  RectangleBox,
  PickUpContainer,
  SubText,
  Text,
  Text2,
  PercentageContainer,
  Percentage,
  PercentageBar,
  PercentageIndicator,
  PercentageTag,
  VehicleText,
  WQContainer,
  WeightContainer,
  Weight,
  Unit,
  OrderName,
  QuantityContainer,
  MaterialIconContainer,
  MaterialImage,
  MaterialName,
} from "./style";
import { useSelector } from "react-redux";
const ListItem = ({ data, index }) => {
  const showShipment = useSelector((store) => store.shipmentView.showShipment);
  return (
    <List>
      <SubList width="10%">
        <DeliveryIconContainer>
          <DeliveryIcon />
        </DeliveryIconContainer>
        <Number>{index + 1}</Number>
      </SubList>
      <SubList width={showShipment ? "20%" : "20%"}>
        <TextContainer>
          <Text>{data.origin.name}</Text>
          <SubText>
            {data.origin.state} , {`<Pincode>`}
          </SubText>
        </TextContainer>
        {!showShipment && (
          <PickupDropContainer>
            <HoverContainer>
              <RectangleBox color="#d26568" />
              <LineImage
                src="https://i.postimg.cc/jjmZBR1R/Line-150.png"
                alt=""
              />
              <RectangleBox color="#1FCD93" />
            </HoverContainer>
            <PickUpContainer>
              <Text2>{`1 pickup(s)`}</Text2>
              <Text2>{`2 drop(s)`}</Text2>
            </PickUpContainer>
          </PickupDropContainer>
        )}
      </SubList>
      <SubList width={showShipment ? "20%" : "10%"}>
        <TextContainer>
          <Text>{data.destination.name}</Text>
          <SubText>
            {data.destination.state},{`<Pincode>`}
          </SubText>
        </TextContainer>
      </SubList>
      <SubList width={showShipment ? "20%" : "10%"}>
        <TextContainer>
          <Text>
            {data.carrier.name.length > 15
              ? data.carrier.name.slice(0, 16) + "..."
              : data.carrier.name}
          </Text>
          <SubText>{data.carrier.type}</SubText>
        </TextContainer>
      </SubList>
      <SubList width={showShipment ? "20%" : "20%"}>
        <TextContainer>
          <PercentageContainer>
            <Percentage>{data.max} % </Percentage>
            <PercentageBar>
              <PercentageIndicator width={`${data.max}%`} />
            </PercentageBar>
            <PercentageTag>{data.maxType}</PercentageTag>
          </PercentageContainer>
          <VehicleText>{data.vehicle}</VehicleText>
        </TextContainer>
      </SubList>
      {!showShipment && (
        <SubList width="20%">
          <WQContainer>
            <WeightContainer>
              <Weight>
                {data.weight} <Unit> {data.unit}</Unit>
              </Weight>
              <Weight>
                <OrderName>Order </OrderName> {data.order}
              </Weight>
            </WeightContainer>
            <QuantityContainer>
              <Weight>
                <OrderName>Qty </OrderName> {data.quantity} <Unit>pcs</Unit>
              </Weight>
              <Weight>
                {" "}
                2 <Unit>Pallets</Unit>
              </Weight>
            </QuantityContainer>
          </WQContainer>
        </SubList>
      )}
      <SubList width="10%">
        <MaterialIconContainer>
          <MaterialImage src="https://i.postimg.cc/66SGp5Rn/Mask.png" alt="" />
          {!showShipment && <MaterialName>MATERIAL</MaterialName>}
        </MaterialIconContainer>
      </SubList>
    </List>
  );
};

export default ListItem;
