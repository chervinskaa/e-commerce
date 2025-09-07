"use client";

import { useWishlist } from "@/context/WishlistContext";
import ProdactAdded from "@/components/Wishlist/ProdactAdded";
import WishlistHeader from "@/components/Wishlist/WishlistHeader";
import WishlistCheckout from "@/components/Wishlist/WishlistCheckout";
import { useRouter } from "next/navigation"; 

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();

if (wishlist.length === 0) {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-5">
      <div className="text-xl font-semibold">Your wishlist is empty</div>
      <button
        onClick={() => router.push("/")}
        className="px-6 py-3 bg-white border rounded hover:bg-gray-100"
      >
        Return to Shop
      </button>
    </div>
  );
}

  return (
    <div className="px-6 py-8 space-y-4">
      <WishlistHeader />

      <div className="space-y-2">
        {wishlist.map((product) => (
          <ProdactAdded
            key={product.id}
            product={product}
            removeFromWishlist={toggleWishlist}
          />
        ))}


        <WishlistCheckout />


      </div>
    </div>
  );
}
