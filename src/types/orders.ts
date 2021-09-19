import { EOrderState } from "./enum";

export interface Instrument {
  name: string;
  qty: number;
  averagePrice: number;
  totalInvested: number;
  currentValue: number;
  ltp: string;
  profitInPercentage: string;
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

export type OrdersMap = { [key: Market]: Order[] };
