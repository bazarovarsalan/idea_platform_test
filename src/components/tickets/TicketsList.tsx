import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Ticket from './ticket/Ticket';
import { useEffect } from 'react';
import { ITransfers } from '../../redux/slices/transfersSlice';
import { filterTickets } from '../../redux/slices/ticketsSlice';
import { createId } from '../../../src/lib/generateId';

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
  }, [transfers, dispatch]);
  return (
    <div className="ticketsList_container">
      {tickets.map((ticket) => {
        return <Ticket key={createId()} ticket={ticket} />;
      })}
    </div>
  );
};

export default TicketsList;
