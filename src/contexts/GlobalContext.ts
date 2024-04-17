import { createContext, useContext } from 'react';

/**
 * Clase para creación de variables globales usando un contexto global
 */

export type GlobalContent = {
    breadCrumb: string,
    setBreadCrumb: (breadCrumb: string) => void
}

export const GlobalContext = createContext<GlobalContent>({
    breadCrumb: '',
    setBreadCrumb: () => { }
});

export const useGlobalContext = () => useContext(GlobalContext);