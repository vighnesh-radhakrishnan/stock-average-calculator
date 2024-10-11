// src/App.js
import React, { useState } from "react";
import Form from "./components/Form";
import StockList from "./components/StockList";
import AveragePrice from "./components/AveragePrice";
import { AppWrapper } from "./components/Containers"; // Import the new wrapper

const App = () => {
  const [stocks, setStocks] = useState([]);

  const addStock = (price, quantity) => {
    setStocks([...stocks, { price, quantity }]);
  };

  return (
    <AppWrapper>
      <h1>Stock Average Calculator</h1>
      <Form addStock={addStock} />
      {stocks.length > 0 && (
        <>
          <StockList stocks={stocks} />
          <AveragePrice stocks={stocks} />
        </>
      )}
    </AppWrapper>
  );
};

export default App;
