import React from "react";
import { StockListWrapper } from "./Containers"; // Import the wrapper
import { ReactComponent as CrossIcon } from "../icons/CrossIcon.svg";
const StockList = ({ stocks, setStocks }) => {
  const handleDelete = (indexToDelete) => {
    const updatedStocks = stocks.filter((_, index) => index !== indexToDelete);
    setStocks(updatedStocks);
  };

  return (
    <StockListWrapper>
      <h3>Stock List</h3>
      <div className="stock-grid">
        {" "}
        {stocks.map((stock, index) => (
          <div className="stock-item" key={index}>
            <CrossIcon
              className="delete-icon"
              onClick={() => handleDelete(index)}
              width="24px"
              height="24px"
            />
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
