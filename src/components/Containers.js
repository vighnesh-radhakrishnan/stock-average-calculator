import styled from "styled-components";

export const FormWrapper = styled.div`
  margin: 20px;
  background-color: ${(props) => props.theme.background}; 
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
    color: ${(props) => props.theme.text}; 
    font-family: "Patrick Hand", cursive; 
    margin-bottom: 15px;
    text-align: center; 
  }

  input {
    padding: 10px;
    margin: 5px 0;
    border: 1px dashed ${(props) => props.theme.borderColor}; 
    background-color: ${(props) => props.theme.inputBackground}; 
    color: ${(props) => props.theme.inputText};
    font-family: "Patrick Hand", cursive;
    width: 100%; 

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.borderColor}; 
    }
  }

  button {
    padding: 10px;
    background-color: ${(props) => props.theme.buttonBackground};
    color: ${(props) => props.theme.buttonText};
    border: 1px solid ${(props) => props.theme.borderColor}; 
    cursor: pointer;
    margin-top: 10px;
    border-radius: 50px;
    font-family: "Patrick Hand", cursive;
    transition: background-color 0.3s ease;
    width: 50%; 

    &:hover {
      border: 1px dashed ${(props) => props.theme.borderColor};
      background-color: ${(props) => props.theme.background};
      color: ${(props) => props.theme.hoverButtonText};
    }
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 1.2rem; /
    }

    button {
      font-size: 0.9rem; 
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
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      box-shadow: 0 0 10px ${(props) => props.theme.boxShadow};
    }

    .delete-icon,
    .edit-icon {
      position: absolute;
      top: 5px;
      cursor: pointer;
      fill: ${(props) => props.theme.text};
      width: 20px;
      height: 20px;
      transition: transform 0.2s;
    }

    .edit-icon {
      left: 5px;
    }

    .delete-icon {
      right: 5px;
    }

    .delete-icon:hover {
      transform: scale(1.1);
      fill: red;
    }

    .edit-icon:hover {
      transform: scale(1.1);
      fill: #69dbb7;
    }

    input {
      width: 100%;
      margin: 5px 0;
      padding: 10px;
      font-family: "Patrick Hand", cursive;
      border: 1px dashed ${(props) => props.theme.borderColor};
      background-color: ${(props) => props.theme.inputBackground};
      color: ${(props) => props.theme.text};
      text-align: center;

      &:focus {
        outline: none;
        border-color: ${(props) => props.theme.borderColor};
      }
    }

    .edit-actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      button {
        padding: 5px;
        background-color: ${(props) => props.theme.buttonBackground};
        color: ${(props) => props.theme.buttonText};
        border: 1px solid ${(props) => props.theme.borderColor};
        cursor: pointer;
        margin-top: 5px;
        border-radius: 50px;
        font-family: "Patrick Hand", cursive;
        transition: background-color 0.3s ease;
        width: 50%;

        &:hover {
          border: 1px dashed ${(props) => props.theme.borderColor};
          background-color: ${(props) => props.theme.background};
          color: ${(props) => props.theme.hoverButtonText};
        }
      }
    }
  }

  @media (max-width: 480px) {
    .stock-item {
      width: 80px;
      height: 100px;
      padding-top: 20px;

      .delete-icon,
      .edit-icon {
        width: 15px;
        height: 15px;
      }

      input {
        width: 70px;
        font-size: 0.8rem;
      }

      button {
        font-size: 0.7rem;
      }
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
    text-align: center;
  }

  .avgPrice {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px dashed ${(props) => props.theme.borderColor};
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    width: fit-content;
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 1rem;
    }

    .avgPrice {
      padding: 15px;
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
    left: 50%;
    transform: translateX(-50%);
  }

  .themeIcon {
    margin-left: auto;
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
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
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
    background-color: ${(props) => props.theme.background};
    padding: 5px 0;
  }

  @media (max-width: 600px) {
    .footer {
      font-size: 13px;
    }
  }
`;
