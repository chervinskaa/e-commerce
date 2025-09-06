"use client";

import { useWishlist } from "@/context/WishlistContext";
import ProdactAdded from "@/components/Wishlist/ProdactAdded";
import WishlistHeader from "@/components/Wishlist/WishlistHeader";
import WishlistCheckout from "@/components/Wishlist/WishlistCheckout";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return <div className="p-6 text-center">Your wishlist is empty</div>;
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
