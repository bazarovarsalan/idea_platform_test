import { useState, useEffect } from 'react';
import { numberWithSpaces } from '../lib/numberWithSpaces';

interface ICurrency {
  ID: string;
  Name: string;
  Nominal: number;
  NumCode: string;
  Previous: number;
  Value: number;
}

interface IRates {
  EUR: ICurrency;
  USD: ICurrency;
}

export interface ICurrentCurrency {
  RUB: string;
  EUR: string | undefined;
  USD: string | undefined;
}

const useCurrencyRate = (price: number) => {
  const [rates, setRates] = useState<IRates>();
  const [currencies, setCurrencies] = useState<ICurrentCurrency | null>(null);

  const exchangeRate = async () => {
    const response = await fetch(
      `https://www.cbr-xml-daily.ru/daily_json.js`, // getting current rate from Central bank of Russia
    );
    if (!response.ok) {
      throw new Error('HTTP error, status = ' + response.status);
    }

    const data = await response.json();

    const { EUR, USD } = data.Valute;
    setRates({ EUR, USD });
  };

  useEffect(() => {
    exchangeRate();
  }, []);

  useEffect(() => {
    setCurrencies({
      RUB: `${numberWithSpaces(price)}₽.`,
      USD:
        rates && `${numberWithSpaces(Math.floor(price / rates?.USD.Value))}$`,
      EUR:
        rates && `${numberWithSpaces(Math.floor(price / rates?.EUR.Value))}€`,
    });
  }, [rates, price]);

  return currencies;
};

export default useCurrencyRate;
