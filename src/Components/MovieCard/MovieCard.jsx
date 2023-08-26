import React from 'react'
import { NavLink } from 'react-router-dom'

const MovieCard = ({ title, image, media, id }) => {
  return (
    <><NavLink className="movie-card-link" to={`/${media}/${id}`}>
    <div className="movie-card-search">
    <img className={ "img-search"} src={image} alt={title} />
        <h3>{title}</h3></div></NavLink>
    </>
  )
}

export default MovieCard