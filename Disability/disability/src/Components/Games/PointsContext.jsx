import React, { createContext, useState, useEffect } from "react";

export const PointsContext = createContext();

export function PointsProvider({ children }) {
    const [points, setPoints] = useState(0);

    useEffect(() => {
        const currentUser = localStorage.getItem("currentUser");
        if (currentUser) {
            const savedPoints = localStorage.getItem(`${currentUser}_points`);
            if (savedPoints) setPoints(parseInt(savedPoints));
        }
    }, []);

    useEffect(() => {
        const currentUser = localStorage.getItem("currentUser");
        if (currentUser) {
            localStorage.setItem(`${currentUser}_points`, points);
        }
    }, [points]);

    return (
        <PointsContext.Provider value={{ points, setPoints }}>
            {children}
        </PointsContext.Provider>
    );
}
