// src/App.js
import React, { useState } from "react";
import Form from "./components/Form";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes";
import StockList from "./components/StockList";
import AveragePrice from "./components/AveragePrice";
import Footer from "./components/Footer";
import { AppWrapper } from "./components/Containers";
import { ReactComponent as LightModeIcon } from "./icons/LightMode.svg";
import { ReactComponent as DarkModeIcon } from "./icons/DarkMode.svg";

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [darkThemeActive, setDarkThemeActive] = useState(false);

  const addStock = (price, quantity) => {
    setStocks([...stocks, { price, quantity }]);
  };

  const toggleTheme = () => {
    setDarkThemeActive((prevTheme) => !prevTheme);
  };

  return (
    <ThemeProvider theme={darkThemeActive ? darkTheme : lightTheme}>
      <AppWrapper>
        <div className="header">
          <div className="titleWrapper">
            <h1 className="title">Stock Average Calculator</h1>
          </div>
          <div className="themeIcon">
            <button className="themeButton" onClick={toggleTheme}>
              {darkThemeActive ? (
                <DarkModeIcon width="24px" height="24px" />
              ) : (
                <LightModeIcon width="24px" height="24px" />
              )}
            </button>
          </div>
        </div>
        <Form addStock={addStock} />
        {stocks.length > 0 && (
          <>
            <StockList stocks={stocks} setStocks={setStocks} />
            <AveragePrice stocks={stocks} />
          </>
        )}
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
