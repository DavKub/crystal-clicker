import React, { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterContext';
import './SavingButton.scss';

const SavingButton = () => {
    const { crystalCount } = useContext(CounterContext);
    const savingModal = document.querySelector('.saving-modal');

    function HandleSave() {
        localStorage.setItem('crystalCount', crystalCount);
    }

    return (
        <div>
            <button onClick={HandleSave}>Save Game</button>
        </div>
    );
};

export default SavingButton;
