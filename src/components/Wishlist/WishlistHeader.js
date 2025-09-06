"use client";

export default function WishlistHeader() {
    return (
        <div className="hidden sm:grid grid-cols-4 items-center text-center border-b 
    border-gray-200 py-4 px-2 sm:px-4 shadow bg-white ">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
        </div>
    );
}
