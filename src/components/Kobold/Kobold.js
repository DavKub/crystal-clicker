import React, { useContext } from 'react';
import { KoboldContext } from '../../contexts/KoboldContext';
import './Kobold.scss';

const Kobold = () => {
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
        <>
            {kobolds.map((kobold, index) => {
                return (
                    <div className="kobold" key={`kobold-${index}`}>
                        <h3 key={`kobold-name-${index}`}>{kobold.name}</h3>
                        <br />
                        <p key={`kobold-yield-${index}`}>
                            Yield: {kobold.yield}
                        </p>
                        <p key={`kobold-count-${index}`}>
                            Count: {kobold.count}
                        </p>
                        <p key={`kobold-level-${index}`}>
                            Level: {kobold.level}
                        </p>
                        <br />
                        <button
                            className="kobold-purchase"
                            key={kobold.id}
                            onClick={() => handlePurchase(index + 1)}
                        >
                            Purchase
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default Kobold;
