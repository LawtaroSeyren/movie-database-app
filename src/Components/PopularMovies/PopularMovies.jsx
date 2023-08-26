import React from 'react'
import { getPopularMovies } from '../../helpers/getMedia'
import useFetch from '../../hooks/useFetch';
import PopularMovieCard from "../PopularMovieCard/PopularMovieCard"
import { NavLink } from 'react-router-dom';



const PopularMovies = ( { media, index } ) => {

    const { movieResults, isLoading } = useFetch(index, media, getPopularMovies);

    return (
        <>
                { media === "movie" ? <h2>LAS PELÍCULAS DEL MOMENTO</h2> : <h2>LAS SERIES MÁS VISTAS</h2>}
                 <div className="popular-movies-container">
        { isLoading ? <h3>Cargando...</h3> : movieResults.map( (popularMovie) =><NavLink className="" to={`/${media}/${popularMovie.id}`}> <PopularMovieCard key={popularMovie.id} {...popularMovie} /></NavLink >  )}
        </div>
        </>
      )
    }
    

export default PopularMovies