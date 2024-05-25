import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { currencySymbol } from "../utility/currency";

const PaymentConfirmation = ({ splitDetails }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { amountPaid, remainingAmount, transactionDate } = {
    amountPaid: splitDetails.share,
    remainingAmount: (98.94 - splitDetails.share).toFixed(2),
    transactionDate: new Date().toLocaleString(),
  };

  return (
    <div className="p-4 text-right">
      <button onClick={() => navigate("/")} className="text-purple-600 mb-4">
        &lt; العودة
      </button>
      <h2 className="text-2xl font-semibold mb-4">
        !تم الدفع بنجاح
      </h2>
      <div className="mb-4">
        <span className="text-xl font-semibold text-right"> طاولة 2 </span>
        {remainingAmount > 0 && (
          <span className="text-xl font-semibold text-orange-500">
            تم الدفع جزئياً
          </span>
        )}
        {remainingAmount == 0 && (
          <span className="text-xl font-semibold text-green-500">
            تم الدفع بالكامل
          </span>
        )}
      </div>
      <div className="border-t border-dotted mb-4"></div>
      <p className="mb-4">
       <span> لطاولتك </span>
        <span className="font-semibold">{currencySymbol + " " + amountPaid}</span>
        <span> دفعت </span> 
         
      </p>
      <div className="mb-4">
        <p>
          :تاريخ  
          <p>{transactionDate}</p>
        </p>
        <p
          className={`${
            remainingAmount > 0 ? "text-orange-500" : "text-green-500"
          }`}
        >
        {currencySymbol + " " + isNaN(remainingAmount) ? 0 : remainingAmount} المتبقي للدفع
        </p>
      </div>
      <p className="mb-4">
        شكراً لك! يرجى الاحتفاظ بهذه الشاشة كإثبات للدفع!
      </p>
      <div className="mb-4">
        <label className="block mb-2">احصل على إيصالك عبر البريد الإلكتروني</label>
        <div className="flex">
          <input
            type="email"
            placeholder="عنوان بريدك الإلكتروني"
            className="p-2 border rounded-l flex-grow"
          />
          <button className="bg-purple-600 text-white p-2 rounded-r">
            إرسال
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-500">
        بتأكيد بريدي الإلكتروني، أقبل سياسة الخصوصية{" "}
        <a href="#" className="text-purple-600">
          سياسة الخصوصية
        </a>{" "}
        و{" "}
        <a href="#" className="text-purple-600">
          الشروط والأحكام
        </a>
      </p>
    </div>
  );
};

export default PaymentConfirmation;
