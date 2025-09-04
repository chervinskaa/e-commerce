import { ArrowLeft, ArrowRight } from "lucide-react";

function ArrowButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
    >
      {direction === "left" ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
    </button>
  );
}

export default ArrowButton; 
