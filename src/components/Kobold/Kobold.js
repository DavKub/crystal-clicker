import React, { useContext } from 'react';
import { KoboldContext } from '../../contexts/KoboldContext';
import './Kobold.scss';

const Kobold = ({ koboldIndex }) => {
    const { kobolds } = useContext(KoboldContext);

    const handlePurchase = (id) => {
        let selectedKobold = kobolds.filter((kobold) => {
            return kobold.id === id;
        });

        console.log(selectedKobold[0].name);
        selectedKobold[0].count++;
        console.log(selectedKobold[0].count);
    };

    return (
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
                            (crystalCount) => crystalCount - kobolds[0].price
                        );
                        setKoboldVerminCount(
                            (koboldVerminCount) => (koboldVerminCount += 1)
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
                            koboldVerminUpgradeCost * 1.75
                    );
                }}
                disabled={
                    crystalsLifetime < kobolds[0].upgradeCost ||
                    crystalCount < kobolds[0].upgradeCost
                }
            >
                {kobolds[0].level < 11
                    ? `Upgrade: ${Math.round(kobolds[0].upgradeCost)}`
                    : 'MAX'}
            </button>
        </div>
    );
};

export default Kobold;
