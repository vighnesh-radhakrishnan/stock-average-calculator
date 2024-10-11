// src/components/Form.js
import React, { useState } from "react";
import { FormWrapper } from "./Containers"; // Import the styled container

const Form = ({ addStock }) => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (price && quantity) {
      addStock(parseFloat(price), parseInt(quantity));
      setPrice("");
      setQuantity("");
    }
  };

  return (
    <FormWrapper>
      <div className="formContainer">
        <h3>Add Stock</h3>
        <div className="formInput">
          <input
            type="number"
            placeholder="Stock Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Add</button>
      </div>
    </FormWrapper>
  );
};

export default Form;
