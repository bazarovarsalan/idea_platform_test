import { useEffect, useState } from "react";
import "./App.css";
import data from "./data/tickets.json";
import { ITickets } from "./types/types";
import Options from "./components/options/Options";
import Logo from "./components/logo/Logo";

function App() {
  const [tickets, setTickets] = useState<ITickets[]>([]);

  // This useEffect emulates getting data from server
  useEffect(() => {
    setTickets(data.tickets);
  }, []);

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
