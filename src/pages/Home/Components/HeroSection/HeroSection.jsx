import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import MovieHeroItem from "./MovieHeroItem.jsx";
import { getUpcomingMovies } from "../../../../services/movieService.js";

const HeroSection = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const upcomingMovies = await getUpcomingMovies();
      setMovies(upcomingMovies);
    }
    fetchData();
  }, []);

  return (
    <section>
      {movies.length && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ type: "progressbar" }} // progress bar style
          autoplay={{
            delay: 3000, // 3 seconds per slide
          }}
          loop
          className="h-[88vh]"
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <MovieHeroItem movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default HeroSection;
