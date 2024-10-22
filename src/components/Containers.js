import styled from "styled-components";

export const FormWrapper = styled.div`
  margin: 20px;
  background-color: ${(props) =>
    props.theme.background}; /* Light paper-like background */
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
    color: ${(props) =>
      props.theme.text}; /* Black text for hand-drawn effect */
    font-family: "Patrick Hand", cursive; /* Hand-drawn style font */
    margin-bottom: 15px;
    text-align: center; /* Center the title */
  }

  input {
    padding: 10px;
    margin: 5px 0;
    border: 1px dashed ${(props) => props.theme.borderColor}; /* Dotted input border */
    background-color: ${(props) =>
      props.theme.inputBackground}; /* Light background */
    color: ${(props) => props.theme.inputText};
    font-family: "Patrick Hand", cursive;
    width: 100%; /* Full width for input */

    &:focus {
      outline: none;
      border-color: ${(props) =>
        props.theme.borderColor}; /* Black border on focus */
    }
  }

  button {
    padding: 10px;
    background-color: ${(props) =>
      props.theme.buttonBackground}; /* Black button */
    color: ${(props) => props.theme.buttonText};
    border: 1px solid ${(props) => props.theme.borderColor}; /* Thin black border */
    cursor: pointer;
    margin-top: 10px;
    border-radius: 50px;
    font-family: "Patrick Hand", cursive;
    transition: background-color 0.3s ease;
    width: 50%; /* Full width for button */

    &:hover {
      border: 1px dashed ${(props) => props.theme.borderColor};
      background-color: ${(props) => props.theme.background};
      color: ${(props) => props.theme.hoverButtonText};
    }
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 1.2rem; /* Smaller font for mobile */
    }

    button {
      font-size: 0.9rem; /* Smaller button text */
      padding: 8px;
    }
  }
`;

export const StockListWrapper = styled.div`
  margin: 20px;
  background-color: ${(props) => props.theme.background};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: ${(props) => props.theme.text};
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
    position: relative;
    background-color: ${(props) => props.theme.background};
    padding: 15px;
    border: 1px dashed ${(props) => props.theme.borderColor};
    color: ${(props) => props.theme.text};
    font-family: "Patrick Hand", cursive;
    text-align: center;
    width: 120px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      box-shadow: 0 0 10px ${(props) => props.theme.boxShadow};
    }

    .delete-icon {
      position: absolute;
      top: 5px;
      right: 5px;
      cursor: pointer;
      fill: ${(props) => props.theme.text};
      width: 20px;
      height: 20px;
      transition: transform 0.2s;
    }

    .delete-icon:hover {
      transform: scale(1.2);
      fill: red;
    }
  }

  @media (max-width: 600px) {
    .stock-item {
      width: 80px;
      height: 80px;
    }

    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const AveragePriceWrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  padding-bottom: 10px;

  h3 {
    color: ${(props) => props.theme.text};
    font-family: "Patrick Hand", cursive;
    text-align: center; /* Center the text */
  }

  .avgPrice {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px dashed ${(props) => props.theme.borderColor};
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin: 0 auto; /* Center the avgPrice block */
    width: fit-content;
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 1rem;
    }

    .avgPrice {
      padding: 15px; /* Adjust padding for mobile */
    }
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
    border: 1px dashed ${(props) => props.theme.borderColor};
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
  background-color: ${(props) =>
    props.theme.background}; /* Paper-like background */
  color: ${(props) => props.theme.text}; /* Black text for contrast */
  min-height: 100vh;
  padding: 20px;
  font-family: "Patrick Hand", cursive;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    .title {
      font-size: 1rem;
    }

    .themeButton {
      font-size: 0.9rem;
      padding: 6px 12px;
    }
  }
`;

export const FooterWrapper = styled.div`
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 15px;
    color: ${(props) => props.theme.text};
    text-align: center;
    background-color: ${(props) =>
      props.theme.background}; /* You can change the background color */
    padding: 5px 0; /* Adjust padding as needed */
  }

  @media (max-width: 600px) {
    .footer {
      font-size: 13px; /* Smaller font for mobile */
    }
  }
`;
