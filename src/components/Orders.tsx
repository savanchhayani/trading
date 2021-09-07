import styled from 'styled-components';
import OrderHeader from './OrderHader';
import OrderItems from './OrderItems';
import useLiveData from '../hooks/useLiveData';
import {getPercentage} from "../apis/orders";

const StyledOrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
      
  background: rgb(24,24,24);
  padding: 10px;
  max-width: 1080px;
`;

const StyledTotalInvested = styled.div`
`;

const green = '#5b9a5d';
const red = '#e25f5b';

const StyledTitle = styled.div`color: #666;`;
const StyledNumber = styled.div`color: rgb(187, 187, 187);`;
const StyledForPerText = styled.div<any>`
  ${(props) => `color: ${props.value > 0 ? green : red};`
}  
`;

const Orders = () => {
  const { loading, orders } = useLiveData();
  const { totalInvested, totalCurrentValue } = orders.reduce(
    (ob, i) => {
      ob.totalInvested += i.totalInvested;
      ob.totalCurrentValue += i.currentValue;
      return ob;
    },
    { totalInvested: 0, totalCurrentValue: 0 },
  );
  const profitInPercentage = getPercentage(totalCurrentValue, totalInvested)

  return (
    <StyledOrdersContainer>
      <OrderHeader />
      <OrderItems orders={orders} />
      <StyledTotalInvested>
        <StyledTitle>Total Invested:</StyledTitle>
        <StyledNumber>{totalInvested.toFixed(2)}</StyledNumber>
      </StyledTotalInvested>
      <div>
        <StyledTitle>Total Current Value:</StyledTitle>
        <StyledNumber>{totalCurrentValue.toFixed(2)}</StyledNumber>
      </div>
      <div>
        <StyledTitle>In %:</StyledTitle>
        <StyledForPerText value={profitInPercentage}>{profitInPercentage}</StyledForPerText>
      </div>
    </StyledOrdersContainer>
  );
};

export default Orders;
