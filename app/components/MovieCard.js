import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {
  const { formatReleaseDate } = useMovieContext();
  const { poster_path, id, title, release_date, vote_average } = movie;
  return (
    <Link href={`/movies/${id}`} passHref>
      <div
        className='flex flex-col gap-4 w-fit hover:cursor-pointer'
        data-testid='movie-card'>
        <div style={{ position: "relative" }}>
          <img
            loading='lazy'
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            data-testid='movie-poster'
          />
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              padding: "10px",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
            }}>
            Tvseries
          </div>
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              padding: "10px",
            }}>
            <i
              className='fa fa-heart'
              style={{ color: "red", fontSize: "24px" }}></i>
          </div>
        </div>
        <div>
          <p
            className='text-gray-400 font-medium text-xs'
            data-testid='movie-release-date'>
            {formatReleaseDate(release_date)}
          </p>
          <p
            className='text-gray-900 text-lg font-semibold'
            data-testid='movie-title'>
            {title}
          </p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Image height='17' width='35' src='/assets/imdb.png' alt='' />
              <span>{vote_average}/10</span>
            </div>
            <p className='flex items-center gap-2'>
              <Image
                height='17'
                width='16'
                src='/assets/rotten-tomatoes.png'
                alt='rotten-tomatoes'
              />
              97%
            </p>
          </div>
          <div>Action, Adventure / Horror</div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
