import { StockItems } from "./StockItems.jsx";

export function Stock() {
    return (
        <div className="content-wrapper">
            <div className="content">
                <div className="stock-list">
                    <StockItems/>
                </div>
            </div>
        </div>
    );
}