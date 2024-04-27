import { useState } from "react";
import "./App.css";
import data from "./data/tickets.json";
import { ITickets, ITransitions } from "./types/types";

function App() {
  const [tickets, setTickets] = useState<ITickets[]>(data.tickets);
  const [transitions, useTransitions] = useState<ITransitions>({
    all: false,
    0: false,
    1: false,
    2: false,
    3: false,
  });

  return (
    <div className="App">
      <p>asd</p>
    </div>
  );
}

export default App;
