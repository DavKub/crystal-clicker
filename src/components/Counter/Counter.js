import React, { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterContext';
import { KoboldContext } from '../../contexts/KoboldContext';
import './Counter.scss';

const Counter = () => {
    const { crystalCount } = useContext(CounterContext);
    const { koboldTotalCrystalYield } = useContext(KoboldContext);

    return (
        <div className="counter">
            <div className="production">
                <span>Production:</span> {koboldTotalCrystalYield} crystals
            </div>
            <div className="owned">
                <span>Crystals owned:</span> {Math.round(crystalCount)}
            </div>
        </div>
    );
};

export default Counter;
