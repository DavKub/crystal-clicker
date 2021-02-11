import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import './SavingButton.scss';

const SavingButton = () => {
    const saveGame = useContext(GameContext);

    return (
        <button className="save-btn" onClick={saveGame}>
            Save Game
        </button>
    );
};

export default SavingButton;
