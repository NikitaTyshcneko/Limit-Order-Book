import { useState } from "react";
import { CreateOrder } from './CreateOrder.jsx';
import { OrdersList } from './OrdersList.jsx';

export { Orders };

function Orders() {
    const [newOrderModalOpened, setNewOrderModalOpened] = useState(false);
    const openNewOrderModal = (opened = true) => setNewOrderModalOpened(opened);

    return (
        <>
            <div className="page-title">Orders</div>
            <div className="orders">
                <div className='create-order-button fas fa-plus' onClick={openNewOrderModal}></div>
                <OrdersList />
                {newOrderModalOpened && <CreateOrder opener={openNewOrderModal}/> }
            </div>
        </>
    );
}