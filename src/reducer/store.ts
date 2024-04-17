'use client'
import {
  combineReducers,
  configureStore
} from "@reduxjs/toolkit";
import themeReducer from './theme/themeSlice';
// import supplierReducer from './suppliers/supplierSlice';
// import catalogueReducer from './catalogue/catalogueSlice';
// import clientReducer from "./client/clientSlice";
// import userReducer from "./users/usersSlice";
// import orderReducer from "./order/orderSlice";
// import productReducer from "./product/productSlice";
// import invoiceReducer from "./invoice/invoiceSlice";
// import salesReducer from "./sales/salesSlice";
// import printerReducer from "./hardware/printerSlice";
// import cashRegisterReducer from "./cashRegister/cashRegisterSlice";
// import authSlice from "./auth/authSlice";
// import discountSlice from "./discount/discountSlice";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer
} from "redux-persist";
import storage from "./customStorage";


/**
 * Ajustes para almacenar en el redux el estado
 * actual
 */
const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
    theme: themeReducer,
//   auth: authSlice,
//   supplier: supplierReducer,
//   catalogue: catalogueReducer,
//   client: clientReducer,
//   product: productReducer,
//   user: userReducer,
//   order: orderReducer,
//   invoice: invoiceReducer,
//   discount: discountSlice,
//   sales: salesReducer,
//   printer: printerReducer,
//   cashRegister: cashRegisterReducer,
});


const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
