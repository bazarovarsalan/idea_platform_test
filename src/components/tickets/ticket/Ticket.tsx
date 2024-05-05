import '../TicketsList.css';
import { ITicket } from '../../../redux/slices/ticketsSlice';
import { logos, ILogos } from '../../../lib/logos';
import { convertDate } from '../../../lib/convertDate';
import { wordHelper } from '../../../lib/wordHelper';
import traceImg from '../../../assets/images/trace_airplane.png';
import useCurrencyRate from '../../../lib/useCurrencyRate';
import { TCurrency } from '../../../redux/slices/currencySlice';
import { useAppSelector } from '../../../redux/hooks';
import { memo } from 'react';

interface TicketProps {
  ticket: ITicket;
}

const Ticket = memo(({ ticket }: TicketProps) => {
  const rateExchange = useCurrencyRate(ticket.price); // this custom hook gets current rate from Central bank of Russia and returs right necessary format
  const currency = useAppSelector((state) => state.currency.currency);

  return (
    <div className="ticket-card">
      <div className="ticket-card_left">
        <img
          className="ticket-card_left_img"
          src={logos[ticket.carrier as keyof ILogos]}
          alt="carrier logo"
        />
        <button
          className="ticket-card_left_button"
          onClick={() => alert(' Congratulations! You have bought a ticket')}
        >
          Купить <br /> за {rateExchange && rateExchange[currency as TCurrency]}
        </button>
      </div>
      <div className="ticket-card_right">
        <div className="ticket-card_right_departure-info">
          <h3 className="ticket-card_right_time">{ticket.departure_time}</h3>
          <p className="ticket-card_right_city">
            {ticket.origin}, {ticket.origin_name}
          </p>
          <p className="ticket-card_right_date">
            {convertDate(ticket.arrival_date)}
          </p>
        </div>
        <div className="ticket-card_right_transfer">
          <h3 className="ticket-card_right_transfer_quantity">
            {wordHelper(ticket.stops)}
          </h3>
          <div className="ticket-card_right_transfer_trace_img_container">
            <img
              className="ticket-card_right_transfer_trace_img"
              src={traceImg}
              alt="trace"
            />
          </div>
        </div>
        <div className="ticket-card_right_arrival-info">
          <h3 className="ticket-card_right_time">{ticket.arrival_time}</h3>
          <p className="ticket-card_right_city">
            {ticket.destination}, {ticket.destination_name}
          </p>
          <p className="ticket-card_right_date">
            {convertDate(ticket.departure_date)}
          </p>
        </div>
      </div>
    </div>
  );
});

export default Ticket;
