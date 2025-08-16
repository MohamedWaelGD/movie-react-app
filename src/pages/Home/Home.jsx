import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./Components/HeroSection/HeroSection.jsx";
import MoviesSection from "./Components/MoviesSection/MoviesSection.jsx";
import {
  getPopularMovies,
  getPlayingMovies,
  getTrendingMovies,
} from "../../services/movieService.js";
import Loading from "../../components/Loading.jsx";
import PageLoader from "../../components/PageLoader.jsx";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  const [trendingLoading, setTrendingLoading] = useState(false);
  const [popularLoading, setPopularLoading] = useState(false);
  const [nowPlaying, setNowPlaying] = useState(false);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        setTrendingLoading(true);
        const trendingMovies = await getTrendingMovies();
        setTrendingMovies(trendingMovies);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      } finally {
        setTrendingLoading(false);
      }
    }
    async function fetchPopularMovies() {
      try {
        setPopularLoading(true);
        const popularMovies = await getPopularMovies();
        setPopularMovies(popularMovies);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      } finally {
        setPopularLoading(false);
      }
    }
    async function fetchNowPlayingMovies() {
      try {
        setNowPlaying(true);
        const nowPlayingMovies = await getPlayingMovies();
        setNowPlayingMovies(nowPlayingMovies);
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      } finally {
        setNowPlaying(false);
      }
    }

    fetchTrendingMovies();
    fetchPopularMovies();
    fetchNowPlayingMovies();
  }, []);

  return (
    <>
      <HeroSection />
      <div className={"flex flex-col gap-12"}>
        <div className={"container mx-auto px-3"}>
          {nowPlaying ? (
            <div className={"flex h-[258px] items-center justify-center"}>
              <Loading />
            </div>
          ) : (
            <MoviesSection title={"Newest"} movies={nowPlayingMovies} />
          )}
        </div>
        <div className={"bg-dark-light py-5"}>
          {trendingLoading ? (
            <div className={"flex h-[258px] items-center justify-center"}>
              <Loading />
            </div>
          ) : (
            <div className={"container mx-auto px-3"}>
              <MoviesSection title={"Trending"} movies={trendingMovies} />
            </div>
          )}
        </div>
        <div className={"container mx-auto px-3"}>
          {popularLoading ? (
            <div className={"flex h-[258px] items-center justify-center"}>
              <Loading />
            </div>
          ) : (
            <MoviesSection title={"Popular"} movies={popularMovies} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
