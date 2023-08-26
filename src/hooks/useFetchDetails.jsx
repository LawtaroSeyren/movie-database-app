import { useState, useEffect } from 'react';


const useFetchDetails = (fx, id, media) => {
    const [mediaDetails, setMediaDetails] = useState("");

    const fetchData = async () =>{
        const details  = await fx(id, media);
        setMediaDetails(details);
    }

    useEffect(() => {
      fetchData();
    }, [id, media])
    

  return mediaDetails
}

export default useFetchDetails