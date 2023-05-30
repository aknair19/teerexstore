import React, { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (URL) => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(URL);
        const result = response.data;
        const modifiedData = result.map((data) => ({
          ...data,
          
        }));
        setApiData(modifiedData);
      };

      fetchData();
    } catch (error) {
      setServerError(error);
    } finally {
      setIsLoading(false);
    }
  }, [URL]);

  return { apiData, isLoading, serverError };
};

export default useFetch;
