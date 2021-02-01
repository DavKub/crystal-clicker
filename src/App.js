import React, { useContext } from 'react';
import './App.scss';
import BigCrystal from './components/BigCrystal/BigCrystal';
import Counter from './components/Counter/Counter';
import {
    CounterContext,
    CounterContextProvider,
} from './context/CounterContext';

const App = () => {
    return (
        <CounterContextProvider>
            <Counter />
            <BigCrystal />
        </CounterContextProvider>
    );
};

export default App;
