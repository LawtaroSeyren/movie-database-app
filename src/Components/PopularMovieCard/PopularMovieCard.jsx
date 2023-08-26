import React from 'react'

const PopularMoviesCard = ({ title, image }) => {
  return (
    <div className="movie-card-popular">
    <img className="img-popular" src={image} alt={title}/>
        <h3>{title}</h3>
    </div>
  )
}

export default PopularMoviesCard