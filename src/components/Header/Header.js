import React from 'react';
import Counter from '../Counter/Counter';
import SavingButton from '../SavingButton/SavingButton';
import './Header.scss';
import kobold from '../../assets/graphics/kobold.png';

const ShowModal = () => {
    var infoModal = document.querySelector('.info-modal');
    infoModal.classList.toggle('show');
};

const ResetConfirmAlert = () => {
    let result = window.confirm('Are you sure?\nThis action CANNOT be undone.');
    if (result === true) {
        ResetGame();
        return true;
    } else {
        return false;
    }
};
const ResetGame = () => {
    const actions = [
        'hasLaunched',
        'crystalCount',
        'crystalsLifetime',
        'koboldVerminCount',
        'koboldVerminProductivityLevel',
        'koboldVerminYield',
        'koboldVerminUpgradeCost',
        'koboldMinerCount',
        'koboldMinerProductivityLevel',
        'koboldMinerYield',
        'koboldMinerUpgradeCost',
        'koboldWorkerCount',
        'koboldWorkerProductivityLevel',
        'koboldWorkerYield',
        'koboldWorkerUpgradeCost',
        'koboldLaborerCount',
        'koboldLaborerProductivityLevel',
        'koboldLaborerYield',
        'koboldLaborerUpgradeCost',
        'koboldTunnelerCount',
        'koboldTunnelerProductivityLevel',
        'koboldTunnelerYield',
        'koboldTunnelerUpgradeCost',
        'koboldGeomancerCount',
        'koboldGeomancerProductivityLevel',
        'koboldGeomancerYield',
        'koboldGeomancerUpgradeCost',
        'koboldTaskmasterCount',
        'koboldTaskmasterProductivityLevel',
        'koboldTaskmasterYield',
        'koboldTaskmasterUpgradeCost',
        'koboldOverseerCount',
        'koboldOverseerProductivityLevel',
        'koboldOverseerYield',
        'koboldOverseerUpgradeCost',
    ];

    for (let i = 0; i < actions.length; i++) {
        localStorage.removeItem(actions[i]);
    }
    console.log(window.location.reload());
};

const Header = () => {
    return (
        <div className="header">
            <Counter />
            <div>
                <button
                    className="header-info-btn"
                    onClick={() => {
                        ShowModal();
                    }}
                >
                    How to play
                </button>

                <div className="info-modal">
                    <h2>How to play</h2>
                    <button
                        className="info-modal-close-btn"
                        onClick={() => {
                            ShowModal();
                        }}
                    >
                        &times; Close
                    </button>
                    <div className="info-modal-content">
                        <ul>
                            <li>
                                Click on the big crystal to gather initial
                                crystals.
                            </li>
                            <li>Crystals serve as a currency.</li>
                            <li>Purchase and upgrade workers.</li>
                            <li>
                                Workers are generating crystals every 1,5
                                seconds.
                            </li>
                            <li>
                                Once you have enought workers, you do not have
                                to collect the crystals by yourself!
                            </li>
                            <li>
                                Either you or the workers can collect the
                                crystals. Not both.
                            </li>
                            <li>
                                <strong>Don't forget to save the game!</strong>
                            </li>

                            <img
                                className="kobold-img"
                                src={kobold}
                                alt="A lousy kobold - one of your many companions."
                                title="A lousy kobold - one of your many companions."
                            />
                        </ul>
                        <button
                            className="game-reset"
                            onClick={ResetConfirmAlert}
                        >
                            Reset the game
                        </button>
                    </div>
                </div>
            </div>
            <SavingButton />
        </div>
    );
};

export default Header;
