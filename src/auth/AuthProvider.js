import React, { useContext, createContext, useState } from "react";
import {AuthResponse} from "../types/types";
// Crear el contexto de autenticación con un valor predeterminado
const AuthContext = createContext({
    isAuthenticated: false,
    getAccessToken: () => "",
    saveUser:(userData)=> {},
});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState("");
    //const [refreshToken, setRefreshToken] = useState("");

    async function checkAuth(){
        if(accessToken){
            //el usuario está autenticado
        }else{
            //el usuairio no está autenticado
        }
    }
    function getAccessToken(){
        return accessToken;
    }

    function getRefreshToken() {
        return localStorage.getItem("token") || "";
    }
    

    function saveUser(userData) {
        setAccessToken(userData.accessToken);
        // setRefreshToken(userData.refreshToken); // Si decides manejarlo
    
        localStorage.setItem("Token", userData.accessToken);
        // localStorage.setItem("refreshToken", userData.refreshToken);
        setIsAuthenticated(true);
    }
    

    return (
        <AuthContext.Provider value={{ isAuthenticated, getAccessToken, saveUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar el contexto de autenticación
export const useAuth = () => {
    return useContext(AuthContext);
};
