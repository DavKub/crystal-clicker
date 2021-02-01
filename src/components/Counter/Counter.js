import React, { useContext } from 'react';
import { CounterContext } from '../../context/CounterContext';
import './Counter.scss';

const Counter = () => {
    const { crystalCount } = useContext(CounterContext);

    return <div id="crystal-count">{`${crystalCount} crystals`}</div>;
};

export default Counter;
