import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const StockChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const chart = createChart(chartRef.current, {
      width: chartRef.current.clientWidth,
      height: chartRef.current.clientHeight,
    });

    const lineSeries = chart.addLineSeries({
      color: "#2196F3",
      lineWidth: 2,
    });

    // Adding data to the chart
    lineSeries.setData(data);

    // Resize the chart on window resize
    const handleResize = () => {
      chart.resize(chartRef.current.clientWidth, chartRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove(); // Clean up chart
    };
  }, [data]);

  return (
    <div
      ref={chartRef}
      style={{ position: "relative", width: "100%", height: "400px" }}
    />
  );
};

export default StockChart;
