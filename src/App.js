import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderSummary from "./components/OrderSummary";
import SplitBillOptions from "./components/SplitBillOptions";
import SplitBill from "./components/SplitBill";
import Payment from "./components/Payment";
import PaymentConfirmation from "./components/PaymentConfirmation";
import "./App.css";

const App = () => {
  const [splitOption, setSplitOption] = useState(null);
  const [splitDetails, setSplitDetails] = useState({});

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<OrderSummary setSplitDetails={setSplitDetails} />}
          />
          <Route
            path="/split-options"
            element={<SplitBillOptions setSplitOption={setSplitOption} />}
          />
          <Route
            path="/split-bill"
            element={
              <SplitBill
                splitOption={splitOption}
                setSplitDetails={setSplitDetails}
              />
            }
          />
          <Route
            path="/payment"
            element={<Payment splitDetails={splitDetails} />}
          />
          <Route
            path="/payment-confirmation"
            element={<PaymentConfirmation splitDetails={splitDetails} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
