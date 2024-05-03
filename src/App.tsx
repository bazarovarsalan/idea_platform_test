import "./App.css";
import Options from "./components/options/Options";
import Logo from "./components/logo/Logo";
import TicketsList from "./components/tickets/TicketsList";

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="container">
        <Options />
        <TicketsList />
      </div>
    </div>
  );
}

export default App;
