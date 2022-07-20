import React from "react";
import Stock from "./Stock";

function PortfolioContainer( {portfolio, setPortfolio} ) {

  const displayStocksInPortfolio = portfolio.map((stock)=>{
    return <Stock companyName={stock.name} price={stock.price} id={stock.id} onClick={handleDelete}/>
  })

  function handleDelete (stock) {
    console.log(stock);
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      <div>{displayStocksInPortfolio}</div>
    </div>
  );
}

export default PortfolioContainer;
