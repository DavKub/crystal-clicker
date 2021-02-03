import React, { createContext, useContext, useEffect, useState } from 'react';
import { KoboldContext } from './KoboldContext';

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
    const { koboldTotalCrystalYield } = useContext(KoboldContext);
    const kobolds = useContext(KoboldContext);

    const [crystalCount, setCrystalCount] = useState(
        JSON.parse(localStorage.getItem('crystalCount')) || 0
    );

    useEffect(() => {
        const crystalGenerator = setTimeout(() => {
            setCrystalCount(crystalCount + koboldTotalCrystalYield);
        }, 1000);

        return () => clearTimeout(crystalGenerator);
    });

    return (
        <CounterContext.Provider value={{ crystalCount, setCrystalCount }}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterContextProvider;
