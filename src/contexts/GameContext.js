import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
    const [firstLaunch, setFirstLaunch] = useState(true);

    return (
        <GameContext.Provider value={{ firstLaunch, setFirstLaunch }}>
            {children}
        </GameContext.Provider>
    );
};

export default GameContextProvider;
