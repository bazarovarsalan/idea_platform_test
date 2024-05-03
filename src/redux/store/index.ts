import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "../slices/currencySlice";
import transfersSlice from "../slices/transfersSlice";
import ticketsSlice from "../slices/ticketsSlice";

const store = configureStore({
  reducer: {
    currency: currencySlice,
    transfers: transfersSlice,
    tickets: ticketsSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
