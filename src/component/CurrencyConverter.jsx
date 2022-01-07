import React from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";
import { useState } from "react";
const CurrencyConverter = () => {
  const [primaryCurrency, setPrimaryCurrency] = useState("BTC");
  const [SecondaryCurrency, setSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);

  const currencies = ["BTC", "XRP", "ADA", "LTC", "USD", "SAR", "ETH"];

  const convert = () => {
    const options = {
      method: "GET",
      url: "http://localhost:5000/convert",
      params: {
        from_currency: primaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: SecondaryCurrency,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setExchangeRate(response.data);
        setResult(response.data * amount);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="currency-converter">
      <table>
        <tbody>
          <tr>
            <td>Primary Currency</td>
            <td>
              <input
                type="text"
                name="currency-amount-1"
                className="form__input"
                placeholder="Amount"
                onChange={(e) => setAmount(e.target.value)}
              />
            </td>
            <td>
              <select
                name="currency-option-1"
                className="option-1"
                onChange={(e) => setPrimaryCurrency(e.target.value)}
              >
                {currencies.map((currency, index) => (
                  <option key={index}>{currency}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Secondary Currency</td>
            <td>
              <input
                type="text"
                name="currency-amount-2"
                className="form__input"
                value={result}
                disabled
              />
            </td>
            <td>
              <select
                name="currency-option-2"
                className="option-1"
                onChange={(e) => setSecondaryCurrency(e.target.value)}
              >
                {currencies.map((currency, index) => (
                  <option key={index}>{currency}</option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="convert-btn" onClick={convert}>
        Convert
      </button>
      <br />
      <ExchangeRate
        exchangeRate={exchangeRate}
        primaryCurrency={primaryCurrency}
        SecondaryCurrency={SecondaryCurrency}
      />
    </div>
  );
};

export default CurrencyConverter;
