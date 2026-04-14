import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ( {children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = ({ userData, role }) => {
        setUser(userData.user);
        localStorage.setItem('user',JSON.stringify(userData.user));
        localStorage.setItem('token',userData.token);
        localStorage.setItem('role', role);
    }
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }
    return(
        <AuthContext.Provider value = { {user, login, logout } }>
            {children}
        </AuthContext.Provider>
    )
}