import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const WeightInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border-radius: 8px;
  padding: 1rem 2rem;
  background-color: #eef2f4;
  margin-top: 3rem;
`;

export const NameAndDistCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.p`
  color: #404040;
  font-size: 12px;
  font-weight: 600;
`;

export const SubHeading = styled.span`
  color: #404040;
  font-size: 12px;
  font-weight: 400;
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
export const ShipmentListContainer = styled.div``;
export const LocationInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const LocationContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;
export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArrowImage = styled.img`
  height: 16px;
  width: 16px;
  object-fit: cover;
  object-position: center;
  padding-top: 3px;
`;

export const DotLineImage = styled.img`
  height: 14px;
  width: 5px;
  object-fit: cover;
  object-position: center;
  padding-left: 0.6rem;
`;

export const LocationDetails = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
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
  display: flex;
  width: 100%;
`;

export const ExpandInfoCard = styled(WeightInfoCard)`
  margin: 0;
  flex-grow: 1;
  align-self: center;
  transition: all 0.35s ease-out;
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
