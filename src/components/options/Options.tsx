import "./Options.css";
import React, { useState } from "react";
import { ITransitions, Currency } from "../../types/types";

const Options = () => {
  const [transitions, setTransitions] = useState<ITransitions>({
    Все: false,
    "Без пересадок": false,
    "1 пересадка": false,
    "2 пересадки": false,
    "3 пересадки": false,
  });

  const [currentCurrency, setCurrentCurrency] = useState<Currency>("RUB");

  const onClickCurrency = (event: React.MouseEvent<EventTarget>) => {
    const { innerHTML } = event.target as HTMLElement;
    setCurrentCurrency(innerHTML as Currency);
  };

  const transitionsHandleChange = (event: any) => {
    const { name } = event.target;
    const { checked } = event.target;
    console.log(event);

    if (name === "Все") {
      if (checked) {
        setTransitions({
          Все: true,
          "Без пересадок": true,
          "1 пересадка": true,
          "2 пересадки": true,
          "3 пересадки": true,
        });
      } else {
        setTransitions({
          Все: false,
          "Без пересадок": false,
          "1 пересадка": false,
          "2 пересадки": false,
          "3 пересадки": false,
        });
      }

      return;
    }
    setTransitions((prev) => ({
      ...prev,
      [name]: !prev[name as keyof ITransitions],
    }));
  };

  return (
    <div className="options">
      <div className="options_currency">
        <h5 className="options_currency_title title">ВАЛЮТА</h5>
        <div className="options_currency_buttons-wrapper">
          <button
            className={
              currentCurrency === "RUB"
                ? "options_currency_button active"
                : "options_currency_button"
            }
            onClick={onClickCurrency}
          >
            RUB
          </button>
          <button
            className={
              currentCurrency === "USD"
                ? "options_currency_button active"
                : "options_currency_button"
            }
            onClick={onClickCurrency}
          >
            USD
          </button>
          <button
            className={
              currentCurrency === "EUR"
                ? "options_currency_button active"
                : "options_currency_button"
            }
            onClick={onClickCurrency}
          >
            EUR
          </button>
        </div>
      </div>
      <div className="options_transfers">
        <h5 className="options_transfers_title title">КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
        <div
          className="options_transfers_form-group"
          onChange={transitionsHandleChange}
        >
          <label>
            <input
              type="checkbox"
              name="Все"
              className="real-checkbox"
              checked={transitions["Все"]}
            />
            <span className="custom-checkbox"></span>
            Все
          </label>
        </div>
        <div
          className="options_transfers_form-group"
          onChange={transitionsHandleChange}
        >
          <label>
            <input
              type="checkbox"
              name="Без пересадок"
              className="real-checkbox"
              checked={transitions["Без пересадок"]}
            />
            <span className="custom-checkbox"></span>
            Без пересадок
          </label>
          <p>только</p>
        </div>
        <div
          className="options_transfers_form-group"
          onChange={transitionsHandleChange}
        >
          <label>
            <input
              type="checkbox"
              name="1 пересадка"
              className="real-checkbox"
              checked={transitions["1 пересадка"]}
            />
            <span className="custom-checkbox"></span>1 пересадка
          </label>
          <p>только</p>
        </div>
        <div
          className="options_transfers_form-group"
          onChange={transitionsHandleChange}
        >
          <label>
            <input
              type="checkbox"
              name="2 пересадки"
              className="real-checkbox"
              checked={transitions["2 пересадки"]}
            />
            <span className="custom-checkbox"></span>2 пересадки
          </label>
          <p>только</p>
        </div>
        <div
          className="options_transfers_form-group"
          onChange={transitionsHandleChange}
        >
          <label>
            <input
              type="checkbox"
              name="3 пересадки"
              className="real-checkbox"
              checked={transitions["3 пересадки"]}
            />
            <span className="custom-checkbox"></span>3 пересадки
          </label>
          <p>только</p>
        </div>
      </div>
    </div>
  );
};

export default Options;
