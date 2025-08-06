import { useState, useEffect } from "react";
import axios from "axios";

// ✅ Export BASE_URL so other files can import it
export const BASE_URL = "https://hotel-backend-gzn1.onrender.com/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}${endpoint}`);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [endpoint]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}${endpoint}`);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
