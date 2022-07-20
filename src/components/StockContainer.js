import React, { useEffect } from "react";
import Stock from "./Stock";

function StockContainer( {setStocks, stocks, addStocktoMC, setPortfolio, portfolio } ) {
  
useEffect(()=>{
  fetch("http://localhost:3001/stocks")
    .then((resp)=>resp.json())
    .then((stocks)=>setStocks(stocks));
},[])

function addStock (addStock) {
  const stockInPortfolio = portfolio.find((stock)=>{
    return stock.id===addStock.id
  })
  if (!stockInPortfolio) {
    setPortfolio([...portfolio, addStock])
  }
}

const displayStocks = stocks.map((stock)=>{
  return <Stock companyName={stock.name} price={stock.price} id={stock.id} onStockClick={addStock} />
})

  return (
    <div>
      <h2>Stocks</h2>
      <div>{displayStocks}</div>
    </div>
  );
}

export default StockContainer;
