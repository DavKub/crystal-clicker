import React, { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterContext';
import { KoboldContext } from '../../contexts/KoboldContext';
import './Kobolds.scss';

const Kobolds = () => {
    const {
        kobolds,
        setKoboldVerminCount,
        setKoboldMinerCount,
        setKoboldWorkerCount,
        setKoboldLaborerCount,
        setKoboldTunnelerCount,
        setKoboldGeomancerCount,
        setKoboldTaskmasterCount,
        setKoboldOverseerCount,
        setKoboldVerminProductivityLevel,
        setKoboldMinerProductivityLevel,
        setKoboldWorkerProductivityLevel,
        setKoboldLaborerProductivityLevel,
        setKoboldTunnelerProductivityLevel,
        setKoboldGeomancerProductivityLevel,
        setKoboldTaskmasterProductivityLevel,
        setKoboldOverseerProductivityLevel,
        setKoboldVerminYield,
        setKoboldMinerYield,
        setKoboldWorkerYield,
        setKoboldLaborerYield,
        setKoboldTunnelerYield,
        setKoboldGeomancerYield,
        setKoboldTaskmasterYield,
        setKoboldOverseerYield,
        setKoboldVerminUpgradeCost,
        setKoboldMinerUpgradeCost,
        setKoboldWorkerUpgradeCost,
        setKoboldLaborerUpgradeCost,
        setKoboldTunnelerUpgradeCost,
        setKoboldGeomancerUpgradeCost,
        setKoboldTaskmasterUpgradeCost,
        setKoboldOverseerUpgradeCost,
    } = useContext(KoboldContext);

    const { crystalCount, setCrystalCount, crystalsLifetime } = useContext(
        CounterContext
    );

    return (
        <>
            <h2>Kobold workers</h2>
            <div className="kobolds">
                <div className="kobold">
                    <h3>{kobolds[0].name}</h3>
                    <br />
                    <p>
                        <span>Yield:</span> {kobolds[0].yield}
                    </p>
                    <p>
                        <span>Count:</span> {kobolds[0].count}
                    </p>
                    <p>
                        <span>Level:</span> {kobolds[0].level}
                    </p>
                    <p>
                        <span>Price:</span> {kobolds[0].price}
                    </p>
                    <br />
                    <button
                        className="kobold-purchase"
                        onClick={() => {
                            if (crystalCount < kobolds[0].price) {
                                console.log('Insufficient funds');
                            } else {
                                setCrystalCount(
                                    (crystalCount) =>
                                        crystalCount - kobolds[0].price
                                );
                                setKoboldVerminCount(
                                    (koboldVerminCount) =>
                                        (koboldVerminCount += 1)
                                );
                            }
                        }}
                        disabled={
                            crystalsLifetime < kobolds[0].price ||
                            crystalCount < kobolds[0].price
                        }
                    >
                        Purchase
                    </button>
                    <button
                        className="kobold-upgrade"
                        onClick={() => {
                            setKoboldVerminProductivityLevel(
                                (koboldVerminProductivityLevel) =>
                                    (koboldVerminProductivityLevel += 1)
                            );
                            setKoboldVerminUpgradeCost(
                                (koboldVerminUpgradeCost) =>
                                    koboldVerminUpgradeCost * 3
                            );
                            setKoboldVerminYield(
                                (koboldVerminYield) => koboldVerminYield * 2
                            );
                            setCrystalCount(
                                (crystalCount) =>
                                    crystalCount - kobolds[0].upgradeCost
                            );
                        }}
                        disabled={
                            crystalsLifetime < kobolds[0].upgradeCost ||
                            crystalCount < kobolds[0].upgradeCost
                        }
                    >
                        {kobolds[0].level < 10
                            ? `Upgrade: ${Math.round(kobolds[0].upgradeCost)}`
                            : 'MAX'}
                    </button>
                </div>

                <div className="kobold">
                    <h3>{kobolds[1].name}</h3>
                    <br />
                    <p>
                        <span>Yield:</span> {kobolds[1].yield}
                    </p>
                    <p>
                        <span>Count:</span> {kobolds[1].count}
                    </p>
                    <p>
                        <span>Level:</span> {kobolds[1].level}
                    </p>
                    <p>
                        <span>Price:</span> {kobolds[1].price}
                    </p>
                    <br />
                    <button
                        className="kobold-purchase"
                        onClick={() => {
                            if (crystalCount < kobolds[1].price) {
                                console.log('Insufficient funds');
                            } else {
                                setCrystalCount(
                                    (crystalCount) =>
                                        crystalCount - kobolds[1].price
                                );
                                setKoboldMinerCount(
                                    (koboldMinerCount) =>
                                        (koboldMinerCount += 1)
                                );
                            }
                        }}
                        disabled={
                            crystalsLifetime < kobolds[1].price ||
                            crystalCount < kobolds[1].price
                        }
                    >
                        Purchase
                    </button>
                    <button
                        className="kobold-upgrade"
                        onClick={() => {
                            setKoboldMinerProductivityLevel(
                                (koboldMinerProductivityLevel) =>
                                    (koboldMinerProductivityLevel += 1)
                            );
                            setKoboldMinerUpgradeCost(
                                (koboldMinerUpgradeCost) =>
                                    koboldMinerUpgradeCost * 3
                            );
                            setKoboldMinerYield(
                                (koboldMinerYield) => koboldMinerYield * 2
                            );
                            setCrystalCount(
                                (crystalCount) =>
                                    crystalCount - kobolds[1].upgradeCost
                            );
                        }}
                        disabled={
                            crystalsLifetime < kobolds[1].upgradeCost ||
                            crystalCount < kobolds[1].upgradeCost
                        }
                    >
                        {kobolds[1].level < 10
                            ? `Upgrade: ${Math.round(kobolds[1].upgradeCost)}`
                            : 'MAX'}
                    </button>
                </div>

                <div className="kobold">
                    <h3>{kobolds[2].name}</h3>
                    <br />
                    <p>
                        <span>Yield:</span> {kobolds[2].yield}
                    </p>
                    <p>
                        <span>Count:</span> {kobolds[2].count}
                    </p>
                    <p>
                        <span>Level:</span> {kobolds[2].level}
                    </p>
                    <p>
                        <span>Price:</span> {kobolds[2].price}
                    </p>
                    <br />
                    <button
                        className="kobold-purchase"
                        onClick={() => {
                            if (crystalCount < kobolds[2].price) {
                                console.log('Insufficient funds');
                            } else {
                                setCrystalCount(
                                    (crystalCount) =>
                                        crystalCount - kobolds[2].price
                                );
                                setKoboldWorkerCount(
                                    (koboldWorkerCount) =>
                                        (koboldWorkerCount += 1)
                                );
                            }
                        }}
                        disabled={
                            crystalsLifetime < kobolds[2].price ||
                            crystalCount < kobolds[2].price
                        }
                    >
                        Purchase
                    </button>
                    <button
                        className="kobold-upgrade"
                        onClick={() => {
                            setKoboldWorkerProductivityLevel(
                                (koboldWorkerProductivityLevel) =>
                                    (koboldWorkerProductivityLevel += 1)
                            );
                            setKoboldWorkerUpgradeCost(
                                (koboldWorkerUpgradeCost) =>
                                    koboldWorkerUpgradeCost * 3
                            );
                            setKoboldWorkerYield(
                                (koboldWorkerYield) => koboldWorkerYield * 2
                            );
                            setCrystalCount(
                                (crystalCount) =>
                                    crystalCount - kobolds[2].upgradeCost
                            );
                        }}
                        disabled={
                            crystalsLifetime < kobolds[2].upgradeCost ||
                            crystalCount < kobolds[2].upgradeCost
                        }
                    >
                        {kobolds[2].level < 10
                            ? `Upgrade: ${Math.round(kobolds[2].upgradeCost)}`
                            : 'MAX'}
                    </button>
                </div>

                <div className="kobold">
                    <h3>{kobolds[3].name}</h3>
                    <br />
                    <p>
                        <span>Yield:</span> {kobolds[3].yield}
                    </p>
                    <p>
                        <span>Count:</span> {kobolds[3].count}
                    </p>
                    <p>
                        <span>Level:</span> {kobolds[3].level}
                    </p>
                    <p>
                        <span>Price:</span> {kobolds[3].price}
                    </p>
                    <br />
                    <button
                        className="kobold-purchase"
                        onClick={() => {
                            if (crystalCount < kobolds[3].price) {
                                console.log('Insufficient funds');
                            } else {
                                setCrystalCount(
                                    (crystalCount) =>
                                        crystalCount - kobolds[3].price
                                );
                                setKoboldLaborerCount(
                                    (koboldLaborerCount) =>
                                        (koboldLaborerCount += 1)
                                );
                            }
                        }}
                        disabled={
                            crystalsLifetime < kobolds[3].price ||
                            crystalCount < kobolds[3].price
                        }
                    >
                        Purchase
                    </button>
                    <button
                        className="kobold-upgrade"
                        onClick={() => {
                            setKoboldLaborerProductivityLevel(
                                (koboldLaborerProductivityLevel) =>
                                    (koboldLaborerProductivityLevel += 1)
                            );
                            setKoboldLaborerUpgradeCost(
                                (koboldLaborerUpgradeCost) =>
                                    koboldLaborerUpgradeCost * 3
                            );
                            setKoboldLaborerYield(
                                (koboldLaborerYield) => koboldLaborerYield * 2
                            );
                            setCrystalCount(
                                (crystalCount) =>
                                    crystalCount - kobolds[3].upgradeCost
                            );
                        }}
                        disabled={
                            crystalsLifetime < kobolds[3].upgradeCost ||
                            crystalCount < kobolds[3].upgradeCost
                        }
                    >
                        {kobolds[3].level < 10
                            ? `Upgrade: ${Math.round(kobolds[3].upgradeCost)}`
                            : 'MAX'}
                    </button>
                </div>

                <div className="kobold">
                    <h3>{kobolds[4].name}</h3>
                    <br />
                    <p>
                        <span>Yield:</span> {kobolds[4].yield}
                    </p>
                    <p>
                        <span>Count:</span> {kobolds[4].count}
                    </p>
                    <p>
                        <span>Level:</span> {kobolds[4].level}
                    </p>
                    <p>
                        <span>Price:</span> {kobolds[4].price}
                    </p>
                    <br />
                    <button
                        className="kobold-purchase"
                        onClick={() => {
                            if (crystalCount < kobolds[4].price) {
                                console.log('Insufficient funds');
                            } else {
                                setCrystalCount(
                                    (crystalCount) =>
                                        crystalCount - kobolds[4].price
                                );
                                setKoboldTunnelerCount(
                                    (koboldTunnelerCount) =>
                                        (koboldTunnelerCount += 1)
                                );
                            }
                        }}
                        disabled={
                            crystalsLifetime < kobolds[4].price ||
                            crystalCount < kobolds[4].price
                        }
                    >
                        Purchase
                    </button>
                    <button
                        className="kobold-upgrade"
                        onClick={() => {
                            setKoboldTunnelerProductivityLevel(
                                (koboldTunnelerProductivityLevel) =>
                                    (koboldTunnelerProductivityLevel += 1)
                            );
                            setKoboldTunnelerUpgradeCost(
                                (koboldTunnelerUpgradeCost) =>
                                    koboldTunnelerUpgradeCost * 3
                            );
                            setKoboldTunnelerYield(
                                (koboldTunnelerYield) => koboldTunnelerYield * 2
                            );
                            setCrystalCount(
                                (crystalCount) =>
                                    crystalCount - kobolds[4].upgradeCost
                            );
                        }}
                        disabled={
                            crystalsLifetime < kobolds[4].upgradeCost ||
                            crystalCount < kobolds[4].upgradeCost
                        }
                    >
                        {kobolds[4].level < 10
                            ? `Upgrade: ${Math.round(kobolds[4].upgradeCost)}`
                            : 'MAX'}
                    </button>
                </div>

                <div className="kobold">
                    <h3>{kobolds[5].name}</h3>
                    <br />
                    <p>
                        <span>Yield:</span> {kobolds[5].yield}
                    </p>
                    <p>
                        <span>Count:</span> {kobolds[5].count}
                    </p>
                    <p>
                        <span>Level:</span> {kobolds[5].level}
                    </p>
                    <p>
                        <span>Price:</span> {kobolds[5].price}
                    </p>
                    <br />
                    <button
                        className="kobold-purchase"
                        onClick={() => {
                            if (crystalCount < kobolds[5].price) {
                                console.log('Insufficient funds');
                            } else {
                                setCrystalCount(
                                    (crystalCount) =>
                                        crystalCount - kobolds[5].price
                                );
                                setKoboldGeomancerCount(
                                    (koboldGeomancerCount) =>
                                        (koboldGeomancerCount += 1)
                                );
                            }
                        }}
                        disabled={
                            crystalsLifetime < kobolds[5].price ||
                            crystalCount < kobolds[5].price
                        }
                    >
                        Purchase
                    </button>
                    <button
                        className="kobold-upgrade"
                        onClick={() => {
                            setKoboldGeomancerProductivityLevel(
                                (koboldGeomancerProductivityLevel) =>
                                    (koboldGeomancerProductivityLevel += 1)
                            );
                            setKoboldGeomancerUpgradeCost(
                                (koboldGeomancerUpgradeCost) =>
                                    koboldGeomancerUpgradeCost * 3
                            );
                            setKoboldGeomancerYield(
                                (koboldGeomancerYield) =>
                                    koboldGeomancerYield * 2
                            );
                            setCrystalCount(
                                (crystalCount) =>
                                    crystalCount - kobolds[5].upgradeCost
                            );
                        }}
                        disabled={
                            crystalsLifetime < kobolds[5].upgradeCost ||
                            crystalCount < kobolds[5].upgradeCost
                        }
                    >
                        {kobolds[5].level < 10
                            ? `Upgrade: ${Math.round(kobolds[5].upgradeCost)}`
                            : 'MAX'}
                    </button>
                </div>

                <div className="kobold">
                    <h3>{kobolds[6].name}</h3>
                    <br />
                    <p>
                        <span>Yield:</span> {kobolds[6].yield}
                    </p>
                    <p>
                        <span>Count:</span> {kobolds[6].count}
                    </p>
                    <p>
                        <span>Level:</span> {kobolds[6].level}
                    </p>
                    <p>
                        <span>Price:</span> {kobolds[6].price}
                    </p>
                    <br />
                    <button
                        className="kobold-purchase"
                        onClick={() => {
                            if (crystalCount < kobolds[6].price) {
                                console.log('Insufficient funds');
                            } else {
                                setCrystalCount(
                                    (crystalCount) =>
                                        crystalCount - kobolds[6].price
                                );
                                setKoboldTaskmasterCount(
                                    (koboldTaskmasterCount) =>
                                        (koboldTaskmasterCount += 1)
                                );
                            }
                        }}
                        disabled={
                            crystalsLifetime < kobolds[6].price ||
                            crystalCount < kobolds[6].price
                        }
                    >
                        Purchase
                    </button>
                    <button
                        className="kobold-upgrade"
                        onClick={() => {
                            setKoboldTaskmasterProductivityLevel(
                                (koboldTaskmasterProductivityLevel) =>
                                    (koboldTaskmasterProductivityLevel += 1)
                            );
                            setKoboldTaskmasterUpgradeCost(
                                (koboldTaskmasterUpgradeCost) =>
                                    koboldTaskmasterUpgradeCost * 3
                            );
                            setKoboldTaskmasterYield(
                                (koboldTaskmasterYield) =>
                                    koboldTaskmasterYield * 2
                            );
                            setCrystalCount(
                                (crystalCount) =>
                                    crystalCount - kobolds[6].upgradeCost
                            );
                        }}
                        disabled={
                            crystalsLifetime < kobolds[6].upgradeCost ||
                            crystalCount < kobolds[6].upgradeCost
                        }
                    >
                        {kobolds[6].level < 10
                            ? `Upgrade: ${Math.round(kobolds[6].upgradeCost)}`
                            : 'MAX'}
                    </button>
                </div>

                <div className="kobold">
                    <h3>{kobolds[7].name}</h3>
                    <br />
                    <p>
                        <span>Yield:</span> {kobolds[7].yield}
                    </p>
                    <p>
                        <span>Count:</span> {kobolds[7].count}
                    </p>
                    <p>
                        <span>Level:</span> {kobolds[7].level}
                    </p>
                    <p>
                        <span>Price:</span> {kobolds[7].price}
                    </p>
                    <br />
                    <button
                        className="kobold-purchase"
                        onClick={() => {
                            if (crystalCount < kobolds[7].price) {
                                console.log('Insufficient funds');
                            } else {
                                setCrystalCount(
                                    (crystalCount) =>
                                        crystalCount - kobolds[7].price
                                );
                                setKoboldOverseerCount(
                                    (koboldOverseerCount) =>
                                        (koboldOverseerCount += 1)
                                );
                            }
                        }}
                        disabled={
                            crystalsLifetime < kobolds[7].price ||
                            crystalCount < kobolds[7].price
                        }
                    >
                        Purchase
                    </button>
                    <button
                        className="kobold-upgrade"
                        onClick={() => {
                            setKoboldOverseerProductivityLevel(
                                (koboldOverseerProductivityLevel) =>
                                    (koboldOverseerProductivityLevel += 1)
                            );
                            setKoboldOverseerUpgradeCost(
                                (koboldOverseerUpgradeCost) =>
                                    koboldOverseerUpgradeCost * 3
                            );
                            setKoboldOverseerYield(
                                (koboldOverseerYield) => koboldOverseerYield * 2
                            );
                            setCrystalCount(
                                (crystalCount) =>
                                    crystalCount - kobolds[7].upgradeCost
                            );
                        }}
                        disabled={
                            crystalsLifetime < kobolds[7].upgradeCost ||
                            crystalCount < kobolds[7].upgradeCost
                        }
                    >
                        {kobolds[7].level < 10
                            ? `Upgrade: ${Math.round(kobolds[7].upgradeCost)}`
                            : 'MAX'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Kobolds;
