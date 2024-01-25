import { useEffect } from 'react';
import { useLimitOrderBook, useLimitOrderBookDispatch } from "../../../context/LimitOrderBookContext.jsx";
import { axiosInstance } from '../../../axios.js';
import { Order } from './Order.jsx';
import * as config from '../../../helpers/config.js';
import * as format from '../../../helpers/format.js';

export { OrdersList };

function OrdersList() {
    const appData = useLimitOrderBook();
    const dispatch = useLimitOrderBookDispatch();
    const ordersData = appData.orders;
    const renderer = orderData => <Order data={orderData} key={orderData.id} />;
    const orders = ordersData?.map(renderer);
    const titles = format.listAttrs(ordersData)?.map(key => <div className={`title ${key}`} key={key}>{format.keyToLabel(key)}</div>);

    useEffect(fetchOrders, []);

    return (
        <div className="orders">
            <div className="order titles">
                {titles}
            </div>
            {orders}
        </div>
    );

    function fetchOrders() {
        axiosInstance.get(config.url.orders)
            .then(response => response.data)
            .then(processFetchOrders);
    }

    function processFetchOrders(payload) {
        dispatch({
            type: 'SET_ORDERS',
            payload
        });
    }
}