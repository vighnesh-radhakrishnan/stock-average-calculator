import styled from "styled-components";

export const FormWrapper = styled.div`
  margin: 20px;
  background-color: #f9f9f9; /* Light paper-like background */
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
      border: 1px dashed #000;
      background-color: #fff; /* Darker gray on hover */
      color: #000;
    }
  }
`;

export const StockListWrapper = styled.div`
  margin: 20px;
  background-color: #f9f9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #000;
    font-family: "Patrick Hand", cursive;
    text-align: center;
    margin-bottom: 20px;
  }

  .stock-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }

  .stock-item {
    background-color: #fff;
    padding: 15px;
    border: 1px dashed #000; /* Dotted border */
    color: #000;
    font-family: "Patrick Hand", cursive;
    text-align: center;
    width: 120px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Subtle shadow on hover */
    }
  }
`;

export const AveragePriceWrapper = styled.div`
  background-color: #f9f9f9;

  h3 {
    color: #000;
    font-family: "Patrick Hand", cursive;
    text-align: center; /* Center the text */
  }

  .avgPrice {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px dashed #000;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin: 0 auto; /* Center the avgPrice block */
    width: fit-content;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    position: relative;
  }

  .titleWrapper {
    position: absolute;
    left: 50%; /* Moves the title to the middle */
    transform: translateX(-50%); /* Centers the title */
  }

  .themeIcon {
    margin-left: auto; /* Pushes the icon to the far right */
  }

  .themeButton {
    background: transparent;
    color: white;
    border: 1px dashed #000;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: "8px";
    cursor: pointer;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  background-color: #f9f9f9; /* Paper-like background */
  color: #000; /* Black text for contrast */
  min-height: 100vh;
  padding: 20px;
  font-family: "Patrick Hand", cursive;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for layering */
`;

export const FooterWrapper = styled.div`
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 15px;
    text-align: center;
    background-color: #f8f9fa; /* You can change the background color */
    padding: 5px 0; /* Adjust padding as needed */
  }
`;
