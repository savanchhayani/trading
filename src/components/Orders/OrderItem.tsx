import styled from "styled-components";
import { orderColumns } from "../styles";
import { Instrument } from "../../apis/orders";
import { StyledForPerText } from "./Orders";

const StyledOrder = styled.div`
  display: flex;
  column-gap: 15px;
  text-align: left;

  ${orderColumns};

  padding: 18px;
  color: rgb(187, 187, 187);
  border-bottom: 1px solid #232325;
`;

interface Props {
  instrument: Instrument;
}

const StyledPerSign = styled.span`
  font-size: 10px;
  margin-left: 1px;
`;

const StyledProfitInRs = styled.span`
  margin-right: 5px;
`;

const StyledPercentage = styled.span`
  font-size: 10px;
`;

const OrderItem = ({
  instrument: {
    name,
    averagePrice,
    totalInvested,
    qty,
    currentValue,
    ltp,
    profitInPercentage,
  },
}: Props) => {
  return (
    <StyledOrder>
      <span className="name">{name}</span>
      <span className="qty">{qty}</span>
      <span className="avg-price">{averagePrice}</span>
      <span className="ltp">{ltp}</span>
      <span className="total-invested">{totalInvested}</span>
      <span className="current-value">{currentValue}</span>
      <span className="pro-in-per">
        <StyledForPerText value={profitInPercentage}>
          <StyledProfitInRs>
            {(currentValue - totalInvested).toFixed(2)}
          </StyledProfitInRs>

          <StyledPercentage>
            ({profitInPercentage}
            <StyledPerSign>%</StyledPerSign>)
          </StyledPercentage>
        </StyledForPerText>
      </span>
    </StyledOrder>
  );
};

export default OrderItem;
