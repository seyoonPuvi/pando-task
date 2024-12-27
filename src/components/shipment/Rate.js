import React from "react";
import styled from "styled-components";

const RateContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding: 1rem 2rem;
`;

const RateHeading = styled.p`
  color: #404040;
  font-weight: 400;
  font-size: 12px;
`;

const Amount = styled.span`
  color: #1fcd93;
  font-weight: 500;
  font-size: 10px;
`;

const SubRateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubRate = styled.span`
  color: #404040;
  font-weight: 600;
  font-size: 12px;
`;
const Rate = () => {
  return (
    <RateContainer>
      <RateHeading>
        Total Rate: <Amount>$ 280.55</Amount>
      </RateHeading>
      <SubRateContainer>
        <RateHeading>
          Base Freight: <SubRate>$ 10.10</SubRate>
        </RateHeading>
        <RateHeading>
          Rate Unit: <SubRate>Per KG</SubRate>
        </RateHeading>
      </SubRateContainer>
    </RateContainer>
  );
};

export default Rate;
