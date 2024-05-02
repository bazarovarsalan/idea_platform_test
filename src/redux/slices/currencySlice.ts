import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCurrency = "RUB" | "USD" | "EUR";

type TCurrencyState = {
  currency: TCurrency;
};

const initialState: TCurrencyState = {
  currency: "RUB",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<TCurrency>) => {
      state.currency = action.payload;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
