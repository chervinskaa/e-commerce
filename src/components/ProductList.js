"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../api/productsApi.js";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Товари</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p.id} className="border p-4 rounded-xl shadow">
            <img src={p.image} alt={p.title} className="h-40 mx-auto object-contain mb-2" />
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="text-gray-600">{p.price} $</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
