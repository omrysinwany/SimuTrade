import React, { useEffect } from "react";

function TradingViewChart() {
  useEffect(() => {
    new window.TradingView.widget({
      width: 980,
      height: 610,
      symbol: "NASDAQ:AAPL", // סמך המניה להציג
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_chart",
    });
  }, []);

  return <div id="tradingview_chart" style={{ height: "610px" }}></div>;
}

export default TradingViewChart;
