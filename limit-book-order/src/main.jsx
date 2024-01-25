import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/main.scss'
import { LimitOrderBookProvider } from "./context/LimitOrderBookContext.jsx";
import { Stocks } from "./components/Content/Stocks/Stocks.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Orders } from "./components/Content/Orders/Orders.jsx";
import { Transactions } from "./components/Content/Transactions/Transactions.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Stocks/>
            },
            {
                path: "orders",
                element: <Orders/>
            },
            {
                path: "transactions",
                element: <Transactions/>
            },
        ]
    },
]);

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
    <LimitOrderBookProvider>
        <RouterProvider router={router}>
            <App/>
        </RouterProvider>
    </LimitOrderBookProvider>
)
