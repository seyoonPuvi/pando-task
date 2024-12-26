import styled from "styled-components";
import { CiDeliveryTruck } from "react-icons/ci";

export const ListItemContainer = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 1rem;
  width: 100%;
`;

export const List = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px 0px 0px 0px;
  background-color: white;
`;

export const SubList = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3rem;
  width: ${(props) => props.width};
  padding: 1.5rem 1.2rem;
`;

export const DeliveryIconContainer = styled.div`
  width: 35px;
  height: 30px;
  background-color: #d9e6ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeliveryIcon = styled(CiDeliveryTruck)`
  font-size: 14px;
`;

export const Number = styled.h1`
  font-size: 1.2rem;
  color: #234357;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const Text = styled.h1`
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 700;
  color: #234357;
`;

export const SubText = styled.p`
  font-family: Open Sans;
  font-size: 10px;
  font-weight: 400;

  color: #234357;
`;

export const LineImage = styled.img`
  height: 2px;
  width: 4rem;
  object-fit: cover;
  object-position: center;
  transition: width 0.3s ease-out;
  cursor: pointer;
`;

export const Text2 = styled.h3`
  background-color: #eef2f4;
  color: #422500;

  font-family: Open Sans;
  font-size: 10px;
  font-weight: 600;
  padding: 3px;
  transition: all 0.3s ease-out;
  cursor: pointer;
`;

export const PickupDropContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;

  &:hover ${Text2} {
    background-color: #89f3d1;
  }

  &:hover ${LineImage} {
    width: 6rem;
  }
`;

export const HoverContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const RectangleBox = styled.div`
  height: 5px;
  width: 5px;
  background-color: ${(props) => props.color};
  transform: rotate(45deg);
`;

export const PickUpContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  justify-content: center;
`;

export const PercentageContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const Percentage = styled.p`
  font-size: 10px;
  color: #2d0645;
  font-weight: 600;
`;

export const PercentageBar = styled.div`
  width: 100px;
  height: 14px;
  background-color: #f3f6fc;
`;

export const PercentageIndicator = styled.div`
  height: 100%;
  width: ${(props) => props.width || "auto"};
  background-color: ${(props) => (props.isVol ? "#6397F8" : "#ab63f8")};
  border-radius: 2px;
  opacity: 0.5;
`;

export const PercentageTag = styled.p`
  background-color: ${(props) => (props.isVol ? "#D9E6FF" : "#f2e7fe")};
  color: #404040;
  font-size: 10px;
  font-weight: 600;
  padding: 2px;
  border-radius: 5px;
`;

export const VehicleText = styled(SubText)``;
export const WQContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 100%;
`;

export const WeightContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4rem;
`;

export const Weight = styled.p`
  font-size: 12px;
  color: #234357;
  font-weight: 600;
`;

export const Unit = styled.span`
  //styleName: 10px/Semibold/Normal;
  font-family: Open Sans;
  font-size: 10px;
  font-weight: 600;

  color: #737373;
`;

export const OrderName = styled.span`
  height: 14px;
  width: 38px;
  padding: 0.5px 2px 0.5px 2px;
  border-radius: 2px 0px 0px 0px;
  opacity: 0px;
  background-color: #e7e7e7;
  color: #404040;
  margin-right: 5px;
  font-size: 10px;
`;

export const QuantityContainer = styled(WeightContainer)``;

export const MaterialIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  column-gap: 5px;
`;

export const MaterialImage = styled.img`
  height: 10px;
  width: 10px;
  object-fit: cover;
  object-position: center;
  justify-self: flex-end;
`;

export const MaterialName = styled.h3`
  //styleName: Button/Action-Semibold;
  font-family: Open Sans;
  font-size: 10px;
  font-weight: 600;
  text-align: right;

  color: #376f99;
`;
