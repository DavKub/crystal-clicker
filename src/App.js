import React from 'react';
import './App.scss';
import BigCrystal from './components/BigCrystal/BigCrystal';
import Counter from './components/Counter/Counter';
import SavingButton from './components/SavingButton/SavingButton';
import { CounterContextProvider } from './contexts/CounterContext';
import KoboldContext from './contexts/KoboldContext';

const App = () => {
    return (
        <KoboldContext>
            <CounterContextProvider>
                <Counter />
                <BigCrystal />
                <SavingButton />
            </CounterContextProvider>
        </KoboldContext>
    );
};

export default App;
