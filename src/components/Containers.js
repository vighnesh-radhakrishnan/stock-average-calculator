// src/components/Containers.js
import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  h3 {
    color: #ffffff; /* Styling for the heading inside the wrapper */
  }

  input {
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #2d2d30;
    color: #ffffff; /* Ensure text is readable on dark background */
  }

  button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
      background-color: #45a049;
    }
  }
`;

export const StockListWrapper = styled.div`
  margin: 20px;

  h3 {
    color: #ffffff;
  }

  .stock-item {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    background-color: #2d2d30;
    padding: 10px;
    border-radius: 4px;
    color: #ffffff;
  }
`;

export const AveragePriceWrapper = styled.div`
  margin: 20px;
  h3 {
    color: #ffffff;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e1e1e; // Dark background to match VS Code
  color: #ffffff; // White text for better contrast
  min-height: 100vh; // Make sure it covers full height
  padding: 20px;
`;
