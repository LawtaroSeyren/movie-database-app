import { useState } from 'react'
import { SearchBar } from './Components/SearchBar/SearchBar'
import { SearchResults } from './Components/SearchResults/SearchResults';
import PopularMovies from './Components/PopularMovies/PopularMovies';
import Header from './Components/Header/Header';




function Searcher( {media} ) {

  const [searchValue, setSearchValue] = useState("");

  //Al recibir el valor desde el componente hijo SearchBar, actualizo el estado de searchValue
  const handleSearchValue = (value) => {
    setSearchValue(value);
  }

  return (
    <>
    <Header location={"base"}/>
      {
        //Barra de búsqueda de la cual obtengo el input value en tiempo real
      }
      <SearchBar onSearch={handleSearchValue} media={media} />

      {
        //Si el input value no tiene nada, renderizo PopularMovies
      }
      {(searchValue == "") && <PopularMovies media={media} index={9} />}

      {
        //En cambio, si se escribió algo en la barra de búsqueda, renderizo SearchResults 
      }

      {(!searchValue == "") && <SearchResults searchValue={searchValue} media={media} index={6} />}
    </>
  )
}

export default Searcher
