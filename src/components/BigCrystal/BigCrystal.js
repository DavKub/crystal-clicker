import React, { useContext } from 'react';
import './BigCrystal.scss';
import bigCrystal from '../../assets/graphics/big_crystal.png';
import { CounterContext } from '../../contexts/CounterContext';

const BigCrystal = () => {
    const {
        crystalCount,
        setCrystalCount,
        crystalsLifetime,
        setCrystalsLifetime,
    } = useContext(CounterContext);

    return (
        <div
            className="big-crystal"
            onClick={() => {
                setCrystalCount(crystalCount + 1);
                setCrystalsLifetime(crystalsLifetime + 1);
            }}
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
