import React from "react";

function Stock( {companyName, price, id, onStockClick} ) {

  function handleBuyStock () {
    const stock = {
      name: companyName,
      price: price,
      id: id
    };
    onStockClick(stock); 
  }

  return (
    <div>
      <div className="card">
        <div className="card-body" id={id}>
          <h5 className="card-title" onClick={handleBuyStock}>{companyName}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
