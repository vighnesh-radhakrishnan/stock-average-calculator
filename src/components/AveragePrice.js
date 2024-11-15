// src/components/AveragePrice.js
import React from "react";
import { AveragePriceWrapper } from "./Containers"; // Import the new wrapper

const AveragePrice = ({ stocks }) => {
  const calculateAverage = () => {
    const totalQuantity = stocks.reduce(
      (sum, stock) => sum + stock.quantity,
      0
    );
    const totalValue = stocks.reduce(
      (sum, stock) => sum + stock.price * stock.quantity,
      0
    );
    return totalQuantity === 0 ? 0 : (totalValue / totalQuantity).toFixed(2);
  };

  const calculateTotalAmount = () => {
    return stocks
      .reduce((sum, stock) => sum + stock.price * stock.quantity, 0)
      .toFixed(2);
  };

  const calculateTotalUnits = () => {
    return stocks.reduce((sum, stock) => sum + stock.quantity, 0); // Total units purchased
  };

  return (
    <AveragePriceWrapper>
      <div className="avgPrice">
        <h3>Total Units Purchased: {calculateTotalUnits()}</h3>
        <h3>Total Amount Invested: {calculateTotalAmount()}</h3>
        <h3>Average Stock Price: {calculateAverage()}</h3>
      </div>
    </AveragePriceWrapper>
  );
};

export default AveragePrice;
