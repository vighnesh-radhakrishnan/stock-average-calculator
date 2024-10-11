// src/App.js
import React, { useState } from "react";
import Form from "./components/Form";
import StockList from "./components/StockList";
import AveragePrice from "./components/AveragePrice";
import Footer from "./components/Footer";
import { AppWrapper } from "./components/Containers"; // Import the new wrapper

const App = () => {
  const [stocks, setStocks] = useState([]);

  const addStock = (price, quantity) => {
    setStocks([...stocks, { price, quantity }]);
  };

  return (
    <AppWrapper>
      <div className="title">
        <h1>Stock Average Calculator</h1>
      </div>
      <Form addStock={addStock} />
      {stocks.length > 0 && (
        <>
          <StockList stocks={stocks} />
          <AveragePrice stocks={stocks} />
        </>
      )}
      <Footer />
    </AppWrapper>
  );
};

export default App;
