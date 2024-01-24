import {StockItem} from "./StockItem.jsx";

export function Stock(){
    return (
        <div className={"content-wrapper"}>
            <div className={"content"}>
                <div className={'stock-list'}>
                    <StockItem/>
                </div>
            </div>
        </div>
    );
}