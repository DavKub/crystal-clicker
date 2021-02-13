import React, { createContext, useEffect, useState } from 'react';

export const KoboldContext = createContext();

export const KoboldContextProvider = ({ children }) => {
    const [koboldVerminCount, setKoboldVerminCount] = useState(
        JSON.parse(localStorage.getItem('koboldVerminCount')) || 0
    );
    const [koboldMinerCount, setKoboldMinerCount] = useState(
        JSON.parse(localStorage.getItem('koboldMinerCount')) || 0
    );
    const [koboldWorkerCount, setKoboldWorkerCount] = useState(
        JSON.parse(localStorage.getItem('koboldWorkerCount')) || 0
    );
    const [koboldLaborerCount, setKoboldLaborerCount] = useState(
        JSON.parse(localStorage.getItem('koboldLaborerCount')) || 0
    );
    const [koboldTunnelerCount, setKoboldTunnelerCount] = useState(
        JSON.parse(localStorage.getItem('koboldTunnelerCount')) || 0
    );
    const [koboldGeomancerCount, setKoboldGeomancerCount] = useState(
        JSON.parse(localStorage.getItem('koboldGeomancerCount')) || 0
    );
    const [koboldTaskmasterCount, setKoboldTaskmasterCount] = useState(
        JSON.parse(localStorage.getItem('koboldTaskmasterCount')) || 0
    );
    const [koboldOverseerCount, setKoboldOverseerCount] = useState(
        JSON.parse(localStorage.getItem('koboldOverseerCount')) || 0
    );

    const [koboldVerminYield, setKoboldVerminYield] = useState(
        JSON.parse(localStorage.getItem('koboldVerminYield')) || 4
    );
    const [koboldMinerYield, setKoboldMinerYield] = useState(
        JSON.parse(localStorage.getItem('koboldMinerYield')) || 9
    );
    const [koboldWorkerYield, setKoboldWorkerYield] = useState(
        JSON.parse(localStorage.getItem('koboldWorkerYield')) || 13
    );
    const [koboldLaborerYield, setKoboldLaborerYield] = useState(
        JSON.parse(localStorage.getItem('koboldLaborerYield')) || 22
    );
    const [koboldTunnelerYield, setKoboldTunnelerYield] = useState(
        JSON.parse(localStorage.getItem('koboldTunnelerYield')) || 35
    );
    const [koboldGeomancerYield, setKoboldGeomancerYield] = useState(
        JSON.parse(localStorage.getItem('koboldGeomancerYield')) || 57
    );
    const [koboldTaskmasterYield, setKoboldTaskmasterYield] = useState(
        JSON.parse(localStorage.getItem('koboldTaskmasterYield')) || 92
    );
    const [koboldOverseerYield, setKoboldOverseerYield] = useState(
        JSON.parse(localStorage.getItem('koboldOverseerYield')) || 215
    );

    const [
        koboldVerminProductivityLevel,
        setKoboldVerminProductivityLevel,
    ] = useState(
        JSON.parse(localStorage.getItem('koboldVerminProductivityLevel')) || 1
    );
    const [
        koboldMinerProductivityLevel,
        setKoboldMinerProductivityLevel,
    ] = useState(
        JSON.parse(localStorage.getItem('koboldMinerProductivityLevel')) || 1
    );
    const [
        koboldWorkerProductivityLevel,
        setKoboldWorkerProductivityLevel,
    ] = useState(
        JSON.parse(localStorage.getItem('koboldWorkerProductivityLevel')) || 1
    );
    const [
        koboldLaborerProductivityLevel,
        setKoboldLaborerProductivityLevel,
    ] = useState(
        JSON.parse(localStorage.getItem('koboldLaborerProductivityLevel')) || 1
    );
    const [
        koboldTunnelerProductivityLevel,
        setKoboldTunnelerProductivityLevel,
    ] = useState(
        JSON.parse(localStorage.getItem('koboldTunnelerProductivityLevel')) || 1
    );
    const [
        koboldGeomancerProductivityLevel,
        setKoboldGeomancerProductivityLevel,
    ] = useState(
        JSON.parse(localStorage.getItem('koboldGeomancerProductivityLevel')) ||
            1
    );
    const [
        koboldTaskmasterProductivityLevel,
        setKoboldTaskmasterProductivityLevel,
    ] = useState(
        JSON.parse(localStorage.getItem('koboldTaskmasterProductivityLevel')) ||
            1
    );
    const [
        koboldOverseerProductivityLevel,
        setKoboldOverseerProductivityLevel,
    ] = useState(
        JSON.parse(localStorage.getItem('koboldOverseerProductivityLevel')) || 1
    );

    const [koboldVerminUpgradeCost, setKoboldVerminUpgradeCost] = useState(
        JSON.parse(localStorage.getItem('koboldVerminUpgradeCost')) || 180
    );
    const [koboldMinerUpgradeCost, setKoboldMinerUpgradeCost] = useState(
        JSON.parse(localStorage.getItem('koboldMinerUpgradeCost')) || 360
    );
    const [koboldWorkerUpgradeCost, setKoboldWorkerUpgradeCost] = useState(
        JSON.parse(localStorage.getItem('koboldWorkerUpgradeCost')) || 720
    );
    const [koboldLaborerUpgradeCost, setKoboldLaborerUpgradeCost] = useState(
        JSON.parse(localStorage.getItem('koboldLaborerUpgradeCost')) || 1440
    );
    const [koboldTunnelerUpgradeCost, setKoboldTunnelerUpgradeCost] = useState(
        JSON.parse(localStorage.getItem('koboldTunnelerUpgradeCost')) || 2880
    );
    const [
        koboldGeomancerUpgradeCost,
        setKoboldGeomancerUpgradeCost,
    ] = useState(
        JSON.parse(localStorage.getItem('koboldGeomancerUpgradeCost')) || 5760
    );
    const [
        koboldTaskmasterUpgradeCost,
        setKoboldTaskmasterUpgradeCost,
    ] = useState(
        JSON.parse(localStorage.getItem('koboldTaskmasterUpgradeCost')) || 15200
    );
    const [koboldOverseerUpgradeCost, setKoboldOverseerUpgradeCost] = useState(
        JSON.parse(localStorage.getItem('koboldOverseerUpgradeCost')) || 30400
    );

    const [koboldTotalCrystalYield, setKoboldTotalCrystalYield] = useState(0);

    const koboldCount = {
        koboldVerminCount: koboldVerminCount,
        koboldMinerCount: koboldMinerCount,
        koboldWorkerCount: koboldWorkerCount,
        koboldLaborerCount: koboldLaborerCount,
        koboldTunnelerCount: koboldTunnelerCount,
        koboldGeomancerCount: koboldGeomancerCount,
        koboldTaskmasterCount: koboldTaskmasterCount,
        koboldOverseerCount: koboldOverseerCount,
    };

    const koboldYield = {
        koboldVerminYield: koboldVerminYield,
        koboldMinerYield: koboldMinerYield,
        koboldWorkerYield: koboldWorkerYield,
        koboldLaborerYield: koboldLaborerYield,
        koboldTunnelerYield: koboldTunnelerYield,
        koboldGeomancerYield: koboldGeomancerYield,
        koboldTaskmasterYield: koboldTaskmasterYield,
        koboldOverseerYield: koboldOverseerYield,
    };

    const koboldProductivityLevel = {
        koboldVerminProductivityLevel: koboldVerminProductivityLevel,
        koboldMinerProductivityLevel: koboldMinerProductivityLevel,
        koboldWorkerProductivityLevel: koboldWorkerProductivityLevel,
        koboldLaborerProductivityLevel: koboldLaborerProductivityLevel,
        koboldTunnelerProductivityLevel: koboldTunnelerProductivityLevel,
        koboldGeomancerProductivityLevel: koboldGeomancerProductivityLevel,
        koboldTaskmasterProductivityLevel: koboldTaskmasterProductivityLevel,
        koboldOverseerProductivityLevel: koboldOverseerProductivityLevel,
    };

    const koboldPerformance = {
        koboldVerminPerformance:
            koboldCount.koboldVerminCount *
            (koboldYield.koboldVerminYield *
                koboldProductivityLevel.koboldVerminProductivityLevel),
        koboldMinerPerformance:
            koboldCount.koboldMinerCount *
            (koboldYield.koboldMinerYield *
                koboldProductivityLevel.koboldMinerProductivityLevel),
        koboldWorkerPerformance:
            koboldCount.koboldWorkerCount *
            (koboldYield.koboldWorkerYield *
                koboldProductivityLevel.koboldWorkerProductivityLevel),
        koboldLaborerPerformance:
            koboldCount.koboldLaborerCount *
            (koboldYield.koboldLaborerYield *
                koboldProductivityLevel.koboldLaborerProductivityLevel),
        koboldTunnelerPerformance:
            koboldCount.koboldTunnelerCount *
            (koboldYield.koboldTunnelerYield *
                koboldProductivityLevel.koboldTunnelerProductivityLevel),
        koboldGeomancerPerformance:
            koboldCount.koboldGeomancerCount *
            (koboldYield.koboldGeomancerYield *
                koboldProductivityLevel.koboldGeomancerProductivityLevel),
        koboldTaskmasterPerformance:
            koboldCount.koboldTaskmasterCount *
            (koboldYield.koboldTaskmasterYield *
                koboldProductivityLevel.koboldTaskmasterProductivityLevel),
        koboldOverseerPerformance:
            koboldCount.koboldOverseerCount *
            (koboldYield.koboldOverseerYield *
                koboldProductivityLevel.koboldOverseerProductivityLevel),
    };

    const koboldUpgradeCost = {
        koboldVerminUpgradeCost: koboldVerminUpgradeCost,
        koboldMinerUpgradeCost: koboldMinerUpgradeCost,
        koboldWorkerUpgradeCost: koboldWorkerUpgradeCost,
        koboldLaborerUpgradeCost: koboldLaborerUpgradeCost,
        koboldTunnelerUpgradeCost: koboldTunnelerUpgradeCost,
        koboldGeomancerUpgradeCost: koboldGeomancerUpgradeCost,
        koboldTaskmasterUpgradeCost: koboldTaskmasterUpgradeCost,
        koboldOverseerUpgradeCost: koboldOverseerUpgradeCost,
    };

    const kobolds = [
        {
            id: 1,
            name: 'Kobold Vermin',
            count: koboldCount.koboldVerminCount,
            yield: koboldYield.koboldVerminYield,
            level: koboldProductivityLevel.koboldVerminProductivityLevel,
            performance: koboldPerformance.koboldVerminPerformance,
            upgradeCost: koboldUpgradeCost.koboldVerminUpgradeCost,
            price: 30,
        },
        {
            id: 2,
            name: 'Kobold Miner',
            count: koboldCount.koboldMinerCount,
            yield: koboldYield.koboldMinerYield,
            level: koboldProductivityLevel.koboldMinerProductivityLevel,
            performance: koboldPerformance.koboldMinerPerformance,
            upgradeCost: koboldUpgradeCost.koboldMinerUpgradeCost,
            price: 100,
        },
        {
            id: 3,
            name: 'Kobold Worker',
            count: koboldCount.koboldWorkerCount,
            yield: koboldYield.koboldWorkerYield,
            level: koboldProductivityLevel.koboldWorkerProductivityLevel,
            performance: koboldPerformance.koboldWorkerPerformance,
            upgradeCost: koboldUpgradeCost.koboldWorkerUpgradeCost,
            price: 320,
        },
        {
            id: 4,
            name: 'Kobold Laborer',
            count: koboldCount.koboldLaborerCount,
            yield: koboldYield.koboldLaborerYield,
            level: koboldProductivityLevel.koboldLaborerProductivityLevel,
            performance: koboldPerformance.koboldLaborerPerformance,
            upgradeCost: koboldUpgradeCost.koboldLaborerUpgradeCost,
            price: 520,
        },
        {
            id: 5,
            name: 'Kobold Tunneler',
            count: koboldCount.koboldTunnelerCount,
            yield: koboldYield.koboldTunnelerYield,
            level: koboldProductivityLevel.koboldTunnelerProductivityLevel,
            performance: koboldPerformance.koboldTunnelerPerformance,
            upgradeCost: koboldUpgradeCost.koboldTunnelerUpgradeCost,
            price: 730,
        },
        {
            id: 6,
            name: 'Kobold Geomancer',
            count: koboldCount.koboldGeomancerCount,
            yield: koboldYield.koboldGeomancerYield,
            level: koboldProductivityLevel.koboldGeomancerProductivityLevel,
            performance: koboldPerformance.koboldGeomancerPerformance,
            upgradeCost: koboldUpgradeCost.koboldGeomancerUpgradeCost,
            price: 900,
        },
        {
            id: 7,
            name: 'Kobold Taskmaster',
            count: koboldCount.koboldTaskmasterCount,
            yield: koboldYield.koboldTaskmasterYield,
            level: koboldProductivityLevel.koboldTaskmasterProductivityLevel,
            performance: koboldPerformance.koboldTaskmasterPerformance,
            upgradeCost: koboldUpgradeCost.koboldTaskmasterUpgradeCost,
            price: 2800,
        },
        {
            id: 8,
            name: 'Kobold Overseer',
            count: koboldCount.koboldOverseerCount,
            yield: koboldYield.koboldOverseerYield,
            level: koboldProductivityLevel.koboldOverseerProductivityLevel,
            performance: koboldPerformance.koboldOverseerPerformance,
            upgradeCost: koboldUpgradeCost.koboldOverseerUpgradeCost,
            price: 6000,
        },
    ];

    const koboldPerformanceArray = Object.values(koboldPerformance);

    // eslint-disable-next-line
    useEffect(() => {
        setKoboldTotalCrystalYield(
            koboldPerformanceArray.reduce((a, b) => a + b, 0)
        );
    }, [koboldTotalCrystalYield, koboldPerformanceArray]);

    return (
        <KoboldContext.Provider
            value={{
                koboldVerminCount,
                setKoboldVerminCount,
                koboldMinerCount,
                setKoboldMinerCount,
                koboldWorkerCount,
                setKoboldWorkerCount,
                koboldLaborerCount,
                setKoboldLaborerCount,
                koboldTunnelerCount,
                setKoboldTunnelerCount,
                koboldGeomancerCount,
                setKoboldGeomancerCount,
                koboldTaskmasterCount,
                setKoboldTaskmasterCount,
                koboldOverseerCount,
                setKoboldOverseerCount,
                koboldVerminYield,
                setKoboldVerminYield,
                koboldMinerYield,
                setKoboldMinerYield,
                koboldWorkerYield,
                setKoboldWorkerYield,
                koboldLaborerYield,
                setKoboldLaborerYield,
                koboldTunnelerYield,
                setKoboldTunnelerYield,
                koboldGeomancerYield,
                setKoboldGeomancerYield,
                koboldTaskmasterYield,
                setKoboldTaskmasterYield,
                koboldOverseerYield,
                setKoboldOverseerYield,
                koboldVerminProductivityLevel,
                setKoboldVerminProductivityLevel,
                koboldMinerProductivityLevel,
                setKoboldMinerProductivityLevel,
                koboldWorkerProductivityLevel,
                setKoboldWorkerProductivityLevel,
                koboldLaborerProductivityLevel,
                setKoboldLaborerProductivityLevel,
                koboldTunnelerProductivityLevel,
                setKoboldTunnelerProductivityLevel,
                koboldGeomancerProductivityLevel,
                setKoboldGeomancerProductivityLevel,
                koboldTaskmasterProductivityLevel,
                setKoboldTaskmasterProductivityLevel,
                koboldOverseerProductivityLevel,
                setKoboldOverseerProductivityLevel,
                koboldVerminUpgradeCost,
                setKoboldVerminUpgradeCost,
                koboldMinerUpgradeCost,
                setKoboldMinerUpgradeCost,
                koboldWorkerUpgradeCost,
                setKoboldWorkerUpgradeCost,
                koboldLaborerUpgradeCost,
                setKoboldLaborerUpgradeCost,
                koboldTunnelerUpgradeCost,
                setKoboldTunnelerUpgradeCost,
                koboldGeomancerUpgradeCost,
                setKoboldGeomancerUpgradeCost,
                koboldTaskmasterUpgradeCost,
                setKoboldTaskmasterUpgradeCost,
                koboldOverseerUpgradeCost,
                setKoboldOverseerUpgradeCost,
                koboldCount,
                koboldYield,
                koboldTotalCrystalYield,
                koboldUpgradeCost,
                kobolds,
            }}
        >
            {children}
        </KoboldContext.Provider>
    );
};

export default KoboldContextProvider;
