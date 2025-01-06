import styled from "styled-components";

export const DottedLine = styled.div`
  width: 40px;
  height: 0px;
  border-top: 1px dotted rgba(54, 87, 126, 0.5);
  opacity: 1;
  transition: width 0.3s ease;
`;
export const CrossDoc = styled.div`
  min-width: 54.11px;
  height: 7.05px;
  display: flex;
  align-items: center;
  margin: auto;
`;

export const Tag = styled.p`
  height: 15px;
  border-radius: 2px;
  padding: 0.5px 2px 0.5px 2px;
  background-color: #eef2f4;
  color: #422500;
  font-family: Open Sans;
  font-size: 10px;
  font-weight: 600;
  line-height: 13.62px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  transition: all 0.3s ease;
`;

export const OutputListCard = styled.div`
  width: 100%;
  height: 59px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ isListSelected }) =>
    isListSelected ? "#E9F1F5" : "#fafafa"};
  cursor: pointer;
  transition: width 0.3s ease-out, background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: ${({ isListSelected }) =>
      isListSelected ? "#E9F1F5" : "#ffffff"};
    box-shadow: ${({ isListSelected }) =>
      isListSelected ? "none" : "rgba(100, 100, 111, 0.1) 0px 2px 12px 0px"};
  }

  &:hover ${DottedLine} {
    width: 60px;
  }

  &:hover ${Tag} {
    background-color: #a3e6d1;
  }
`;

export const LeftContainer = styled.div`
  width: 1102px;
  height: 39px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const RightContainer = styled.div`
  width: 89px;
  height: 22px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: ${(props) =>
    props.showShipment ? "flex-end" : "flex-start"};
`;

export const SelectionContainer = styled.div`
  width: 35px;
  height: 30px;
  padding-left: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CheckboxContainer = styled.div`
  width: 30px;
  height: 30px;
  padding: 8px;
  border-radius: 20px;
  background-color: ${(props) => (props.showShipment ? "#D9E6FF" : "white")};
`;

export const Checkbox = styled.input``;

export const NumberCol = styled.div`
  width: 40px;
  height: 19px;
`;

export const Number = styled.p`
  width: 9px;
  height: 19px;
  //styleName: 14px/Semi-Bold/All Caps;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 19.07px;
  letter-spacing: 1px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #234357;
`;

export const SourceDestination = styled.div`
  width: ${(props) => (props.showShipment ? "300px" : "417px")};
  height: 39px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const SourceCont = styled.div`
  width: 140px;
  height: 39px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Source = styled.p`
  width: 140px;
  height: 19px;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 700;
  line-height: 19.07px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #234357;
`;

export const SourceDetails = styled.p`
  width: 200px;
  height: 16px;
  //styleName: 12px/Body;
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #234357;
`;

export const TotalDropsContainer = styled.div`
  width: 107px;
  height: 15px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const RouteContainer = styled.div`
  width: 107px;
  height: 26.05px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DestinationCont = styled.div`
  width: 140px;
  height: 39px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CarrierContainer = styled(SourceCont)`
  width: 160px;
`;

export const VehicleTypeCont = styled.div`
  width: 170px;
  height: 37px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StatsCont = styled.div`
  width: 170px;
  height: 17px;
`;

export const WTCont = styled.div`
  width: 166px;
  height: 17px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const WtText = styled.p`
  width: 30px;
  height: 16px;
  //styleName: 13px/Semibold;
  font-family: Open Sans;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #2d0645;
`;

export const ProgressBar = styled.div`
  width: 100px;
  height: 14px;
  padding: 0px 2px 0px 0px;

  border-radius: 2px;

  background-color: #f3f6fc;
`;

export const Progress = styled.div`
  width: ${(props) => props.progress};
  height: 14px;
  padding: 0px 2px 0px 0px;
  opacity: 40%;
  border-radius: 2px;
  background-color: ${(props) => (props.unit === "WT" ? "#AB63F8" : "#6397F8")};
`;

export const UnitTagCont = styled.div`
  width: 24px;
  height: 17px;
  padding: 0.5px 2px 0.5px 2px;
  border-radius: 2px;
  background-color: ${(props) => (props.unit === "WT" ? "#F2E7FE" : "#D9E6FF")};
`;

export const UnitTag = styled.p`
  //styleName: 12px/Heading;
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 600;
  line-height: 16.34px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #404040;
`;

export const MaxText = styled.p`
  width: 67px;
  height: 16px;
  //styleName: 12px/Body;
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #234357;
`;

export const DivideLine = styled.div`
  height: 39px;
  border: 1px dashed #e2eaec;
`;

export const TotalAndQtyContainer = styled.div`
  width: 160px;
  height: 36px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const TotalContainer = styled.div`
  width: 160px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TotalWeight = styled.div`
  width: 52px;
  height: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Weight = styled.p`
  height: 16px;
  //styleName: 13px/Semibold;
  font-family: Open Sans;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #234357;
`;

export const WeightMetrics = styled.p`
  width: 14px;
  height: 14px;

  //styleName: 10px/Semibold/Normal;
  font-family: Open Sans;
  font-size: 10px;
  font-weight: 600;
  line-height: 13.62px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #737373;
`;

export const Order = styled.div`
  width: 57px;
  height: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const OrderTag = styled.p`
  width: 38px;
  height: 15px;
  padding: 0.5px 2px 0.5px 2px;
  border-radius: 2px;
  background-color: #e7e7e7;
  color: #404040;
  text-align: center;
`;

export const OrderNos = styled.p`
  width: 15px;
  height: 16px;
  //styleName: 13px/Semibold;
  font-family: Open Sans;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #234357;
`;
export const QtyContainer = styled(TotalContainer)``;
export const QtyInfo = styled(TotalWeight)`
  height: 16px;
  width: 71px;
`;
export const Qty = styled.p`
  width: 22px;
  height: 15px;
  padding: 0.5px 2px 0.5px 2px;
  border-radius: 2px;
  background-color: #e7e7e7;
  color: #404040;
`;

export const MaterialText = styled.p`
  width: 65px;
  height: 16px;
  //styleName: Button/Action-Semibold;
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 600;
  line-height: 16.34px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #376f99;
`;

export const Xdoc = styled.p`
  min-width: 36px;
  height: 15px;
  padding: 0.5px 2px 0.5px 2px;
  background-color: #ffeec4;
  border-radius: 2px;
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
