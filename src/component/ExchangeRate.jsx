import React from "react";

const ExchangeRate = ({ exchangeRate, primaryCurrency, SecondaryCurrency }) => {
  return (
    <div className="exchange-rate">
      <h1>Exchange Rate</h1>
      <h2>{exchangeRate}</h2>
      <p>
        {primaryCurrency} to {SecondaryCurrency}
      </p>
    </div>
  );
};

export default ExchangeRate;
