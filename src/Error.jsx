import React from 'react'
import PopularMovies from './Components/PopularMovies/PopularMovies'
import Header from './Components/Header/Header'
import error from "./assets/404.png"

const Error = () => {
  return (
    <>
        <Header location={"base"}/>
        <h2>Ups... parece que no hay nada por aquí</h2>
        <img src={error} alt="" width={250} />
        <PopularMovies media={"movie"} index={6} />
        <PopularMovies media={"tv"}  index={6} />
    </>
  )
}

export default Error