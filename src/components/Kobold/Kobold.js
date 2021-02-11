import React, { useContext } from 'react';
import { KoboldContext } from '../../contexts/KoboldContext';
import './Kobold.scss';

const Kobold = ({ index, name, maxLevel }) => {
    const { kobolds } = useContext(KoboldContext);

    return (
        <div className="kobold">
            <h3 className="center">{kobolds[index].name}</h3>
            <br />
            <p>Yield: {kobolds[index].yield}</p>
            <p>Count: {kobolds[index].count}</p>
            <p>Level: {kobolds[index].level}</p>
            <p>Price: {kobolds[index].price}</p>
            <br />
            <button
                className="kobold-purchase"
                onClick={() => {
                    if (crystalCount < kobolds[index].price) {
                        console.log('Insufficient funds');
                    } else {
                        setCrystalCount(
                            (crystalCount) =>
                                crystalCount - kobolds[index].price
                        );
                        setKoboldVerminCount(
                            (koboldVerminCount) => (koboldVerminCount += 1)
                        );
                    }
                }}
                disabled={
                    crystalsLifetime < kobolds[index].price ||
                    crystalCount < kobolds[index].price
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
                        (koboldVerminUpgradeCost) => koboldVerminUpgradeCost * 3
                    );
                    setKoboldVerminYield(
                        (koboldVerminYield) => koboldVerminYield * 2
                    );
                }}
                disabled={
                    crystalsLifetime < kobolds[index].upgradeCost ||
                    crystalCount < kobolds[index].upgradeCost
                }
            >
                {kobolds[index].level < maxLevel
                    ? `Upgrade: ${Math.round(kobolds[index].upgradeCost)}`
                    : 'MAX'}
            </button>
        </div>
    );
};

export default Kobold;
