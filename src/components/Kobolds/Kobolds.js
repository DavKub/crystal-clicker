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
        setKoboldVerminProductivityLevel,
        setKoboldMinerProductivityLevel,
        setKoboldWorkerProductivityLevel,
        setKoboldLaborerProductivityLevel,
        setKoboldTunnelerProductivityLevel,
        setKoboldGeomancerProductivityLevel,
        setKoboldTaskmasterProductivityLevel,
    } = useContext(KoboldContext);

    const { crystalCount, setCrystalCount, crystalsLifetime } = useContext(
        CounterContext
    );

    return (
        <div>
            <div className="kobold">
                <h3>{kobolds[0].name}</h3>
                <br />
                <p>Yield: {kobolds[0].yield}</p>
                <p>Count: {kobolds[0].count}</p>
                <p>Level: {kobolds[0].level}</p>
                <p>Price: {kobolds[0].price}</p>
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
                                (koboldVerminCount) => (koboldVerminCount += 1)
                            );
                        }
                    }}
                    disabled={crystalsLifetime < kobolds[0].price}
                >
                    Purchase
                </button>
                <button
                    className="kobold-upgrade"
                    onClick={() =>
                        setKoboldVerminProductivityLevel(
                            (koboldVerminProductivityLevel) =>
                                (koboldVerminProductivityLevel += 1)
                        )
                    }
                >
                    Upgrade
                </button>
            </div>

            <div className="kobold">
                <h3>{kobolds[1].name}</h3>
                <br />
                <p>Yield: {kobolds[1].yield}</p>
                <p>Count: {kobolds[1].count}</p>
                <p>Level: {kobolds[1].level}</p>
                <p>Price: {kobolds[1].price}</p>
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
                                (koboldMinerCount) => (koboldMinerCount += 1)
                            );
                        }
                    }}
                    disabled={crystalsLifetime < kobolds[1].price}
                >
                    Purchase
                </button>
                <button
                    className="kobold-upgrade"
                    onClick={() =>
                        setKoboldMinerProductivityLevel(
                            (koboldMinerProductivityLevel) =>
                                (koboldMinerProductivityLevel += 1)
                        )
                    }
                >
                    Upgrade
                </button>
            </div>

            <div className="kobold">
                <h3>{kobolds[2].name}</h3>
                <br />
                <p>Yield: {kobolds[2].yield}</p>
                <p>Count: {kobolds[2].count}</p>
                <p>Level: {kobolds[2].level}</p>
                <p>Price: {kobolds[2].price}</p>
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
                                (koboldWorkerCount) => (koboldWorkerCount += 1)
                            );
                        }
                    }}
                    disabled={crystalsLifetime < kobolds[2].price}
                >
                    Purchase
                </button>
                <button
                    className="kobold-upgrade"
                    onClick={() =>
                        setKoboldWorkerProductivityLevel(
                            (koboldWorkerProductivityLevel) =>
                                (koboldWorkerProductivityLevel += 1)
                        )
                    }
                >
                    Upgrade
                </button>
            </div>

            <div className="kobold">
                <h3>{kobolds[3].name}</h3>
                <br />
                <p>Yield: {kobolds[3].yield}</p>
                <p>Count: {kobolds[3].count}</p>
                <p>Level: {kobolds[3].level}</p>
                <p>Price: {kobolds[3].price}</p>
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
                    disabled={crystalsLifetime < kobolds[3].price}
                >
                    Purchase
                </button>
                <button
                    className="kobold-upgrade"
                    onClick={() =>
                        setKoboldLaborerProductivityLevel(
                            (koboldLaborerProductivityLevel) =>
                                (koboldLaborerProductivityLevel += 1)
                        )
                    }
                >
                    Upgrade
                </button>
            </div>

            <div className="kobold">
                <h3>{kobolds[4].name}</h3>
                <br />
                <p>Yield: {kobolds[4].yield}</p>
                <p>Count: {kobolds[4].count}</p>
                <p>Level: {kobolds[4].level}</p>
                <p>Price: {kobolds[4].price}</p>
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
                    disabled={crystalsLifetime < kobolds[4].price}
                >
                    Purchase
                </button>
                <button
                    className="kobold-upgrade"
                    onClick={() =>
                        setKoboldTunnelerProductivityLevel(
                            (koboldTunnelerProductivityLevel) =>
                                (koboldTunnelerProductivityLevel += 1)
                        )
                    }
                >
                    Upgrade
                </button>
            </div>

            <div className="kobold">
                <h3>{kobolds[5].name}</h3>
                <br />
                <p>Yield: {kobolds[5].yield}</p>
                <p>Count: {kobolds[5].count}</p>
                <p>Level: {kobolds[5].level}</p>
                <p>Price: {kobolds[5].price}</p>
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
                    disabled={crystalsLifetime < kobolds[5].price}
                >
                    Purchase
                </button>
                <button
                    className="kobold-upgrade"
                    onClick={() =>
                        setKoboldGeomancerProductivityLevel(
                            (koboldGeomancerProductivityLevel) =>
                                (koboldGeomancerProductivityLevel += 1)
                        )
                    }
                >
                    Upgrade
                </button>
            </div>

            <div className="kobold">
                <h3>{kobolds[6].name}</h3>
                <br />
                <p>Yield: {kobolds[6].yield}</p>
                <p>Count: {kobolds[6].count}</p>
                <p>Level: {kobolds[6].level}</p>
                <p>Price: {kobolds[6].price}</p>
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
                    disabled={crystalsLifetime < kobolds[6].price}
                >
                    Purchase
                </button>
                <button
                    className="kobold-upgrade"
                    onClick={() =>
                        setKoboldTaskmasterProductivityLevel(
                            (koboldTaskmasterProductivityLevel) =>
                                (koboldTaskmasterProductivityLevel += 1)
                        )
                    }
                >
                    Upgrade
                </button>
            </div>
        </div>
    );
};

export default Kobolds;
