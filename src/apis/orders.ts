import orders from "../mocks/orders.json";
import { EOrderState } from "../types/enum";
import { OrdersMap } from "../types/orders";

export const getOrders = (selectedCurrency: string) => {
  const ordersMap: OrdersMap = orders.reduce((acc, order) => {
    const [_, currency] = order.market.split(selectedCurrency);

    if (order.state === EOrderState.Cancel || currency !== "") {
      return acc;
    }

    // @ts-ignore
    const items = acc[order.market];

    if (items) {
      return {
        ...acc,
        [order.market]: [...items, order],
      };
    }

    return {
      ...acc,
      [order.market]: [order],
    };
  }, {});

  return ordersMap;
};
