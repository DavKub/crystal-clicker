import React from 'react';
import './App.scss';
import BigCrystal from './components/BigCrystal/BigCrystal';
import Counter from './components/Counter/Counter';
import SavingButton from './components/SavingButton/SavingButton';
import { CounterContextProvider } from './contexts/CounterContext';
import { KoboldContextProvider } from './contexts/KoboldContext';

import Kobolds from './components/Kobolds/Kobolds';
import GameContextProvider from './contexts/GameContext';

const App = () => {
    return (
        <KoboldContextProvider>
            <CounterContextProvider>
                <GameContextProvider>
                    <h1>
                        <center>Kobold mining factory</center>
                    </h1>
                    <Counter />
                    <BigCrystal />
                    <Kobolds />
                    <SavingButton />
                </GameContextProvider>
            </CounterContextProvider>
        </KoboldContextProvider>
    );
};

export default App;
