import { useEffect, useState } from 'react';

const useFetch = ( fx, value ) => {

  const [movieResults, setMovieResults] = useState([]);
const [isLoading, setIsLoading] = useState(true)

    const fetchMovies = async () => {
        setIsLoading(true);
        const results = await fx( value );
        setMovieResults(results);
        setIsLoading(false);
    };

    if (value === "no") {
        useEffect(() => {
            fetchMovies();
        }, []) } else {

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