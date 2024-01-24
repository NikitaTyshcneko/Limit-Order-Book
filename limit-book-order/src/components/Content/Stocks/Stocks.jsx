import { Stock } from "./Stock.jsx";
import { useEffect } from "react";
import { axiosInstance } from "../../../axios.js";
import { useLimitOrderBook, useLimitOrderBookDispatch } from "../../../context/LimitOrderBookContext.jsx";
import * as config from '../../../helpers/config.js';

export function Stocks() {
    const appData = useLimitOrderBook();
    const dispatch = useLimitOrderBookDispatch();
    const stocksData = appData.stocks;
    const stocks = stocksData?.map(stockData => <Stock data={stockData} key={stockData.id} />);

    useEffect(fetchStocks, []);

    return (
        <div className="stocks">
            {stocks}
        </div>
    );

    function fetchStocks() {
        axiosInstance.get(config.url.stocks).then(response => response.data).then(processStockResponse);
    }

    function processStockResponse(payload) {
        dispatch({
            type: 'SET_STOCKS',
            payload
        });
    }
}