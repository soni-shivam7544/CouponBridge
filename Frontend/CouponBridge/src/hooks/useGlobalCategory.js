import { useContext } from 'react';
import { CategoryContext } from "../context/CategoryContext";

export const useGlobalCategory = () => {
   return useContext(CategoryContext)
};