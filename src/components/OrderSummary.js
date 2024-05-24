import React from "react";
import { useNavigate } from "react-router-dom";
import { currencySymbol } from "../utility/currency";

const OrderSummary = ({ setSplitDetails }) => {
  const navigate = useNavigate();

  const orderItems = [
    { name: "بيتزا", price: 15.0 },
    { name: "كابزون", price: 4.0 },
    { name: "بركر", price: 5.0 },
    { name: "قنكر", price: 2.0 },
    { name: "سكالوب", price: 6.0 },
    { name: "مشروبات", price: 15.65 },
  ];

  const subtotal = orderItems.reduce((acc, item) => acc + item.price, 0);
  const discount = 5.21;
  const total = subtotal - discount;
  const gst = (total * 0.09).toFixed(2);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-center">قائمة الحساب</h2>
      <ul className="mb-4">
        {orderItems.map((item, index) => (
          <li key={index} className="flex justify-between py-2 border-b">
            <span>{currencySymbol}{item.price.toFixed(2)}</span>  {item.name}
          </li>
        ))}
      </ul>
      <div className="mb-4">
        <p className="flex justify-between py-2"><span>{currencySymbol}{subtotal.toFixed(2)}</span> :المجموع</p>
        <p className="flex justify-between py-2"><span>-{currencySymbol}{discount.toFixed(2)}</span> :خصم</p>
        <p className="flex justify-between py-2"><span>{currencySymbol}{total.toFixed(2)}</span> : المجموع النهائي</p>
        
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => navigate("/split-options")}
          className="text-purple py-2 px-4 rounded hover:text-white"
        >
          قسم الفاتورة
        </button>
        <button
          onClick={() => {
            setSplitDetails({ share: 98.94 });
            navigate("/payment");
          }}
          className="bg-purple-600 text-white py-2 px-4 rounded"
        >
          دفع الحساب 
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
