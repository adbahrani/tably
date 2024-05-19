import React from "react";
import { useNavigate } from "react-router-dom";

const SplitBillOptions = ({ setSplitOption }) => {
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    setSplitOption(option);
    navigate("/split-bill");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Split the bill</h2>
        <p className="mb-4">
          You can split the bill to only pay for your share
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleOptionSelect("custom")}
            className="flex justify-between items-center p-4 border rounded hover:bg-gray-100"
          >
            <span>Pay a custom amount</span>
            <span className="text-purple-600">select</span>
          </button>
          <button
            onClick={() => handleOptionSelect("equal")}
            className="flex justify-between items-center p-4 border rounded hover:bg-gray-100"
          >
            <span>Divide the bill equally</span>
            <span className="text-purple-600">select</span>
          </button>
          <button
            onClick={() => handleOptionSelect("items")}
            className="flex justify-between items-center p-4 border rounded hover:bg-gray-100"
          >
            <span>Pay for your items</span>
            <span className="text-purple-600">select</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplitBillOptions;
