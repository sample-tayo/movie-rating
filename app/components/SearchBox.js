import { useMovieContext } from "../context/MovieContext";

const SearchBoxComponent = () => {
  const { updateSearchQuery } = useMovieContext();

  const handleInputChange = (event) => {
    // Calling the function from the context to update the search query
    updateSearchQuery(event.target.value);
  };

  return (
    <div className='w-3/5 bg-transparent border-2 p-2 rounded-md flex items-center'>
      <input
        type='text'
        placeholder='What do you want to watch?'
        className='w-full text-white bg-transparent outline-none px-2'
        onChange={handleInputChange}
      />
      <button className='text-blue-500'>
        <img src='/assets/search.svg' alt='search' />
      </button>
    </div>
  );
};

export default SearchBoxComponent;
