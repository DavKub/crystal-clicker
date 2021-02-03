import React from 'react';
import './BigCrystal.scss';
import bigCrystal from '../../assets/graphics/big_crystal.png';

const BigCrystal = () => {
    return (
        <div className="big-crystal">
            <img
                src={bigCrystal}
                alt="Big Crystal"
                title="Big Crystal - Click me!"
            />
        </div>
    );
};

export default BigCrystal;
