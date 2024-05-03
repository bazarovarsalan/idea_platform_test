import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../../data/tickets.json";

export interface ITicket {
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  departure_date: string;
  departure_time: string;
  destination: string;
  destination_name: string;
  origin: string;
  origin_name: string;
  price: number;
  stops: number;
}

type TicketsState = {
  tickets: ITicket[];
};

const initialState: TicketsState = {
  tickets: data.tickets,
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    resetTickets: (state) => {
      state.tickets = data.tickets;
    },
    filterTickets: (state, action: PayloadAction<string[]>) => {
      let result: ITicket[] = [];

      for (const transfer of action.payload) {
        switch (transfer) {
          case "Все":
            result = data.tickets;
            return;
          case "Без пересадок":
            result.push(...data.tickets.filter((ticket) => ticket.stops === 0));
            break;

          case "1 пересадка":
            result.push(...data.tickets.filter((ticket) => ticket.stops === 1));
            break;

          case "2 пересадки":
            result.push(...data.tickets.filter((ticket) => ticket.stops === 2));
            break;

          case "3 пересадки":
            result.push(...data.tickets.filter((ticket) => ticket.stops === 2));
            break;
        }
      }
      console.log(result);
      result.sort((a, b) => a.stops - b.stops);

      state.tickets = result;
    },
  },
});

export const { resetTickets, filterTickets } = ticketsSlice.actions;

export default ticketsSlice.reducer;
