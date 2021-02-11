import React from 'react';
import BigCrystal from '../BigCrystal/BigCrystal';
import './Main.scss';

const Main = () => {
    return (
        <div className="background">
            <div className="main">
                <BigCrystal />
            </div>
        </div>
    );
};

export default Main;
