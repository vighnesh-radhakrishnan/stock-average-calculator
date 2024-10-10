// src/components/StockList.js
import React from "react";
import { StockListWrapper } from "./Containers"; // Import the wrapper

const StockList = ({ stocks }) => {
  return (
    <StockListWrapper>
      <h3>Stock List</h3>
      {stocks.map((stock, index) => (
        <div className="stock-item" key={index}>
          <span>Price: ${stock.price}</span>
          <span>Quantity: {stock.quantity}</span>
        </div>
      ))}
    </StockListWrapper>
  );
};

export default StockList;
