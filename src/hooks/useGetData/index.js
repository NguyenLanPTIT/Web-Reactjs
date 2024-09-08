import { useEffect, useState } from 'react';

const useGetData = (
  endpoint,
  params = {},
  successCallback = (data) => {},
  failCallback = (error) => {}
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = new URL(endpoint);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        if (successCallback) successCallback(jsonData);
      } catch (e) {
        setError(e);
        if (failCallback) failCallback(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, params]);  

  return { data, loading, error };
};

export default useGetData;