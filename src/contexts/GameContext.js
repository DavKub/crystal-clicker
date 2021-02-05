import React, { createContext, useState, useContext } from 'react';
import { CounterContext } from './CounterContext';
import { KoboldContext } from './KoboldContext';

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
    const { crystalCount, crystalsLifetime } = useContext(CounterContext);
    const {
        koboldVerminCount,
        koboldMinerCount,
        koboldWorkerCount,
        koboldLaborerCount,
        koboldTunnelerCount,
        koboldGeomancerCount,
        koboldTaskmasterCount,
        koboldVerminProductivityLevel,
        koboldMinerProductivityLevel,
        koboldWorkerProductivityLevel,
        koboldLaborerProductivityLevel,
        koboldTunnelerProductivityLevel,
        koboldGeomancerProductivityLevel,
        koboldTaskmasterProductivityLevel,
        koboldVerminYield,
        koboldMinerYield,
        koboldWorkerYield,
        koboldLaborerYield,
        koboldTunnelerYield,
        koboldGeomancerYield,
        koboldTaskmasterYield,
        koboldVerminUpgradeCost,
        koboldMinerUpgradeCost,
        koboldWorkerUpgradeCost,
        koboldLaborerUpgradeCost,
        koboldTunnelerUpgradeCost,
        koboldGeomancerUpgradeCost,
        koboldTaskmasterUpgradeCost,
    } = useContext(KoboldContext);

    const [firstLaunch, setFirstLaunch] = useState(true);

    const saveGame = () => {
        localStorage.setItem('crystalCount', crystalCount);
        localStorage.setItem('crystalsLifetime', crystalsLifetime);

        localStorage.setItem('koboldVerminCount', koboldVerminCount);
        localStorage.setItem(
            'koboldVerminProductivityLevel',
            koboldVerminProductivityLevel
        );
        localStorage.setItem('koboldVerminYield', koboldVerminYield);
        localStorage.setItem(
            'koboldVerminUpgradeCost',
            koboldVerminUpgradeCost
        );

        localStorage.setItem('koboldMinerCount', koboldMinerCount);
        localStorage.setItem(
            'koboldMinerProductivityLevel',
            koboldMinerProductivityLevel
        );
        localStorage.setItem('koboldMinerYield', koboldMinerYield);
        localStorage.setItem('koboldMinerUpgradeCost', koboldMinerUpgradeCost);

        localStorage.setItem('koboldWorkerCount', koboldWorkerCount);
        localStorage.setItem(
            'koboldWorkerProductivityLevel',
            koboldWorkerProductivityLevel
        );
        localStorage.setItem('koboldWorkerYield', koboldWorkerYield);
        localStorage.setItem(
            'koboldWorkerUpgradeCost',
            koboldWorkerUpgradeCost
        );

        localStorage.setItem('koboldLaborerCount', koboldLaborerCount);
        localStorage.setItem(
            'koboldLaborerProductivityLevel',
            koboldLaborerProductivityLevel
        );
        localStorage.setItem('koboldLaborerYield', koboldLaborerYield);
        localStorage.setItem(
            'koboldLaborerUpgradeCost',
            koboldLaborerUpgradeCost
        );

        localStorage.setItem('koboldTunnelerCount', koboldTunnelerCount);
        localStorage.setItem(
            'koboldTunnelerProductivityLevel',
            koboldTunnelerProductivityLevel
        );
        localStorage.setItem('koboldTunnelerYield', koboldTunnelerYield);
        localStorage.setItem(
            'koboldTunnelerUpgradeCost',
            koboldTunnelerUpgradeCost
        );

        localStorage.setItem('koboldGeomancerCount', koboldGeomancerCount);
        localStorage.setItem(
            'koboldGeomancerProductivityLevel',
            koboldGeomancerProductivityLevel
        );
        localStorage.setItem('koboldGeomancerYield', koboldGeomancerYield);
        localStorage.setItem(
            'koboldGeomancerUpgradeCost',
            koboldGeomancerUpgradeCost
        );

        localStorage.setItem('koboldTaskmasterCount', koboldTaskmasterCount);
        localStorage.setItem(
            'koboldTaskmasterProductivityLevel',
            koboldTaskmasterProductivityLevel
        );
        localStorage.setItem('koboldTaskmasterYield', koboldTaskmasterYield);
        localStorage.setItem(
            'koboldTaskmasterUpgradeCost',
            koboldTaskmasterUpgradeCost
        );
    };

    return (
        <GameContext.Provider
            value={({ firstLaunch, setFirstLaunch }, saveGame)}
        >
            {children}
        </GameContext.Provider>
    );
};

export default GameContextProvider;
