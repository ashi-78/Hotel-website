import { useState, useEffect } from "react";
import axios from "axios";

// ✅ Live backend base URL
const BASE_URL = "https://hotel-backend-gzn1.onrender.com/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      // ✅ Full URL request
      const res = await axios.get(`${BASE_URL}${endpoint}`);
      setData(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch when `endpoint` changes
  useEffect(() => {
    if (!endpoint) return; // Prevent calling with empty URL
    fetchData();
  }, [endpoint]);

  // ✅ Return data & reFetch function
  return { data, loading, error, reFetch: fetchData };
};

export default useFetch;
