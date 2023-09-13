import MovieList from "./MovieListMap";

function FeaturedMovie() {
  return (
    <section className='py-4 px-16 flex flex-col gap-6'>
      <div className='   flex justify-between items-center'>
        <h4 className='text-xl font-bold'>Featured Movie</h4>
        <a
          href='#'
          className='text-blue-500 font-semibold text-lg hover:underline'>
          See More &gt;
        </a>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12'>
        <MovieList />
      </div>
    </section>
  );
}

export default FeaturedMovie;
