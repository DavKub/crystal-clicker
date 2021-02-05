import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import './SavingButton.scss';

const SavingButton = () => {
    const saveGame = useContext(GameContext);

    return (
        <div>
            <button onClick={saveGame}>Save Game</button>
        </div>
    );
};

export default SavingButton;
