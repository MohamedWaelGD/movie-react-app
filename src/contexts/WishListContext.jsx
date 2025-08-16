import { createContext, useContext, useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "r-m-a-wishlist";
const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    setWishList(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wishList));
  }, [wishList]);

  const addToWishlist = (movie) => {
    const existingMovie = wishList.find((m) => m.id === movie.id);
    if (existingMovie) {
      return;
    }
    const updatedWishlist = [...wishList, movie];
    setWishList(updatedWishlist);
  };

  const removeFromWishlist = (movieId) => {
    const updatedWishlist = wishList.filter((movie) => movie.id !== movieId);
    setWishList(updatedWishlist);
  };

  return (
    <WishlistContext.Provider
      value={{ wishList, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
