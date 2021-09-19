import styled from "styled-components";
import OrderHeader from "./OrderHeader";
import OrderItems from "./OrderItems";
import useLiveData from "../../hooks/useLiveData";
import { ChangeEvent, useState } from "react";
import CurrencyDropdown from "../CurrencyDropdown";
import Footer from "./Footer";
import colors from "../../styles/colors";

const StyledOrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  background: rgb(24, 24, 24);
  padding: 10px;
  max-width: 1080px;
  height: 90vh;
`;

export const StyledForPerText = styled.div<any>`
  ${(props) => `color: ${props.value > 0 ? colors.green : colors.red};`}
`;

export const StyledProfitInRs = styled.span`
  margin-right: 3px;
`;

const Orders = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("usdt");
  const {
    loading,
    orders,
    totalInvested,
    totalCurrentValue,
    profitInPercentage,
  } = useLiveData({ currency: selectedCurrency });

  return (
    <StyledOrdersContainer>
      <CurrencyDropdown
        selectedValue={selectedCurrency}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          setSelectedCurrency(e.target.value);
        }}
      />
      <OrderHeader />
      <OrderItems orders={orders} />
      <Footer
        totalInvested={totalInvested}
        totalCurrentValue={totalCurrentValue}
        profitInPercentage={profitInPercentage}
      />
    </StyledOrdersContainer>
  );
};

export default Orders;
