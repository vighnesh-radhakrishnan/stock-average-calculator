import React, { useState } from "react";
import { StockListWrapper } from "./Containers";
import { ReactComponent as CrossIcon } from "../icons/CrossIcon.svg";
import { ReactComponent as EditIcon } from "../icons/EditIcon.svg";

const StockList = ({ stocks, setStocks }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editStock, setEditStock] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const calculateStats = () => {
    const totalCost = stocks.reduce(
      (sum, stock) => sum + stock.price * stock.quantity,
      0
    );
    const totalUnits = stocks.reduce((sum, stock) => sum + stock.quantity, 0);
    const averagePrice = stocks.length
      ? (totalCost / totalUnits).toFixed(2)
      : 0;
    return { totalCost, totalUnits, averagePrice };
  };

  const { totalCost, totalUnits, averagePrice } = calculateStats();

  const handleDelete = (indexToDelete) => {
    const updatedStocks = stocks.filter((_, index) => index !== indexToDelete);
    setStocks(updatedStocks);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditStock(stocks[index]);
  };

  const handleSave = () => {
    const updatedStocks = [...stocks];
    updatedStocks[editIndex] = {
      ...editStock,
      price: parseFloat(editStock.price),
      quantity: parseInt(editStock.quantity, 10),
    };
    setStocks(updatedStocks);
    setEditIndex(null);
    setEditStock({ name: "", price: "", quantity: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditStock((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <StockListWrapper>
      <div className="stock-grid">
        {stocks.map((stock, index) => (
          <div className="stock-item" key={index}>
            <EditIcon
              className="edit-icon"
              onClick={() => handleEditClick(index)}
              width="24px"
              height="24px"
            />
            <CrossIcon
              className="delete-icon"
              onClick={() => handleDelete(index)}
              width="24px"
              height="24px"
            />
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  name="name"
                  value={editStock.name}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  name="price"
                  value={editStock.price}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  name="quantity"
                  value={editStock.quantity}
                  onChange={handleInputChange}
                />
                <button onClick={handleSave}>Save</button>
              </div>
            ) : (
              <div>
                <div>{stock.name}</div>
                <div>Price: {stock.price}</div>
                <div>Quantity: {stock.quantity}</div>
                <div>Cost: {stock.quantity * stock.price}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </StockListWrapper>
  );
};

export default StockList;
