"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../../api/productsApi.js";
import LikeButton from "@/components/Prodacts/LikeButton";
import ArrowButton from "@/components/Prodacts/ArrowButton";


function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const loadMore = () => {
    setItemsPerPage(itemsPerPage + 8);
  };

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);

  const prevSlide = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const nextSlide = () => {
    if ((currentPage + 1) * itemsPerPage < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const visibleProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );


  return (
    <div>
      <div className="flex justify-between sm:mx-11 lg:mx-16 my-4 ">
        <h1 className="text-2xl font-bold  ml-6">Explore Our Products</h1>
        <div className="flex gap-2 mr-6">
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ArrowButton direction="left" onClick={prevSlide} />
          </button>
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ArrowButton direction="right" onClick={nextSlide} />
          </button>
        </div>
      </div>

      {/* Картки товарів */}
      <div className="px-4 sm:px-11 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleProducts.map(p => (
            <div key={p.id} className=" overflow-hidden ">

              <div className="relative bg-gray-100 p-4">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-40 mx-auto object-contain mb-2"
                />
                <LikeButton />
              </div>

              <div className="p-4 bg-white">
                <h2 className="text-lg font-semibold">{p.title}</h2>
                <p className="text-red-600">{p.price} $</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={loadMore}
          className="p-3 bg-red-500 text-white  hover:bg-red-600 ">
          See More Products
        </button>
      </div>

    </div>
  );
}

export default ProductList;
