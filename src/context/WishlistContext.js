"use client";

import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    const withQuantity = saved.map(item => ({
      ...item,
      quantity: item.quantity ?? 1,
    }));
    setWishlist(withQuantity);
  }, []);


  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, { ...product, quantity: product.quantity ?? 1 }]
    );
  };

  const updateQuantity = (id, quantity) => {
    setWishlist(prev =>
      prev.map(item => item.id === id ? { ...item, quantity } : item)
    );
  };


  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, updateQuantity }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
