"use client";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalContext } from "@/contexts/GlobalContext";

const persistor = persistStore(store);

export function Providers({ children }: { children: React.ReactNode }) {
  const [breadCrumb, setBreadCrumb] = useState<string>('');
  return (
    <GlobalContext.Provider value={{ breadCrumb, setBreadCrumb }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </GlobalContext.Provider>
  );
}