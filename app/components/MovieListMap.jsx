"use client";
import MovieCard from "./MovieCard";
import { useMovieContext } from "../context/MovieContext";

function MovieList() {
  const { loading, error, filteredMovies } = useMovieContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
}

export default MovieList;
