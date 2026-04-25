import { createContext, useState } from "react";
import GlobalPopup from "../components/GlobalPopup";

export const PopupContext = createContext();

export const PopupProvider = ( {children}) => {
    const [popup, setPopup] = useState(null);
    const showPopup = (type, data={}) => {
        return new Promise((resolve) => {
            setPopup({
                type,
                data,
                resolve
            });
        });
    };
    const hidePopup = () => {
        setPopup(null);
    }
    return (
        <PopupContext.Provider value = {{popup, showPopup, hidePopup}}>
            {children}
            <GlobalPopup />
        </PopupContext.Provider>
    )
}