import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const WeightInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 384px;
  height: 70px;
  padding: 1rem 0;
  gap: 10px;
  border-radius: 4px;

  background-color: #eef2f4;
  margin: auto;
`;

export const NameAndDistCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 16px;
  padding: 0px 15px 0px 15px;
  gap: 5px;
  opacity: 0px;
`;

export const WtAndVolCont = styled.div`
  width: 354px;
  height: 19px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: auto;
`;

export const Name = styled.p`
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 600;
  line-height: 16.34px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #404040;
`;

export const SubHeading = styled.span`
  color: #404040;

  font-family: Open Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const WeightHeading = styled.span`
  color: #404040;
  font-size: 12px;
  font-weight: 600;
  background-color: #f2e7fe;
  padding: 5px;
  border-radius: 5px;
`;

export const Weight = styled.p`
  color: #234357;
  font-size: 14px;
  font-weight: 700;
`;

export const ShipmentPlanContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ShipmentHeader = styled.div`
  width: 374px;
  height: 46px;
  padding: 15px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin: auto;
`;
export const ExpandButton = styled.button`
  color: #005399;
  font-size: 10px;
  font-weight: 700;
  background-color: transparent;
`;

export const ShipmentListMainContainer = styled.div`
  height: 432px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Edge */
  }

  -ms-overflow-style: none; /* For Internet Explorer and Edge */
  scrollbar-width: none; /* For Firefox */
`;
export const ShipmentListContainer = styled.div`
  width: 404px;
  min-height: 82px;
`;
export const LocationInfoContainer = styled.div`
  width: 404px;
  min-height: 42px;
  padding: 0px 20px 0px 10px;
`;

export const LocationContainer = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: flex-end;
`;
export const ArrowContainer = styled.div`
  width: 16px;
  height: 36px;
  display: flex;
  flex-direction: column;
  padding-top: 5px;
`;

export const ArrowImage = styled.img`
  height: 16px;
  width: 16px;
  object-fit: contain;
  object-position: center;
  padding-top: 3px;
`;

export const DotLineContainer = styled.div`
  width: 16px;
  height: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DotLine = styled.div`
  width: 1px;
  height: 10px;
  border: 1px dashed #b5c3cb;
`;

export const LocationDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GroupName = styled.p`
  color: #234357;
  font-size: 12px;
  font-weight: 700;
`;

export const Place = styled(GroupName)`
  font-weight: 400;
`;
export const ExpandContainer = styled.div`
  width: 404px;
  min-height: 40px;
  padding: 0px 15px 0px 15px;
  display: flex;
  gap: 12px;
`;

export const ExpandInfoCard = styled(WeightInfoCard)`
  margin: 0;
  flex-grow: 1;
  align-self: center;
  flex-direction: column;
  gap: 20px 10px;
  transition: display 0.5s ease-out;
`;

export const WeightInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const WeightSubHeading = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #2d0645;
`;

export const Unit = styled.span`
  font-weight: 400;
  font-size: 10px;
  color: #404040;
`;

export const QtyHeading = styled.p`
  background-color: #e7e7e7;
  padding: 0.5rem;
  border-radius: 5px;
`;

export const QtySubHeading = styled(WeightSubHeading)``;

export const ExpandLineContainer = styled.div`
  width: 6px;
  height: ${(props) => (props.isExpanded ? "100px" : "40px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: height 0.5s ease-out;
`;

export const TopCircle = styled.div`
  width: 6px;
  height: 6px;
  background: #ffffff;
  border: 1px solid #515151;
  border-radius: 50%;
`;

export const ExpandLine = styled.div`
  width: 1.5px;
  height: ${(props) => (props.isExpanded ? "90px" : "28px")};
  background-color: #0076dd;
  align-self: center;
  transition: height 0.5s ease-out;
`;
