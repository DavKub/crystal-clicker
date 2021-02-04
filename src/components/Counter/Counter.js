import React, { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterContext';
import { KoboldContext } from '../../contexts/KoboldContext';
import './Counter.scss';

const Counter = () => {
    const { crystalCount } = useContext(CounterContext);
    const { koboldTotalCrystalYield } = useContext(KoboldContext);

    return (
        <>
            <div id="crystal-count">{`Crystal production: ${koboldTotalCrystalYield} crystals / 5 seconds`}</div>
            <div id="crystal-count">{`Crystals owned: ${crystalCount}`}</div>
        </>
    );
};

export default Counter;
