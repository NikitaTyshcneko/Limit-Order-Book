import { axiosInstance } from "../../../axios.js";
import { useLimitOrderBook, useLimitOrderBookDispatch } from "../../../context/LimitOrderBookContext.jsx";
import * as config from '../../../helpers/config.js';

export { CreateOrder };

function CreateOrder({ opener }) {
    const appData = useLimitOrderBook();
    const stocks = appData.stocks;
    const dispatch = useLimitOrderBookDispatch();
    const orderTypes = ['buy', 'sell'];
    const orderTypeButtons = orderTypes.map(type => (
        <div className={`order-type-radio ${type}`} key={type}>
            <input name="order_type" type="radio" value={type} id={`order-type-${type}`} className="radio" required />
            <label htmlFor={`order-type-${type}`}>{type}</label>
        </div>
    ));
    const closeModal = () => opener(false);
    const stockOptionRender = stock => <option value={stock.stock_short_name} key={stock.id}>{stock.stock_name}</option>;
    const stockSelectOptions = stocks.map(stockOptionRender);

    return (
        <div className={`create-order`}>
            <form className="form" onSubmit={handleSubmit}>
                <select name="stock" className="select stock" required>
                    <option value="">Select stock...</option>
                    {stockSelectOptions}
                </select>
                <input name="price" type="text" placeholder="Price" className="input price" required />
                <input name="quantity" type="number" placeholder="Qty" className="input quantity" required min="1" />
                {orderTypeButtons}
                <button className="submit">Create</button>
                <div className="close fas fa-times" onClick={closeModal}></div>
            </form>
        </div>
    );

    function handleSubmit(event) {
        const form = event.target;
        const formData = new FormData(form);

        event.preventDefault();
        axiosInstance.post(config.url.orders, formData).then(processCreateOrder);
        opener(false);
    };

    function processCreateOrder(response) {
        dispatch({
            type: 'ADD_ORDER',
            payload: response.data
        });
    }
}