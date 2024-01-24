import { useEffect } from 'react';
import { useLimitOrderBook, useLimitOrderBookDispatch } from "../../../context/LimitOrderBookContext.jsx";
import { axiosInstance } from '../../../axios.js';
import { Order } from './Order.jsx';
import * as config from '../../../helpers/config.js';

export { OrdersList };

function OrdersList() {
    const appData = useLimitOrderBook();
    const dispatch = useLimitOrderBookDispatch();
    const ordersData = appData.orders;
    const orders = ordersData?.map(orderData => <Order data={orderData} key={orderData.id} />);

    useEffect(fetchOrders, []);

    return (
        <div className='orders'>
            {orders}
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