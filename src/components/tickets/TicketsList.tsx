import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Ticket from "./ticket/Ticket";
import { useEffect } from "react";
import { ITransfers } from "../../redux/slices/transfersSlice";
import { filterTickets } from "../../redux/slices/ticketsSlice";

const TicketsList = () => {
  const dispatch = useAppDispatch();
  const tickets = useAppSelector((state) => state.tickets.tickets);

  const transfers = useAppSelector((state) => state.transfers.transfers);

  useEffect(() => {
    const markedTransfers = [];
    for (let key in transfers) {
      if (transfers[key as keyof ITransfers]) {
        markedTransfers.push(key);
      }
    }

    dispatch(filterTickets(markedTransfers));
  }, [transfers]);
  return (
    <div className="ticketsList_container">
      {tickets.map((ticket) => {
        return (
          <Ticket
            key={`${ticket.arrival_time} + ${ticket.departure_time} + ${ticket.origin}`}
            ticket={ticket}
          />
        );
      })}
    </div>
  );
};

export default TicketsList;
