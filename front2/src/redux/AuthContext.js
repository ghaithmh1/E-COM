import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({ role: "guest" }); // Store user info with role

    const login = (userData) => {
        console.log("User data in login:", userData); // Debug log
        setIsLoggedIn(true);
        setUser(userData);
    };
    
    

    const logout = () => {
        setIsLoggedIn(false);
        setUser({ role: "guest" });
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
