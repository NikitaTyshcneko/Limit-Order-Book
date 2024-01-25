import React, {createContext, useContext, useReducer} from 'react';
import {limitOrderBookReducer} from "./LimitOrderBookContextReducer.jsx";

export {useLimitOrderBook, useLimitOrderBookDispatch, LimitOrderBookContext, LimitOrderBookContextDispatch}

const LimitOrderBookContext = createContext();
const LimitOrderBookContextDispatch = createContext();
const initialState = {
    isLogin: false,
    stocks: [],
}

export const LimitOrderBookProvider = ({ children }) => {
    const [data, dispatch] = useReducer(limitOrderBookReducer, initialState);

    return (
        <LimitOrderBookContext.Provider value={ data }>
            <LimitOrderBookContextDispatch.Provider value={ dispatch }>
                {children}
            </LimitOrderBookContextDispatch.Provider>
        </LimitOrderBookContext.Provider>
    );
}

function useLimitOrderBook(){
    return useContext(LimitOrderBookContext);
}

function useLimitOrderBookDispatch(){
    return useContext(LimitOrderBookContextDispatch);
}