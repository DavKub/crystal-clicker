import React from 'react';
import Counter from '../Counter/Counter';
import SavingButton from '../SavingButton/SavingButton';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <Counter />
            <div className="header-info">
                <ul>
                    <li>click the crystal to gather initial coins</li>
                    <li>purchase workers</li>
                    <li>don't forget to save the game</li>
                </ul>
            </div>
            <SavingButton />
        </div>
    );
};

export default Header;
