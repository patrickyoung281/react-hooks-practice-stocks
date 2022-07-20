import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer( {setStocks, stocks, addStocktoMC} ) {

const [portfolio, setPortfolio] = useState([]);

function addStocktoMC (stock) {
    return (console.log("HiHi!", stock));
  }


  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer
            setStocks={setStocks}
            stocks={stocks}
            addStocktoMC={addStocktoMC}
            setPortfolio={setPortfolio}
            portfolio={portfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
