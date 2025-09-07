"use client";

import { useWishlist  } from "@/context/WishlistContext";

export default function ProdactAdded({ product }) {
   const { updateQuantity } = useWishlist();

    return (
        <div>
            {/* Для великих екранів */}
            <div className="hidden sm:grid sm:grid-cols-4 items-center border-b 
      border-gray-200 py-4 px-2 my-6 sm:px-4 shadow bg-white">

                <div className="flex items-center gap-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-20 w-20 object-contain"
                    />
                    <span className="font-medium">{product.title}</span>
                </div>

                <div className="text-grey-600 font-medium flex items-center justify-center">
                    {product.price} $
                </div>

                <div className="flex items-center justify-center">
                    <input
                        type="number"
                        min={0}
                        value={product.quantity?? 1 } 
                         onChange={(e) =>    updateQuantity(product.id,  Number(e.target.value))}
                        className="w-16 text-center border rounded px-2 py-1"
                    />
                </div>

                <div className="flex items-center justify-center gap-2 font-medium">
                    {product.price * (product.quantity?? 1)}  $
                </div>
            </div>

            {/* Для малих екранів */}
            <div className="flex sm:hidden flex-col gap-2 border-b 
      border-gray-200 py-4 px-2 shadow bg-white">

                <div className="flex items-center gap-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-20 w-20 object-contain"
                    />
                    <span className="font-medium">{product.title}</span>
                </div>

                <div className="flex items-center justify-center gap-10 ">
                    <span className="text-grey-600 font-medium">{product.price} $</span>

                    <input
                        type="number"
                        min={0}
                        value={product.quantity } 
                        onChange={(e) =>    updateQuantity(product.id,  Number(e.target.value))}
                        className="w-16 text-center border rounded px-2 py-1"
                    />

                    <span className="font-medium">{product.price * (product.quantity )}  $</span>
                </div>
            </div>
        </div>
    );
}