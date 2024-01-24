import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/main.scss'
import { LimitOrderBookProvider } from "./context/LimitOrderBookContext.jsx";
import { Stock } from "./components/Content/Stock/Stock.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Order } from "./components/Content/Order/Order.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Stock/>
            },
            {
                path: "/orders",
                element: <Order/>
            },
        ]
    },
]);

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
        <LimitOrderBookProvider>
            <RouterProvider router={router}>
                <App/>
            </RouterProvider>
        </LimitOrderBookProvider>
    </React.StrictMode>,
)
