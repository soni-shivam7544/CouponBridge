import { useState } from "react";

import { createContext } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [globalCategory, setGlobalCategory] = useState('All Categories');

    const changeGlobalCategory = (category) => {
        setGlobalCategory(category);
    }

    return (
        <CategoryContext.Provider value={{globalCategory, changeGlobalCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}