export interface CryptoList{
    data: CryptoItem [];
    timestamp: number;
}
export interface CryptoItem{
    id: string;
    rank: string;
    symbol:string;
    name: string;
    supply: string;
    maxSupply: string | null; 
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
    explorer: string;
}

export interface CryptoHistoryList{
    data: CryptoHistoryItem [];
    timestamp: number;
}
export interface CryptoHistoryItem{
    priceUsd: string;
    time: number;
    date: string;
}

export interface SocketTrades{
    exchange:string;
    base:string;
    quote:string;
    direction:string;
    price:number;
    volume:number;
    timestamp:number;
    priceUsd:number;
}


