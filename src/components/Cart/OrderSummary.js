"use client";

import { useState } from "react";
import { useWishlist } from "@/context/WishlistContext";

export default function OrderSummary({ onPlaceOrder }) {
  const { wishlist } = useWishlist();
  const [paymentMethod, setPaymentMethod] = useState("bank"); 

  const subtotal = wishlist.reduce(
    (sum, product) => sum + product.price * (product.quantity || 1),
    0
  );

  const shipping = subtotal >= 1000 ? 0 : 50;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    if (wishlist.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    onPlaceOrder({ paymentMethod, total, items: wishlist });
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4 py-20 ">

      <div className="space-y-2">
        {wishlist.map((product) => (
          <div key={product.id} className="flex justify-between">
            <span>{product.title} x {product.quantity || 1}</span>
            <span>${(product.price * (product.quantity || 1)).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between font-medium border-t pt-2">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between font-medium">
        <span>Shipping:</span>
        <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
      </div>

      <div className="flex justify-between font-bold border-t pt-2">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="mt-4 space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="bank"
            checked={paymentMethod === "bank"}
            onChange={() => setPaymentMethod("bank")}
            className="accent-blue-500"
          />
          Bank
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={() => setPaymentMethod("cash")}
            className="accent-blue-500"
          />
          Cash
        </label>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
      >
        Place Order
      </button>
    </div>
  );
}

