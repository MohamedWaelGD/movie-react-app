import React from "react";
import MoviesSection from "../Home/Components/MoviesSection/MoviesSection.jsx";
import { useWishlist } from "../../contexts/WishListContext.jsx";

const Wishlist = () => {
  const { wishList } = useWishlist();

  return (
    <div className={"container mx-auto min-h-screen px-3 pt-[100px]"}>
      {wishList.length ? (
        <MoviesSection
          title={"My wishlist"}
          movies={wishList}
          showMore={false}
        />
      ) : (
        <p>There are no wishlisted movies here, You can add them from movies</p>
      )}
    </div>
  );
};

export default Wishlist;
