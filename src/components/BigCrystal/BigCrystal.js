import React, { useContext } from 'react';
import './BigCrystal.scss';
import bigCrystal from '../../assets/graphics/big_crystal.png';
import { CounterContext } from '../../context/CounterContext';

const BigCrystal = () => {
    const { crystalCount, setCrystalCount } = useContext(CounterContext);

    return (
        <div
            className="big-crystal"
            onClick={() => setCrystalCount(crystalCount + 1)}
        >
            <img
                src={bigCrystal}
                alt="Big Crystal"
                title="Big Crystal - Click me!"
            />
        </div>
    );
};

export default BigCrystal;
