import React, { useEffect, useState } from "react";
import { imageUrl, imageUrlOriginal } from "../../../services/movieService.js";
import Loading from "../../../components/Loading.jsx";
import { useWishlist } from "../../../contexts/WishListContext.jsx";

const MovieHero = ({ movie, loading }) => {
  const { wishList, addToWishlist, removeFromWishlist } = useWishlist();
  const [isWishlistedMovie, setIsWishlistedMovie] = useState(false);

  useEffect(() => {
    if (movie) {
      setIsWishlistedMovie(!!wishList.find((m) => m.id === movie.id));
    }
  }, [movie, wishList]);

  const handleAddMovieWishlist = () => {
    if (isWishlistedMovie) {
      removeFromWishlist(movie.id);
    } else {
      addToWishlist(movie);
    }
  };

  return (
    <header className={"relative flex min-h-[90vh] flex-col"}>
      {loading ? (
        <div
          className={"absolute inset-0 z-[2] flex items-center justify-center"}
        >
          <Loading />
        </div>
      ) : (
        movie && (
          <div className="relative flex grow flex-col justify-center">
            <div>
              <img
                src={imageUrlOriginal(movie.backdrop_path)}
                alt={movie.title}
                className="absolute inset-0 z-[1] h-full w-full object-cover"
              />
              <div className="to-dark absolute inset-0 z-[2] bg-gradient-to-b from-black/0"></div>
            </div>
            <div
              className={
                "relative z-[3] container mx-auto flex flex-col gap-10 p-3 lg:flex-row lg:items-center lg:pt-3"
              }
            >
              <img
                src={imageUrl(movie.poster_path)}
                alt={movie.title}
                className="h-[300px] w-[200px] rounded-lg object-cover shadow-2xl lg:h-[590px] lg:w-[400px]"
              />
              <div className="flex flex-col gap-3 text-white">
                <h2 className="text-3xl font-bold lg:text-6xl">
                  {movie.title}
                </h2>
                <p className="lg:max-w-[500px]">{movie.overview}</p>
                <div className="flex gap-4 text-lg">
                  <span>IMDb {movie.vote_average}</span>
                  <span>{movie.release_date || "2023"}</span>
                  {/*<span>{movie.episodes || "9 Episodes"}</span>*/}
                  {/*<span className="rounded-lg bg-white/20 px-2">*/}
                  {/*  {movie.ageRating || "16+"}*/}
                  {/*</span>*/}
                </div>
                <div className={"flex gap-2"}>
                  {!isWishlistedMovie ? (
                    <button
                      className="btn-primary"
                      onClick={handleAddMovieWishlist}
                    >
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
                    <button
                      className="btn-primary"
                      onClick={handleAddMovieWishlist}
                    >
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
          </div>
        )
      )}
    </header>
  );
};

export default MovieHero;
