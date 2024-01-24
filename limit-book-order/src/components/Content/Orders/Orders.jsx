import { CreateOrder } from './CreateOrder.jsx';
import { OrdersList } from './OrdersList.jsx';

export { Orders };

function Orders() {
    return (
        <div className="orders">
            <OrdersList />
            <CreateOrder />
        </div>
    );

}