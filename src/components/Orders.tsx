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
`;

const StyledTitlePrice = styled.div`
  > div:nth-child(2) {
    font-size: 28px;
  }
`;

const green = "#5b9a5d";
const red = "#e25f5b";

const StyledTitle = styled.div`
  color: #666;
  margin-bottom: 12px;
`;

const StyledNumber = styled.div`
  color: rgb(187, 187, 187);
`;
export const StyledForPerText = styled.div<any>`
  ${(props) => `color: ${props.value > 0 ? green : red};`}
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
`;

const Orders = () => {
  const {
    loading,
    orders,
    totalInvested,
    totalCurrentValue,
    profitInPercentage,
  } = useLiveData();

  return (
    <StyledOrdersContainer>
      <OrderHeader />
      <OrderItems orders={orders} />

      <Flex>
        <StyledTitlePrice>
          <StyledTitle>Total Invested:</StyledTitle>
          <StyledNumber>{totalInvested.toFixed(2)}</StyledNumber>
        </StyledTitlePrice>
        <StyledTitlePrice>
          <StyledTitle>Total Current Value:</StyledTitle>
          <StyledNumber>{totalCurrentValue.toFixed(2)}</StyledNumber>
        </StyledTitlePrice>
        <StyledTitlePrice>
          <StyledTitle>In %:</StyledTitle>
          <StyledForPerText value={profitInPercentage}>
            {profitInPercentage}
          </StyledForPerText>
        </StyledTitlePrice>
      </Flex>
    </StyledOrdersContainer>
  );
};

export default Orders;
