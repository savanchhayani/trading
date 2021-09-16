import styled from "styled-components";
import OrderHeader from "./OrderHader";
import OrderItems from "./OrderItems";
import useLiveData from "../hooks/useLiveData";
import { getPercentage } from "../apis/orders";

const StyledOrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  background: rgb(24, 24, 24);
  padding: 10px;
  max-width: 1080px;
  height: 90vh;
`;

const StyledTitlePrice = styled.div``;

const green = "#5b9a5d";
const red = "#e25f5b";

const StyledTitle = styled.div`
  color: #666;
  margin-bottom: 12px;
`;

const StyledNumber = styled.div`
  color: rgb(187, 187, 187);
  font-size: 18px;
`;

export const StyledForPerText = styled.div<any>`
  ${(props) => `color: ${props.value > 0 ? green : red};`}
`;

export const StyledProfitInRs = styled.span`
  margin-right: 3px;
`;

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

const Orders = () => {
  const {
    loading,
    orders,
    totalInvested,
    totalCurrentValue,
    profitInPercentage,
  } = useLiveData({ currency: "inr" });

  return (
    <StyledOrdersContainer>
      <OrderHeader />
      <OrderItems orders={orders} />

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
    </StyledOrdersContainer>
  );
};

export default Orders;
