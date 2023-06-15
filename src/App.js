import React, { useState } from "react";
import "./App.css";
import Esewa from "./esewa";

function App() {
  const [showEsewa, setShowEsewa] = useState(false);

  const handlePayment = () => {
    setShowEsewa(true);
  };

  return (
    <div className="container">
      {showEsewa ? (
        <Esewa />
      ) : (
        <button className="paybutton" onClick={handlePayment}>
          Pay
        </button>
        
      )}
      <p>eSewa ID:9806800001</p>
      <p>Password:Nepal@123</p>
      <p>Token:123456</p>

    </div>
  );
}

export default App;
