import { useState } from "react";
import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

function LikeButton({ product }) {
  const [hovered, setHovered] = useState(false);
  const { wishlist, toggleWishlist } = useWishlist();

  const liked = wishlist.some((item) => item.id === product.id);

  return (
    <button
       onClick={() => toggleWishlist(product)}
      className="absolute top-2 right-2 p-2 rounded-full bg-white shadow"
    >
      <Heart
        size={20}
        fill={liked ? "red" : "none"}
        stroke={liked || hovered ? "red" : "gray"}
        className="transition-colors"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </button>
  );
}

export default LikeButton;