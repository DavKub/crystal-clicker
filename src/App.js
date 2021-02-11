import React from 'react';
import './App.scss';
// import BigCrystal from './components/BigCrystal/BigCrystal';

import { CounterContextProvider } from './contexts/CounterContext';
import { KoboldContextProvider } from './contexts/KoboldContext';

import { GameContextProvider } from './contexts/GameContext';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

const App = () => {
    return (
        <div className="wrapper">
            <KoboldContextProvider>
                <CounterContextProvider>
                    <GameContextProvider>
                        <Main />
                        <Header />
                        <Sidebar />
                    </GameContextProvider>
                </CounterContextProvider>
            </KoboldContextProvider>
        </div>
    );
};

export default App;
