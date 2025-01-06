import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import { CiViewColumn } from "react-icons/ci";
import styled from "styled-components";
import ListItem from "./ListItem/ListItem";
import { dummyData } from "../utils/constant";
import { useSelector } from "react-redux";

const DownArrowIcon = styled(BiDownArrowAlt)`
  color: #005399;
  font-size: 1.2rem;
`;

const ColumnIcon = styled(CiViewColumn)`
  font-size: 1.4rem;
  color: #005399;
`;

const DisplayContainer = styled.div`
  width: ${(props) => (props.showShipment ? "986px" : "1390px")};
  height: ${(props) => (props.showShipment ? "700px" : "657px")};
  display: flex;
  flex-direction: column;
  padding: 15px 15px 0px 15px;
  gap: 10px;
  background-color: #f3f6fc;
  margin-top: 13px;
  transition: width 0.8s ease-out;
`;
const PlannedHeader = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PlannedHeaderLeftCont = styled.div`
  height: 19px;
  width: 176px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const PlannedText = styled.p`
  width: 72px;
  height: 19px;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 19.07px;
  letter-spacing: 1px;
  text-align: left;
  color: #005399;
`;
const IndicatorTag = styled.div`
  width: 94px;
  height: 15px;
  padding: 0.5px 2px 0.5px 2px;
  background-color: #bdf0f4;
  border-radius: 2px;
`;

const IndicatorTagText = styled.p`
  height: 14px;
  //styleName: 10px/Semibold/Normal;
  font-family: Open Sans;
  font-size: 10px;
  font-weight: 600;
  line-height: 13.62px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #404040;
`;

const THUPannel = styled.div`
  width: 100%;
  height: 608px;
  padding: 10px 0px 10px 0px;
`;

const THUPannelHeader = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TableCell = styled.div`
  width: ${(props) => props.width};
  height: 34px;
  padding: ${(props) =>
    props.firstcol ? "10px 8px 10px 22px" : "10px 8px 10px 8px"};
  display: flex;
  align-items: center;
  gap: 30px;
  border: 1px 0px 0px 0px;
`;

const Checkbox = styled.input`
  width: 14px;
  height: 14px;
`;
const THUTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const THUHeaderText = styled.p`
  width: ${(props) => props.width};
  height: 14px;
  //styleName: 10px/Semibold/AllCaps-Sp0.5px;
  font-family: Open Sans;
  font-size: 10px;
  font-weight: 600;
  line-height: 13.62px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #005399;
`;

const THUListItemContainer = styled.div`
  width: 100%;
  height: 554px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DisplaySection = () => {
  const showShipment = useSelector((store) => store.shipmentView.showShipment);

  const onRenderTHUpannelHeader = () => (
    <THUPannelHeader>
      <TableCell width="110px" firstcol>
        <Checkbox type="checkbox" />
        <THUHeaderText width="29px">S.NO.</THUHeaderText>
      </TableCell>
      <TableCell width={showShipment ? "138px" : "254px"}>
        <THUTextContainer>
          <THUHeaderText width="29px">ORIGIN</THUHeaderText>
          <DownArrowIcon />
        </THUTextContainer>
      </TableCell>
      <TableCell width="160px">
        <THUTextContainer>
          <THUHeaderText width="71px">DESTINATION</THUHeaderText>
          <DownArrowIcon />
        </THUTextContainer>
      </TableCell>
      <TableCell width="170px">
        <THUHeaderText width="82px">CARRIER | TYPE</THUHeaderText>
      </TableCell>
      <TableCell width={showShipment ? "314px" : "200px"}>
        <THUHeaderText width="149px">MAX UTILISATION | VEHICLE</THUHeaderText>
      </TableCell>
      {!showShipment && (
        <TableCell width="382px">
          <THUTextContainer>
            <THUHeaderText width="121px">TOTAL | WEIGHT | QTY</THUHeaderText>
            <DownArrowIcon />
          </THUTextContainer>
        </TableCell>
      )}
      <ColumnIcon />
    </THUPannelHeader>
  );
  return (
    <DisplayContainer showShipment={showShipment}>
      <PlannedHeader>
        <PlannedHeaderLeftCont>
          <PlannedText>PLANNED</PlannedText>
          <IndicatorTag>
            <IndicatorTagText>Optima Generated</IndicatorTagText>
          </IndicatorTag>
        </PlannedHeaderLeftCont>
      </PlannedHeader>
      <THUPannel>
        {onRenderTHUpannelHeader()}
        <THUListItemContainer>
          {dummyData.map((each, index) => (
            <ListItem key={index} data={each} index={index} />
          ))}
        </THUListItemContainer>
      </THUPannel>
    </DisplayContainer>
  );
};

export default DisplaySection;
