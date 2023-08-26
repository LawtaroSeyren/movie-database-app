import React from 'react'
import PopularMovies from './Components/PopularMovies/PopularMovies'
import Header from './Components/Header/Header'

const Home = () => {
  return (
    <>
        <Header location={"base"}/>
        <PopularMovies media={"movie"} index={6} />
        <PopularMovies media={"tv"}  index={6} />
    </>
  )
}

export default Home