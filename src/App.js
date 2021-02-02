import React from 'react';
import './App.scss';
import BigCrystal from './components/BigCrystal/BigCrystal';
import Counter from './components/Counter/Counter';
import SavingButton from './components/SavingButton/SavingButton';
import { CounterContextProvider } from './contexts/CounterContext';

const App = () => {
    return (
        <CounterContextProvider>
            <Counter />
            <BigCrystal />
            <SavingButton />
        </CounterContextProvider>
    );
};

export default App;
