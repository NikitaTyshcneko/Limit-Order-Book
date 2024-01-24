import { useEffect } from "react";
import { axiosInstance } from "../../../axios.js";
import { useLimitOrderBook, useLimitOrderBookDispatch } from "../../../context/LimitOrderBookContext.jsx";
import * as config from '../../../helpers/config.js';

export function StockItems() {
    const appData = useLimitOrderBook();
    const stocksData = appData.stocks;
    const dispatch = useLimitOrderBookDispatch();

    useEffect(fetchStocks, []);

    const stocks = stocksData.map(stockData => (
        <div className="stock-item" key={stockData.id}>
            <div className="stock-item-name">{stockData.stock_name}</div>
            <div className="stock-item-short-name">{stockData.stock_short_name}</div>
            <div className="stock-item-price">{stockData.price}</div>
        </div>
    ));

    return (
        <>{stocks}</>
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