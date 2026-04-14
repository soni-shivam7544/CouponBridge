import { createContext, useState } from "react";

export const ThemeModeContext = createContext();

export const ThemeModeProvider = ( { children }) => {
    const [themeMode, setThemeMode] = useState(true);

    return (
        <ThemeModeContext.Provider value={{themeMode, setThemeMode}}>
            {children}
        </ThemeModeContext.Provider>
    );
}