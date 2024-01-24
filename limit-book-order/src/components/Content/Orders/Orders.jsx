import { useEffect } from 'react';
import { axiosInstance } from '../../../axios.js';
import { Order } from './Order.jsx';
import { useLimitOrderBook, useLimitOrderBookDispatch } from "../../../context/LimitOrderBookContext.jsx";
import * as config from '../../../helpers/config.js';

export function Orders() {
    const appData = useLimitOrderBook();
    const ordersData = appData.orders;
    const dispatch = useLimitOrderBookDispatch();

    useEffect(fetchOrders, []);

    const orders = ordersData?.map(orderData => <Order data={orderData} key={orderData.id}/>);
    
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
                    <div className='orders'>{orders}</div>
                </div>
            </div>
        </div>
    );

    function fetchOrders() {
        axiosInstance.get(config.url.orders).then(response => response.data).then(processOrderResponse);
    }

    function processOrderResponse(payload) {
        dispatch({
            type: 'SET_ORDERS',
            payload
        });
    }
}