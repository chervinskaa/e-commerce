"use client";

import { useState } from "react";
import BillingDetails from "@/components/Cart/BillingDetails";
import OrderSummary from "@/components/Cart/OrderSummary";

export default function CheckoutPage() {
  const [billingData, setBillingData] = useState(null);

  return (
   <div className="container mx-auto px-4 py-8">
     <div className="flex flex-col lg:flex-row ">
          <div className="w-full  flex justify-center  mb-8 lg:mb-0">
      <BillingDetails onSubmit={(data) => setBillingData(data)} />
</div>

  <div className="w-full ">
      <OrderSummary
        onPlaceOrder={({ paymentMethod, total, items }) => {
          console.log("Place order with:");
          console.log("Billing data:", billingData);
          console.log("Payment method:", paymentMethod);
          console.log("Total:", total);
          console.log("Items:", items);

          alert("Order placed successfully!");
        }}
      />
    </div>
    </div>
    </div>
  );
}
