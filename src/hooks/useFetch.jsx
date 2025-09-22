import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(null);


    useEffect(() => {
        setLoading(true);
        axios.get(url)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            })
    }, [url]);

    return { data, loading, error };

};

export default useFetch;
