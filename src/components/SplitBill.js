import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { currencySymbol } from "../utility/currency";

const SplitBill = ({ splitOption, setSplitDetails }) => {
  const navigate = useNavigate();
  const [totalPeople, setTotalPeople] = useState(1);
  const [peoplePaying, setPeoplePaying] = useState(1);
  const [customAmount, setCustomAmount] = useState("");
  const BILL_AMOUNT = 98.94;

  const handleIncrement = (setter) => {
    setter((prev) => prev + 1);
  };

  const handleDecrement = (setter) => {
    setter((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleNext = () => {
    let share;
    if (splitOption === "equal") {
      //share = (BILL_AMOUNT / totalPeople).toFixed(2);
      share = ((BILL_AMOUNT * peoplePaying) / totalPeople).toFixed(2);
    } else if (splitOption === "custom") {
      share = customAmount;
    } else if (splitOption === "items") {
      share = BILL_AMOUNT;
    }
    setSplitDetails({ share });
    navigate("/payment");
  };

  let shareAmount = 0;
  if (splitOption === "equal") {
    shareAmount = ((BILL_AMOUNT * peoplePaying) / totalPeople).toFixed(2);
  } else if (splitOption === "custom") {
    shareAmount = customAmount;
  } else {
    shareAmount = BILL_AMOUNT;
  }

  return (
    <div className="p-4 text-right">
      {splitOption === "custom" && (
        <h2 className="text-2xl font-semibold mb-4">ادفع مبلغ مخصص</h2>
      )}
      {splitOption === "equal" && (
        <h2 className="text-2xl font-semibold mb-4">قسّم الفاتورة بالتساوي</h2>
      )}
      {splitOption === "items" && (
        <h2 className="text-2xl font-semibold mb-4">دفع طلب معينة</h2>
      )}
      {splitOption === "equal" && (
        <>
          <div className="flex justify-between items-center mb-4">
            <label className="block">إجمالي الأشخاص على طاولتك</label>
            <div className="flex items-center">
              <button
                className="bg-gray-200 p-2 rounded-l"
                onClick={() => handleDecrement(setTotalPeople)}
              >
                -
              </button>
              <input
                type="number"
                value={totalPeople}
                readOnly
                className="w-12 text-center border-t border-b"
              />
              <button
                className="bg-gray-200 p-2 rounded-r"
                onClick={() => handleIncrement(setTotalPeople)}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <label className="block">الأشخاص الذين تدفع لهم</label>
            <div className="flex items-center">
              <button
                className="bg-gray-200 p-2 rounded-l"
                onClick={() => handleDecrement(setPeoplePaying)}
              >
                -
              </button>
              <input
                type="number"
                value={peoplePaying}
                readOnly
                className="w-12 text-center border-t border-b"
              />
              <button
                className="bg-gray-200 p-2 rounded-r"
                onClick={() => handleIncrement(setPeoplePaying)}
              >
                +
              </button>
            </div>
          </div>
        </>
      )}
      {splitOption === "custom" && (
        <div className="mb-4">
          <label className="block mb-2">أدخل المبلغ المخصص: </label>
          <input
            type="number"
            value={customAmount}
            onChange={(e) => setCustomAmount(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
      )}
      {/* Additional UI for splitting by items can be added here */}
      <div className="flex justify-between mt-6">
        <p>{currencySymbol}{BILL_AMOUNT - shareAmount}</p>
        <p>المتبقي للدفع</p>

      </div>
      <div className="flex justify-between mt-2">
        <p>{currencySymbol}{shareAmount || 0}</p>
        <p>حصتك</p>

      </div>
      <button
        onClick={handleNext}
        className="bg-purple-600 text-white py-2 px-4 rounded mt-6 w-full"
      >
        تأكيد
      </button>
      <button
        onClick={() => navigate("/split-options")}
        className="text-red-600 mt-4"
      >
        إزالة التقسيم
      </button>
    </div>
  );
};

export default SplitBill;
