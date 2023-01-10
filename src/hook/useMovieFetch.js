import  { useState, useEffect } from "react";
export  const useMovieFetch = (url, options) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null);
  useEffect(() => {
    const doFetch = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (e) {
        setError(e);
      }
    };
      doFetch();
  }, [url, options]);
  return { response, error };
};
