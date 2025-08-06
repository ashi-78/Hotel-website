import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { BASE_URL } from "../../hooks/useFetch";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, credentials);

      // ✅ Merge details and isAdmin into one object
      dispatch({ 
        type: "LOGIN_SUCCESS", 
        payload: { ...res.data.details, isAdmin: res.data.isAdmin } 
      });

      navigate("/home");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="food-login-container">
        <div className="food-login-card">
          <div className="food-login-header">
            <h2>Welcome Back</h2>
            <p>Sign in to your foodie account</p>
          </div>

          <form className="food-login-form">
            <div className="food-input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={handleChange}
                placeholder="Enter your username"
              />
              <span className="food-input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
            </div>

            <div className="food-input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={handleChange}
                placeholder="Enter your password"
              />
              <span className="food-input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </span>
            </div>

            <button 
              disabled={loading} 
              onClick={handleClick} 
              className="food-login-button"
            >
              {loading ? (
                <span className="food-button-loader"></span>
              ) : (
                "Sign In"
              )}
            </button>

            {error && <div className="food-error-message">{error.message}</div>}

            <div className="food-login-footer">
              <p>Don't have an account? <Link to="/register">Sign up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
