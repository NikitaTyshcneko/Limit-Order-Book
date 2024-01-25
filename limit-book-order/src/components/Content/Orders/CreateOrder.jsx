import { axiosInstance } from "../../../axios.js";
import { useLimitOrderBookDispatch } from "../../../context/LimitOrderBookContext.jsx";
import * as config from '../../../helpers/config.js';

export { CreateOrder };

function CreateOrder({ opener }) {
    const dispatch = useLimitOrderBookDispatch();
    const orderTypes = ['buy', 'sell'];
    const orderTypeButtons = orderTypes.map(type => (
        <div className={`order-type-radio ${type}`} key={type}>
            <input name="order_type" type="radio" value={type} id={`order-type-${type}`} className="radio" required />
            <label htmlFor={`order-type-${type}`}>{type}</label>
        </div>
    ));
    const closeModal = () => opener(false);

    return (
        <div className={`create-order`}>
            <form className="form" onSubmit={handleSubmit}>
                <input name="stock" type="text" placeholder="Stock Id" className="input stock" required />
                <input name="price" type="text" placeholder="Price" className="input price" required />
                <input name="quantity" type="number" placeholder="Qty" className="input quantity" required />
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