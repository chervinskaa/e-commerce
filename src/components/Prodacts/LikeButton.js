import { useState } from "react";
import { Heart } from "lucide-react";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
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