import { Stock } from "./Stock.jsx";
import { useEffect } from "react";
import { axiosInstance } from "../../../axios.js";
import { useLimitOrderBook, useLimitOrderBookDispatch } from "../../../context/LimitOrderBookContext.jsx";
import * as config from '../../../helpers/config.js';

export function Stocks() {
    const appData = useLimitOrderBook();
    const dispatch = useLimitOrderBookDispatch();
    const stocksData = appData.stocks;
    const renderer = stockData => <Stock data={stockData} key={stockData.id} />;
    const stocks = stocksData?.map(renderer);

    useEffect(fetchStocks, []);

    return (
        <>
            <div className="page-title">Stocks</div>
            <div className="stocks">
                {stocks}
            </div>
        </>
    );

    function fetchStocks() {
        axiosInstance.get(config.url.stocks)
            .then(response => response.data)
            .then(processFetchStocks);
    }

    function processFetchStocks(payload) {
        dispatch({
            type: 'SET_STOCKS',
            payload
        });
    }
}