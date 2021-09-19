const indCoinNames = {
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
  wininr: "WINk (WIN)",
};

const usdtCoinNames = {
  sklusdt: "USDT - SKALE Network (SKL)",
  winusdt: "USDT - WINk (WIN)",
  solusdt: "USDT - Solana (SOL)",
  pushusdt: "USDT - Ethereum Push Notification Service (PUSH)",
  xrpusdt: "USDT - Ripple (XRP)",
  btcusdt: "USDT - Bitcoin (BTC)",
};

const coinNames: { [key: string]: string } = {
  ...indCoinNames,
  ...usdtCoinNames,
};

export default coinNames;
