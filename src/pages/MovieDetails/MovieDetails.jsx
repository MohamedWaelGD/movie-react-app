import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getMovieCredits,
  getMovieDetails,
  getSimilarMovies,
} from "../../services/movieService.js";
import MovieHero from "./components/MovieHero.jsx";
import Actors from "./components/Actors.jsx";
import Loading from "../../components/Loading.jsx";
import MoviesSection from "../Home/Components/MoviesSection/MoviesSection.jsx";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [similarMovie, setSimilarMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actors, setActors] = useState([]);
  useEffect(() => {
    async function fetchSimilarMovies() {
      try {
        setLoading(true);
        const movies = await getSimilarMovies(id);
        setSimilarMovie(movies);
      } catch (error) {
        console.error("Error fetching similar movies:", error);
      } finally {
        setLoading(false);
      }
    }
    async function fetchDataCredits() {
      try {
        setLoading(true);
        const { cast } = await getMovieCredits(id);
        setActors(cast);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    }
    async function fetchData() {
      try {
        setLoading(true);
        const details = await getMovieDetails(id);
        setMovie(details);
        setLoading(false);
        if (details) {
          fetchDataCredits();
          fetchSimilarMovies();
        } else {
          throw new Error("Movie not found");
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
        navigate("/");
      }
    }
    fetchData();
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <article>
      <MovieHero movie={movie} loading={loading} />
      <div>
        <div className={"container mx-auto px-3"}>
          {loading ? (
            <div className={"flex h-[258px] items-center justify-center"}>
              <Loading />
            </div>
          ) : (
            <div className={"flex flex-col gap-10"}>
              <Actors actors={actors} />
              <MoviesSection title={"Similar Movies"} movies={similarMovie} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default MovieDetails;
