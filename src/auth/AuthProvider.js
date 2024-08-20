import React, { useContext, createContext, useState } from "react";

// Crear el contexto de autenticación con un valor predeterminado
const AuthContext = createContext({
    isAuthenticated: false,
});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar el contexto de autenticación
export const useAuth = () => {
    return useContext(AuthContext);
};
