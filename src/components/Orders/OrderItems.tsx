import OrderItem from "./OrderItem";
import { Instrument } from "../../apis/orders";
import styled from "styled-components";
import scrollbar from "../../styles/scrollbar";

const StyledOrdersItems = styled.div`
  overflow-y: auto;
  max-height: 80%;
  min-height: 85%;

  ${scrollbar}
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
