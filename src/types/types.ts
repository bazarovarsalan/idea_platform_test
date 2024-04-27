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
  all: boolean;
  0: boolean;
  1: boolean;
  2: boolean;
  3: boolean;
}
