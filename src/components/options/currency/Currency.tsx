import { TCurrency } from "../../../redux/slices/currencySlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { changeCurrency } from "../../../redux/slices/currencySlice";

const Currency = () => {
  const dispatch = useAppDispatch();
  const currentCurrency = useAppSelector((state) => state.currency.currency);
  const onClick = (event: React.MouseEvent<EventTarget>) => {
    const { innerHTML } = event.target as HTMLElement;
    dispatch(changeCurrency(innerHTML as TCurrency));
  };

  return (
    <div className="options_currency">
      <h5 className="options_currency_title title">ВАЛЮТА</h5>
      <div className="options_currency_buttons-wrapper">
        <button
          className={
            currentCurrency === "RUB"
              ? "options_currency_button active"
              : "options_currency_button"
          }
          onClick={onClick}
        >
          RUB
        </button>
        <button
          className={
            currentCurrency === "USD"
              ? "options_currency_button active"
              : "options_currency_button"
          }
          onClick={onClick}
        >
          USD
        </button>
        <button
          className={
            currentCurrency === "EUR"
              ? "options_currency_button active"
              : "options_currency_button"
          }
          onClick={onClick}
        >
          EUR
        </button>
      </div>
    </div>
  );
};

export default Currency;
