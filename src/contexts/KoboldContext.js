import React, { createContext, useEffect, useState } from 'react';

export const KoboldContext = createContext();

export const KoboldContextProvider = ({ children }) => {
    const [koboldVerminCount, setKoboldVerminCount] = useState(0);
    const [koboldMinerCount, setKoboldMinerCount] = useState(0);
    const [koboldWorkerCount, setKoboldWorkerCount] = useState(0);
    const [koboldLaborerCount, setKoboldLaborerCount] = useState(0);
    const [koboldTunnelerCount, setKoboldTunnelerCount] = useState(0);
    const [koboldGeomancerCount, setKoboldGeomancerCount] = useState(0);
    const [koboldTaskmasterCount, setKoboldTaskmasterCount] = useState(0);

    const [koboldVerminYield, setKoboldVerminYield] = useState(4);
    const [koboldMinerYield, setKoboldMinerYield] = useState(9);
    const [koboldWorkerYield, setKoboldWorkerYield] = useState(13);
    const [koboldLaborerYield, setKoboldLaborerYield] = useState(22);
    const [koboldTunnelerYield, setKoboldTunnelerYield] = useState(35);
    const [koboldGeomancerYield, setKoboldGeomancerYield] = useState(57);
    const [koboldTaskmasterYield, setKoboldTaskmasterYield] = useState(92);

    const [
        koboldVerminProductivityLevel,
        setKoboldVerminProductivityLevel,
    ] = useState(1);
    const [
        koboldMinerProductivityLevel,
        setKoboldMinerProductivityLevel,
    ] = useState(1);
    const [
        koboldWorkerProductivityLevel,
        setKoboldWorkerProductivityLevel,
    ] = useState(1);
    const [
        koboldLaborerProductivityLevel,
        setKoboldLaborerProductivityLevel,
    ] = useState(1);
    const [
        koboldTunnelerProductivityLevel,
        setKoboldTunnelerProductivityLevel,
    ] = useState(1);
    const [
        koboldGeomancerProductivityLevel,
        setKoboldGeomancerProductivityLevel,
    ] = useState(1);
    const [
        koboldTaskmasterProductivityLevel,
        setKoboldTaskmasterProductivityLevel,
    ] = useState(1);

    const [koboldVerminUpgradeCost, setKoboldVerminUpgradeCost] = useState(0);
    const [koboldMinerUpgradeCost, setKoboldMinerUpgradeCost] = useState(0);
    const [koboldWorkerUpgradeCost, setKoboldWorkerUpgradeCost] = useState(0);
    const [koboldLaborerUpgradeCost, setKoboldLaborerUpgradeCost] = useState(0);
    const [koboldTunnelerUpgradeCost, setKoboldTunnelerUpgradeCost] = useState(
        0
    );
    const [
        koboldGeomancerUpgradeCost,
        setKoboldGeomancerUpgradeCost,
    ] = useState(0);
    const [
        koboldTaskmasterUpgradeCost,
        setKoboldTaskmasterUpgradeCost,
    ] = useState(0);

    const [koboldTotalCrystalYield, setKoboldTotalCrystalYield] = useState(0);

    const koboldCount = {
        koboldVerminCount: koboldVerminCount,
        koboldMinerCount: koboldMinerCount,
        koboldWorkerCount: koboldWorkerCount,
        koboldLaborerCount: koboldLaborerCount,
        koboldTunnelerCount: koboldTunnelerCount,
        koboldGeomancerCount: koboldGeomancerCount,
        koboldTaskmasterCount: koboldTaskmasterCount,
    };

    const koboldYield = {
        koboldVerminYield: koboldVerminYield,
        koboldMinerYield: koboldMinerYield,
        koboldWorkerYield: koboldWorkerYield,
        koboldLaborerYield: koboldLaborerYield,
        koboldTunnelerYield: koboldTunnelerYield,
        koboldGeomancerYield: koboldGeomancerYield,
        koboldTaskmasterYield: koboldTaskmasterYield,
    };

    const koboldProductivityLevel = {
        koboldVerminProductivityLevel: koboldVerminProductivityLevel,
        koboldMinerProductivityLevel: koboldMinerProductivityLevel,
        koboldWorkerProductivityLevel: koboldWorkerProductivityLevel,
        koboldLaborerProductivityLevel: koboldLaborerProductivityLevel,
        koboldTunnelerProductivityLevel: koboldTunnelerProductivityLevel,
        koboldGeomancerProductivityLevel: koboldGeomancerProductivityLevel,
        koboldTaskmasterProductivityLevel: koboldTaskmasterProductivityLevel,
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
    };

    const koboldUpgradeCost = {
        koboldVerminUpgradeCost: koboldVerminUpgradeCost,
        koboldMinerUpgradeCost: koboldMinerUpgradeCost,
        koboldWorkerUpgradeCost: koboldWorkerUpgradeCost,
        koboldLaborerUpgradeCost: koboldLaborerUpgradeCost,
        koboldTunnelerUpgradeCost: koboldTunnelerUpgradeCost,
        koboldGeomancerUpgradeCost: koboldGeomancerUpgradeCost,
        koboldTaskmasterUpgradeCost: koboldTaskmasterUpgradeCost,
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
            price: 25,
        },
        {
            id: 2,
            name: 'Kobold Miner',
            count: koboldCount.koboldMinerCount,
            yield: koboldYield.koboldMinerYield,
            level: koboldProductivityLevel.koboldMinerProductivityLevel,
            performance: koboldPerformance.koboldMinerPerformance,
            upgradeCost: koboldUpgradeCost.koboldMinerUpgradeCost,
            price: 45,
        },
        {
            id: 3,
            name: 'Kobold Worker',
            count: koboldCount.koboldWorkerCount,
            yield: koboldYield.koboldWorkerYield,
            level: koboldProductivityLevel.koboldWorkerProductivityLevel,
            performance: koboldPerformance.koboldWorkerPerformance,
            upgradeCost: koboldUpgradeCost.koboldWorkerUpgradeCost,
            price: 120,
        },
        {
            id: 4,
            name: 'Kobold Laborer',
            count: koboldCount.koboldLaborerCount,
            yield: koboldYield.koboldLaborerYield,
            level: koboldProductivityLevel.koboldLaborerProductivityLevel,
            performance: koboldPerformance.koboldLaborerPerformance,
            upgradeCost: koboldUpgradeCost.koboldLaborerUpgradeCost,
            price: 230,
        },
        {
            id: 5,
            name: 'Kobold Tunneler',
            count: koboldCount.koboldTunnelerCount,
            yield: koboldYield.koboldTunnelerYield,
            level: koboldProductivityLevel.koboldTunnelerProductivityLevel,
            performance: koboldPerformance.koboldTunnelerPerformance,
            upgradeCost: koboldUpgradeCost.koboldTunnelerUpgradeCost,
            price: 540,
        },
        {
            id: 6,
            name: 'Kobold Geomancer',
            count: koboldCount.koboldGeomancerCount,
            yield: koboldYield.koboldGeomancerYield,
            level: koboldProductivityLevel.koboldGeomancerProductivityLevel,
            performance: koboldPerformance.koboldGeomancerPerformance,
            upgradeCost: koboldUpgradeCost.koboldGeomancerUpgradeCost,
            price: 790,
        },
        {
            id: 7,
            name: 'Kobold Taskmaster',
            count: koboldCount.koboldTaskmasterCount,
            yield: koboldYield.koboldTaskmasterYield,
            level: koboldProductivityLevel.koboldTaskmasterProductivityLevel,
            performance: koboldPerformance.koboldTaskmasterPerformance,
            upgradeCost: koboldUpgradeCost.koboldTaskmasterUpgradeCost,
            price: 1100,
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
