import styled from "styled-components";

export const FormWrapper = styled.div`
  margin: 20px;
  background-color: #f9f9f9; /* Light paper-like background */
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Ensure elements are stacked vertically */

  .formContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .formInput {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    color: #000; /* Black text for hand-drawn effect */
    font-family: "Patrick Hand", cursive; /* Hand-drawn style font */
    margin-bottom: 15px;
    text-align: center; /* Center the title */
  }

  input {
    padding: 10px;
    margin: 5px 0;
    border: 1px dashed #000; /* Dotted input border */
    background-color: #fff; /* Light background */
    color: #000;
    font-family: "Patrick Hand", cursive;
    width: 100%; /* Full width for input */

    &:focus {
      outline: none;
      border-color: #000; /* Black border on focus */
    }
  }

  button {
    padding: 10px;
    background-color: #000; /* Black button */
    color: #fff;
    border: 1px solid #000; /* Thin black border */
    cursor: pointer;
    margin-top: 10px;
    border-radius: 50px;
    font-family: "Patrick Hand", cursive;
    transition: background-color 0.3s ease;
    width: 50%; /* Full width for button */

    &:hover {
      background-color: #555; /* Darker gray on hover */
    }
  }
`;

export const StockListWrapper = styled.div`
  margin: 20px;
  background-color: #f9f9f9; /* Light paper-like background */
  border: 1px dashed #000; /* Dotted border */
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  h3 {
    color: #000;
    font-family: "Patrick Hand", cursive;
  }

  .stock-item {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    background-color: #fff; /* Light background */
    padding: 15px;
    border: 1px dashed #000; /* Dotted border */
    color: #000;
    font-family: "Patrick Hand", cursive;

    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Subtle shadow on hover */
    }
  }
`;

export const AveragePriceWrapper = styled.div`
  margin: 20px;
  background-color: #f9f9f9;
  border: 1px dashed #000;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  h3 {
    color: #000;
    font-family: "Patrick Hand", cursive;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9; /* Paper-like background */
  color: #000; /* Black text for contrast */
  min-height: 100vh;
  padding: 20px;
  font-family: "Patrick Hand", cursive;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for layering */
`;
