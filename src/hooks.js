import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const resData = await res.json();
      setData(resData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [url, fetchData]);
  return { loading, data };
};
