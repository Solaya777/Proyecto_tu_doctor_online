import React, { useContext, createContext, useState, useEffect } from "react";
import { API_URL } from "./constants";

// Crear el contexto de autenticación con un valor predeterminado
const AuthContext = createContext({
    isAuthenticated: false,
    getAccessToken: () => {},
    saveUser: (userData) => {},
    getRefreshToken: () => {},
});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState(localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")).accessToken : "");
    const [user, setUser] = useState(null);

    useEffect(() => {
        checkAuth();
    }, []); // Vacío para asegurarse que solo se ejecute al montar

    async function requestNewAccessToken(refreshToken) {
        try {
            const response = await fetch(`${API_URL}/refresh-token`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${refreshToken}`
                }
            });
            if (response.ok) {
                const json = await response.json();
                if (json.error) {
                    throw new Error(json.error);
                }
                return json.body.accessToken;
            } else {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error al solicitar un nuevo token de acceso:', error);
            return null;
        }
    }

    async function getUserInfo(accessToken) {
        try {
            const response = await fetch(`${API_URL}/user`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                }
            });
            if (response.ok) {
                const json = await response.json();
                if (json.error) {
                    throw new Error(json.error);
                }
                return json.body.user;
            } else {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error al obtener información del usuario:', error);
            return null;
        }
    }

    async function checkAuth() {
        const token = getRefreshToken();
        if (accessToken) {
            setIsAuthenticated(true);
        } else {
            const token = getRefreshToken();
            if (token) {
                const newAccessToken = await requestNewAccessToken(token);
                if (newAccessToken) {
                    const userInfo = await getUserInfo(newAccessToken);
                    if (userInfo) {
                        saveSessionInfo(userInfo, newAccessToken, token);
                    }
                }
            }
        }
    }

    function saveSessionInfo(userInfo, accessToken, refreshToken) {
        setAccessToken(accessToken);
        setUser(userInfo);
        localStorage.setItem("token", JSON.stringify({ accessToken, refreshToken }));
        setIsAuthenticated(true);
    }

    function getAccessToken() {
        return accessToken;
    }

    function getRefreshToken() {
        const tokenData = localStorage.getItem("token");
        if (tokenData) {
            const { refreshToken } = JSON.parse(tokenData);
            return refreshToken;
        }
        return null;
    }

    function saveUser(userData) {
        console.log("userData:", userData);
        if (userData) {
            const { user, accessToken, refreshToken } = userData;
            if (user && accessToken && refreshToken) {
                saveSessionInfo(user, accessToken, refreshToken);
            } else {
                console.error('Datos incompletos en userData');
            }
        } else {
            console.error('userData o userData.body es undefined');
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, getAccessToken, saveUser, getRefreshToken, user }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar el contexto de autenticación
export const useAuth = () => {
    return useContext(AuthContext);
};
