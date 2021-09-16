import { useEffect, useState } from "react";
import axios from "axios";
import { getInstruments, getPercentage, Instrument } from "../apis/orders";

const url = "api/v2/tickers";

const useLiveData = ({ currency }: { currency: string }) => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<Instrument[]>([]);

  const getLiveMarketData = async () => {
    try {
      const { data } = await axios.get(url);
      setOrders(getInstruments(data, currency));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => getLiveMarketData(), 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const { totalInvested, totalCurrentValue } = orders.reduce(
    (ob, i) => {
      ob.totalInvested += i.totalInvested;
      ob.totalCurrentValue += i.currentValue;
      return ob;
    },
    { totalInvested: 0, totalCurrentValue: 0 }
  );
  const profitInPercentage = getPercentage(totalCurrentValue, totalInvested);

  return {
    loading,
    orders,
    profitInPercentage,
    totalInvested,
    totalCurrentValue,
  };
};

export default useLiveData;
