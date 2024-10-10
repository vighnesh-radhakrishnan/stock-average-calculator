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

  return (
    <AveragePriceWrapper>
      <h3>Average Stock Price: ${calculateAverage()}</h3>
    </AveragePriceWrapper>
  );
};

export default AveragePrice;
