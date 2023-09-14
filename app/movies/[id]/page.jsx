"use client";
import { useEffect, useState } from "react";
import SideBar from "@/app/components/SideBar";
import { useMovieContext } from "../../context/MovieContext";
import { api_read_access_token } from "@/app/data/apiKey";
import PageSpinLoad from "@/app/components/PageSpinLoad";

function MovieDetails({ params }) {
  const { formatReleaseDate } = useMovieContext();
  const id = params.id;

  const [movieDetails, setMovieDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  // Use useEffect to fetch movie details and videos when 'id' changes
  useEffect(() => {
    if (id) {
      // Make the API request to fetch movie details here
      const fetchMovieDetails = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${api_read_access_token}`,
              },
            }
          );

          if (response.ok) {
            const data = await response.json();
            setMovieDetails(data);
          } else {
            console.error("Error fetching movie details");
          }
        } catch (error) {
          console.error("Error fetching movie details:", error);
        }
      };

      // Make the API request to fetch movie videos
      const fetchMovieVideos = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${api_read_access_token}`,
              },
            }
          );

          if (response.ok) {
            const data = await response.json();
            console.log(data);
            setVideos(data.results);
          } else {
            console.error("Error fetching movie videos");
          }
        } catch (error) {
          console.error("Error fetching movie videos:", error);
        }
      };

      fetchMovieDetails();
      fetchMovieVideos();
    }
  }, [id]);

  // Function to determine content rating
  const getContentRating = (adult) => {
    return adult ? "PG-18" : "PG-13";
  };

  return (
    <main className='flex'>
      <SideBar />
      <div className='p-4 md:p-8 flex flex-col gap-4 h-screen overflow-y-auto'>
        {movieDetails ? (
          <>
            {videos.length > 0 &&
              videos
                .map((video) => {
                  if (video.type === "Trailer") {
                    return (
                      <div key={video.id}>
                        <iframe
                          width='100%'
                          height='400'
                          style={{ borderRadius: ".5rem" }}
                          src={`https://www.youtube.com/embed/${video.key}`}
                          frameBorder='0'
                          allow='autoplay; encrypted-media'
                          allowFullScreen></iframe>
                      </div>
                    );
                  }
                })
                .filter(Boolean)[0]}
            <section>
              <div className='flex justify-between'>
                <div className='font-bold flex flex-wrap  items-center gap-2'>
                  <p data-testid='movie-title'>{movieDetails.title}</p>
                  <p className='text-gray-500'>•</p>
                  <p>{getContentRating(movieDetails.adult)}</p>
                  <p className='text-gray-500'>•</p>
                  <p data-testid='movie-release-date'>
                    {formatReleaseDate(movieDetails.release_date)}
                  </p>
                  <p className='text-gray-500'>•</p>

                  <div className='flex gap-2 items-center'>
                    {movieDetails.genres.map((genre) => (
                      <p
                        key={genre.name}
                        className='rounded-lg border p-1 text-center text-red-700'>
                        {genre.name}
                      </p>
                    ))}
                  </div>
                  <p className='text-gray-500'>•</p>
                  <p data-testid='movie-runtime'>{movieDetails.runtime}</p>
                </div>

                <p>
                  {movieDetails.vote_average} | {movieDetails.vote_count}
                </p>
              </div>

              <div className='flex flex-col md:flex-row gap-4'>
                <div className='flex flex-col gap-4 md:w-3/4'>
                  <p data-testid='movie-overview'>{movieDetails.overview}</p>

                  <p className='text-black'>
                    Director:{" "}
                    <span className='text-red-500'>
                      {movieDetails.director}
                    </span>
                  </p>
                </div>

                <div className=' flex flex-col gap-4 md:w-1/4'>
                  <button className='bg-red-600 text-white w-full p-2 rounded-lg'>
                    See Sometimes
                  </button>
                  <button className='bg-red-100 border border-red-700 text-black font-medium w-full p-2 rounded-lg'>
                    More watch options
                  </button>
                </div>
              </div>
            </section>
          </>
        ) : (
          // Render a loading message or handle loading state here
          <div>
            <PageSpinLoad />
          </div>
        )}
      </div>
    </main>
  );
}

export default MovieDetails;
