import {useEffect} from "react";
import {axiosInstance} from "../../../axios.js";
import {useLimitOrderBook, useLimitOrderBookDispatch} from "../../../context/LimitOrderBookContext.jsx";

export function StockItem() {
    const stockData = useLimitOrderBook();
    const dispatch = useLimitOrderBookDispatch();

    useEffect(() => {
        axiosInstance.get('/stocks/').then(response => response.data).then(data => dispatch({
            type: 'SET_STOCKS',
            payload: data
        }));
    }, [])
    console.log(stockData)
    return (
        <>
            {stockData.stocks.map((stock, key) => {
                return (
                    <div className={"stock-item"} key={key}>
                        <div className={"stock-item-name"}>{stock.stock_name}</div>
                        <div className={"stock-item-short-name"}>{stock.stock_short_name}</div>
                        <div className={"stock-item-price"}>{stock.price}</div>
                    </div>
                )
            })}
        </>
    );
}