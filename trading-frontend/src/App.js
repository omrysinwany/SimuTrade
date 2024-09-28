import React, { useEffect, useState } from "react";
import axios from "axios";
import StockChart from "./components/StockChart";
import TradingViewChart from "./components/TradingViewChart";

function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/stocks/")
      .then((response) => {
        setStocks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the stocks!", error);
      });
  }, []);

  return (
    <div>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.id}>
            {stock.symbol} - {stock.name} : ${stock.current_price}
          </li>
        ))}
      </ul>
      <h1>גרף מניות</h1>
      <StockChart data={stockData} />
      <h1>Stock Market Simulation</h1>
      <TradingViewChart />
    </div>
  );
}

export default App;
