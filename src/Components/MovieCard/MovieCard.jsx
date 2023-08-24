import React from 'react'

const MovieCard = ({ title, image, id, className}) => {
  return (
    <div className={"container" + className}>
    <div className={"movie-card" + className}>
        <img className={ "img" + className} src={image} alt={title} />
        <h3>{title}</h3>
    </div>
    </div>
  )
}

export default MovieCard