
import { isExpired, decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

const { createContext, useState, useEffect } = require("react");

// @ts-ignore
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setUser(null);
        }

        const user = decodeToken(token);
        const isTokenExpired = isExpired(token);
        if (!isTokenExpired) {
            setUser(user);
        }
    }, [token]);
    
    const signOut = () => {
        console.log("signOut")
        localStorage.removeItem("token");
        setToken(null);
    }

    return <AuthContext.Provider value={{user, setToken, signOut}}>{children}</AuthContext.Provider>;
};
