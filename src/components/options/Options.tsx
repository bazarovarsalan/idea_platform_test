import './Options.css';
import Currency from './currency/Currency';
import Transfers from './transfers/Transfers';

const Options = () => {
  return (
    <div className="options">
      <Currency />
      <Transfers />
    </div>
  );
};

export default Options;
