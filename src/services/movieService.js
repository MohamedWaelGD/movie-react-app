const API_BEARER_KEY = import.meta.env.VITE_API_BEARER_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/w500";
const BASE_URL_IMAGE_ORIGINAL = "https://image.tmdb.org/t/p/original";

export async function getUpcomingMovies() {
  const res = await fetch(`${BASE_URL}/discover/movie?language=en-US&page=1`, {
    headers: {
      Authorization: `Bearer ${API_BEARER_KEY}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch trending movies");
  return (await res.json()).results;
}

export async function getTrendingMovies() {
  const res = await fetch(`${BASE_URL}/trending/movie/day?language=en-US`, {
    headers: {
      Authorization: `Bearer ${API_BEARER_KEY}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch trending movies");
  return (await res.json()).results;
}

export async function getPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?language=en-US`, {
    headers: {
      Authorization: `Bearer ${API_BEARER_KEY}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch popular movies");
  return (await res.json()).results;
}

export async function getPlayingMovies() {
  const res = await fetch(`${BASE_URL}/movie/now_playing?language=en-US`, {
    headers: {
      Authorization: `Bearer ${API_BEARER_KEY}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch playing movies");
  return (await res.json()).results;
}

export async function getSimilarMovies(movie_id) {
  const res = await fetch(
    `${BASE_URL}/movie/${movie_id}/similar?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${API_BEARER_KEY}`,
      },
    },
  );
  if (!res.ok) throw new Error("Failed to fetch similar movies");
  return (await res.json()).results;
}

export async function getMovieDetails(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}?language=en-US`, {
    headers: {
      Authorization: `Bearer ${API_BEARER_KEY}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return await res.json();
}

export async function getMovieCredits(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}/credits?language=en-US`, {
    headers: {
      Authorization: `Bearer ${API_BEARER_KEY}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch movie credits");
  return await res.json();
}

export async function getMoviesSearch(query, page = 1) {
  const res = await fetch(
    `${BASE_URL}/search/movie?query=${query}&page=${page}&language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${API_BEARER_KEY}`,
      },
    },
  );
  if (!res.ok) throw new Error("Failed to fetch movies search");
  return await res.json();
}

export function imageUrl(path) {
  return `${BASE_URL_IMAGE}${path}`;
}

export function imageUrlOriginal(path) {
  return `${BASE_URL_IMAGE_ORIGINAL}${path}`;
}
