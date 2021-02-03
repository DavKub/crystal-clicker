import React, { useContext } from 'react';
import { KoboldContext } from '../../contexts/KoboldContext';
import './Kobold.scss';

const Kobold = () => {
    const { kobolds } = useContext(KoboldContext);

    return (
        <>
            {kobolds.map((kobold, id) => {
                return (
                    <div className="kobold" key={`kobold-${id}`}>
                        <h3 key={`kobold-name-${id}`}>{kobold.name}</h3>
                        <br />
                        <p key={`kobold-yield-${id}`}>Yield: {kobold.yield}</p>
                        <p key={`kobold-count-${id}`}>Count: {kobold.count}</p>
                        <p key={`kobold-level-${id}`}>Level: {kobold.level}</p>
                        <br />
                        <button className="kobold-purchase">Purchase</button>
                    </div>
                );
            })}
        </>
    );
};

export default Kobold;
