"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { api_read_access_token } from "../data/apiKey";

const MovieContext = createContext();

export function useMovieContext() {
  return useContext(MovieContext);
}

export function MovieProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://api.themoviedb.org/3/movie/top_rated";
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${api_read_access_token}`,
          },
        };

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMovies(data.results.slice(0, 10));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to update the search query
  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  // Filter movies based on the search query
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // conversion of date to UTC, i need it in hero page and moviedetails page
  const formatReleaseDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const utcDate = new Date(dateString + "T00:00:00Z").toUTCString();
    return new Date(utcDate).toLocaleDateString(undefined, options);
  };

  const contextValue = {
    loading,
    error,
    movies,
    filteredMovies,
    updateSearchQuery,
    formatReleaseDate,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
}
