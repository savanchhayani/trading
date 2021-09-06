import orders from "../mocks/orders.json";

enum EOrderState {
    Done = "done",
    Cancel = "cancel"
}

type Market = string;

export interface Order {
    id: number;
    market: Market;
    state: EOrderState;
    qty: number;
    origin_volume: string;
    price: string;
}

type OrdersMap = { [key: Market]: Order[] };

export const getOrders = () => {
    const ordersMap: OrdersMap = (orders).reduce((acc, order) => {
        if (order.state === EOrderState.Cancel) {
            return acc;
        }

        // @ts-ignore
        const items = acc[order.market];

        if (items) {
            return {
                ...acc,
                [order.market]: [...items, order]
            };
        }

        return {
            ...acc,
            [order.market]: [order]
        };
    }, {});

    return ordersMap;
};

export interface Instrument {
    name: string;
    qty: number;
    averagePrice: number;
    totalInvested: number;
    currentValue: number;
    ltp: string;
}

const coinNames: { [key: string]: string } = {
    wrxinr: "WazirX Token (WRX)",
    shibinr: "SHIBA INU (SHIB)",
    usdtinr: "Tether USD (USDT)",
    trxinr: "Tron (TRX)",
    dotinr: "Polkadot (DOT)",
    ethinr: "Ethereum (ETH)",
    bttinr: "BitTorrent (BTT)",
    btcinr: "Bitcoin (BTC)",
    dogeinr: "Dogecoin (DOGE)",
    pushinr: "Ethereum Push Notification Service (PUSH)",
    wininr: "WINk (WIN)"
};

const getToFixed2 = (value: number) => parseFloat(value.toFixed(2))
const getToFixed5 = (value: number) => parseFloat(value.toFixed(5))

export const getInstruments = (tickers: any): Instrument[] => {
    return Object.entries(getOrders()).map(
        ([type, list]) => {
            const defaultInstrument = {
                name: coinNames[type],
                qty: 0,
                totalInvested: 0,
                averagePrice: 0,
                currentValue: 0,
                ltp: tickers[type].buy,
            };

            return (list).reduce(
                (ob, {origin_volume, price}, index) => {
                    ob.qty += parseFloat(origin_volume);
                    ob.totalInvested += parseFloat(price) * parseFloat(origin_volume);

                    if (list.length - 1 === index) {
                        ob.averagePrice = getToFixed5(ob.totalInvested / ob.qty);
                        ob.currentValue = getToFixed2(ob.qty * parseFloat(tickers[type].buy))
                        ob.totalInvested = getToFixed2(ob.totalInvested)
                        ob.qty = getToFixed5(ob.qty)
                    }
                    return ob;
                },
                defaultInstrument
            );
        }
    );
};
