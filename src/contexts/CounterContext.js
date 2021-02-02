import React, { createContext, useEffect, useState } from 'react';

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
    const [crystalCount, setCrystalCount] = useState(
        JSON.parse(localStorage.getItem('crystalCount')) || 0
    );

    useEffect(() => {
        const crystalGenerator = setInterval(() => {
            setCrystalCount(crystalCount + 1);
        }, 1000);

        return () => clearInterval(crystalGenerator);
    }, [crystalCount]);

    return (
        <CounterContext.Provider value={{ crystalCount, setCrystalCount }}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterContextProvider;
