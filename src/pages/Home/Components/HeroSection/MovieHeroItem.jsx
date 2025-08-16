import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { imageUrlOriginal } from "../../../../services/movieService.js";
import { useWishlist } from "../../../../contexts/WishListContext.jsx";

const MovieHeroItem = ({ movie }) => {
  const { wishList, addToWishlist, removeFromWishlist } = useWishlist();
  const [isWishlistedMovie, setIsWishlistedMovie] = useState(false);

  useEffect(() => {
    setIsWishlistedMovie(!!wishList.find((m) => m.id === movie.id));
  }, [wishList]);

  const handleAddMovieWishlist = () => {
    if (isWishlistedMovie) {
      removeFromWishlist(movie.id);
    } else {
      addToWishlist(movie);
    }
  };

  return (
    <>
      <div className="relative flex h-full flex-col justify-center">
        <img
          src={imageUrlOriginal(movie.backdrop_path)}
          alt={movie.title}
          className="absolute inset-0 z-[1] h-full w-full object-cover"
        />
        <div className="to-dark absolute inset-0 z-[2] bg-gradient-to-b from-black/0"></div>
        <div className="relative z-[3] container mx-auto flex flex-col gap-3 px-3 text-white">
          <h2 className="text-6xl font-bold">{movie.title}</h2>
          <p className="md:max-w-[500px]">{movie.overview}</p>
          <div className="flex gap-4 text-lg">
            <span>IMDb {movie.vote_average}</span>
            <span>{movie.release_date || "2023"}</span>
            {/*<span>{movie.episodes || "9 Episodes"}</span>*/}
            {/*<span className="rounded-lg bg-white/20 px-2">*/}
            {/*  {movie.ageRating || "16+"}*/}
            {/*</span>*/}
          </div>
          <div className={"flex gap-2"}>
            <Link to={`/movie/${movie.id}`} className="btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.54 9L8.88 3.46a3.42 3.42 0 0 0-5.13 3v11.12A3.42 3.42 0 0 0 7.17 21a3.43 3.43 0 0 0 1.71-.46L18.54 15a3.42 3.42 0 0 0 0-5.92Zm-1 4.19l-9.66 5.62a1.44 1.44 0 0 1-1.42 0a1.42 1.42 0 0 1-.71-1.23V6.42a1.42 1.42 0 0 1 .71-1.23A1.51 1.51 0 0 1 7.17 5a1.54 1.54 0 0 1 .71.19l9.66 5.58a1.42 1.42 0 0 1 0 2.46Z"
                />
              </svg>
              Play Now
            </Link>

            {!isWishlistedMovie ? (
              <button className="btn-primary" onClick={handleAddMovieWishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="transparent"
                    stroke="currentColor"
                    d="M6 6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 3 8.08 3 9.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 4.52 18 5.08 18 6.2v13.305c0 .486 0 .729-.101.862a.5.5 0 0 1-.37.198c-.167.01-.369-.125-.773-.394L12 17l-4.756 3.17c-.404.27-.606.405-.774.395a.5.5 0 0 1-.369-.198C6 20.234 6 19.991 6 19.505z"
                  />
                </svg>
                Watch Later
              </button>
            ) : (
              <button className="btn-primary" onClick={handleAddMovieWishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    d="M6 6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 3 8.08 3 9.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 4.52 18 5.08 18 6.2v13.305c0 .486 0 .729-.101.862a.5.5 0 0 1-.37.198c-.167.01-.369-.125-.773-.394L12 17l-4.756 3.17c-.404.27-.606.405-.774.395a.5.5 0 0 1-.369-.198C6 20.234 6 19.991 6 19.505z"
                  />
                </svg>
                In wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieHeroItem;
