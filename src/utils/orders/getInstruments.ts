import { Instrument } from "../../types/orders";
import coinNames from "../coinNames";
import { getToFixed2, getToFixed5 } from "../stringHelpers";
import { getOrders } from "../../apis/orders";
import { getPercentage } from "../math";

const getDefaultInstrument = ({ name, ltp }: any) => ({
  name,
  qty: 0,
  totalInvested: 0,
  averagePrice: 0,
  currentValue: 0,
  ltp,
  profitInPercentage: "0",
});

export const getInstruments = (
  tickers: any,
  selectedCurrency: string
): Instrument[] => {
  return Object.entries(getOrders(selectedCurrency)).map(([type, list]) => {
    const defaultInstrument = getDefaultInstrument({
      name: coinNames[type],
      ltp: tickers[type].buy,
    });

    return list.reduce((ob, { origin_volume, price }, index) => {
      ob.qty += parseFloat(origin_volume);
      ob.totalInvested += parseFloat(price) * parseFloat(origin_volume);

      if (list.length - 1 === index) {
        ob.averagePrice = getToFixed5(ob.totalInvested / ob.qty);
        ob.currentValue = getToFixed2(ob.qty * parseFloat(tickers[type].buy));
        ob.totalInvested = getToFixed2(ob.totalInvested);
        ob.qty = getToFixed5(ob.qty);
        ob.profitInPercentage = getPercentage(
          ob.currentValue,
          ob.totalInvested
        );
      }
      return ob;
    }, defaultInstrument);
  });
};
