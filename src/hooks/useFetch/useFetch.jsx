import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios(url, options);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [url]);
  
    return { data, error, loading, refetch: fetchData }; // Добавлен метод refetch.
  };  

export default useFetch;
