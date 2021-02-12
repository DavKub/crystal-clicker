import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import './SavingButton.scss';
import success from '../../assets/graphics/success-icon-10.png';

const SavingButton = () => {
    const saveGame = useContext(GameContext);

    function ShowSuccess() {
        var popup = document.querySelector('.save-icon');
        popup.classList.toggle('show');
        setTimeout(() => {
            popup.classList.remove('show');
        }, 1500);
    }

    return (
        <div>
            <button
                className="save-btn"
                onClick={() => {
                    saveGame();
                    ShowSuccess();
                }}
            >
                Save Game
            </button>
            <img className="save-icon" src={success} alt="success" />
        </div>
    );
};

export default SavingButton;
