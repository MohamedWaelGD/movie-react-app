import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesSection from "../Home/Components/MoviesSection/MoviesSection.jsx";
import { getMoviesSearch } from "../../services/movieService.js";
import Loading from "../../components/Loading.jsx";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [pageIndex, setPageIndex] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      setSearch(query);
      setPageIndex(1);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!search) return;

    async function fetchData() {
      try {
        setLoading(true);
        const { results, total_pages } = await getMoviesSearch(
          search,
          pageIndex,
        );
        setTotalPages(total_pages);
        setMovies((prev) =>
          pageIndex === 1 ? results : [...prev, ...results],
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [search, pageIndex]);

  return (
    <div className={"container mx-auto min-h-screen px-3 pt-[100px]"}>
      <MoviesSection
        title={`Search for: ${search}`}
        movies={movies}
        showMore={false}
      />
      {loading ? (
        <div className={"flex h-[258px] items-center justify-center"}>
          <Loading />
        </div>
      ) : (
        totalPages > pageIndex && (
          <div class={"mt-5 flex justify-center"}>
            <button
              className="btn-primary"
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              Load More
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Search;
