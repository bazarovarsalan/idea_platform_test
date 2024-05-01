export interface ITickets {
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

export interface ITransitions {
  Все: boolean;
  "Без пересадок": boolean;
  "1 пересадка": boolean;
  "2 пересадки": boolean;
  "3 пересадки": boolean;
}

export type Currency = "RUB" | "USD" | "EUR";
