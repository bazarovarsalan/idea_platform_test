import { url } from "inspector";
import { useState } from "react";
import "./App.css";
import data from "./data/tickets.json";
import { ITickets } from "./types/types";
import Options from "./components/options/Options";
import Logo from "./components/logo/Logo";

function App() {
  const [tickets, setTickets] = useState<ITickets[]>(data.tickets);

  return (
    <div className="App">
      <Logo />
      <div className="container">
        <Options />
      </div>
    </div>
  );
}

export default App;
