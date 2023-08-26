import noPoster from "../assets/noposter.jpg";
import noBack from "../assets/noback.jpg"

const apiKey = "5b3461092f4ccb300dea691302e0fc8d";
const urlBase = "https://api.themoviedb.org/3/"

const imageUrl = `https://image.tmdb.org/t/p/w500`

//Función para obtener resultados de búsqueda de películas

export const searchMovies = async (index, media, query) => {
    const url = `${urlBase}search/${media}?query=${query}&include_adult=false&language=en-US&api_key=${apiKey}&page=1`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error de conexión');
        }
        const { results } = await response.json();

        const movieDetails = results.map((movieResult) => ({
            title: media === "movie" ? (
                movieResult.title.length > 40
                    ? movieResult.title.substring(0, 40) + '...'
                    : movieResult.title
            ) : (
                movieResult.name.length > 40
                    ? movieResult.name.substring(0, 40) + '...'
                    : movieResult.name
            ),
            image: movieResult.poster_path ? imageUrl + movieResult.poster_path : noPoster,
            id: movieResult.id,
        }));

        return movieDetails;
    } catch (error) {
        console.error('Error al obtener resultados:', error);
        return [];
    }
};


//Función para obtener películas populares
export const getPopularMovies = async (index, media) => {
    const url = `${urlBase}${media}/popular?page=1&api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error de conexión");
        }
        const { results } = await response.json();

        const popularMovies = [];
        const usedIndices = new Set();

        while (popularMovies.length < index) {
            const randomIndex = Math.floor(Math.random() * results.length);
            if (!usedIndices.has(randomIndex)) {
                usedIndices.add(randomIndex);
                const { title, name, backdrop_path, id } = results[randomIndex];
                popularMovies.push({
                    title: media === "movie" ? (
                        title.length > 35 ? title.substring(0, 35) + '...' : title
                    ) : (
                        name.length > 35 ? name.substring(0, 35) + '...' : name
                    ),
                    image: backdrop_path ? imageUrl + backdrop_path : noBack,
                    id: id,
                });
            }
        }

        return popularMovies;
    } catch (error) {
        console.error('Error al obtener resultados:', error);
        return [];
    }
};


export const getData = async (id, media) => {
    const url = `${urlBase}${media}/${id}?api_key=${apiKey}`;

    const response = await fetch(url);
    const { genres, overview, poster_path, title, vote_average, name, number_of_episodes, tagline } = await response.json();

    const details = {
        title: media === 'movie' ? title : name,
        episodes: media === 'tv' ? number_of_episodes : undefined,
        genres: genres,
        overview: overview,
        image: poster_path ? imageUrl + poster_path : noPoster,
        vote_average: vote_average,
        tagline: tagline,
    };

    return details
};

export const getTrailer = async (id, media) => {
    const url = `${urlBase}${media}/${id}/videos?api_key=${apiKey}`;


    const youtubeUrl = "https://www.youtube.com/watch?v=";
    const vimeoUrl = "https://vimeo.com/";

    const response = await fetch(url);
    const { results } = await response.json();

    const trailerInfo = results[0]
    const { site, key } = trailerInfo; 

    let trailerUrl = site === "YouTube" ? youtubeUrl + key : vimeoUrl + key;

    return trailerUrl;
}