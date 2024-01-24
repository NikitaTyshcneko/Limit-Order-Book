import { OrderItem } from './OrderItem';

export function Order() {
    return (
        <div className="content-wrapper">
            <div className="content">
                <div className="order-wrapper">
                    <div className="create-order-wrapper">
                        <div className="create-order">
                            <div className="create-order-title">Create Order</div>
                            <div className="create-order-inputs">
                                <input type="text" className="create-order-input-text" placeholder="Stock Name"/>
                                <input type="text" className="create-order-input-text"
                                       placeholder="Stock Short Name"/>
                                <input type="text" className="create-order-input-text" placeholder="Price"/>
                                <input type="text" className="create-order-input-text" placeholder="Amount"/>
                                <div className="create-order-inputs-buttons">
                                    <button className="create-order-inputs-button">Buy</button>
                                    <button className="create-order-inputs-button">Sell</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='order-list'>
                        <OrderItem/>
                    </div>
                </div>
            </div>
        </div>
    );
}