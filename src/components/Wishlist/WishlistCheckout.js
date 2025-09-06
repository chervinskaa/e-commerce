"use client";

import { useWishlist } from "@/context/WishlistContext";
import { useRouter } from "next/navigation";

export default function WishlistCheckout() {

    const { wishlist } = useWishlist();
    const router = useRouter();

    const totalPrice = wishlist.reduce(
        (sum, product) => sum + product.price * (product.quantity || 1),
        0
    );

    const shipping = totalPrice >= 1000 ? 0 : 50;

    const subtotal = totalPrice + shipping;

    return (
        <div className=" sm:px-11 lg:px-16  flex flex-col ">

            <div className="mb-2">
                <button
                    onClick={() => router.push("/")}
                    className="px-4 py-2 bg-white border  hover:bg-gray-100 "
                >
                    Return to Shop
                </button>
            </div>


            <div className="mt-6 flex justify-center sm:justify-end">
                <div className="border-2 p-6  w-100">
                    <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping:</span>
                        <span>${shipping}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span>Total:</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-center ">
                        <button
                            onClick={() => router.push("/cart")}
                            className="p-10 justify-center bg-red-500 text-white py-2  hover:bg-red-600"
                        >
                            Process to checkout
                        </button>
                    </div>
                   
                        <p className="text-sm text-green-600 mt-2">
                            Shipping is free for orders over $1000
                        </p>
                    
                </div>
            </div>
        </div>
    );
}
