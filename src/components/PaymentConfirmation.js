import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentConfirmation = ({ splitDetails }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { amountPaid, remainingAmount, transactionDate } = {
    amountPaid: splitDetails.share,
    remainingAmount: (98.94 - splitDetails.share).toFixed(2),
    transactionDate: new Date().toLocaleString(),
  };

  return (
    <div className="p-4">
      <button onClick={() => navigate("/")} className="text-purple-600 mb-4">
        &lt; Back
      </button>
      <h2 className="text-2xl font-semibold mb-4">
        Your payment was successful!
      </h2>
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-semibold">Table 2</span>
        {remainingAmount > 0 && (
          <span className="text-xl font-semibold text-orange-500">
            Partially Paid
          </span>
        )}
        {remainingAmount == 0 && (
          <span className="text-xl font-semibold text-green-500">
            Fully Paid
          </span>
        )}
      </div>
      <div className="border-t border-dotted mb-4"></div>
      <p className="mb-4">
        You paid <span className="font-semibold">${amountPaid}</span> for your
        table
      </p>
      <div className="mb-4">
        <p>
          Transaction date: <span>{transactionDate}</span>
        </p>
        <p
          className={`${
            remainingAmount > 0 ? "text-orange-500" : "text-green-500"
          }`}
        >
          ${remainingAmount} is left to pay
        </p>
      </div>
      <p className="mb-4">
        Thank you! Please keep this screen just in case for confirmation of
        payment!
      </p>
      <div className="mb-4">
        <label className="block mb-2">Get your receipt by email</label>
        <div className="flex">
          <input
            type="email"
            placeholder="Your E-mail Address"
            className="p-2 border rounded-l flex-grow"
          />
          <button className="bg-purple-600 text-white p-2 rounded-r">
            Send
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-500">
        By confirming my email, I accept Qlub's{" "}
        <a href="#" className="text-purple-600">
          privacy policy
        </a>{" "}
        and{" "}
        <a href="#" className="text-purple-600">
          terms and conditions
        </a>
      </p>
    </div>
  );
};

export default PaymentConfirmation;
