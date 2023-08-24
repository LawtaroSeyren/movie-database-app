import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

export const SearchResults = ({ movieResults, searchValue }) => {

  return (
    <>
    <h2>Tus resultados para {searchValue}</h2>
    <div className="search-results-container">
    {movieResults.map( (movieResult) => <MovieCard key={movieResult.id} {...movieResult}  />  )}
    </div>
    </>
  )
}
