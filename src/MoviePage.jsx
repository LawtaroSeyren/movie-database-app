import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Components/Header/Header';
import useFetchDetails from './hooks/useFetchDetails';
import { getData, getTrailer } from './helpers/getMedia';
import ReactPlayer from 'react-player';

import { NavLink } from 'react-router-dom'

const MoviePage = ( ) => {
  const { id, media } = useParams();
  const mediaDetails = useFetchDetails(getData, id, media);

  const { title, episodes, genres, overview, image, vote_average, tagline } = mediaDetails;

  const roundedVote = Math.round(vote_average);
  const updatedVote = roundedVote / 2;
  const stars = '⭐'.repeat(updatedVote);

  const trailerUrl = useFetchDetails(getTrailer, id, media)


  if (!mediaDetails) {
    return (<>
      <Header location={"base"} />
      <h2>Cargando...</h2>
    </>
    )
  }
  return (
    <>
      <Header location={"details"} />
      <div className="movie-page-container">
        <div className="left-column">
          <img src={image} alt={title} />
        </div>
        <div className="right-column">
          <h1>{title}</h1>
          <h3>{tagline}</h3>
          <div className="stars"><p>{stars}({roundedVote.toFixed(2)})</p></div>
          <div className="genres">
            {genres.map((genre) => (
              <p className="genre" key={genre.id}>{genre.name}</p>
            ))}
          </div>
          {episodes !== undefined && <span className="episodes">Número de episodios: <strong>{episodes}</strong></span>}
          <p>{overview}</p>
          
          {trailerUrl ? (
            <ReactPlayer url={trailerUrl} controls={true} />
          ) : (
            <p className="no-trailer">Lamentablemente, no hay tráiler disponible.</p> )}
        </div>
      </div>
    </>
  )
}

export default MoviePage