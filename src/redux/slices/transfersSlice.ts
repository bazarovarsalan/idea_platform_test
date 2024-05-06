import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITransfers {
  Все: boolean;
  'Без пересадок': boolean;
  '1 пересадка': boolean;
  '2 пересадки': boolean;
  '3 пересадки': boolean;
}

type TransfersState = {
  transfers: ITransfers;
};

const initialState: TransfersState = {
  transfers: {
    Все: true,
    'Без пересадок': true,
    '1 пересадка': true,
    '2 пересадки': true,
    '3 пересадки': true,
  },
};

export type Transfer = keyof ITransfers;

interface IPayloadMarkTransfer {
  name: Transfer;
  checked: boolean;
}

type IPayloadMarkOne = Pick<IPayloadMarkTransfer, 'name'>;

const transfersSlice = createSlice({
  name: 'transfers',
  initialState,
  reducers: {
    markTransfer: (state, action: PayloadAction<IPayloadMarkTransfer>) => {
      if (action.payload.name === 'Все') {
        if (action.payload.checked) {
          state.transfers = {
            Все: true,
            'Без пересадок': true,
            '1 пересадка': true,
            '2 пересадки': true,
            '3 пересадки': true,
          };
        } else {
          state.transfers = {
            Все: false,
            'Без пересадок': false,
            '1 пересадка': false,
            '2 пересадки': false,
            '3 пересадки': false,
          };
        }

        return;
      }

      state.transfers = {
        ...state.transfers,
        Все: false,
        [action.payload.name]: !state.transfers[action.payload.name],
      };
    },
    markOneTransfer: (state, action: PayloadAction<IPayloadMarkOne>) => {
      state.transfers = {
        Все: false,
        'Без пересадок': false,
        '1 пересадка': false,
        '2 пересадки': false,
        '3 пересадки': false,
        [action.payload.name]: true,
      };
    },
  },
});

export const { markTransfer, markOneTransfer } = transfersSlice.actions;

export default transfersSlice.reducer;
