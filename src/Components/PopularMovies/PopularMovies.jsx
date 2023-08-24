import React from 'react'
import { getPopularMovies } from '../../helpers/searchMovies'
import useFetch from '../../hooks/useFetch';
import MovieCard from '../MovieCard/MovieCard';


const PopularMovies = ( ) => {

    const { movieResults} = useFetch(getPopularMovies, "no");


    return (
        <>
                <h2>LAS PELÍCULAS DEL MOMENTO</h2>
        <div className="popular-movies-container">
        {movieResults.map( (popularMovie) => <MovieCard key={popularMovie.id} {...popularMovie}  />  )}
        </div>
        </>
      )
    }
    

export default PopularMovies