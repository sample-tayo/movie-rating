"use client";
import { useState, useEffect } from "react";
import SearchBox from "@/app/components/SearchBox";
import { useMovieContext } from "../context/MovieContext";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const { movies } = useMovieContext();
  const [movieIndex, setMovieIndex] = useState(0);

  const changeMovie = () => {
    setMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  useEffect(() => {
    const interval = setInterval(
      changeMovie,
      Math.floor(Math.random() * 5000) + 20000
    );

    return () => {
      clearInterval(interval);
    };
  }, [movies]);

  // Check if movies array is empty or undefined
  if (!movies || movies.length === 0) {
    return <div>Loading...</div>; // You can replace this with a loading indicator
  }

  const headerStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${
      movies[movieIndex]?.backdrop_path || ""
    })`,

    backgroundSize: "cover",
    backgroundPosition: "center",
    // height: "100vh",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  return (
    <div style={headerStyle} className='h-3/4 md:h-screen'>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='absolute inset-x-0 top-0 flex items-center px-8 justify-between md:px-16 py-8'>
        {/* Logo at the top left */}
        <div className='flex gap-4 items-center'>
          <Image height='50' width='50' src='/assets/tv.png' alt='Logo' />
          <p className='text-white font-extrabold text-2xl'>MovieBox</p>
        </div>

        <div className='hidden md:block'>
          <SearchBox />
        </div>

        <div className='flex gap-4 items-center justify-center'>
          <div className='text-white'>Sign In</div>

          <div className='rounded-full bg-red-700 px-3 py-4 cursor-pointer'>
            <Image
              height='24'
              width='24'
              src='/assets/menu-icon.svg'
              alt='menu'
            />
          </div>
        </div>
      </div>
      <div className='flex gap-4 flex-col text-white px-4 md:pb-0  pb-10  pt-48 md:w-2/6 md:pl-16'>
        <h3 className='text-5xl leading-5xl font-medium z-40'>
          {movies[movieIndex]?.title || "No Title"}
        </h3>
        <div className='flex justify-between z-40'>
          <p className='flex items-center gap-2'>
            <Image height='17' width='35' src='/assets/imdb.png' alt='title' />
            {movies[movieIndex]?.vote_average}/10
          </p>
          <p className='flex items-center gap-2'>
            <Image
              height='17'
              width='16'
              src='/assets/rotten-tomatoes.png'
              alt={movies[movieIndex].popularity}
            />
            {movies[movieIndex]?.popularity}%
          </p>
        </div>
        <p className='text-sm text-white z-40'>
          {movies[movieIndex]?.overview}
        </p>
        <Link
          href={`/movies/${movies[movieIndex].id}`}
          className='z-40'
          passHref>
          <button className='bg-red-600 font-bold flex justify-around items-center z-40 text-white w-3/5 p-4 rounded-lg'>
            <Image
              src='/assets/play-icon.png'
              alt='play-trailer'
              height='20'
              width='20'
            />
            WATCH TRAILER
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
