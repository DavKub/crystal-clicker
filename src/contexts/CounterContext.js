import React, { createContext, useContext, useEffect, useState } from 'react';
import { KoboldContext } from './KoboldContext';

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
    const { koboldTotalCrystalYield } = useContext(KoboldContext);

    const [crystalCount, setCrystalCount] = useState(
        JSON.parse(localStorage.getItem('crystalCount')) || 0
    );

    const [crystalsLifetime, setCrystalsLifetime] = useState(
        JSON.parse(localStorage.getItem('crystalsLifetime')) || 0
    );

    useEffect(() => {
        const crystalGenerator = setTimeout(() => {
            setCrystalCount(crystalCount + koboldTotalCrystalYield);
            setCrystalsLifetime(crystalsLifetime + koboldTotalCrystalYield);
        }, 1500);

        return () => clearTimeout(crystalGenerator);
    });

    return (
        <CounterContext.Provider
            value={{
                crystalCount,
                setCrystalCount,
                crystalsLifetime,
                setCrystalsLifetime,
            }}
        >
            {children}
        </CounterContext.Provider>
    );
};

export default CounterContextProvider;
