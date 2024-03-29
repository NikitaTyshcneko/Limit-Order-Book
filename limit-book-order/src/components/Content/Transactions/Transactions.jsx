import { useEffect } from 'react';
import { useLimitOrderBook, useLimitOrderBookDispatch } from "../../../context/LimitOrderBookContext.jsx";
import { axiosInstance } from '../../../axios.js';
import { Transaction } from './Transaction.jsx';
import * as config from '../../../helpers/config.js';
import * as format from '../../../helpers/format.js';

export { Transactions };

function Transactions() {
    const appData = useLimitOrderBook();
    const dispatch = useLimitOrderBookDispatch();
    const transactionsData = appData.transactions;
    const renderer = transactionData => <Transaction data={transactionData} key={transactionData.id} />
    const transactions = transactionsData?.map(renderer);
    const titles = format.listAttrs(transactionsData)?.map(key => <div className={`title ${key}`} key={key}>{format.keyToLabel(key)}</div>);

    useEffect(fetchTransactions, []);

    return (
        <>
            <div className="page-title">Transactions</div>
            <div className='transactions'>
                <div className="transaction titles">
                    {titles}
                </div>
                {transactions}
            </div>
        </>
    );

    function fetchTransactions() {
        axiosInstance.get(config.url.transactions)
            .then(response => response.data)
            .then(processFetchTransactions);
    }

    function processFetchTransactions(payload) {
        dispatch({
            type: 'SET_TRANSACTIONS',
            payload
        });
    }
}