import React, { createContext, useEffect, useState } from 'react';

export const KoboldContext = createContext();

export const KoboldContextProvider = ({ children }) => {
    const [koboldVerminCount, setKoboldVerminCount] = useState(1);
    const [koboldMinerCount, setKoboldMinerCount] = useState(0);
    const [koboldWorkerCount, setKoboldWorkerCount] = useState(3);
    const [koboldLaborerCount, setKoboldLaborerCount] = useState(0);
    const [koboldTunnelerCount, setKoboldTunnelerCount] = useState(13);
    const [koboldGeomancerCount, setKoboldGeomancerCount] = useState(0);
    const [koboldTaskmasterCount, setKoboldTaskmasterCount] = useState(8);

    const [koboldVerminYield, setKoboldVerminYield] = useState(1);
    const [koboldMinerYield, setKoboldMinerYield] = useState(2);
    const [koboldWorkerYield, setKoboldWorkerYield] = useState(3);
    const [koboldLaborerYield, setKoboldLaborerYield] = useState(5);
    const [koboldTunnelerYield, setKoboldTunnelerYield] = useState(8);
    const [koboldGeomancerYield, setKoboldGeomancerYield] = useState(13);
    const [koboldTaskmasterYield, setKoboldTaskmasterYield] = useState(21);

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

    const koboldPerformanceArray = Object.values(koboldPerformance);

    // eslint-disable-next-line
    useEffect(() => {
        setKoboldTotalCrystalYield(
            koboldPerformanceArray.reduce((a, b) => a + b, 0)
        );
        console.log(koboldTotalCrystalYield);
    });

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
                koboldCount,
                koboldYield,
                koboldTotalCrystalYield,
            }}
        >
            {children}
        </KoboldContext.Provider>
    );
};

export default KoboldContextProvider;
