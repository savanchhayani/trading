import React from "react";
import { StyledForPerText, StyledProfitInRs } from "./Orders";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
`;

const StyledPerSign = styled.span`
  font-size: 12px;
`;

const StyledPercentage = styled.span`
  font-size: 12px;
`;

const StyledTitle = styled.div`
  color: #666;
  margin-bottom: 12px;
`;

const StyledNumber = styled.div`
  color: rgb(187, 187, 187);
  font-size: 18px;
`;

const StyledTitlePrice = styled.div``;

interface Props {
  totalInvested: number;
  totalCurrentValue: number;
  profitInPercentage: string;
}

const Footer = ({
  totalInvested,
  totalCurrentValue,
  profitInPercentage,
}: Props) => {
  return (
    <Flex>
      <StyledTitlePrice>
        <StyledTitle>Total Invested</StyledTitle>
        <StyledNumber>{totalInvested.toFixed(2)}</StyledNumber>
      </StyledTitlePrice>
      <StyledTitlePrice>
        <StyledTitle>Total Current Value</StyledTitle>
        <StyledNumber>{totalCurrentValue.toFixed(2)}</StyledNumber>
      </StyledTitlePrice>
      <StyledTitlePrice>
        <StyledTitle>Profit</StyledTitle>
        <StyledForPerText value={profitInPercentage}>
          <StyledProfitInRs>
            {(totalCurrentValue - totalInvested).toFixed(2)}
          </StyledProfitInRs>
          <StyledPercentage>
            ({profitInPercentage}
            <StyledPerSign>%</StyledPerSign>)
          </StyledPercentage>
        </StyledForPerText>
      </StyledTitlePrice>
    </Flex>
  );
};

export default Footer;
