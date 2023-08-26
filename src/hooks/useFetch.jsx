import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useFetch = ( index, media, fx, value ) => {

    const location = useLocation();

    const [movieResults, setMovieResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    //Declaro función fetchMovies
    const fetchMovies = async () => {

        //primero setea el valor de isLoading en verdadero
        setIsLoading(true);

        //Obtiene resultados por parte de la función enviada como argumento desde .App.jsx (en caso de que se haya hecho una busqueda) pasandole el argumento value (input de búsqueda)
        //También puede haber sido recibida desde PopularMovies, el cual solo se ejecuta si no se realizó ninguna búsqueda y por tanto el valor 
        //Cualquiera de las funciones que se le envíe como argumento devuelve un array.
        const results = await fx(index, media, value);

        //Agrego ese array al estado de movieResults
        setMovieResults(results);

        //isLoading en falso
        setIsLoading(false);
    };

    if (value == undefined) {
        useEffect(() => {
            fetchMovies();
        }, [location])
    } else {
        useEffect(() => {
            fetchMovies();
        }, [value]);
    }






    return {
        movieResults,
        isLoading,
        fetchMovies
    }

}

export default useFetch