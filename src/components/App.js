import React, { useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {

  const [stocks, setStocks] = useState([]);

  return (
    <div>
      <Header />
      <MainContainer
        setStocks={setStocks}
        stocks={stocks} />
    </div>
  );
}

export default App;
