import { useContext } from "react";
import { ThemeModeContext } from "../context/ThemeModeContext";

export const useTheme = () => (useContext(ThemeModeContext));