import { useEffect, useState } from 'react'
import { SearchBar } from './Components/SearchBar/SearchBar'
import { SearchResults } from './Components/SearchResults/SearchResults';
import useFetch from './hooks/useFetch';
import PopularMovies from './Components/PopularMovies/PopularMovies';
import { searchMovies } from './helpers/searchMovies';

function App() {

  const [searchValue, setSearchValue] = useState("");
  const { movieResults } = useFetch(searchMovies, searchValue);

  const handleSearchValue = (value) => {
    setSearchValue(value);
  }

  return (
    <div className="app-container">
      <h1>Pulso Cine</h1>
      <SearchBar onSearch={handleSearchValue} />
      {!(movieResults.length > 0) && <PopularMovies />}
      {(movieResults.length > 0) && <SearchResults movieResults={ movieResults } searchValue={searchValue} />}
      </div>
  )
}

export default App
