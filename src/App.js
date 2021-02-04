import React from 'react';
import './App.scss';
import BigCrystal from './components/BigCrystal/BigCrystal';
import Counter from './components/Counter/Counter';
import SavingButton from './components/SavingButton/SavingButton';
import { CounterContextProvider } from './contexts/CounterContext';
import { KoboldContextProvider } from './contexts/KoboldContext';

import kobold from './assets/graphics/kobold.jpg';
import Kobold from './components/Kobold/Kobold';

const App = () => {
    return (
        <KoboldContextProvider>
            <CounterContextProvider>
                <h1>
                    <center>Kobold mining factory</center>
                </h1>
                <Counter />
                <BigCrystal />
                <img
                    src={kobold}
                    alt="Kobold"
                    style={{ width: '300px', float: 'right', zIndex: -50 }}
                />
                <Kobold />
                <SavingButton />
            </CounterContextProvider>
        </KoboldContextProvider>
    );
};

export default App;
