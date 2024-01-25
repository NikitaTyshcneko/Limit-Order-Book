import { Stock } from "./Stock.jsx";
import { useLimitOrderBook } from "../../../context/LimitOrderBookContext.jsx";
import * as format from '../../../helpers/format.js';

export function Stocks() {
    const appData = useLimitOrderBook();
    const stocksData = appData.stocks;
    const renderer = stockData => <Stock data={stockData} key={stockData.id} />;
    const stocks = stocksData?.map(renderer);
    const titles = format.listAttrs(stocksData)?.map(key => <div className={`title ${key}`} key={key}>{format.keyToLabel(key)}</div>);

    return (
        <>
            <div className="page-title">Stocks</div>
            <div className="stocks">
                <div className="stock titles">
                    {titles}
                </div>
                {stocks}
            </div>
        </>
    );
}