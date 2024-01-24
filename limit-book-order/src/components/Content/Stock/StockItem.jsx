import {useEffect} from "react";
import {axiosInstance} from "../../../axios.js";
import {useLimitOrderBook, useLimitOrderBookDispatch} from "../../../context/LimitOrderBookContext.jsx";
import * as config from '../../../helpers/config.js';

export function StockItem() {
    const stockData = useLimitOrderBook();
    const dispatch = useLimitOrderBookDispatch();

    useEffect(() => {
        axiosInstance.get(config.url.stocks).then(response => response.data).then(processStockResponse);
    }, []);

    const stocks = stockData.stocks.map(stock => (
            <div className="stock-item" key={stock.id}>
                <div className="stock-item-name">{stock.stock_name}</div>
                <div className="stock-item-short-name">{stock.stock_short_name}</div>
                <div className="stock-item-price">{stock.price}</div>
            </div>
        ));

    return (
        <>{stocks}</>
    );

    function processStockResponse(payload) {
        dispatch({
            type: 'SET_STOCKS',
            payload
        });
    }
}