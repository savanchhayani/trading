import OrderItem from "./OrderItem";
import { Instrument } from "../apis/orders";

const OrderItems = ({ orders }: { orders: Instrument[] }) => {
  return (
    <div>
      {orders.map((instrument) => {
        return <OrderItem key={instrument.name} instrument={instrument} />;
      })}
    </div>
  );
};

export default OrderItems;
