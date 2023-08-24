const noImage = "./assets/noposter.jpg";

const apiKey = "5b3461092f4ccb300dea691302e0fc8d";
const urlBase = "https://api.themoviedb.org/3/"

const imageUrl = `https://image.tmdb.org/t/p/w500/`

export const searchMovies = async (query) => {
    const url = `${urlBase}search/movie?query=${query}&include_adult=false&language=en-US&api_key=${apiKey}&page=1`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error de conexión');
        }
        const { results } = await response.json();

        const movieDetails = results.map((movieResult) => ({
            title: movieResult.title.length > 40
            ? movieResult.title.substring(0, 39) + '...'
            : movieResult.title,
            image: movieResult.poster_path ? imageUrl + movieResult.poster_path : noImage,
            id: movieResult.id,
            className: "-search"
        }));

        return movieDetails;
    } catch (error) {
        console.error('Error al obtener resultados:', error);
        return [];
    }
};

export const getPopularMovies = async () => {
    const url = `${urlBase}movie/popular?page=1'&api_key=${apiKey}`

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error de conexión")
        }
        const { results } = await response.json()

        const popularMovies = results
            .slice(0, 6)
            .map((popularMovie) => ({
                title: popularMovie.title.length > 40
                ? popularMovie.title.substring(0, 39) + '...'
                : popularMovie.title,
                image: popularMovie.backdrop_path ? imageUrl + popularMovie.backdrop_path : noImage,
                id: popularMovie.id,
                className: "-popular"
            })
            );

        return popularMovies;

    } catch (error) {
        console.error('Error al obtener resultados:', error);
        return [];
    }

} 