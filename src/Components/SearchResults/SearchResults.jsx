import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import useFetch from '../../hooks/useFetch';
import { searchMovies } from '../../helpers/getMedia';
import PopularMovies from '../PopularMovies/PopularMovies';


export const SearchResults = ({ searchValue, media, index }) => {





  //Aplico el customHook useFetch para hacer la petición de los resultados
  //Este custom Hook me pide como argumentos una función, y el value de búsqueda
  //Obtengo el array de MovieResults usando la función searchMovies
  const { movieResults, isLoading } = useFetch(index, media, searchMovies, searchValue);

  return (
    <>
      <h2>Tus resultados para {searchValue}</h2>
      {isLoading ? <h3>Cargando resultados...</h3> : ((movieResults.length === 0) ?
        <><h3>No se encontraron películas</h3> <PopularMovies media={media} index={index} /> </> :
        <div className="search-results-container">
          {movieResults.map((movieResult) => <MovieCard key={movieResult.id} {...movieResult} media={media} searchValue={searchValue} />)}
        </div>)}
    </>
  )
}
