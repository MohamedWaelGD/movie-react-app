import React from "react";
import MovieCard from "./MovieCard.jsx";

const MoviesSection = ({ title, movies, showMore = true }) => {
  return (
    <section className={"flex flex-col gap-4"}>
      <div className={"flex justify-between"}>
        <h3 className={"text-3xl font-bold"}>{title}</h3>
        {showMore && (
          <a href={""} className={"flex gap-1"}>
            Show More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17 16V7H8V5h11v11h-2Zm-5 5v-9H3v-2h11v11h-2Z"
              />
            </svg>
          </a>
        )}
      </div>
      <div className={"grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5"}>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MoviesSection;
