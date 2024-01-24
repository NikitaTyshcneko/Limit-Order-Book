import { axiosInstance } from "../../../axios.js";
import * as config from '../../../helpers/config.js';

export { CreateOrder };

function CreateOrder() {
    const orderTypes = ['buy', 'sell'];
    const orderTypeButtons = orderTypes.map(type => (
            <div className="order-type-button" key={type}>
                <input name="order_type" type="radio" value={type} id={`order-type-${type}`} required />
                <label htmlFor={`order-type-${type}`}>{type}</label>
            </div>
        ));

    return (
        <div className="create-order">
            <div className="title">Create Order</div>
            <form className="form" onSubmit={handleSubmit}>
                <input name="stock_short_name" type="text" placeholder="Stock Id" className="stock-id" required />
                <input name="price" type="text" placeholder="Price" className="price" required />
                <input name="quantity" type="number" placeholder="Qty" className="quantity" required />
                {orderTypeButtons}
                <button className="submit">Create</button>
            </form>
        </div>
    );

    function handleSubmit(event) {
        const form = event.target;
        const formData = new FormData(form);

        event.preventDefault();
        axiosInstance.post(config.url.orders, formData).then(processCreateOrder);
    };

    function processCreateOrder(response) {
        console.log(response);

        dispatch({
            type: 'SET_ORDERS',
            payload
        });
    }
}