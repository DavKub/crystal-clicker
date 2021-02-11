import React, { useContext } from 'react';
import './BigCrystal.scss';
import bigCrystal from '../../assets/graphics/big_crystal.png';
import { CounterContext } from '../../contexts/CounterContext';
import { GameContext } from '../../contexts/GameContext';

const BigCrystal = () => {
    const {
        crystalCount,
        setCrystalCount,
        crystalsLifetime,
        setCrystalsLifetime,
    } = useContext(CounterContext);

    const saveGame = useContext(GameContext);

    let hasLaunched = JSON.parse(localStorage.getItem('hasLaunched'));
    console.log('Has launched: ' + hasLaunched);

    if (hasLaunched === null) {
        return (
            <div
                className="big-crystal"
                onClick={() => {
                    setCrystalCount(crystalCount + 1);
                    setCrystalsLifetime(crystalsLifetime + 1);
                    localStorage.setItem('hasLaunched', true);
                }}
            >
                <img
                    src={bigCrystal}
                    alt="Big Crystal"
                    title="Big Crystal - Click me!"
                />
            </div>
        );
    } else if (hasLaunched === true) {
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
    } else {
        return <div>error</div>;
    }
};

export default BigCrystal;
