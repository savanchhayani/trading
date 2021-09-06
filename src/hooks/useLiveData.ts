import {useEffect, useState} from "react";
import axios from "axios";
import {getInstruments, Instrument} from "../apis/orders";

const url = "api/v2/tickers";

const useLiveData = () => {
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState<Instrument[]>([]);

    const getLiveMarketData = async () => {
        try {
            const {data} = await axios.get(url);
            setOrders(getInstruments(data))
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => getLiveMarketData(), 3000);

        return () => {
            clearInterval(interval)
        }
    }, []);

    return {
        loading,
        orders
    }
};

export default useLiveData;
