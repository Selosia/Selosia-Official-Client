import { createContext, useContext } from "react";

const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}