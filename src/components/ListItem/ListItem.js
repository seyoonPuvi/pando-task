import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeShipment,
  selectShipment,
} from "../../utils/store/shipmentViewSlice";
import {
  onRenderMaterialIcon,
  onRenderRectangle,
  TruckIcon,
} from "../../utils/constant";
import {
  OutputListCard,
  LeftContainer,
  RightContainer,
  SelectionContainer,
  CheckboxContainer,
  Checkbox,
  NumberCol,
  Number,
  SourceDestination,
  SourceCont,
  Source,
  SourceDetails,
  DottedLine,
  CrossDoc,
  Tag,
  TotalDropsContainer,
  RouteContainer,
  DestinationCont,
  CarrierContainer,
  VehicleTypeCont,
  StatsCont,
  WTCont,
  WtText,
  ProgressBar,
  Progress,
  UnitTagCont,
  UnitTag,
  MaxText,
  DivideLine,
  TotalAndQtyContainer,
  TotalContainer,
  TotalWeight,
  Weight,
  WeightMetrics,
  Order,
  OrderTag,
  OrderNos,
  QtyContainer,
  QtyInfo,
  Qty,
  MaterialText,
  Xdoc,
} from "./style";

const ListItem = ({ data, index }) => {
  const showShipment = useSelector((store) => store.shipmentView.showShipment);
  const dispatch = useDispatch();
  const isListSelected = useSelector(
    (store) => store.shipmentView.selectedShipment?.id === data.id
  );

  const onClickShipmentList = (id) => {
    if (isListSelected) {
      dispatch(closeShipment());
    } else {
      dispatch(selectShipment(data));
    }
  };

  const onRenderSourceDestinationContainer = () => (
    <SourceDestination showShipment={showShipment}>
      <SourceCont>
        <Source>{data.origin.name}</Source>
        <SourceDetails>TX, {"<Pincode>"}</SourceDetails>
      </SourceCont>
      {!showShipment && (
        <RouteContainer>
          <CrossDoc>
            {data.xdocLeft ? <Xdoc>X-doc</Xdoc> : onRenderRectangle("#D26568")}
            <DottedLine />
            {data.xdocRight ? <Xdoc>X-doc</Xdoc> : onRenderRectangle("#1FCD93")}
          </CrossDoc>
          <TotalDropsContainer>
            <Tag>1 pickup{"(s)"}</Tag>
            <Tag>2 drop{"(s)"}</Tag>
          </TotalDropsContainer>
        </RouteContainer>
      )}
      <DestinationCont>
        <Source>Grand Prairie</Source>
        <SourceDetails>TX, {"<Pincode>"}</SourceDetails>
      </DestinationCont>
    </SourceDestination>
  );

  const onRenderVehicleStatsContainer = () => (
    <VehicleTypeCont>
      <StatsCont>
        <WTCont>
          <WtText>{data.max} %</WtText>
          <ProgressBar>
            <Progress progress={`${data.max}%`} unit={data.maxType} />
          </ProgressBar>
          <UnitTagCont unit={data.maxType}>
            <UnitTag>{data.maxType}</UnitTag>
          </UnitTagCont>
        </WTCont>
      </StatsCont>
      <MaxText>{data.vehicle}</MaxText>
    </VehicleTypeCont>
  );

  const onRenderWtAndQtyContainer = () => (
    <TotalAndQtyContainer>
      <TotalContainer>
        <TotalWeight>
          <Weight>{data.weight}</Weight>
          <WeightMetrics>{data.unit}</WeightMetrics>
        </TotalWeight>
        <Order>
          <OrderTag>Order</OrderTag>
          <OrderNos>{data.order}</OrderNos>
        </Order>
      </TotalContainer>
      <QtyContainer>
        <QtyInfo>
          <Qty>Qty</Qty>
          <Weight>{data.quantity}</Weight>
          <WeightMetrics>Pcs</WeightMetrics>
        </QtyInfo>
        <TotalWeight>
          <Weight>2</Weight>
          <WeightMetrics>Pallets</WeightMetrics>
        </TotalWeight>
      </QtyContainer>
    </TotalAndQtyContainer>
  );

  return (
    <OutputListCard
      onClick={() => {
        onClickShipmentList(data.id);
      }}
    >
      <LeftContainer>
        <SelectionContainer>
          <CheckboxContainer showShipment>
            {isListSelected ? <Checkbox type="checkbox" /> : <TruckIcon />}
          </CheckboxContainer>
        </SelectionContainer>
        <NumberCol>
          <Number>{index + 1}</Number>
        </NumberCol>
        {onRenderSourceDestinationContainer()}
        <CarrierContainer>
          <Source>
            {data.carrier.name.length > 16
              ? `${data.carrier.name.slice(0, 16)}...`
              : data.carrier.name}
          </Source>
          <SourceDetails>{data.carrier.type}</SourceDetails>
        </CarrierContainer>
        {onRenderVehicleStatsContainer()}

        <DivideLine />
        {!showShipment && onRenderWtAndQtyContainer()}
      </LeftContainer>
      <RightContainer showShipment>
        {onRenderMaterialIcon()}
        {!showShipment && <MaterialText>Materials</MaterialText>}
      </RightContainer>
    </OutputListCard>
  );
};

export default ListItem;
