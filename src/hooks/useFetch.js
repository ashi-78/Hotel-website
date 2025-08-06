import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://hotel-backend-gzn1.onrender.com/api";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // null instead of false

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}${url}`);
      setData(res.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const reFetch = () => {
    fetchData();
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
