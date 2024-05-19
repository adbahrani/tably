import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { currencySymbol } from "../utility/currency";

const Payment = ({ splitDetails }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [tipPercentage, setTipPercentage] = useState(0.1);
  const [customTip, setCustomTip] = useState("");

  const handleCustomTipChange = (e) => {
    setCustomTip(e.target.value);
    setTipPercentage(parseFloat(e.target.value) / splitDetails.share);
  };

  const total = parseFloat(splitDetails.share);
  const tipAmount = (total * tipPercentage).toFixed(2);
  const finalAmount = (total + parseFloat(tipAmount)).toFixed(2);

  const handlePaymentSuccess = () => {
    const transactionDate = new Date().toLocaleString();
    navigate("/payment-confirmation", {
      state: {
        amountPaid: finalAmount,
        remainingAmount: (98.94 - finalAmount).toFixed(2),
        transactionDate,
      },
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">
        Would you like to add a tip?
      </h2>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setTipPercentage(0.05)}
          className={`p-4 border rounded ${
            tipPercentage === 0.05 ? "border-purple-600" : "border-gray-300"
          } flex flex-col items-center`}
        >
          <span>5%</span>
          <span className="text-gray-500">{(total * 0.05).toFixed(2)}</span>
        </button>
        <button
          onClick={() => setTipPercentage(0.1)}
          className={`p-4 border rounded ${
            tipPercentage === 0.1 ? "border-purple-600" : "border-gray-300"
          } flex flex-col items-center`}
        >
          <span>10%</span>
          <span className="text-gray-500">{(total * 0.1).toFixed(2)}</span>
        </button>
        <button
          onClick={() => setTipPercentage(0.15)}
          className={`p-4 border rounded ${
            tipPercentage === 0.15 ? "border-purple-600" : "border-gray-300"
          } flex flex-col items-center`}
        >
          <span>15%</span>
          <span className="text-gray-500">{(total * 0.15).toFixed(2)}</span>
        </button>
        <input
          type="number"
          value={customTip}
          onChange={handleCustomTipChange}
          placeholder="custom"
          className="p-4 border rounded w-24 text-center"
        />
      </div>
      <div className="text-lg mb-4">
        <p>
          You are paying: <span className="font-semibold">{currencySymbol}{finalAmount}</span>
        </p>
      </div>
      <div className="mb-4">
        <button
          className="bg-black text-white py-2 px-4 rounded w-full flex items-center justify-center mb-4"
          onClick={handlePaymentSuccess}
        >
          Pay with Apple Pay
        </button>
        <div className="flex flex-col items-center">
          <input
            type="text"
            defaultValue={"4012-8888-8888-1881"}
            placeholder="Card number"
            className="w-full px-3 py-2 border rounded mb-2"
          />
          <input
            type="text"
            defaultValue={"12/25"}
            placeholder="Expiration MM / YY"
            className="w-full px-3 py-2 border rounded mb-2"
          />
          <input
            type="password"
            defaultValue={"123"}
            placeholder="CVC"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          className="bg-purple-600 text-white py-2 px-4 rounded w-full mt-4"
          onClick={handlePaymentSuccess}
        >
          Pay Now
        </button>
      </div>
      <div className="text-center text-gray-500 text-sm mt-4">
        <p>100% Secure payments powered by Test</p>
        <p>
          By using Test, you accept our{" "}
          <a href="#" className="text-purple-600">
            privacy policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-purple-600">
            terms and conditions
          </a>
        </p>
      </div>
    </div>
  );
};

export default Payment;
