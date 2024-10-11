import React from "react";
import { StockListWrapper } from "./Containers"; // Import the wrapper

const StockList = ({ stocks }) => {
  return (
    <StockListWrapper>
      <h3>Stock List</h3>
      <div className="stock-grid">
        {" "}
        {stocks.map((stock, index) => (
          <div className="stock-item" key={index}>
            <div>Purchase {index + 1}</div>
            <div>Price: {stock.price}</div>
            <div>Quantity: {stock.quantity}</div>
          </div>
        ))}
      </div>
    </StockListWrapper>
  );
};

export default StockList;
