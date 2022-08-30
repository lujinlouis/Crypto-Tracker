import React, { createContext, useContext, useState } from 'react'
import { useEffect } from 'react';

const Crypto = createContext()

const CryptoContext = ({ children }) => {

    const [currency, setCurrency] = useState("USD");
    const [symbol, setSymbol] = useState("¥");

    useEffect(() => {
        if (currency === 'CNY') setSymbol("¥");
        else if (currency === 'USD') setSymbol("$");
    }, [currency]);


    return (
        <Crypto.Provider value={{ currency, symbol, setCurrency }}>
            {children}
        </Crypto.Provider>
    )
};

export default CryptoContext


export const CryptoState = () => {
    return useContext(Crypto)
}

