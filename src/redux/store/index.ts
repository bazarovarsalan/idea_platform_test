import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "../slices/currencySlice";
import transfersSlice from "../slices/transfersSlice";

const store = configureStore({
  reducer: {
    currency: currencySlice,
    transfers: transfersSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
