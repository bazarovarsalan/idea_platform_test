import "./TicketsList.css";
import { ITicket } from "../../../redux/slices/ticketsSlice";
import { logos, ILogos } from "../../../lib/logos";
import { convertDate } from "../../../lib/convertDate";
import { wordHelper } from "../../../lib/wordHelper";
import traceImg from "../../../assets/images/trace_airplane.png";

interface TicketProps {
  ticket: ITicket;
}

const Ticket = ({ ticket }: TicketProps) => {
  return (
    <div className="ticket-card">
      <div className="ticket-card_left">
        <img
          className="ticket-card_left_img"
          src={logos[ticket.carrier as keyof ILogos]}
        />
        <button className="ticket-card_left_button">
          Купить <br /> за {ticket.price}р.
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
};

export default Ticket;
