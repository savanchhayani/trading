import OrderItem from "./OrderItem";
import { Instrument } from "../apis/orders";
import styled from "styled-components";

const StyledOrdersItems = styled.div`
  overflow-y: auto;
  max-height: 80%;

  /* width */
  ::-webkit-scrollbar {
    width: 0px;
    background: #666;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(24, 24, 24);
    border-radius: 10px;
  }
`;

const OrderItems = ({ orders }: { orders: Instrument[] }) => {
  return (
    <StyledOrdersItems>
      {orders.map((instrument) => {
        return <OrderItem key={instrument.name} instrument={instrument} />;
      })}
    </StyledOrdersItems>
  );
};

export default OrderItems;
